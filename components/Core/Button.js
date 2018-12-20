import { Button as DefaultButton } from 'antd'
import styled from 'styled-components'
import fonts from '../../config/fonts'
import colors from '../../config/colors'

const ButtonPrimary = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: ${colors.primary};
  color: #fff;
  &:hover{
    background-color: ${colors.primaryDarker};
    color: #fff;
  }
`

export const ButtonSecondary = styled(DefaultButton)`
  font-size: ${fonts.paragraph};
  background-color: transparent;
  color: ${colors.primary};
  border-color: ${colors.primary};
  &:hover{
    background-color: ${colors.primaryDarker};
    color: ${colors.hover}
  }
`

export default ButtonPrimary
