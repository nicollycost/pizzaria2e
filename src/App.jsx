import {useState} from 'react'
import {Routes , Route} from 'react-router-dom'

const App = () => {

  const [color] = useState("#e4ffcc")
  document.body.style.background = color

  return (
    <Routes>
      <Route path= "/" />
    </Routes>
  )
}
export default App