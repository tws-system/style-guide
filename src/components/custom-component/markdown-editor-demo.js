import React, {Component} from 'react'

import {MarkdownEditor, DemoShower} from '../tws-component'

class MarkdownEditorDemo extends Component {
  handleUpdate (source) {
    console.log(source)
  }

  render () {
    const demoCode = `
#编辑/预览模式

### 绘制流程图 Flowchart

\`\`\`flow
st=>start: 用户登陆
op=>operation: 登陆操作
cond=>condition: 登陆成功 Yes or No?
e=>end: 进入后台

st->op->cond
cond(yes)->e
cond(no)->op
\`\`\`
                    
### 绘制序列图 Sequence Diagram
                    
\`\`\`seq
Andrew->China: Says Hello 
Note right of China: China thinks\\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
\`\`\`    
    
`
    return (
      <div>
        <h1>Markdown 编辑器</h1>
        <hr />
        <DemoShower title='markdown编辑器' desc='编辑器'>
          <div>
            <MarkdownEditor defaultValue={demoCode} onUpdate={this.handleUpdate.bind(this)} />
          </div>
        </DemoShower>

        <DemoShower title='markdown编辑器' desc='预览模式'>
          <div>
            <MarkdownEditor preview defaultValue={demoCode} onUpdate={this.handleUpdate.bind(this)} />
          </div>
        </DemoShower>
      </div>

    )
  }
}

export default MarkdownEditorDemo
