FROM node:23.9.0-alpine AS builder
WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install

COPY . .

RUN yarn build

FROM node:23.9.0-alpine AS deployer

WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/package.json .

EXPOSE 3000

ENV NODE_ENV=production
ENV ORIGIN=http://nixos:8080

CMD [ "node", "build" ]
