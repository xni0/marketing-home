import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
  const borderClass = "border-black dark:border-white";
  const accentColor = "text-[#FF4500]";

  // --- LÓGICA DE OPTIMIZACIÓN DE IMÁGENES ---
  const imagesGlob = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

  const getOptimizedSrc = (baseName, size = 'large') => {
    const path1x = `../assets/images/${baseName}-${size}-1x.jpg`;
    const path2x = `../assets/images/${baseName}-${size}-2x.jpg`;
    const src1x = imagesGlob[path1x];
    const src2x = imagesGlob[path2x];
    
    return {
      src: src1x,
      srcSet: src2x ? `${src1x} 1x, ${src2x} 2x` : undefined
    };
  };

  // Assets según tus capturas de pantalla
  const heroImg = getOptimizedSrc('about-us-hero-2', 'xlarge');
  
  const team = [
    { id: 1, name: "Ana Martínez", role: "Directora Creativa", ...getOptimizedSrc('about-us-employee-1', 'large') },
    { id: 2, name: "Carlos Ruiz", role: "Head of SEO", ...getOptimizedSrc('about-us-employee-2', 'large') },
    { id: 3, name: "Elena Soler", role: "Senior Developer", ...getOptimizedSrc('about-us-employee-3', 'large') },
  ];

  return (
    <div className="min-h-full font-sans bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* MARGEN LATERAL FINO (px-2 a px-3 como pediste) */}
      <main className="px-2 md:px-3 bg-white dark:bg-black">
        
        {/* CONTENEDOR CON LÍNEA DE 1PX Y ESQUINAS RECTAS */}
        <div className={`w-full border-x border-t border-b border-[1px] ${borderClass} rounded-none overflow-hidden`}>
          
          {/* SECCIÓN HERO */}
          <section className={`grid grid-cols-1 md:grid-cols-2 border-b-[1px] ${borderClass}`}>
            <div className={`p-10 md:p-16 flex flex-col justify-center border-b-[1px] md:border-b-0 md:border-r-[1px] ${borderClass}`}>
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-6">
                Sobre <br /> <span className={accentColor}>Nosotros</span>
              </h1>
              <p className="text-base md:text-lg font-light max-w-sm">
                Diseñamos experiencias digitales con un enfoque minimalista y funcional.
              </p>
            </div>
            <div className="h-[400px] md:h-auto overflow-hidden">
              <img 
                src={heroImg.src} 
                srcSet={heroImg.srcSet}
                alt="Nexo Office" 
                className="w-full h-full object-cover grayscale" 
                loading="eager"
              />
            </div>
          </section>

          {/* SECCIÓN EQUIPO (Cajas igualadas al píxel) */}
          <section className="py-16 md:py-24 px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black uppercase tracking-tighter italic underline decoration-[#FF4500] underline-offset-8">
                Nuestro Equipo
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
              {team.map((member) => (
                <div key={member.id} className="flex flex-col items-center w-full group">
                  
                  {/* MARCO EXTERIOR CUADRADO */}
                  <div className={`w-full aspect-square border-[1px] ${borderClass} p-3 bg-white dark:bg-neutral-900 flex items-center justify-center`}>
                    
                    {/* MARCO INTERIOR CUADRADO (Contenedor relativo para la imagen absoluta) */}
                    <div className={`relative w-full h-full border-[1px] ${borderClass} rounded-none overflow-hidden`}>
                      <img 
                        src={member.src} 
                        srcSet={member.srcSet}
                        alt={member.name} 
                        /* 'absolute inset-0' fuerza a la imagen a llenar el cuadrado sin importar su tamaño original */
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="mt-6 text-center w-full">
                    <h3 className="text-xl font-black uppercase tracking-tight">{member.name}</h3>
                    <p className="text-[10px] font-bold text-[#FF4500] uppercase tracking-widest mt-1">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECCIÓN CTA FINAL */}
          <section className="bg-black text-white p-12 md:p-24 text-center">
             <h2 className="text-4xl md:text-7xl font-black uppercase mb-10 leading-none">
               ¿CONECTAMOS <br/> TU MARCA?
             </h2>
             <button className="bg-[#FF4500] text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all hover:bg-white hover:text-black">
               Escríbenos
             </button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;