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
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
