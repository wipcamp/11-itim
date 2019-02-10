import React from 'react'
import { Subtitle, Paragraph, ParagraphBold } from '../Core/Text'

const Profile = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <Subtitle className="font-weight-bold mb-4 ">ข้อมูลส่วนตัว</Subtitle>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>ชื่อ(ไทย):</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.firstname_th}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>นามสกุล(ไทย):</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.lastname_th}</Paragraph>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>ชื่อ(อังกฤษ):</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.firstname_en}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>นามสกุล(อังกฤษ):</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.lastname_en}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>ชื่อเล่น:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.nickname}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>เพศ:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.gender}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>วันเกิด:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.dob}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>ศาสนา:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.religion}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4 ">
                  <ParagraphBold>เลขบัตรประชาชน:</ParagraphBold>
                </div>
                <div className="col-12 col-md-8">
                  <Paragraph>{props.profile.citizen_no}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 col-md-2 ">
                  <ParagraphBold>โรคประจำตัว:</ParagraphBold>
                </div>
                <div className="col-6 col-md-2">
                  <Paragraph>{props.profile.cangenital_disease}</Paragraph>
                </div>
                <div className="col-6 col-md-2">
                  <ParagraphBold>อาหารที่แพ้:</ParagraphBold>
                </div>
                <div className="col-6 col-md-2">
                  <Paragraph>{props.profile.allergic_food}</Paragraph>
                </div>
                <div className="col-6 col-md-2">
                  <ParagraphBold>ยาที่แพ้:</ParagraphBold>
                </div>
                <div className="col-6 col-md-2">
                  <Paragraph>{props.profile.allergic_drug}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>เบอร์โทรศัพท์:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.telno}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4 ">
                  <ParagraphBold>อีเมลล์:</ParagraphBold>
                </div>
                <div className="col-12 col-md-8">
                  <Paragraph>{props.profile.email}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4 ">
                  <ParagraphBold>เบอร์โทรผู้ปกครอง:</ParagraphBold>
                </div>
                <div className="col-12 col-md-8">
                  <Paragraph>{props.profile.guardian_telno}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-9 col-md-4 ">
                  <ParagraphBold>ผู้ปกครองเกี่ยวข้องเป็น:</ParagraphBold>
                </div>
                <div className="col-3 col-md-8">
                  <Paragraph>{props.profile.guardian_relative}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-md-4 ">
                  <ParagraphBold>ชื่อโรงเรียน:</ParagraphBold>
                </div>
                <div className="col-12 col-md-8">
                  <Paragraph>{props.profile.school_name}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>ระดับชั้น:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.school_level}</Paragraph>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>สายการเรียน:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.school_major}</Paragraph>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6 col-md-4 ">
                  <ParagraphBold>เกรด:</ParagraphBold>
                </div>
                <div className="col-6 col-md-8">
                  <Paragraph>{props.profile.gpax}</Paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
