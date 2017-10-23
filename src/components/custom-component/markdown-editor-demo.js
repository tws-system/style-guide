import React, {Component} from 'react'

import {MarkdownEditor, DemoShower} from '../tws-component'

class MarkdownEditorDemo extends Component {
  render () {
    const defaultTemplate = `
# 我今天干了些什么  
`.trim()
    return (
      <div>
        <h1>Markdown 编辑器</h1>
        <DemoShower title='markdown编辑器' desc='编辑器'>
          <div>
            <MarkdownEditor defaultValue={defaultTemplate} />
          </div>
        </DemoShower>
      </div>

    )
  }
}

export default MarkdownEditorDemo
