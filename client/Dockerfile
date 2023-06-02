# Use a smaller base image
FROM node:14-alpine AS base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./client/package*.json ./
RUN npm install --only=production

# Bundle app source
COPY . .

# Specify the final production image
FROM node:14-alpine

# Copy only the necessary files from the base image
WORKDIR /usr/src/app
COPY --from=base /usr/src/app .

# Initiate npm start
CMD [ "npm", "run-script", "start_docker_dev" ]
