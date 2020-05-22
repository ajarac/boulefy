FROM node:lts-slim AS builder

VOLUME . /build

WORKDIR /build

RUN ng run api:build

FROM node:lts-slim

WORKDIR /dist

COPY --from=builder /build/dist/apps/api .

COPY package*.json ./

RUN npm ci

CMD ["node", "main.js"]
