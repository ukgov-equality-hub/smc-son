import logging
import os
from os.path import dirname
#from son.utils.config_helper import ConfigHelper


def get_connection_string() -> str:
    return ""
    #return os.environ.get("SQLALCHEMY_DATABASE_URI")


class Config:
    BASE_DIRECTORY = dirname(dirname(os.path.abspath(__file__)))
    ENVIRONMENT = os.environ.get("ENVIRONMENT", "PRODUCTION")
    #SQLALCHEMY_DATABASE_URI = "" #get_connection_string()
    #SQLALCHEMY_TRACK_MODIFICATIONS = False
    #SQLALCHEMY_KEY = os.environ.get("SQLALCHEMY_KEY")
    LOG_LEVEL = (
        logging.getLevelName(os.environ.get("LOG_LEVEL"))
        if "LOG_LEVEL" in os.environ
        else logging.INFO
    )
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    API_URL = "https://api.equality-data-store.cabinetoffice.gov.uk"
    AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
    AWS_REGION = os.environ.get("AWS_REGION")
    AWS_BUCKET_NAME = os.environ.get("AWS_BUCKET_NAME")
    WTF_CSRF_ENABLED = True
    WTF_CSRF_TIME_LIMIT = None  # Stops the CSRF token expiring (before the lifetime of the session). This was an accessibility problem
    MAINTENANCE_MODE = "OFF" #os.environ.get("MAINTENANCE_MODE")
    BASIC_AUTH_USERNAME = None #os.environ.get("BASIC_AUTH_USERNAME")
    BASIC_AUTH_PASSWORD = None #os.environ.get("BASIC_AUTH_PASSWORD")


class DevConfig(Config):
    DEBUG = True
    ENVIRONMENT = "DEVELOPMENT"
    LOG_LEVEL = (
        logging.getLevelName(os.environ.get("LOG_LEVEL"))
        if "LOG_LEVEL" in os.environ
        else logging.DEBUG
    )
    # SERVER_NAME = "localhost:5000"


class TestConfig(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
