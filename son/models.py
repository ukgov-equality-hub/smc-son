import os
from datetime import datetime
import enum
import ast
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_utils import StringEncryptedType
from sqlalchemy_utils.types.encrypted.encrypted_type import AesEngine

db = SQLAlchemy()
secret_key = os.environ.get('SQLALCHEMY_KEY', '')


'''class ApplicationStatus(enum.Enum):
    COMPLETED = "COMPLETED"
    DELETED = "DELETED"
    STARTED = "STARTED"
    SUBMITTED = "SUBMITTED"
    DOWNLOADED = "DOWNLOADED"


class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    reference_number = db.Column(StringEncryptedType(db.String, length=50, key=secret_key, engine=AesEngine, padding='pkcs5'), unique=True, nullable=False)
    email = db.Column(StringEncryptedType(db.String, length=500, key=secret_key, engine=AesEngine, padding='pkcs5'), nullable=False)
    user_input = db.Column(StringEncryptedType(db.String, length=50000, key=secret_key, engine=AesEngine, padding='pkcs5'))
    status = db.Column(
        db.Enum(ApplicationStatus, name='application_status'),
        default=ApplicationStatus.STARTED
    )
    created = db.Column(db.DateTime, default=datetime.utcnow, nullable=False)
    updated = db.Column(db.DateTime)
    downloaded = db.Column(db.DateTime)
    downloadedBy = db.Column(db.String(180))
    completed = db.Column(db.DateTime)
    completedBy = db.Column(db.String(180))
    filesCreated = db.Column(db.Boolean, default=False)

    def data(self):
        if self.user_input:
            return ast.literal_eval(self.user_input)
        else:
            return {
                "reference_number": self.reference_number,
                "email": self.email,
                "confirmation": {
                    "overseasCheck": "None",
                    "overseasApprovedCheck": "None",
                    "declaration": "None",
                    "progress": ListStatus.IN_PROGRESS.name
                },
                "personalDetails": {
                    "progress": ListStatus.NOT_STARTED.name
                },
                "birthRegistration": {
                    "progress": ListStatus.NOT_STARTED.name
                },
                "partnershipDetails": {
                    "progress": ListStatus.NOT_STARTED.name
                },
                "medicalReports": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
                "genderEvidence": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
                "nameChange": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
                "marriageDocuments": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
                "overseasCertificate": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
                "statutoryDeclarations": {
                    "progress": ListStatus.NOT_STARTED.name
                },
                "submitAndPay": {
                    "progress": ListStatus.CANNOT_START_YET.name
                },
            }

    def application_data(self) -> ApplicationData:
        return convert_weakly_typed_to_strongly_typed(self.data())


'''
