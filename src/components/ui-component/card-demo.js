import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import { DemoShower } from '../tws-component'

const lessStr = `
.tws-card {
  .ant-card-head {
    background: @gray;
  }

  &--primary {
    .ant-card-head {
      background: @primary-1;
    }
  }
}
`

class CardDemo extends Component {
  render () {
    return (
      <div>
        <h1>Card</h1>
        <hr />
        <DemoShower title='简单Card' desc='仅有标题和内容,需要去掉Hover效果' less={lessStr}>
          <Row gutter={16}>
            <Col className='gutter-row' span={8}>
              <Card title='标题' noHovering >
                <p className='p1'>这里是card的内容</p>
                <p>这里是card的内容</p>
              </Card>
            </Col>

            <Col className='gutter-row' span={8}>
              <Card title='标题' noHovering className='tws-card--primary'>
                <p className='p1'>这里是card的内容</p>
                <p>这里是card的内容</p>
              </Card>
            </Col>

            <Col className='gutter-row' span={8}>
              <Card title='标题' noHovering className='tws-card'>
                <p className='p1'>这里是card的内容</p>
                <p>这里是card的内容</p>
              </Card>
            </Col>

          </Row>
        </DemoShower>
      </div>
    )
  }
}

export default CardDemo
