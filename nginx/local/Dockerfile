FROM nginx:1.17.5

COPY nginx/local/nginx.conf /etc/nginx/nginx.conf

RUN apt-get update -y && apt-get install -y \
    wget \
    unzip \
   && apt-get autoremove -y && apt-get clean
