FROM node:8.14-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./static ./static
COPY ./utils ./utils
COPY ./service ./service
COPY ./.eslintrc.js .
COPY ./.bablerc .
COPY ./next.config.js .
COPY ./package-lock.json .
COPY ./components ./components
COPY ./pages ./pages
RUN ls -a
RUN yarn build

EXPOSE 3000
CMD ["yarn","start"]
