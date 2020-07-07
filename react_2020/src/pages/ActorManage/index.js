import React from 'react'
import { Table, Tag, Button, Row } from 'antd'

import ActorFormModal from './components/ActorFormModal'

import { getActor } from '../../utils/http/actor'

class BookManage extends React.Component {

  constructor(props) {
    super(props)

    const stateFormat = [
      { label: '正常', tagColor: 'green' },
      { label: '禁用', tagColor: 'gold' },
      { label: '其它', tagColor: 'blue' }
    ]

    this.state = {
      formVisible: false,
      actors: [
        { 
          id: '245515151',
          status: 0,
          name: '洗液香',
          grade: 8.4,
          debutDate: '2018-11-05',
          belongCompany: '蚊香社',
          alias: [
            { name: '洗液香', id: 'xiyexiang' }
          ]
        },
        { 
          id: '342455151',
          status: 1,
          name: '剥夺业界已',
          grade: 8.4,
          debutDate: '2018-11-05',
          belongCompany: '蚊香社',
          alias: [
            {name: '剥夺业界已', id: 'boduoyejieyi'}
          ]
        },
        { 
          id: '124551516', status: 2, name: '造已女露依', grade: 8.4, debutDate: '2018-11-05', belongCompany: '蚊香社',
          alias: [
            { name: '造已女露依', id: 'xiyexiang' },
            { name: '亚森第', id: 'yasendi' }
          ] 
        }
      ],
      tableCols: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '艺名', dataIndex: 'name', key: 'name' },
        { title: '评分', dataIndex: 'grade', key: 'grade' },
        { title: '别名', dataIndex: 'alias', key: 'alias', 
          render: alias => (
            alias.map((itme, index) => (
            <span key={ itme.id }>{ index > 0 ? <span>、</span> : '' }{ itme.name }</span>
            ))
          )
        },
        { title: '所属公司', dataIndex: 'belongCompany', key: 'belongCompany' },
        { title: '出道日期', dataIndex: 'debutDate', key: 'debutDate' },
        { title: '数据状态', dataIndex: 'status', key: 'status', 
          render: status => (
            <Tag color={ stateFormat[status].tagColor }>{stateFormat[status].label}</Tag>
          ) 
        },
        { 
          title: '操作',
          key: 'action',
          render: (text, row, index) => (
            <Button type="primary" size="small" ghost onClick={ () => this.tableDisableHandle(row, index) }>禁用</Button>
          )
        }
      ]
    }
  }

  fromVisibleToggle = (visible) => {
    this.setState({
      formVisible: visible
    })
  }

  tableDisableHandle = (row, index) => {
    console.log(row, index)
  }

  componentDidMount() {
    this.getActorList()
  }

  getActorList = () => {
    getActor().then(res => {
      this.setState({
        actors: res
      })
    })
  }

  render() {
    return (
      <div className="page-wrap book-manage-page">
        <Row justify="space-between" className="table-row">
          <Row>
          <Button>查询</Button>
          </Row>
          <Row>
            <Button onClick={ () => this.fromVisibleToggle(true) }>新增</Button>
          </Row>
        </Row>
        <Table dataSource={ this.state.actors } columns={ this.state.tableCols } rowKey="id" />
        <ActorFormModal 
          visible={ this.state.formVisible } 
          close={ () => this.fromVisibleToggle(false) }
          updateList={ () => this.getActorList() }
        />
      </div>
    )
  }
}

export default BookManage