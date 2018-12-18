import React from 'react'
import { Button } from 'antd'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import Cookies from 'js-cookie'
import api from '../../utils/api'
import Router from 'next/router'

const responseFacebook = async (response) => {
  console.log(response)
  console.log(response.accessToken)

  // try {
  //   await axios.post('http://localhost:8000/api/auth/login', {
  //     'provider_name': 'facebook',
  //     'provider_id': response.userID,
  //     'accessToken': response.accessToken })
  //     .then(function (token) {
  //       if (token.data) {
  //         console.log(token)
  //         Cookies.set('tokenJWT', token.data.token)
  //         console.log('cokkide______' + Cookies.get('tokenJWT'))
  //         changePage()
  //       } else {
  //         console.log('WTF NO TOKEN')
  //       }
  //     })
  // } catch (error) {
  //   console.log(error)
  // }

  try {
    await api.post('/auth/login', {
      'provider_name': 'facebook',
      'provider_id': response.userID,
      'accessToken': response.accessToken })
      .then(function (token) {
        if (token.data) {
          console.log(token)
          Cookies.set('tokenJWT', token.data.token)
          console.log('cokkide______' + Cookies.get('tokenJWT'))
          changePage()
        } else {
          console.log('WTF NO TOKEN')
        }
      })
  } catch (error) {
    console.log(error)
  }
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
