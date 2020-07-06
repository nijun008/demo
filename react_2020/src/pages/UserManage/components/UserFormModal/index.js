import React, { Component } from 'react'
import { Modal, Form, Input, Radio } from 'antd'

import { addUser } from '../../../../utils/http/user'

class UserForm extends Component {
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

      this._userSubmit(form)
    }).catch(err => false)
  }

  _userSubmit = (form) => {
    addUser(form).then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <Modal
          width="800px"
          title="新增用户" 
          cancelText="取消" 
          okText="确定" 
          visible={ this.props.visible }
          onCancel={ this.props.close }
          onOk={ () => this.modalOkHandle() }
        >
          <Form ref={this.formRef} labelCol={{ span: 3 }}>
            <Form.Item label="昵称" name="nickName" rules={[{ required: true, message: '请输入用户昵称' }]}>
              <Input />
            </Form.Item>
            <Form.Item label="姓名" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="微信昵称" name="wechatName">
              <Input />
            </Form.Item>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={0}>正常</Radio>
                <Radio value={1}>禁用</Radio>
                <Radio value={2}>其他</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default UserForm