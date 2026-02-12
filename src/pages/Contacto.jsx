import { motion } from 'framer-motion';

const Contacto = () => {
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const accentColor = "text-brand-accent";
  const accentBg = "bg-brand-accent";

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300 font-sans">
      <div className={`w-full border-b border-[1px] ${borderClass} overflow-hidden`}>
        
        {/* 1. CABECERA */}
        <section className={`p-8 md:p-16 border-b-[1px] ${borderClass}`}>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-black dark:text-white leading-none">
              CONTACTO<span className={accentColor}>.</span>
            </h1>
            <p className="max-w-xs text-[10px] md:text-xs font-bold uppercase opacity-60 text-black dark:text-white leading-relaxed">
              Transformamos ideas en experiencias digitales de alto impacto.
            </p>
          </motion.div>
        </section>

        {/* 2. FORMULARIO */}
        <section className={`p-8 md:p-16 border-b-[1px] ${borderClass} bg-bg-secondary-light dark:bg-bg-secondary-dark/20`}>
          <form className="max-w-4xl mx-auto space-y-12">
            {[
              { label: "NOMBRE*", placeholder: "Tu nombre completo", num: "01" },
              { label: "EMAIL*", placeholder: "hola@tuempresa.com", type: "email", num: "02" },
              { label: "PROYECTO", placeholder: "¿En qué podemos ayudarte?", isTextArea: true, num: "03" }
            ].map((field, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={fadeInUp}
                className="flex flex-col md:flex-row md:items-center gap-6 group"
              >
                <div className={`w-12 h-12 flex items-center justify-center border ${borderClass} text-sm font-black shrink-0 transition-all duration-300 group-hover:bg-brand-accent group-hover:text-white group-hover:border-brand-accent text-black dark:text-white relative overflow-hidden`}>
                  <span className="group-hover:-translate-y-10 transition-transform duration-300">{field.num}</span>
                  <span className="absolute translate-y-10 group-hover:translate-y-0 transition-transform duration-300 text-xl">↗</span>
                </div>
                <div className="flex-grow space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white opacity-40">{field.label}</label>
                  {field.isTextArea ? (
                    <textarea placeholder={field.placeholder} rows="1" className="w-full bg-transparent border-b border-border-main-light/20 dark:border-border-main-dark/20 py-2 focus:border-brand-accent outline-none text-black dark:text-white transition-colors" />
                  ) : (
                    <input type={field.type || "text"} placeholder={field.placeholder} className="w-full bg-transparent border-b border-border-main-light/20 dark:border-border-main-dark/20 py-2 focus:border-brand-accent outline-none text-black dark:text-white transition-colors" />
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* BOTÓN CORREGIDO: En dark mode hace hover a blanco, en light mode hace hover a negro */}
            <motion.button 
              whileHover={{ scale: 1.01 }} 
              whileTap={{ scale: 0.99 }}
              className={`w-full py-6 ${accentBg} text-white font-black uppercase tracking-[0.3em] text-xs transition-all duration-300 hover:bg-black dark:hover:bg-white dark:hover:text-black`}
            >
              ENVIAR PROPUESTA
            </motion.button>
          </form>
        </section>

        {/* 3. BARRA SEPARADORA */}
        <div className="bg-black dark:bg-white text-white dark:text-black py-3 px-8 text-left text-[10px] font-black uppercase tracking-[0.5em] flex justify-between items-center border-b ${borderClass}">
          <span>LOCALIZACIÓN Y DATOS</span>
          <span className="text-2xl opacity-80 cursor-default">⚲</span>
        </div>

        {/* 4. REJILLA DE DATOS Y MAPA */}
        <section className="grid grid-cols-1 md:grid-cols-3 w-full border-b ${borderClass} items-stretch bg-bg-primary-light dark:bg-bg-primary-dark">
          
          <div className={`border-b md:border-b-0 md:border-r ${borderClass} flex flex-col`}>
            <div className={`p-8 md:p-12 border-b ${borderClass} flex-grow`}>
              <h3 className="text-[10px] font-black uppercase mb-3 text-brand-accent tracking-widest">OFICINA CENTRAL</h3>
              <p className="text-sm font-bold uppercase text-black dark:text-white leading-tight">CALLE GRAN VÍA 28, MADRID</p>
              <div className="mt-4">
                <h3 className="text-[10px] font-black uppercase mb-1 text-brand-accent tracking-widest">TELÉFONO</h3>
                <p className="text-sm font-bold uppercase text-black dark:text-white">+34 912 345 678</p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-[10px] font-black uppercase mb-3 text-brand-accent tracking-widest">SÍGUENOS</h3>
              <p className="text-sm font-bold uppercase text-black dark:text-white">@NEXO_DIGITAL_AGENCY</p>
            </div>
          </div>

          <div className={`border-b md:border-b-0 md:border-r ${borderClass} flex flex-col`}>
            <div className={`p-8 md:p-12 border-b ${borderClass} flex-grow`}>
              <h3 className="text-[10px] font-black uppercase mb-3 text-brand-accent tracking-widest">EMAIL</h3>
              <p className="text-sm font-bold uppercase text-black dark:text-white">HOLA@NEXO-DIGITAL.COM</p>
              <div className="mt-4">
                <h3 className="text-[10px] font-black uppercase mb-1 text-brand-accent tracking-widest">TALENTO</h3>
                <p className="text-sm font-bold uppercase text-black dark:text-white">TALENTO@NEXO-DIGITAL.COM</p>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-[10px] font-black uppercase mb-3 text-brand-accent tracking-widest">HORARIO ATENCIÓN</h3>
              <p className="text-sm font-bold uppercase text-black dark:text-white">L-V 9H-18H</p>
            </div>
          </div>

          <div className="min-h-[400px] bg-bg-secondary-light dark:bg-bg-secondary-dark overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6169542033!2d-3.705707723438923!3d40.4173365551717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e07662c5b%3A0x63390979b9a67e45!2sGran%20V%C3%ADa%2C%2028%2C%2028013%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
              className="absolute inset-0 w-full h-full grayscale opacity-80"
              style={{ border: 0, filter: 'grayscale(100%) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contacto;