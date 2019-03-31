import api from '../utils/apiCamperService'
import Cookies from './CookieService'

const AuthService = {
  submitData: async (name,value) => {
 let res = await api.post(`/campers/${name}`,{name:value})
    console.log(res)
  }
}

export default AuthService
