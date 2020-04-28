# Using the following maintained image. 
FROM node:10
# Create app directory, this is where your code will live inside the container.
WORKDIR /usr/src/app
# Copy these files into the container. 
COPY package*.json ./ 
# Run npm install to perform an installation/ dependency update.
RUN npm install
# Bundle the app source code.
COPY . . 
#Expose the following port so we can see the result of our work. 
EXPOSE 8080
# Run the application. 
CMD ["node", "server.js"]
