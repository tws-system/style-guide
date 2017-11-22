import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Card } from 'antd'

class SectionPresentation extends Component {
  constructor () {
    super()
    this.state = {
      path: [],
      breadcrumbTask: [
        {
          name: 'sectionPresentation',
          linkTo: '/sectionPresentation'
        },
        {
          name: 'task',
          linkTo: '/sectionPresentation/task'
        },
        {
          name: 'section',
          linkTo: '/sectionPresentation/task/section'
        }]
    }
  }

  componentDidMount () {
    console.log(this.props)
    const pathSnippets = this.props.location.pathname.split('/').filter(i => i)
    this.setState({path: pathSnippets})
  }

  componentWillReceiveProps (nextProps) {
    const pathSnippets = nextProps.location.pathname.split('/').filter(i => i)
    this.setState({path: pathSnippets})
  }

  changePath (url) {
    let replacePath = this.state.breadcrumbTask.filter((p) => p.name === url)[0].linkTo
    this.props.history.replace(replacePath)
  }

  render () {
    return (
      <div>
        <SectionForExcellentTask/>
        <SectionForTitle/>
        <Card title={'面包屑'}>
          <Breadcrumb>
            {
              this.state.path.map((item, key) => {
                return <Breadcrumb.Item key={key}><a
                  onClick={this.changePath.bind(this, item)}>{item}</a></Breadcrumb.Item>
              })
            }
          </Breadcrumb>
          <div style={{margin: '10px 0px'}}>
            <Link to={'/sectionPresentation/task'}>task</Link>
          </div>
        </Card>

      </div>
    )
  }
}

const SectionForTitle = () => {
  return <div>
    <Card title={'标题'} style={{margin: '20px 0px', fontWeight: 'bold'}}>
      <Breadcrumb>
        <Breadcrumb.Item>Topic</Breadcrumb.Item>
        <Breadcrumb.Item>Task</Breadcrumb.Item>
        <Breadcrumb.Item>Section</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  </div>
}

const SectionForExcellentTask = () => {
  return <div>
    <Card title={'优秀作业'}>
      <Breadcrumb>
        <Breadcrumb.Item>Topic</Breadcrumb.Item>
        <Breadcrumb.Item>Task</Breadcrumb.Item>
        <Breadcrumb.Item>Section</Breadcrumb.Item>
      </Breadcrumb>
    </Card>
  </div>
}

export default SectionPresentation

