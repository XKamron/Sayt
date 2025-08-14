import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white shadow-sm font-['Montserrat'] relative z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Top bar */}
      <div className="bg-sky-900 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center py-2 sm:py-1.5 space-y-2 sm:space-y-0">
            {/* State links */}
            <div 
              className="flex flex-wrap justify-center sm:justify-start items-center gap-x-2 sm:gap-x-3 gap-y-1 text-[11px] sm:text-xs md:text-sm"
              data-aos="fade-down"
            >
              <a 
                href='davlat_ramzlari' 
                className="hover:text-sky-300 transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded hover:bg-sky-800/50"
              >
                Davlat ramzlari
              </a>
              <span className="text-sky-400 hidden sm:inline-block">•</span>
              <a 
                href="taraqqiyot_strategiya" 
                className="hover:text-sky-300 transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded hover:bg-sky-800/50"
              >
                Taraqqiyot strategiyasi
              </a>
              <span className="text-sky-400 hidden sm:inline-block">•</span>
              <a 
                href="besh_tashabbus" 
                className="hover:text-sky-300 transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded hover:bg-sky-800/50"
              >
                Besh tashabbus
              </a>
            </div>

            {/* Contact info */}
            <div 
              className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 sm:gap-x-4 gap-y-1 text-[11px] sm:text-xs md:text-sm"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <a 
                href="tel:+998712770085" 
                className="flex items-center hover:text-sky-300 transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded hover:bg-sky-800/50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="truncate">+998 71 277‑00‑85</span>
              </a>
              <a 
                href="mailto:bmsm6tsh@umail.uz" 
                className="flex items-center hover:text-sky-300 transition-colors duration-200 whitespace-nowrap px-1 py-0.5 rounded hover:bg-sky-800/50"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1 flex-shrink-0" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="hidden sm:inline">bmsm6tsh@umail.uz</span>
                <span className="sm:hidden">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
