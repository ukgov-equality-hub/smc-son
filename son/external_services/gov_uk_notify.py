import os

from flask import current_app
from notifications_python_client.notifications import NotificationsAPIClient


class GovUkNotify:
    def __init__(self):
        gov_uk_notify_api_key = current_app.config['GOV_UK_NOTIFY_API_KEY']
        self.space = current_app.config['ENVIRONMENT']
        self.is_production = self.space == 'Prod'
        self.notify_override_email = current_app.config['NOTIFY_OVERRIDE_EMAIL']
        self.gov_uk_notify_client = NotificationsAPIClient(gov_uk_notify_api_key)


    def send_email_feedback(
            self,
            why_visit__download_data: bool,
            why_visit__download_charts_and_maps: bool,
            why_visit__read_summary: bool,
            why_visit__browse_website: bool,
            why_visit__tell_us_more: str,
            did_you_find_everything: str,
            did_you_find_everything__what_did_you_not_find: str,
            how_easy_to_use_website: str,
            how_could_we_improve_your_experience: str,
            what_would_you_like_to_see_on_this_website_in_the_future: str,
            what_sector_do_you_work_in: str,
            what_sector_do_you_work_in__other: str
    ):
        why_visit__pretty: str = (
            ("* Download data\n" if why_visit__download_data else '') +
            ("* Download charts and maps\n" if why_visit__download_charts_and_maps else '') +
            ("* Read a summary of the main findings\n" if why_visit__read_summary else '') +
            ("* Browse the website\n" if why_visit__browse_website else '') +
            ('n/a' if (
                not why_visit__download_data and
                not why_visit__download_charts_and_maps and
                not why_visit__read_summary and
                not why_visit__browse_website
            ) else '')
        )

        why_visit__tell_us_more__pretty = (
            why_visit__tell_us_more if why_visit__tell_us_more else 'n/a'
        )

        did_you_find_everything__pretty: str = (
            'Yes' if did_you_find_everything == 'YES' else (
                'No' if did_you_find_everything == 'NO' else 'n/a'
            )
        )

        what_did_you_not_find__pretty: str = (
            did_you_find_everything__what_did_you_not_find if did_you_find_everything__what_did_you_not_find else 'n/a'
        )

        how_easy_to_use_website__pretty: str = (
            'Very easy' if how_easy_to_use_website == '1_VERY_EASY' else '' +
            'Easy' if how_easy_to_use_website == '2_EASY' else '' +
            'Average' if how_easy_to_use_website == '3_NEUTRAL' else '' +
            'Difficult' if how_easy_to_use_website == '4_DIFFICULT' else '' +
            'Very difficult' if how_easy_to_use_website == '5_VERY_DIFFICULT' else '' +
            'n/a' if not how_easy_to_use_website else ''
        )

        how_could_we_improve_your_experience__pretty = (
            how_could_we_improve_your_experience if how_could_we_improve_your_experience else 'n/a'
        )

        what_would_you_like_to_see_on_this_website_in_the_future__pretty = (
            what_would_you_like_to_see_on_this_website_in_the_future if
            what_would_you_like_to_see_on_this_website_in_the_future else 'n/a'
        )

        what_sector_do_you_work_in__pretty: str = (
            'Charity / third sector' if what_sector_do_you_work_in == 'CHARITY_THIRD' else '' +
            'Local government' if what_sector_do_you_work_in == 'LOCAL_GOVERNMENT' else '' +
            'Central government' if what_sector_do_you_work_in == 'CENTRAL_GOVERNMENT' else '' +
            'Education' if what_sector_do_you_work_in == 'EDUCATION' else '' +
            'Private sector' if what_sector_do_you_work_in == 'PRIVATE' else '' +
            f'Other: {what_sector_do_you_work_in__other}' if what_sector_do_you_work_in == 'OTHER' else '' +
            'n/a' if not what_sector_do_you_work_in else ''
        )

        personalisation = {
            'why_visit': why_visit__pretty,
            'why_visit__tell_us_more': why_visit__tell_us_more__pretty,
            'did_you_find_everything': did_you_find_everything__pretty,
            'what_did_you_not_find': what_did_you_not_find__pretty,
            'how_easy_to_use_website': how_easy_to_use_website__pretty,
            'how_could_we_improve_your_experience': how_could_we_improve_your_experience__pretty,
            'what_would_you_like_to_see_on_this_website_in_the_future': what_would_you_like_to_see_on_this_website_in_the_future__pretty,
            'what_sector_do_you_work_in': what_sector_do_you_work_in__pretty
        }

        return self.send_email(
            email_address='son-data-explorer-feedback@cabinetoffice.gov.uk',
            template_id='f90697bf-5adc-4ce5-b90d-2c03bbcf1350',
            personalisation=personalisation
        )


    def send_email(self, email_address: str, template_id: str, personalisation: dict):
        if personalisation is None:
            personalisation = {}

        if self.is_production:
            personalisation['environment_and_email_address'] = ''
        else:
            personalisation['environment_and_email_address'] = f"[{self.space} to:{email_address}] "
            if self.notify_override_email:
                email_address = self.notify_override_email

        response = self.gov_uk_notify_client.send_email_notification(
            email_address=email_address,
            template_id=template_id,
            personalisation=personalisation
        )

        return response
