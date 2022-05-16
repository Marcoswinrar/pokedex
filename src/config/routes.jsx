import { Route, Routes } from 'react-router-dom'
import Favorites from '../pages/Favorites'
import Home from '../pages/Home'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
)

export default AppRoutes
