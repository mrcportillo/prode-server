FROM node:10.3

RUN apt-get update && \
    apt-get install -y libpq-dev && \
    apt-get install -y python-dev && \
    apt-get install -y unzip && \
    apt-get install -y jq

RUN curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip" && \
    unzip awscli-bundle.zip && \
    ./awscli-bundle/install -i /usr/local/aws -b /usr/local/bin/aws && \
    rm awscli-bundle.zip && \
    rm -rd  awscli-bundle/


RUN wget https://github.com/stedolan/jq/releases/download/jq-1.5/jq-linux64 && \
    chmod +x jq-linux64 && \
    mv jq-linux64 $(which jq)
    
RUN npm --version

# You should put here the name of your service, this is the only line you normally need to change.
# Must be the same you have in your package.json, docker-compose.yml & CircleCi (if is used).
ENV SERVICE_NAME prode-server
WORKDIR /var/www/$SERVICE_NAME/

# First copy Makefile and package.json files so that we can cache dependencies separate from source code.
# By doing so, we won't have to rebuild layers with dependencies when source code changes occur.

ADD package.json /var/www/$SERVICE_NAME/
ADD package-lock.json /var/www/$SERVICE_NAME/

# Build dependencies
RUN npm ci

# Now add the entire source code tree
ADD . /var/www/$SERVICE_NAME

# Build the app
RUN npm run build

EXPOSE 80

RUN ./run.sh