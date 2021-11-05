FROM node:14.18.0-alpine3.14
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . . 
ENV API_URL=http://api.myapp.com/
EXPOSE 3000
CMD ["npm", "start"]