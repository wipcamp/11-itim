import React from 'react'
import { ParagraphBold } from '../Core/Text'

const QuestionAndAnswer = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-10">
          <h3 className="font-weight-bold mb-4 ml-5">ตอบคำถาม</h3>
          {props.questions.map((data, key) => {
            return (
              <div>
                <ParagraphBold key={key}>
                  คำถามที่ {data.id} : {data.content}
                </ParagraphBold>
                <p key={key}>{data.ans_content}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default QuestionAndAnswer
