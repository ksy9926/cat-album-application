export default function Breadcrumb($target) {
  const nav = document.createElement('nav')
  
  nav.classList.add('Breadcrumb')
  nav.innerHTML = `
    <div>root</div>
    <div>노란고양이</div>
  `

  this.render = () => {
    $target.appendChild(nav)
  }
}