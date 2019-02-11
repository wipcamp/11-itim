import React, { Fragment } from 'react'
import RegisComplete from '../components/RegisterComplete'
import colors from '../config/colors'
import styled from 'styled-components'
import Bg from '../components/Core/Bg'

const BgColors = styled.div`
  background: ${colors.bgcolor};
  overflow:hidden;
  @media (max-width : 768px) {
    height: 100vh;
  }
`

class regisComplete extends React.Component {
  render () {
    return (
      <BgColors>
        <RegisComplete />
        <Bg position="absolute"/>
      </BgColors>
    )
  }
}

export default regisComplete
