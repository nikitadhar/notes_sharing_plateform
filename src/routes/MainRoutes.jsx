import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import BrowseNotes from '../BrowseNotes'

export default function MainRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
         <Route path='register' element={<Register />} />
         <Route path='notes' element={<BrowseNotes />} />
    </Routes>
  )
}
