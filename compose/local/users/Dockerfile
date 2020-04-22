FROM node:latest

COPY dist/apps/users/main.js ./

COPY package*.json ./

RUN npm ci --production

CMD ["node", "main.js"]
