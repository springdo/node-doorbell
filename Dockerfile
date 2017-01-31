FROM node:4.7
#FROM node:4-alpine
#
#ENV PACKAGES="\
#  git \
#  python2 \
#  python2-dev \
#  make \
#  g++ \
#  gcc \
#  linux-headers \
#  libgcc \
#"
#
#RUN for package in $PACKAGES; do apk add --update --no-cache --virtual "${package}"; done

# Create app directory
RUN apt-get update

RUN apt-get install -y \
    libpcap0.8-dev

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#RUN ls /usr/bin/ | grep py

# Install app dependencies
COPY package.json /usr/src/app/
#RUN npm config set python /usr/bin/python
RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]