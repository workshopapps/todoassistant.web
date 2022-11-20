# Fetching the latest node image on apline linux
FROM node:alpine

# Declaring env
ENV NODE_ENV

# Setting up the work directory
RUN mkdir /home/react-app

# Installing dependencies
COPY . /react-app
WORKDIR /react-app
RUN yarn install

# Starting our application
CMD [ "yarn", "start" ]
