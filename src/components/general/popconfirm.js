import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'

class PopConfirm extends Component {
  render () {
    const codeString3 = `
<Popconfirm placement='topLeft' title='Are you sure delete this task?' okText='Yes' cancelText='No'>
    <Button className='tws-btn' type='primary'>Delete</Button>
</Popconfirm>
`.trim()

    return (
      <div>
        <h1>气泡确认框</h1>
        <hr />

        <h2 className='margin-t-2'>操作类确认</h2>
        <div className='margin-t-2'>
          <Popconfirm placement='topLeft' title='Are you sure delete this task?' okText='Yes' cancelText='No'>
            <Button className='tws-btn' type='primary'>Delete</Button>
          </Popconfirm>

          <h4 className='margin-t-2'>说明:</h4>
          <p>
            如删除类按钮,点击时,弹出确认气泡,而不是模态框
          </p>
          <h4 className='margin-t-2'>代码(html):</h4>
          <div className='code-wrap'>
            <SyntaxHighlighter language='html' style={docco}>{codeString3}</SyntaxHighlighter>
          </div>
        </div>

      </div>
    )
  }
}

export default PopConfirm
