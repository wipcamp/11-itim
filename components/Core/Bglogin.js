import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  @media (max-width : 880px) {
    margin-top:37vh;
    position: ${props => props.position};
    bottom:0;
  }
`

class Bg extends Component {
  render () {
    return (
      <React.Fragment>
        <Img src="/static/img/loginBG.png" position={this.props.position} />
      </React.Fragment>
    )
  }
}

export default Bg
