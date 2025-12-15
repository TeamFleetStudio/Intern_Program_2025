import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Components/Products';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='header' element={<Header />} />
      <Route path='footer' element={<Footer />} />
      <Route path='products' element={<Products />} />
    </Routes>
  )
}

export default App;