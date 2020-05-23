FROM node:lts-slim AS builder

COPY . /build

WORKDIR /build
RUN npm ci
RUN npm run api:build

FROM node:lts-slim

WORKDIR /dist

COPY --from=builder /build/dist/apps/api .

COPY package*.json ./

RUN npm ci

CMD ["node", "main.js"]
