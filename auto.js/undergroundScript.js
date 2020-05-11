app.launchApp('地下城堡2')

sleep(2000)

requestScreenCapture(false)

sleep(1000)

var initialLocation = [5, 52] // 初始位置
var initialFood = 1100 // 初始食物数量
var initialDirection = 'top'  // 初始行走方向

var mapTop = 14
var mapRight = 40
var mapBottom = 40

var nowLocation, food, direction, rigtStep

resetData()

// 开始
nextStep()


function nextStep() {
  var judgeResult = judgeState()

  if (!judgeResult.result) {
    sleep(1000)
    nextStep()
    return
  }
  var x = judgeResult.result.x
  var y = judgeResult.result.y

  toast(judgeResult.state)

  switch (judgeResult.state) {
    case 2: // 交战状态
      // 等待交战完毕
      sleep(5000)
      break
    case 3: // 拾取状态
      // 拾取
      click(x, y)
      sleep(1500)
      break
    case 4: // 采集状态
      // 采集
      click(x, y)
      sleep(2000)
      break
    case 5: // 遭遇状态(是否战斗)
      // 战斗
      click(x, y)
      sleep(10000)
      break
    case 6: // 确认状态
      click(x, y)
      sleep(10000)
    case 7: // 城堡状态
      click(x, y)
      sleep(500)
      switchTeam()
      break
    case 8: // 队伍状态
      click(x, y)
      sleep(500)
      break
    case 9: // 地图选择状态
      click(x, y)
      sleep(500)
      break
    case 10: // 行走状态
      if (food < 20) {
        click(x, y)
      } else {
        judgeMove()
      }
      sleep(400)
      break
    case 11: // 城堡状态
      closeCastle()
      sleep(500)
      break
    default: // 未知状态
      // 停止脚本
      exit()
      break
  }

  nextStep()
}

// 判断当前状态
function judgeState() {
  var targetImg = null // 目标图片
  var targetPath = '../autoImgs/dixiachengbao/target/' // 目标图片路径
  var i = 1
  var result = null

  var nowView = captureScreen() // 当前截图`

  while(i < 11 && !result) {
    i++
    targetImg = images.read(targetPath + i + '.jpg')
    result = findImage(nowView, targetImg)
  }

  return {
    state: i,
    result: result
  }
}

// 判断移动
function judgeMove() {

  if (direction === 'top') {
    if (nowLocation[1] > mapTop) {
      nowLocation[1] = nowLocation[1] - 1
      click(500, 600)
      food = food - 4
    } else {
      xMove()
    }
  } else {
    if (nowLocation[1] < mapBottom) {
      nowLocation[1] = nowLocation[1] + 1
      click(500, 1600)
      food = food - 4
    } else {
      xMove()
    }
  }

}

// x轴移动
function xMove() {
  rigtStep = rigtStep < 1 ? 3 : rigtStep

  if (rigtStep === 3) {
    direction = direction === 'top' ? 'bottom' : 'top'
  }

  if (nowLocation[0] < mapRight - 1) {
    rigtStep --
    nowLocation[0] = nowLocation[0] + 1
    click(800, 1100)
    sleep(500)
    food = food - 4
  } else {
    food = 10
  }
}

// 切换队伍
function switchTeam() {
  var targetPath = '../autoImgs/dixiachengbao/target/team1.jpg' // 目标图片路径
  var targetImg = images.read(targetPath)
  var nowView = captureScreen() // 当前截图

  var result = findImage(nowView, targetImg)

  if (result && result.x) {
    console.log('切换1队')
  } else {
    targetPath = '../autoImgs/dixiachengbao/target/team2.jpg'
    targetImg = images.read(targetPath)
    result = findImage(nowView, targetImg)
  }
  if (result) {
    click(result.x, result.y)
  }
  
  resetData()
  sleep(500)
}

// 关闭城堡
function closeCastle() {
  var targetImg = images.read('../autoImgs/dixiachengbao/target/close.jpg')
  var nowView = captureScreen()
  var result = findImage(nowView, targetImg)

  if (result) {
    click(result.x, result.y)
  }
}

// 回城，重置地图行走数据
function resetData() {
  food = initialFood
  direction = initialDirection
  rigtStep = 0
  nowLocation = [initialLocation[0], initialLocation[1]]
}