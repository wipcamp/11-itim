import React from 'react'
import Navbar from '../Core/Navbar'
import TestUpload from './testupload'
import { Card, Radio as DefualtRadio, Icon } from 'antd'
import styled from 'styled-components'
import Headline, { Paragraph, ParagraphBold } from '../Core/Text'
import TablePass from './TablePass'
import config from '../../config/fonts'
import RegisterService from '../../service/RegisterService'
import Button from '../Core/Button'
import BG from '../Core/Bg'
import colors from '../../config/colors'
import CookiesService from '../../service/CookieService'
import CamperService from '../../service/CamperService'
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
  componentDidMount = async () => {
    if (CookiesService.gettokenJWTCookie()) {
      const checkStatus = await CamperService.getDocument()
      let tempDoc =[]
     if (checkStatus.data[0]) {
       tempDoc[0]=(checkStatus.data[0].transcript)
       tempDoc[1]=(checkStatus.data[0].confrim)
       tempDoc[2]=(checkStatus.data[0].receipt)
       tempDoc[3]=(checkStatus.data[0].size)
       tempDoc[4]=(checkStatus.data[0].pick_location)
     }
      const profile = await RegisterService.getProfile()
      this.setState({
        profile: profile.data,
        document:tempDoc
      })
      console.log(this.state.document)
    }
  }
  state = {
    document:[null,null,null,null,null],
    profile: {},
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
  CamperService.submitData(e.target.name,e.target.value)
  this.checkConfrim()
  }
  checkConfrim= async()=>{
    const checkStatus = await CamperService.getDocument()
    let tempDoc =[]
    if (await checkStatus.data[0]) {
      tempDoc[0]=(checkStatus.data[0].transcript)
      tempDoc[1]=(checkStatus.data[0].confrim)
      tempDoc[2]=(checkStatus.data[0].receipt)
      tempDoc[3]=(checkStatus.data[0].size)
      tempDoc[4]=(checkStatus.data[0].pick_location)
    }
    this.setState({
      document:tempDoc
    })
   
  }
  render() {
    return (
      <BgColors>
        <div className="container">
          <Navbar state={this.state} />
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
                    return <Paragraph key={index}><Icon type="check-circle"  theme={this.state.document[index]?"twoTone":"outlined"} twoToneColor="#76B445"/> {data}</Paragraph>
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
                  <Paragraph>
                    สาขามหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                  </Paragraph>
                </div>
              </div>
            </Card>
            <Card className="my-5">
              <Subtitle>อัพโหลดเอกสาร</Subtitle>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-center">
                  <TestUpload checkConfrim={this.checkConfrim} transcript={'transcript'} />
                  <div className="col-12 text-center my-3">
                  <ParagraphBold>ใบ ปพ.1</ParagraphBold>
                  <Paragraph>ไฟล์ไม่เกิน 1 MB</Paragraph>
                  <Paragraph>รับเฉพาะไฟล์นามสกุล png, jpeg, jpg, pdf</Paragraph>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <TestUpload checkConfrim={this.checkConfrim} recipe={'receipt'} />
                  <div className="col-12 text-center my-3">
                  <ParagraphBold>สลิปโอนเงิน</ParagraphBold>
                  <Paragraph>ไฟล์ไม่เกิน 1 MB</Paragraph>
                  </div>
                </div>
                <div className="col-12 col-md-4 text-center">
                  <TestUpload checkConfrim={this.checkConfrim} confrim={'confrim'} />
                  <div className="col-12 text-center my-3">
                  <ParagraphBold>ใบขออนุญาตผู้ปกครอง</ParagraphBold>
                  <Paragraph>ดาวน์โหลดใบขออนุญาตผู้ปกครอง
                  <a href="https://storage.freezer.in.th/profile/%E0%B9%83%E0%B8%9A%E0%B8%82%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B8%B8%E0%B8%8D%E0%B8%B2%E0%B8%95%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1_%20%28%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%9B%E0%B8%81%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%29.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=VizhBfmrCSvpJqGRKvEC%2F20190407%2F%2Fs3%2Faws4_request&X-Amz-Date=20190407T102944Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f440a4c19063548551ed9883807377a982486a94b8f3f6c9592902646dea467d">
                    Download
                  </a>
                  </Paragraph>
                  <Paragraph>ไฟล์ไม่เกิน 1 MB</Paragraph>
                  <Paragraph>รับเฉพาะไฟล์นามสกุล png, jpeg, jpg, pdf</Paragraph>
                  </div>
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
                  <RadioGroup name='location' onChange={this.handleChange}>
                    {this.state.travel.map((data, index) => {
                      return (
                        <div>
                          <Radio value={data.value}  key={index}>
                            {data.text}
                          </Radio>
                        </div>
                      )
                    })}
                  </RadioGroup>
                </div>
              </div>
              <div className="text-center">
                <Paragraph>
                  <img src="/static/img/qrfacebook.png"  width="15%"/>
                </Paragraph>
                <Paragraph>
                  อย่าลืมกดเข้ากลุ่มเพื่อติดตามข่าวสารด้วยนะ
                  <a href="https://www.facebook.com/groups/350278869164512/">
                    Link join Group
                  </a>
                </Paragraph>
              </div>
            </Card>
            <Paragraph >
              โปรดตรวจสอบรายละเอียดให้เรียบร้อย
              หากข้อมูลที่กรอกมาเป็นเท็จทางค่ายจะตัดสิทธิ์ทันที
            </Paragraph>
            <div className="row text-center">
              <div className="col-12">
                <Button name="confirm" value="confirm"  onClick={this.handleChange}>ยืนยัน</Button>
              </div>
            </div>
          </Card>
        </div>
        <BG />
      </BgColors>
    )
  }
}
