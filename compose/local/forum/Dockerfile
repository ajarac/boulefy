FROM node:latest

COPY dist/apps/forum/main.js ./

COPY package*.json ./

RUN npm ci --production

CMD ["node", "main.js"]
