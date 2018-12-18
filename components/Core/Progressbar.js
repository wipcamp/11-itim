import React, { Fragment } from 'react'
import { Steps } from 'antd'

const Step = Steps.Step

export default class Progressbar extends React.Component {
  state = {
    question: []
  }
  funcName = () => {
    let count =  Math.ceil(this.props.question.length / 3)
    for (let index = 0; index < count; index++) {
      this.state.question.splice(index,count,'')
    }
  }

  render() {
    return (
      <Fragment>
        <Steps current={this.props.current} onClick={this.funcName()}>
          <Step title="ข้อมูลส่วนตัว" />
          {this.state.question.map((data, key) => {
            return <Step title="In Progress" description={`ตอบคำถามส่วนที่ ${key+1}`} key={key} />
          })}
          <Step title="ยืนยัน" />
        </Steps>
      </Fragment>
    )
  }
}
