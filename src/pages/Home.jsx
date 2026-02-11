import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';

// === IMPORTS DE VIDEO ===
import heroVideoMp4 from '../assets/videos/Nexo_video_hero.mp4';
import heroVideoWebm from '../assets/videos/Nexo_video_hero.webm';

const Home = () => {
  const borderClass = "border-black dark:border-white";
  const divideClass = "divide-black dark:divide-white";

  // Estado Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper imágenes
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

  // Datos Cards
  const cardsData = [
    { id: 1, title: "Web Design", sub: "Diseño de interfaces", baseImage: "home-design-2" },
    { id: 2, title: "Marketing", sub: "Estrategias digitales", baseImage: "home-marketing-2" },
    { id: 3, title: "Seo", sub: "Optimización motores", baseImage: "home-seo-1" },
    { id: 4, title: "Desarrollo Web", sub: "Código eficiente", baseImage: "home-web" },
  ];

  return (
    <div className="min-h-full font-sans bg-white dark:bg-black text-black dark:text-white relative">
      <Navbar />

      <main className="w-full">
        
        {/* === HERO SECTION VIDEO ONLY === */}
        {/* Usamos h-[500px] y sm:h-[700px] para darle altura fija ya que no hay texto que lo empuje */}
        <section className={`relative w-full h-[500px] sm:h-[700px] border-b ${borderClass} overflow-hidden`}>
          
          {/* VIDEO DE FONDO */}
          <div className="absolute inset-0 z-0">
             <video 
               autoPlay 
               loop 
               muted 
               playsInline 
               className="w-full h-full object-cover"
             >
               <source src={heroVideoWebm} type="video/webm" />
               <source src={heroVideoMp4} type="video/mp4" />
             </video>
             
             {/* Overlay suave (bg-black/30) solo para matizar un poco el video, 
                 puedes quitar esta línea si quieres el video 100% original */}
             <div className="absolute inset-0 bg-black/30"></div>
          </div>

          {/* SIN CONTENIDO (Texto y botón eliminados) */}
          
        </section>

        {/* HEADER CARDS */}
        <div className="py-4 text-center bg-[#EFEFEF] dark:bg-gray-800 text-black dark:text-white font-bold text-2xl uppercase tracking-tight border-b border-white">
             <h2>Servicios Destacados</h2>
        </div>

        {/* GRID CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 bg-white border-b border-white">
            {cardsData.map((item) => (
              <div key={item.id} className="h-full">
                  <Card 
                    title={item.title} 
                    subtitle={item.sub} 
                    baseImageName={item.baseImage}
                    onImageClick={handleImageClick}
                  />
              </div>
            ))}
        </section>
        
        {/* FOOTER CARDS */}
        <div className="text-center py-2 text-[10px] font-bold uppercase bg-[#EFEFEF] dark:bg-gray-800 text-black dark:text-white tracking-widest border-b border-black">
          Ver todos los proyectos 👁
        </div>

        {/* DARK SECTION */}
        <section className={`grid grid-cols-1 md:grid-cols-2 w-full border-b ${borderClass} bg-black text-white dark:bg-white dark:text-black transition-colors duration-300`}>
            <div className="p-12 sm:p-20 border-b md:border-b-0 md:border-r border-white dark:border-black flex flex-col justify-center">
              <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.85]">LOREM IPSUM <br /> DOLOR SIT</h2>
              <span className="block h-1.5 w-24 bg-white dark:bg-black mt-8"></span>
            </div>
            <div className="p-12 sm:p-20 flex flex-col justify-center gap-4 text-xl sm:text-2xl font-light">
              <p># Diseño Sostenible</p>
              <p># Innovación Técnica</p>
              <p># Gestión Integral</p>
            </div>
        </section>

        {/* LOGO GRID */}
        <section className="py-16 sm:py-24 bg-white dark:bg-black transition-colors duration-300">
             <div className="text-center mb-16 px-4">
                 <span className="italic text-lg font-serif border-b border-black dark:border-white pb-1 inline-block">
                     Confían en nosotros las empresas líderes del sector
                 </span>
             </div>
             <div className={`border-t border-b ${borderClass} grid grid-cols-3 md:grid-cols-6 ${divideClass} divide-x`}>
                {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="aspect-square flex items-center justify-center">
                        <div className="w-16 h-16 border border-black dark:border-white flex items-center justify-center text-4xl font-thin hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-crosshair">
                          ✕
                        </div>
                    </div>
                ))}
             </div>
        </section>

      </main>
      <Footer />

      {/* MODAL */}
      {modalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white text-5xl font-thin hover:text-gray-300 transition-colors">✕</button>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;