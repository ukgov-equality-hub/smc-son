import os
import re
from flask import request, current_app
from wtforms.validators import DataRequired, InputRequired, ValidationError, StopValidation, Optional
from werkzeug.datastructures import FileStorage
from collections.abc import Iterable
from datetime import datetime, date


class RequiredIf(DataRequired):
    """Validator which makes a field required if another field is set and has a truthy value.

    Sources:
        - http://wtforms.simplecodes.com/docs/1.0.1/validators.html
        - http://stackoverflow.com/questions/8463209/how-to-make-a-field-conditionally-optional-in-wtforms

    """
    field_flags = ('requiredif',)

    def __init__(self, other_field_name, message=None, *args, **kwargs):
        self.other_field_name = other_field_name
        self.message = message

    def __call__(self, form, field):
        other_field = form[self.other_field_name]
        if other_field is None:
            raise Exception('no field named "%s" in form' % self.other_field_name)
        if bool(other_field.data):
            super(RequiredIf, self).__call__(form, field)


class StrictRequiredIf(DataRequired):
    """Validator which makes a field required if another field is set and has a specific value.

    Sources:
        - http://wtforms.simplecodes.com/docs/1.0.1/validators.html
        - http://stackoverflow.com/questions/8463209/how-to-make-a-field-conditionally-optional-in-wtforms

    """
    field_flags = ('requiredif',)

    def __init__(self, other_field_name, other_field_value, message=None, validators=None, *args, **kwargs):
        self.other_field_name = other_field_name
        self.other_field_value = other_field_value
        self.message = message
        self.validators = validators

    def __call__(self, form, field):
        other_field = form[self.other_field_name]

        if other_field is None:
            raise Exception('no field named "%s" in form' % self.other_field_name)

        if (str(other_field.data) == str(self.other_field_value) or
           (isinstance(self.other_field_value, list) and other_field.data in self.other_field_value) or
           (isinstance(other_field.data, list) and self.other_field_value in other_field.data)):
            super(StrictRequiredIf, self).__call__(form, field)
            if self.validators:
                for validator in self.validators:
                    validator(form, field)


class Integer(DataRequired):
    def __init__(self, min: int = None, max: int = None, message: str = None, validators=None):
        self.min = min
        self.max = max
        self.message = message
        self.validators = validators

    def __call__(self, form, field):
        string_value: str = field.data

        try:
            int_value = int(string_value)

            if self.min and int_value < self.min:
                raise ValidationError(
                    self.message if self.message else f"{field} must be at least {self.min}"
                )

            if self.max and int_value > self.max:
                raise ValidationError(
                    self.message if self.message else f"{field} must be at most {self.max}"
                )

        except Exception as e:
            raise ValidationError(
                self.message if self.message else f"{field} must be a whole number"
            )

        if self.validators:
            for validator in self.validators:
                validator(form, field)


def validateEmailAddress(form, field):
    from email.utils import parseaddr
    if not '@' in parseaddr(field.data)[1]:
        raise ValidationError('Enter a valid email address')


def validateGovUkEmailAddress(form, field):
    email_address: str = field.data
    if not email_address.endswith('.gov.uk'):
        raise ValidationError('Enter a .gov.uk email address')


def validatePasswordStrength(form, field):
    def password_check(password):
        length_error = len(password) < 8
        digit_error = re.search(r'\d', password) is None
        uppercase_error = re.search(r'[A-Z]', password) is None
        lowercase_error = re.search(r'[a-z]', password) is None
        symbol_error = re.search(r'\W', password) is None
        return not (length_error or digit_error or uppercase_error or lowercase_error or symbol_error)

    if password_check(field.data) is False:
        raise ValidationError('Your password needs to contain 8 or more characters, a lower case letter, an upper case letter, a number and a special character')


