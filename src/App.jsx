import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Landingpage from './pages/Landingpage/Landingpage';
import User from './components/UserProfile/User';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
