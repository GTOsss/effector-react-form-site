FROM node:14.15-alpine as build

WORKDIR /app

COPY ./ ./

RUN apk add python libpng-dev autoconf automake make g++ libtool nasm && \
    yarn install && \
    yarn global add serve && \
    yarn run build

ENV PORT=6000
ENV HOST=0.0.0.0

EXPOSE $PORT

CMD ["sh", "-c", "serve -n -s -l tcp://${HOST}:${PORT} ./public"]