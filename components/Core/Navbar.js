import styled from 'styled-components'
import { Paragraph } from './Text'

const Menu = styled.div`
  border:0;
`
const Logo = styled.img`
  width: 30%;
`
const Navbar = props => (
  <div className="container">
    <div className="row">
      <div className="col-6 p-3">
        <Menu>
          <Logo src="/static/img/logo.png"/>
        </Menu>
      </div>
      <div className="col-6 text-right mt-3 mb-3">
        <Menu>
          <Paragraph>WIP ID: {props.state && props.state.wip_id}</Paragraph>
        </Menu>
        <Menu>
          <Paragraph>
            {props.state && props.state.nickname != null
              ? `น้อง${props.state.nickname}`
              : ''}
          </Paragraph>
        </Menu>
      </div>
    </div>
  </div>
)

export default Navbar
