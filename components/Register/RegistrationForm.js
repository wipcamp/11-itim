import React from 'react'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import th_TH from 'antd/lib/locale-provider/th_TH'
import {
  Card,
  Dropdown,
  Menu,
  Icon,
  Radio,
  Form,
  LocaleProvider,
  DatePicker
} from 'antd'
import InputText from '../Core/InputText'
import Button from '../Core/Button'
import RegisterService from '../../service/RegisterService'

const DateFormat = 'DD/MM/YYYY'
const FormItem = Form.Item

class RegistrationForm extends React.Component {
  state = {
    registerDetail: {
      fName_th: '',
      lName_th: '',
      fName_eng: '',
      lName_eng: '',
      nickname: '',
      gender: '',
      DOB: '',
      religion: '',
      citizenNo: '',
      congenrtalDisease: '',
      allergicDrug: '',
      allergicFood: '',
      TelNo: '',
      guardian_telno: '',
      guardian_relative: '',
      schoolname: '',
      schoolGrade: '',
      major: '',
      gpax: '',
      email: Cookies.get('email')
    }
  }
  handleFields = (name, value) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        [name]: value
      }
    })
    console.log(this.state)
  }
  handleDate = (date, dateString) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail:{
        ...registerDetail,
        DOB: dateString
      }
    })
  }

  handleGender = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        gender: e.target.value
      }
    })
  }

  handleReligion = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        religion: e.key
      }
    })
  }

  handleschoolname = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        schoolname: e.key
      }
    })
  }
  handleschoolGrade = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        schoolGrade: e.key
      }
    })
  }
  handlemajor = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        major: e.key
      }
    })
  }

  handleNextButton = e => {
    console.log('handle')
    const jasonRegisDetail = JSON.stringify(this.state.registerDetail)
     RegisterService.sendRegister(jasonRegisDetail)
  }

  render() {
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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            <Card className="mt-2 mb-5">
              <h3 className="font-weight-bold mb-4 ml-5">ข้อมูลส่วนตัว</h3>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>ชื่อ(ไทย):</FormItem>
                      <FormItem>ชื่อ(อังกฤษ):</FormItem>
                      <FormItem>ชื่อเล่น:</FormItem>
                      <FormItem>วันเกิด:</FormItem>
                      <FormItem>เลขบัตรประชาชน:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="fName_th"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="fName_eng"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="nickname"
                        />
                      </FormItem>
                      <FormItem>
                        <LocaleProvider locale={th_TH}>
                          <DatePicker
                            placeholder="เลือกวันเกิด"
                            format={DateFormat}
                            defaultValue={this.state.registerDetail.DOB != '' ? this.state.registerDetail.DOB : ''}
                            onChange={ this.handleDate}
                          />
                        </LocaleProvider>
                      </FormItem>

                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="citizenNo"
                        />
                      </FormItem>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>นามสกุล(ไทย):</FormItem>
                      <FormItem>นามสกุล(อังกฤษ):</FormItem>
                      <FormItem>เพศ:</FormItem>
                      <FormItem>ศาสนา:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="lName_th"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="lName_eng"
                        />
                      </FormItem>
                      <FormItem>
                        <Radio.Group
                          value={this.state.registerDetail.gender}
                        >
                          <Radio.Button
                            size="large"
                            className="px-5"
                            value="Male"
                            name ="Male"
                            onClick={this.handleGender}
                          >
                            ชาย
                          </Radio.Button>
                          <Radio.Button
                            size="large"
                            className="px-5"
                            value="Female"
                            name="Female"
                            onClick={this.handleGender}
                          >
                            หญิง
                          </Radio.Button>
                        </Radio.Group>
                      </FormItem>
                      <FormItem>
                        <Dropdown overlay={religion}>
                          <InputText
                            className="col-6"
                            type=""
                            value={
                              this.state.registerDetail.religion != ''
                                ? this.state.registerDetail.religion
                                : ''
                            }
                            disabled
                            name=""
                            placeholder="เลือก"
                          />
                        </Dropdown>
                      </FormItem>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                  <div className="row">
                    <div className="col-6 text-right">
                      <FormItem>โรคประจำตัว:</FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <InputText name="congenrtalDisease" onChange={({ target: { name, value }}) => this.handleFields(name, value)} placeholder="หากไม่มีให้ใส่ -" />
                      </FormItem>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-6 text-right">
                      <FormItem>อาหารที่แพ้:</FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <InputText
                          placeholder="หากไม่มีให้ใส่ -"
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="allergicFood"
                        />
                      </FormItem>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row">
                    <div className="col-6 text-right">
                      <FormItem>ยาที่แพ้:</FormItem>
                    </div>
                    <div className="col-6">
                      <FormItem>
                        <InputText
                          placeholder="หากไม่มีให้ใส่ -"
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="allergicDrug"
                        />
                      </FormItem>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mb-4 ml-5">ข้อมูลการติดต่อ</h3>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>เบอร์โทรศัพท์:</FormItem>
                      <FormItem>เบอร์โทรผู้ปกครอง:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <InputText onChange={({ target: { name, value }}) => this.handleFields(name, value)} name="TelNo" />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="guardian_telno"
                        />
                      </FormItem>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>อีเมลล์:</FormItem>
                      <FormItem>ผู้ปกครองเกี่ยวข้องเป็น:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <InputText onChange={({ target: { name, value }}) => this.handleFields(name, value)} name="email" value={this.state.registerDetail.email != '' ? this.state.registerDetail.email : ''}/>
                      </FormItem>
                      <FormItem>
                        <InputText onChange={({ target: { name, value }}) => this.handleFields(name, value)} name="guardian_relative"/>
                      </FormItem>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="font-weight-bold mb-4 ml-5">ข้อมูลการศึกษา</h3>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>ชื่อโรงเรียน:</FormItem>
                      <FormItem>สายการเรียน:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <Dropdown overlay={schoolName}>
                          <InputText
                            className="col-6"
                            type="text"
                            value={
                              this.state.registerDetail.schoolname != ''
                                ? this.state.registerDetail.schoolname
                                : ''
                            }
                            placeholder="เลือก"
                          />
                        </Dropdown>
                      </FormItem>
                      <FormItem>
                        <Dropdown overlay={major}>
                          <InputText
                            className="col-6"
                            type="text"
                            value={
                              this.state.registerDetail.major != ''
                                ? this.state.registerDetail.major
                                : ''
                            }
                            placeholder="เลือก"
                          />
                        </Dropdown>
                      </FormItem>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>ระดับชั้น:</FormItem>
                      <FormItem>เกรด:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <Dropdown overlay={schoolGrade}>
                          <InputText
                            className="col-6"
                            type="text"
                            name="schoolGrade"
                            value={
                              this.state.registerDetail.schoolGrade != ''
                                ? this.state.registerDetail.schoolGrade
                                : ''
                            }
                            placeholder="เลือก"
                          />
                        </Dropdown>
                      </FormItem>
                      <FormItem>
                        <InputText  name="gpax" onChange={({ target: { name, value }}) => this.handleFields(name, value)}/>
                      </FormItem>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col text-right">
                  <Button
                    type="primary"
                    size="large"
                    onClick={this.handleNextButton}
                    className="px-5 mr-0"
                  >
                    บันทึกและถัดไป
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
