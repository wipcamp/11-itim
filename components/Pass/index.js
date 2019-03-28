import React from 'react'
import Navbar from '../Core/Navbar'
import TestUpload from './testupload'
import { Card, Radio as DefualtRadio } from 'antd'
import Headline, { Paragraph } from '../Core/Text'
import TablePass from './TablePass'
import config from '../../config/fonts'
import styled from 'styled-components'
import Button from '../Core/Button'
import BG from '../Core/Bg'
import colors from '../../config/colors'

const Subtitle = styled.h2`
  font-size: 20px;
`

const Radio = styled(DefualtRadio)`
  display: 'block';
  height : '30px';
font-size: ${config.paragraph};
`

const BgColors = styled.div`
  background: ${colors.bgcolor};
  @media (max-width : 768px) {
    height: 100%;
  }
`

const RadioGroup = DefualtRadio.Group

export default class Pass extends React.Component {

  handleChange = (e)=>{
    console.log(e.target.value)
  }
  render () {
    return (
      <BgColors>
        <div className="container">
          <Navbar />
          <Card className="my-5">
            <Headline className="text-center">Congratulation !</Headline>
            <Paragraph className="text-center">
          ขอแสดงความยินดีกับน้องไอติมที่ผ่านรอบคัดเลือกเข้าค่าย WIP Camp #11
          ขอให้น้องทำตามขั้นตอนดังต่อไปนี้ เพื่อยืนยันสิทธิ์ครับ
            </Paragraph>
            <Card className="my-5">
              <div className="row my-3">
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
                  <TestUpload transcript={'transcript'}/>
                </div>
                <div className="col-12 col-md-4">
                  <TestUpload recipe={'recipe'}/>
                </div>
                <div className="col-12 col-md-4">
                  <TestUpload confrim={'confrim'}/>
                </div>
              </div>
              <Subtitle>ไซส์เสื้อ</Subtitle>
              <div className="row my-3">
                <div className="col-12">
                  <TablePass handleChange={this.handleChange}/>
                </div>
              </div>
              <Subtitle>วิธีการเดินทางมาค่าย</Subtitle>
              <div className="row my-3">
                <div className="col-12">
                  <RadioGroup onChange ={this.handleChange} >
                    <Radio value='เดินทางมาเอง'>เดินทางมาเอง</Radio> <br/>
                    <Radio value='หัวลำโพง'>ให้พี่ค่ายรอรับที่ หัวลำโพง</Radio> <br/>
                    <Radio value='สายใต้ใหม่'>ให้พี่ค่ายรอรับที่ สายใต้ใหม่</Radio> <br/>
                    <Radio value='อนุเสาวรีย์ชัยสมรภูมิ'>ให้พี่ค่ายรอรับที่ อนุเสาวรีย์ชัยสมรภูมิ</Radio> <br/>
                    <Radio value='หมอชิต'>ให้พี่ค่ายรอรับที่ หมอชิต</Radio>
                  </RadioGroup>
                </div>
              </div>
            </Card>
            <Paragraph>โปรดตรวจสอบรายละเอียดให้เรียบร้อย หากข้อมูลที่กรอกมาเป็นเท็จทางค่ายจะตัดสิทธิ์ทันที</Paragraph>
            <div className="row text-center">
              <div className="col-12">
                <Button>ยืนยัน</Button>
              </div>
            </div>
          </Card>
        </div>
        <BG />

      </BgColors>

    )
  }
}
