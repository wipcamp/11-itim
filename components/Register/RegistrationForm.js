import React, { Component } from 'react'
import Styled from 'styled-components'
import { Card, Input } from 'antd'

class RegistrationForm extends Component {
  render () {
    return (
      <div className="justify-content">
        <Card title="Regsiter">
          <p
            style={{
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.85)',
              marginBottom: 16,
              fontWeight: 500
            }}
          >
          </p>
          <div className="row mt-2">
            <div className="col">
              <Input className=" " type="text" name="fName_th" placeholder="ชื่อจริง"/>
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
            <Input className="" type="text" name="telNo" placeholder="TelNo(เบอร์โทร)"/>
          </div>
          <div className="row mt-2">
            <Input className="" type="text" name="nickname" placeholder="ชื่อเล่น"/>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Input className="" type="number" name="SchoolID" placeholder="SchoolID"/>
            </div>
            <div className="col">
              <Input className="" type="text" name="SchoolName" placeholder="SchoolName"/>
            </div>
          </div>
          <div className="row mt-2">
            <Input className="" type="text" name="religion" placeholder="religion(ศาสนา)"/>
          </div>

        </Card>,
      </div>
    )
  }
}

export default RegistrationForm
