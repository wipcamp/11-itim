import React from 'react'
import LoginFaceBook from './LoginFaceBook'
import Loading from './../Core/loading'

class Login extends React.Component {
  componentDidMount(){
    setTimeout(()=>{
this.setState({
  loading :'none',
  face:'block'
})
    },7000)
  }
  state = {
    loading: 'block',
    face: 'none'
  }
  render () {
    return (
      <div className="container-fluid mt-5">
        <div className="row mt-5 justify-content-center">
          <div className="col-8 col-md-4 mt-5">
            <Loading  loadingout={this.state.loading}></Loading>
            <LoginFaceBook face={this.state.face}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
