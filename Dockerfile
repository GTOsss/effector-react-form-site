FROM node:alpine

WORKDIR ./app

COPY ./ ./

RUN apk add python libpng-dev autoconf automake make g++ libtool nasm
RUN yarn install
RUN yarn global add serve
RUN yarn run build

ENV PORT=6000
ENV HOST=0.0.0.0

EXPOSE $PORT

CMD ["sh", "-c", "serve -s -l tcp://${HOST}:${PORT} ./public"]
