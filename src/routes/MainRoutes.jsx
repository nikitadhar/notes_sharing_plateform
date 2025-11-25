import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../screens/Login'
import Register from '../screens/Register'
import BrowseNotes from '../components/BrowseNotes'
import Index from '../screens/Index'
import Dashboard from '../screens/Dashboard'


export default function MainRoutes() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='/' element={<Index />}>
        <Route path='' element={<Home />} />
        <Route path='notes' element={<BrowseNotes />} />
      </Route>
      <Route path='/dashboard' >
        <Route path='' element={<Dashboard />} />
      </Route>
    </Routes>
  )
}
