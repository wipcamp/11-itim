import apiReg from '../utils/apiRegService'

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
    return data
  }

}
export default RegisterService
