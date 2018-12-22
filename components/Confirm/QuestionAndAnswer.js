import React from 'react'
import { ParagraphBold } from '../Core/Text'

const findAnswer = (answers, questionId) => {
  const answer = answers.find(answer => (answer.question_id === questionId))
  return answer ? answer.ans_content : ''
}

const QuestionAndAnswer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10">
          <h3 className="font-weight-bold mb-4 ml-5">ตอบคำถาม</h3>
          {props.questions.map((data, key) => {
            return (
              <div key={key}>
                <ParagraphBold>
                  คำถามที่ {data.id} : {data.content}
                </ParagraphBold>
                <p>
                  {findAnswer(props.answers, data.id)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionAndAnswer
