FROM node:lts-slim as builder

COPY . /build

WORKDIR /build
RUN npm ci
RUN npm run agora-desktop:build --configuration=production && ng run agora-desktop:server --configuration=production

FROM node:lts-slim

COPY --from=builder /build/dist/apps/agora-desktop /app

WORKDIR /app

CMD ["node", "server/main.js"]
