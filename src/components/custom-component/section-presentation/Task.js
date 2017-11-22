import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

class Task extends Component {
  render () {
    return (
      <div>
        <Card title={'Task Page'} className="ChildCard">
          <Link to={'/sectionPresentation/task/section'}>section</Link>
        </Card>
      </div>
    )
  }
}

export default Task