FROM node:lts as builder

WORKDIR /build

COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm ci

COPY . .

RUN ng build agora-desktop --configuration=production && ng run agora-desktop:server --configuration=production

FROM node:lts

COPY --from=builder /build/dist/apps/agora-desktop /app

WORKDIR /app

CMD ["node", "server/main.js"]
