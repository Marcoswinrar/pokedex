import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Favorites from '../pages/Favorites'
import Pokemon from '../pages/Pokemon'

const AppRoutes = () => (
  <Routes>
    <Route index path="/" element={<Home />} />
    <Route path=":name" element={<Pokemon />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
)

export default AppRoutes
