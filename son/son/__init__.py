import os
from pathlib import Path
import re
import csv
import customblocks
from customblocks.utils import Markdown
from flask import Blueprint, current_app, render_template, request, session, Response, abort
import markdown, markdown.extensions.toc
from bs4 import BeautifulSoup
from son.utils.menu import menu, get_item_title, url_link
from son.utils.logger import LogLevel, Logger

son = Blueprint('son', __name__)
logger = Logger()


def get_content(domain, subdomain=None, indicator=None, use_markdown=True, print_output=False):
    def format_html(html):
        if not use_markdown: return html
        #html = markdown.markdown(html + "\n{: .govuk-body }", extensions=['nl2br', 'attr_list', 'sane_lists'])
        #return html

        if '[Download full dataset (CSV)]' in html:
            file_size = -1
            matches = re.findall('\(.*?\)', html)
            try:
                data_src = f"{os.path.dirname(os.path.realpath(__file__))}/..{matches[1][1: -1]}"
                if Path(data_src).is_file():
                    file_size = os.path.getsize(data_src)
                    with open(data_src, encoding='utf8', errors='ignore') as csv_file:
                        data_table = list(csv.reader(csv_file, delimiter=','))
                        ul = '<ul>'

                        for i in range(len(data_table[0])):
                            item = data_table[0][i].replace('Ind_', 'Indicator ').replace('SEB', 'Socio-economic background').replace('LCI', 'Lower confidence interval').replace('UCI', 'Upper confidence interval').replace('SE', 'Standard error').replace('_', ' ')
                            include = False

                            for j in range(len(data_table)):
                                if j > 0:
                                    if data_table[j][i] == "NA" or data_table[j][i] == "N/A" or data_table[j][i] == "N\A":
                                        pass
                                    else:
                                        include = True
                                        break

                            if include:
                                ul += f"<li>{item}</li>"
                            #else:
                            #    ul += f"<li>{item} (NA)</li>"

                        ul += '</ul>'
                        if ul != '<ul></ul>': ul = '<p>This file contains the following variables:</p>' + ul
                        html += ul
            except:
                pass

            if file_size > -1:
                if file_size > 1000000: file_size = f"{int(file_size / 1000000)}MB"
                elif file_size > 1000: file_size = f"{int(file_size / 1000)}KB"
                else: file_size = f"{int(file_size)}B"
                html = html.replace('[Download full dataset (CSV)]', f"[Download full dataset (CSV, {file_size})]")

        html = markdown.markdown(html, extensions=['attr_list', 'sane_lists'])

        soup = BeautifulSoup(html, 'html.parser')
        for el in soup.find_all('p'):
            if el.has_attr('class'):
                el['class'] = ' '.join(el['class']) + ' govuk-body'
            else:
                el['class'] = 'govuk-body'
        for el in soup.find_all('ul'):
            if el.has_attr('class'):
                el['class'] = ' '.join(el['class']) + ' govuk-list govuk-list--bullet'
            else:
                el['class'] = 'govuk-list govuk-list--bullet'
        for el in soup.find_all('ol'):
            if el.has_attr('class'):
                el['class'] = ' '.join(el['class']) + ' govuk-list'
            else:
                el['class'] = 'govuk-list'
        for el in soup.find_all('a'):
            if el.has_attr('class'):
                el['class'] = ' '.join(el['class']) + ' govuk-link'
            else:
                el['class'] = 'govuk-link'

        return str(soup).strip()

    content = []
    newline = '\n' #os.linesep
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

        def update(content, current_section, current_content, new_content):
            if current_section != '':
                content.append(['HTML' if current_section == 'Text' and use_markdown else current_section, format_html(current_content) if current_section == 'Text' else current_content.strip()])
            if new_content:
                content.append(new_content.strip() if type(new_content) == 'str' else new_content)
            return content, '', ''
        
        def trim(content):
            content = content.strip()
            content = content.strip('\t')
            content = content.strip('\n')
            content = content.strip(newline)
            return content

        for line in f:
            if   len(line) > 8 and line[:6] == '######':
                content, current_section, current_content = update(content, current_section, current_content, ['H6', line[6:].strip()])
            elif len(line) > 7 and line[:5] == '#####':
                content, current_section, current_content = update(content, current_section, current_content, ['H5', line[5:].strip()])
            elif len(line) > 6 and line[:4] == '####':
                content, current_section, current_content = update(content, current_section, current_content, ['H4', line[4:].strip()])
            elif len(line) > 5 and line[:3] == '###':
                content, current_section, current_content = update(content, current_section, current_content, ['H3', line[3:].strip()])
            elif len(line) > 4 and line[:2] == '##':
                tag = line[2:].strip()
                if ':' in tag: tag = tag[: tag.index(':')]
                if tag.upper() in ['CODE', 'SUMMARY', 'TITLE', 'SECTION', 'SUBTITLE', 'TEXT', 'HTML', 'TABS', 'GRID', 'ABOUT', 'ABOUT THE DATA', 'MAP', 'CHART', 'PLACEHOLDER']:
                    content, current_section, current_content = update(content, current_section, current_content, None)
                    current_section = tag
                else:
                    content, current_section, current_content = update(content, current_section, current_content, ['H2', line[2:].strip()])
            elif len(line) > 3 and line[:1] == '#' and current_section.upper() not in ['TABS', 'GRID', 'ABOUT', 'ABOUT THE DATA', 'MAP', 'CHART']:
                content, current_section, current_content = update(content, current_section, current_content, ['H1', line[1:].strip()])
            else:
                if current_section == '':
                    current_section = 'Text'
                if current_content != '':
                    current_content += newline
                current_content += line.strip()

        if current_section != '':
            content.append(['HTML' if current_section == 'Text' and use_markdown else current_section, format_html(current_content) if current_section == 'Text' else current_content.strip()])

        f.close()

    for index in range(len(content)):
        if content[index][1][:1] == '#':
            current_subsection = ''
            current_subcontent = ''
            current_section = []
            items = content[index][1].split(newline)
            for item in items:
                if len(item) > 1 and item[:1] == '#':
                    if current_subsection != '':
                        if current_subsection.upper() == 'TITLE':
                            current_section.append(['Title', current_subcontent])
                        elif current_subsection.upper() == 'CHART':
                            current_section.append(['Chart', current_subcontent])
                        elif current_subsection.upper() == 'MAP':
                            current_section.append(['Map', current_subcontent])
                        elif current_subsection.upper() == 'DATATABLE':
                            current_section.append(['DataTable', current_subcontent])
                        elif current_subsection.upper() == 'DOWNLOAD':
                            current_section.append(['Download', current_subcontent])
                        elif current_subsection.upper() == 'TAB':
                            current_section.append(['Tab', current_subcontent])
                        elif current_subsection.upper() == 'SRC':
                            current_section.append(['Src', current_subcontent])
                        elif current_subsection.upper() == 'GUIDANCE':
                            current_section.append(['Guidance', format_html(current_subcontent)])
                        else:
                            current_section.append(['Subtitle', current_subsection])
                            current_section.append(['HTML' if use_markdown else 'Text', format_html(current_subcontent)])

                        current_subsection = ''
                        current_subcontent = ''
                    current_subsection = item[1:].strip()
                else:
                    if current_subcontent != '': current_subcontent += newline
                    current_subcontent += item.strip()

            if current_subsection.upper() == 'TITLE':
                current_section.append(['Title', current_subcontent])
            elif current_subsection.upper() == 'CHART':
                current_section.append(['Chart', current_subcontent])
            elif current_subsection.upper() == 'MAP':
                current_section.append(['Map', current_subcontent])
            elif current_subsection.upper() == 'DATATBALE':
                current_section.append(['DataTable', current_subcontent])
            elif current_subsection.upper() == 'DOWNLOAD':
                current_section.append(['Download', current_subcontent])
            elif current_subsection.upper() == 'TAB':
                current_section.append(['Tab', current_subcontent])
            elif current_subsection.upper() == 'SRC':
                current_section.append(['Src', current_subcontent])
            elif current_subsection.upper() == 'GUIDANCE':
                current_section.append(['Guidance', format_html(current_subcontent)])
            elif current_subsection != '':
                current_section.append(['Subtitle', current_subsection])
                current_section.append(['HTML' if use_markdown else 'Text', format_html(current_subcontent)])

            content[index][1] = current_section

    for index in range(len(content)):
        if content[index][0] == 'Tabs':
            tabs = []
            tab = []
            current_tab = ''

            items = content[index][1]
            for item in items:
                if item[0] == 'Tab':
                    if current_tab != '':
                        tabs.append([current_tab, tab])
                        tab = []
                    current_tab = item[1]
                else:
                    tab.append(item)

            if current_tab != '':
                tabs.append([current_tab, tab])

            content[index][1] = tabs

    if print_output: print(content, flush=True)
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


