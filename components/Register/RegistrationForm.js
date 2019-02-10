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
import CreatableSelect from 'react-select/lib/Creatable';

import Router from 'next/router'
import styled from 'styled-components'
import { Subtitle, Paragraph } from '../Core/Text'
import InputText from '../Core/InputText'
import ButtonPrimary from '../Core/Button'
import RegisterService from '../../service/RegisterService'
import CookiesService from '../../service/CookieService';

const DateFormat = `DD/MM/YYYY`
const FormItem = Form.Item
const Option = AntDesignSelect.Option

const CardReponsive = styled(Card)`
    @media (max-width : 768px){
    .ant-card-body{
      border:0;
      margin:0px 0px 10% 0px;
      padding:0px;
    }
      border:0;
      margin:0;
      padding:0px;
    .ant-card-bordered{
      border:0px;
    }

    .ant-form-item{
      margin-bottom:0px;
    }

    .ant-card-bordered{
      border:0;
      margin:0px 0px 10px 0px;
      padding:0px;
    }
  }
`
class RegistrationForm extends React.Component {

   handleLogout = ()=>{
    CookiesService.removeJWTAndEmailCookie()
    this.props.handleCheckLoginState()
  }

  render () {
    const { dob } = this.props.profileData

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12">
            <CardReponsive className="mb-5">
                <Subtitle className="font-weight-bold">
                  ข้อมูลส่วนตัว
                </Subtitle>
              <Form method="post" onSubmit={this.props.handleNextButton}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
                        <FormItem>
                          <Paragraph>ชื่อ(ไทย):</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <InputText
                            onChange={({ target: { name, value } }) =>
                              this.props.handleFields(name, value)
                            }
                            name="firstname_th"
                            value={this.props.profileData.firstname_th}
                            required
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2 ">
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
                      <div className="col-12 col-md-5 mt-2">
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
                            name="firstname_en"
                            value={this.props.profileData.firstname_en}
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
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
                      <div className="col-12 col-md-5 mt-2">
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
                      <div className="col-12 col-md-5 mt-2">
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
                              value="ชาย"
                              name="Male"
                              className="px-4"
                              onClick={this.props.handleGender}
                            >
                              ชาย
                            </Radio.Button>
                            <Radio.Button
                              value="หญิง"
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
                      <div className="col-12 col-md-5 mt-2">
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
                              defaultValue={moment(dob ? dob:'11/11/2011')}
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
                      <div className="col-12 col-md-5 mt-2">
                        <FormItem>
                          <Paragraph>ศาสนา:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                        <AntDesignSelect
                          value={this.props.profileData.religion}
                          defaultValue="ศาสนา"
                          style={{ width: '100%' }}
                          onChange={this.props.handleReligion}>
                              <Option value="พุทธ">พุทธ</Option>
                              <Option value="คริสต์">คริสต์</Option>
                              <Option value="อิสลาม">อิสลาม</Option>
                              <Option value="อื่นๆ">อื่นๆ</Option>
                          </AntDesignSelect>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
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
                            maxLength="13"
                          />
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-4">
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
                  <div className="col-12 col-md-4">
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
                  <div className="col-12 col-md-4">
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
                <Subtitle className="font-weight-bold mt-5">
                  ข้อมูลการติดต่อ
                </Subtitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
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
                      <div className="col-12 col-md-5 mt-2">
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
                      <div className="col-12 col-md-5 mt-2">
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
                      <div className="col-12 col-md-5 mt-2">
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
                <Subtitle className="font-weight-bold mt-5">
                  ข้อมูลการศึกษา
                </Subtitle>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
                        <FormItem>
                          <Paragraph>ชื่อโรงเรียน:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                        <CreatableSelect
                              onChange={this.props.handleChange}
                              options={this.props.schoolOptions}
                              placeholder={this.props.profileData.school_name != ""? this.props.profileData.school_name :"ใส่ชื่อโรงเรียน"}
                           /> 
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
                        <FormItem>
                          <Paragraph>ระดับชั้น:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                          <AntDesignSelect
                            value={this.props.profileData.school_level}
                            defaultValue="ระดับชั้น"
                            style={{ width: '100%' }}
                            onChange={this.props.handleschoolGrade}>
                            <Option value="ม.3 ขึ้น ม.4">ม.3 ขึ้น ม.4</Option>
                            <Option value="ม.4 ขึ้น ม.5">ม.4 ขึ้น ม.5</Option>
                            <Option value="ม.5 ขึ้น ม.6">ม.5 ขึ้น ม.6</Option>
                            <Option value="ม.6 ขึ้น ปี 1">ม.6 ขึ้น ปี 1</Option>
                           </AntDesignSelect>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
                        <FormItem>
                          <Paragraph>สายการเรียน:</Paragraph>
                        </FormItem>
                      </div>
                      <div className="col-12 col-md-7">
                        <FormItem>
                        <AntDesignSelect
                            value={this.props.profileData.school_major}
                            defaultValue="สายการเรียน"
                            style={{ width: '100%' }}
                            onChange={this.props.handlemajor}>
                            <Option value="วิทย์-คณิต">วิทย์-คณิต</Option>
                            <Option value="วิทย์-คอม">วิทย์-คอม</Option>
                            <Option value="ศิลป์คำนวน">ศิลป์คำนวน</Option>
                           </AntDesignSelect>
                        </FormItem>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row">
                      <div className="col-12 col-md-5 mt-2">
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
                    <ButtonPrimary htmlType="submit" className="mr-0 m-2">
                      ถัดไป
                    </ButtonPrimary>
                  </div>
                </div>
              </Form>
            </CardReponsive>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
