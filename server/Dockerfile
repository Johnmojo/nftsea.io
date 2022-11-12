FROM node:lts-alpine

RUN npm install -g concurrently

WORKDIR /server

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]