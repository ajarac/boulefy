FROM node:lts

VOLUME . /build

WORKDIR /build

RUN npm install -g @angular/cli
RUN npm ci


# RUN ng build agora-desktop --configuration=production && ng run agora-desktop:server --configuration=production
