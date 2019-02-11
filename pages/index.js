import React from 'react'
import Login from './../components/Login'
import BG from '../components/Core/Bglogin'
import colors from '../config/colors'
import styled from 'styled-components'

const BgColors = styled.div`
  @media (max-width : 768px) {
    height: 100%;
  }
`
class componentName extends React.Component {
  render () {
    return (
      <BgColors>
        <Login />
        <BG />
      </BgColors>
    )
  }
}

export default componentName
