from flask import Blueprint, render_template
from son.utils.menu import menu

shared = Blueprint('shared', __name__)


@shared.route('/privacy-policy', methods=['GET'])
def privacy_policy():
    return render_template(
        'shared/privacy-policy.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Privacy policy',
        form=None
    )


@shared.route('/accessibility-statement', methods=['GET'])
def accessibility_statement():
    return render_template(
        'shared/accessibility-statement.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Accessibility statement',
        form=None
    )


@shared.route('/cookies', methods=['GET'])
def cookies():
    return render_template(
        'shared/cookies.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Cookies',
        form=None
    )


@shared.route('/about-our-analysis', methods=['GET'])
def about_our_analysis():
    return render_template(
        'shared/about-our-analysis.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='About our analysis',
        form=None
    )
