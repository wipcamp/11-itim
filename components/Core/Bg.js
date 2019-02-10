import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 100%;
  @media (max-width : 768px) {
    position: ${props => props.position};
    bottom: 0;
  }
`

class Bg extends Component {
  render() {
    return (
      <React.Fragment>
        <Img src="/static/img/MaskGroup.png" position={this.props.position} />
      </React.Fragment>
    )
  }
}

export default Bg