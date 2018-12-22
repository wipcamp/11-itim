import React from 'react'
import th_TH from 'antd/lib/locale-provider/th_TH'
import {
  Card,
  Dropdown,
  Menu,
  Radio,
  Form,
  LocaleProvider,
  DatePicker,
  Select as AntDesignSelect
} from 'antd'
import moment from 'moment'
import Select from 'react-select'
import Router from 'next/router'

import { Subtitle, Paragraph } from '../Core/Text'
import InputText from '../Core/InputText'
import ButtonPrimary from '../Core/Button'
import RegisterService from '../../service/RegisterService'
import CookiesService from '../../service/CookieService';

const DateFormat = `DD/MM/YYYY`
const FormItem = Form.Item
const Option = AntDesignSelect.Option

class RegistrationForm extends React.Component {
  state = {
    registerDetail: {
      fistname_th: '',
      lastname_th: '',
      fistname_en: '',
      lastname_en: '',
      nickname: '',
      gender: '',
      dob: '',
      religion: '',
      citizen_no: '',
      cangenital_disease: '',
      allergic_drug: '',
      prefix_name: '',
      allergic_food: '',
      medical_approved: '',
      telno: '',
      guardian_telno: '',
      guardian_relative: '',
      school_id: '',
      school_level: '',
      school_major: '',
      gpax: '',
      email: '',
      school_name: '',
      wip_id: '',
      confirm_register: ''
    },
    schoolOptions: [],
    schoolname: ''
  }
  componentDidMount = async () => {
    const schoolname = await RegisterService.getSchoolname()
    this.getSchool(schoolname.data)
    this.getProfilefromDB()
    console.log(this.state.registerDetail)
    
  }
  getProfilefromDB = async () => {
    const profile = await RegisterService.getProfile()
    this.setState({
      registerDetail: profile.data
    })
    await this.props.setWipId(
      this.state.registerDetail.wip_id,
      this.state.registerDetail.nickname
      )
    if (await this.state.registerDetail.confirm_register === 1) {
      Router.push({
        pathname: '/regiscomplete'
      })
    }
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
    await this.setState({
      schoolOptions: newSelectOptions
    })
  }

