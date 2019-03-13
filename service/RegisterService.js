import apiReg from '../utils/apiRegService'
import { EROFS } from 'constants';

const RegisterService = {

  sendRegister: async (request) => {
    try {
        await apiReg.put('/profile', request)
    } catch (error) {
          return false
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
      return false
    }
  }

}
export default RegisterService
