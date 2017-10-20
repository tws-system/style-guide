import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd'
import DemoShower from '../demo-shower'

class PopConfirmDemo extends Component {
  render () {
    return (
      <div>
        <h1>气泡确认框</h1>
        <hr />

        <DemoShower title='气泡确认框' desc='如删除类按钮,点击时,弹出确认气泡,而不是模态框'>
          <div>
            <Popconfirm placement='topLeft' title='Are you sure delete this task?' okText='Yes' cancelText='No'>
              <Button className='tws-btn' type='primary'>Delete</Button>
            </Popconfirm>
          </div>
        </DemoShower>

      </div>
    )
  }
}

export default PopConfirmDemo
