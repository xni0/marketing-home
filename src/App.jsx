import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black dark:bg-white p-3 md:p-5"> 
        {/* El p-3/p-5 genera el margen exterior que ves en el prototipo */}
        
        <div className="relative min-h-[calc(100vh-24px)] md:min-h-[calc(100vh-40px)] 
                        bg-white dark:bg-black 
                        border border-black dark:border-white 
                        rounded-[30px] md:rounded-[50px] 
                        overflow-hidden flex flex-col">
          {/* Este contenedor interno tiene el borde negro y las esquinas redondeadas */}
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;