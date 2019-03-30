import styled from 'styled-components'
import React from 'react'
import Button from '../Core/Button'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import AuthService from '../../service/AuthService'
import RegisterService from '../../service/RegisterService'
import Router from 'next/router'
import CookiesService from '../../service/CookieService';

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
    try {
      if (CookiesService.gettokenJWTCookie()) {
    Router.push('/passing')
      } 
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <Background face={this.props.face} className="text-center">
        <Img src="/static/img/logotitle.png" className="mb-5" />
        <FacebookLogin
        scope="email"
        autoLoad={false}
        fields="name,email,picture,id"
        appId="2259610627641637"
        callback={responseFacebook}
        render={renderProps => (
          <React.Fragment>
            {/* <ButtonTranparent onClick={renderProps.onClick}> */}
            <Button size="large" block type="primary" onClick={renderProps.onClick} >ปิดรับสมัครแล้ว</Button>
            {/* </ButtonTranparent> */}
          </React.Fragment>
        )}
      />
      </Background>
    )
  }
}

export default LoginFaceBook
