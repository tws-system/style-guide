import React, { Component } from 'react'
import { Card } from 'antd'

export default class Section extends Component {
  render () {
    return (
      <div>
        <Card className="ChildCard" title={'Section Page'}>
          section content
        </Card>
      </div>
    )
  }
}
