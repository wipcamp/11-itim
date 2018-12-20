import Cookies from '../service/CookieService'
import apiReg from '../utils/apiRegService'
// import apiAuth from '../utils/apiAuthService'

const RegisterService = {
  sendRegister: async (request) => {
    console.log(request)
    await apiReg.put('/profile', request, Cookies.gettokenJWTCookie).then(respons => {
      Cookies.setCookie('tokenJWT', respons.data.token)
    })
  },
  getSchoolname: async () => {
    return apiReg.get('/schools')
  },
  getProfile: async () => {
    return apiReg.get('/profile')
  }

}
export default RegisterService
