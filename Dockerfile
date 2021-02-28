FROM node:alpine

COPY ./ ./

RUN apk add libtool automake autoconf nasm
RUN apk add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install node-gyp -g && npm install serve -g
RUN npm install && npm rebuild && npm run build

ENV PORT=6000
ENV HOST=0.0.0.0

EXPOSE $PORT

CMD ["sh", "-c", "serve -s -l tcp://${HOST}:${PORT} ./public"]
