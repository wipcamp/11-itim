import Button from '../Core/Button'
import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Cookies from '../../service/CookieService'

import AuthService from '../../service/AuthService'
import RegisterService from '../../service/RegisterService'

const responseFacebook = async (response) => {
  await AuthService.login(response)
  let token = await Cookies.gettokenJWTCookie()
  if (token) {
    changetoRegisterPage()
  } else {
  }
}
let interval
const changetoRegisterPage = async () => {
  interval = setInterval(async () => {
    const profile = await RegisterService.getProfile()
    if (profile.data.confirm_register === 1) {
      clearInterval(interval)
      Router.push({
        pathname: '/regiscomplete'
      })
    } else {
      clearInterval(interval)
      Router.push({
        pathname: '/register'
      })
    }
  }, 1000)
}
class LoginFaceBook extends React.Component {
  componentDidMount () {
    changetoRegisterPage()
  }
  render () {
    return (
      <FacebookLogin
        scope="email"
        autoLoad={false}
        fields="name,email,picture,id"
        appId="293604811359850"
        callback={responseFacebook}
        render={renderProps => (
          <Button size="large " block type="primary" onClick={renderProps.onClick}>Login!</Button>
        )}
      />
    )
  }
}

export default LoginFaceBook
