import enum
from datetime import datetime
from flask import request


class LogLevel(enum.Enum):
    FATAL = "FATAL"
    ERROR = "ERROR"
    WARN = "WARN"
    INFO = "INFO"
    DEBUG = "DEBUG"
    TRACE = "TRACE"
    ALL = "ALL"


class Logger():
    def __init__(self):
        pass


    def mask_email_address(self, email_address):
        def mask(str):
            if len(str) > 6:
                return f"{str[0: 2]}{'*' * (len(str) - 4)}{str[-2:]}"
            return f"{str[0: 1]}{'*' * (len(str) - 2)}{str[-1:]}"

        try:
            if email_address.index('@'):
                local_part = email_address[0: email_address.index('@')]
                domain = email_address[email_address.index('@') + 1:]
                if len(local_part) > 2:
                    local_part = mask(local_part)

                tld = domain[domain.rindex('.'):]
                domain = mask(domain[: len(domain) - len(tld)])

                email_address = f"{local_part}@{domain}{tld}"

        except Exception:
            pass

        return email_address


    def log(self, level, message):
        session_id = ''
        try:
            session_id = f" {request.cookies['session']}"
        except:
            pass

        print(f"{request.remote_addr} - [{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {level.value}: {message}{session_id}", flush=True)
