import Button from '../Core/Button'
import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Cookies from '../../service/CookieService'

import AuthService from '../../service/AuthService'

const responseFacebook = async (response) => {
  await AuthService.login(response)
  let token = await Cookies.gettokenJWTCookie()
  if (token) {
    changetoRegisterPage()
  } else {
  }
}

const changetoRegisterPage = async () => {
  if (await Cookies.gettokenJWTCookie()) {
    Router.push({
      pathname: '/register'
    })
  }
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
