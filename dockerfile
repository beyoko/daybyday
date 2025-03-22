# 构建阶段
FROM oven/bun:alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build

# 运行阶段
FROM oven/bun:alpine
RUN apk add --no-cache tini
RUN addgroup -S node && adduser -S node -G node
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN bun install
RUN chown -R node:node /app
USER node
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["bun", "run", "start"]
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD bun -e "require('http').get('http://localhost:3000', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1))"
