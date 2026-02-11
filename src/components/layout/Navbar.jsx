import ThemeToggle from './ThemeToggle';
// import logoNexo from '../../assets/logos/logo-nexo.png'; // <--- DESCOMENTAR CUANDO TENGAS EL LOGO

// IMPORTAMOS TU ICONO DE LUPA (Nombre exacto de tu captura)
import searchIcon from '../../assets/icons/streamline-sharp_magnifying-glass-remix.png';

const Navbar = () => {
  const cellClass = "flex-1 flex items-center justify-center border-r border-black dark:border-white h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black dark:text-white";

  return (
    <div className="w-full z-50 font-sans">
      
      {/* === 1. NAVBAR GRID === */}
      <nav className="w-full h-16 border-b border-black dark:border-white flex items-center bg-white dark:bg-black transition-colors duration-300">
        <a href="#" className={cellClass}>Nosotros</a>
        <a href="#" className={cellClass}>Servicios</a>
        
        {/* LOGO CENTRAL */}
        <div className="flex-[1.5] flex items-center justify-center border-r border-black dark:border-white h-full bg-white dark:bg-black transition-colors duration-300">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-black dark:text-white">
            NEXO.
          </h1>
        </div>
        
        <a href="#" className={cellClass}>Noticias</a>
        
        <div className="flex-1 flex items-center justify-center gap-2 h-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors cursor-pointer border-black dark:border-white">
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-black dark:text-white">Contacto</span>
            <div className="scale-75"><ThemeToggle /></div>
        </div>
      </nav>

      {/* === 2. BANDA NEGRA DE BÚSQUEDA === */}
      <div className="w-full bg-black flex justify-center py-2 border-b border-black dark:border-white transition-colors duration-300">
        
        {/* BARRA PIL (Black Pill) */}
        <div className="bg-transparent text-white px-10 py-3 rounded-full flex items-center gap-4 border border-white shadow-sm hover:bg-white/10 transition-colors cursor-pointer">
          
          {/* ICONO DE LUPA (Invertido a blanco) */}
          <img 
            src={searchIcon} 
            alt="Buscar" 
            className="w-4 h-4 object-contain invert opacity-100" 
          />
          
          <input 
            type="text" 
            placeholder="BARRA BÚSQUEDA" 
            // CAMBIO AQUÍ: 'text-white' y 'placeholder-white' para que sea todo blanco
            className="bg-transparent border-none text-white placeholder-white text-[10px] uppercase tracking-wide w-40 focus:outline-none text-center font-bold"
          />
          <span className="text-xs">→</span>
        </div>
      </div>

    </div>
  );
};

export default Navbar;