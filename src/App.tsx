import './App.css'
import Home from "./components/home";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "./components/auth/login";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </>
  )
}

export default App
