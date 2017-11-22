import React, { Component } from 'react'
import { Table, Row, Col, Icon, Button,Card } from 'antd'
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
        name: '胡彦斌',
        age: 5,
        address: 10
      }, {
        key: 1,
        name: '胡彦祖',
        age: 5,
        address: '20'
      }],
      editName: ''
    }
  }

  editText (record) {
    this.setState({
      expandedRowKeys: [record.key]
    })
  }

  handleUpdate (source) {
    this.setState({
      editName: source
    })
  }

  modifyText (record) {
    let newData = this.state.dataSource.map((data) => {
      if (data.key === record.key) {
        data.name = this.state.editName
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
      <TwsMarkdownEditor value={record.name} onUpdate={this.handleUpdate.bind(this)}/>
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

  render () {
    const {dataSource, expandRowByClick, expandIconAsCell, expandedRowKeys} = this.state

    const columns = [{
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      description: 'a',
      render: (text, record) => {
        return <Row>
          <Col span={20} className='Col'>
            <span>{text}</span>
          </Col>
          <Col span={4}>
            <Icon type='edit' onClick={this.editText.bind(this, record)}/>
          </Col>
        </Row>
      }
    }, {
      title: '完成题目',
      dataIndex: 'age',
      key: 'age',
      description: 'a'
    }, {
      title: '提交次数',
      dataIndex: 'address',
      key: 'address',
      description: 'a'
    }]

    return (
      <div>
        <Card title={'表格中文本编辑'}>
          {this.toggleButton()}
          <Table style={{margin:'20px 0px'}} dataSource={dataSource} columns={columns}
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
