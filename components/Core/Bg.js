import React, { Component } from 'react'
import styled from 'styled-components'

const BgColors = styled.div`
  /* background: #F8E9D6; */
`

const Img = styled.img`
  width: 100%;
`

class Bg extends Component {
  render () {
    return (
      <BgColors>
        <Img src="/static/img/MaskGroup.png" />
      </BgColors>
    )
  }
}

export default Bg