const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const evnconfig = {
  useFileSystemPublicRoutes: true,
  publicRuntimeConfig: {
    PATH_AUTH: process.env.PATH_AUTH,
    PATH_REGISTANCE: process.env.PATH_REGISTANCE,
    MINIO_ENDPOINT:process.env.MINIO_ENDPOINT,
    AWS_KEY : process.env.AWS_KEY,
    AWS_SECRET : process.env.AWS_SECRET,
    AWS_REGION:process.env.AWS_REGION,
    AWS_BUCKET:process.env.AWS_BUCKET,
    
  },
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD

  }
}

module.exports = withPlugins([
  [withCSS]
], evnconfig)
