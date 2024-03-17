
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Shop } from './Components/Pages/Shop';
import { ShopCategory } from './Components/Pages/ShopCategory';
import { Product } from './Components/Pages/Product';
import { Cart } from './Components/Pages/Cart';
import { LoginSignup } from './Components/Pages/LoginSignup';
import { Footer } from './Components/Footer/Footer';

import menBanner from './Assets/banner_mens.png';
import womenBanner from './Assets/banner_women.png';
import kidBanner from './Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={menBanner} category="men" />} />
      <Route path='/womens' element={<ShopCategory banner={womenBanner} category="women" />} />
      <Route path='/kids' element={<ShopCategory banner={kidBanner} category="kid" />} />
      <Route path='/product' element={<Product/>} >
        <Route path=':productId' element={<Product
        />} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<LoginSignup/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
