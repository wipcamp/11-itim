import React, { Fragment } from 'react'
import Router from 'next/router'
import Navbar from '../Core/Navbar'
import Complete from './Complete'
import CookiesService from '../../service/CookieService'

export default class RegisComplete extends React.Component {
  componentDidMount = async () => {
    this.handleCheckLoginState()
  }
  handleCheckLoginState = async () => {
    if (await CookiesService.gettokenJWTCookie()) {
    } else {
      Router.push({
        pathname: '/index'
      })
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar state={this.state} />
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.props.name}
        />
      </Fragment>
    )
  }
}
