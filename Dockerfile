FROM nginx:1.15.9-alpine
COPY nginx.conf /etc/nginx.conf
WORKDIR /usr/share/html
COPY dist/v-help-app .
RUN ls -laR .
ENV PORT=8080
EXPOSE ${PORT}
