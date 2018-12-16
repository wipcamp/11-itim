import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

class index extends React.Component {
  render () {
    return (
      <div className="container">
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
        </div>
      </div>
    )
  }
}

index.propTypes = {

}

export default index
