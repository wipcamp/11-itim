import React, { Component } from 'react'
import Router from 'next/router'
import Pass from '../components/Pass'
import CookiesService from '../service/CookieService';
import AuthService from '../service/AuthService';


export default class testPass extends Component {
  componentDidMount() {
    this.changetoRegisterPage()
  }
  changetoRegisterPage = async () => {
    try {
      if (!CookiesService.gettokenJWTCookie()) {
        Router.push('/index')
        return '-.-'
      }
     let res = await AuthService.getRole()
     if(await parseInt(res.data.role)== 10 ||await  parseInt(res.data.role)== 2){
       return ''
     }else{
      Router.push('/index')
     }
       
    } catch (error) {
      console.log(error.response)
    }
  }
  render () {
    return (
      <div>
        <Pass />
      </div>
    )
  }
}
