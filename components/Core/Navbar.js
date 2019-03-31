import styled from 'styled-components'
import { Paragraph } from './Text'

const Menu = styled.div`
  border:0;
`
const Logo = styled.img`
  width: 45%;
  @media (max-width : 768px){
    width: 100%;
  }
`
const Navbar = props => (
  <div className="container-fulid no-gutters">
    <div className="row">
      <div className="col-6 p-3">
        <Menu>
          <Logo src="/static/img/logotitle.png"/>
        </Menu>
      </div>
      <div className="col-6 text-right p-3">
        <Menu>
          <Paragraph>WIP ID: {props.state && props.state.profile.wip_id}</Paragraph>
        </Menu>
        <Menu>
          <Paragraph>
            {props.state && props.state.profile.nickname != null
              ? `น้อง${props.state.profile.nickname}`
              : ''}
          </Paragraph>
        </Menu>
      </div>
    </div>
  </div>
)

export default Navbar
