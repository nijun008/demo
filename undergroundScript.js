app.launchApp('地下城堡2')

sleep(2000)

requestScreenCapture(false)

sleep(1000)

var nowLocation = [5, 53] // 当前位置
var food = 1300 // 剩余食物
var direction = 'top' // 行走方向

var rigtStep = 0

var mapTop = 14
var mapRight = 40
var mapBottom = 40
var mapLeft = 12

nextStep()

function judgeState() {
  var targetImg = null // 目标图片
  var targetPath = '../autoImgs/dixiachengbao/target/' // 目标图片路径
  var i = 1
  var result = null

  var nowView = captureScreen() // 当前截图

  while(i <= 5 && !result) {
    i++
    targetImg = images.read(targetPath + i + '.jpg')
    result = findImage(nowView, targetImg)
  }
  return {
    state: i,
    result: result
  }
}

// 下一步动作
function nextStep() {
  var judgeResult = judgeState()
  if (!judgeResult.result) {
    sleep(300)
    nextStep()
    return
  }
  var x = judgeResult.result.x
  var y = judgeResult.result.y
  var stopFlag = false

  toast(judgeResult.state)
  // toast(x + ',' + y)

  switch (judgeResult.state) {
    case 2: // 交战状态
      // 等待交战完毕
      sleep(3000)
      break
    case 3: // 拾取状态
      // 拾取
      click(x, y)
      sleep(500)
      break
    case 4: // 采集状态
      // 采集
      click(x, y)
      sleep(1000)
      break
    case 5: // 遭遇状态(是否战斗)
      // 战斗
      click(x, y)
      sleep(10000)
      break
    case 6: // 行走状态
      // 判断当前位置确定行走方向
      judgeWalk()
      sleep(500)
      break
    default: // 未知状态
      // 停止脚本
      stopFlag = true
      break
  }

  if (stopFlag) {
    exit()
    return
  } else {
    nextStep()
  }
}

function judgeWalk() {

  if (food < 20) {
    exit()
    return
  }

  if (direction === 'top') {
    if (nowLocation[1] > mapTop) {
      nowLocation[1] = nowLocation[1] - 1
      click(500, 500)
      food = food - 4
    } else {
      rightWalk()
    }
  } else {
    if (nowLocation[1] < mapBottom) {
      nowLocation[1] = nowLocation[1] + 1
      click(500, 1500)
      food = food - 4
    } else {
      rightWalk()
    }
  }

}

function rightWalk() {
  rigtStep = rigtStep < 1 ? 3 : rigtStep

  if (rigtStep === 3) {
    direction = direction === 'top' ? 'bottom' : 'top'
  }

  if (nowLocation[0] < mapRight - 1) {
    rigtStep --
    nowLocation[0] = nowLocation[0] + 1
    click(800, 1000)
    sleep(300)
    food = food - 4
  } else {
    exit()
  }
}