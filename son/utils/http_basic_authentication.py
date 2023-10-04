import base64
from flask import abort, request, Response


class HttpBasicAuthentication:
    def __init__(self, app=None):
        self.app = app
        self.required_username = app.config['BASIC_AUTH_USERNAME']
        self.required_password = app.config['BASIC_AUTH_PASSWORD']

        app.before_request_funcs.setdefault(None, []).append(self._handler)

    def _handler(self):
        if request.path.startswith('/health-check'):
            # Don't require HTTP Basic Authentication for the Health Check endpoint
            return

        try:
            # We expect the user to supply a header like this:
            #    Authorization: Basic YWJjOmRlZg==
            # The part "YWJjOmRlZg==" is base64 encoded (in this example, for "abc:def")
            # The part before the colon (in this case, "abc") is the username
            # The part after the colon (in this case, "def") is the password
            authorization_header: str = request.headers.get('Authorization')

            if authorization_header.startswith('Basic '):
                # First, remove the prefix 'Basic '
                encoded_credentials = authorization_header[6:]

                # Then, base 64 decoded the credentials
                decoded_credentials_bytes: bytes = base64.urlsafe_b64decode(encoded_credentials)
                decoded_credentials: str = str(decoded_credentials_bytes, 'utf-8')

                # Then, split the string on the colon
                supplied_credentials = decoded_credentials.split(':')
                supplied_username = supplied_credentials[0]
                supplied_password = supplied_credentials[1]

                if supplied_username == self.required_username and supplied_password == self.required_password:
                    # The username and password are correct - return
                    # If the username or password are wrong, we fall through and return the 401
                    return

        except:
            # If the header isn't present, or doesn't decode correctly, continue and send the 401 response
            pass

        response = Response('', 401)
        response.headers.add('WWW-Authenticate', 'Basic realm="State of the Nation"')

        abort(response)
