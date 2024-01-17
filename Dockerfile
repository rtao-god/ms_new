FROM node:18.17.1-alpine
WORKDIR /app
COPY ./package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["yarn", "preview"]