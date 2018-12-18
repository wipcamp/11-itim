import React, { Fragment } from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'

const Profile = styled.div`
  display: ${props => props.display};
`

const Navbar = (props) => (
  <Menu mode="horizontal">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Menu.Item >Logo</Menu.Item>
        </div>
        <Profile display={props.state.wipid === 0 ? 'none' : 'block'} className="col-4 text-right">
          <Menu.Item>WIP ID: {props.state.wipid} </Menu.Item>
          <Menu.Item>น้องไอติม</Menu.Item>
        </Profile>
      </div>
    </div>
  </Menu>
)

export default Navbar
