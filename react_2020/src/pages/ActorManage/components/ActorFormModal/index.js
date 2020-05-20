import React, { Component } from 'react'
import { Modal, Form, Input, Select, DatePicker, Radio } from 'antd'

class ActorForm extends Component {
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
      if (form.debutDate) {
        form.debutDate = values.debutDate.format('YYYY-MM-DD')
      }
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
            <Form.Item label="艺名" name="name" rules={[{ required: true, message: '请输入艺人姓名' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="评分" name="grade">
              <Input />
            </Form.Item>
            <Form.Item label="出道日期" name="debutDate">
              <DatePicker />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={0}>正常</Radio>
                <Radio value={1}>禁用</Radio>
                <Radio value={2}>其他</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="别名" name="alias">
              <Select></Select>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default ActorForm