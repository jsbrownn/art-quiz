
class Component {
  constructor(name,markup) {
    this.name = name,
    this.markup = markup
  }
  
  render(){
    let root = document.getElementById('root')
    return root.innerHTML = this.markup;
  }
  unrender() {
    let root = document.getElementById('root')
    return root.innerHTML = "";
  }

}

export { Component }  ;