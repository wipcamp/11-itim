import React from 'react'
import Router from 'next/router'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Cookies from 'js-cookie'
import { Button } from 'antd'

import AuthService from '../../service/AuthService'

const responseFacebook = async (response) => {
  await AuthService.login(response)
  let token = Cookies.get('tokenJWT')
  console.log(token)
  if (token) {
    // changePage()
  } else {
  }
}

const changePage = () => Router.push({
  pathname: '/register'
})

class LoginFaceBook extends React.Component {
  componentDidMount () {
    if (Cookies.get('tokenJWT')) {
      Router.push({
        pathname: '/register'
      })
    }
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
