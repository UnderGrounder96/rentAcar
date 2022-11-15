FROM node:12-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

VOLUME [ "/app/node_modules" ]

CMD [ "npm", "run", "start" ]
