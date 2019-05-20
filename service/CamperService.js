import api from '../utils/apiCamperService'
import Cookies from './CookieService'
import {message} from 'antd'
import Router from 'next/router'


const AuthService = {
  submitData: async (name,value) => {
    try {
      let res = await api.post(`/campers/${name}`,{[name]:value})
      if(await res.data.message){
        message.success('Update successfully!')
        if(await name=='confirm'){
            location.href='https://wip.camp'
          }
      }
      if(!await res.data.message){
        message.warning('Update ข้อมูลไม่สำเร็จโปรดตรวจสอบฟอร์มให้ครบ')
      }
    } catch (error) {
      message.error('Update Fail')      
    }
   
  },
  getDocument: async()=>{
    return await api.get(`/campers/document`)
  },
  getdocconfirm:async()=>{
    console.log('test')
    return await api.get('/campers/getdocconfirm')
  }
}

export default AuthService
