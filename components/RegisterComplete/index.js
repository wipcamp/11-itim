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
    if(!Cookies.gettokenJWTCookie()){
      Router.push({
        pathname: '/'
      })
    }
     const profile = await RegisterService.getProfile()
    if (profile.data.confirm_register !== 1) {
      Router.push({
        pathname: '/register'
      })
    }
    
  const tempNickname = profile.data.nickname
  nickname =this.props.name||tempNickname
  console.log(nickname)
  }

  render() {
    
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={nickname}
        />
      </Fragment>
    )
  }
}
