from flask import Blueprint, render_template

policies = Blueprint('policies', __name__)


@policies.route('/privacy-policy', methods=['GET'])
def privacy_policy():
    return render_template('policies/privacy-policy.html')


@policies.route('/accessibility-statement', methods=['GET'])
def accessibility_statement():
    return render_template('policies/accessibility-statement.html')


@policies.route('/cookies', methods=['GET'])
def cookies():
    return render_template('policies/cookies.html')
