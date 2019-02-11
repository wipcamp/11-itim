import styled from 'styled-components'
import React from 'react'
import Router from 'next/router'
import Button from '../Core/Button'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import AuthService from '../../service/AuthService'
import RegisterService from '../../service/RegisterService'

const responseFacebook = async (response) => {
  await AuthService.login(response)
}
const changetoRegisterPage = async () => {
  const profile = await RegisterService.getProfile()
  if (profile.data.confirm_register === 1) {
    Router.push({
      pathname: '/regiscomplete'
    })
  } else {
    Router.push({
      pathname: '/register'
    })
  }
}
const Background = styled.div`
  display:${props => props.face};
`
class LoginFaceBook extends React.Component {
  componentDidMount () {
    changetoRegisterPage()
  }
  render () {
    return (
      <Background face = {this.props.face}>
        <FacebookLogin
          scope="email"
          autoLoad={true}
          fields="name,email,picture,id"
          appId="293604811359850"
          callback={responseFacebook}
          render={renderProps => (
            <Button size="large" block type="primary" onClick={renderProps.onClick}>Login! เพื่อสมัครค่าย</Button>
          )}
        />
      </Background>

    )
  }
}

export default LoginFaceBook
