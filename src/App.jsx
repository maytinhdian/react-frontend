

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Login from './pages/login'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
