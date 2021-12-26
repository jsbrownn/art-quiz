
class Component {
  constructor(name, markup, controller, entryElem ) {
    this.name = name,
    this.markup = markup,
    this.controller = controller,
    this.entryElem = entryElem || document.getElementById('root')
  }

  render() {
    console.log('rendered')
    // let root = document.getElementById('root')
    this.entryElem.style.opacity = '1'
    
    return this.entryElem.innerHTML = this.markup;
  }

  unrender() {
    // let root = document.getElementById('root')
    this.entryElem.style.opacity = '0';
    return this.entryElem.innerHTML =''
  }



}

export { Component };