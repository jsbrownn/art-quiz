window.addEventListener('load',render)
const root = document.querySelector('#root')

const component = '<p>hello word</p>'
function render {
  root.innerHTML(component)

}