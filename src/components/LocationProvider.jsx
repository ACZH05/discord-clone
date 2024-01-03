import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

function LocationProvider() {
  const location = useLocation()
  
  return (    
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
            <Route path="/">
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Routes>
    </AnimatePresence>
  )
}

export default LocationProvider
