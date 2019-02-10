import apiReg from '../utils/apiRegService'
import Cookies from './CookieService'

const RegisterService = {

  sendRegister: async (request) => {
    await apiReg.put('/profile', request)
  },
  getSchoolname: async () => {
    let data = await apiReg.get('/schools')
    return data
  },

  getProfile: async () => {
    const data = await apiReg.get('/profile')
    if (data.data.confirm_register === 1) {
      await Cookies.setCookie('name',profile.data.nickname)
    }
    return data
  }

}
export default RegisterService
