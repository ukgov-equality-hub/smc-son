import csv
import os
from pathlib import Path

from flask import Blueprint, render_template, request, abort, send_file

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

    file_path = f"{os.path.dirname(os.path.realpath(__file__))}/../content/universities/2026/university_rankings.csv"
    row_for_university = get_row_from_csv_file(file_path, 'university_slug', university_slug)
    if row_for_university is None:
        abort(404)

    return render_template(
        'universities/by-university.html',
        path=request.path,
        universities_menu=universities_menu,
        university_slug=university_slug,
        row_for_university=row_for_university
    )


@universities.route('/universities/rankings', methods=['GET'])
def rankings():
    return render_template(
        'universities/rankings.html',
        path=request.path,
        universities_menu=universities_menu
    )


@universities.route('/universities/about-the-data', methods=['GET'])
def about_the_data():
    return render_template(
        'universities/about-the-data.html',
        path=request.path,
        universities_menu=universities_menu
    )
