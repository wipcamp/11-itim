import axios from 'axios'
import Cookies from '../service/CookieService'
import ENV from '../config/envConfig'

const headers = {
  'Authorization': `Bearer ${Cookies.gettokenJWTCookie()}`,
  'Content-Type': 'application/json'
}
const createInstance = () => {
  return axios.create({
    baseURL: ENV.PATH_REGISTANCE,
    headers
  })
}

const handleResponse = res => !res.data.error ? Promise.resolve(res) : Promise.reject(new Error(res.data.error))

const catchError = err => Promise.reject(err.message)

export default {
  get: (path, headers = {}) => (
    createInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}
