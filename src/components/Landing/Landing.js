export class Landing {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.elements.buttons = this.node.querySelectorAll('.landing__button')
    console.log(this.elements.buttons)
    this.setButtonsActions()
  }
  setButtonsActions () {
    this.elements.buttons.forEach(element => {
      console.log(element)
      element.addEventListener('click', this.showSection.bind(this))
    })
  }
  showSection (event) {
    const section = event.currentTarget.innerText
    if (section === 'SIGN UP') {
      document.querySelector('.login').classList.remove('login--active')
      document.querySelector('.register').classList.toggle('register--active')
    }
    if (section === 'LOGIN') {
      document.querySelector('.register').classList.remove('register--active')
      document.querySelector('.login').classList.toggle('login--active')
    }
  }
}
