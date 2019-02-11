import React, { Component } from 'react'
import styled from 'styled-components'

const Background = styled.div`
  display:${props => props.loadingout};
  margin-top:25vh;

`

const Position = styled.img`
  width:45%;
  position: absolute;
  @media (max-width:880px) {
    margin-top:30vh;
    position: absolute;
    width: 40%;
    bottom: 0;

  }
`

export default class Loading extends Component {
  render () {
    return (
      <Background loadingout={this.props.loadingout}>
        <div className = "container">
          <div className = "row text-center justify-content-center">
            <Position src = './../../static/img/loading.gif' />
          </div>
        </div>
      </Background>
    )
  }
}
