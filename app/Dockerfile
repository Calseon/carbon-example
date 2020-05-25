FROM node:8

# Creates carbon-example folder on image
RUN mkdir -p carbon-example

# cd to inside the carbon-example folder on the image
WORKDIR /carbon-example

# copy contents of carbon-example (on host PC) to current directory on the image (inside container)
COPY ./carbon-example ./

# install npm
RUN npm install

# rebuild sass for Carbon
RUN npm rebuild node-sass

# Just documention for port
EXPOSE 3456

# start react app
CMD npm run start;
