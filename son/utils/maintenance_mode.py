from flask import abort, request


class Maintenance:
    def __init__(self, app=None):
        self.app = app

        app.before_request_funcs.setdefault(None, []).append(self._handler)

    @staticmethod
    def _handler():
        if request.endpoint != 'static':
            abort(503)
