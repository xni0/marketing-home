import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';

// Imports de video
import heroVideoMp4 from '../assets/videos/Nexo_video_hero.mp4';
import heroVideoWebm from '../assets/videos/Nexo_video_hero.webm';

const Home = () => {
  const borderClass = "border-black dark:border-white";

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

  const cardsData = [
    { id: 1, title: "Web Design", sub: "Diseño de interfaces", baseImage: "home-design-2" },
    { id: 2, title: "Marketing", sub: "Estrategias digitales", baseImage: "home-marketing-2" },
    { id: 3, title: "Seo", sub: "Optimización motores", baseImage: "home-seo-1" },
    { id: 4, title: "Desarrollo Web", sub: "Código eficiente", baseImage: "home-web" },
  ];

  // === LOGOS FIABLES (Wikimedia Commons) ===
  // Estos enlaces son oficiales y no suelen ser bloqueados por adblockers
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

  // Duplicamos x3 para asegurar el loop infinito suave
  const carouselLogos = [...logosBase, ...logosBase, ...logosBase];

  return (
    <div className="min-h-full font-sans bg-white dark:bg-black text-black dark:text-white relative">
      <Navbar />

      <main className="w-full">
        {/* HERO */}
        <section className={`relative w-full h-[500px] sm:h-[700px] border-b ${borderClass} overflow-hidden`}>
          <div className="absolute inset-0 z-0">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src={heroVideoWebm} type="video/webm" />
               <source src={heroVideoMp4} type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-black/30"></div>
          </div>
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
        <div className="text-center py-2 text-[10px] font-bold uppercase bg-[#EFEFEF] dark:bg-gray-800 text-black dark:text-white tracking-widest border-b border-black flex items-center justify-center gap-2">
          Ver todos los proyectos <span className="text-lg">👁</span>
        </div>

        {/* DARK SECTION */}
        <section className={`grid grid-cols-1 md:grid-cols-2 w-full border-b ${borderClass} bg-black text-white dark:bg-white dark:text-black transition-colors duration-300`}>
            <div className="p-12 sm:p-20 border-b md:border-b-0 flex flex-col justify-center">
              <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight tracking-tighter">
                TRANSFORMAMOS IDEAS EN <br /> EXPERIENCIAS DIGITALES
              </h2>
              <span className="block h-1.5 w-24 bg-white dark:bg-black mt-8"></span>
            </div>
            <div className="p-12 sm:p-20 flex flex-col justify-center gap-4 text-xl sm:text-2xl font-light">
              <p># Diseño Sostenible</p>
              <p># Innovación Técnica</p>
              <p># Gestión Integral</p>
            </div>
        </section>

        {/* === CAROUSEL SECTION === */}
        <section className="py-20 sm:py-28 bg-white dark:bg-black transition-colors duration-300 overflow-hidden border-b border-black dark:border-white">
             <div className="text-center mb-16 px-4">
                 <span className="italic text-lg font-serif border-b border-black dark:border-white pb-1 inline-block">
                     Confían en nosotros las empresas líderes del sector
                 </span>
             </div>
             
             {/* CARRUSEL INFINITO */}
             <div className="relative w-full flex overflow-hidden">
                {/* min-w-full asegura que el contenedor tenga ancho suficiente para animarse */}
                <div className="flex items-center gap-16 animate-scroll whitespace-nowrap min-w-full">
                    {carouselLogos.map((logoSrc, index) => (
                        <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center">
                            <img
                              src={logoSrc}
                              alt="Logo cliente"
                              // grayscale: los pone en B/N
                              // opacity-80: un poco tenues
                              // hover:opacity-100: al pasar el ratón se iluminan
                              // dark:invert: IMPORTANTE para que se vean bien en modo oscuro
                              className="w-full h-full object-contain grayscale dark:invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>
             </div>
        </section>

      </main>
      <Footer />
      
      {/* MODAL */}
      {modalOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white text-5xl font-thin">✕</button>
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