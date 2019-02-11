import React, { Component } from 'react'
import styled from 'styled-components'

const Background = styled.div`
  display:${props => props.loadingout};
`

const Position = styled.img`
  margin-top:35vh;
  width:45%;
  position: absolute;
  @media (max-width:720px) {
    width: 40%;
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
