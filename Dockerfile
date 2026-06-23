# Stage 1: Builder
FROM node:20 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY server.js test.js ./

# Stage 2: Runtime với Distroless
FROM gcr.io/distroless/nodejs20-debian11 AS runtime
LABEL org.opencontainers.image.title="Day 6 CI/CD Demo App" \
      org.opencontainers.image.description="A simple Node.js web app for CI/CD practice" \
      org.opencontainers.image.version="1.0.0"

WORKDIR /app
COPY --from=builder /app/server.js ./server.js
COPY --from=builder /app/node_modules ./node_modules

USER nonroot
EXPOSE 3000

CMD ["server.js"]
