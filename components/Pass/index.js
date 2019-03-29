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
                  <Paragraph>อัพโหลด ใบขออนุญาตผู้ปกครอง 
                  </Paragraph>
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
                  <TestUpload confrim={'confrim'}/>
                  <a href="https://storage.freezer.in.th/profile/%E0%B9%83%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1_%20%28%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%29.docx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190329%2F%2Fs3%2Faws4_request&X-Amz-Date=20190329T160723Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=75a4d41e6bca6b7832a47253406aaf883f4e5dbf045956729f679ec9812bed3e">แบบฟอมเอกสารขออนุญาติผู้ปกครอง</a>
                </div>
                <div className="col-12 col-md-4">
                  <TestUpload recipe={'recipe'}/>
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
              <p> <img src='/static/img/qrfacebook.png'/></p>
              <p>  อย่าลืมกดเข้ากลุ่มเพื่อติดตามข่าวสารด้วยนะ
              <a href="https://www.facebook.com/groups/350278869164512/">Link join Group</a>
           </p>
              
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
