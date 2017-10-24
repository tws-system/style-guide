import React, { Component } from 'react'
import { Card, Tabs } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

const TabPane = Tabs.TabPane

const opts = {
  maxInlineAttributesLineLength: 300,
  showDefaultProps: false,
  displayName: (element) => {
    const protoname = element.type.name === '_a' ? element.type.__proto__.name : element.type.name
    return element.type.displayName || protoname || element.type
  }
}

class DemoShower extends Component {
  constructor (args) {
    super(args)
    this.state = {
      showCode: false,
      current: 'html'
    }
  }

  handleClick () {
    const showCode = !this.state.showCode
    this.setState({showCode})
  }

  handleMenuClick (e) {
    this.setState({
      current: e.key,
      code: this.props.less || reactElementToJSXString(this.props.children, opts)
    })
  }

  render () {
    const code = this.props.code || reactElementToJSXString(this.props.children, opts)
    const codeWrapStyle = {display: this.state.showCode ? '' : 'none'}
    const codeToggleMessageId = this.state.showCode ? 'hideCode' : 'showCode'

    return (
      <div className='tws-demo-shower'>
        <Card title={this.props.title} noHovering bodyStyle={{padding: 0}}>
          <div className='body'>
            {this.props.children}
          </div>
          <div className='desc'>
            {this.props.desc}
            <a onClick={this.handleClick.bind(this)} className='code-toggle'>
              <FormattedMessage id={codeToggleMessageId} />
            </a>
          </div>
          <div className='code-wrap' style={codeWrapStyle}>
            <Tabs className='tws-demo-shower__menu' defaultActiveKey='1' animated={false}>
              <TabPane tab='jsx' key='1'>
                <SyntaxHighlighter language='html' style={docco}>
                  {code}
                </SyntaxHighlighter>
              </TabPane>
              <TabPane tab='less' disabled={!this.props.less} key='2'>
                <SyntaxHighlighter language='css' style={docco}>{this.props.less}</SyntaxHighlighter>
              </TabPane>
            </Tabs>
          </div>
        </Card>
      </div>
    )
  }
}

DemoShower.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  preCode: PropTypes.string
}

export default DemoShower
