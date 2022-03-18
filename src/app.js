import AppRouter from './routers/AppRouter.js'

export default function App($target) {
  const appRouter = new AppRouter($target)

  this.render = () => {
    appRouter.render()
  }
}