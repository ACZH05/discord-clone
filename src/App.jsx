import { BrowserRouter } from "react-router-dom"
import LocationProvider from "./components/LocationProvider"

export default function App() {
  return (
    <div className="font-whitney" style={{background: "#313338", height: "100vh"}}>
      <BrowserRouter>
        <LocationProvider />
      </BrowserRouter>
    </div>
  )
}
