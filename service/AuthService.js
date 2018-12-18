import api from '../utils/api'
import Cookies from 'js-cookie'

const AuthService = {
  login: async (request) => {
    let email
    try {
      await api.post('/auth/login', {
        'provider_name': 'facebook',
        'provider_id': request.userID,
        'accessToken': request.accessToken })
        .then(function (respons) {
          if (respons) {
            Cookies.remove('email')
            Cookies.remove('tokenJWT')
            email = request.email
            Cookies.set('tokenJWT', respons.data.token)
            Cookies.set('email', email)
          } else {
            console.log('somthing worng')
          }
        })
    } catch (error) {

    }
  }

}

export default AuthService
