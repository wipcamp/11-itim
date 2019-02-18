import React, { Fragment } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import RegisComplete from '../components/RegisterComplete'
import colors from '../config/colors'
import Bg from '../components/Core/Bg'
import CookiesService from '../service/CookieService.js'
import RegisterService from './../service/RegisterService'


const BgColors = styled.div`
  background: ${colors.bgcolor};
  overflow:hidden;
  @media (max-width : 768px) {
    height: 100vh;
  }
`

class regisComplete extends React.Component {
  state = {
    firstname_th:''
  }
  componentDidMount() {
    this.handleCheckLoginState()
  }
  handleCheckLoginState = async () => {
    const profile = await RegisterService.getProfile()
    if (CookiesService.gettokenJWTCookie()) {
      if (profile.data.confirm_register !== 1 || profile.data.confirm_register!== '1') {
       Router.push({
        pathname: '/register'
      })
      }
    } else {
      Router.push({
        pathname: '/index'
      })
    }
    this.setState({
      firstname_th:profile.data.firstname_th
    })
  }
  render () {
    return (
      <BgColors>
        <RegisComplete name={this.state.firstname_th}/>
        <Bg position="absolute"/>
      </BgColors>
    )
  }
}

export default regisComplete
