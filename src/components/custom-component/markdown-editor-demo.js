import React, {Component} from 'react'

import {MarkdownEditor, DemoShower} from '../tws-component'

class MarkdownEditorDemo extends Component {
  render () {
    const defaultTemplate = `
# 我今天干了些什么  
`.trim()
    return (
      <DemoShower title='markdown编辑器' desc='编辑器'>
        <div>
          <MarkdownEditor defaultValue={defaultTemplate} />
        </div>
      </DemoShower>
    )
  }
}

export default MarkdownEditorDemo
