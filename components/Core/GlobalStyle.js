import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    font-family:sans-serif,'Sarabun' !important;
  }

  .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month {
    background: #304151 !important;
    color: #fff !important;
  }

  @font-face{
    font-family: 'Sarabun';
    src: url('/static/font/Sarabun-Regular.ttf') format('truetype');
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
