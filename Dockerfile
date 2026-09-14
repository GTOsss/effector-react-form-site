# ---------- deps: установка зависимостей (кэшируется, пока не меняются package.json / yarn.lock) ----------
FROM node:14.16-alpine AS deps

WORKDIR /app

# Нативный тулчейн нужен только для сборки node-sass / sharp — в итоговый образ он не попадает
RUN apk add --no-cache python libpng-dev autoconf automake make g++ libtool nasm

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --network-timeout 600000 && \
    yarn cache clean

# ---------- build: сборка статики Gatsby ----------
FROM deps AS build

ENV NODE_ENV=production \
    GATSBY_TELEMETRY_DISABLED=1

COPY ./ ./

RUN yarn run build

# ---------- runtime: только nginx и собранная статика ----------
FROM nginx:1.27-alpine AS runtime

RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
