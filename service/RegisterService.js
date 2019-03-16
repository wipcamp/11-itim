import apiReg from '../utils/apiRegService'
import { EROFS } from 'constants';

const RegisterService = {

  sendRegister: async (request) => {
    let data
      await apiReg.put('/profile', request).then(res =>{
      console.log(res)
      }).catch(error=>{
        let status = error.response.status
        if (status === 401) {
          alert('Session หมดอายยุกรุณา login ใหม่')
          location.reload()
        }
      })

   
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
