# Stage 1: Base
FROM node:lts-alpine AS base
RUN yarn global add pnpm

# Stage 1: Dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile --prod

# Stage 2: Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Stage 3: Production
FROM nginx:alpine AS production
COPY --from=builder /app/dist /usr/share/nginx/html
