import Food from './Food'
import ScorePanel from './ScorePanel'
import Snack from './Snack'

interface KeysInterface {
  [propName: string]: string
}

class GameControl {
  food: Food
  scorePanel: ScorePanel
  snack: Snack
  direction: string = 'right'
  isLive: boolean = true

  eventKeys: KeysInterface = {
    ArrowDown: 'down',
    Down: 'down',
    ArrowUp: 'up',
    Up: 'up',
    ArrowLeft: 'left',
    Left: 'left',
    ArrowRight: 'right',
    Right: 'right'
  }

  constructor () {
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.snack = new Snack()

    this.init()

    this.run()
  }

  init () {
    document.addEventListener('keydown', this.keydownHandler.bind(this))
  }

  keydownHandler(event: KeyboardEvent) {
    if (this.eventKeys[event.key]) {
      this.direction = this.eventKeys[event.key]
    }
  }

  run () {
    let x: number = this.snack.X
    let y: number = this.snack.Y

    switch(this.direction) {
      case 'up':
        y -= 10
        break
      case 'down':
        y += 10
        break
      case 'left':
        x -= 10
        break
      case 'right':
        x += 10
        break
      default:
        break
    }

    if(x < 0 || x > 290 || y < 0 || x > 290) {
      console.log('撞墙了')
      this.isLive = false

      this.reStart()
      return
    }

    this.snack.X = x
    this.snack.Y = y

    this.isLive && setTimeout(this.run.bind(this),  330 - this.scorePanel.level * 30)
  }

  reStart () {
    this.snack.X = 145
    this.snack.Y = 145
    this.isLive = true
    this.direction = 'down'
    // this.run()
  }


}

export default GameControl