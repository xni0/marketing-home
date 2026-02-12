import { motion } from 'framer-motion';

const Servicios = () => {
  // Aplicamos tokens de borde y acento del sistema
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const accentColor = "text-brand-accent";
  const accentBorder = "border-brand-accent";

  // --- LÓGICA DE ACTIVOS (Sin cambios) ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
  const iconsGlob = import.meta.glob('../assets/icons/*.svg', { eager: true, as: 'url' });
  
  const getIcon = (name) => iconsGlob[`../assets/icons/${name}.svg`];

  const serviciosList = [
    { id: "SEO", title: "SEO", name: "seo", icon: "ri_seo-line" },
    { id: "MKT", title: "MARKETING", name: "marketing", icon: "tabler_graph-filled" },
    { id: "WEB", title: "WEB", name: "web", icon: "fluent_window-dev-edit-16-filled" },
    { id: "DSG", title: "DISEÑO WEB", name: "web-design", icon: "fluent-mdl2_design" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="px-2 md:px-3 bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300">
      <div className={`w-full border-x border-b border-[1px] ${borderClass} overflow-hidden`}>
        
        {/* 1. CABECERA - Corregido text-black para modo light */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className={`p-8 md:p-16 border-b-[1px] ${borderClass}`}
        >
          <h1 className="text-4xl md:text-h2 font-black uppercase tracking-tighter mb-4 text-black dark:text-white leading-none">
            Servicios <span className={accentColor}>Disponibles</span>
          </h1>
          <p className="max-w-xl text-label-bold font-light opacity-70 text-black dark:text-white uppercase tracking-widest">
            Soluciones digitales de alto rendimiento.
          </p>
        </motion.section>

        {/* 2. REJILLA OPTIMIZADA */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          {serviciosList.map((s, idx) => (
            <motion.div 
              key={s.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className={`flex flex-col border-b-[1px] ${borderClass} ${idx % 2 === 0 ? 'md:border-r-[1px]' : ''}`}
            >
              <div className={`h-64 md:h-80 overflow-hidden border-b-[1px] ${borderClass} relative group`}>
                <picture>
                  <source media="(min-width: 1024px)" srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-large-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-large-2x.jpg`]} 2x`} />
                  <source media="(min-width: 640px)" srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-medium-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-medium-2x.jpg`]} 2x`} />
                  <source srcSet={`${imagesGlob[`../assets/images/service-offerings-${s.name}-small-1x.jpg`]} 1x, ${imagesGlob[`../assets/images/service-offerings-${s.name}-small-2x.jpg`]} 2x`} />
                  <img 
                    src={imagesGlob[`../assets/images/service-offerings-${s.name}.jpg`]} 
                    alt={s.title} 
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                  />
                </picture>
              </div>
              
              <div className="p-8 flex flex-col justify-between flex-grow bg-bg-primary-light dark:bg-bg-primary-dark transition-colors">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Texto corregido a negro/blanco puro */}
                    <h3 className="text-h3 font-black uppercase tracking-tight text-black dark:text-white">{s.title}</h3>
                    <img src={getIcon(s.icon)} alt="" className="w-6 h-6 object-contain dark:invert" />
                  </div>
                  <p className="text-body-default font-light opacity-60 text-black dark:text-white leading-relaxed mb-6">
                    Creamos estrategias personalizadas para potenciar tu presencia digital y alcanzar tus objetivos de negocio.
                  </p>
                </div>
                <button className={`text-label-bold uppercase tracking-widest ${accentColor} flex items-center gap-2 hover:translate-x-2 transition-transform`}>
                  SABER MÁS <span className="text-base">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </section>

        {/* 3. MÉTRICAS - Inversión de color corregida */}
        <section className="bg-bg-primary-light dark:bg-bg-primary-dark py-20 px-8 md:px-20 border-t-[1px] ${borderClass}">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-around gap-12 md:gap-8 mb-20">
            {[
              { num: "+50", txt: "Empresas confían", icon: 'mdi_company' },
              { num: "100%", txt: "Satisfacción garantizada", icon: 'iconamoon_like' },
              { num: "24/7", txt: "Soporte continuo", icon: 'material-symbols_support-agent' }
            ].map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="text-right leading-[0.85]">
                  <span className={`block text-4xl md:text-5xl font-black italic tracking-tighter ${accentColor}`}>{m.num}</span>
                  <span className="block text-3xl md:text-4xl font-black italic tracking-tighter text-black dark:text-white">{m.txt}</span>
                </div>
                <img src={getIcon(m.icon)} alt="" className="w-10 h-10 object-contain dark:invert opacity-80" />
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <div className={`w-full max-w-lg border-t-2 ${borderClass} opacity-20 mb-8`}></div>
            <h2 className="text-body-lead font-black uppercase tracking-[0.4em] mb-8 text-black dark:text-white italic">CONECTAMOS IDEAS</h2>
            <button className={`px-8 py-3 border-[1px] ${accentBorder} ${accentColor} text-label-bold font-black uppercase tracking-widest hover:bg-brand-accent hover:text-white transition-all duration-300`}>
              EMPEZAR PROYECTO
            </button>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default Servicios;