# base image
FROM node:12.2.0-alpine

# set working directory
RUN mkdir /codevolution
WORKDIR /codevolution

# add `/codevolution/node_modules/.bin` to $PATH
ENV PATH /codevolution/node_modules/.bin:$PATH

# install and cache codevolution dependencies
COPY package.json /codevolution/package.json
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent

EXPOSE 3001

# start codevolution
CMD ["npm", "start"]