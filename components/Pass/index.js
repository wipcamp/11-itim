import React from 'react'
import Navbar from '../Core/Navbar'
import { Card } from 'antd'

export default class Pass extends React.Component {
  render () {
    return (
      <div className="container">
        <Navbar />
        <Card title="Card title">
          <p
            style={{
              fontSize: 14,
              color: 'rgba(0, 0, 0, 0.85)',
              marginBottom: 16,
              fontWeight: 500
            }}
          >
      Group title
          </p>
          <Card
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
      Inner Card content
          </Card>
          <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Inner Card title"
            extra={<a href="#">More</a>}
          >
      Inner Card content
          </Card>
        </Card>
      </div>
    )
  }
}
