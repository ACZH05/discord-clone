import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

export default function App() {
  return (
    <div style={{background: "#313338", height: "100vh"}}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
