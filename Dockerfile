FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build



FROM node:22-alpine AS runner
WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/out .

EXPOSE 3000
CMD ["serve", "-s", ".", "-l", "3000"]