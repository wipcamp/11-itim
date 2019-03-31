import React, { Component } from 'react'
import Router from 'next/router'
import NotPass from '../components/NotPass'
import CookiesService from '../service/CookieService';

export default class testPass extends Component {
  componentDidMount() {
    this.changetoRegisterPage()
  }
  changetoRegisterPage = async () => {
    try {
      if (!CookiesService.gettokenJWTCookie()) {
        Router.push('/index')
      }
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    return (
      <div>
        <NotPass />
      </div>
    )
  }
}
