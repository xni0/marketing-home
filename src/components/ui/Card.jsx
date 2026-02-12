import PropTypes from 'prop-types';
import Button from './Button';

const imagesGlob = import.meta.glob('../../assets/images/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });

const getImageUrl = (baseName, size, density) => {
  const fileName = `${baseName}-${size}-${density}x.jpg`;
  for (const path in imagesGlob) {
    // Usamos toLowerCase para que la búsqueda sea más robusta
    if (path.toLowerCase().includes(fileName.toLowerCase())) {
      return imagesGlob[path];
    }
  }
  return null;
};

const Card = ({ title, subtitle, baseImageName, onImageClick }) => {
  const imgSmall1x = getImageUrl(baseImageName, 'small', '1');
  
  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden group border-none bg-bg-primary-dark font-sans shadow-2xl">
      
      {/* 1. IMAGEN DE FONDO OPTIMIZADA */}
      {baseImageName && imgSmall1x ? (
        <div 
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={() => onImageClick(baseImageName, title, subtitle)}
        >
           <picture className="w-full h-full">
             <source media="(min-width: 1024px)" srcSet={`${getImageUrl(baseImageName, 'large', '1')} 1x, ${getImageUrl(baseImageName, 'large', '2')} 2x`} />
             <source media="(min-width: 640px)" srcSet={`${getImageUrl(baseImageName, 'medium', '1')} 1x, ${getImageUrl(baseImageName, 'medium', '2')} 2x`} />
             <img 
               src={imgSmall1x} 
               srcSet={`${getImageUrl(baseImageName, 'small', '1')} 1x, ${getImageUrl(baseImageName, 'small', '2')} 2x`}
               alt={title} 
               loading="lazy" // <--- OPTIMIZACIÓN AVANZADA AQUÍ
               className="w-full h-full object-cover grayscale transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:grayscale-0" 
             />
           </picture>
        </div>
      ) : (
        <div className="absolute inset-0 z-0 bg-bg-secondary-dark flex items-center justify-center">
            <span className="text-text-secondary-dark text-xs uppercase tracking-widest font-black">Image Not Found</span>
        </div>
      )}

      {/* 2. CONTENIDO SUPERPUESTO */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        
        {/* BANDA DE TEXTO */}
        <div className="mt-20 w-full bg-black/80 p-8 backdrop-blur-sm transition-colors duration-300">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-1 leading-none tracking-tight text-white uppercase drop-shadow-lg font-h3">
              {title}
            </h3>
            <p className="text-sm sm:text-base font-medium opacity-90 text-gray-200 tracking-widest uppercase font-label-bold">
              {subtitle}
            </p>
        </div>

        {/* BOTÓN - Estilo Blanco/Negro original */}
        <div className="mt-auto pb-12 flex justify-center pointer-events-auto">
          <button 
            className="
              font-sans 
              bg-black text-white border border-white/20 
              hover:bg-white hover:text-black hover:border-white 
              text-[10px] font-bold py-4 px-10 
              transition-all duration-300 rounded-none w-auto 
              uppercase tracking-[0.25em] shadow-xl
            "
            onClick={() => onImageClick(baseImageName, title, subtitle)}
          >
            Ver Proyecto &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  baseImageName: PropTypes.string,
  onImageClick: PropTypes.func,
};

export default Card;