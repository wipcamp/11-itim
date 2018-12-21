import React, { Fragment } from 'react'
import Navbar from '../Core/Navbar'
import Complete from './Complete'
import Router from 'next/router'
import Body from '../Core/Body'

export default class RegisComplete extends React.Component {
  state={
    wipid:0,
    nickname:null,
    name:'',
    confirm: 0,
    visible:'none'
  }
  componentDidMount = async () => {
    let profileRouter = await Router.query
    let fullName = profileRouter.fistname_th+"  "+ profileRouter.lastname_th
    this.setState({
      wipid: profileRouter.wipid,
      nickname: profileRouter.nickname,
      name: fullName,
      confirm: profileRouter.confirm
    })
    if (this.state.confirm === '1') {
      this.setState({
        visible: 'block'
      })
    }
  }

  render() {
    return (
      <Body visible={this.state.visible}>
        <Navbar state={this.state} />
        <Complete name={this.state.name}/>
      </Body>
    )
  }
}
