import React, {Component} from 'react'
import {DemoShower} from '../tws-component'
import {TWSMarkdownEditor} from 'tws-antd'

class MarkdownEditorDemo extends Component {
  handleUpdate (source) {
    console.log(source)
  }

  render () {
    const demoCode1 = `
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

    const code1 = `
import {TWSMarkdownEditor} from 'tws-antd'

...

<TWSMarkdownEditor defaultValue={...} onUpdate={console.log} />
`.trim()

    const demoCode2 = `
#预览模式
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
`

    const code2 = `
import {TWSMarkdownEditor} from 'tws-antd'

...

<TWSMarkdownEditor preview defaultValue={...} />
`.trim()
    return (
      <div>
        <h1>Markdown 编辑器</h1>
        <hr />
        <DemoShower title='markdown编辑器' desc='编辑器' code={code1}>
          <div>
            <TWSMarkdownEditor defaultValue={demoCode1} onUpdate={console.log} />
          </div>
        </DemoShower>

        <DemoShower title='markdown查看器' desc='预览模式，不可编辑' code={code2} >
          <div>
            <TWSMarkdownEditor preview defaultValue={demoCode2} />
          </div>
        </DemoShower>
      </div>

    )
  }
}

export default MarkdownEditorDemo
