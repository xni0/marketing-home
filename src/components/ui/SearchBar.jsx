const SearchBar = () => {
  
  const borderClass = "border-border-main-light dark:border-border-main-dark";

  return (
    <div className="relative flex items-center w-full max-w-md group">
      
      <div className="absolute left-4 text-text-primary-dark dark:text-text-primary-light opacity-60 group-focus-within:opacity-100 transition-opacity">
        🔍
      </div>

      <input 
        type="text" 
        placeholder="Barra búsqueda"
        className={`
          w-full 
          bg-bg-secondary-light dark:bg-bg-secondary-dark 
          text-text-primary-dark dark:text-text-primary-light 
          placeholder-text-primary-dark/50 dark:placeholder-text-primary-light/50 
          py-2 pl-12 pr-12 
          rounded-full 
          border ${borderClass}
          focus:outline-none focus:ring-2 focus:ring-brand-accent/50
          transition-all duration-300
          text-label-bold uppercase tracking-wider
        `}
      />

      
      <div className="absolute right-4 text-text-primary-dark dark:text-text-primary-light opacity-60 group-focus-within:text-brand-accent group-focus-within:opacity-100 transition-all">
        →
      </div>
    </div>
  );
};

export default SearchBar;