import { useState } from 'react'
import './App.css'
import { Navigator } from './components/navigator'
import { List } from './components/list'
import { Sidebar } from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <div id="container-up">
        <Navigator></Navigator>
      </div>

      <div className='contain'>

        <div id='container-left'>
          <List></List>
        </div>

        <div id='container-right'>
         <Sidebar></Sidebar>
        </div>
        
      </div>
    </div>
  )
}

export default App
