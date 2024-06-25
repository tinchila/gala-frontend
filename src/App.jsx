import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSingUp from './pages/LoginSingUp';
import Footer from './components/Footer/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} /> 
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>} />
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSingUp/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
