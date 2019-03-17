import React from 'react'
import { Card } from 'antd'
import ButtonPrimary from '../Core/Button'
import Headline, { Paragraph } from '../Core/Text'
import styled from 'styled-components'
import Link from 'next/link'

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

const Img = styled.img`
  width: 10%;
  @media (max-width : 768px) {
    width: 20%;
  }
`
export default class Complete extends React.Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center">
            <CardReponsive className="mt-5 mb-2 p-2">
              <div className="row text-center">
                <div className="col-12 mt-3">
                  <Img src="/static/img/correct.png" />
                  <Headline>ส่งใบสมัครค่ายสำเร็จ</Headline>
                </div>
                <div className="col-12 mt-3">
                  <Paragraph>
                    น้อง{this.props.name} ได้ส่งใบสมัครค่ายสำเร็จเรียบร้อยแล้ว
                  </Paragraph>
                  <Paragraph>
                    โปรดรอฟังผลการประกาศค่ายในวันที่ 29 มีนาคม 2562 ผ่านทาง
                    Facebook Live นะครับ
                  </Paragraph>
                </div>
              </div>
              <div className="row justify-content-center mt-3 p-3">
                <Link href="https://www.facebook.com/wipcamp/" >
                  <a target="_blank"><ButtonPrimary >ไปยัง Facebook Fanpage</ButtonPrimary></a>
                </Link>
              </div>
            </CardReponsive>
          </div>
        </div>
      </div>
    )
  }
}
