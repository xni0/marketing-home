import PropTypes from 'prop-types';

const Button = ({ children, variant = 'solid', className = '', ...props }) => {
  const baseStyles = "px-8 py-3 font-medium transition-all duration-300 flex items-center justify-center gap-2 text-body uppercase tracking-wider";
  
  const variants = {
    // Estilo negro sólido (como en tus cards)
    solid: "bg-nexo-primary text-white hover:bg-nexo-accent border border-transparent dark:bg-white dark:text-nexo-primary",
    
    // Estilo borde (como en tu Hero)
    outline: "bg-transparent border border-nexo-primary text-nexo-primary hover:bg-nexo-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-nexo-primary"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
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