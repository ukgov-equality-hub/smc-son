import requests
from flask import Blueprint, current_app, render_template, request, session
#from son.catalogue.forms import Form
from son.utils.logger import LogLevel, Logger

homepage = Blueprint('homepage', __name__)
logger = Logger()


@homepage.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        pass

    return render_template(
        'homepage/homepage.html',
        form=None
    )
