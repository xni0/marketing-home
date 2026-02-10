const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full max-w-md">
      <div className="absolute left-4 text-white">🔍</div>
      <input 
        type="text" 
        placeholder="Barra búsqueda"
        className="w-full bg-nexo-accent text-white placeholder-white/80 py-2 pl-12 pr-12 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <div className="absolute right-4 text-white">→</div>
    </div>
  );
};

export default SearchBar;