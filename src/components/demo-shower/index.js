import React, { Component } from 'react'
import { Card, Popconfirm } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

class DemoShower extends Component {
  constructor (args) {
    super(args)
    this.state = {
      showCode: false
    }
  }

  handleClick () {
    const showCode = !this.state.showCode
    this.setState({showCode})
  }

  render () {
    const opts = {
      maxInlineAttributesLineLength: 300,
      showDefaultProps: false,
      displayName: (element) => {
        const protoname = element.type.name === '_a' ? element.type.__proto__.name : element.type.name
        return element.type.displayName || protoname || element.type
      }
    }
    const code = this.props.code || reactElementToJSXString(this.props.children, opts)
    const codeWrapStyle = {display: this.state.showCode ? '' : 'none'}
    const codeToggleMessageId = this.state.showCode ? 'hideCode' : 'showCode'
    const language = this.props.language || 'html'

    return (
      <div className='tws-demo-shower'>
        <Card title={this.props.title} noHovering bodyStyle={{ padding: 0 }}>
          <div className='body'>
            <pre>
              {this.props.children}
            </pre>
          </div>
          <div className='desc'>
            {this.props.desc}
            <a onClick={this.handleClick.bind(this)} className='code-toggle'>
              <FormattedMessage id={codeToggleMessageId} />
            </a>
          </div>
          <div className='code-wrap' style={codeWrapStyle}>
            <SyntaxHighlighter language={language} style={docco}>{code}</SyntaxHighlighter>
          </div>
        </Card>
      </div>
    )
  }
}

DemoShower.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
}

export default DemoShower
