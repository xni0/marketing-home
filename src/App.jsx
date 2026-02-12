import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Noticias from './pages/Noticias';
import Contacto from './pages/Contacto'; 
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
     
      <div className="min-h-screen bg-black dark:bg-white p-2 md:p-4 transition-colors duration-500">
        
        
        <div className="min-h-[calc(100vh-2rem)] bg-white dark:bg-black rounded-[40px] overflow-hidden flex flex-col shadow-none border-none">
          
          <Navbar />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/noticias" element={<Noticias />} />
              <Route path="/contacto" element={<Contacto />} /> 
            </Routes>
          </div>
          
          <Footer />
          
        </div>
      </div>
    </Router>
  );
}

export default App;