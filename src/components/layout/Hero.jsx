import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 text-center bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          Transformamos ideas en <span className="text-primary">resultados digitales</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Agencia de marketing especializada en crecimiento, diseño y estrategia.
          Llevamos tu marca al siguiente nivel.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary">Empezar Proyecto</Button>
          <Button variant="secondary">Ver Portfolio</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;