import React, { Component } from 'react'
import { Button } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'

class General extends Component {
  render () {
    const codeString1 = '<Button type="primary">Primary</Button>'

    const codeString2 = `
<Button className='tws-btn' type='primary'>Save</Button>
<Button className='tws-btn'>Submit</Button>
<Button className='tws-btn'>Cancel</Button>
`.trim()
    return (
      <div>
        <h1>通用</h1>
        <hr />
        <h2 className='margin-t-2'>单个按钮</h2>
        <div className='margin-t-2'>
          <Button type='primary'>Primary</Button>
          <h4 className='margin-t-2'>说明:</h4>
          <p>
            仅有一个按钮时适用
          </p>
          <h4 className='margin-t-2'>代码(html):</h4>
          <div className='code-wrap'>
            <SyntaxHighlighter language='html' style={docco}>{codeString1}</SyntaxHighlighter>
          </div>
        </div>

        <h2 className='margin-t-2'>多个按钮</h2>
        <div className='margin-t-2'>
          <Button className='tws-btn' type='primary'>Save</Button>
          <Button className='tws-btn'>Submit</Button>
          <Button className='tws-btn'>Cancel</Button>
          <h4 className='margin-t-2'>说明:</h4>
          <p>
            有多个按钮时,只有一个 primary 即可,tws-btn可在按钮之间加入间距
          </p>
          <h4 className='margin-t-2'>代码(html):</h4>
          <div className='code-wrap'>
            <SyntaxHighlighter language='html' style={docco}>{codeString2}</SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}

export default General
