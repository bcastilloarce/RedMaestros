# Use Node.js LTS version
FROM node:18-slim

# Set working directory
WORKDIR /app

# Install system dependencies and clean up
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    openssl \
    && rm -rf /var/lib/apt/lists/*

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm install --production=false

# Install Prisma globally
RUN npm install -g prisma

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN prisma generate

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Clean up development dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
