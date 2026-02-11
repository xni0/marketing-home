import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import searchIcon from '../../assets/icons/streamline-sharp_magnifying-glass-remix.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const borderWeight = "border-b-[1px] border-r-[1px]";
  const cellClass = `flex-1 items-center justify-center ${borderWeight} border-black dark:border-white h-full hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-[10px] font-bold tracking-widest uppercase text-black dark:text-white`;

  return (
    <div className="w-full z-50 font-sans relative">
      {/* 1. BARRA DE NAVEGACIÓN PRINCIPAL */}
      <nav className="w-full h-16 flex items-center bg-white dark:bg-black overflow-hidden">
        
        {/* Lado Izquierdo: Oculto en móvil, visible en md+ */}
        <Link to="/nosotros" className={`hidden md:flex ${cellClass}`}>Nosotros</Link>
        <Link to="/servicios" className={`hidden md:flex ${cellClass}`}>Servicios</Link>
        
        {/* Botón Hamburguesa: Solo visible en móvil */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex-1 flex items-center justify-center h-full ${borderWeight} border-black dark:border-white text-black dark:text-white font-black text-xl`}
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {/* LOGO CENTRAL: Siempre visible, ajusta su ancho */}
        <div className={`flex-[1.5] md:flex-[1.5] flex items-center justify-center ${borderWeight} border-black dark:border-white h-full`}>
          <Link to="/">
            <h1 className="text-2xl md:text-4xl font-black tracking-tighter uppercase text-black dark:text-white">
              NEXO<span className="text-[#FF4500]">.</span>
            </h1>
          </Link>
        </div>
        
        {/* Lado Derecho: Oculto en móvil, visible en md+ */}
        <Link to="/noticias" className={`hidden md:flex ${cellClass}`}>Noticias</Link>
        
        <div className={`flex-1 flex items-center justify-center gap-2 h-full ${borderWeight} border-black dark:border-white`}>
            <Link to="/contacto" className="hidden md:block text-[10px] font-bold tracking-widest uppercase text-black dark:text-white">
              Contacto
            </Link>
            <div className="scale-75"><ThemeToggle /></div>
        </div>
      </nav>

      {/* 2. MENÚ MÓVIL DESPLEGABLE (Aparece solo al hacer clic en hamburguesa) */}
      {isOpen && (
        <div className="md:hidden w-full bg-white dark:bg-black border-b-[1px] border-black dark:border-white flex flex-col">
          <Link to="/nosotros" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border-b border-black dark:border-white text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">Nosotros</Link>
          <Link to="/servicios" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border-b border-black dark:border-white text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">Servicios</Link>
          <Link to="/noticias" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border-b border-black dark:border-white text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">Noticias</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)} className="w-full py-4 text-center border-b border-black dark:border-white text-[10px] font-bold uppercase tracking-widest text-black dark:text-white">Contacto</Link>
        </div>
      )}

      {/* 3. BARRA DE BÚSQUEDA (Mantenemos tu diseño intacto) */}
      <div className="w-full bg-black flex justify-center py-4 border-b-[1px] border-black dark:border-white">
        <div className="bg-transparent text-white px-4 md:px-8 py-2 rounded-full flex items-center gap-4 border-[1px] border-white max-w-[90%] md:max-w-none">
          <img src={searchIcon} alt="Buscar" className="w-4 h-4 invert brightness-200" />
          
          <input 
            type="text" 
            placeholder="BARRA BÚSQUEDA" 
            className="bg-transparent text-white placeholder-white/50 text-[10px] uppercase w-32 md:w-40 focus:outline-none text-center font-bold tracking-widest" 
          />
          
          <span className="text-white font-bold cursor-pointer hover:text-[#FF4500]">→</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;