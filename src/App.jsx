import { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import Results from './components/Results'

function App() {
  const [button,setButton] = useState(false)
  
  return (
    
    <>
    <button onClick={()=>setButton(true)}>прогресс</button>
    <AppHeader />
     
     {button && (
      <>
      <Results />
      </>
     )}

      <AppMain />
      <Results />
    </>
  )
}

export default App
