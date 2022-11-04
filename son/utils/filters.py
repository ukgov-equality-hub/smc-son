from datetime import datetime
from dateutil import tz
import jinja2
import flask

blueprint = flask.Blueprint('filters', __name__)


@jinja2.pass_context
@blueprint.app_template_filter('format_date')
def format_date_filter(context, dt):
    if dt:
        dt = dt.replace(tzinfo=tz.gettz('UTC')).astimezone(tz.gettz('Europe/London'))
        return datetime.strftime(dt, '%d/%m/%Y %H:%M')
    return ''
