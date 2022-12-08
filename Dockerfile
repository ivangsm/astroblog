FROM node:lts-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN yarn global add pnpm && pnpm i --frozen-lockfile

FROM node:lts-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM node:lts-alpine AS runner
WORKDIR /app
RUN yarn global add serve

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 astro

COPY --from=builder --chown=astro:nodejs /app/dist /dist

USER astro

EXPOSE 3000

WORKDIR /dist

CMD ["serve"]
