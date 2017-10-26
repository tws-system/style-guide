import React, { Component } from 'react'
import { Form, Input, Row, Col, Button } from 'antd'
import {DemoShower} from '../tws-component'

const FormItem = Form.Item

class FormDemo extends Component {
  render () {
    return (
      <div>
        <h1>表单</h1>
        <hr />

        <DemoShower title='表单布局' desc='表单默认对齐方式,Label右对齐，其他组件左对齐'>
          <Row>
            <Col span={8}>
              <Form>
                <FormItem
                  labelCol={{span: 6}}
                  wrapperCol={{span: 14}}
                  label='E-mail'
                  hasFeedback
                >
                  <Input />
                </FormItem>
                <FormItem
                  labelCol={{span: 6}}
                  wrapperCol={{span: 14}}
                  label='Password'
                  hasFeedback
                >
                  <Input type='password' />
                </FormItem>
                <FormItem
                  labelCol={{span: 6}}
                  wrapperCol={{span: 14}}
                  label='Email'
                  hasFeedback
                >
                  <Input type='email' />
                </FormItem>
                <FormItem className='tws-btn-group' wrapperCol={{
                  span: 14,
                  offset: 6
                }}>
                  <Button type='primary' htmlType='submit'>Register</Button>
                  <Button htmlType='cancel'>Cancel</Button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </DemoShower>

      </div>
    )
  }
}

export default FormDemo
