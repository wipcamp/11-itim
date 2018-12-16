import React from 'react'
import Link from 'next/link'
import { Steps, Form, Input, Button } from 'antd'

const Step = Steps.Step
const FormItem = Form.Item
const { TextArea } = Input

class question extends React.Component {
  state = {
    question: [
      'น้องเอ๋ย หากเจ้าเปิดกล่องดวงใจ เจ้าคาดฝันว่าเจ้าจักพบกับสิ่งใด จงอธิบายถึงสิ่งที่เจ้าคาดฝัน',
      'จงอธิบายกลวิธีการทำงานของ ‘Merge Sort 3 Ways’ ด้วยรหัสจำลอง (Pseudocode) หรือภาษาคอมพิวเตอร์ (Programming)',
      'บัดนี้ได้เวลาแล้วที่กรุงลงกาจักเกิดการเปลี่ยนแปลง น้องเอ๋ย หากเจ้ามีโอกาสได้นำเสนอเทคโนโลยีใหม่ๆ เพียงหนึ่งอย่างแก่ชาวกรุงลงกา เจ้าเลือกที่จะนำเสนออะไร อย่างไร จงอธิบายถึงสิ่งนั้น',
      'เมื่อกงล้อแห่งกาลเวลาได้ไหลย้อนกลับ เจ้าได้พบกับสงครามระหว่างเหล่ายักษาและวานร หากเจ้าต้องเลือกเพียงหนึ่งฝ่าย เจ้าจะเลือกสวามิภักดิ์ต่อฝ่ายใด และเจ้าจักทำเช่นไรให้ฝ่ายนั้นยอมรับในตัวเจ้า',
      'ระหว่างการเดินทางเสาะหากล่องดวงใจ น้ำที่เคยมีมากกลับลดน้อยลงจนเหลือแค่พอประทังชีวิต เจ้าเลือกที่จะดื่มมันเสียเองเพียงผู้เดียว หรือยกมันให้กับพวกพ้วงของเจ้า เพราะเหตุใด',
      '123123123',
      '12312566666666'
    ],
    startIndex: 0
  }

  handleNext = () => {
    this.setState({
      startIndex: this.state.startIndex + 2
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <Steps current={this.state.startIndex}>
                <Step title="Finished" description="This is a description." />
                <Step
                  title="In Progress"
                  description="This is a description."
                />
                <Step title="Waiting" description="This is a description." />
              </Steps>
            </div>
          </div>
          <div className="row">
            <div className="col-10 mt-5 mx-auto">
              <Form layout="vertical">
                {this.state.question.map((data, key) => {
                  if (key <= this.state.startIndex+3 && key > this.state.startIndex)
                    return (
                      <FormItem key={key} label={data}>
                        <TextArea
                          placeholder="Autosize placeholder"
                          autosize={{ minRows: 4, maxRows: 10 }}
                        />
                      </FormItem>
                    )
                })}
                <FormItem>
                    <Button type="primary" onClick={() => this.handleNext()}>Next</Button>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default question
