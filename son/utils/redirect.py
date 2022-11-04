import html
from flask import Response


def local_redirect(location: str, code: int = 302):
    display_location = html.escape(location)
    response = Response(
        '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">\n'
        "<title>Redirecting...</title>\n"
        "<h1>Redirecting...</h1>\n"
        "<p>You should be redirected automatically to target URL: "
        f'<a href="{display_location}">{display_location}</a>. If'
        " not click the link.",
        code,
        mimetype="text/html",
    )
    response.autocorrect_location_header = False
    response.headers["Location"] = location
    return response
