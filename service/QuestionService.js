import apiReg from '../utils/apiRegService'

const QuestionService = {
  getAllQuestion: async () => {
    let queryQuestion = await apiReg.get('/questions')
    return queryQuestion
  },
  sendQuestions: async (request) => {
    await apiReg.put('/answers', request)
    .catch(error=>{
      let status = error.response.status
      if (status === 401) {
        alert('Session หมดอายยุกรุณา login ใหม่')
        location.reload()
      }
    })
  },
  getAns: async () => {
    let asn = await apiReg.get('/answers')
    return asn
  }
}
export default QuestionService
