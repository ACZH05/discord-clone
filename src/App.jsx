import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthPage from "./pages/LoginPage"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index path="/" />
            <Route path="/login" element={<AuthPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
