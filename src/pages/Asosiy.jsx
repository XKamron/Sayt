import React from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { FaCalendarAlt, FaPhone, FaEnvelope, FaClock, FaUsers, FaGraduationCap, FaInfoCircle } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

// === Particles Init (новая версия) ===
const particlesInit = async (engine) => {
  await loadSlim(engine); // используем slim вместо full
};

// === Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};


// === Floating Music Notes ===
const MusicNotes = () => {
  const notes = ["🎵", "🎶", "🎼"];
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Check if window is defined (for SSR)
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640); // sm breakpoint
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener for window resize
      window.addEventListener('resize', checkMobile);
      
      // Cleanup
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  // Reduce number of notes on mobile for better performance
  const noteCount = isMobile ? 5 : 10;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {Array.from({ length: noteCount }).map((_, idx) => {
        const randomLeft = 5 + Math.random() * 90; // Keep notes within viewport
        const randomDelay = Math.random() * 4;
        const randomDuration = 10 + Math.random() * 10; // Slower animation
        const horizontalSwing = 5 + Math.random() * 10; // Less horizontal movement
        const rotationAngle = 5 + Math.random() * 10; // Less rotation
        const randomSize = 0.75 + Math.random() * 0.5; // Random size between 0.75x and 1.25x
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        
        return (
          <motion.div
            key={idx}
            className="absolute text-white opacity-40"
            style={{ 
              left: `${randomLeft}%`,
              fontSize: isMobile ? '1.25rem' : '1.75rem',
              transform: `scale(${randomSize})`
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-10vh",
              opacity: [0, 0.4, 0],
              x: [0, horizontalSwing, -horizontalSwing, 0],
              rotate: [0, rotationAngle, -rotationAngle, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "linear",
            }}
            aria-hidden="true"
          >
            {randomNote}
          </motion.div>
        );
      })}
    </div>
  );
};

