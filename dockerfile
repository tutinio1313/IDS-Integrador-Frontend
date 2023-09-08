FROM node:18
WORKDIR /test

EXPOSE 5173

COPY . .

RUN npm install