from flask import Blueprint, render_template
from son.utils.menu import menu

policies = Blueprint('policies', __name__)


@policies.route('/privacy-policy', methods=['GET'])
def privacy_policy():
    return render_template(
        'policies/privacy-policy.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Privacy policy',
        form=None
    )


@policies.route('/accessibility-statement', methods=['GET'])
def accessibility_statement():
    return render_template(
        'policies/accessibility-statement.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Accessibility statement',
        form=None
    )


@policies.route('/cookies', methods=['GET'])
def cookies():
    return render_template(
        'policies/cookies.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Cookies',
        form=None
    )


@policies.route('/background', methods=['GET'])
def background():
    return render_template(
        'policies/background.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='Background',
        form=None
    )


@policies.route('/about-our-analysis', methods=['GET'])
def about_our_analysis():
    return render_template(
        'policies/about-our-analysis.html',
        menu=menu,
        domain=None,
        subdomain=None,
        indicator=None,
        title='About our analysis',
        form=None
    )
