import React from 'react'
import Navbar from '../Core/Navbar'
import Complete from './Complete'
import Body from '../Core/Body'

export default class RegisComplete extends React.Component {
  state = {
    wipid:0,
    nickname:null,
    name:'',
    confirm: 0
  }
  componentDidMount = async () => {
    
  }

  render() {
    return (
      <Body visible={this.props.visible}>
        <Navbar state={this.state} />
        <Complete name={this.state.name}/>
      </Body>
    )
  }
}
