import React, {Component} from 'react'

const defaultStyle = {
  height: '96px',
  lineHeight: '36px',
  textAlign: 'center',
  borderRadius: '4px',
  border: '1px solid #000'
}

class ColorBox extends Component {
  render () {
    const style = Object.assign(defaultStyle, {
      background: this.props.color.rgb,
      color: this.props.color.whiteFont ? '#FFF' : ''
    })
    return (
      <div style={style}>
        <div>
          {this.props.color.name}
        </div>
        <div>
          {this.props.color.desc}
        </div>
      </div>
    )
  }
}

export default ColorBox
