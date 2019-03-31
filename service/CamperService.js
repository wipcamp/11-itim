import api from '../utils/apiCamperService'
import Cookies from './CookieService'
import {message} from 'antd'

const AuthService = {
  submitData: async (name,value) => {
    try {
      let res = await api.post(`/campers/${name}`,{[name]:value})
      if(await res.data.message){
        message.success('Update successfully!')
      }
      if(!await res.data.message){
        message.warning('Update ข้อมูลไม่สำเร็จโปรดตรวจสอบฟรอมให้ครบ')
      }
    } catch (error) {
      message.error('Update Fail')      
    }
   
  },
  getDocument: async()=>{
    return await api.get(`/campers/document`)
  }
}

export default AuthService
