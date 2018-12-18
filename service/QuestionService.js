import axios from 'axios'
// import api from '../utils/api'
import apiReg from '../utils/apiRegService'

const QuestionService = {
  getQuestion: async () => {
    let queryQuestion = apiReg.get('/questions')
    return queryQuestion
  }
}
export default QuestionService
