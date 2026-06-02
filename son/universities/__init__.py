import csv
import os
from flask import Blueprint, render_template, request, abort
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
    return render_template(
        'universities/by-university.html',
        path=request.path,
        universities_menu=universities_menu,
        university_slug=university_slug
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
