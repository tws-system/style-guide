import React, {Component} from 'react';
import {Table, Timeline, Button} from 'antd';

class SubmitHistory extends  Component{
  render() {
    return (
        <Timeline>
          <Timeline.Item color="green">
            2015-09-01 10:00 提交 试卷一/试题4 通过
            <p>作业地址: http://www.github.com/aaabbb</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            2015-09-01 10:00 提交 试卷一/试题3 通过
          </Timeline.Item>
          <Timeline.Item color="red">
            <p>2015-09-01 10:00 提交 试卷一/试题3 错误答案</p>
            <p>作业地址: http://www.github.com/aaabbb</p>
            <p><Button type="primary">授权查看答案</Button></p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <p>2015-09-01 10:00 提交 试卷一/试题3 错误答案</p>
            <p>作业地址: http://www.github.com/aaabbb</p>
          </Timeline.Item>
        </Timeline>
    )
  }
};

class ScoreSheetTable extends Component {
  render() {
    const dataSource = [{
      key: '1',
      name: '胡彦斌',
      age: 5,
      address: 10
    }, {
      key: '2',
      name: '胡彦祖',
      age: 5,
      address: '20'
    }];

    const columns = [{
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      description: "a"
    }, {
      title: '完成题目',
      dataIndex: 'age',
      key: 'age',
      description: "a"
    }, {
      title: '提交次数',
      dataIndex: 'address',
      key: 'address',
      description: "a"
    }];


    return (
        <Table dataSource={dataSource} columns={columns} expandedRowRender={record => <SubmitHistory />}/>
    )
  }
}

export default ScoreSheetTable;
