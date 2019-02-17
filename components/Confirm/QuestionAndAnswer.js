import React, { Fragment } from 'react'
import { ParagraphBold } from '../Core/Text'

const findAnswer = (answers, questionId, key) => {
  const answer = answers.find(answer => (answer.question_id === questionId))
  return answer.ans_content || ''
}

const QuestionAndAnswer = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h3 className="font-weight-bold mb-4">ตอบคำถาม</h3>
          {props.questions.map((data, key) => {
            return (
              <Fragment>
                <ParagraphBold className="col-12" key={key}>
                  <div className="row">
                    คำถามที่ {data.id}: <br className="d-md-none"/>{data.content}
                  </div>
                </ParagraphBold>
                <p>{findAnswer(props.answers, data.id, key)}</p>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionAndAnswer
