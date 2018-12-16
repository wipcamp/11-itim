import React from 'react'
import PropTypes from 'prop-types'
import LoginFaceBook from './LoginFaceBook'

class index extends React.Component {

  state = {
    authDetail:{}
  }
  render () {
    return (
      <div>
        <LoginFaceBook />
      </div>

    )
  }
}

index.propTypes = {

}

export default index
