# FROM node:18 as angular

# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# FROM httpd:alpine

# EXPOSE 3000
# WORKDIR /usr/local/apache2/htdocs
# COPY --from=angular /app/dist/todo-list .




    # Stage 1: Build Angular app
    FROM node:16 as angular

    WORKDIR /app

    # Copy package.json and package-lock.json separately to leverage Docker cache
    COPY package*.json ./
    RUN npm install

    COPY . .
    RUN npm run build --prod

    # Stage 2: Serve the built Angular app using Nginx
    FROM nginx:alpine

    # Remove the default Nginx welcome page
    RUN rm -rf /usr/share/nginx/html/*

    # Copy the built Angular app from the previous stage
    COPY --from=angular /app/dist/todo-list /usr/share/nginx/html

    # Ensure the Nginx user has access to the copied files  
    RUN chown -R nginx:nginx /usr/share/nginx/html

    # Expose port 80
    EXPOSE 80

    # Start Nginx
    CMD ["nginx", "-g", "daemon off;"]
