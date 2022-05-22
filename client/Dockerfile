# Path: client\Dockerfile
# Node version and image for development
FROM node:16.13.0 AS development

# Setting up working directory
WORKDIR /usr/client/src/app

# Copy the application files to the container
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install -g @angular/cli@latest

# Bundle the application
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 4200
