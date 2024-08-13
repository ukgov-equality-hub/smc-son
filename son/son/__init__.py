import glob
import os
import re
from pathlib import Path
from flask import Blueprint, render_template, abort, redirect, send_file
from son.utils.get_markdown_content import get_markdown_content, get_h1_content
from son.utils.menu import menu, get_item_title, url_link
from son.utils.logger import Logger
from son.utils.page_history import get_page_history, create_page_history_version_for_file, PageHistory, \
    PageHistoryVersion, get_page_replacements, PageReplacements

son = Blueprint('son', __name__)
logger = Logger()


@son.route('/drivers_of_social_mobility/research_and_development_environment/university_research_students', methods=['GET'])
def redirect_DR53_university_research_students():
    return redirect("/drivers_of_social_mobility/research_and_development_environment/postgraduate_education")


@son.route('/', methods=['GET'])
def index():
    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Welcome'
    )


@son.route('/health-check', methods=['GET'])
def health_check():
    return 'Health OK'


@son.route('/social_mobility_by_area', methods=['GET'])
def area_home_page():
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/social_mobility_by_area.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, None)

    return render_template(
        'markdown-based-template.html',
        menu=menu,
        area='Social mobility by area',
        domain='social_mobility_by_area',
        selected=[1, 2, 3, 4, 5],
        title=get_item_title('social_mobility_by_area'),
        markdown_to_html=str(content),
        page_title=get_h1_content(content)
    )


@son.route('/social_mobility_by_area/<area>', methods=['GET'])
def area_page(area):
    areas = []
    for a in menu['areas']:
        areas.append(url_link(a['name']))
    areas.sort()
    selected = areas.index(area) + 1
    if selected < 3: selected = 3
    if selected > len(areas) - 2: selected = len(areas) - 2

    return render_template(
        'area/area.html',
        menu=menu,
        area=area,
        domain='social_mobility_by_area',
        selected=[selected - 2, selected - 1, selected, selected + 1, selected + 2],
        title=get_item_title(area)
    )


@son.route('/<domain>', methods=['GET'])
def domain_page(domain):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, None)

    return render_template(
        'markdown-based-template.html',
        menu=menu,
        domain=domain,
        subdomain=None,
        indicator=None,
        markdown_to_html=str(content),
        page_title=get_h1_content(content)
    )


@son.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page_without_version(domain, subdomain, indicator):
    return redirect(f"/{domain}/{subdomain}/{indicator}/latest")


@son.route('/<domain>/<subdomain>/<indicator>/latest', methods=['GET'])
def indicator_page_latest(domain, subdomain, indicator):
    dir_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}"
    if not Path(dir_path).is_dir():
        abort(404)

    md_file_paths = glob.glob(f"{dir_path}/*.*.md")

    md_file_details = []
    for md_file_path in md_file_paths:
        match = re.search(r"/(\d*).(\d*).md$", md_file_path)
        if match:
            md_file_details.append({
                'major_version': int(match.group(1)),
                'minor_version': int(match.group(2))
            })

    if len(md_file_details) == 0:
        abort(404)

    md_file_details.sort(key=lambda x: (x['major_version'], x['minor_version']), reverse=True)
    latest_major_version = md_file_details[0]['major_version']
    latest_minor_version = md_file_details[0]['minor_version']
    
    return get_indicator_page(domain, subdomain, indicator, latest_major_version, latest_minor_version)


@son.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>', methods=['GET'])
def indicator_page_with_version(domain, subdomain, indicator, major_version, minor_version):
    return get_indicator_page(domain, subdomain, indicator, int(major_version), int(minor_version))


@son.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>/<csv_file_name>.csv', methods=['GET'])
def csv_file_download(domain, subdomain, indicator, major_version, minor_version, csv_file_name):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}/{csv_file_name}.csv"
    return send_file(file_path)


def get_indicator_page(domain: str, subdomain: str, indicator: str, major_version: int, minor_version: int):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, indicator)
    page_history: PageHistory = get_page_history(domain, subdomain, indicator)
    page_history_version: PageHistoryVersion = create_page_history_version_for_file(major_version, minor_version, file_path)
    page_replacements: PageReplacements = get_page_replacements(domain, subdomain, indicator)

    return render_template(
        'markdown-based-template.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        major_version=major_version,
        minor_version=minor_version,
        markdown_to_html=str(content),
        page_history=page_history,
        page_history_version=page_history_version,
        page_title=page_history_version.title,
        page_replacements=page_replacements
    )
