import React from 'react'
import { Card } from 'antd'
import ButtonPrimary from '../Core/Button'

export default class Complete extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <Card className="mt-5 mb-2">
            <div className="row justify-content-center">
              <div className="col-2">hi</div>
            </div>
            <div className="row text-center">
              <div className="col-12 mt-3">
                <h3>ส่งใบสมัครค่ายสำเร็จ</h3>
              </div>
              <div className="col-12 mt-3">
                <h5>
                  {this.props.name} ได้ส่งใบสมัครค่ายสำเร็จเรียบร้อยแล้ว
                  โปรดรอฟังผลการประกาศค่ายในวันที่ xx มีนาคม 2562 ผ่านทาง
                  Facebook Live นะครับ
                </h5>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <ButtonPrimary>ไปยัง Facebook Fanpage</ButtonPrimary>
            </div>
          </Card>
        </div>
      </div>
    )
  }
}
