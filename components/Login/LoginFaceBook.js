import React from 'react'
import { Button } from 'antd'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

const responseFacebook = (response) => {
  console.log(response)
}
class LoginFaceBook extends React.Component {
  render () {
    return (
      <div>
        <FacebookLogin
          scope="email"
          fields="name,email,picture,id"
          className="ml-5"
          appId="293604811359850"
          autoLoad
          callback={responseFacebook}
          render={renderProps => (
            <Button type="primary" onClick={renderProps.onClick}>Login!</Button>
          )}
        />
      </div>
    )
  }
}

LoginFaceBook.propTypes = {

}

export default LoginFaceBook
