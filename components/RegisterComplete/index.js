import React, { Fragment } from 'react'
import Navbar from '../Core/Navbar'
import Complete from './Complete'
import Router from 'next/router'

export default class RegisComplete extends React.Component {
  state={
    wipid:0,
    nickname:null,
    name:''
  }
  componentDidMount = async () => {
    let profileRouter = await Router.query
    let fullName = profileRouter.fistname_th+"  "+ profileRouter.lastname_th
    this.setState({
      wipid: profileRouter.wipid,
      nickname: profileRouter.nickname,
      name: fullName
    })
  }

  render() {
    return (
      <div>
        <Navbar state={this.state} />
        <Complete name={this.state.name}/>
      </div>
    )
  }
}
