# Path: api\Dockerfile
# Node version and image for development
FROM node:16.13.0 AS development

# Setting up working directory
WORKDIR /usr/src/app

# Copy the application files to the container
COPY package*.json ./
COPY tsconfig.build.json ./

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

#===============================================================
# Path: api\Dockerfile
# Node version and image for production
FROM node:16.13.0 AS production

# Setting up environment variables
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Setting up working directory
WORKDIR /usr/src/app

# Copy the application files from development to production
COPY --from=development /usr/src/app .

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "dist/main"]
