import Cookies from '../service/CookieService'
import apiReg from '../utils/apiRegService'
// import apiAuth from '../utils/apiAuthService'

const RegisterService = {

  sendRegister: async (request) => {
    console.log('sending', request)
    await apiReg.put('/profile', request).then(respons => {
      console.log(respons)
    })
  },
  getSchoolname: async () => {
    let data = await apiReg.get('/schools')
    return data
  },

  getProfile: async () => {
    return apiReg.get('/profile')
  }

}
export default RegisterService
