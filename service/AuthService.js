import api from '../utils/apiAuthService'
import Cookies from './CookieService'

const AuthService = {
  login: async (request) => {
  
     let res = await api.post('/auth/login', {
        'provider_name': 'facebook',
        'provider_id': request.userID,
        'accessToken': request.accessToken,
        'role': 1
      })
      if (res) {
        Cookies.setCookie('tokenJWT', res.data.token)
        Cookies.setCookie('wip_Id', res.data.wip_id)
        return res
      }
    
  }

}

export default AuthService