@son.route('/health-check', methods=['GET'])
def health_check():
    return 'Health OK'


@son.route('/social_mobility_by_area', methods=['GET'])
def area_home_page():
    return render_template(
        'area/homepage.html',
        menu=menu,
        area='Social mobility by area',
        domain='social_mobility_by_area',
        selected=[1, 2, 3, 4, 5],
        title=get_item_title('social_mobility_by_area'),
        content=get_content('social_mobility_by_area', use_markdown=True),
        form=None
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
        title=get_item_title(area),
        content=get_content('social_mobility_by_area', use_markdown=False),
        form=None
    )


@son.route('/<domain>', methods=['GET'])
def domain_page(domain):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_content2(file_path, None)

    return render_template(
        'indicator/indicator-md.html',
        menu=menu,
        domain=domain,
        subdomain=None,
        indicator=None,
        markdown_to_html=str(content),
        h1_content=get_h1_content(content)
    )


@son.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page(domain, subdomain, indicator):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_content(domain, subdomain, indicator)
    data_src = ''

    data_table = []
    for item in content:
        if item[0] == 'Data Table':
            for index in range(len(item[1])):
                if item[1][index][1] == 'data-src':
                    data_src = f"{os.path.dirname(os.path.realpath(__file__))}/..{item[1][index + 1][1].replace('data-src:', '').strip()}"
                    if Path(data_src).is_file():
                        with open(data_src, encoding='utf8', errors='ignore') as csv_file:
                            data_table = list(csv.reader(csv_file, delimiter=','))

    return render_template(
        'indicator/indicator.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        title=get_item_title(indicator),
        tabs=False, #'Tabs' in str(content),
        content=content,
        data_table=data_table,
        form=None
    )


