import React, {Component} from 'react'
import { Tabs } from 'antd'
import 'github-markdown-css'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/markdown/markdown'
import marked from 'marked'

const TabPane = Tabs.TabPane

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
    })
  }

  updateCode (code) {
    marked(code, (err, source) => {
      this.setState({source})
    })

    this.setState({code})
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
        <Tabs defaultActiveKey='1' animated={false}>
          <TabPane tab='source' key='1'>
            <CodeMirror value={this.state.code} focus onChange={this.updateCode.bind(this)} options={options} />
          </TabPane>
          <TabPane tab='preview' key='2'>
            <div className='markdown-body' dangerouslySetInnerHTML={{ __html: this.state.source }} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default MarkdownEditor
