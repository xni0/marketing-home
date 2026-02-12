import { motion } from 'framer-motion';
import heroVideoWebm from '../assets/videos/home-hero-video-2.webm'; 
import heroVideoMp4 from '../assets/videos/home-hero-video-2.mp4';

const About = () => {
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const accentColor = "text-brand-accent";

  // --- LÓGICA DE IMÁGENES ACTUALIZADA (Vite 5+ Syntax) ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { 
    eager: true, 
    query: '?url', 
    import: 'default' 
  });

  const getOptimizedSrc = (baseName, size = 'large') => {
    const path1x = `../assets/images/${baseName}-${size}-1x.jpg`;
    const path2x = `../assets/images/${baseName}-${size}-2x.jpg`;
    const src1x = imagesGlob[path1x];
    const src2x = imagesGlob[path2x];
    return { src: src1x, srcSet: src2x ? `${src1x} 1x, ${src2x} 2x` : undefined };
  };

  const heroImg = getOptimizedSrc('about-us-hero-2', 'xlarge');
  const team = [
    { id: 1, name: "ANA MARTÍNEZ", role: "DIRECTORA CREATIVA", ...getOptimizedSrc('about-us-employee-1', 'large') },
    { id: 2, name: "CARLOS RUIZ", role: "HEAD OF SEO", ...getOptimizedSrc('about-us-employee-2', 'large') },
    { id: 3, name: "ELENA SOLER", role: "SENIOR DEVELOPER", ...getOptimizedSrc('about-us-employee-3', 'large') },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="px-2 md:px-3 bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300">
      <div className={`w-full border-x border-b border-[1px] ${borderClass} rounded-none overflow-hidden`}>
        
        {/* 1. SECCIÓN HERO */}
        <section className={`relative flex flex-col md:flex-row border-b-[1px] ${borderClass} min-h-[500px] overflow-hidden bg-bg-primary-light dark:bg-bg-primary-dark`}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative z-20 flex-1 px-8 py-20 md:px-16 md:py-32 flex flex-col justify-center bg-bg-primary-light/40 dark:bg-bg-primary-dark/40 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none"
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-8 text-black dark:text-white">
              SOBRE <br /> 
              <span className={`${accentColor} inline-block hover:skew-x-[-6deg] transition-transform duration-300 cursor-default`}>
                NOSOTROS
              </span>
            </h1>
            <p className="text-base md:text-xl font-light max-w-sm border-l-2 border-brand-accent pl-6 text-black dark:text-white opacity-90">
              Diseñamos experiencias digitales con un enfoque minimalista y funcional.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 top-0 w-full md:w-[65%] h-full overflow-hidden z-10"
          >
            <img 
              src={heroImg.src} 
              srcSet={heroImg.srcSet} 
              alt="Nexo Office" 
              className="w-full h-full object-cover grayscale brightness-100 dark:brightness-75" 
              loading="eager" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg-primary-light via-bg-primary-light/10 to-transparent dark:from-bg-primary-dark dark:via-bg-primary-dark/30 dark:to-transparent hidden md:block"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary-light/60 via-transparent to-transparent dark:from-bg-primary-dark/80 md:hidden"></div>
          </motion.div>
        </section>

        {/* 2. SECCIÓN EQUIPO */}
        <section className={`py-16 md:py-24 px-6 md:px-12 border-b-[1px] ${borderClass}`}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter italic inline-block relative group cursor-default text-black dark:text-white">
              Nuestro Equipo
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {team.map((member, i) => (
              <motion.div 
                key={member.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center w-full group"
              >
                <div className={`w-full aspect-square border-[1px] ${borderClass} p-3 bg-bg-secondary-light dark:bg-bg-secondary-dark flex items-center justify-center transition-colors`}>
                  <div className={`relative w-full h-full border-[1px] ${borderClass} rounded-none overflow-hidden bg-black`}>
                    <img src={member.src} srcSet={member.srcSet} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale brightness-100 group-hover:brightness-125 transition-all duration-500 ease-in-out" loading="lazy" />
                  </div>
                </div>
                <div className="mt-6 text-center w-full">
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:tracking-[0.15em] transition-all duration-500 text-black dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SECCIÓN FILOSOFÍA */}
        <section className={`grid grid-cols-1 md:grid-cols-2 border-b-[1px] ${borderClass} bg-bg-primary-light dark:bg-bg-primary-dark relative transition-colors duration-300`}>
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: `linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)`, backgroundSize: '30px 30px' }}></div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`px-8 py-12 md:px-12 md:py-16 border-b md:border-b-0 md:border-r-[1px] ${borderClass} flex flex-col justify-center`}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight tracking-tighter text-black dark:text-white">
              NUESTRA <br /> <span className="text-brand-accent">FILOSOFÍA</span>
            </h2>
          </motion.div>
          
          <div className="px-8 py-6 md:px-12 md:py-8 flex flex-col justify-center">
            {[
              { num: "01", title: "Calidad Técnica", desc: "Código robusto y optimizado." },
              { num: "02", title: "Minimalismo", desc: "Destacar solo lo esencial." },
              { num: "03", title: "Innovación", desc: "Adaptación constante a la vanguardia." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group flex items-center gap-6 py-5 ${idx !== 2 ? `border-b-[1px] ${borderClass}` : ''} cursor-default`}
              >
                <span className="text-3xl font-black italic opacity-10 dark:opacity-20 group-hover:opacity-100 group-hover:text-brand-accent transition-all duration-500 min-w-[50px] text-black dark:text-white">
                  {item.num}
                </span>
                <div className="group-hover:translate-x-2 transition-transform duration-500">
                  <h3 className="text-base font-black uppercase tracking-tight text-black dark:text-white">{item.title}</h3>
                  <p className="text-[10px] font-light opacity-50 dark:opacity-70 uppercase tracking-widest text-black dark:text-white">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. SECCIÓN CTA FINAL */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-black text-white p-12 md:p-24 text-center">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" poster={heroImg.src} >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-[2]"
          >
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-10 leading-none">¿CONECTAMOS <br/> TU MARCA?</h2>
            <button className="bg-brand-accent text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
              ESCRÍBENOS
            </button>
          </motion.div>
        </section>

      </div>
    </main>
  );
};

export default About;