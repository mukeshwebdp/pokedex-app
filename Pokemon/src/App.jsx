
import { Link } from 'react-router-dom'
import './App.css'

import CustomRoutes from './route/CustomRoutes'

function App() {
 

  return (
    <div className='container'>
      <Link to={'/'}>
            <h1>Pokedex</h1>
      </Link>
        <CustomRoutes />
    </div>
  )
}

export default App
