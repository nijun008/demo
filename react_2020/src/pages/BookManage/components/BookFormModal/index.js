import React, { Component } from 'react'
import { Modal, Form, Input, Select, DatePicker, Radio, InputNumber } from 'antd'

import { addMovie } from '../../../../utils/http/movie'

class BookForm extends Component {
  formRef = React.createRef()

  constructor(props) {
    super(props)

    this.state = {
      form: {}
    }
  }

  modalOkHandle = () => {
    this.formRef.current.validateFields().then(values => {

      let form = { ...values }
      if (form.issueDate) {
        form.issueDate = values.issueDate.format('YYYY-MM-DD')
      }
      
      addMovie(form).then(({data}) => {
        this.props.updateList()
        this.props.close()
      })
      
      console.log(form)
    }).catch(err => false)
  }

  render() {
    return (
      <div>
        <Modal
          width="800px"
          title="新增book" 
          cancelText="取消" 
          okText="确定" 
          visible={ this.props.visible }
          onCancel={ this.props.close }
          onOk={ () => this.modalOkHandle() }
        >
          <Form ref={this.formRef} labelCol={{ span: 3 }}>
            <Form.Item label="番号" name="NO" rules={[{ required: true, message: '请输入番号' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="名称" name="title" rules={[{ required: true, message: '请输入影片名称' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="jav评分" name="javGrade">
              <InputNumber min={0} max={10} step={0.1}></InputNumber>
            </Form.Item>
            <Form.Item label="站内评分" name="grade">
              <InputNumber min={0} max={10} step={0.1}></InputNumber>
            </Form.Item>
            <Form.Item label="发行日期" name="issueDate">
              <DatePicker />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={0}>正常</Radio>
                <Radio value={1}>禁用</Radio>
                <Radio value={2}>其他</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="主演" name="starring">
              <Input />
            </Form.Item>
            <Form.Item label="演员" name="cast">
              <Select></Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default BookForm