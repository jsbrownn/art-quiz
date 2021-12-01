
class Component {
  constructor(name, markup, handlerElem) {
    this.name = name,
    this.markup = markup,
    this.handlerElem = handlerElem
  }

  render() {

    let root = document.getElementById('root')
    
    setTimeout(() => {
      root.style.opacity = '1'
    }, 100)
    return root.innerHTML = this.markup;
  }

  unrender() {
    let root = document.getElementById('root')
    root.style.opacity = '0';
    setTimeout(() => {
      return root.innerHTML = ""
    }, 0)
  }

}

export { Component };