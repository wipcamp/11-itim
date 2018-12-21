import React from 'react'

class QuestionAndAnswer extends React.Component {
  state = {
    questions: [
      {
        id: 1,
        content: 'test',
        answer: 'test'
      },
      {
        id: 2,
        content: 'test2',
        answer: 'test2'
      },
      {
        id: 3,
        content: 'test3',
        answer: 'test3'
      },
      {
        id: 4,
        content: 'test4',
        answer: 'test5'
      }
    ]
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-10">
            {this.state.questions.map((data, key) => {
              return (
                <div>
                  <p key={key}>
                    คำถามที่ {data.id} : {data.content}
                  </p>
                  <p key={key}>{data.answer}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionAndAnswer
