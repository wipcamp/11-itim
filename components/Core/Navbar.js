import React, { Fragment } from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'
import { Paragraph } from './Text'

const Profile = styled.div`
  display: ${props => props.display};
`

const Navbar = props => (
  <Menu mode="horizontal">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Menu.Item>Logo</Menu.Item>
        </div>
        <Profile
          display={props.state.wipid === 0 ? 'none' : 'block'}
          className="col-4 text-right mt-3 mb-3"
        >
          <Menu.Item>
            <Paragraph>WIP ID: {props.state.wipid}</Paragraph>
          </Menu.Item>
          <Menu.Item>
            <Paragraph>{props.state.nickname != null ? `น้อง${props.state.nickname}` : ''}</Paragraph>
          </Menu.Item>
        </Profile>
      </div>
    </div>
  </Menu>
)

export default Navbar
