import Cookies from 'js-cookie'
import apiReg from '../utils/apiRegService'
import apiAuth from '../utils/apiAuthService'

const RegisterService = {
  sendRegister: async (request) => {
    await apiReg.put('/profile', { request }).then(respons => {
      Cookies.set('tokenJWT', respons.data.token)
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
