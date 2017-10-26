import React, { Component } from 'react'
import { TwsMarkdownEditor } from 'tws-antd'

class FormDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  componentDidMount () {
    fetch('./markdown/bem.md')
      .then((resp) => {
        return resp.text()
      })
      .then(value => {
        this.setState({
          value
        })
      })
  }

  render () {
    return (
      <div>
        <TwsMarkdownEditor preview value={this.state.value} />
      </div>
    )
  }
}

export default FormDemo
