
import logoNexo from '../../assets/images/icono-nexo-white-large-1x.webp';


import iconLinkedin from '../../assets/icons/ant-design_linkedin-filled.svg';
import iconTiktok from '../../assets/icons/ic_baseline-tiktok.svg';
import iconX from '../../assets/icons/ri_twitter-x-fill.svg';
import iconInsta from '../../assets/icons/mdi_instagram.svg';
import iconYoutube from '../../assets/icons/line-md_youtube.svg';

const Footer = () => {
  
  const borderClass = "border-border-main-light dark:border-border-main-dark";
  const divideClass = "divide-border-main-light dark:divide-border-main-dark";
  
  const socialIconClass = "w-6 h-6 object-contain dark:invert hover:scale-110 transition-transform";

  return (
    <footer className={`w-full bg-bg-secondary-light dark:bg-bg-primary-dark text-black dark:text-white border-t ${borderClass} font-sans transition-colors duration-300`}>
      
     
      <div className={`grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x ${divideClass}`}>
        
        
        <div className="p-10 flex flex-col justify-between min-h-[300px]">
            <div className="mb-6">
              <img 
                src={logoNexo} 
                alt="NEXO" 
                className="w-24 h-auto invert dark:invert-0 transition-all duration-300" 
              />
            </div>

            
            <div className="text-[11px] uppercase font-bold tracking-widest space-y-1 opacity-90 text-black dark:text-white">
              <p>Agencia Digital NEXO</p>
              <p>Calle Gran Vía, 28</p>
              <p>28013 Madrid, España</p>
              <p className="mt-6 text-[10px] opacity-60">© Nexo Digital S.L. 2026</p>
            </div>
        </div>

       
        <div className="p-10 flex flex-col justify-center gap-8">
            <div>
                <h3 className="font-black text-sm uppercase tracking-widest mb-4 text-black dark:text-white">
                  Síguenos
                </h3>
                <div className="flex items-center gap-6">
                   <a href="#"><img src={iconLinkedin} alt="LinkedIn" className={socialIconClass} /></a>
                   <a href="#"><img src={iconInsta} alt="Instagram" className={socialIconClass} /></a>
                   <a href="#"><img src={iconTiktok} alt="TikTok" className={socialIconClass} /></a>
                   <a href="#"><img src={iconYoutube} alt="YouTube" className={socialIconClass} /></a>
                   <a href="#"><img src={iconX} alt="X" className="w-5 h-5 object-contain dark:invert hover:scale-110 transition-transform" /></a>
                </div>
            </div>

            <div>
                <h3 className="font-black text-sm uppercase tracking-widest mb-1 text-black dark:text-white">
                  Contacto
                </h3>
                <a href="mailto:hola@nexo-digital.com" className="text-xs font-medium text-black dark:text-white hover:text-brand-accent transition-colors">
                  hola@nexo-digital.com
                </a>
            </div>
        </div>

        
        <div className="p-10 flex flex-col justify-center">
            <h3 className="font-black text-sm uppercase tracking-widest mb-6 text-black dark:text-white">
              Legal
            </h3>
            <ul className="space-y-3 text-[10px] uppercase font-bold tracking-wider text-black dark:text-white">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Cookies</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Aviso Legal</a></li>
            </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;