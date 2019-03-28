import React from 'react'
import Navbar from '../Core/Navbar'
import TestUpload from './testupload'
import { Card } from 'antd'
import Headline, { Paragraph } from '../Core/Text'
import TablePass from './TablePass'
import styled from 'styled-components'

const Subtitle = styled.h2`
  font-size: 24px;
`

export default class Pass extends React.Component {
  render () {
    return (
      <div className="container">
        <Navbar />
        <Headline className="text-center">Congratulation !</Headline>
        <Paragraph className="text-center">
          ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11
          ขอให้น้องทำตามขั้นตอนดังต่อไปนี้ เพื่อยืนยันสิทธิ์ครับ
        </Paragraph>
        <Card className="my-5">
          <div className="row">
            <div className="col-12">
              <Paragraph>อัพโหลด ปพ.1</Paragraph>
              <Paragraph>อัพโหลด ใบขออนุญาตผู้ปกครอง</Paragraph>
              <Paragraph>อัพโหลด สลิป</Paragraph>
              <Paragraph>เลือกไซส์เสื้อ</Paragraph>
              <Paragraph>เลือกวิธีการเดินทาง</Paragraph>
            </div>
          </div>
        </Card>
        <Card className="my-5">
          <p>sdasdasd</p>
        </Card>
        <Card className="my-5">
          <Subtitle>อัพโหลดเอกสาร</Subtitle>
          <div className="row my-3">
            <div className="col-12 col-md-4">
              <TestUpload />
            </div>
            <div className="col-12 col-md-4">
              <TestUpload />
            </div>
            <div className="col-12 col-md-4">
              <TestUpload />
            </div>
          </div>
          <Subtitle>ไซส์เสื้อ</Subtitle>
          <div className="row">
            <div className="col-12">
              <TablePass />
            </div>
          </div>
          <Subtitle>วิธีการเดินทางมาค่าย</Subtitle>
        </Card>
      </div>
    )
  }
}
