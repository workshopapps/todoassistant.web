#
FROM node:bullseye-slim

RUN mkdir -p /home/frontend

COPY . /home/frontend

RUN cd /home/frontend

WORKDIR /home/frontend

RUN yarn 

RUN yarn build

RUN yarn global add serve

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]
