from flask import Blueprint, render_template, url_for
from son.external_services.gov_uk_notify import GovUkNotify
from son.feedback.forms import FeedbackForm
from son.utils.redirect import local_redirect
from son.utils.menu import menu

feedback = Blueprint('feedback', __name__)


@feedback.route('/feedback', methods=['GET', 'POST'])
def feedback_page():
    form = FeedbackForm()

    if form.validate_on_submit():
        GovUkNotify().send_email_feedback(
            why_visit__download_data = form.why_visit__download_data.data,
            why_visit__download_charts_and_maps = form.why_visit__download_charts_and_maps.data,
            why_visit__read_summary = form.why_visit__read_summary.data,
            why_visit__browse_website = form.why_visit__browse_website.data,
            why_visit__tell_us_more = form.why_visit__tell_us_more.data,
            did_you_find_everything = form.did_you_find_everything.data,
            did_you_find_everything__what_did_you_not_find = form.did_you_find_everything__what_did_you_not_find.data,
            how_easy_to_use_website = form.how_easy_to_use_website.data,
            how_could_we_improve_your_experience = form.how_could_we_improve_your_experience.data,
            what_would_you_like_to_see_on_this_website_in_the_future = form.what_would_you_like_to_see_on_this_website_in_the_future.data,
            what_sector_do_you_work_in = form.what_sector_do_you_work_in.data,
            what_sector_do_you_work_in__other = form.what_sector_do_you_work_in__other.data,
        )

        return local_redirect(url_for('feedback.feedback_received'))

    return render_template(
        'feedback/feedback-form.html',
        form=form,
        menu=menu
    )


@feedback.route('/feedback-received', methods=['GET', 'POST'])
def feedback_received():
    return render_template(
        'feedback/feedback-received.html',
        menu=menu
    )
