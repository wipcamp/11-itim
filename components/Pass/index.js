import React from 'react'
import Navbar from '../Core/Navbar'
import TestUpload from './testupload'
import { Card, Radio as DefualtRadio } from 'antd'
import Headline, { Paragraph, ParagraphBold } from '../Core/Text'
import TablePass from './TablePass'
import config from '../../config/fonts'
import styled from 'styled-components'
import Button from '../Core/Button'
import BG from '../Core/Bg'
import colors from '../../config/colors'

const Subtitle = styled.h2`
  font-size: 20px;
`

const Banklogo = styled.img`
  height: 3em;
`

const Radio = styled(DefualtRadio)`
  display: 'block';
  height: '30px';
  font-size: ${config.paragraph};
`

const BgColors = styled.div`
  background: ${colors.bgcolor};
  @media (max-width: 768px) {
    height: 100%;
  }
`

let RadioGroup = DefualtRadio.Group

export default class Pass extends React.Component {
  state = {
    upload: [
      'อัพโหลด ปพ.1',
      'อัพโหลด ใบขออนุญาตผู้ปกครอง',
      'อัพโหลด สลิป',
      'เลือกไซส์เสื้อ',
      'เลือกวิธีการเดินทาง'
    ],
    travel: [
      { value: 'เดินทางมาเอง', text: 'เดินทางมาเอง' },
      { value: 'หัวลำโพง', text: 'ให้พี่ค่ายรอรับที่ หัวลำโพง' },
      { value: 'สายใต้ใหม่', text: 'ให้พี่ค่ายรอรับที่ สายใต้ใหม่' },
      {
        value: 'อนุเสาวรีย์ชัยสมรภูมิ',
        text: 'ให้พี่ค่ายรอรับที่ อนุเสาวรีย์ชัยสมรภูมิ'
      },
      { value: 'หมอชิต', text: 'ให้พี่ค่ายรอรับที่ หมอชิต' }
    ]
  }

  handleChange = e => {
    console.log(e.target.value)
  }
  render() {
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
                  {this.state.upload.map((data, index) => {
                    return <Paragraph key={index}>{data}</Paragraph>
                  })}
                </div>
              </div>
            </Card>
            <Card className="my-5">
              <div className="row text-center">
                <div className="col-12">
                  <Banklogo className="my-3" src="/static/img/scb-bank.png" />
                  <Paragraph>ธนาคารไทยพาณิชย์ </Paragraph>
                  <ParagraphBold>เลขที่บัญชี 237-223675-3</ParagraphBold>
                  <ParagraphBold>พร้อมเพย์ 099-0067887</ParagraphBold>
                  <Paragraph>ชื่อบัญชี นางสาว ลลิตา เล็กประเสริฐ</Paragraph>
                  <Paragraph>สาขามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</Paragraph>
                </div>
              </div>
            </Card>
            <Card className="my-5">
              <Subtitle>อัพโหลดเอกสาร</Subtitle>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-center">
                  <TestUpload transcript={'transcript'} />
                </div>
                <div className="col-12 col-md-4 text-center">
                  <TestUpload recipe={'recipe'} />
                </div>
                <div className="col-12 col-md-4 text-center">
                  <TestUpload confrim={'confrim'} />
                </div>
              </div>
              <Subtitle>ไซส์เสื้อ</Subtitle>
              <div className="row my-3 text-center">
                <div className="col-12">
                  <TablePass handleChange={this.handleChange} />
                </div>
              </div>
              <Subtitle>วิธีการเดินทางมาค่าย</Subtitle>
              <div className="row my-3">
                <div className="col-12">
                  <RadioGroup onChange={this.handleChange}>
                    {this.state.travel.map((data, index) => {
                      return (
                        <div>
                          <Radio value={data.value} key={index}>
                            {data.text}
                          </Radio>
                        </div>
                      )
                    })}
                  </RadioGroup>
                </div>
              </div>
            </Card>
            <Paragraph>
              โปรดตรวจสอบรายละเอียดให้เรียบร้อย
              หากข้อมูลที่กรอกมาเป็นเท็จทางค่ายจะตัดสิทธิ์ทันที
            </Paragraph>
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
