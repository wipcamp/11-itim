require('dotenv').config()
const withCSS = require('@zeit/next-css')
module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
    TIME_ZONE: process.env.TIME_ZONE
  },
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    ALCHEMIST_TOKEN: process.env.ALCHEMIST_TOKEN
  }

}
