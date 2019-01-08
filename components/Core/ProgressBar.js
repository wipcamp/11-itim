import React, { Fragment } from 'react'
import { Steps } from 'antd'
import styled from 'styled-components'
let Step = Steps.Step
Step = styled(Step)`
  @media (max-width: 575.98px) {
    & .ant-steps-item-content {
      display:none;
    }

    & .ant-steps-item-icon  {
      margin-left: 0;
      width: 15px !important;
      height: 15px !important;
      border: 1px solid #cccccc;
      background-color: #FFF;
    }    

    span .ant-steps-icon-dot {
      top: 0 !important;
      left: 0 !important;
    }

    & .ant-steps-item-tail {
      margin-left: 15px;
      margin-top: 4px;
      &::after {
        margin-left: 0;
        width: calc(100% - 15px);
      }
    }

    &.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: #fff !important;
    }

    &.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {
      background: #fff;
      border: 1px solid #00B2FF;
      .ant-steps-icon-dot {
        background-color: #00B2FF;
      }
    }

    &.ant-steps-item-finish > .ant-steps-item-tail:after {
      background-color: #00B2FF;
    }

    &.ant-steps-item-finish .ant-steps-item-icon, &.ant-steps-item-process .ant-steps-item-icon {
      border: 1px solid #00B2FF;
      .ant-steps-icon-dot {
        background-color: #00B2FF;
      }
    }
    
  }
`

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
          {this.state.questions.map((data,key) => {
            return <Step description={`ตอบคำถามส่วนที่ ${key+1}`} key={key} />
          })}
          <Step title="ยืนยัน" />
        </Steps>
      </Fragment>
    )
  }
}
