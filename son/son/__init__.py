import csv
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
def area_home_page_without_version():
    return redirect("/social_mobility_by_area/latest")


@son.route('/social_mobility_by_area/latest', methods=['GET'])
def area_home_page_latest():
    dir_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/social_mobility_by_area"
    latest_major_version, latest_minor_version = get_latest_md_file_in_directory(dir_path)
    return get_area_home_page(latest_major_version, latest_minor_version)


@son.route('/social_mobility_by_area/<major_version>.<minor_version>', methods=['GET'])
def area_home_page_with_version(major_version, minor_version):
    return get_area_home_page(int(major_version), int(minor_version))


def get_area_home_page(major_version: int, minor_version: int):
    dir_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/social_mobility_by_area"
    file_path = f"{dir_path}/{major_version}.{minor_version}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, None)
    page_history: PageHistory = get_page_history(dir_path)
    page_history_version: PageHistoryVersion = create_page_history_version_for_file(major_version, minor_version, file_path)

    return render_template(
        'markdown-based-template.html',
        menu=menu,
        area='Social mobility by area',
        domain='social_mobility_by_area',
        selected=[1, 2, 3, 4, 5],
        title=get_item_title('social_mobility_by_area'),
        major_version=major_version,
        minor_version=minor_version,
        markdown_to_html=str(content),
        page_history=page_history,
        page_history_version=page_history_version,
        page_title=page_history_version.title
    )


@son.route('/social_mobility_by_area/<area>', methods=['GET'])
def area_page(area):
    return redirect(f"/social_mobility_by_area/ITL2_regions/{area}")


@son.route('/social_mobility_by_area/ITL2_regions/<area>', methods=['GET'])
def area_page_ITL2(area):
    areas = []
    for a in menu['areas']:
        areas.append(url_link(a['name']))
    areas.sort()
    selected = areas.index(area) + 1
    if selected < 3: selected = 3
    if selected > len(areas) - 2: selected = len(areas) - 2

    return render_template(
        'area/ITL2.html',
        menu=menu,
        area=area,
        domain='social_mobility_by_area',
        selected=[selected - 2, selected - 1, selected, selected + 1, selected + 2],
        title=get_item_title(area)
    )


@son.route('/social_mobility_by_area/203_regions/<area>', methods=['GET'])
def area_page_203_regions(area):

    def get_row_from_csv_file(csv_file_path, column_name, search_value):
        with open(csv_file_path, encoding='utf-8-sig', errors='ignore') as csv_file:
            reader = csv.DictReader(csv_file)

            for row in reader:
                if row[column_name] == search_value:
                    return row
        return None

    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/social_mobility_by_area/2.0/composite-indices-2.0--all.csv"
    row_for_region = get_row_from_csv_file(file_path, 'region_url', area)
    if row_for_region is None:
        abort(404)

    row_for_region['childhood_conditions_group_name'] = row_for_region['childhood_conditions_group_name'].lower().replace('group', '').rstrip()
    row_for_region['innovation_and_growth_group_name'] = row_for_region['innovation_and_growth_group_name'].lower().replace('group', '').rstrip()
    row_for_region['labour_market_opportunities_group_name'] = row_for_region['labour_market_opportunities_group_name'].lower().replace('group', '').rstrip()
    row_for_region['promising_prospects_group_name'] = row_for_region['promising_prospects_group_name'].lower().replace('group', '').rstrip()

    return render_template(
        'area/203_regions.html',
        menu=menu,
        area=area,
        domain='social_mobility_by_area',
        title=row_for_region['region_fullname'],
        row_for_region=row_for_region
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
    latest_major_version, latest_minor_version = get_latest_md_file_in_directory(dir_path)
    return get_indicator_page(domain, subdomain, indicator, latest_major_version, latest_minor_version)


@son.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>', methods=['GET'])
def indicator_page_with_version(domain, subdomain, indicator, major_version, minor_version):
    return get_indicator_page(domain, subdomain, indicator, int(major_version), int(minor_version))


@son.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>/<csv_file_name>.csv', methods=['GET'])
def csv_file_download(domain, subdomain, indicator, major_version, minor_version, csv_file_name):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}/{csv_file_name}.csv"
    return send_file(file_path)


def get_latest_md_file_in_directory(dir_path):
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
    return latest_major_version, latest_minor_version


def get_indicator_page(domain: str, subdomain: str, indicator: str, major_version: int, minor_version: int):
    dir_path: str = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}"
    file_path = f"{dir_path}/{major_version}.{minor_version}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, indicator)
    page_history: PageHistory = get_page_history(dir_path)
    page_history_version: PageHistoryVersion = create_page_history_version_for_file(major_version, minor_version, file_path)
    page_replacements: PageReplacements = get_page_replacements(dir_path)

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
