import React from 'react'
import Navbar from '../Core/Navbar'
import TestUpload from './testupload'
import { Card } from 'antd'
import Headline, { Paragraph } from '../Core/Text'
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
        <Card>
          <Paragraph>อัพโหลด ปพ.1</Paragraph>
          <Paragraph>อัพโหลด ใบขออนุญาตผู้ปกครอง</Paragraph>
          <Paragraph>อัพโหลด สลิป</Paragraph>
          <Paragraph>เลือกไซส์เสื้อ</Paragraph>
          <Paragraph>เลือกวิธีการเดินทาง</Paragraph>
        </Card>
        <Card>
          <p>sdasdasd</p>
        </Card>
        <Card>
          <Subtitle>อัพโหลดเอกสาร</Subtitle>
          <TestUpload />
        </Card>
      </div>
    )
  }
}
