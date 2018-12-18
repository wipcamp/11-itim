import axios from 'axios'
// import api from '../utils/api'

const QuestionService = {
  getQuestion: async () => {
    let queryQuestion = await axios.get('http://127.0.0.1:8001/api/questions')
    return queryQuestion
  }
}
export default QuestionService
