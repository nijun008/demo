import React from 'react'
import { Table, Tag, Button } from 'antd'

class BookManage extends React.Component {

  constructor(props) {
    super(props)

    const stateFormat = [
      { label: '正常', tagColor: 'green' },
      { label: '禁用', tagColor: 'gold' },
      { label: '其它', tagColor: 'blue' }
    ]

    this.state = {
      books: [
        { 
          id: '245515151',
          state: 0,
          bookNO: 'xxx-167',
          name: '授业ト ップ ',
          grade: 8.4,
          javGrade: 8.6,
          cast: [
            { name: '洗液香', id: 'xiyexiang' }
          ]
        },
        { 
          id: '342455151',
          state: 1,
          bookNO: 'xxx-359',
          name: '写真ニュース',
          grade: 8.4,
          javGrade: 8.6,
          cast: [
            {name: '剥夺业界已', id: 'xiyexiang'}
          ]
        },
        { 
          id: '124551516', state: 2, bookNO: 'xxx-226', name: 'の双子タワー', grade: 8.4, javGrade: 8.6,
          cast: [
            { name: '造已女露依', id: 'xiyexiang' },
            { name: '亚森第', id: 'yasendi' }
          ] 
        }
      ],
      bookCols: [
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '番号', dataIndex: 'bookNO', key: 'bookNO' },
        { title: '名称', dataIndex: 'name', key: 'name' },
        { title: '站内评分', dataIndex: 'grade', key: 'grade' },
        { title: 'jav评分', dataIndex: 'javGrade', key: 'javGrade' },
        { title: '女优', dataIndex: 'cast', key: 'cast', 
          render: cast => (
            cast.map((itme, index) => (
            <span key={ itme.id }>{ index > 0 ? <span>、</span> : '' }<a>{ itme.name }</a></span>
            ))
          )
        },
        { title: '状态', dataIndex: 'state', key: 'state', 
          render: state => (
            <Tag color={ stateFormat[state].tagColor }>{stateFormat[state].label}</Tag>
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

  tableDisableHandle = (row, index) => {
    console.log(row, index)
  }

  render() {
    return (
      <div>
        <Table dataSource={ this.state.books } columns={ this.state.bookCols } rowKey="id" />
      </div>
    )
  }
}

export default BookManage