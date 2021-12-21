
class Component {
  constructor(name, markup, controller) {
    this.name = name,
    this.markup = markup,
    this.controller = controller
    
  }

  render() {
    console.log('rendered')
    let root = document.getElementById('root')
    root.style.opacity = '1'
    
    return root.innerHTML = this.markup;
  }

  unrender() {
    let root = document.getElementById('root')
    root.style.opacity = '0';
    return root.innerHTML =''
  }



}

export { Component };