class ScorePanel {
  private _score: number = 0
  private _level: number = 1
  maxLevel: number
  upScore: number

  scoreEle: HTMLElement
  levelEle: HTMLElement

  constructor (maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!
    this.levelEle = document.getElementById('level')!

    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore () {
    this._score++
    this.scoreEle.innerHTML = `${this._score}`

    if (this._score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp () {
    if (this._level < this.maxLevel) {
      this._level++
      this.levelEle.innerHTML = `${this._level}`
    }
  }
}

export default ScorePanel