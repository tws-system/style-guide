import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ColorBox from './color-box'

const colors1 = [{
  name: '@primary-color',
  rgb: '#1973BA',
  desc: '品牌色/主色',
  whiteFont: true
}, {
  name: '@color-1',
  rgb: '#EDF4FA',
  desc: '选中背景色'
}, {
  name: '@color-5',
  rgb: '#5094CB',
  desc: '悬停色'
}, {
  name: '@color-6',
  rgb: '#1973BA',
  desc: '默认状态色',
  whiteFont: true
}, {
  name: '@color-7',
  rgb: '#1661A1',
  desc: '点击色',
  whiteFont: true
}]

const colors2 = [{
  name: '@page-background',
  rgb: '#ECECEC',
  desc: '页面背景色'
}, {
  name: '@white',
  rgb: '#FFFFFF',
  desc: '白色/内容背景色'
}, {
  name: '@black',
  rgb: '#000000',
  desc: '黑色',
  whiteFont: true
}]

const colors3 = [{
  name: '@color-6',
  rgb: '#1973BA',
  desc: '链接/说明色'
}, {
  name: '@green-6',
  rgb: '#00A854',
  desc: '成功色',
  whiteFont: true
}, {
  name: '@yellow-6',
  rgb: '#FFBF00',
  desc: '警告色'
}, {
  name: '@red-6',
  rgb: '#F04134',
  desc: '失败色',
  whiteFont: true
}]

class ColorList extends Component {
  render () {
    return (
      <div>
        <h1 className='margin-t-2 margin-b-2'>颜色</h1>
        <hr />
        <h2 className='margin-t-2 margin-b-2'>品牌色</h2>
        <Row gutter={16}>
          {
            colors1.map((item, idx) => {
              return (
                <Col key={idx} className='gutter-row' span={4}>
                  <ColorBox color={item} />
                </Col>
              )
            })
          }
        </Row>

        <h2 className='margin-t-2 margin-b-2'>中性色</h2>
        <Row gutter={16}>
          {
            colors2.map((item, idx) => {
              return (
                <Col key={idx} className='gutter-row' span={4}>
                  <ColorBox color={item} />
                </Col>
              )
            })
          }
        </Row>

        <h2 className='margin-t-2 margin-b-2'>功能色</h2>
        <Row gutter={16}>
          {
            colors3.map((item, idx) => {
              return (
                <Col key={idx} className='gutter-row' span={4}>
                  <ColorBox color={item} />
                </Col>
              )
            })
          }
        </Row>
      </div>
    )
  }
}

export default ColorList
