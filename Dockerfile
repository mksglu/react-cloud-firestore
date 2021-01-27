FROM mhart/alpine-node:15.7.0 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --legacy-peer-deps --silent
COPY . /usr/src/app
RUN npm run build

FROM nginx:latest
WORKDIR /usr/src/app
RUN rm -rf /etc/nginx/conf.d
COPY /src/config/nginx/conf /etc/nginx
COPY /build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]