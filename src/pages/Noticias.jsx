import { motion } from 'framer-motion';

const Noticias = () => {
  const borderClass = "border-black dark:border-white";
  const accentColor = "text-[#FF4500]";

  // --- MOTOR DE ACTIVOS ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
  const iconsGlob = import.meta.glob('../assets/icons/*.svg', { eager: true, as: 'url' });
  
  const getIcon = (name) => iconsGlob[`../assets/icons/${name}.svg`];

  const NewsPicture = ({ articleNum, alt, className }) => {
    const base = `../assets/images/news-article-${articleNum}`;
    return (
      <picture>
        <source media="(min-width: 1536px)" srcSet={`${imagesGlob[`${base}-xlarge-1x.jpg`]} 1x, ${imagesGlob[`${base}-xlarge-2x.jpg`]} 2x`} />
        <source media="(min-width: 1024px)" srcSet={`${imagesGlob[`${base}-large-1x.jpg`]} 1x, ${imagesGlob[`${base}-large-2x.jpg`]} 2x`} />
        <source media="(min-width: 640px)" srcSet={`${imagesGlob[`${base}-medium-1x.jpg`]} 1x, ${imagesGlob[`${base}-medium-2x.jpg`]} 2x`} />
        <source srcSet={`${imagesGlob[`${base}-small-1x.jpg`]} 1x, ${imagesGlob[`${base}-small-2x.jpg`]} 2x`} />
        <img src={imagesGlob[`${base}-large-1x.jpg`]} alt={alt} className={className} loading="lazy" />
      </picture>
    );
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="px-2 md:px-3 bg-white dark:bg-black transition-colors duration-300">
      <div className={`w-full border-x border-b border-[1px] ${borderClass} overflow-hidden`}>
        
        {/* 1. SECCIÓN SUPERIOR */}
        <section className={`p-8 md:p-16 border-b-[1px] ${borderClass} bg-[#F9F9F9] dark:bg-neutral-900/30`}>
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12 text-black dark:text-white leading-none text-center">
            JOURNAL<span className={accentColor}>.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-2 aspect-video overflow-hidden border border-black dark:border-white bg-black">
              <NewsPicture articleNum="3" alt="Estrategia Digital" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </motion.div>
            
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 border border-black dark:border-white text-[10px] font-black uppercase text-black dark:text-white">Estrategia</span>
                <span className="px-3 py-1 border border-black dark:border-white text-[10px] font-black uppercase text-black dark:text-white">I.A.</span>
              </div>
              <h2 className="text-3xl font-black uppercase leading-none mb-6 text-black dark:text-white">EL FUTURO DEL DISEÑO IMPULSADO POR DATOS</h2>
              <p className="text-xs font-light opacity-60 mb-8 text-black dark:text-white leading-relaxed uppercase">
                Analizamos cómo la inteligencia artificial está redefiniendo los flujos de trabajo creativos en las agencias modernas.
              </p>
              <button className="text-xs font-black uppercase tracking-tighter flex items-center gap-2 hover:text-[#FF4500] transition-colors text-black dark:text-white">
                LEER ARTÍCULO <span className="text-lg">→</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. BARRA SEPARADORA */}
        <div className="bg-black dark:bg-white text-white dark:text-black py-2 text-center text-[10px] font-black uppercase tracking-[0.5em]">
          ÚLTIMAS TENDENCIAS
        </div>

        {/* 3. REJILLA SECUNDARIA */}
        <section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-black dark:border-white">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-8 md:p-12 flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-black uppercase text-black dark:text-white">CULTURA AGENCIA</h3>
                <span className="text-[10px] px-2 py-0.5 border border-black dark:border-white w-fit font-bold uppercase text-black dark:text-white">Workshops</span>
              </div>
              <button className="text-[10px] font-black uppercase italic border-b border-black dark:border-white text-black dark:text-white">VER MÁS →</button>
            </div>
            <div className="aspect-video overflow-hidden border border-black dark:border-white bg-black">
              <NewsPicture articleNum="2" alt="Equipo Nexo" className="w-full h-full object-cover grayscale transition-all duration-500" />
            </div >
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="p-8 md:p-12 flex flex-col gap-6">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-black uppercase text-black dark:text-white">SEO AVANZADO</h3>
                <span className="text-[10px] px-2 py-0.5 border border-black dark:border-white w-fit font-bold uppercase text-black dark:text-white">Optimización</span>
              </div>
              <button className="text-[10px] font-black uppercase italic border-b border-black dark:border-white text-black dark:text-white">VER MÁS →</button>
            </div>
            <div className="aspect-video overflow-hidden border border-black dark:border-white bg-black">
              <NewsPicture articleNum="1" alt="SEO Dashboard" className="w-full h-full object-cover grayscale transition-all duration-500" />
            </div>
          </motion.div>
        </section>

        {/* 4. LISTADO CON NÚMEROS TIPOGRÁFICOS */}
        <section className="bg-white dark:bg-black">
          {[
            { tag: "Web", title: "CÓMO OPTIMIZAR EL RENDIMIENTO EN REACT V19", num: "01" },
            { tag: "Mkt", title: "PSICOLOGÍA DEL COLOR EN EL E-COMMERCE MODERNO", num: "02" },
            { tag: "Branding", title: "REDEFINIENDO LA IDENTIDAD VISUAL EN LA ERA DIGITAL", num: "03" },
            { tag: "Code", title: "LIMPIEZA DE CÓDIGO: MEJORES PRÁCTICAS PARA EQUIPOS", num: "04" },
            { tag: "UI/UX", title: "ACCESIBILIDAD WEB: MÁS ALLÁ DE LOS ESTÁNDARES", num: "05" },
            { tag: "Trends", title: "EL IMPACTO DEL NO-CODE EN EL DESARROLLO ACTUAL", num: "06" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ x: 10 }}
              className={`flex items-center justify-between p-6 border-b ${borderClass} cursor-pointer group transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900`}
            >
              <div className="flex items-center gap-6">
                <span className={`text-2xl font-black italic min-w-[40px] ${accentColor}`}>
                  {item.num}
                </span>
                <span className="px-3 py-1 border border-black dark:border-white text-[9px] font-black uppercase opacity-40 group-hover:opacity-100 transition-opacity text-black dark:text-white">{item.tag}</span>
                <span className="text-sm font-black uppercase tracking-tighter text-black dark:text-white">{item.title}</span>
              </div>
              <span className="text-xl font-light opacity-30 group-hover:opacity-100 transition-opacity text-black dark:text-white">→</span>
            </motion.div>
          ))}
        </section>

        {/* 5. PAGINACIÓN */}
        <div className="py-10 flex justify-center items-center gap-6 text-[9px] font-black uppercase opacity-50 tracking-widest border-b border-black dark:border-white text-black dark:text-white">
          <span className="cursor-pointer hover:text-black dark:hover:text-[#FF4500] transition-colors">‹ Anterior</span>
          <span className="cursor-pointer">1</span>
          <span className="w-6 h-6 border border-black dark:border-white flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-black">2</span>
          <span className="cursor-pointer">3</span>
          <span className="cursor-pointer hover:text-black dark:hover:text-[#FF4500] transition-colors">Siguiente ›</span>
        </div>

      </div>
    </main>
  );
};

export default Noticias;