import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import searchIcon from '../../assets/icons/streamline-sharp_magnifying-glass-remix.png';

const Navbar = () => {
  // Volvemos a 1px para que el diseño sea más fino y premium
  const borderWeight = "border-b-[1px] border-r-[1px]"; 
  const cellClass = `flex-1 flex items-center justify-center ${borderWeight} border-black dark:border-white h-full hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer text-[10px] font-bold tracking-widest uppercase text-black dark:text-white`;

  return (
    <div className="w-full z-50 font-sans">
      {/* 1. BARRA DE NAVEGACIÓN (CELDAS) */}
      <nav className="w-full h-16 flex items-center bg-white dark:bg-black">
        
        <Link to="/nosotros" className={cellClass}>Nosotros</Link>
        
        <Link to="/servicios" className={cellClass}>Servicios</Link>
        
        <div className={`flex-[1.5] flex items-center justify-center ${borderWeight} border-black dark:border-white h-full`}>
          <Link to="/">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter uppercase text-black dark:text-white">
              NEXO<span className="text-[#FF4500]">.</span>
            </h1>
          </Link>
        </div>
        
        <Link to="/noticias" className={cellClass}>Noticias</Link>
        
        <div className={`flex-1 flex items-center justify-center gap-2 h-full ${borderWeight} border-black dark:border-white`}>
            <Link to="/contacto" className="text-[10px] font-bold tracking-widest uppercase text-black dark:text-white">
              Contacto
            </Link>
            <div className="scale-75"><ThemeToggle /></div>
        </div>
      </nav>

      {/* 2. BARRA DE BÚSQUEDA (RELLENO NEGRO DENTRO DEL MARCO) */}
      <div className="w-full bg-black flex justify-center py-4 border-b-[1px] border-black dark:border-white">
        <div className="bg-transparent text-white px-8 py-2 rounded-full flex items-center gap-4 border-[1px] border-white">
          <img src={searchIcon} alt="Buscar" className="w-4 h-4 invert brightness-200" />
          
          <input 
            type="text" 
            placeholder="BARRA BÚSQUEDA" 
            className="bg-transparent text-white placeholder-white/50 text-[10px] uppercase w-40 focus:outline-none text-center font-bold tracking-widest" 
          />
          
          <span className="text-white font-bold cursor-pointer hover:text-[#FF4500]">→</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;