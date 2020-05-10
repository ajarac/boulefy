FROM node:lts AS builder

WORKDIR /build

COPY package*.json ./

RUN npm install -g @angular/cli

RUN npm ci

COPY . .

RUN ng run api:build


FROM node:lts

WORKDIR /dist

COPY --from=builder /build/dist/apps/api .

COPY package*.json ./

RUN npm ci

CMD ["node", "main.js"]
