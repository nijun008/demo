var xlsx = require('node-xlsx')
var fs = require('fs')

var reginData = xlsx.parse('./regin.xlsx')

let idCardIndex = 2, nameIndex = 3, heightIndex = 17, weightIndex = 18

let dataFormat = [
  { key: 'ns1:name', index: 0, label: '数据码', keyValue: 'dataCode' },
  { key: 'ns1:name2', index: 1, label: '数据名称', keyValue: 'dataName' },
  { key: 'ns1:name3', index: 2, label: '六防图类型', keyValue: 'type' },
  { key: 'ns1:name4', index: 3, label: '线路名称', keyValue: 'lineName' },
  { key: 'ns1:color', index: 4, label: '颜色A', keyValue: 'colorA' },
  { key: 'ns1:width', index: 5, label: '宽度', keyValue: 'width' },
  { key: 'ns1:color5', index: 6, label: '颜色B', keyValue: 'colorB' },
  { key: 'ns1:tessellate', index: 7, label: '网格', keyValue: 'tessellate' },
  { key: 'ns1:coordinates', index: 8, label: '经纬度', keyValue: 'pointStr' }
]

let resultData = []

function readExcel() {
  reginData.forEach(sheet => {
    // console.log(sheet.data[1])
    sheet.data.forEach((item, index) => {
      if (index !== 0) {
        let dataItem = {}
        dataFormat.forEach(format => {
          dataItem[format.keyValue] = item[format.index]
        })
        let splitStr = dataItem.pointStr.split(',0')
        dataItem.points = []
        splitStr.forEach(str => {
          if (str) {
            let str1 = str.split(' ').join('')
            let point = str1.split(',')
            dataItem.points.push(point)
          }
        })
        dataItem.pointStr = ''
        resultData.push(dataItem)
      } 
    })
  })

  writeData(resultData)
}

function writeData (data) {
  fs.writeFile('reginData.js', JSON.stringify(data), (err) => {
    if (err) {
      console.log(err)
    }
  })
}

readExcel()