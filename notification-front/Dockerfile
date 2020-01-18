FROM node:12-alpine as build
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

## FROM nginx
FROM zzswang/docker-nginx-react:latest
ENV DEBUG=off

## COPY ./default.conf /etc/nginx/conf.d/
## COPY ./nginx.conf /etc/nginx/
COPY --from=build /app/build /usr/share/nginx/html
# COPY ./build /
CMD ["nginx", "-g", "daemon off;"] 