@son.route('/<domain>/<subdomain>/<indicator>2', methods=['GET'])
def indicator_page_md(domain, subdomain, indicator):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/{domain}/{subdomain}/{indicator}2.md"
    if not Path(file_path).is_file():
        abort(404)

    content = get_content2(file_path, indicator)

    return render_template(
        'indicator/indicator-md.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        markdown_to_html=str(content),
        h1_content=get_h1_content(content)
    )


def get_content2(file_path, indicator):
    f = open(file_path, 'r')
    markdown_text = f.read()
    f.close()

    html = convert_markdown_to_html(markdown_text, indicator)

    soup = BeautifulSoup(html, 'html.parser')

    replace_toc_ul_with_ol(soup)
    add_classes_to_elements_with_tag(soup, 'h1', 'govuk-heading-xl')
    add_classes_to_elements_with_tag(soup, 'h2', 'govuk-heading-l')
    add_classes_to_elements_with_tag(soup, 'h3', 'govuk-heading-m govuk-!-margin-bottom-1 govuk-!-padding-top-0')
    add_classes_to_elements_with_tag(soup, 'h4', 'govuk-heading-s govuk-!-margin-bottom-1 govuk-!-padding-top-0')
    add_classes_to_elements_with_tag(soup, 'p', 'govuk-body')
    add_classes_to_elements_with_tag(soup, 'ul', 'govuk-list govuk-list--bullet')
    add_classes_to_elements_with_tag(soup, 'ol', 'govuk-list govuk-list--number')
    add_classes_to_elements_with_tag(soup, 'a', 'govuk-link')
    add_classes_to_elements_with_tag(soup, 'hr', 'govuk-section-break govuk-section-break--l govuk-section-break--visible')

    return soup


