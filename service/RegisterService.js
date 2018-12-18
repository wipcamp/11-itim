import Cookies from 'js-cookie'
import api from '../utils/api'

const RegisterService = {
  sendRegister: async (request) => {
    console.log('send')
    await api.put('/register', { request }).then(respons => {
      Cookies.set('tokenJWT', respons.data.token)
    })
  }
}
export default RegisterService
