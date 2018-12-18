import React from 'react'
import Cookies from 'js-cookie'

import QuestionService from '../../service/QuestionService'
import RegistrationForm from './RegistrationForm'
import ProgressBar from '../Core/ProgressBar'

const Register = (props) => (
  <RegistrationForm setPageIndex={props.setPageIndex} />
)

export default Register
