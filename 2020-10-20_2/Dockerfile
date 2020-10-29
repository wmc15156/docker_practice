# FROM node:alpine as builder 

# WORKDIR /usr/src/app

# COPY package.json ./

# RUN npm install

# COPY ./ ./

# CMD ["npm", "run", "build"]

# FROM nginx

# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY ./ ./

ENV CHOKIDAR_USEPOLLING=true 

CMD ["npm","run","start"]

