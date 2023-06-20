
# syntax=docker/dockerfile:1

FROM python:3.8

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

#RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
#    && apt-get install -y nodejs



RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - 
RUN apt-get install -y nodejs npm



EXPOSE 5000

RUN mkdir -p /app/
WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

ADD . .

# RUN pip install pre-commit
# RUN pre-commit install --install-hooks

RUN npm install
RUN npm run-script build

#RUN rm /app/admin -r
CMD /app/run.sh
# CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]