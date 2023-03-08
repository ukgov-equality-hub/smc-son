import os
from pathlib import Path
import requests
import csv
from flask import Blueprint, current_app, render_template, request, session, Response, abort
#from son.catalogue.forms import Form
from son.utils.menu import menu, get_item_title
from son.utils.logger import LogLevel, Logger

son = Blueprint('son', __name__)
logger = Logger()


def get_content(domain, subdomain=None, indicator=None):
    content = []
    if indicator is not None:
        file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}.md"
    elif subdomain is not None:
        file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}.md"
    else:
        file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}.md"

    if Path(file_path).is_file():
        f = open(file_path, 'r')
        current_section = ''
        current_content = ''
        for line in f:
            if len(line) > 2 and line[:2] == '##':
                if current_section != '':
                    content.append([current_section, current_content])
                    current_section = ''
                    current_content = ''
                current_section = line[2:].strip()
            elif line.strip() != '':
                if current_content != '': current_content += "\r\n"
                current_content += line.strip()

        if current_section != '':
            content.append([current_section, current_content])

        f.close()

    for index in range(len(content)):
        if content[index][1][:1] == '#':
            current_subsection = ''
            current_subcontent = ''
            current_section = []
            items = content[index][1].split("\r\n")
            for item in items:
                if len(item) > 1 and item[:1] == '#':
                    if current_subsection != '':
                        current_section.append(['Subtitle', current_subsection])
                        current_section.append(['Text', current_subcontent])
                        current_subsection = ''
                        current_subcontent = ''
                    current_subsection = item[1:].strip()
                elif item.strip() != '':
                    if current_subcontent != '': current_subcontent += "\r\n"
                    current_subcontent += item.strip()

            if current_subsection != '':
                current_section.append(['Subtitle', current_subsection])
                current_section.append(['Text', current_subcontent])

            content[index][1] = current_section

    return content


@son.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        pass

    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Welcome',
        form=None
    )


@son.route('/<domain>', methods=['GET'])
def domain_page(domain):
    return render_template(
        'domain/domain.html',
        menu=menu,
        domain=domain,
        subdomain=None,
        indicator=None,
        title=get_item_title(domain),
        content=get_content(domain),
        form=None
    )


@son.route('/<domain>/<subdomain>', methods=['GET'])
def subdomain_page(domain, subdomain):
    return render_template(
        'subdomain/subdomain.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=None,
        title=get_item_title(subdomain),
        content=get_content(domain, subdomain),
        form=None
    )


@son.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page(domain, subdomain, indicator):
    content = get_content(domain, subdomain, indicator)
    data_src = ''
    map_src = ''
    map_options = ''
    chart_src = ''
    chart_options = ''
    AllUK_chart_src = ''
    AllUK_chart_options = ''
    Region_map_src = ''
    Region_map_data_src = ''
    Region_map_options = ''
    Region_chart_src = ''
    Region_chart_options = ''

    data_table = []
    for item in content:
        if item[0] == 'Data Table':
            for index in range(len(item[1])):
                if item[1][index][1] == 'data-src':
                    data_src = f"{os.path.dirname(os.path.realpath(__file__))}/..{item[1][index + 1][1].replace('data-src:', '').strip()}"
                    if Path(data_src).is_file():
                        with open(data_src, encoding='utf8', errors='ignore') as csv_file:
                            data_table = list(csv.reader(csv_file, delimiter=','))

        elif item[0] == 'Map':
            for index in range(len(item[1])):
                if item[1][index][1] == 'map-src':
                    map_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'options':
                    map_options = item[1][index + 1][1].strip()

        elif item[0] == 'Chart':
            for index in range(len(item[1])):
                if item[1][index][1] == 'data-src':
                    chart_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'options':
                    chart_options = item[1][index + 1][1].strip()

        elif item[0] == 'AllUK':
            for index in range(len(item[1])):
                if item[1][index][1] == 'chart-src':
                    AllUK_chart_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'chart-options':
                    AllUK_chart_options = item[1][index + 1][1].strip()

        elif item[0] == 'Region':
            for index in range(len(item[1])):
                if item[1][index][1] == 'map-src':
                    Region_map_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'map-data-src':
                    Region_map_data_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'map-options':
                    Region_map_options = item[1][index + 1][1].strip()
                if item[1][index][1] == 'chart-src':
                    Region_chart_src = item[1][index + 1][1].strip()
                if item[1][index][1] == 'chart-options':
                    Region_chart_options = item[1][index + 1][1].strip()

    return render_template(
        'indicator/indicator.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        title=get_item_title(indicator),
        content=content,
        data_src=data_src[data_src.index('..') + 2:] if '..' in data_src else data_src,
        map_src=map_src,
        map_options=map_options,
        chart_src=chart_src,
        chart_options=chart_options,
        AllUK_chart_src=AllUK_chart_src,
        AllUK_chart_options=AllUK_chart_options,
        Region_map_src=Region_map_src,
        Region_map_data_src=Region_map_data_src,
        Region_map_options=Region_map_options,
        Region_chart_src=Region_chart_src,
        Region_chart_options=Region_chart_options,
        data_table=data_table,
        form=None
    )


@son.route('/output/', defaults={'page_path': ''}, methods=['GET'])
@son.route('/output/<path:page_path>', methods=['GET'])
def output(page_path):
    print(page_path, flush=True)

    #if page_path is None or page_path == '':
    #    page_path = 'index.html'
    #if page_path.endswith('/'):
    #    page_path = page_path + 'index.html'

    response = Response('', 401)
    abort(response)
