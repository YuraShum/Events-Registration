FROM node:19.2.0

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5022
CMD ["npm", "run", "start"]