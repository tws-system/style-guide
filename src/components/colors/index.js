import React, { Component } from 'react'
import { Row, Col } from 'antd'
import ColorBox from './color-box'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'

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

class ColorList extends Component {
  render () {
    const codeStringSuccess = `
.component-color__box_success {
  ...
  background: @color-success;
}  
`
    const codeStringWarn = `
.component-color__box_warn {
  ...
  background: @color-warn;
}  
`
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

        <h2 className='margin-t-2 margin-b-2'>示例</h2>
        <Row gutter={16}>

          <Col className='gutter-row' span={6}>
            <div className='component-color__box_success'>
              <div>@color-success</div>
              <div>成功色</div>

            </div>

            <h4 className='margin-t-2'>代码(less):</h4>
            <SyntaxHighlighter language='css' style={docco}>{codeStringSuccess}</SyntaxHighlighter>
          </Col>

          <Col className='gutter-row' span={6}>
            <div className='component-color__box_warn'>
              <div>@color-warn</div>
              <div>警告色</div>
            </div>

            <h4 className='margin-t-2'>代码(less):</h4>
            <SyntaxHighlighter language='css' style={docco}>{codeStringWarn}</SyntaxHighlighter>
          </Col>

        </Row>
      </div>
    )
  }
}

export default ColorList
