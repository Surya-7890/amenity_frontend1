import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Index"
import Login from "./Login/Index"
import Admin from "./Admin/Index"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/:name" element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App