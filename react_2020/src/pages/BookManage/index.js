import React from 'react'
import { Table, Tag, Button, Row } from 'antd'

import { getMovie } from '../../utils/http/movie'

import './index.css'

import BookFormModal from './components/BookFormModal'

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
      books: [
        { 
          id: '245515151',
          status: 0,
          NO: 'xxx-167',
          title: '授业ト ップ ',
          grade: 8.4,
          javGrade: 8.6,
          issueDate: '2018-11-05',
          cast: [
            { name: '洗液香', id: 'xiyexiang' }
          ]
        },
        { 
          id: '342455151',
          status: 1,
          NO: 'xxx-359',
          title: '写真ニュース',
          grade: 8.4,
          javGrade: 8.6,
          issueDate: '2018-11-05',
          cast: [
            {name: '剥夺业界已', id: 'xiyexiang'}
          ]
        },
        { 
          id: '124551516', status: 2, NO: 'xxx-226', title: 'の双子タワー', grade: 8.4, javGrade: 8.6, issueDate: '2018-11-05',
          cast: [
            { name: '造已女露依', id: 'xiyexiang' },
            { name: '亚森第', id: 'yasendi' }
          ] 
        }
      ],
      bookCols: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '番号', dataIndex: 'NO', key: 'NO' },
        { title: '名称', dataIndex: 'title', key: 'title' },
        { title: '站内评分', dataIndex: 'grade', key: 'grade' },
        { title: 'jav评分', dataIndex: 'javGrade', key: 'javGrade' },
        { title: '女优', dataIndex: 'cast', key: 'cast', 
          render: cast => (
            cast ? 
            cast.map((itme, index) => (
              <span key={ itme.id }>{ index > 0 ? <span>、</span> : '' }<a href="_blank">{ itme.name }</a></span>
            )) 
            : <span>暂无</span>
          )
        },
        { title: '发行日期', dataIndex: 'issueDate', key: 'issueDate' },
        { title: '状态', dataIndex: 'status', key: 'status', 
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

  componentDidMount() {
    this._getMovie()
  }

  _getMovie = () => {
    getMovie().then(({ data }) => {

      this.setState({
        books: data
      })
    })
  }

  fromVisibleToggle = (visible) => {
    this.setState({
      formVisible: visible
    })
  }

  tableDisableHandle = (row, index) => {
    console.log(row, index)
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
        <Table dataSource={ this.state.books } columns={ this.state.bookCols } rowKey="id" />
        <BookFormModal
          visible={ this.state.formVisible }
          close={ () => this.fromVisibleToggle(false) }
          updateList={ () => this._getMovie() }
        />
      </div>
    )
  }
}

export default BookManage