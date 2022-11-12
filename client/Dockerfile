FROM node:lts-alpine

ENV HOST=0.0.0.0

WORKDIR /client

COPY . ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]