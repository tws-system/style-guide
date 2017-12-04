import React, { Component } from 'react'
import { Breadcrumb, Card, Col, Row, Icon, Avatar } from 'antd'

class SectionPresentation extends Component {
  render () {
    return (
      <div>
        <SectionForExcellentTask/>
        <SectionForTitle/>
        <SectionForBreadcrumb/>
      </div>
    )
  }
}

class First extends Component {
  render () {
    return <Col>
      <Col span={2} offset={1}>
        <div className='section-1 section-list-style'>
          必修
        </div>
      </Col>
      <Col span={5}>
        <div className='section-2 section-list-style'>
          {this.props.value}
        </div>
      </Col>
      <Col span={2}>
        <div className='section-3 section-list-style-icon'>
          <Icon type='star' style={{fontSize: 30, color: 'rgb(0, 168, 84)'}}/>
        </div>
      </Col>
    </Col>
  }
}

const SectionForExcellentTask = () => {
  return <div>
    <Card title={'作业标题'} noHovering>
      <First value={'Topic — Task — Section'}/>
    </Card>
    <div className='desc'>
      以 "—" 分隔，描述当前作业的标题，可用来展示学生的所有作业列表，前面的“选修 / 必修”是作业类型，后面带颜色的五角星是作业状态，示例如下：
    </div>
    <div className='desc'>
      <Row>
        <First value={'后端知识 — Node.js — npm包管理器'}/>
        <First value={'前端知识 — HTML学习 — 块级元素'}/>
        <Col span={2} offset={1}>
          <Icon type='star' style={{marginTop: 13, fontSize: 30, color: 'rgb(0, 168, 84)'}}/>优秀
        </Col>
      </Row>
    </div>
  </div>
}

class Second extends Component {
  render () {
    return <Card.Grid style={{width: '25%', height: '50%'}} noHovering>
      <Col span={1} offset={3}>
        <Avatar size={'small'} style={{backgroundColor: 'rgb(25, 115, 186)'}} icon='user'/>
      </Col>
      <Col span={1} offset={4}>
        <Avatar size={'small'} style={{backgroundColor: 'rgb(25, 115, 186)'}} icon='user'/>
      </Col>
      <Col span={1} offset={4}>
        <Avatar size={'small'} style={{backgroundColor: 'rgb(25, 115, 186)'}} icon='user'/>
      </Col>
      <Col span={1} offset={4}>
        <Avatar size={'small'} style={{backgroundColor: 'rgb(25, 115, 186)'}} icon='user'/>
      </Col>
      <Row style={{marginTop: 30, textAlign: 'center'}}>
        <Col>{this.props.value}</Col>
      </Row>
    </Card.Grid>
  }
}

class SecondCard extends Component {
  constructor () {
    super()
    this.state = {
      IconType: 'down',
      isShowMyStudentTaskStatus: true
    }
  }

  showMyStudentTaskStatus () {
    let type
    if (this.state.IconType === 'down') {
      type = 'right'
    } else {
      type = 'down'
    }
    this.setState({'IconType': type, 'isShowMyStudentTaskStatus': !this.state.isShowMyStudentTaskStatus})
  }

  render () {
    return <Card className='margin-t-1' noHovering bordered={false} title={
      <div>{this.props.title}<Icon type={this.state.IconType} className='margin-l-2 click-icon'
                                   onClick={this.showMyStudentTaskStatus.bind(this)}/></div>}>
      {this.state.isShowMyStudentTaskStatus ? <Row style={{margin: '20px 10px'}}>
        <Second value={'优秀'}/>
        <Second value={'已完成'}/>
        <Second value={'评阅中'}/>
      </Row> : ''}
    </Card>
  }
}

class SectionForTitle extends Component {
  render () {
    return <div>
      <Card title={'某一作业状态的标题'} noHovering className='margin-t-2'>
        <Card className='margin-t-1' noHovering bordered={false} title={
          <div>Topic / Task / Section</div>}>
        </Card>
      </Card>
      <div className='desc'>
        以斜杠" / "分隔，可用在助教主页，方便助教查看各个作业所属的任务卡以及各个学生的完成情况，示例如下：
      </div>
      <div className='desc'>
        <SecondCard title={'前端知识 / HTML学习 / 块级元素'}/>
        <SecondCard title={'后端知识 — Node.js — npm包管理器'}/>
      </div>
    </div>
  }
}

class Third extends Component {
  render () {
    return <Row style={{margin: '20px 20px'}}>
      <Col span={1}>
        <Avatar size={'small'} style={{backgroundColor: 'rgb(25, 115, 186)'}} icon='user'/>
      </Col>
      <Col span={22}>
        <Row>
          <Col span={20}>
            <h3>{this.props.name} 的作业被评为优秀</h3>
          </Col>
          <Col span={4}>
            <Icon type='clock-circle'/><span> 时间：2017-10-1</span>
          </Col>
        </Row>
        <div className='mark-down-wrap margin-t-1'>
          <a>作业链接</a>
        </div>
      </Col>
    </Row>
  }
}

class ThirdBreadCrumb extends Component{
  render(){
    return <div className='line'>
      <Breadcrumb>
        <Breadcrumb.Item><a href=''>{this.props.topic}</a></Breadcrumb.Item>
        <Breadcrumb.Item><a href=''>{this.props.Task}</a></Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.Section}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  }
}

const SectionForBreadcrumb = () => {
  return <div>
    <Card title={'优秀作业页面面包屑'} noHovering className='margin-t-2'>
      <ThirdBreadCrumb topic={'Topic'} Task={'Task'} Section={'Section'}/>
    </Card>
    <div className='desc'>
      以斜杠" / "分隔，一般在页面上部，用于显示当前优秀作业所属任务卡，可用来展示被评为优秀作业的用户列表，示例如下：
    </div>
    <div className='desc'>
      <ThirdBreadCrumb topic={'前端知识'} Task={'HTML学习'} Section={'块级元素'}/>
      <Third name={'张三'}/>
      <Third name={'李四'}/>
    </div>
  </div>
}

export default SectionPresentation

