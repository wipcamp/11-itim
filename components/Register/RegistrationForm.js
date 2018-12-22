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
import Validatetion from './Validatetion'

const DateFormat = `DD/MM/YYYY`
const FormItem = Form.Item
const Option = AntDesignSelect.Option

class RegistrationForm extends React.Component {

  handleNextButton = e => {
    e.preventDefault()
    this.handlesendRegister(e)
  }
  handlesendRegister = async (e) => {
    console.log('val', e)
    if (await Validatetion.handleValidation(this.props.profileData)) {
      await RegisterService.sendRegister(this.props.profileData)
      await this.props.setWipId(
        this.props.profileData.wip_id,
        this.props.profileData.nickname
      )
      this.props.setPageIndex(1)
    } else {
    }
  }

  handleLogout= ()=>{
    CookiesService.removeJWTAndEmailCookie()
    this.handleCheckLoginState()
  }

  render () {
    const schoolGradeOptions = (
      <Menu onClick={this.props.handleschoolGrade}>
        <Menu.Item key="ม.4">4</Menu.Item>
        <Menu.Item key="ม.5">5</Menu.Item>
        <Menu.Item key="ม.6">6</Menu.Item>
      </Menu>
    )
    const major = (
      <Menu onClick={this.props.handlemajor}>
        <Menu.Item key="วิทย์-คณิต">วิทย์-คณิต</Menu.Item>
        <Menu.Item key="ศิลป์คำนวน">ศิลป์คำนวน</Menu.Item>
      </Menu>
    )
    const religion = (
      <Menu onClick={this.props.handleReligion}>
        <Menu.Item key="พุทธ">พุทธ</Menu.Item>
        <Menu.Item key="คริสต์">คริสต์</Menu.Item>
        <Menu.Item key="อิสลาม">อิสลาม</Menu.Item>
        <Menu.Item key="คริสต์">อื่นๆ</Menu.Item>
      </Menu>
    )

    const prefixName = (
      <AntDesignSelect onChange={this.props.handlePrefixName} defaultValue=''>
        <Option value="นาย">นาย</Option>
        <Option value="นางสาว">นางสาว</Option>
      </AntDesignSelect>
    )
    return (
      <div className="container-fluid">
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
                              this.props.handleFields(name, value)
                            }
                            name="fistname_th"
                            value={this.props.profileData.fistname_th}
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
                              this.props.handleFields(name, value)
                            }
                            name="lastname_th"
                            value={this.props.profileData.lastname_th}
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
                              this.props.handleFields(name, value)
                            }
                            name="fistname_en"
                            value={this.props.profileData.fistname_en}
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
                              this.props.handleFields(name, value)
                            }
                            name="lastname_en"
                            value={this.props.profileData.lastname_en}
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
                              this.props.handleFields(name, value)
                            }
                            name="nickname"
                            value={this.props.profileData.nickname}
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
                            defaultValue={this.props.profileData.gender}
                            value={this.props.profileData.gender}
                            size="large"
                          >
                            <Radio.Button
                              value="male"
                              name="Male"
                              className="px-4"
                              onClick={this.props.handleGender}
                            >
                              ชาย
                            </Radio.Button>
                            <Radio.Button
                              value="female"
                              name="Female"
                              className="px-4"
                              onClick={this.props.handleGender}
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
                                this.props.profileData.dob != ''
                                  ? this.props.profileData.dob
                                  : 'เลือกวันเกิด'
                              }
                              format={DateFormat}
                              defaultValue={moment('01/01/2002', DateFormat)}
                              onChange={this.props.handleDate}
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
                                this.props.profileData.religion != ''
                                  ? this.props.profileData.religion
                                  : ''
                              }
                              disabled
                              name=""
                              placeholder="เลือก"
                              value={this.props.profileData.religion}
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
                              this.props.handleFields(name, value)
                            }
                            name="citizen_no"
                            value={this.props.profileData.citizen_no}
                            maxlength="13"
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
                              this.props.handleFields(name, value)
                            }
                            placeholder="หากไม่มีให้ใส่ -"
                            value={this.props.profileData.cangenital_disease}
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
                              this.props.handleFields(name, value)
                            }
                            name="allergic_food"
                            value={this.props.profileData.allergic_food}
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
                              this.props.handleFields(name, value)
                            }
                            name="allergic_drug"
                            value={this.props.profileData.allergic_drug}
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
                              this.props.handleFields(name, value)
                            }
                            name="telno"
                            value={this.props.profileData.telno}
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
                              this.props.handleFields(name, value)
                            }
                            name="email"
                            value={
                              this.props.profileData.email != ''
                                ? this.props.profileData.email
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
                              this.props.handleFields(name, value)
                            }
                            name="guardian_telno"
                            value={this.props.profileData.guardian_telno}
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
                          <Paragraph>ผู้ปกครองเกี่ยวข้องเป็น:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            onChange={({ target: { name, value } }) =>
                              this.props.handleFields(name, value)
                            }
                            name="guardian_relative"
                            value={this.props.profileData.guardian_relative}
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
                              this.props.profileData.school_name != ''
                                ? this.props.profileData.school_name
                                : ''
                            }
                            onChange={this.props.handleChange}
                            options={this.props.schoolOptions}
                            placeholder={
                              this.props.profileData.school_name != ''
                                ? this.props.profileData.school_name
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
                                this.props.profileData.school_level != ''
                                  ? this.props.profileData.school_level
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
                                this.props.profileData.school_major != ''
                                  ? this.props.profileData.school_major
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
                          <Paragraph>เกรด(x.xx):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            required
                            name="gpax"
                            onChange={({ target: { name, value } }) =>
                              this.props.handleFields(name, value)
                            }
                            value={this.props.profileData.gpax}
                            type="number"
                            step="0.01"
                            min={0}
                            max={4}
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
