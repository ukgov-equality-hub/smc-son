
# syntax=docker/dockerfile:1

FROM python:3.8

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Install Node.js
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash && \. "$HOME/.nvm/nvm.sh" && nvm install 24 && node -v && npm -v
RUN \. "$HOME/.nvm/nvm.sh" && npm -v

EXPOSE 5000

RUN mkdir -p /app/
WORKDIR /app

# Install Python dependencies
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

# Install Node.JS dependencies
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN \. "$HOME/.nvm/nvm.sh" && npm ci

# Build the JS and CSS files
RUN \. "$HOME/.nvm/nvm.sh" && npm run build

ADD . .

#RUN rm /app/admin -r
CMD flask run --host=0.0.0.0
# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]