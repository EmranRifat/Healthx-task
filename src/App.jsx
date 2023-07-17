
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Routes/Router'

function App() {

  return (
    <div style={{position:"relative"}}>
      
<RouterProvider router={router}/>  
    </div>
  )
}

export default App
