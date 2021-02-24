FROM node:alpine

WORKDIR /app

COPY ./ ./

RUN apk add libtool automake autoconf nasm && \
    apk --no-cache add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers make python && \
    npm install node-gyp -g && npm install serve -g && \
    npm install && npm run build

ENV PORT=6000
ENV HOST=0.0.0.0

EXPOSE $PORT

CMD ["sh", "-c", "serve -s -l tcp://${HOST}:${PORT} ./public"]
