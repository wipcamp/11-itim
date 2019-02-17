import React, { Fragment } from 'react'
import Complete from './Complete'
import RegisterService from '../../service/RegisterService';
import Cookies from '../../service/CookieService'

export default class RegisComplete extends React.Component {
  state = {
    nickname:''
  }
  componentDidMount = async () => {
    this.handleCheckLoginState()
  
  }
  handleCheckLoginState = async () => {
    if(!Cookies.gettokenJWTCookie()){
      location.href = '/index'
    }
     const profile = await RegisterService.getProfile()
    if (profile.data.confirm_register !== 1) {
  
      location.href = '/register'

    }
    
  this.setState({
    nickname :this.props.name||profile.data.firstname_th
  }) 
  }

  render() {
    
    return (
      <Fragment>
        <Complete
          handleCheckLoginState={this.handleCheckLoginState}
          name={this.state.nickname}
        />
      </Fragment>
    )
  }
}
