import axios from 'axios'
import ENV from '../config/envConfig'
import CookiesService from '../service/CookieService';


const createInstance = (headers) => {
  return axios.create({
    baseURL: ENV.PATH_AUTH,
    headers: {
      'Authorization': `Bearer ${CookiesService.gettokenJWTCookie()}`,
      'Content-Type': 'application/json'
    }
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
