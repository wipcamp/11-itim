import apiReg from '../utils/apiRegService'
import { EROFS } from 'constants';

const RegisterService = {

  sendRegister: async (request) => {
    try {
      await apiReg.put('/profile', request)
    } catch (error) {
      console.log(error)
    }
  },
  getSchoolname: async () => {
    let data = await apiReg.get('/schools')
    return data
  },
  getProfile: async () => {
    try {
      const data = await apiReg.get('/profile')
      return data
    } catch (error) {
      console.log(error)
    }
  }

}
export default RegisterService
