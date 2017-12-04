import React, { Component } from 'react'
import { Table, Row, Col, Icon, Button, Card } from 'antd'
import { TwsMarkdownEditor } from 'tws-antd'

class TextEditTable extends Component {
  constructor () {
    super()
    this.state = {
      expandIconAsCell: false,
      expandRowByClick: true,
      expandedRowKeys: [],
      dataSource: [{
        key: 0,
        name: 'HTML',
        description: '这章节主要是对HTML的一个基础学习，包括标签...',
        operate: 'delete'
      }, {
        key: 1,
        name: 'CSS',
        description: '这章节主要是对CSS的一个基础学习',
        operate: 'delete'
      }],
      editDescription: '',
      editable:false
    }
  }


  handleUpdate (source) {
    this.setState({
      editDescription: source
    })
  }

  modifyText (record) {
    let newData = this.state.dataSource.map((data) => {
      if (data.key === record.key) {
        data.description = this.state.editDescription
      }
      return data
    })
    this.setState({
      expandedRowKeys: [],
      dataSource: newData
    })
  }

  expandedRowRender (record) {
    return <div>
      <TwsMarkdownEditor value={record.description} onUpdate={this.handleUpdate.bind(this)}/>
      <Button onClick={this.modifyText.bind(this, record)}>提交</Button>
    </div>
  }

  toggleButton () {
    if (this.state.expandedRowKeys.length) {
      const closeAll = () => this.setState({expandedRowKeys: []})
      return <Button onClick={closeAll}>全部收起</Button>
    }
    const openAll = () => this.setState({expandedRowKeys: [0, 1]})
    return <Button onClick={openAll}>全部展开</Button>
  }

  editText (record) {
    this.setState({
      expandedRowKeys: [record.key],
      editable:true
    })
  }

  cancelEdit(){
    this.setState({
      expandedRowKeys: [],
      editable:false
    })
  }
  edits(record){
    return <div>
      {this.state.editable?<Icon type='check' onClick={this.cancelEdit.bind(this, record)}/>:<Icon type='edit' onClick={this.editText.bind(this, record)}/>}
    </div>
  }
  render () {
    const {dataSource, expandRowByClick, expandIconAsCell, expandedRowKeys} = this.state

    const columns = [{
      title: '任务',
      dataIndex: 'name',
      key: 'name',
      width:'20%'
    }, {
      title: '描述',
      dataIndex: 'description',
      key: 'age',
      width:'60%',
      render: (text, record) => {
        return <Row>
          <Col span={20} className='Col'>
            <span>{text}</span>
          </Col>
          <Col span={4}>
            {this.edits(record)}
          </Col>
        </Row>
      }
    }, {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      width:'20%'
    }]

    return (
      <div>
        <Card title={'表格中文本编辑'} noHovering>
          {this.toggleButton()}
          <Table style={{margin: '20px 0px'}} dataSource={dataSource} columns={columns}
                 expandRowByClick={expandRowByClick}
                 expandIconAsCell={expandIconAsCell}
                 expandedRowKeys={expandedRowKeys}
                 expandedRowRender={this.expandedRowRender.bind(this)}/>
        </Card>

      </div>

    )
  }
}

export default TextEditTable
