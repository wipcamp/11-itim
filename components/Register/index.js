import React from 'react'
import RegisterService from '../../service/RegisterService'
import RegistrationForm from './RegistrationForm'
import CookiesService from '../../service/CookieService.js'
import Validatetion from './Validatetion'
import Router from 'next/router'

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
      let res =  await RegisterService.sendRegister(this.props.profileData)
      console.log(res)
      } catch (err) {
        CookiesService.removeJWTAndEmailCookie()
        this.props.handleCheckLoginState()
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

  // handleLogout = () => {
  //   CookiesService.removeJWTAndEmailCookie()
  //   this.handleCheckLoginState()
  // }

  // handleCheckLoginState = async () => {
  //   const profile = await RegisterService.getProfile()
  //   if (await CookiesService.gettokenJWTCookie()) {
  //     console.log('get profile',profile.data.confirm_register)
  //     if (profile.data.confirm_register === 1 || profile.data.confirm_register === '1') {
  //       console.log('aleady confrim')
  //      Router.push({
  //       pathname: '/regiscomplete'
  //     })
  //     }
  //   } else {
  //     Router.push({
  //       pathname : '/index'
  //     })
  //   }
  // }

  render = () => {
    const profileData = this.props.profileData
    return (
      <RegistrationForm
        {...this.props}
        handleNextButton={this.handleNextButton}
        handlesendRegister={this.handlesendRegister}
        handleValidation={this.handleValidation}
        handleLogout={this.handleLogout}
        profileData={profileData}
        schoolOptions={this.state.schoolOptions}
        schoolName={this.state.schoolname}
      />
    )
  }
}


export default Register
