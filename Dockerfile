# Build stage
FROM node:alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV BUILD_PATH=./docs
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=build /app/docs /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /var/www/certbot
RUN chown -R nginx:nginx /var/www/certbot
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