def convert_markdown_to_html(markdown_text, indicator):

    current_tabs_list = []
    next_data_table_or_chart_id = ['']

    def tabs_generator(ctx):
        current_tabs_list.clear()

        md2 = markdown.Markdown(extensions=[cbe, 'attr_list', 'sane_lists'])
        html22 = md2.convert(ctx.content)

        html2 = render_template(
            'components/tabs.html',
            tabs_data=current_tabs_list,
            inner_content=html22
        )
        html2 = BeautifulSoup(html2, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html2

    def tab_generator(ctx, section_name, tab_name):
        tab_data = {'section_name': section_name, 'tab_name': tab_name}
        current_tabs_list.append(tab_data)

        md3 = markdown.Markdown(extensions=[cbe, 'attr_list', 'sane_lists'])
        html33 = md3.convert(ctx.content)

        html3 = render_template(
            'components/tab.html',
            tab_data=tab_data,
            inner_content=html33
        )
        html3 = BeautifulSoup(html3, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html3

    def data_table_generator(ctx):
        html4 = render_template(
            'components/data-table2.html',
            id=len(next_data_table_or_chart_id),
            data=[['Src', ctx.content]]
        )
        next_data_table_or_chart_id.append('')
        html4 = BeautifulSoup(html4, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html4

    def download_full_dataset_link_generator(ctx, data_file):
        html6 = render_template(
            'components/download-full-dataset-link.html',
            data_file=data_file
        )
        html6 = BeautifulSoup(html6, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html6

    def download_section_generator(ctx):
        html8 = render_template(
            'components/download-section.html'
        )
        html8 = BeautifulSoup(html8, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html8

    def visualisation_generator(ctx, vis_type, section_name):
        md5 = markdown.Markdown(extensions=[cbe, 'attr_list', 'sane_lists'])
        html55 = md5.convert(ctx.content)

        html5 = render_template(
            'components/visualisation2.html',
            id=len(next_data_table_or_chart_id),
            type=vis_type,
            data=[['Src', ctx.content]],
            guidance=html55,
            indicator=indicator,
            section=section_name
        )
        next_data_table_or_chart_id.append('')
        html5 = BeautifulSoup(html5, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return html5

    cbe = customblocks.CustomBlocksExtension()
    cbe.setConfig('generators', {
        'tabs': tabs_generator,
        'tab': tab_generator,
        'data_table': data_table_generator,
        'visualisation': visualisation_generator,
        'download_full_dataset_link': download_full_dataset_link_generator,
        'download_section': download_section_generator,
    })
    md = markdown.Markdown(extensions=[markdown.extensions.toc.TocExtension(toc_depth='2-2'), cbe, 'attr_list','sane_lists'])

    html = md.convert(markdown_text)

    return html


def replace_toc_ul_with_ol(soup):
    for tocElement in soup.select('div.toc ul'):
        tocElement.name = 'ol'


def add_classes_to_elements_with_tag(soup, tag, classes_to_add):
    for element in soup.find_all(tag):
        if element.has_attr('class'):
            element['class'] = (' '.join(element['class'])) + ' ' + classes_to_add
        else:
            element['class'] = classes_to_add


def get_h1_content(soup):
    return soup.h1.string
