import Cookies from '../service/CookieService'
import apiReg from '../utils/apiRegService'
// import apiAuth from '../utils/apiAuthService'
const headers = {
  'Authorization': `Bearer ${Cookies.gettokenJWTCookie()}`,
  'Content-Type': 'application/x-www-form-urlencoded'
}
const RegisterService = {

  sendRegister: async (request) => {
    console.log(request)
    await apiReg.put('/profile', request).then(respons => {
    })
  },
  getSchoolname: async () => {
    return apiReg.get('/schools')
  },

  getProfile: async () => {
    return apiReg.get('/profile', headers)
  }

}
export default RegisterService
