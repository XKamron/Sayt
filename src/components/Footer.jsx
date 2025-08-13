import React, { useEffect } from 'react';
import { logo } from '../img';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, 
  FaFileAlt, FaTelegram 
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-sky-900 text-white py-8 md:py-12 font-['Montserrat'] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
          
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start" data-aos="fade-up">
            <img src={logo} alt="Logo" className="w-28 sm:w-32 mb-4" />
            <p className="text-center md:text-left text-sm sm:text-[15px] opacity-80 leading-relaxed max-w-[250px]">
              Toshkent shahar Chilonzor tumani 6-son bolalar musiqa va san'at maktabi
            </p>
          </div>

          {/* Address */}
          <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg font-semibold mb-4">Manzil</h3>
            <div className="space-y-3">
              <p className="flex items-start text-sm sm:text-[15px] opacity-90 hover:opacity-100 transition">
                <FaMapMarkerAlt className="mt-1 mr-2 text-sky-300 flex-shrink-0" />
                <span>100115 Toshkent shahar, Chilonzor tumani, 2-mavze, 20-uy</span>
              </p>
              <p className="flex items-center text-sm sm:text-[15px] opacity-90 hover:opacity-100 transition">
                <FaClock className="mr-2 text-sky-300 flex-shrink-0" />
                <span>Ish kuni tartibi: Dushanba - Shanba, 08:00 - 18:00</span>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <div className="space-y-3">
              <p className="flex items-start sm:items-center text-sm sm:text-[15px] hover:text-sky-300 transition">
                <FaPhone className="mt-1 sm:mt-0 mr-2 text-sky-300 flex-shrink-0" />
                <a href="tel:+998712770085" className="hover:underline">+998 71 277-00-85</a>
              </p>
              <p className="flex items-start sm:items-center text-sm sm:text-[15px] hover:text-sky-300 transition">
                <FaEnvelope className="mt-1 sm:mt-0 mr-2 text-sky-300 flex-shrink-0" />
                <a href="mailto:6bmsmtoshkent.uz@umail.uz" className="hover:underline break-all">6bmsmtoshkent.uz@umail.uz</a>
              </p>
              <p className="flex items-start sm:items-center text-sm sm:text-[15px] hover:text-sky-300 transition">
                <FaTelegram className="mt-1 sm:mt-0 mr-2 text-sky-300 flex-shrink-0" />
                <a 
                  href="https://t.me/toshkentshahar6bmsm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Telegram orqali bog'lanish
                </a>
              </p>
            </div>
          </div>


        </div>

        {/* Copyright */}
        <div className="border-t border-sky-700 mt-8 md:mt-12 pt-6 text-center">
          <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
            &copy; {new Date().getFullYear()} 
            <br className="sm:hidden" /> Barcha huquqlar himoyalangan. <br/> FOREALDev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
