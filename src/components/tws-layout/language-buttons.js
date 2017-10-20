import React, { Component } from 'react'
import {Radio} from 'antd'
import {connect} from 'react-redux'

class LanguageButtons extends Component {
  changeLocale (evt) {
    this.props.changeLanguage(evt.target.value)
  }

  render () {
    return (<div style={{
      float: 'right'
    }}>
      <Radio.Group defaultValue='cn' onChange={this.changeLocale.bind(this)}>
        <Radio.Button key='en' value='en'>English</Radio.Button>
        <Radio.Button key='zh' value='zh'>中文</Radio.Button>
      </Radio.Group>
    </div>)
  }
}

const mapStateToProps = ({lang}) => ({lang})
const mapDispatchToProps = (dispatch) => {
  return {
    changeLanguage: (lang) => {
      dispatch({
        lang: lang,
        type: 'CHANGE_LANGUAGE'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageButtons)
