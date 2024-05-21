import os
from pathlib import Path
from flask import Blueprint, render_template, abort
from son.utils.get_markdown_content import get_markdown_content, get_h1_content
from son.utils.menu import menu, get_item_title, url_link
from son.utils.logger import Logger

son = Blueprint('son', __name__)
logger = Logger()


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
        h1_content=get_h1_content(content)
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
        h1_content=get_h1_content(content)
    )


@son.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page_without_version(domain, subdomain, indicator):
    return get_indicator_page(domain, subdomain, indicator, 1, 0)


@son.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>', methods=['GET'])
def indicator_page_with_version(domain, subdomain, indicator, major_version, minor_version):
    return get_indicator_page(domain, subdomain, indicator, major_version, minor_version)


def get_indicator_page(domain, subdomain, indicator, major_version, minor_version):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_markdown_content(file_path, indicator)

    return render_template(
        'markdown-based-template.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        markdown_to_html=str(content),
        h1_content=get_h1_content(content)
    )
