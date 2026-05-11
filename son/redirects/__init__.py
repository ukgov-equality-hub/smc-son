from flask import Blueprint, redirect

from son.utils.logger import Logger

redirects = Blueprint('redirects', __name__)
logger = Logger()


@redirects.route('/drivers_of_social_mobility/research_and_development_environment/university_research_students', methods=['GET'])
def DR53_university_research_students():
    return redirect("/drivers_of_social_mobility/research_and_development_environment/postgraduate_education")


@redirects.route('/social_mobility_by_area', methods=['GET'])
def area_home_page_without_version():
    return redirect("/social_mobility_by_area/latest")


@redirects.route('/social_mobility_by_area/<area>', methods=['GET'])
def area_page(area):
    return redirect(f"/social_mobility_by_area/ITL2_regions/{area}")


@redirects.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page_without_version(domain, subdomain, indicator):
    return redirect(f"/{domain}/{subdomain}/{indicator}/latest")


