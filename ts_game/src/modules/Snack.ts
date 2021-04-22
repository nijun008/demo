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
    this.head.style.left = `${value}px`
  }

  set Y (value: number) {
    this.head.style.top = `${value}px`
  }

  growUp () {
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

}

export default Snack