  handleFields = (name, value) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        [name]: value
      }
    })
  }
  handleDate = (date, dateString) => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        dob: date && date.format('Y-M-D')
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

  handleChange = async data => {
    const { registerDetail } = this.state
    const school = (await data.id) + 1
    const schoolNameFromInput = data.value
    this.setState({
      registerDetail: {
        ...registerDetail,
        school_id: school,
        school_name: schoolNameFromInput
      }
    })
    console.log(this.state.schoolname)
  }
  handleschoolGrade = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        school_level: e.key
      }
    })
  }
  handlemajor = e => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        school_major: e.key
      }
    })
  }

  handleNextButton = e => {
    e.preventDefault()
    this.handlesendRegister()
  }
  handlesendRegister = async () => {
    if (this.handleValidation()) {
      await RegisterService.sendRegister(this.state.registerDetail)
      await this.props.setWipId(
        this.state.registerDetail.wip_id,
        this.state.registerDetail.nickname
      )
      this.props.setPageIndex(1)
    } else {
    }
  }
  handleValidation = () => {
    let registerDetail = this.state.registerDetail
    for (let index in registerDetail) {
      if (registerDetail.hasOwnProperty(index)) {
        if (registerDetail[index] === '') {
          window.alert('โปรดกรอกข้อมูลให้ครบ')
          return false
        } else {
          return true
        }
      }
    }
  }

  handlePrefixName = valuePrefix => {
    const { registerDetail } = this.state
    this.setState({
      registerDetail: {
        ...registerDetail,
        prefix_name: valuePrefix
      }
    })
  }
  handleLogout= ()=>{
    CookiesService.removeJWTAndEmailCookie()
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
    const schoolGradeOptions = (
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
        <Menu.Item key="คริสต์">อื่นๆ</Menu.Item>
      </Menu>
    )

    const prefixName = (
      <AntDesignSelect onChange={this.handlePrefixName} defaultValue="นาย">
        <Option value="นาย">นาย</Option>
        <Option value="นางสาว">นางสาว</Option>
      </AntDesignSelect>
    )
    return (
      <div className="container-fluid">
      <button onClick={this.handleLogout}>Emergercy logout ชั่วคราวจ้าาา</button>
        <div className="row justify-content-center">
          <div className="col-10">
            <Card className="mt-2 mb-5">
              <Form method="post" onSubmit={this.handleNextButton}>
                <Subtitle className="font-weight-bold mb-4 ml-5">
                  ข้อมูลส่วนตัว
                </Subtitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ชื่อ(ไทย):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            addonBefore={prefixName}
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="fistname_th"
                            value={this.state.registerDetail.fistname_th}
                            required
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>นามสกุล(ไทย):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="lastname_th"
                            value={this.state.registerDetail.lastname_th}
                            required
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ชื่อ(อังกฤษ):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="fistname_en"
                            value={this.state.registerDetail.fistname_en}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>นามสกุล(อังกฤษ):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="lastname_en"
                            value={this.state.registerDetail.lastname_en}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ชื่อเล่น:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="nickname"
                            value={this.state.registerDetail.nickname}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>เพศ:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <Radio.Group
                            defaultValue={this.state.registerDetail.gender}
                            value={this.state.registerDetail.gender}
                            size="large"
                          >
                            <Radio.Button
                              value="male"
                              name="Male"
                              className="px-4"
                              onClick={this.handleGender}
                            >
                              ชาย
                            </Radio.Button>
                            <Radio.Button
                              value="female"
                              name="Female"
                              className="px-4"
                              onClick={this.handleGender}
                            >
                              หญิง
                            </Radio.Button>
                          </Radio.Group>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>วันเกิด:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <LocaleProvider locale={th_TH}>
                            <DatePicker
                              placeholder={
                                this.state.registerDetail.dob != ''
                                  ? this.state.registerDetail.dob
                                  : 'เลือกวันเกิด'
                              }
                              format={DateFormat}
                              defaultValue={moment('01/01/2002', DateFormat)}
                              onChange={this.handleDate}
                              locale={th_TH}
                            />
                          </LocaleProvider>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ศาสนา:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <Dropdown overlay={religion}>
                            <InputText
                              required
                              className="col-6"
                              type="button"
                              value={
                                this.state.registerDetail.religion != ''
                                  ? this.state.registerDetail.religion
                                  : ''
                              }
                              disabled
                              name=""
                              placeholder="เลือก"
                              value={this.state.registerDetail.religion}
                            />
                          </Dropdown>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>เลขบัตรประชาชน:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="citizen_no"
                            value={this.state.registerDetail.citizen_no}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6 ">
                        <FormItem>
                          <Paragraph>โรคประจำตัว:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-6">
                        <FormItem>
                          <InputText
                            required
                            name="cangenital_disease"
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            placeholder="หากไม่มีให้ใส่ -"
                            value={this.state.registerDetail.cangenital_disease}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6 ">
                        <FormItem>
                          <Paragraph>อาหารที่แพ้:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-6">
                        <FormItem>
                          <InputText
                            required
                            placeholder="หากไม่มีให้ใส่ -"
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="allergic_food"
                            value={this.state.registerDetail.allergic_food}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="row">
                      <div className="col-6 ">
                        <FormItem>
                          <Paragraph>ยาที่แพ้:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-6">
                        <FormItem>
                          <InputText
                            required
                            placeholder="หากไม่มีให้ใส่ -"
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="allergic_drug"
                            value={this.state.registerDetail.allergic_drug}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <Subtitle className="font-weight-bold mb-4 ml-5">
                  ข้อมูลการติดต่อ
                </Subtitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>เบอร์โทรศัพท์:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="telno"
                            value={this.state.registerDetail.telno}
                            type="tel"
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>อีเมลล์:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            type="email"
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="email"
                            value={
                              this.state.registerDetail.email != ''
                                ? this.state.registerDetail.email
                                : ''
                            }
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>เบอร์โทรผู้ปกครอง:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="guardian_telno"
                            value={this.state.registerDetail.guardian_telno}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ผู้ปกครองเกี่ยวข้องเป็น:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            name="guardian_relative"
                            value={this.state.registerDetail.guardian_relative}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <Subtitle className="font-weight-bold mb-4 ml-5">
                  ข้อมูลการศึกษา
                </Subtitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ชื่อโรงเรียน:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <Select
                            defaultValue={
                              this.state.registerDetail.school_name != ''
                                ? this.state.registerDetail.school_name
                                : ''
                            }
                            onChange={this.handleChange}
                            options={this.state.schoolOptions}
                            placeholder={
                              this.state.registerDetail.school_name != ''
                                ? this.state.registerDetail.school_name
                                : 'เลือก'
                            }
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>ระดับชั้น:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <Dropdown overlay={schoolGradeOptions}>
                            <InputText
                              required
                              className="col-6"
                              type="button"
                              name="school_level"
                              value={
                                this.state.registerDetail.school_level != ''
                                  ? this.state.registerDetail.school_level
                                  : ''
                              }
                              placeholder="เลือก"
                            />
                          </Dropdown>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>สายการเรียน:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <Dropdown overlay={major}>
                            <InputText
                              required
                              className="col-6"
                              type="button"
                              value={
                                this.state.registerDetail.school_major != ''
                                  ? this.state.registerDetail.school_major
                                  : ''
                              }
                              placeholder="เลือก"
                            />
                          </Dropdown>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 ">
                        <FormItem>
                          <Paragraph>เกรด:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            name="gpax"
                            onChange={({ target: { name, value } }) =>
                              this.handleFields(name, value)
                            }
                            value={this.state.registerDetail.gpax}
                            type="number"
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col text-right">
                    <ButtonPrimary htmlType="submit" className="mr-0">
                      ถัดไป
                    </ButtonPrimary>
                  </div>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
