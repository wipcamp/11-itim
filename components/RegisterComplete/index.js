import React, { Fragment } from 'react'
import Router from 'next/router'
import Complete from './Complete'
import RegisterService from '../../service/RegisterService';
import Cookies from './../../service/CookieService'

let nickname
export default class RegisComplete extends React.Component {
  
  componentDidMount = async () => {
    this.handleCheckLoginState()
  
  }
  handleCheckLoginState = async () => {
     const profile = await RegisterService.getProfile()
    if (profile.data.confirm_register !== 1) {
      Router.push({
        pathname: '/register'
      })
    }
  nickname = profile.data.nickname
  }

  render() {
    if(!Cookies.gettokenJWTCookie()){
      Router.push({
        pathname: '/index'
      })
    }
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.props.name||nickname}
        />
      </Fragment>
    )
  }
}
