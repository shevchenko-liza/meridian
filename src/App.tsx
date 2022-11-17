import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Header } from './components/header';
import { Home } from './components/header/home';


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
