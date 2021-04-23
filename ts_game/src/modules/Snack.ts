class Snack {
  head: HTMLElement
  element: HTMLElement
  bodies: HTMLCollection

  constructor () {
    this.element = document.getElementById('snack')!
    this.head = this.element.querySelector('div') as HTMLElement
    this.bodies = this.element.getElementsByTagName('div')
    
  }

  get X () {
    return this.head.offsetLeft
  }

  get Y () {
    return this.head.offsetTop
  }

  set X (value: number) {
    if (this.X === value) return
    this.setPosition('left', value)
  }

  set Y (value: number) {
    if (this.Y === value) return
    this.setPosition('top', value)
  }

  setPosition (posi: 'top' | 'left' , value:number) {
    if (value < 0 || value > 290 ) {
      console.log('撞墙了')
      throw new Error('death')
    }

    this.bodyMove()
    this.head.style[posi] = `${value}px`
    this.cheakHead()
  }

  growUp () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  bodyMove () {
    for(let i:number = this.bodies.length - 1; i > 0; i--) {

      let x = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = x + 'px';
      (this.bodies[i] as HTMLElement).style.top = y + 'px';
    }
  }

  cheakHead () {

    for(let i:number = 1; i < this.bodies.length; i++) {
      let body = this.bodies[i] as HTMLElement

      if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
        console.log('撞到自己了')
        throw new Error('death')
      }
    }
  }

}

export default Snack