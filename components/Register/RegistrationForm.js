import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Card, Input, Button, Dropdown, Menu, Icon ,Radio } from 'antd'
import axious from 'axios'
class RegistrationForm extends React.Component {
  state = {
    registerDetail :{
    fName_th:"",
    lName_th:"",
    fName_eng:"",
    lName_eng:"",
    nickname:"",
    gender:"",
    DOB:"",
    religion:"ศาสนา",
    citizenNo:"",
    congenrtalDisease:"",
    allergicDrug:"",
    allergicFood:"",
    TelNo:"",
    guardian_telno:"",
    guardian_relative:"",
    schoolname:"ชื่อโรงเรียน",
    schoolGrade:"ระดับชั่น",
    major:"สาขาที่เรียน",
    gpax:"",
    email:""
    }
  }
  handlefNameTH = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        fName_th: e.target.value
      }
    })
  }
  handlelNameTH = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        lName_th: e.target.value
      }
    })
  }
  handlefNameEN = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        fName_eng: e.target.value
      }
    })
  }
  handlelNameEN = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        lName_eng: e.target.value
      }
    })
  }
  handleNickname = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        nickname: e.target.value
      }
    })
  }
  handleGender = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        gender: e.target.value
      }
    })
  }
  handleDOB = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        DOB: e.target.value
      }
    })
  }
  handleReligion = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        religion: e.key
      }
    })

  }
  handlecitizenNo = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        citizenNo: e.target.value
      }
    })
  }
  handlecongenrtalDisease = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        congenrtalDisease: e.target.value
      }
    })
  }
  handleallergicDrug = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        allergicDrug: e.target.value
      }
    })
  }
  handleallergicFood = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        allergicFood: e.target.value
      }
    })
  }
  handleTelNo = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        TelNo: e.target.value
      }
    })
  }
  handleguardian_telno = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        guardian_telno: e.target.value
      }
    })
  }
  handleguardian_relative = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        guardian_relative: e.target.value
      }
    })
  }
  handleschoolname = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        schoolname: e.key
      }
    })
  }
  handleschoolGrade= (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        schoolGrade: e.key
      }
    })
  }
  handlemajor = (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        major: e.key
      }
    })
  }
  handlegpax= (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        gpax: e.target.value
      }
    })
  }
  handleEmail= (e) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        email: e.target.value
      }
    })
  }
 handleNextButton=()=>{
  axious.push('http://localhost:8882/api/login',this.state.registerDetail).then(function(response){
    console.log("registerComplete");
  })
 }

  render () {

    
const ButtonGroup = Button.Group


const schoolName = (
  <Menu onClick={this.handleschoolname}>
    <Menu.Item key="ZomPongSchool">ZomPongSchool</Menu.Item>
    <Menu.Item key="ZomPongSchool">ZomPongSchool</Menu.Item>
    <Menu.Item key="ZomPongSchool">ZomPongSchool</Menu.Item>
  </Menu>
)
const schoolGrade = (
  <Menu onClick={this.handleschoolGrade}>
    <Menu.Item key="ม.4">4</Menu.Item>
    <Menu.Item key="ม.5">5</Menu.Item>
    <Menu.Item key="ม.6">6</Menu.Item>
  </Menu>
)
const major = (
  <Menu onClick={this.handlemajor}>
    <Menu.Item key="วิทย์-คณิต">วิทย์-คณิต</Menu.Item>
    <Menu.Item key="ศิลป์คำนวน">ศิลป์คำนวน</Menu.Item>
  </Menu>
)
    const religion = (
      <Menu onClick={this.handleReligion}>
        <Menu.Item key="พุทธ">พุทธ</Menu.Item>
        <Menu.Item key="อิสราม">อิสราม</Menu.Item>
        <Menu.Item key="คริสต์">คริสต์</Menu.Item>
      </Menu>

      
    )
    return (
      <Fragment>
        <div className="justify-content">
          <Card title="" className="mt-2">
            <h3 className="">ข้อมูลทั่วไป</h3>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="fName_th"  onChange={this.handlefNameTH}  placeholder="ชื่อจริง"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="lName_th" onChange={this.handlelNameTH}  placeholder="นามสกุล"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className=" " type="text" name="fName_eng" onChange={this.handlefNameEN} placeholder="FirstName"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="lName_eng" onChange={this.handlelNameEN} placeholder="LastName"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="nickname" onChange={this.handleNickname} placeholder="ชื่อเล่น"/>
              </div>
              <div className="col">
                <Radio.Group value={this.state.registerDetail.gender} onChange={this.handleGender}>
                  <Radio.Button value="Male">Male</Radio.Button>
                  <Radio.Button value="Female">Female</Radio.Button>
              </Radio.Group>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Input className="" type="date" name="DOB" onChange={this.handleDOB} placeholder="TelNo(เบอร์โทร)"/>
              </div>
              <div className="col">
                <Dropdown overlay={religion} >
                  <Input className="" type="submit" value={this.state.registerDetail.religion} disabled name="" placeholder=""/>
                </Dropdown >
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="citizenNo"  onChange={this.handlecitizenNo} placeholder="เลขบัตร"/>
              </div>
              <div className="col">
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <Input className="" type="text" name="congenrtalDisease"  onChange={this.handlecongenrtalDisease} placeholder="โรคประจำตัว"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="allergicDrug"  onChange={this.handleallergicDrug} placeholder="ยาที่แพ้"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="allergicFood"  onChange={this.handleallergicFood} placeholder="อาหารที่แพ้"/>
              </div>
            </div>
            <h3 className="mt-3">ข้อมูลการติดต่อ</h3>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="TelNo"  onChange={this.handleTelNo} placeholder="เบอร์นักเรียน"/>
              </div>
              <div className="col">
                <Input className="" type="email" name="email"  onChange={this.handleEmail} placeholder="email"/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="guardian_telno"  onChange={this.handleguardian_relative} placeholder="เบอร์ผู้ปกครอง"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="guardian_relative"  onChange={this.handleguardian_relative} placeholder="ความเกี่ยวข้อง"/>
              </div>
            </div>

            <h3 className="mt-3">ข้อมูลการศึกษา</h3>
            <div className="row mt-2">
              <div className="col">
                <Dropdown overlay={schoolName}>
                <Input className="" type="submit" value={this.state.registerDetail.schoolname} placeholder="ระดับชั้น"/>
                </Dropdown>
              </div>

              <div className="col">
                <Dropdown overlay={schoolGrade}>
                  <Input className="" type="submit" value={this.state.registerDetail.schoolGrade} placeholder="ระดับชั้น"/>
                </Dropdown>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Dropdown overlay={major}>
                <Input className="" type="submit" value={this.state.registerDetail.major} placeholder="ระดับชั้น"/>
                </Dropdown>
              </div>
              <div className="col">
                <Input className="" type="number"  onChange={this.handlegpax} name="gpax" placeholder="gpax"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
              </div>
              <div className="col">
                <Button className="mt-3" type="primary" onClick={this.handleNextButton}>Next</Button>
              </div>
            </div>
          </Card>,
        </div>
      </Fragment>
    )
  }
}




export default RegistrationForm
