import { getCatInfos } from '../apis/api.js'
import Breadcrumb from '../components/Breadcrumb.js'
import Nodes from '../components/Nodes.js'
import { useState } from '../core/core.js'

export default function RootPage($target) {
  const breadcrumb = new Breadcrumb($target)
  const nodes = new Nodes($target)
  // const [infos, setInfos] = useState([])

  async function fetchData() {
    const res = await getCatInfos()

    console.log(res)
  }

  fetchData()

  this.render = () => {
    breadcrumb.render()
    nodes.render()
  }
}