import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';

import { Header } from './components/header';
import { Home } from './components/header/home';
import { AboutUs } from './pages/About Us';
import { Cart } from './pages/Cart';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { SofaPage } from './pages/SofaPage';
import { ProductSofa } from './pages/SofaPage/ProductSofa';
import { catalogSlice } from './store/slices/catalog';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('/assets/catalog.js')
      .then(response => response.json())
      .then(data => dispatch(catalogSlice.actions.setList(data)))
  }, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route>
          <Route path="/collection" element={<Products />} />
          <Route path="/collection/sofa" element={<SofaPage />} />
          <Route path="sofa/:id" element={<ProductSofa />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/home/cart" element={<Cart />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
