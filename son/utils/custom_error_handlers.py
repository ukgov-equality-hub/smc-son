from flask import Flask, render_template


class CustomErrorHandlers:
    def __init__(self, app: Flask):
        app.register_error_handler(404, self.error_404)
        app.register_error_handler(503, self.error_503)
        app.register_error_handler(Exception, self.error_default)

    @staticmethod
    def error_404(e):
        return render_template('custom-error-templates/404.html'), 404

    @staticmethod
    def error_503(e):
        return render_template('custom-error-templates/503.html'), 503

    @staticmethod
    def error_default(e):
        return render_template('custom-error-templates/error-default.html'), 500
