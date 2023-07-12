import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import User from './components/UserProfile/User';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Landingpage from './pages/Landingpage/Landingpage';
import Products from './pages/Products/Combo/Products';
import Men from './pages/Products/Men/Men';
import Women from './pages/Products/Women/Women';
import Children from './pages/Products/Children/Children';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
          <Route path="/combos" element={<Products />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/child" element={<Children />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
