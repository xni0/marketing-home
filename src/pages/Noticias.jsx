import { motion } from 'framer-motion';

const Noticias = () => {
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const accentColor = "text-brand-accent";

  // --- MOTOR DE ACTIVOS ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
  
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

  // Variantes personalizadas
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
  };

  const imageReveal = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)" },
    visible: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1, ease: "easeInOut" } }
  };

  return (
    <main className="px-2 md:px-3 bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300">
      <div className={`w-full border-x border-b border-[1px] ${borderClass} overflow-hidden`}>
        
        {/* 1. SECCIÓN SUPERIOR - JOURNAL */}
        <section className={`p-8 md:p-16 border-b-[1px] ${borderClass} bg-bg-secondary-light dark:bg-bg-secondary-dark/30`}>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-h1 font-black uppercase tracking-tighter mb-12 text-black dark:text-white leading-none text-center"
          >
            JOURNAL<span className={accentColor}>.</span>
          </motion.h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageReveal}
              className="lg:col-span-2 aspect-video overflow-hidden border border-border-main-light dark:border-border-main-dark bg-black"
            >
              <NewsPicture articleNum="3" alt="Estrategia Digital" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000" />
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="flex flex-col justify-center">
              <div className="flex gap-2 mb-4">
                {/* ETIQUETAS ESTÁTICAS - Sin hover de color */}
                <span className="px-3 py-1 border border-border-main-light dark:border-border-main-dark text-label-bold uppercase text-black dark:text-white transition-colors">Estrategia</span>
                <span className="px-3 py-1 border border-border-main-light dark:border-border-main-dark text-label-bold uppercase text-black dark:text-white transition-colors">I.A.</span>
              </div>
              <h2 className="text-3xl md:text-h3 font-black uppercase leading-none mb-6 text-black dark:text-white">EL FUTURO DEL DISEÑO IMPULSADO POR DATOS</h2>
              <p className="text-body-default font-light opacity-60 mb-8 text-black dark:text-white leading-relaxed uppercase">
                Analizamos cómo la inteligencia artificial está redefiniendo los flujos de trabajo creativos en las agencias modernas.
              </p>
              <button className="group text-label-bold uppercase tracking-tighter flex items-center gap-2 text-black dark:text-white">
                LEER ARTÍCULO <span className="text-lg group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* 2. BARRA SEPARADORA - AHORA ESTÁTICA */}
        <div className="bg-black dark:bg-white text-white dark:text-black py-2 text-center text-label-bold uppercase tracking-[0.5em] overflow-hidden">
          ÚLTIMAS TENDENCIAS
        </div>

        {/* 3. REJILLA SECUNDARIA */}
        <section className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-border-main-light dark:border-border-main-dark">
          {[
            { title: "CULTURA AGENCIA", tag: "Workshops", art: "2" },
            { title: "SEO AVANZADO", tag: "Optimización", art: "1" }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-12 flex flex-col gap-6 bg-bg-primary-light dark:bg-bg-primary-dark group"
            >
              <div className="flex justify-between items-end">
                <div className="flex flex-col gap-2">
                  <h3 className="text-h3 font-black uppercase text-black dark:text-white group-hover:text-brand-accent transition-colors">{item.title}</h3>
                  <span className="text-label-bold px-2 py-0.5 border border-border-main-light dark:border-border-main-dark w-fit font-bold uppercase text-black dark:text-white">{item.tag}</span>
                </div>
                <button className="text-label-bold font-black uppercase italic border-b border-border-main-light dark:border-border-main-dark text-black dark:text-white overflow-hidden">
                  <motion.span className="inline-block" whileHover={{ y: [-2, 0] }}>VER MÁS →</motion.span>
                </button>
              </div>
              <div className="aspect-video overflow-hidden border border-border-main-light dark:border-border-main-dark bg-black">
                <NewsPicture articleNum={item.art} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              </div>
            </motion.div>
          ))}
        </section>

        {/* 4. LISTADO CON INTERACCIÓN MAGNÉTICA */}
        <section className="bg-bg-primary-light dark:bg-bg-primary-dark">
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ backgroundColor: "rgba(255, 69, 0, 0.05)" }}
              className={`flex items-center justify-between p-6 border-b ${borderClass} cursor-pointer group transition-colors`}
            >
              <div className="flex items-center gap-6">
                <motion.span 
                  whileHover={{ rotate: -5, scale: 1.2 }}
                  className={`text-h3 font-black italic min-w-[40px] ${accentColor}`}
                >
                  {item.num}
                </motion.span>
                <span className="px-3 py-1 border border-border-main-light dark:border-border-main-dark text-[9px] font-black uppercase opacity-40 group-hover:opacity-100 group-hover:border-brand-accent transition-all text-black dark:text-white">{item.tag}</span>
                <span className="text-body-default font-black uppercase tracking-tighter text-black dark:text-white group-hover:translate-x-2 transition-transform duration-300">{item.title}</span>
              </div>
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-h3 font-light opacity-30 group-hover:opacity-100 group-hover:text-brand-accent transition-all text-black dark:text-white"
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </section>

        {/* 5. PAGINACIÓN */}
        <div className="py-10 flex justify-center items-center gap-6 text-label-bold font-black uppercase opacity-50 tracking-widest border-b border-border-main-light dark:border-border-main-dark text-black dark:text-white">
          <motion.span whileHover={{ x: -5 }} className="cursor-pointer hover:text-brand-accent transition-colors">‹ Anterior</motion.span>
          <span className="cursor-pointer">1</span>
          <motion.span whileHover={{ scale: 1.2 }} className="w-8 h-8 border border-border-main-light dark:border-border-main-dark flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black font-black">2</motion.span>
          <span className="cursor-pointer">3</span>
          <motion.span whileHover={{ x: 5 }} className="cursor-pointer hover:text-brand-accent transition-colors">Siguiente ›</motion.span>
        </div>

      </div>
    </main>
  );
};

export default Noticias;