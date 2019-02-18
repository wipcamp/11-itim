import React from 'react'
import App from '../components/Core/App'
import Bg from '../components/Core/Bg'
import colors from '../config/colors'
import styled from 'styled-components'
import Router from 'next/router'
import CookiesService from '../service/CookieService.js'
import RegisterService from './../service/RegisterService'

const BgColors = styled.div`
  background: ${colors.bgcolor};
  @media (max-width : 768px) {
    height: 100%;
  }
`

class Register extends React.Component {
  componentDidMount() {
    this.handleCheckLoginState()
  }
  handleCheckLoginState = async () => {
    const profile = await RegisterService.getProfile()
    if (CookiesService.gettokenJWTCookie()) {
      console.log('get profile',profile.data)
      if (profile.data.confirm_register === 1 || profile.data.confirm_register === '1') {
        console.log('aleady confrim')
       Router.push({
        pathname: '/regiscomplete'
      })
      }
    } else {
      Router.push({
        pathname: '/index'
      })
    }
  }
  render() {
    return (
      <BgColors>
        <App />
        <Bg />
      </BgColors>
    )
  }
}

export default Register
