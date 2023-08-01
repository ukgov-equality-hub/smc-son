from datetime import datetime
from dateutil import tz
import os
from pathlib import Path
import csv
import jinja2
import flask
import json
from son.utils.menu import url_link, get_menu_tree

blueprint = flask.Blueprint('filters', __name__)


@jinja2.pass_context
@blueprint.app_template_filter('format_date')
def format_date_filter(context, dt):
    if dt:
        dt = dt.replace(tzinfo=tz.gettz('UTC')).astimezone(tz.gettz('Europe/London'))
        return datetime.strftime(dt, '%d/%m/%Y %H:%M')
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('url_link')
def url_link_filter(context, link):
    if link:
        return url_link(link)
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('menuitem_isactive')
def menuitem_isactive_filter(context, details):
    if details:
        itemname = details[0]
        selected = details[1]

        if url_link(itemname) == url_link(selected):
            return ' is-active'
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('menuitem_isopen')
def menuitem_isopen_filter(context, details):
    if details:
        menu = details[0]
        itemname = details[1]
        selected = details[2]
        tree = get_menu_tree(menu, selected)

        if itemname in tree:
            return ' is-open'
        return ''
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('content')
def content_filter(context, details):
    if details:
        content = details[0]
        field = details[1]
        for item in content:
            if isinstance(item[1], list):
                if item[0][0] == field:
                    return item[0][1]
                elif item[1][0] == field:
                    return item[1][1]
            else:
                if item[0] == field:
                    return item[1]
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('content_list')
def content_list_filter(context, details):
    if details:
        content = details[0]
        field = details[1]
        try:
            for item in content:
                if isinstance(item, list):
                    if item[0] == field:
                        return item[1]
        except:
            pass
    return details[0] if details[1] == 'Src' else ''


@jinja2.pass_context
@blueprint.app_template_filter('attribute')
def attribute_filter(context, details):
    if details:
        data = content_list_filter(context, [details[0], 'Src'])
        field = details[1]
        try:
            attributes = json.loads(data)
            if field in attributes:
                return attributes[field]
        except:
            pass
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('attribute_type')
def attribute_type_filter(context, details):
    if details:
        data = content_list_filter(context, [details[0], 'Src'])
        field = details[1]
        try:
            attributes = json.loads(data)
            if field in attributes:
                if type(attributes[field]) == tuple: return 'tuple'
                if type(attributes[field]) == list: return 'list'
                if type(attributes[field]) == dict: return 'dict'
                return 'str'
        except:
            pass
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('latest_data')
def latest_data_filter(context, details):
    if details:
        data = content_list_filter(context, [details[0], 'Src'])
        field = details[1]
        try:
            attributes = json.loads(data)
            if field in attributes:
                if type(attributes[field]) == list:
                    attributes[field] = attributes[field][-1]
                    return attributes
        except:
            pass
    return details[0]


@jinja2.pass_context
@blueprint.app_template_filter('table')
def table_filter(context, details):
    if details:
        data = content_list_filter(context, [details[0], 'Src'])
        field1 = details[1]
        field2 = details[2] if len(details) > 2 else ''
        try:
            attributes = json.loads(data)
            file_path = ''
            if field1 in attributes:
                file_path = attributes[field1]
            elif field2 in attributes:
                file_path = attributes[field2]

            if file_path != '':
                if type(file_path) == list and 'data' in file_path[-1]:
                    file_path = file_path[-1]['data']
                file_path = file_path.replace('data-src:', '').strip()
                data_src = f"{os.path.dirname(os.path.realpath(__file__))}/..{file_path}"
                if Path(data_src).is_file():
                    with open(data_src, encoding='utf-8-sig', errors='ignore') as csv_file:
                        data_table = list(csv.reader(csv_file, delimiter=','))
                        return data_table
        except:
            pass
    return ''


@jinja2.pass_context
@blueprint.app_template_filter('file_size')
def file_size(context, details):
    if details:
        file_path = ''
        file_size = -1
        if type(details) == list:
            data = content_list_filter(context, [details[0], 'Src'])
            field1 = details[1]
            field2 = details[2] if len(details) > 2 else ''
            try:
                attributes = json.loads(data)
                if field1 in attributes:
                    file_path = attributes[field1]
                elif field2 in attributes:
                    file_path = attributes[field2]
            except:
                pass
        else:
            file_path = details

        if file_path != '':
            if type(file_path) == list and 'data' in file_path[-1]:
                file_path = file_path[-1]['data']
            file_path = file_path.replace('data-src:', '').strip()
            data_src = f"{os.path.dirname(os.path.realpath(__file__))}/..{file_path}"
            if Path(data_src).is_file():
                file_size = os.path.getsize(data_src)

        if file_size > -1:
            if file_size > 1000000: file_size = f"{int(file_size / 1000000)}MB"
            elif file_size > 1000: file_size = f"{int(file_size / 1000)}KB"
            else: file_size = f"{int(file_size)}B"
            return file_size
    return ''
