FROM node:lts AS builder

VOLUME . /app

WORKDIR /app

RUN npm ci && nx run api:build

FROM node:lts

COPY --from=builder /app/dist/api /app

CMD ["node", "main.js"]
