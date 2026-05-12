from flask import Blueprint, redirect

from son.utils.logger import Logger

redirects = Blueprint('redirects', __name__)
logger = Logger()


@redirects.route('/drivers_of_social_mobility/research_and_development_environment/university_research_students', methods=['GET'])
def DR53_university_research_students():
    return redirect("/state-of-the-nation/drivers_of_social_mobility/research_and_development_environment/postgraduate_education/latest")


@redirects.route('/social_mobility_by_area', methods=['GET'])
def area_home_page_without_version():
    return redirect("/state-of-the-nation/social_mobility_by_area/latest")


@redirects.route('/state-of-the-nation/social_mobility_by_area', methods=['GET'])
def son_area_home_page_without_version():
    return redirect("/state-of-the-nation/social_mobility_by_area/latest")


@redirects.route('/social_mobility_by_area/latest', methods=['GET'])
def area_home_page_latest():
    return redirect("/state-of-the-nation/social_mobility_by_area/latest")


@redirects.route('/social_mobility_by_area/<major_version>.<minor_version>', methods=['GET'])
def area_home_page_with_version(major_version, minor_version):
    return redirect(f"/state-of-the-nation/social_mobility_by_area/{major_version}.{minor_version}")


@redirects.route('/social_mobility_by_area/<area>', methods=['GET'])
def area_page(area):
    return redirect(f"/state-of-the-nation/social_mobility_by_area/ITL2_regions/{area}")


@redirects.route('/social_mobility_by_area/ITL2_regions/<area>', methods=['GET'])
def area_page_ITL2(area):
    return redirect(f"/state-of-the-nation/social_mobility_by_area/ITL2_regions/{area}")


@redirects.route('/social_mobility_by_area/203_regions/<area>', methods=['GET'])
def area_page_203_regions(area):
    return redirect(f"/state-of-the-nation/social_mobility_by_area/203_regions/{area}")


@redirects.route('/social_mobility_by_area/205_regions/<area>', methods=['GET'])
def area_page_205_regions(area):
    return redirect(f"/state-of-the-nation/social_mobility_by_area/205_regions/{area}")


@redirects.route('/<domain>', methods=['GET'])
def domain_page(domain):
    return redirect(f"/state-of-the-nation/{domain}")


@redirects.route('/<domain>/<subdomain>/<indicator>', methods=['GET'])
def indicator_page_without_version(domain, subdomain, indicator):
    return redirect(f"/state-of-the-nation/{domain}/{subdomain}/{indicator}/latest")


@redirects.route('/<domain>/<subdomain>/<indicator>/latest', methods=['GET'])
def indicator_page_latest(domain, subdomain, indicator):
    return redirect(f"/state-of-the-nation/{domain}/{subdomain}/{indicator}/latest")


@redirects.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>', methods=['GET'])
def indicator_page_with_version(domain, subdomain, indicator, major_version, minor_version):
    return redirect(f"/state-of-the-nation/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}")


@redirects.route('/<domain>/<subdomain>/<indicator>/<major_version>.<minor_version>/<csv_file_name>.csv', methods=['GET'])
def csv_file_download(domain, subdomain, indicator, major_version, minor_version, csv_file_name):
    return redirect(f"/state-of-the-nation/{domain}/{subdomain}/{indicator}/{major_version}.{minor_version}/{csv_file_name}.csv")


@redirects.route('/about-our-analysis', methods=['GET'])
def about_our_analysis():
    return redirect(f"/state-of-the-nation/about-our-analysis")
