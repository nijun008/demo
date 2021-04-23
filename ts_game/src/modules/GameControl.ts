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
    if (this.eventKeys[event.key] === 'up' && this.direction === 'down') return
    if (this.eventKeys[event.key] === 'down' && this.direction === 'up') return
    if (this.eventKeys[event.key] === 'left' && this.direction === 'right') return
    if (this.eventKeys[event.key] === 'right' && this.direction === 'left') return
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

    this.checkEat(x, y)


    try {
      this.snack.X = x
      this.snack.Y = y
    } catch(e) {
      console.log(e)
      this.isLive = false
      alert('Game Over!')
    }

    this.isLive && setTimeout(this.run.bind(this),  330 - this.scorePanel.level * 30)
  }

  checkEat (x: number, y: number) {
    if (x === this.food.X && y === this.food.Y) {
      this.snack.growUp()
      this.scorePanel.addScore()
      this.food.change()
    }
  }

  reStart () {
    this.snack.X = 145
    this.snack.Y = 145
    this.isLive = true
    this.direction = 'down'
  }

}

export default GameControl