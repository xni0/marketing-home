import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Card from '../components/ui/Card';

const Home = () => {
  const borderClass = "border-black dark:border-white";
  const divideClass = "divide-black dark:divide-white";

  return (
    <div className="min-h-full font-sans bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <main className="w-full">
        
        {/* HERO SECTION */}
        <section className={`bg-[#B3B3B3] dark:bg-gray-900 py-24 sm:py-32 text-center border-b ${borderClass} relative transition-colors duration-300`}>
          <div className="w-full px-4 flex flex-col items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center mb-6 text-4xl sm:text-5xl cursor-pointer hover:scale-105 transition-transform shadow-xl">▶</div>
            <h1 className="text-4xl sm:text-6xl font-black text-black dark:text-white mb-2 uppercase tracking-tighter">Lorem ipsum dolor sit</h1>
            <p className="text-xs sm:text-sm text-black dark:text-gray-300 font-bold mb-8 max-w-lg mx-auto leading-relaxed">Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis.</p>
            <button className={`border ${borderClass} px-6 py-2 text-[10px] font-bold uppercase text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors`}>Button</button>
          </div>
        </section>

        {/* TÍTULO SECCIÓN CARDS */}
        <div className="py-4 text-center bg-[#EFEFEF] dark:bg-gray-800 text-black dark:text-white font-bold text-2xl uppercase tracking-tight border-b border-white">
             <h2>Lorem ipsum</h2>
        </div>

        {/* === GRID CON SEPARACIÓN AUMENTADA === 
            - bg-white: El fondo blanco actúa como el color de las líneas.
            - gap-1: Esto crea una separación física de 4px entre las cards (más visible que antes).
        */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 bg-white border-b border-white">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="h-full">
                  <Card title="Lorem ipsum" subtitle="dolor sit amet" />
              </div>
            ))}
        </section>
        
        {/* BARRA INFERIOR SECCIÓN CARDS */}
        <div className="text-center py-2 text-[10px] font-bold uppercase bg-[#EFEFEF] dark:bg-gray-800 text-black dark:text-white tracking-widest border-b border-black">
          Lorem ipsum 👁
        </div>

        {/* DARK SECTION */}
        <section className={`grid grid-cols-1 md:grid-cols-2 w-full border-b ${borderClass} bg-black text-white dark:bg-white dark:text-black transition-colors duration-300`}>
            <div className="p-12 sm:p-20 border-b md:border-b-0 md:border-r border-white dark:border-black flex flex-col justify-center">
              <h2 className="text-5xl sm:text-6xl font-black uppercase leading-[0.85]">LOREM IPSUM <br /> DOLOR SIT</h2>
              <span className="block h-1.5 w-24 bg-white dark:bg-black mt-8"></span>
            </div>
            <div className="p-12 sm:p-20 flex flex-col justify-center gap-4 text-xl sm:text-2xl font-light">
              <p># Lorem ipsum dolor sit</p>
              <p># Lorem ipsum dolor sit</p>
              <p># Lorem ipsum dolor sit</p>
            </div>
        </section>

        {/* LOGO GRID */}
        <section className="py-16 sm:py-24 bg-white dark:bg-black transition-colors duration-300">
             <div className="text-center mb-16 px-4">
                 <span className="italic text-lg font-serif border-b border-black dark:border-white pb-1 inline-block">
                     Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis
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
    </div>
  );
};

export default Home;