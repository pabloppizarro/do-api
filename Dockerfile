FROM node:19-alpine3.16
RUN mkdir -p /home/node/do-api/node_modules & chown -R node:node /home/node/do-api
WORKDIR /home/node/do-api

COPY --chown=node:node package*.json ./

USER node
RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

RUN npm install pm2 -g

CMD [ "pm2-runtime", "./server/index-ws.js" ]