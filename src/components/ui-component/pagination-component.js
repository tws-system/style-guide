import React, {Component} from 'react'
import { Pagination } from 'antd'
import DemoShower from '../demo-shower'

class PaginationComponent extends Component {
  render () {
    return (
      <div>
        <h1>翻页器</h1>
        <hr />

        <DemoShower title='翻页器示例' desc='简单翻页器，默认每页10个'>
          <Pagination defaultCurrent={6} total={500} />
        </DemoShower>
      </div>
    )
  }
}

export default PaginationComponent
