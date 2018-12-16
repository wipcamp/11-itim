import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Card, Input, Button, Dropdown, Menu, Icon } from 'antd'

const ButtonGroup = Button.Group

const religion = (
  <Menu>
    <Menu.Item key="1">พุทธ</Menu.Item>
    <Menu.Item key="2">อิสราม</Menu.Item>
    <Menu.Item key="3">คลิส</Menu.Item>
  </Menu>
)
const schoolName = (
  <Menu>
    <Menu.Item key="1">ZomPongSchool</Menu.Item>
    <Menu.Item key="2">ZomPongSchool</Menu.Item>
    <Menu.Item key="3">ZomPongSchool</Menu.Item>
  </Menu>
)
const schoolGrade = (
  <Menu>
    <Menu.Item key="1">4</Menu.Item>
    <Menu.Item key="2">5</Menu.Item>
    <Menu.Item key="3">6</Menu.Item>
  </Menu>
)
const major = (
  <Menu>
    <Menu.Item key="1">วิทย์-คณิต</Menu.Item>
    <Menu.Item key="2">ศิลป์คำนวน</Menu.Item>
  </Menu>
)

class RegistrationForm extends React.Component {
  render () {
    return (
      <Fragment>
        <div className="justify-content">
          <Card title="" className="mt-2">

            <h3 className="">ข้อมูลทั่วไป</h3>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="fName_th" placeholder="ชื่อจริง"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="lName_th" placeholder="นามสกุล"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className=" " type="text" name="fName_eng" placeholder="FirstName"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="lName_eng" placeholder="LastName"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="nickname" placeholder="ชื่อเล่น"/>
              </div>
              <div className="col">
                <ButtonGroup>
                  <Button value="Male">Male</Button>
                  <Button value="Female">Female</Button>
                </ButtonGroup>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Input className="" type="date" name="telNo" placeholder="TelNo(เบอร์โทร)"/>
              </div>
              <div className="col">
                <Dropdown overlay={religion}>
                  <Input className="" type="submit" value="ศาสนา" disabled name="" placeholder=""/>
                </Dropdown>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="citizenNo" placeholder="เลขบัตร"/>
              </div>
              <div className="col">
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <Input className="" type="text" name="congenrtalDisease" placeholder="โรคประจำตัว"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="allergicDrug" placeholder="ยาที่แพ้"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="allergicFood" placeholder="อาหารที่แพ้"/>
              </div>
            </div>
            <h3 className="mt-3">ข้อมูลการติดต่อ</h3>
            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="TelNo" placeholder="เบอร์นักเรียน"/>
              </div>
              <div className="col">
                <Input className="" type="email" name="email" placeholder="email"/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Input className="" type="text" name="guardian_telno" placeholder="เบอร์ผู้ปกครอง"/>
              </div>
              <div className="col">
                <Input className="" type="text" name="guardian_relative" placeholder="ความเกี่ยวข้อง"/>
              </div>
            </div>

            <h3 className="mt-3">ข้อมูลการศึกษา</h3>
            <div className="row mt-2">
              <div className="col">
                <Dropdown overlay={schoolName}>
                  <Input className="" type="text" name="schoolname" placeholder="ชื่อโรงเรียน"/>
                </Dropdown>
              </div>

              <div className="col">
                <Dropdown overlay={schoolGrade}>
                  <Input className="" type="text" name="schoolGrade" placeholder="ระดับชั้น"/>
                </Dropdown>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <Dropdown overlay={major}>
                  <Input className="" type="text" name="major" placeholder="สายการเรียน"/>
                </Dropdown>
              </div>
              <div className="col">
                <Input className="" type="number" name="gpax" placeholder="gpax"/>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
              </div>
              <div className="col">
                <Button className="mt-3" type="primary">Next</Button>
              </div>
            </div>
          </Card>,
        </div>
      </Fragment>
    )
  }
}

export default RegistrationForm
