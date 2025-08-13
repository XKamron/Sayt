import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  MM_tibbiy_yordam_1, 
  MM_tibbiy_yordam_2, 
  MM_tibbiy_yordam_3, 
  MM_tibbiy_yordam_4, 
  MM_yongin_xavfsizligi, 
  MM_duradgorlik, 
  MM_kompyuter, 
  MM_Qozonxona 
} from '../img';

const documents = [
  {
    id: 1,
    title: "O'zbekiston Respublikasining 'Mehnatni muhofaza qilish to'g'risida'gi qonuni",
    url: "/mehnatni_muhofaza_qilish"
  },
  {
    id: 2,
    title: "Mehnat muhofazasi bo'yicha ish beruvchining majburiyliklari",
    url: "./files/Mennat_muhofazasi.pdf"
  },
  {
    id: 3,
    title: "Ish beruvchi va kasaba uyushma qo'mitasi o'rtasida tuzilgan mehnatni muhofaza qilish bo'yicha bitim",
    url: "./files/Mehnat_muhofazasi_bitim.pdf"
  },
  {
    id: 4,
    title: "Mehnatni muhofaza qilish bo'yicha ishlarni tashkil etish yuzasidan tavsiyalar",
    url: "./files/Mehnat_muhofazasi_tavsiyalar...pdf"
  }
];

const galleryImages = [
  { id: 1, src: MM_tibbiy_yordam_1, alt: "Tibbiy yordam 1" },
  { id: 2, src: MM_tibbiy_yordam_2, alt: "Tibbiy yordam 2" },
  { id: 3, src: MM_tibbiy_yordam_3, alt: "Tibbiy yordam 3" },
  { id: 4, src: MM_tibbiy_yordam_4, alt: "Tibbiy yordam 4" },
  { id: 5, src: MM_yongin_xavfsizligi, alt: "Yong'in xavfsizligi" },
  { id: 6, src: MM_duradgorlik, alt: "Duradgorlik" },
  { id: 7, src: MM_kompyuter, alt: "Kompyuter xavfsizligi" },
  { id: 8, src: MM_Qozonxona, alt: "Qozonxona xavfsizligi" }
];

const DocumentLink = ({ title, url }) => (
  <motion.a
    href={url}
    className="block p-3 sm:p-4 mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600"
    whileHover={{ x: 5 }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <p className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-colors duration-200 leading-relaxed">
      {title}
    </p>
  </motion.a>
);

const GalleryImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gray-200 animate-pulse ${isLoaded ? 'hidden' : 'block'}`}></div>
      <div className="relative aspect-square">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${isHovered ? 'scale-105' : ''}`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      </div>
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <p className="text-sm sm:text-base font-medium">{alt}</p>
      </motion.div>
    </motion.div>
  );
};

const Mehnat_muxofazasi = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      
      <main className="flex-grow py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mehnat muxofazasi
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Documents Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-4">
              Hujjatlar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {documents.map((doc) => (
                <DocumentLink 
                  key={doc.id}
                  title={doc.title}
                  url={doc.url}
                />
              ))}
            </div>
          </section>

          {/* Gallery Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 px-2 sm:px-4">
              Galereya
            </h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              <AnimatePresence>
                {galleryImages.map((image) => (
                  <GalleryImage 
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                  />
                ))}
              </AnimatePresence>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mehnat_muxofazasi;