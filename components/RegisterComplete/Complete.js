import React from 'react'
import { Card } from 'antd'
import ButtonPrimary from '../Core/Button'
import Headline, { Paragraph } from '../Core/Text'
import styled from 'styled-components'

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
  }
`
export default class Complete extends React.Component {
  handleClick = ()=>{
    window.location('https://www.facebook.com/wipcamp/')
  }
  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          <CardReponsive className="mt-5 mb-2">
            <div className="row justify-content-center">
              <div className="col-2"></div>
            </div>
            <div className="row text-center">
              <div className="col-12 mt-3">
                <Headline>ส่งใบสมัครค่ายสำเร็จ</Headline>
              </div>
              <div className="col-12 mt-3">
                <Paragraph>
                  {this.props.name} ได้ส่งใบสมัครค่ายสำเร็จเรียบร้อยแล้ว
                  โปรดรอฟังผลการประกาศค่ายในวันที่ 28 มีนาคม 2562 ผ่านทาง
                  Facebook Live นะครับ
                </Paragraph>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <ButtonPrimary onClick={this.handleClick}>ไปยัง Facebook Fanpage</ButtonPrimary>
            </div>
          </CardReponsive>
        </div>
      </div>
    )
  }
}
