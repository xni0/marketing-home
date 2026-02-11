import { Link } from 'react-router-dom'; // Importante importar Link
import ThemeToggle from './ThemeToggle';
import searchIcon from '../../assets/icons/streamline-sharp_magnifying-glass-remix.png';

const Navbar = () => {
  // Mantenemos tu clase de diseño para las celdas
  const cellClass = "flex-1 flex items-center justify-center border-r border-black dark:border-white h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black dark:text-white";

  return (
    <div className="w-full z-50 font-sans">
      <nav className="w-full h-16 border-b border-black dark:border-white flex items-center bg-white dark:bg-black">
        
        {/* === ENLACE A NOSOTROS CONECTADO === */}
        <Link to="/nosotros" className={cellClass}>Nosotros</Link>
        
        <Link to="/" className={cellClass}>Servicios</Link>
        
        <div className="flex-[1.5] flex items-center justify-center border-r border-black dark:border-white h-full">
          <Link to="/">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">NEXO.</h1>
          </Link>
        </div>
        
        <Link to="/" className={cellClass}>Noticias</Link>
        
        <div className="flex-1 flex items-center justify-center gap-2 h-full border-black dark:border-white">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Contacto</span>
            <div className="scale-75"><ThemeToggle /></div>
        </div>
      </nav>

      {/* Barra de búsqueda (se mantiene igual) */}
      <div className="w-full bg-black flex justify-center py-2 border-b border-black dark:border-white">
        <div className="bg-transparent text-white px-10 py-3 rounded-full flex items-center gap-4 border border-white">
          <img src={searchIcon} alt="Buscar" className="w-4 h-4 invert" />
          <input type="text" placeholder="BARRA BÚSQUEDA" className="bg-transparent text-white placeholder-white text-[10px] uppercase w-40 focus:outline-none text-center font-bold" />
          <span className="text-xs">→</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;