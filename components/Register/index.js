import React from 'react'
import Router from 'next/router'

import RegisterService from '../../service/RegisterService'

import RegistrationForm from './RegistrationForm'
import CookiesService from '../../service/CookieService.js'
import Validatetion from './Validatetion'

class Register extends React.Component {
  state = {
    schoolOptions: []
  }

  async componentDidMount() {
    const schoolname = await RegisterService.getSchoolname()
    await this.getSchool(schoolname.data)
  }

  getSchool = async schoolname => {
    let newSelectOptions = []
    for (let index = 0; index < schoolname.length; index++) {
      newSelectOptions.push({
        id: index,
        value: schoolname[index].school_name,
        label: schoolname[index].school_name
      })
    }
    this.setState({
      schoolOptions: newSelectOptions
    })
  }

  handleNextButton = e => {
    e.preventDefault()
    this.handlesendRegister()
  }
  handlesendRegister = async () => {
    if (Validatetion.handleValidation(this.props.profileData)) {
      try {
        await RegisterService.sendRegister(this.props.profileData)
      } catch (err) {
        console.log(this.props.profileData)
        console.log('err', err)
      }
      await this.props.setWipId(
        this.props.profileData.wip_id,
        this.props.profileData.nickname
      )
      if (this.props.questionStartIndex === -3) {
        this.props.changeQuestionStartIndex(0)
      }
      this.props.setPageIndex(1)
    } else {
    }
  }

  handleLogout = () => {
    CookiesService.removeJWTAndEmailCookie()
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

  render = () => {
    const profileData = this.props.profileData
    return (
      <RegistrationForm
        {...this.props}
        handleNextButton={this.handleNextButton}
        handlesendRegister={this.handlesendRegister}
        handleValidation={this.handleValidation}
        handleLogout={this.handleLogout}
        handleCheckLoginState={this.handleCheckLoginState}
        profileData={profileData}
        schoolOptions={this.state.schoolOptions}
        schoolName={this.state.schoolname}
      />
    )
  }
}
// const Register = props => (
//   <Body visible={props.visible}>
//   </Body>
// )

export default Register
