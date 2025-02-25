import os.path
import customblocks
import markdown, markdown.extensions.toc
from bs4 import BeautifulSoup
from flask import render_template


def get_markdown_header(file_path: str):
    f = open(file_path, 'r')
    markdown_text = f.read()
    f.close()

    md = markdown.Markdown(extensions=['full_yaml_metadata'])
    md.convert(markdown_text)

    return md.Meta


def get_markdown_content(file_path: str, indicator: str):
    f = open(file_path, 'r')
    markdown_text = f.read()
    f.close()

    markdown_file_parent_directory = os.path.dirname(file_path)

    html = convert_markdown_to_html(markdown_text, indicator, markdown_file_parent_directory)

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


def convert_markdown_to_html(markdown_text, indicator, markdown_file_parent_directory):
    current_tabs_list = []
    next_data_table_or_chart_id = ['']

    def hint_generator(ctx):
        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/hint.html',
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def inset_text_generator(ctx, classes=''):
        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/inset-text.html',
            classes=classes,
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def details_generator(ctx, summary):
        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/details.html',
            summary=summary,
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def warning_generator(ctx, title='Warning'):
        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/warning.html',
            title=title,
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def tabs_generator(ctx):
        current_tabs_list.clear()

        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/tabs.html',
            tabs_data=current_tabs_list,
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def tab_generator(ctx, section_name, tab_name):
        tab_data = {
            'section_name': section_name.replace("(", "").replace(")", ""),
            'tab_name': tab_name.replace("(", "").replace(")", "")
        }
        current_tabs_list.append(tab_data)

        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/tab.html',
            tab_data=tab_data,
            inner_content=inner_content_html
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def visualisation_generator(ctx, vis_type, section_name):
        md_inner = markdown.Markdown(extensions=[custom_blocks_extensions, 'attr_list', 'sane_lists'])
        inner_content_html = md_inner.convert(ctx.content)

        rendered_html = render_template(
            'components/visualisation.html',
            id=len(next_data_table_or_chart_id),
            type=vis_type,
            data=[['Src', ctx.content]],
            guidance=inner_content_html,
            indicator=indicator,
            section=section_name,
            markdown_file_parent_directory=markdown_file_parent_directory
        )
        next_data_table_or_chart_id.append('')
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def data_table_generator(ctx):
        rendered_html = render_template(
            'components/data-table.html',
            id=len(next_data_table_or_chart_id),
            data=[['Src', ctx.content]],
            markdown_file_parent_directory=markdown_file_parent_directory
        )
        next_data_table_or_chart_id.append('')
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def download_full_dataset_link_generator(ctx, data_file):
        rendered_html = render_template(
            'components/download-full-dataset-link.html',
            data_file=data_file,
            markdown_file_parent_directory=markdown_file_parent_directory
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    def download_section_generator(ctx):
        rendered_html = render_template(
            'components/download-section.html'
        )
        prettified_html = BeautifulSoup(rendered_html, 'html.parser').prettify()  # Removes excess blank lines which the outer Markdown parsed will convert into unwanted extras <br>s

        return prettified_html

    custom_blocks_extensions = customblocks.CustomBlocksExtension()
    custom_blocks_extensions.setConfig('generators', {
        'tabs': tabs_generator,
        'tab': tab_generator,
        'data_table': data_table_generator,
        'visualisation': visualisation_generator,
        'download_full_dataset_link': download_full_dataset_link_generator,
        'download_section': download_section_generator,
        'hint': hint_generator,
        'inset_text': inset_text_generator,
        'details': details_generator,
        'warning': warning_generator,
    })
    md = markdown.Markdown(extensions=[markdown.extensions.toc.TocExtension(toc_depth='2-2'), custom_blocks_extensions, 'attr_list','sane_lists','full_yaml_metadata'])

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
