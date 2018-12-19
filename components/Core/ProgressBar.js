import React, { Fragment } from 'react'
import { Steps } from 'antd'

const Step = Steps.Step

export default class ProgressBar extends React.Component {
  state = {
    questions: []
  }
  pageCountByQuestion = () => {
    let count =  Math.ceil(this.props.questions.length / 3)
    for (let index = 0; index < count; index++) {
      this.state.questions.splice(index,count,'')
    }
  }

  render() {
    return (
      <Fragment>
        <Steps progressDot current={this.props.current} onClick={this.pageCountByQuestion()}>
          <Step title="ข้อมูลส่วนตัว" />
          {this.state.questions.map((data, key) => {
            return <Step description={`ตอบคำถามส่วนที่ ${key+1}`} key={key} />
          })}
          <Step title="ยืนยัน" />
        </Steps>
      </Fragment>
    )
  }
}
