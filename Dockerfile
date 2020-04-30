# Using the maintained image from the DockerHub. 
FROM node:10
# Create a working directory for application files.
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Expose a port so we can see our work. 
EXPOSE 8080
# Run the node web app. 
CMD ["node", "server.js"]
