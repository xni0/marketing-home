import { useState } from 'react';
import { motion } from 'framer-motion'; 
import Card from '../components/ui/Card';

// Imports de video
import heroVideoMp4 from '../assets/videos/Nexo_video_hero.mp4';
import heroVideoWebm from '../assets/videos/Nexo_video_hero.webm';

const Home = () => {
  // Variables de sistema aplicadas sin cambiar el grosor ni el color visual
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const accentBg = "bg-brand-accent";

  // --- LÓGICA DE MODAL E IMÁGENES ---
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
  
  const getModalImage = (baseName, density) => {
    const fileName = `${baseName}-xlarge-${density}x.jpg`;
    for (const path in imagesGlob) {
        if (path.toLowerCase().includes(fileName.toLowerCase())) return imagesGlob[path];
    }
    return null;
  };

  const handleImageClick = (baseName, title, description) => {
    const src1x = getModalImage(baseName, '1');
    const src2x = getModalImage(baseName, '2');
    if (src1x) {
        setSelectedImage({
          src: src1x,
          srcSet: src2x ? `${src1x} 1x, ${src2x} 2x` : undefined,
          title,
          description
        });
        setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  // --- DATOS ---
  const cardsData = [
    { id: 1, title: "Web Design", sub: "Diseño de interfaces", baseImage: "home-design-2" },
    { id: 2, title: "Marketing", sub: "Estrategias digitales", baseImage: "home-marketing-2" },
    { id: 3, title: "Seo", sub: "Optimización motores", baseImage: "home-seo-1" },
    { id: 4, title: "Desarrollo Web", sub: "Código eficiente", baseImage: "home-web" },
  ];

  const logosBase = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
  ];
  const carouselLogos = [...logosBase, ...logosBase, ...logosBase];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="w-full bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300">
      
      {/* 1. HERO SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className={`relative w-full h-[500px] sm:h-[700px] border-b ${borderClass} overflow-hidden`}
      >
        <div className="absolute inset-0 z-0">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover">
             <source src={heroVideoWebm} type="video/webm" />
             <source src={heroVideoMp4} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </motion.section>

      {/* 2. HEADER CARDS - Respetando py-4 y font-bold 2xl original */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="py-4 text-center bg-bg-secondary-light dark:bg-bg-secondary-dark text-black dark:text-white font-bold text-2xl uppercase tracking-tight border-b border-white dark:border-black transition-colors"
      >
          <h2>Servicios Destacados</h2>
      </motion.div>

      {/* 3. GRID CARDS - Manteniendo gap-1 y bg-white/black */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 bg-bg-primary-light dark:bg-bg-primary-dark border-b border-white dark:border-black">
          {cardsData.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
                <Card 
                  title={item.title} 
                  subtitle={item.sub} 
                  baseImageName={item.baseImage}
                  onImageClick={handleImageClick}
                />
            </motion.div>
          ))}
      </section>
      
      {/* 4. VER MÁS PROYECTOS - Respetando text-[10px] y py-2 */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center py-2 text-[10px] font-bold uppercase bg-bg-secondary-light dark:bg-bg-secondary-dark text-black dark:text-white tracking-widest border-b border-black dark:border-white flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
      >
        Ver todos los proyectos <span className="text-lg">👁</span>
      </motion.div>

      {/* 5. DARK/LIGHT SECTION - Respetando text-4xl/5xl y p-12/20 */}
      <section className={`grid grid-cols-1 md:grid-cols-2 w-full border-b ${borderClass} bg-black text-white dark:bg-white dark:text-black transition-colors duration-300`}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`p-12 sm:p-20 border-b md:border-b-0 md:border-r ${borderClass} flex flex-col justify-center`}
          >
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tighter">
              TRANSFORMAMOS IDEAS EN <br /> EXPERIENCIAS DIGITALES
            </h2>
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`block h-1.5 ${accentBg} mt-8`}
            ></motion.span>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="p-12 sm:p-20 flex flex-col justify-center gap-4 text-xl sm:text-2xl font-light"
          >
            <p># Diseño Sostenible</p>
            <p># Innovación Técnica</p>
            <p># Gestión Integral</p>
          </motion.div>
      </section>

      {/* 6. CAROUSEL SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-20 sm:py-28 bg-bg-primary-light dark:bg-bg-primary-dark transition-colors duration-300 overflow-hidden border-b border-black dark:border-white"
      >
            <div className="text-center mb-16 px-4">
                <span className="italic text-lg font-serif border-b border-black dark:border-white pb-1 inline-block text-black dark:text-white transition-colors duration-300">
                    Confían en nosotros las empresas líderes del sector
                </span>
            </div>
            
            <div className="relative w-full flex overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-primary-light dark:from-bg-primary-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-primary-light dark:from-bg-primary-dark to-transparent z-10 pointer-events-none"></div>

                <div className="flex items-center gap-16 animate-scroll whitespace-nowrap min-w-full">
                  {carouselLogos.map((logoSrc, index) => (
                      <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                          <img
                            src={logoSrc}
                            alt="Logo cliente"
                            className="w-full h-full object-contain grayscale dark:invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                          />
                      </div>
                  ))}
                </div>
            </div>
      </motion.section>

      {/* 7. MODAL */}
      {modalOpen && selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full flex flex-col items-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white text-5xl font-thin hover:text-brand-accent transition-colors">✕</button>
            <img 
              src={selectedImage.src} 
              srcSet={selectedImage.srcSet} 
              alt={selectedImage.title} 
              className="max-h-[80vh] w-auto shadow-2xl border border-white/10" 
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-3xl font-bold uppercase tracking-widest">{selectedImage.title}</h3>
              <p className="text-gray-400 mt-2 text-lg font-light">{selectedImage.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default Home;