// === Hero Section ===
const HeroSection = () => (
  <section className="relative text-white py-16 sm:py-20 md:py-24 text-center overflow-hidden bg-gradient-to-br from-sky-600 via-blue-700 to-sky-900">
    <Particles
      id="tsparticles"
      className="absolute top-0 left-0 w-full h-full z-0"
      init={particlesInit}
      options={{
        particles: {
          number: { 
            value: 30,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: { value: "#ffffff" },
          opacity: { 
            value: 0.2,
            random: true
          },
          size: { 
            value: 2,
            random: true
          },
          move: { 
            enable: true, 
            speed: 0.4,
            direction: "none",
            random: true,
            out_mode: "out"
          },
        },
        retina_detect: true,
        background: { color: { value: "transparent" } },
      }}
    />
    <MusicNotes />
    <motion.div
      className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 font-Montserrat leading-tight">
        To'xtasin Jalilov nomidagi<br className="hidden sm:block" /> 6-son BMSM
      </h1>
      <p className="text-base sm:text-lg lg:text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed font-Montserrat mb-6 sm:mb-8">
        1970-yildan buyon musiqaga va san'artga mehr uyg'otayotgan maktab
      </p>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-xs xs:text-sm sm:text-base font-Montserrat">
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
          <FaCalendarAlt className="inline mr-1.5 sm:mr-2" />
          50+ yillik tajriba
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
          <FaUsers className="inline mr-1.5 sm:mr-2" />
          240+ o'quvchi
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap">
          <FaGraduationCap className="inline mr-1.5 sm:mr-2" />
          6 ta yo'nalish
        </div>
      </div>
    </motion.div>
  </section>
);

// InfoItem Component
const InfoItem = ({ label, value }) => (
  <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
    <p className="text-sm font-medium text-gray-600 mb-1">{label}</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

const Asosiy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-Montserrat text-gray-800">
      <Header />
      <Navbar />

      <HeroSection />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
        {/* Main Information Section */}
        <motion.section 
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-sky-900 mb-6 text-center">BMSM to'g'risida asosiy ma'lumotlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <InfoItem label="Ta'lim muassasasi tashkil etilgan yil" value="1970-yil" />
              <InfoItem label="To'liq nomi" value="Toshkent shahar madaniyat boshqarmasi tasarrufidagi Chilonzor tumani To'xtasin Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi" />
              <InfoItem label="Qisqartirilgan nomi" value="Chilonzor tumani 6-son BMSM" />
              <InfoItem label="Muassisi" value="Toshkent shahar hokimligi" />
              <InfoItem label="Yuqori organi" value="Toshkent shahar madaniyat boshqarmasi" />
              <InfoItem label="Ta'lim turi" value="Maktabdan tashqari ta'lim muassasasi" />
              <InfoItem label="Faoliyati yo'nalishi" value="Musiqa va san'at" />
              <InfoItem label="STIR" value="206 950 691" />
              <InfoItem label="Byudjet shaxsiy hisob raqami" value="100022860262947096600056003" />
              <InfoItem label="Maxsus hisob raqami" value="400122860262947096600056002" />
            </div>
            <div className="space-y-4">
              <InfoItem label="Ota-onalar to'lov hisob raqami" value="400622860262947096600056003" />
              <InfoItem label="Pochta indeksi" value="100115" />
              <InfoItem 
                label="Manzili" 
                value="Toshkent shahar, Chilonzor tumani, 2-mavse, 20-uy" 
              />
              <InfoItem 
                label="Transport" 
                value="2-, 80-, 84-, 94-, 103-, 135-avtobuslar, 46-, 81-yo'nalishdagi taksilar, 'Chilonzor savdo markazi' bekati, 77-avtobus 'Batalyon' bekati" 
              />
              <InfoItem 
                label="Mo'ljal" 
                value="Chilonzor savdo markazi, 103- va 163-sonli umumiy o'rta ta'lim maktablari, 215-sonli maktamgacha ta'lim muassasasi" 
              />
              <InfoItem 
                label="Ma'muriyat ish tartibi" 
                value="Ish kuni: soat 9.00 dan 18.00 gacha, tushlik 13.00 dan 14.00 gacha" 
              />
              <InfoItem 
                label="Ta'lim muassasasi ish tartibi" 
                value="Dars jadvali bo'yicha soat 8.00 dan 20.00 gacha, 6 kunlik o'quv haftasi" 
              />
            </div>
          </div>
        </motion.section>

        {/* Staff Section */}
        <motion.section 
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-sky-900 mb-6">Rahbariyat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoItem label="BMSM direktori" value="Karimov Komiljon Muxammatqulovich" />
            <InfoItem 
              label="O'quv ishlari va ma'naviy-ma'rifiy ishlar bo'yicha o'rinbosari" 
              value="Saydullayev Saidakbar Soibjon o'g'li" 
            />
            <InfoItem 
              label="Xo'jalik ishlari bo'yicha o'rinbosari" 
              value="Vakant" 
            />
            <InfoItem label="Bosh hisobchi" value="Berdiyarov Zopir Joxonovich" />
            <InfoItem 
              label="Kasaba uyushmasi qo'mitasi raisi" 
              value="Tursunxodjaeva Gulchexra Muradjanovna" 
            />
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          className="mb-12 bg-white rounded-xl shadow-sm p-6 sm:p-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-sky-900 mb-6">Aloqa ma'lumotlari</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Telefon" value="+998 71 277-00-85" />
            <InfoItem label="Elektron pochta" value="6bmsmtoshkent.uz@umail.uz" />
          </div>
        </motion.section>

        {/* Education Directions Table */}
        <motion.section 
          className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-8 overflow-x-auto"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-sky-900 mb-6">Mavjud yo'nalishlar</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NN</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ta'lim yo'nalishi</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Qabul yoshi</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">O'qish muddati</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* Musiqa yo'nalishi */}
                <tr className="bg-blue-50">
                  <td colSpan="4" className="px-6 py-2 text-sm font-medium text-blue-800 bg-blue-100">Musiqa yo'nalishi</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Fortepiano</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-9</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 yil</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Torli cholg'ular</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-9</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 yil</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Xalq cholg'ulari</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 yil</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">4</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Estrada xonandaligi</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 yil</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">5</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Estrada cholg'u ijrochiligi:
                    <ul className="list-disc pl-5 mt-1">
                      <li>Fortepiano</li>
                      <li>Torli cholg'ular</li>
                      <li>Gitara</li>
                    </ul>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-9<br/>6-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7 yil<br/>5 yil</td>
                </tr>

                {/* San'at yo'nalishi */}
                <tr className="bg-blue-50">
                  <td colSpan="4" className="px-6 py-2 text-sm font-medium text-blue-800 bg-blue-100">San'at yo'nalishi</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Xoreografiya</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 yil</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Tasviriy san'at</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6-11</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5 yil</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
};

export default Asosiy;
