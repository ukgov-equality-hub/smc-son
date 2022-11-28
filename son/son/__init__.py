import os
from pathlib import Path
import requests
from flask import Blueprint, current_app, render_template, request, session
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

    print(file_path, flush=True)
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

    print(content, flush=True)
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
    return render_template(
        'indicator/indicator.html',
        menu=menu,
        domain=domain,
        subdomain=subdomain,
        indicator=indicator,
        title=get_item_title(indicator),
        content=get_content(domain, subdomain, indicator),
        form=None
    )
