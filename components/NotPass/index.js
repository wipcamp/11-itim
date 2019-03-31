import React, { Fragment } from 'react'
import Complete from './NotPass'
import RegisterService from '../../service/RegisterService'
import CookiesService from '../../service/CookieService';

export default class RegisComplete extends React.Component {
  componentDidMount = async () => {
    if(CookiesService.gettokenJWTCookie()){
      const profile = await RegisterService.getProfile()
      this.setState({
        registerDetail: profile.data,
      })
      console.log(this.state.registerDetail)
    }

  }
  state = {
    registerDetail:{},
  }
  render () {
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.state.registerDetail.firstname_th}
        />
      </Fragment>
    )
  }
}
