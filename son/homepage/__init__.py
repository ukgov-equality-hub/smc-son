import requests
from flask import Blueprint, current_app, render_template, request, session
#from son.catalogue.forms import Form
from son.utils.menu import menu, get_item_title
from son.utils.logger import LogLevel, Logger

homepage = Blueprint('homepage', __name__)
logger = Logger()


@homepage.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        pass

    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain='Mobility outcomes',
        subdomain='',
        indicator='Absolute housing mobility - LS',
        title='Welcome',
        form=None
    )


@homepage.route('/<domain>', methods=['GET'])
def domain_page(domain):
    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain=domain,
        subdomain=None,
        indicator=None,
        title=get_item_title(domain),
        form=None
    )


@homepage.route('/<domain>/<subdomain>', methods=['GET'])
def subdomain_page(domain, subdomain):
    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=None,
        title=get_item_title(subdomain),
        form=None
    )


@homepage.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page(domain, subdomain, indicator):
    return render_template(
        'homepage/homepage.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        title=get_item_title(indicator),
        form=None
    )
