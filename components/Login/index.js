import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
const responseFacebook = (response) => {
  console.log(response)
}
class index extends React.Component {
  render () {
    return (
      <div className="justify-content-center">
        <FacebookLogin
          className="ml-5"
          appId="293604811359850"
          autoLoad
          callback={responseFacebook}
          render={renderProps => (
            <Button type="primary" onClick={renderProps.onClick}>This is my custom FB button</Button>
          )}
        />
      </div>

    )
  }
}

index.propTypes = {

}

export default index
