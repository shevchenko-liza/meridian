import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';

import { Header } from './components/header';
import { Home } from './components/header/home';
import { AboutUs } from './pages/About Us';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
