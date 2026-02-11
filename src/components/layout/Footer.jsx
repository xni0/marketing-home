// IMPORTAMOS EL LOGO
import logoNexo from '../../assets/images/icono-nexo-white-large-1x.webp';

// IMPORTAMOS TUS ICONOS SOCIALES
import iconLinkedin from '../../assets/icons/ant-design_linkedin-filled.png';
import iconTiktok from '../../assets/icons/ic_baseline-tiktok.png';
import iconX from '../../assets/icons/ri_twitter-x-fill.png';
import iconInsta from '../../assets/icons/mdi_instagram.png';

const Footer = () => {
  // Clase común para los iconos sociales (Tamaño w-6)
  const socialIconClass = "w-6 h-6 object-contain dark:invert hover:scale-110 transition-transform";

  return (
    <footer className="w-full bg-[#F3F4F6] dark:bg-black text-black dark:text-white border-t border-black dark:border-white font-sans transition-colors duration-300">
      
      {/* GRID DE 3 COLUMNAS */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black dark:divide-white">
        
        {/* === COLUMNA 1: LOGO E INFO === */}
        <div className="p-10 flex flex-col justify-between min-h-[300px]">
           {/* LOGO NEXO */}
           <div className="mb-6">
             <img 
               src={logoNexo} 
               alt="NEXO" 
               className="w-24 h-auto invert dark:invert-0 transition-all duration-300" 
             />
           </div>

           <div className="text-[11px] uppercase font-bold tracking-widest space-y-1 opacity-90">
             <p>Agencia Digital NEXO</p>
             <p>Calle Gran Vía, 28</p>
             <p>28013 Madrid, España</p>
             <p className="mt-6 text-[10px] opacity-60">© Nexo Digital S.L. 2025</p>
           </div>
        </div>

        {/* === COLUMNA 2: REDES Y CONTACTO === */}
        <div className="p-10 flex flex-col justify-center gap-8">
           <div>
               <h3 className="font-black text-sm uppercase tracking-widest mb-4">
                 Síguenos
               </h3>
               {/* ICONOS SOCIALES */}
               <div className="flex items-center gap-6">
                  <a href="#"><img src={iconLinkedin} alt="LinkedIn" className={socialIconClass} /></a>
                  <a href="#"><img src={iconInsta} alt="Instagram" className={socialIconClass} /></a>
                  <a href="#"><img src={iconTiktok} alt="TikTok" className={socialIconClass} /></a>
                  <a href="#"><img src={iconX} alt="X" className="w-5 h-5 object-contain dark:invert hover:scale-110 transition-transform" /></a>
               </div>
           </div>

           <div>
               <h3 className="font-black text-sm uppercase tracking-widest mb-1">
                 Contacto
               </h3>
               <a href="mailto:hola@nexo.com" className="text-xs font-medium hover:underline">
                 hola@nexo-digital.com
               </a>
           </div>
        </div>

        {/* === COLUMNA 3: LEGAL (CENTRADA) === */}
        {/* Aquí está el cambio: 'justify-center' en lugar de 'justify-end' */}
        <div className="p-10 flex flex-col justify-center">
            <h3 className="font-black text-sm uppercase tracking-widest mb-6">
              Legal
            </h3>
            <ul className="space-y-3 text-[10px] uppercase font-bold tracking-wider">
              <li><a href="#" className="hover:underline">Política de Privacidad</a></li>
              <li><a href="#" className="hover:underline">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:underline">Política de Cookies</a></li>
              <li><a href="#" className="hover:underline">Aviso Legal</a></li>
            </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;