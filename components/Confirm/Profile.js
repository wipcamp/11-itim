import React from 'react'
import RegisterService from '../../service/RegisterService'


export default class Profile extends React.Component {
  state = {
    profile: {}
  }
  componentDidMount = async () => {
    this.getProfilefromDB()
  }
  getProfilefromDB = async () => {
    const profile = await RegisterService.getProfile()
    this.setState({
      profile: profile.data
    })
    console.log("profile-state",this.state.profile)
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            <h3 className="font-weight-bold mb-4 ml-5">ข้อมูลส่วนตัว</h3>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ชื่อ(ไทย):</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.fistname_th}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>นามสกุล(ไทย):</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.lastname_th}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ชื่อ(อังกฤษ):</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.fistname_en}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>นามสกุล(อังกฤษ):</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.lastname_en}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ชื่อเล่น:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.nickname}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>เพศ:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.gender}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>วันเกิด:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.dob}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ศาสนา:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.religion}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>เลขบัตรประชาชน:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.citizen_no}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-6 ">
                    <p>โรคประจำตัว:</p>
                  </div>
                  <div className="col-6">
                    <p>{this.state.profile.cangenital_disease}</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6 ">
                    <p>อาหารที่แพ้:</p>
                  </div>
                  <div className="col-6">
                    <p>{this.state.profile.allergic_food}</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-6 ">
                    <p>ยาที่แพ้:</p>
                  </div>
                  <div className="col-6">
                    <p>{this.state.profile.allergic_drug}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>เบอร์โทรศัพท์:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.telno}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>อีเมลล์:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>เบอร์โทรผู้ปกครอง:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.guardian_telno}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ผู้ปกครองเกี่ยวข้องเป็น:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.guardian_relative}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ชื่อโรงเรียน:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.school_name}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>ระดับชั้น:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.school_name}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>สายการเรียน:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.school_major}</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <div className="col-12 col-md-4 ">
                    <p>เกรด:</p>
                  </div>
                  <div className="col-12 col-md-8">
                    <p>{this.state.profile.gpax}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
