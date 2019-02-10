import React from 'react'
import App from '../components/Core/App'
import Bg from '../components/Core/Bg'
import colors from '../config/colors'
import styled from 'styled-components'

const BgColors = styled.div`
  background: ${colors.bgcolor};
`

class Register extends React.Component {
  render () {
    return (
      <BgColors>
        <App />
        <Bg />
      </BgColors>
    )
  }
}

export default Register
