FROM node:16

WORKDIR /tp-mton-gmmp
COPY package.json .
RUN npm install
COPY . .
EXPOSE ${NODE_DOCKER_PORT}
CMD ["npm", "run", "dev"]
