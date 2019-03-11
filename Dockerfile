FROM node:10.15-slim

#RUN npm i npm --g
RUN npm i yarn --g
RUN npm i @angular/cli --g
RUN npm i @angular-devkit/build-angular --g


# set working directory
#RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


# add `/usr/src/app/node_modules/.bin` to $PATH
#ENV PATH /usr/src/app/node_modules/.bin:$PATH



# install and cache app dependencies
COPY package.json /usr/src/app/package.json


RUN echo "Yarning the Angular Project"
RUN yarn


# add app
COPY . /usr/src/app

# start app
#CMD ng serve --host 0.0.0.0 --port 4230 --disableHostCheck
CMD yarn start


