import Root from '../pages/RootPage.js'
import Detail from '../pages/DetailPage.js'

export default function AppRouter($target) {
  const root = new Root($target)
  const detail = new Detail($target)
  
  const FILE_NAME = '/index.html'
  const pathname = location.pathname

  this.render = () => {
    switch(pathname) {
      case FILE_NAME:
        root.render()
        break
      case '/:id':
        detail.render()
        break
      default:
        $target.innerHTML = '<div>404 Error</div>'
        break
    }
  }
}