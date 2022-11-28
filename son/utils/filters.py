from datetime import datetime
from dateutil import tz
import jinja2
import flask
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
            if item[0] == field:
                return item[1]
    return ''