def validatePostcode(form, field):
    # https://stackoverflow.com/questions/164979/regex-for-matching-uk-postcodes
    if not (field.data is None or field.data == ''):
        data = field.data
        match = re.search('^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$', data)
        if match is None:
            raise ValidationError('Enter a valid postcode')


def validateDOB(form, field):
    if not form['day'].errors and not form['month'].errors:
        try:
            d = int(form['day'].data)
            m = int(form['month'].data)
            y = int(form['year'].data)
            dt = datetime(y, m, d, 00, 00)
        except Exception as e:
            if field.name == 'year':
                raise ValidationError('Enter a valid date')
            return

        def age(dt):
            today = date.today()
            return today.year - dt.year - ((today.month, today.day) < (dt.month, dt.day))

        if age(dt) < 18 and field.name == 'year':
            raise ValidationError('You need to be at least 18 years old to apply')
        elif age(dt) > 110 and field.name == 'year':
            raise ValidationError('You need to be less than 110 years old to apply')


def validateNationalInsuranceNumber(form, field):

    # https://www.gov.uk/hmrc-internal-manuals/national-insurance-manual/nim39110
    # https://stackoverflow.com/questions/17928496/use-regex-to-validate-a-uk-national-insurance-no-nino-in-an-html5-pattern-attri
    if not (field.data is None or field.data == ''):
        data = field.data.replace(' ', '').upper()
        match = re.search('^(?!BG)(?!GB)(?!NK)(?!KN)(?!TN)(?!NT)(?!ZZ)(?:[A-CEGHJ-PR-TW-Z][A-CEGHJ-NPR-TW-Z])(?:\s*\d\s*){6}[A-D]{1}$', data)
        if match is None:
            raise ValidationError('Enter a valid National Insurance number')


class MultiFileAllowed(object):
    def __init__(self, upload_set, message=None):
        self.upload_set = upload_set
        self.message = message

    def __call__(self, form, field):
        if not (all(isinstance(item, FileStorage) for item in field.data) and field.data):
            return

        for data in field.data:
            filename = data.filename.lower()

            if isinstance(self.upload_set, Iterable):
                if any(filename.endswith('.' + x) for x in self.upload_set):
                    return

                raise StopValidation(self.message or field.gettext(
                    'File does not have an approved extension: {extensions}'
                ).format(extensions=', '.join(self.upload_set)))

            if not self.upload_set.file_allowed(field.data, filename):
                raise StopValidation(self.message or field.gettext(
                    'File does not have an approved extension.'
                ))


def fileSizeLimit(max_size_in_mb):
    max_bytes = max_size_in_mb*1024*1024

    def file_length_check(form, field):
        for data in field.data:
            file_size = data.read()
            data.seek(0)
            if len(file_size) == 0:
                raise ValidationError('The selected file is empty. Check that the file you are uploading has the content you expect')
            elif len(file_size) > max_bytes:
                raise ValidationError(f'The selected file must be smaller than {max_size_in_mb}MB')

    return file_length_check


def fileVirusScan(form, field):
    if current_app.config['AV_API'] is None:
        return
    if (field.name not in request.files or request.files[field.name].filename == ''):
        return

    print('Scanning %s' % current_app.config['AV_API'], flush=True)
    from pyclamd import ClamdNetworkSocket

    uploaded = request.files[field.name]
    uploaded.stream.seek(0)

    url = current_app.config['AV_API']
    url = url.replace('http://', '')
    url = url.replace('https://', '')
    if url.index(':'):
        url = url[: url.index(':')]

    cd = ClamdNetworkSocket(host=url, port=3310, timeout=None)
    if not cd.ping():
        print('Unable to communicate with virus scanner', flush=True)
        return

    results = cd.scan_stream(uploaded.stream.read())
    if results is None:
        uploaded.stream.seek(0)
        return
    else:
        res_type, res_msg = results['stream']
        if res_type == 'FOUND':
            raise ValidationError('The selected file contains a virus')
        else:
            print('Error scanning uploaded file', flush=True)
