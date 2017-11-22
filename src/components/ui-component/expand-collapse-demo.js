import React, { Component } from 'react'
import { Collapse,Icon } from 'antd'
import { DemoShower } from '../tws-component'

const Panel = Collapse.Panel


class ExpandCollapse extends Component {
  render () {
    return (
      <div>
        <h1>折叠面板</h1>
        <hr/>
        <DemoShower title='默认展开第一个'>
          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header={<span>This is panel header 1</span>} key="1">
              <p>This is panel content</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>This is panel content</p>
            </Panel>
          </Collapse>
        </DemoShower>
      </div>
    )
  }
}

export default ExpandCollapse
