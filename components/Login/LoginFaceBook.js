import React from 'react'
import { Button } from 'antd'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import Cookies from 'js-cookie'
import api from '../../utils/api'
import Router from 'next/router'

const responseFacebook = async (response) => {
  console.log(response)
  await axios.post(process.env.TEST + '/login').then(function (tokenJWT) {
    console.log(tokenJWT)
    Cookies.set('tokenJWT', tokenJWT.data.token)
    console.log(Cookies.get('tokenJWT'))
    changePage()
  })
}
const changePage = () => Router.push({
  pathname: '/Register'
})

class LoginFaceBook extends React.Component {
  render () {
    return (
      <div>
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
      </div>
    )
  }
}

export default LoginFaceBook
