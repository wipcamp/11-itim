FROM node:8.14-alpine
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build
RUN echo "TEST WebHook"
EXPOSE 3000
CMD ["yarn","start"]
