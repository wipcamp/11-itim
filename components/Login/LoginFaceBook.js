import styled from 'styled-components'
import React from 'react'
import Button from '../Core/Button'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import AuthService from '../../service/AuthService'
import RegisterService from '../../service/RegisterService'
import Router from 'next/router'

const responseFacebook = async (response) => {
  await AuthService.login(response)
}

const Img = styled.img`
height:auto;
width: 100%;
  @media (max-width : 768px) {
    position: ${props => props.position};
    bottom: 0;
  }
`
const Background = styled.div`
  display:${props => props.face};
  background-image: url('./../../static/img/loginBG.png');
  
`
class LoginFaceBook extends React.Component {
  componentDidMount() {
    this.changetoRegisterPage()
  }
  changetoRegisterPage = async () => {
    // try {
    //   const profile = await RegisterService.getProfile()
    //   if (profile.data.confirm_register === 1) {
    //     Router.push('/regiscomplete')
    //   } else {
    //     Router.push('/register')
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }
  render() {
    return (
      <Background face={this.props.face} className="text-center">
        <Img src="/static/img/logotitle.png" className="mb-5" />
        <Button size="large" block type="primary" >ปิดรับสมัครแล้ว</Button>
      </Background>
    )
  }
}

export default LoginFaceBook
