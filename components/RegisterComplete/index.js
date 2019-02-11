import React, { Fragment } from 'react'
import Router from 'next/router'
import Complete from './Complete'
import RegisterService from '../../service/RegisterService';
import Cookies from './../../service/CookieService'

export default class RegisComplete extends React.Component {
  state = {
    nickname:''
  }
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
    
  this.setState({
    nickname :this.props.name||profile.data.confirm_register.nickname
  }) 
  console.log(this.state.nickname)
  }

  render() {
    
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.state.nickname}
        />
      </Fragment>
    )
  }
}
