import apiReg from '../utils/apiRegService'
import { EROFS } from 'constants';

const RegisterService = {

  sendRegister: async (request) => {
    let data
    try {
      data=   await apiReg.put('/profile', request)
    } catch (error) {
          return data
    }
  },
  getSchoolname: async () => {
    let data = await apiReg.get('/schools')
    return data
  },
  getProfile: async () => {
    let data 
    try {
       data = await apiReg.get('/profile')
      return data
    } catch (error) {
      return data
    }
  }

}
export default RegisterService
