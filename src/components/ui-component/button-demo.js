import React, { Component } from 'react'
import { Button } from 'antd'
import DemoShower from '../demo-shower'

class ButtonDemo extends Component {
  render () {
    return (
      <div>
        <h1>通用</h1>
        <hr />
        <DemoShower title='单个按钮' desc='仅有一个按钮时适用'>
          <Button type='primary'>Primary</Button>
        </DemoShower>

        <DemoShower title='多个按钮' desc='有多个按钮时,只有一个 primary 即可,tws-btn可在按钮之间加入间距'>
          <div>
            <Button className='tws-btn' type='primary'>Save</Button>
            <Button className='tws-btn'>Submit</Button>
            <Button className='tws-btn'>Cancel</Button>
          </div>
        </DemoShower>

      </div>
    )
  }
}

export default ButtonDemo
