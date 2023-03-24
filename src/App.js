import Home from './pages/Home'
import './css/style.css'
import { Routes, Route } from 'react-router-dom'
import Fibonnaci from './pages/Fibonacci'
import Physics from './pages/Physics'
import Pattern from './pages/Pattern'
export default function App () {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Fibonnaci' element={<Fibonnaci />} />
        <Route path='/Physics' element={<Physics />} />
        <Route path='/Pattern' element={<Pattern />} />
      </Routes>
    </div>
  )
}
