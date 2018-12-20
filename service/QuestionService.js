import apiReg from '../utils/apiRegService'

const QuestionService = {
  getAllQuestion: async () => {
    let queryQuestion = await apiReg.get('/api/questions')
    return queryQuestion
  }
}
export default QuestionService
