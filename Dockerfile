FROM node:12
WORKDIR /app
COPY package.json /app
RUN npm install
copy . /app
CMD node  server.js
EXPOSE 8081