# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the remaining source code to the working directory
COPY . .

# Set the container command to run the Ninja Invoice script
CMD ["node", "ninja-invoice.js"]
