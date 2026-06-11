import csv
import os
from pathlib import Path

from flask import Blueprint, render_template, request, abort, send_file

from son.utils.get_markdown_content import get_markdown_content, get_markdown_content_from_file, get_markdown_header
from son.utils.menu import universities_menu

universities = Blueprint('universities', __name__)


@universities.route('/universities', methods=['GET'])
def index():
    return render_template(
        'universities/universities-homepage.html',
        path=request.path,
        universities_menu=universities_menu
    )


@universities.route('/universities/by-university', methods=['GET'])
def by_university_homepage():
    return render_template(
        'universities/by-university-homepage.html',
        path=request.path,
        universities_menu=universities_menu
    )


@universities.route('/universities/by-university/<university_slug>', methods=['GET'])
def by_university(university_slug):
    def get_row_from_csv_file(csv_file_path, column_name, search_value):
        with open(csv_file_path, encoding='utf-8-sig', errors='ignore') as csv_file:
            reader = csv.DictReader(csv_file)

            for row in reader:
                if row[column_name] == search_value:
                    return row
        return None

    file_path_rankings = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/university_rankings.csv"
    row_for_university = get_row_from_csv_file(file_path_rankings, 'university_slug', university_slug)
    if row_for_university is None:
        abort(404)

    file_path_content = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/university-content.md"
    if not Path(file_path_content).is_file():
        abort(404)

    f = open(file_path_content, 'r')
    markdown_text = f.read()
    f.close()

    markdown_text = markdown_text.replace('PATH_TO_CSV__WITHOUT_LOCATION_WEIGHTING', f"/universities/by-university/{university_slug}--without-location-weighting--chart-format.csv")
    markdown_text = markdown_text.replace('PATH_TO_CSV__WITH_LOCATION_WEIGHTING', f"/universities/by-university/{university_slug}--with-location-weighting--chart-format.csv")
    markdown_text = markdown_text.replace('PATH_TO_CSV__TABLE_FORMAT', f"by-university/{university_slug}--table-format.csv")

    markdown_file_parent_directory = os.path.dirname(file_path_content)

    university_content = get_markdown_content(markdown_text, 'UNIV', markdown_file_parent_directory)

    return render_template(
        'universities/by-university.html',
        path=request.path,
        universities_menu=universities_menu,
        university_slug=university_slug,
        row_for_university=row_for_university,
        university_content=university_content
    )


@universities.route('/universities/by-university/<filename>.csv', methods=['GET'])
def by_university_csv_file(filename: str):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/by-university/{filename}.csv"
    return send_file(file_path)


@universities.route('/universities/rankings', methods=['GET'])
def rankings_homepage():
    return render_template(
        'universities/rankings-homepage.html',
        path=request.path,
        universities_menu=universities_menu
    )


@universities.route('/universities/rankings/<ranking_slug>', methods=['GET'])
def individual_ranking(ranking_slug):
    file_path_content = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/rankings/{ranking_slug}.md"
    if not Path(file_path_content).is_file():
        abort(404)

    markdown_to_html = get_markdown_content_from_file(file_path_content, 'UNIV')
    markdown_header = get_markdown_header(file_path_content)

    return render_template(
        'markdown-based-template-universities.html',
        page_title=markdown_header['title'],
        path=request.path,
        universities_menu=universities_menu,
        markdown_to_html=markdown_to_html
    )


@universities.route('/universities/rankings/<filename>.csv', methods=['GET'])
def rankings_csv_file(filename: str):
    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/rankings/{filename}.csv"
    return send_file(file_path)


@universities.route('/universities/about-the-data', methods=['GET'])
def about_the_data():
    return render_template(
        'universities/about-the-data.html',
        path=request.path,
        universities_menu=universities_menu
    )
