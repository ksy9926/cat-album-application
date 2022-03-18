export default function Nodes($target) {
  const div = document.createElement('div')

  div.classList.add('Node')
  div.innerHTML = `
    <img src="./assets/directory.png">
    <div>2021/04</div>
  `

  this.render = () => {
    $target.appendChild(div)
  }
}