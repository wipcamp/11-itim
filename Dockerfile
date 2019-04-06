FROM node:8.14-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./config ./config
COPY ./utils ./utils
COPY ./service ./service
COPY ./test ./test
COPY ./.eslintrc.js .
COPY ./.bablerc .
COPY ./next.config.js .
COPY ./package-lock.json .
COPY ./components ./components
COPY ./pages ./pages
COPY ./static ./static
RUN yarn build

EXPOSE 3000
CMD ["yarn","start"]
