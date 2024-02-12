FROM node:current-alpine3.19
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . .
RUN npm ci
CMD [ "npm", "start"]