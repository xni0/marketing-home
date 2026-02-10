const Footer = () => {
  // Definimos los colores para el truco del gap
  const gridLineColor = "bg-black dark:bg-white"; // El color de las líneas (fondo del contenedor)
  const itemBgColor = "bg-[#F5F5F5] dark:bg-black"; // El color de fondo de cada columna
  const textColor = "text-black dark:text-white";
  const borderColor = "border-black dark:border-white";

  return (
    <footer className="font-sans transition-colors duration-300">
      
      {/* === CONTENEDOR GRID (EL TRUCO) === 
          1. grid-cols-3: Tres columnas.
          2. bg-black (gridLineColor): El fondo es negro.
          3. gap-px: Dejamos 1 pixel de hueco entre columnas.
          4. border-t: Borde superior.
          RESULTADO: El negro se ve por el hueco de 1px, creando la línea.
      */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-px border-t ${borderColor} ${gridLineColor}`}>
        
        {/* === COLUMNA 1 === */}
        {/* IMPORTANTE: Cada columna debe tener su propio color de fondo (itemBgColor) para tapar el negro del padre, excepto en el gap */}
        <div className={`${itemBgColor} p-10 flex flex-col justify-between h-full min-h-[250px]`}>
          <div className={`w-24 h-24 border ${borderColor} flex items-center justify-center`}>
             <span className={`text-5xl font-thin ${textColor}`}>✕</span>
          </div>
          <div className={`text-[10px] leading-relaxed ${textColor} font-medium mt-8`}>
             <p>Lorem ipsum dolor</p>
             <p>Lorem ipsum</p>
             <p className="mt-4 opacity-70">@Lorem ipsum dolor, 2025</p>
          </div>
        </div>

        {/* === COLUMNA 2 === */}
        <div className={`${itemBgColor} p-10 flex flex-col h-full min-h-[250px]`}>
          <h4 className={`font-bold text-sm uppercase mb-6 ${textColor}`}>Lorem ipsum dolor, 1234</h4>
          <div className="flex flex-wrap gap-4 mb-8">
            {[1,2,3,4,5].map(i => (
              <div key={i} className={`w-10 h-10 border ${borderColor} flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer`}>
                <span className={`text-xl font-light ${textColor} hover:text-inherit`}>✕</span>
              </div>
            ))}
          </div>
          <p className={`text-xs mt-auto ${textColor} font-semibold`}>Loremipsum@dolor.com</p>
        </div>

        {/* === COLUMNA 3 === */}
        <div className={`${itemBgColor} p-10 flex flex-col h-full min-h-[250px]`}>
           <h4 className={`font-bold text-sm uppercase mb-6 ${textColor}`}>Lorem ipsum dolor</h4>
           <div className={`flex flex-col gap-3 text-[10px] ${textColor} font-medium`}>
              <a href="#" className="hover:underline">Lorem ipsum dolor</a>
              <a href="#" className="hover:underline">Lorem ipsum dolor</a>
              <a href="#" className="hover:underline">Lorem ipsum dolor</a>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;