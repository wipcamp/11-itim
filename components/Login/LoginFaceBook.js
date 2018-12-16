import React from 'react'
import { Button } from 'antd'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import Cookies from 'js-cookie'

const responseFacebook = (response) => {
  console.log(response)
  axios.post('http://localhost:8882/api/login').then(function (tokenJWT) {
    console.log(tokenJWT)
    Cookies.set('tokenJWT', tokenJWT.data.token)
    console.log(Cookies.get('tokenJWT'))
  })
}
class LoginFaceBook extends React.Component {
  render () {
    return (
      <div>
        <FacebookLogin
          scope="email"
          autoLoad={false}
          fields="name,email,picture,id"
          className="ml-5"
          appId="293604811359850"
          callback={responseFacebook}
          render={renderProps => (
            <Button type="primary" onClick={renderProps.onClick}>Login!</Button>
          )}
        />
      </div>
    )
  }
}

export default LoginFaceBook
