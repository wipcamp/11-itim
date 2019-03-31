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
                  <Headline>ขอแสดงความเสียใจ</Headline>
                </div>
                <div className="col-12 mt-3">
                  <Paragraph>
                  น้อง{this.props.name || 'ไอติม'} ที่ไม่ผ่านการคัดเลือกเข้าค่าย WIP Camp #11 ครับ
                  </Paragraph>
                  <Paragraph>
                  ไว้กลับมาสมัครใหม่อีกครั้งในปีหน้านะครับ
                  </Paragraph>
                </div>
              </div>
              <div className="row justify-content-center mt-3 p-3">
                <Link href="https://wip.camp" >
                  <a target="_blank"><ButtonPrimary >กลับไปยัง wip.camp</ButtonPrimary></a>
                </Link>
              </div>
            </CardReponsive>
          </div>
        </div>
      </div>
    )
  }
}
