from flask_wtf import FlaskForm
from wtforms import StringField, RadioField, BooleanField
from wtforms.validators import Optional


class FeedbackForm(FlaskForm):
    why_visit__download_data = BooleanField()
    why_visit__download_charts_and_maps = BooleanField()
    why_visit__read_summary = BooleanField()
    why_visit__browse_website = BooleanField()

    why_visit__tell_us_more = StringField()

    did_you_find_everything = RadioField(
        choices=[
            ('YES', 'Yes'),
            ('NO', 'No')
        ],
        validators=[Optional()]
    )
    did_you_find_everything__what_did_you_not_find = StringField()

    how_easy_to_use_website = RadioField(
        choices=[
            ('1_VERY_EASY', 'Very easy'),
            ('2_EASY', 'Easy'),
            ('3_NEUTRAL', 'Average'),
            ('4_DIFFICULT', 'Difficult'),
            ('5_VERY_DIFFICULT', 'Very difficult')
        ],
        validators=[Optional()]
    )

    how_could_we_improve_your_experience = StringField()

    what_would_you_like_to_see_on_this_website_in_the_future = StringField()

    what_sector_do_you_work_in = RadioField(
        choices=[
            ('CHARITY_THIRD', 'Charity / third sector'),
            ('LOCAL_GOVERNMENT', 'Local government'),
            ('CENTRAL_GOVERNMENT', 'Central government'),
            ('EDUCATION', 'Education'),
            ('PRIVATE', 'Private sector'),
            ('OTHER', 'Other')
        ],
        validators=[Optional()]
    )
    what_sector_do_you_work_in__other = StringField()
