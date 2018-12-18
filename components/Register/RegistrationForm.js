import React from 'react'

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
import Select from 'react-select'
import InputText from '../Core/InputText'
import Button from '../Core/Button'
import RegisterService from '../../service/RegisterService'

const DateFormat = 'DD/MM/YYYY'
const FormItem = Form.Item

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
      prefix_name:'',
      allergic_food: '',
      medical_approved:'',
      TelNo: '',
      guardian_telno: '',
      guardian_relative: '',
      school_id: '',
      school_level: '',
      school_major: '',
      gpax: '',
      email: '',
      school_name:'',
      wip_id:''
    },
    schoolOptions: [],
    schoolname: ''
  }
componentDidMount = async() => {
  const schoolname = await RegisterService.getSchoolname()
  console.log(schoolname)
  this.getSchool(schoolname.data)
  this.getProfilefromDB()
}
  getProfilefromDB = async()=>{
  const profile = await RegisterService.getProfile()
  console.log(profile)

    this.setState({
      registerDetail:profile.data[0]
    })
    this.props.setWipId(this.state.registerDetail.wip_id)
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
    const school = await data.id+1
    const schoolNameFromInput = data.value
    this.setState({
      registerDetail: {
        ...registerDetail,
        school_id: school,
        school_name: schoolNameFromInput
      },
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
  
    console.log('handle')
    this.handlesendRegister()

  }
  handlesendRegister = async() => {
    await RegisterService.sendRegister(this.state.registerDetail)
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
                          name="fistname_th"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="fistname_en"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value } }) =>
                            this.handleFields(name, value)
                          }
                          name="nickname"
                        />
                      </FormItem>
                      <FormItem>
                        <LocaleProvider locale={th_TH}>
                          <DatePicker
                            placeholder="เลือกวันเกิด"
                            format={DateFormat}
                            defaultValue={
                              this.state.registerDetail.dob != ''
                                ? this.state.registerDetail.dob
                                : ''
                            }
                            onChange={this.handleDate}
                          />
                        </LocaleProvider>
                      </FormItem>

                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="citizen_no"
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
                          name="lastname_th"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value }}) => this.handleFields(name, value)}
                          name="lastname_en"
                        />
                      </FormItem>
                      <FormItem>
                        <Radio.Group value={this.state.registerDetail.gender}>
                          <Radio.Button
                            size="large"
                            className="px-5"
                            value="Male"
                            name="Male"
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
                        <InputText name="cangenital_disease" onChange={({ target: { name, value }}) => this.handleFields(name, value)} placeholder="หากไม่มีให้ใส่ -" />
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
                          name="allergic_food"
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
                          name="allergic_drug"
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
                        <InputText
                          onChange={({ target: { name, value } }) =>
                            this.handleFields(name, value)
                          }
                          name="TelNo"
                        />
                      </FormItem>
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value } }) =>
                            this.handleFields(name, value)
                          }
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
                        <InputText
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
                      <FormItem>
                        <InputText
                          onChange={({ target: { name, value } }) =>
                            this.handleFields(name, value)
                          }
                          name="guardian_relative"
                        />
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
                        <Select
                          defaultValue={
                            this.state.schoolname != ''
                              ? this.state.schoolname
                              : ''
                          }
                          onChange={this.handleChange}
                          options={this.state.schoolOptions}
                          placeholder="เลือก"
                        />
                      </FormItem>
                      <FormItem>
                        <Dropdown overlay={major}>
                          <InputText
                            className="col-6"
                            type="text"
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
                <div className="col-6">
                  <div className="row">
                    <div className="col-4 text-right">
                      <FormItem>ระดับชั้น:</FormItem>
                      <FormItem>เกรด:</FormItem>
                    </div>
                    <div className="col-8">
                      <FormItem>
                        <Dropdown overlay={schoolGradeOptions}>
                          <InputText
                            className="col-6"
                            type="text"
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
                      <FormItem>
                        <InputText
                          name="gpax"
                          onChange={({ target: { name, value } }) =>
                            this.handleFields(name, value)
                          }
                        />
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
                    onClick={() => this.handleNextButton()}
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
