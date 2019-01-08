import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: (request) => {
    try {
      api.post('/auth/login', {
        'provider_name': 'facebook',
        'provider_id': request.userID,
        'accessToken': request.accessToken })
        .then(respons => {
          if (respons) {
            Cookies.setCookie('tokenJWT', respons.data.token)
            Cookies.setCookie('wip_Id', respons.data.wip_id)
          } else {
          }
        })
    } catch (error) {

    }
  }

}

export default AuthService
