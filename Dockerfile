FROM node:22-alpine

WORKDIR /app

COPY pakage*.json ./

COPY . .

EXPOSE 8080

CMD ["node", "src/index.ts"]