FROM node:lts AS builder

VOLUME . /app

WORKDIR /app

RUN npm ci && nx run agora-desktop:build --configuration=production && nx run agora-desktop:server --configuration=production

FROM node:lts

COPY --from=builder /app/dist/agora-desktop /app

CMD ["node", "server/main.js"]
