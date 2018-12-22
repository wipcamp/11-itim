import apiReg from '../utils/apiRegService'

const QuestionService = {
  getAllQuestion: async () => {
    let queryQuestion = await apiReg.get('/questions')
    return queryQuestion
  },
  sendQuestions: async (request) => {
    console.log(JSON.stringify(request))
    await apiReg.put('/answers', request)
  }
}
export default QuestionService
