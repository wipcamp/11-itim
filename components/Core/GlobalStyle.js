import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: #00B2FF !important;
    color: #fff !important;
  }
  body{
    font-family:'Sarabun', sans-serif !important;
  }

  .ant-btn-primary {
    background-color: #304151;
    border:#304151;
    :visited{
      background:  #304151;
      color: #fff;
    }
    ::selection {
      background:  #304151;
      color: #fff;
    }
  }

  .ant-btn {
    :hover{
      background-color: #304151;
      color: #fff;
    }
    :visited{
      background:  #304151;
      color: #fff;
    }
    ::selection {
      background:  #304151;
      color: #fff;
    }
  }
`

export default GlobalStyle
