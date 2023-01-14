# Intermediate container to help build the frontend
FROM node:12.18.3-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN ls
COPY .  .
RUN npm install
RUN npm run format
RUN npm run build

# dockerfile for production nginx environment
FROM nginx:1.15.2-alpine
# the react app should have been built `yarn build`
# so the build folder would be available
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /var/www
EXPOSE 80

# command to run on the nginx container in order to run the project.
ENTRYPOINT ["nginx","-g","daemon off;"]
