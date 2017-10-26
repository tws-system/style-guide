import React, { Component } from 'react'
import {TwsMarkdownEditor} from 'tws-antd'

class FormDemo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      source: ''
    }
  }

  componentDidMount () {
    fetch('./markdown/bem.md')
      .then((resp) => {
        return resp.text()
      })
      .then(source => {
        this.setState({
          source
        })
      })
  }

  render () {
    return (
      <div>
        {
          this.state.source ? <TwsMarkdownEditor preview defaultValue={this.state.source} />
           : <div />
        }
      </div>
    )
  }
}

export default FormDemo
