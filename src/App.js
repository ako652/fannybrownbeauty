import './App.css';

import LandingPage from "./components/LandingPage"
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <div className="App ">
      <Navbar />

      

    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/home" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
    </Routes>
      
    </div>
  );
}

export default App;
