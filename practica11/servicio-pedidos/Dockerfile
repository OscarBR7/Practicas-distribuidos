FROM node:14-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
RUN apk add --no-cache curl
COPY . .
EXPOSE 4000
CMD ["node", "app.js"]
