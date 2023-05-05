FROM node:18-alpine
WORKDIR /app
COPY package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3005
CMD npm run dev