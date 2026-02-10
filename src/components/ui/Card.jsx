import PropTypes from 'prop-types';
import Button from './Button';

const Card = ({ title, subtitle }) => {
  return (
    // CAMBIOS CLAVE:
    // - min-h-[500px]: Fuerza una altura mínima considerable para que se vean altas.
    // - py-10: Más espacio vertical arriba y abajo.
    <div className="bg-[#AFAFAF] px-8 py-10 flex flex-col h-full min-h-[500px] text-black border-none relative">
      
      {/* Caja 'x' superior izquierda */}
      <div className="flex justify-start mb-4">
        <span className="border border-black px-1.5 py-0.5 text-[10px] font-medium leading-none">x</span>
      </div>
      
      {/* Títulos con más separación */}
      <h3 className="text-2xl font-normal mb-1 leading-tight tracking-tight">{title}</h3>
      <p className="text-lg font-light mb-12 opacity-80">{subtitle}</p>

      {/* Icono de Imagen (Con mucho margen inferior para estirar la card) */}
      <div className="flex-1 flex flex-col items-center justify-start mb-12">
         {/* Placeholder de imagen */}
         <div className="w-24 h-20 bg-[#D9D9D9] rounded-sm flex items-center justify-center mb-4">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
         </div>
      </div>

      {/* Botón Negro Centrado (Fuente muy pequeña) */}
      <div className="flex justify-center mt-auto">
        {/* CAMBIOS EN BOTÓN:
           - text-[9px]: Fuente diminuta.
           - py-2.5 px-8: Botón ancho pero bajo.
           - tracking-[0.2em]: Letras muy separadas (estilo premium).
        */}
        <Button variant="primary" className="bg-black text-white text-[9px] font-bold py-2.5 px-8 hover:bg-gray-800 rounded-none w-auto uppercase tracking-[0.2em]">
          Button &rarr;
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Card;