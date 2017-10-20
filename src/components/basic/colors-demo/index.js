import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ColorBox from './color-box'
import DemoShower from '../../demo-shower'

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
  name: '@primary-color',
  rgb: '#1973BA',
  desc: '链接/说明色'
}, {
  name: '@color-success',
  rgb: '#00A854',
  desc: '成功色',
  whiteFont: true
}, {
  name: '@color-warn',
  rgb: '#FFBF00',
  desc: '警告色'
}, {
  name: '@color-error',
  rgb: '#F04134',
  desc: '错误色',
  whiteFont: true
}]

const lessStr = `
.color-box {
  height: 96px;
  line-height: @gap-3;
  padding-top: @gap-2;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  color: @black;

  &--success {
    color: @white;
    background: @color-success;
  }

  &--warn {
    color: @white;
    background: @color-warn;
  }
}`.trim()

class ColorsDemo extends Component {
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

        <DemoShower title='实例' desc='实例' less={lessStr}>
          <Row gutter={16}>
            <Col className='gutter-row' span={6}>
              <div className='color-box color-box--success'>
                <div>@color-success</div>
                <div>成功色</div>
              </div>
            </Col>

            <Col className='gutter-row' span={6}>
              <div className='color-box color-box--warn'>
                <div>@color-warn</div>
                <div>警告色</div>
              </div>
            </Col>
          </Row>
        </DemoShower>
      </div>
    )
  }
}

export default ColorsDemo
