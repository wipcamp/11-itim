import Cookies from '../service/CookieService'
import apiReg from '../utils/apiRegService'
// import apiAuth from '../utils/apiAuthService'

const RegisterService = {
  sendRegister: async (request) => {
    console.log(request)
    await apiReg.put('/profile', request, 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU0NTI4MjczMiwiZXhwIjoxNTQ1Mjg2MzMyLCJuYmYiOjE1NDUyODI3MzIsImp0aSI6Ilo2SWtBNmdzVk10V05DeE8iLCJzdWIiOjExMDAwNSwicHJ2IjoiOWFkNTg1NzdmYWI2ZmJjMTU1NDM0ZDM1OTFlZGYxNjRhMTc3NjVhYSJ9.yJ7nYYsj9OjDKQOtxDP4aNT2lfuC97db_Z6FK8r2pjY').then(respons => {
      Cookies.setCookie('tokenJWT', respons.data.token)
    })
  },
  getSchoolname: async () => {
    return apiReg.get('/schools')
  },
  getProfile: async () => {
    return apiReg.get('/profile', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU0NTI4MjczMiwiZXhwIjoxNTQ1Mjg2MzMyLCJuYmYiOjE1NDUyODI3MzIsImp0aSI6Ilo2SWtBNmdzVk10V05DeE8iLCJzdWIiOjExMDAwNSwicHJ2IjoiOWFkNTg1NzdmYWI2ZmJjMTU1NDM0ZDM1OTFlZGYxNjRhMTc3NjVhYSJ9.yJ7nYYsj9OjDKQOtxDP4aNT2lfuC97db_Z6FK8r2pjY')
  }

}
export default RegisterService
