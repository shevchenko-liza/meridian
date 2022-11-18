import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';

import { Header } from './components/header';
import { Home } from './components/header/home';
import { AboutUs } from './pages/About Us';
import { Contact } from './pages/Contact';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
