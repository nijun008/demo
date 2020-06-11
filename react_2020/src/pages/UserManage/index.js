import React from 'react'
import { Table, Tag, Button, Modal } from 'antd'

import { getUsers, deleteUser } from '../../utils/http/user'

class UserManage extends React.Component {

  constructor(props) {
    super(props)

    const stateFormat = [
      { label: '正常', tagColor: 'green' },
      { label: '禁用', tagColor: 'gold' },
      { label: '其它', tagColor: 'blue' }
    ]

    this.state = {
      users: [
        { id: '245515151', state: 0, nickName: '无', wechatName: '小二' },
        { id: '342455151', state: 1, nickName: '德玛西亚皇子', wechatName: '四阿哥' },
        { id: '124551516', state: 2, nickName: '瞎子', wechatName: '李青' }
      ],
      userCols: [
        { title: '用户ID', dataIndex: 'id', key: 'id' },
        { title: '昵称', dataIndex: 'nickName', key: 'nickName' },
        { title: '微信昵称', dataIndex: 'wechatName', key: 'wechatName' },
        { title: '状态', dataIndex: 'state', key: 'state', 
          render: state => (
            <Tag color={ stateFormat[state].tagColor }>{stateFormat[state].label}</Tag>
          ) 
        },
        { 
          title: '操作',
          key: 'action',
          render: (text, row, index) => (
            <div className="table-handle-box">
              <Button type="primary" size="small" ghost onClick={ () => this.tableDisableHandle(row, index) }>禁用</Button>
              <Button danger size="small" ghost onClick={ () => this.tableDeleteHandle(row, index) }>删除</Button>
            </div>
          )
        }
      ]
    }
  }

  componentDidMount() {
    this._getUserData()
  }

  _getUserData = () => {
    getUsers().then(({data}) => {
      this.setState({
        users: data
      })
    })
  }

  tableDisableHandle = (row, index) => {
    console.log(row, index)
  }

  tableDeleteHandle = (row, index) => {
    Modal.confirm({
      title: '提示',
      content: '用户删除后无法恢复，是否继续?',
      onOk:() => {
        deleteUser({ id: row.id}).then(({data}) => {
          console.log(data)
          this._getUserData()
        })
      },
      onCancel: () => false
    })
  }

  render() {
    return (
      <div>
        <Table dataSource={ this.state.users } columns={ this.state.userCols } rowKey="id" />
      </div>
    )
  }
}

export default UserManage