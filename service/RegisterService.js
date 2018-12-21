import Cookies from '../service/CookieService'
import apiReg from '../utils/apiRegService'
// import apiAuth from '../utils/apiAuthService'

const RegisterService = {

  sendRegister: async (request) => {
    console.log(request)
    console.log()
    await apiReg.put('/profile', request).then(respons => {
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
