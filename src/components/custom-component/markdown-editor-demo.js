import React, {Component} from 'react'
import {DemoShower} from '../tws-component'
import {TwsMarkdownEditor} from 'tws-antd'

class MarkdownEditorDemo extends Component {
  handleUpdate (source) {
    console.log(source)
  }

  render () {
    const demoCode1 = `
#编辑模式

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
`.trim()

    const code1 = `
import {TWSMarkdownEditor} from 'tws-antd'

...

<TwsMarkdownEditor defaultValue={...} onUpdate={console.log} />
`.trim()

    const demoCode2 = `
#预览模式
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
`.trim()

    const code2 = `
import {TWSMarkdownEditor} from 'tws-antd'

...

<TwsMarkdownEditor preview defaultValue={...} />
`.trim()
    return (
      <div>
        <h1>Markdown 编辑器</h1>
        <hr />
        <DemoShower title='markdown编辑器' desc='编辑器' code={code1}>
          <div>
            <TwsMarkdownEditor defaultValue={demoCode1} onUpdate={console.log} />
          </div>
        </DemoShower>

        <DemoShower title='markdown查看器' desc='预览模式，不可编辑' code={code2} >
          <div>
            <TwsMarkdownEditor preview defaultValue={demoCode2} />
          </div>
        </DemoShower>
      </div>

    )
  }
}

export default MarkdownEditorDemo
