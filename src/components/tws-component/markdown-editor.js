import React, {Component} from 'react'
import { Tabs } from 'antd'
import 'github-markdown-css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import marked from 'marked'
import Markmirror from 'react-markmirror';

const TabPane = Tabs.TabPane
const FOCUS_WAITINT_TIME_IN_MS = 100

class MarkdownEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: this.props.defaultValue || '# H1',
      source: ''
    }
  }

  componentDidMount () {
    marked(this.state.code, (err, source) => {
      this.setState({source})
      this.focusEditor.bind(this)
    })
  }

  updateCode (code) {
    marked(code, (err, source) => {
      this.setState({source})
    })

    this.setState({code})
  }

  handleTabChange (tabKey) {
    if (tabKey === 'source') {
      setTimeout(this.focusEditor.bind(this), FOCUS_WAITINT_TIME_IN_MS)
    }
  }

  focusEditor () {
    this.codeMirror.focus()
    const inst = this.codeMirror.getCodeMirror()
    inst.setCursor(inst.lineCount(), 0)
  }

  render () {
    var options = {
      lineNumbers: true,
      mode: 'markdown',
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    }
    return (
      <div className='tws-markdown-editor'>
        <Tabs defaultActiveKey='1' animated={false} onChange={this.handleTabChange.bind(this)}>
          <TabPane tab='source' key='source'>
            <CodeMirror ref={(ref) => { this.codeMirror = ref }} value={this.state.code} autoFocus onChange={this.updateCode.bind(this)} options={options} />
          </TabPane>
          <TabPane tab='preview' key='preview'>
            <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.source }} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default MarkdownEditor
