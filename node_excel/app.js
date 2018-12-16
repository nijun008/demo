var xlsx = require('node-xlsx')
var fs = require('fs')

var newName = '2018博才'
var oldName = '2017博才'

var newData = xlsx.parse('./excel/' + newName + '.xls')
var oldData = xlsx.parse('./excel/' + oldName + '.xls')

let idCardIndex = 2, nameIndex = 3, heightIndex = 17, weightIndex = 18
let resultData = [{
  name: '问题数据',
  data: [
    [
      '身份证号',
      '姓名',
      '身高',
      '体重',
      '裸眼视力左',
      '裸眼视力右',
      '错误项'
    ]
  ]
}]

function startApp() {
  newData.forEach(student => {
    for(var rowId in student['data']) {
      var row = student['data'][rowId]
      let newStudent = {
        name: row[nameIndex],
        idCard: row[idCardIndex],
        height: row[heightIndex],
        weight: row[weightIndex],
        eyeLeft: row[30],
        eyeRight: row[31]
      }
      if (findStudent(row[idCardIndex])) {
        checkData(newStudent, findStudent(row[idCardIndex]))
      }
    }
  })
  writeData()
  console.log('检查完成！')
}

function findStudent (idCard) {
  let result
  oldData.forEach(item => {
    for(var rowId in item['data']) {
      var row = item['data'][rowId]
      if (idCard === row[idCardIndex]) {
        result = {
          name: row[nameIndex],
          idCard: idCard,
          height: row[heightIndex],
          weight: row[weightIndex],
          eyeLeft: row[30],
          eyeRight: row[31]
        }
      }
    }
  })
  return result
}

function checkData (newData, oldData) {
  let errMsg = ''
  if (newData.height <= oldData.height) {
    errMsg = '身高'
  }
  if (newData.weight <= oldData.weight) {
    errMsg = errMsg + ' 体重'
  }
  if (newData.eyeLeft > oldData.eyeRight) {
    errMsg = errMsg + ' 左眼视力'
  }
  if (newData.eyeRight > oldData.eyeRight) {
    errMsg = errMsg + ' 右眼视力'
  }
  if ( errMsg != '' && newData.idCard != '身份证号') {
    console.log('错误数据', newData)
    resultData[0].data.push([
      newData.idCard,
      newData.name,
      newData.height,
      newData.weight,
      newData.eyeLeft,
      newData.eyeRight,
      errMsg
    ])
  }
}

function writeData () {
  let buffer = xlsx.build(resultData)
  fs.writeFile('./' + newName + 'resut(含错误提示).xls', buffer)
}

startApp()