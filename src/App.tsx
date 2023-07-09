import './App.css'
import Home from "./components/home";
import {Routes, Route} from 'react-router-dom'
import LoginPage from "./components/auth/login";
import PrivateRouter from "./components/utils/router/privateRouter";

function App() {
  return (
    <>
        <Routes>
            <Route element={<PrivateRouter />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
        </Routes>
    </>
  )
}

export default App
