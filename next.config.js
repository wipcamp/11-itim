const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const path = require('path')
const Dotenv = require('dotenv-webpack')

// const evnconfig = {
//   webpack: (config) => {
//     config.plugins = config.plugins || []

//     config.plugins = [
//       ...config.plugins,

//       // Read the .env file
//       new Dotenv({
//         path: path.join(__dirname, '.env'),
//         systemvars: true
//       })
//     ]

//     return config
//   }
// }

const evnconfig = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    PATH_AUTH: process.env.PATH_AUTH,
    PATH_REGISTANCE: process.env.PATH_REGISTANCE
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
