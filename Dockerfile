FROM node:lts-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist/ /usr/share/nginx/html

