import './App.css'
import './components/component.css'

import { ComponentA } from './components/ComponentA/ComponentA'
import { ComponentB } from './components/ComponentB/ComponentB'

function App() {

  return (
    <div className='App'>
      <h1>Hooks: Context + Reducer</h1>
      <div className="container">
        <ComponentA />
        <ComponentB />
      </div>
    </div>
  )
}

export default App
