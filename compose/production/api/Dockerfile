FROM node:lts AS builder

VOLUME . /build

WORKDIR /build

RUN ng run api:build

FROM node:lts

WORKDIR /dist

COPY --from=builder /build/dist/apps/api .

COPY package*.json ./

RUN npm ci

CMD ["node", "main.js"]
