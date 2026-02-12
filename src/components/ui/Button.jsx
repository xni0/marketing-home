import PropTypes from 'prop-types';

const Button = ({ children, variant = 'solid', className = '', ...props }) => {
  const baseStyles = "px-8 py-4 text-label-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-[0.2em] border";
  
  const variants = {
    solid: `
      bg-brand-accent text-white border-brand-accent 
      hover:bg-black hover:border-black 
      dark:hover:bg-white dark:hover:text-black dark:hover:border-white
    `,
    
    outline: `
      bg-transparent border-border-main-light text-text-primary-dark 
      dark:border-border-main-dark dark:text-text-primary-light 
      hover:bg-brand-accent hover:border-brand-accent hover:text-white
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['solid', 'outline']),
  className: PropTypes.string
};

export default Button;