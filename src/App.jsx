import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import ProductCont from './components/Products/ProductCont';
import User from './components/UserProfile/User';
import Admin from './pages/Admin/Admin';
import AllProducts from './pages/Admin/getAllProducts';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Cart from './pages/Cart/Cart';
import Landingpage from './pages/Landingpage/Landingpage';
import NotFound from './pages/NotFound/NotFound';
import Children from './pages/Products/Children/Children';
import Men from './pages/Products/Men/Men';
import Women from './pages/Products/Women/Women';
import Wishlist from './pages/Wish/Wish';
import AdminCont from './pages/Admin/AdminSideBar';
import CreateProductForm from './pages/Admin/createProducts';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<NotFound />} />
          <Route path="/user" element={<User />} >
            {/* <Route path="orders" element={<Orders />} /> */}
            {/* <Route path="wish" element={Wishlist />} />  */}
            {/* <Route path="info" element={Info />} />  */}
            {/* <Route path="logout" element={Logout />} />  */}
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path='/admin' element={<AdminCont />} >
            <Route path='allproducts' element={<AllProducts />} />
            <Route path='createproducts' element={<CreateProductForm />} />
          </Route>
          <Route path="/products" element={<ProductCont />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="child" element={<Children />} />
          </Route>
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  )
}

export default App
