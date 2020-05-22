FROM node:lts-slim as builder

VOLUME . /build

WORKDIR /build

RUN ng build agora-desktop --configuration=production && ng run agora-desktop:server --configuration=production

FROM node:lts-slim

COPY --from=builder /build/dist/apps/agora-desktop /app

WORKDIR /app

CMD ["node", "server/main.js"]
