
class Component {
  constructor(name, markup) {
    this.name = name,
    this.markup = markup
  }

  isRender = false;

  render() {
    this.isRender = true;
    let root = document.getElementById('root')
    root.innerHTML = this.markup;
    root.style.transition = 'all ease .4s'
    root.style.opacity = '1'
    return root.innerHTML = this.markup
  }
  unrender() {
    this.isRender = false;
    let root = document.getElementById('root')
    root.style.opacity = '0';
    setTimeout(() => {
      return root.innerHTML = ""
    }, 400)


  }

}

export { Component };