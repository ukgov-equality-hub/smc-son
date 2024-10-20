import logging
import os
from os.path import dirname


class Config:
    BASE_DIRECTORY = dirname(dirname(os.path.abspath(__file__)))
    ENVIRONMENT = os.environ.get("ENVIRONMENT", "PRODUCTION")
    LOG_LEVEL = (
        logging.getLevelName(os.environ.get("LOG_LEVEL"))
        if "LOG_LEVEL" in os.environ
        else logging.INFO
    )
    SECRET_KEY = os.environ.get("SECRET_KEY")
    SESSION_COOKIE_SECURE = True
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = "Lax"
    AWS_ACCESS_KEY_ID = os.environ.get("AWS_ACCESS_KEY_ID")
    AWS_SECRET_ACCESS_KEY = os.environ.get("AWS_SECRET_ACCESS_KEY")
    AWS_REGION = os.environ.get("AWS_REGION")
    AWS_BUCKET_NAME = os.environ.get("AWS_BUCKET_NAME")
    WTF_CSRF_ENABLED = True
    WTF_CSRF_TIME_LIMIT = None  # Stops the CSRF token expiring (before the lifetime of the session). This was an accessibility problem
    MAINTENANCE_MODE = os.environ.get("MAINTENANCE_MODE")
    BASIC_AUTH_USERNAME = os.environ.get("BASIC_AUTH_USERNAME")
    BASIC_AUTH_PASSWORD = os.environ.get("BASIC_AUTH_PASSWORD")
    GOV_UK_NOTIFY_API_KEY = os.environ.get("GOV_UK_NOTIFY_API_KEY")
    NOTIFY_OVERRIDE_EMAIL = os.environ.get("NOTIFY_OVERRIDE_EMAIL")


class DevConfig(Config):
    DEBUG = True
    ENVIRONMENT = "DEVELOPMENT"
    LOG_LEVEL = (
        logging.getLevelName(os.environ.get("LOG_LEVEL"))
        if "LOG_LEVEL" in os.environ
        else logging.DEBUG
    )


class TestConfig(Config):
    TESTING = True
    WTF_CSRF_ENABLED = False
