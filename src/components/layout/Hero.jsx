import Button from '../ui/Button';

const Hero = () => {
  
  const borderClass = "border-border-main-light dark:border-border-main-dark";

  return (
    <section className={`pt-32 pb-20 px-4 text-center bg-bg-primary-light dark:bg-bg-primary-dark border-b ${borderClass} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-5xl md:text-h1 font-black text-black dark:text-white uppercase tracking-tighter mb-6 leading-none">
          Transformamos ideas en <br />
          <span className="text-brand-accent italic hover:skew-x-[-6deg] transition-transform inline-block cursor-default">
            resultados digitales
          </span>
        </h1>

        
        <p className="text-lg md:text-body-lead font-light text-black dark:text-white opacity-70 mb-10 max-w-2xl mx-auto uppercase tracking-widest">
          Agencia de marketing especializada en crecimiento, diseño y estrategia.
          Llevamos tu marca al siguiente nivel.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="solid" className="w-full sm:w-auto">
            Empezar Proyecto
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Ver Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;