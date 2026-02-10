import Home from './pages/Home';

function App() {
  return (
    // CONTENEDOR EXTERNO (EL MARCO NEGRO GLOBAL)
    <div className="min-h-screen w-full bg-black p-3 sm:p-5 font-sans box-border overflow-x-hidden flex flex-col transition-all duration-300">
      
      {/* CONTENEDOR INTERNO (LA WEB) */}
      {/* CAMBIO AQUÍ: dark:border-white para que el marquito sea blanco en modo noche */}
      <div className="bg-white dark:bg-black w-full flex-1 rounded-[30px] overflow-hidden relative shadow-2xl border border-black dark:border-white flex flex-col transition-colors duration-300">
        <Home />
      </div>

    </div>
  );
}

export default App;