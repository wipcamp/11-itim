import Cookies from 'js-cookie'
import api from '../utils/api'

const AuthService = {
  login: async (request) => {
    let email
    try {
      await api.post('/auth/login', {
        'provider_name': 'facebook',
        'provider_id': request.userID,
        'accessToken': request.accessToken })
        .then(respons => {
          console.log(respons)
          if (respons) {
            Cookies.remove('email')
            Cookies.remove('tokenJWT')
            Cookies.remove('wip_id')
            email = request.email
            Cookies.set('tokenJWT', respons.data.token)
            Cookies.set('email', email)
            Cookies.set('wip_id', respons.data.wip_id)
          } else {
          }
        })
    } catch (error) {

    }
  }

}

export default AuthService
