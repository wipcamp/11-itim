import React, { Fragment } from 'react'
import { Menu } from 'antd'
import styled from 'styled-components'
import { Paragraph } from './Text'

const Navbar = props => (
  <Menu mode="horizontal">
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Menu.Item>Logo</Menu.Item>
        </div>
        {console.log('stat', props.state)}
        <div className="col-4 text-right mt-3 mb-3">
          <Menu.Item>
            <Paragraph>WIP ID: {props.state && props.state.wip_id}</Paragraph>
          </Menu.Item>
          <Menu.Item>
            <Paragraph>
              {props.state && props.state.nickname != null
                ? `น้อง${props.state.nickname}`
                : ''}
            </Paragraph>
          </Menu.Item>
        </div>
      </div>
    </div>
  </Menu>
)

export default Navbar
