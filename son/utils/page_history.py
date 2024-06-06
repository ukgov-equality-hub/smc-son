import datetime
import glob
import os
import re
from typing import List

from son.utils.get_markdown_content import get_markdown_header


class PageHistoryVersion:
    def __init__(self):
        self.major_version: int = None
        self.minor_version: int = None

        self.title: str = None
        self.date: datetime.date = None
        self.change_history: str = None


class PageHistory:
    def __init__(self):
        self.all_versions: List[PageHistoryVersion] = []

    def get_revisions_for_major_version(self, major_version: int) -> List[PageHistoryVersion]:
        return [phv for phv in self.all_versions if phv.major_version == major_version]

    def get_first_minor_version_for_major_version(self, major_version: int) -> PageHistoryVersion:
        revisions_for_major_version = self.get_revisions_for_major_version(major_version)
        revisions_for_major_version.sort(key=lambda phv: phv.minor_version)
        return revisions_for_major_version[0]

    def get_latest_minor_version_for_major_version(self, major_version: int) -> PageHistoryVersion:
        revisions_for_major_version = self.get_revisions_for_major_version(major_version)
        revisions_for_major_version.sort(key=lambda phv: phv.minor_version, reverse=True)
        return revisions_for_major_version[0]

    def get_original_minor_version_for_every_major_version(self) -> List[PageHistoryVersion]:
        all_major_versions = [phv.major_version for phv in self.all_versions]
        unique_major_versions = list(set(all_major_versions))
        original_minor_version_for_every_major_version = [self.get_first_minor_version_for_major_version(mv) for mv in unique_major_versions]
        original_minor_version_for_every_major_version.sort(key=lambda phv: phv.major_version, reverse=True)
        return original_minor_version_for_every_major_version

    def is_only_one_major_version(self) -> bool:
        all_major_versions = [phv.major_version for phv in self.all_versions]
        unique_major_versions = list(set(all_major_versions))
        return len(unique_major_versions) == 1

    def is_only_one_minor_version_for_major_version(self, major_version: int) -> bool:
        return len(self.get_revisions_for_major_version(major_version)) == 1

    def is_latest_version(self, major_version: int, minor_version: int) -> bool:
        all_versions = [phv for phv in self.all_versions]
        all_versions.sort(key=lambda phv: (phv.major_version, phv.minor_version), reverse=True)
        latest_version = all_versions[0]
        return major_version == latest_version.major_version and minor_version == latest_version.minor_version


def get_page_history(domain: str, subdomain: str, indicator: str) -> PageHistory:
    dir_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}"

    md_file_paths = glob.glob(f"{dir_path}/*.*.md")

    page_history = PageHistory()
    for md_file_path in md_file_paths:
        match = re.search(r"/(\d*).(\d*).md$", md_file_path)
        if match:
            page_history_version = create_page_history_version_for_file(
                major_version=int(match.group(1)),
                minor_version=int(match.group(2)),
                file_path=md_file_path)
            page_history.all_versions.append(page_history_version)

    page_history.all_versions.sort(key=lambda phv: (phv.major_version, phv.minor_version), reverse=True)
    return page_history


def create_page_history_version_for_file(major_version: int, minor_version: int, file_path: str) -> PageHistoryVersion:
    page_history_version = PageHistoryVersion()
    page_history_version.major_version = major_version
    page_history_version.minor_version = minor_version

    header = get_markdown_header(file_path)
    page_history_version.title = header['title']
    page_history_version.date = header['date']
    page_history_version.change_history = header['change_history']

    return page_history_version
