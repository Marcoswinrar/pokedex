import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path=":name" element={<Pokemon />} />
  </Routes>
)

export default AppRoutes
