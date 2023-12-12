# Set the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and yarn.lock files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD npm run dev