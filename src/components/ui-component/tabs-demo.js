import React, { Component } from 'react'
import { Tabs } from 'antd'
import { DemoShower } from '../tws-component'

const TabPane = Tabs.TabPane

class CardDemo extends Component {
  render () {
    return (
      <div>
        <h1>Tabs</h1>
        <hr />
        <DemoShower title='简单Tabs' desc='无动画效果' >
          <div>
            <Tabs defaultActiveKey='1' animated={false}>
              <TabPane tab='标题一' key='1'>
                <p>内容1</p>
              </TabPane>
              <TabPane tab='标题二' key='2'>
                <p>内容2</p>
              </TabPane>
            </Tabs>
          </div>
        </DemoShower>
      </div>
    )
  }
}

export default CardDemo
