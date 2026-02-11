// Ya no importamos Navbar ni Footer aquí para evitar duplicados
import heroVideoWebm from '../assets/videos/home-hero-video-2.webm'; 
import heroVideoMp4 from '../assets/videos/home-hero-video-2.mp4';

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

  const heroImg = getOptimizedSrc('about-us-hero-2', 'xlarge');
  
  const team = [
    { id: 1, name: "ANA MARTÍNEZ", role: "DIRECTORA CREATIVA", ...getOptimizedSrc('about-us-employee-1', 'large') },
    { id: 2, name: "CARLOS RUIZ", role: "HEAD OF SEO", ...getOptimizedSrc('about-us-employee-2', 'large') },
    { id: 3, name: "ELENA SOLER", role: "SENIOR DEVELOPER", ...getOptimizedSrc('about-us-employee-3', 'large') },
  ];

  return (
    /* Eliminamos el div contenedor con Navbar para no duplicar */
    <main className="px-2 md:px-3 bg-white dark:bg-black">
      {/* Eliminamos border-t para que no choque con la línea del Navbar global */}
      <div className={`w-full border-x border-b border-[1px] ${borderClass} rounded-none overflow-hidden`}>
        
        {/* SECCIÓN HERO - AMPLIADA */}
        <section className={`grid grid-cols-1 md:grid-cols-2 border-b-[1px] ${borderClass}`}>
          <div className={`px-8 py-20 md:px-16 md:py-32 flex flex-col justify-center border-b-[1px] md:border-b-0 md:border-r-[1px] ${borderClass}`}>
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-8">
              SOBRE <br /> 
              <span className={`${accentColor} inline-block hover:skew-x-[-6deg] transition-transform duration-300 cursor-default`}>
                NOSOTROS
              </span>
            </h1>
            <p className="text-base md:text-xl font-light max-w-sm border-l-2 border-[#FF4500] pl-6">
              Diseñamos experiencias digitales con un enfoque minimalista y funcional.
            </p>
          </div>
          <div className="h-[500px] md:h-auto overflow-hidden">
            <img 
              src={heroImg.src} 
              srcSet={heroImg.srcSet}
              alt="Nexo Office" 
              className="w-full h-full object-cover grayscale brightness-90 hover:brightness-105 transition-all duration-700" 
              loading="eager"
            />
          </div>
        </section>

        {/* SECCIÓN EQUIPO - EFECTO CLAREADO ESTÁTICO */}
        <section className="py-16 md:py-24 px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-tighter italic inline-block relative group cursor-default">
              Nuestro Equipo
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4500] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {team.map((member) => (
              <div key={member.id} className="flex flex-col items-center w-full group">
                <div className={`w-full aspect-square border-[1px] ${borderClass} p-3 bg-white dark:bg-neutral-900 flex items-center justify-center`}>
                  <div className={`relative w-full h-full border-[1px] ${borderClass} rounded-none overflow-hidden bg-black`}>
                    <img 
                      src={member.src} 
                      srcSet={member.srcSet}
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover grayscale brightness-100 group-hover:brightness-125 transition-all duration-500 ease-in-out"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-6 text-center w-full">
                  <h3 className="text-xl font-black uppercase tracking-tight group-hover:tracking-[0.15em] transition-all duration-500">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-bold text-[#FF4500] uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN CTA FINAL CON VIDEO DUAL */}
        <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-black text-white p-12 md:p-24 text-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
            poster={heroImg.src} 
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-[1]"></div>

          <div className="relative z-[2]">
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-10 leading-none">
              ¿CONECTAMOS <br/> TU MARCA?
            </h2>
            <button className="bg-[#FF4500] text-white px-12 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black">
              ESCRÍBENOS
            </button>
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;