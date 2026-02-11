const Servicios = () => {
  const borderClass = "border-black dark:border-white";
  const accentColor = "text-[#FF4500]";
  const accentBorder = "border-[#FF4500]";

  // --- LÓGICA DE ACTIVOS (IMÁGENES E ICONOS) ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
  const iconsGlob = import.meta.glob('../assets/icons/*.{png,svg}', { eager: true, as: 'url' });
  
  const getIcon = (name) => iconsGlob[`../assets/icons/${name}.png`] || iconsGlob[`../assets/icons/${name}.svg`];

  const serviciosList = [
    { id: "SEO", title: "SEO", name: "seo", icon: "ri_seo-line" },
    { id: "MKT", title: "MARKETING", name: "marketing", icon: "tabler_graph-filled" },
    { id: "WEB", title: "WEB", name: "web", icon: "fluent_window-dev-edit-16-filled" },
    { id: "DSG", title: "DISEÑO WEB", name: "web-design", icon: "fluent-mdl2_design" },
  ];

  return (
    <main className="px-2 md:px-3 bg-white dark:bg-black transition-colors duration-300">
      <div className={`w-full border-x border-b border-[1px] ${borderClass} overflow-hidden`}>
        
        {/* 1. CABECERA CON DETALLE NARANJA */}
        <section className={`p-8 md:p-16 border-b-[1px] ${borderClass}`}>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black dark:text-white leading-none">
            Servicios <span className={accentColor}>Disponibles</span>
          </h1>
          <p className="max-w-xl text-sm md:text-base font-light opacity-70 text-black dark:text-white uppercase tracking-widest">
            Soluciones digitales de alto rendimiento.
          </p>
        </section>

        {/* 2. REJILLA OPTIMIZADA (ETIQUETA PICTURE) */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {serviciosList.map((s, idx) => (
            <div key={s.id} className={`flex flex-col border-b-[1px] ${borderClass} ${idx % 2 === 0 ? 'md:border-r-[1px]' : ''}`}>
              <div className={`h-64 md:h-80 overflow-hidden border-b-[1px] ${borderClass} relative`}>
                <picture>
                  <source 
                    media="(min-width: 1024px)" 
                    srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-large-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-large-2x.jpg`]} 2x`} 
                  />
                  <source 
                    media="(min-width: 640px)" 
                    srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-medium-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-medium-2x.jpg`]} 2x`} 
                  />
                  <source 
                    srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-small-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-small-2x.jpg`]} 2x`} 
                  />
                  <img 
                    src={imagesGlob[`../assets/images/service-offerings-${s.name}.jpg`]} 
                    alt={s.title} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale transition-all duration-700 ease-in-out" 
                  />
                </picture>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-grow bg-white dark:bg-black">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-xl font-black uppercase tracking-tight text-black dark:text-white">{s.title}</h3>
                    <img 
                      src={getIcon(s.icon)} 
                      alt="" 
                      className="w-6 h-6 object-contain dark:invert" 
                      style={{ imageRendering: '-webkit-optimize-contrast' }} 
                    />
                  </div>
                  <p className="text-xs md:text-sm font-light opacity-60 text-black dark:text-white leading-relaxed mb-6">
                    Creamos estrategias personalizadas para potenciar tu presencia digital y alcanzar tus objetivos de negocio.
                  </p>
                </div>
                <button className={`text-[10px] font-black uppercase tracking-widest ${accentColor} flex items-center gap-2 hover:translate-x-2 transition-transform`}>
                  SABER MÁS <span className="text-base">→</span>
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* 3. MÉTRICAS CON DETALLE NARANJA */}
        <section className="bg-white dark:bg-black py-20 px-8 md:px-20 border-t-[1px] border-black dark:border-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8 mb-20">
            {[
              { num: "+50", txt: "Empresas confían", icon: 'mdi_company' },
              { num: "100%", txt: "Satisfacción garantizada", icon: 'iconamoon_like' },
              { num: "24/7", txt: "Soporte continuo", icon: 'material-symbols_support-agent' }
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-right leading-[0.85]">
                  <span className={`block text-4xl md:text-5xl font-black italic tracking-tighter ${accentColor}`}>
                    {m.num}
                  </span>
                  <span className="block text-3xl md:text-4xl font-black italic tracking-tighter text-black dark:text-white">
                    {m.txt}
                  </span>
                </div>
                <img 
                  src={getIcon(m.icon)} 
                  alt="" 
                  className="w-10 h-10 object-contain dark:invert opacity-80" 
                  style={{ imageRendering: 'crisp-edges' }} 
                />
              </div>
            ))}
          </div>

          {/* LÍNEA DIVISORIA 2PX Y CIERRE */}
          <div className="flex flex-col items-center">
            <div className={`w-full max-w-lg border-t-2 ${borderClass} opacity-20 mb-8`}></div>
            <h2 className="text-lg font-black uppercase tracking-[0.4em] mb-8 text-black dark:text-white italic">
              CONECTAMOS IDEAS
            </h2>
            <button className={`px-8 py-3 border-[1px] ${accentBorder} ${accentColor} text-[10px] font-black uppercase tracking-widest hover:bg-[#FF4500] hover:text-white transition-all duration-300`}>
              EMPEZAR PROYECTO
            </button>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Servicios;