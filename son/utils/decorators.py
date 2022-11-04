from functools import wraps
from flask import g, request, abort, url_for, current_app, request, session
from son.utils.redirect import local_redirect
from son.utils.logger import LogLevel, Logger

logger = Logger()


def DataRequired(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if 'file' not in session or session['file'] is None:
            logger.log(LogLevel.WARN, f"No available data for {request.host_url}")
            return local_redirect(url_for('homepage.index'))
        return f(*args, **kwargs)
    return decorated_function


def JobTokenRequired(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if request.args.get('token') != current_app.config['JOB_TOKEN']:
            logger.log(LogLevel.WARN, f"(JobTokenRequired) An unknown user has attempted to access {request.host_url}")
            return abort(403)
        return f(*args, **kwargs)
    return decorated_function
