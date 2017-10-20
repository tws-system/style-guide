const React = require('react')
const ReactMarkdown = require('react-markdown')

class Markdown extends React.Component {
  constructor (args) {
    super(args)
    this.state = {
      source: ''
    }
  }

  handleChange (e) {
    console.log(this.markdown.allowedTypes)
    const source = e.target.value

    this.setState({
      source
    })
  }

  render () {
    return (
      <div>
        <textarea name='' id='' cols='30' rows='10' onChange={this.handleChange.bind(this)} />
        <ReactMarkdown ref={(ref) => {
          this.markdown = ref
        }} source={this.state.source} />
      </div>
    )
  }
}

export default Markdown
