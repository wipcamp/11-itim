import React from 'react'
import Router from 'next/router'
import Navbar from '../Core/Navbar'
import Complete from './Complete'
import Body from '../Core/Body'
import CookiesService from '../../service/CookieService';


export default class RegisComplete extends React.Component {
  state = {
    wipid:0,
    nickname:null,
    name:'',
    confirm: 0
  }
  componentDidMount = async () => {
    this.handleCheckLoginState()
  }
  handleCheckLoginState = async() => {
    if (await CookiesService.gettokenJWTCookie()) {
    }else{
        Router.push({
          pathname: '/index'
        })
    }
  }

  render() {
    return (
      <Body visible={this.props.visible}>
        <Navbar state={this.state} />
        <Complete handleCheckLoginState={this.handleCheckLoginState}  name={this.state.name}/>
      </Body>
    )          

  }
}
