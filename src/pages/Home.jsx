import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdErrorOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../components/ErrorBoundary';
import { news_1,news_2,news_3, slider_1,slider_2,slider_3, fortepiano, uzbek, vokal, news_32_15,  xoreografiya, tasviriy, nazariya } from '../img';
import { Suspense } from 'react';


// Local components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Numbers from "../components/Numbers";

// Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';



// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};



const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [sectionErrors, setSectionErrors] = React.useState({});
  
  // Sections data for departments
  const sections = [
    {
      id: 1,
      title: "Fortepiano, torli va damli cholg‘ular bo‘limi",
      img: fortepiano
    },
    {
      id: 2,
      title: "Xalq cholg‘ulari bo‘limi",
      img: uzbek
    },
    {
      id: 3,
      title: "Estrada cholg‘u ijrochiligi va xonandaligi bo‘limi",
      img: vokal
    },
    {
      id: 4,
      title: "Xoreografiya bo‘limi",
      img: xoreografiya
    },
    {
      id: 5,
      title: "Tasviriy san’at bo‘limi",
      img: tasviriy
    },
    {
      id: 6,
      title: "Musiqa nazariyasi va xor ijrochiligi bo‘limi",
      img: nazariya
    }
  ];
  
  // Hero carousel data
  const heroSlides = [
    {
      title: "San'at va Musiqa Maktabiga Xush Kelibsiz",
      subtitle: "Istalgan yoshdagi bolalar uchun professional ta'lim",
      image: slider_1,
      buttonText: "Batafsil",
      buttonLink: "#about"
    },
    {
      title: "Malakali O'qituvchilar",
      subtitle: "Tajribali va malakali o'qituvchilarimiz bilan birga",
      image: slider_2,
      buttonText: "O'qituvchilar",
      buttonLink: "./Xodimlar"
    },
  ];

  // News data
  const news = [
    {
      id: 1,
      title: "Yangi o'quv yili boshlanmoqda",
      date: "2023-09-01",
      excerpt: "Yangi o'quv yili uchun ro'yxatdan o'tish boshlandi. Barcha yoshdagilar uchun...",
      image: news_32_15,
      link: "/news/1"
    },
    {
      id: 2,
      title: "Yangi kurslar qo'shildi",
      date: "2023-08-15",
      excerpt: "Bu yilgi mavsumda yangi yo'nalishlar va kurslar qo'shildi...",
      image: news_32_15,
      link: "/news/2"
    },
    {
      id: 3,
      title: "Musiqa festivali",
      date: "2023-07-20",
      excerpt: "Yillik musiqa festivalimiz bo'lib o'tdi. Barcha ishtirokchilarga rahmat...",
      image: news_32_15,
      link: "/news/3"
    }
  ];

  // Departments data
  const departments = [
    { 
      id: 1,
      title: "Xoreografiya",
      description: "Zamonaviy va milliy raqslar bo'yicha malakali o'qituvchilar",
      icon: "💃"
    },
    { 
      id: 2,
      title: "Xalq Cholg'ulari",
      description: "Milliy cholg'ularimizni o'rganish va rivojlantirish",
      icon: "🥁"
    },
    { 
      id: 3,
      title: "Vokal",
      description: "Zamonaviy va klassik qo'shiqlar ijrosi",
      icon: "🎤"
    },
    { 
      id: 4,
      title: "Tasviriy San'at",
      description: "Rangtasvir, haykaltaroshlik va amaliy san'at",
      icon: "🎨"
    },
    { 
      id: 5,
      title: "Musiqa Nazariyasi",
      description: "Musiqiy bilim va nazariy asoslar",
      icon: "🎼"
    },
    { 
      id: 6,
      title: "Fortepiano",
      description: "Klassik va zamonaviy asboblarda chalish",
      icon: "🎹"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Aziza Xolmatova",
      role: "Ota-ona",
      content: "Farzandim bu maktabda 3 yildan beri o'qiyapti. Juda ham mamnunmiz. O'qituvchilar juda malakali va mehribon.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      id: 2,
      name: "Dilshod Rajabov",
      role: "O'quvchi",
      content: "Men bu yerda 5 yildan beri o'qiyman. Juda yaxshi o'qituvchilar va zamonaviy usullarda darslar olib boriladi.",
      image: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      id: 3,
      name: "Madina Karimova",
      role: "Bitiruvchi",
      content: "Bu maktabda o'qiganimdan juda xursandman. Endi professional musiqachi bo'lib ishlayapman.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <div className="relative font-['Montserrat'] bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <Header />
      <Navbar />
      
      {/* === Hero Section with Slider === */}
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          className="h-full w-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index} className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50" />
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200">
                      {slide.subtitle}
                    </p>
                    <a
                      href={slide.buttonLink}
                      className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
                    >
                      {slide.buttonText}
                      <FaArrowRight className="ml-2" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* === About Section === */}
      <section className="py-16 md:py-24 bg-white" id="about">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img 
                src={slider_1} 
                alt="Maktab haqida"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Biz haqimizda</h3>
                <p className="text-sm opacity-90">30 yildan ortiq tajriba</p>
              </div>
            </motion.div>
            <div>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Maktabimiz haqida</h2>
                <p className="text-gray-600 mb-6">
                  Bizning maktabimizda bolalarga professional darajada san'at va musiqa ta'limi beriladi.
                  Tajribali o'qituvchilarimiz har bir o'quvchining qobiliyatini rivojlantirishga yordam beradi.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                        <FaMapMarkerAlt className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Manzil</h4>
                      <p className="text-sm text-gray-500">Toshkent shahri, Yunusobod tumani</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                        <FaPhoneAlt className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Telefon</h4>
                      <a href="tel:+998901234567" className="text-sm text-blue-600 hover:underline">+998 90 123 45 67</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                        <FaEnvelope className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium text-gray-900">Email</h4>
                      <a href="mailto:info@maktab.uz" className="text-sm text-blue-600 hover:underline">info@maktab.uz</a>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-3">Ish tartibi:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="font-medium w-24">Dushanba - Juma:</span>
                    <span>08:00 - 20:00</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="font-medium w-24">Shanba:</span>
                    <span>09:00 - 18:00</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <span className="font-medium w-24">Yakshanba:</span>
                    <span>Dam olish kuni</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Departments Section === */}
      <section className="py-16 md:py-24 bg-gray-50" id="departments">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Bo'limlarimiz</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bizning maktabimizda quyidagi yo'nalishlar bo'yicha ta'lim beriladi
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {departments.map((dept) => (
              <motion.div
                key={dept.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center text-3xl">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-600">{dept.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === News Section === */}
      <section className="py-16 md:py-24 bg-white" id="news">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Yangiliklar</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Maktabimizdagi eng so'nggi yangiliklar va tadbirlar haqida xabardor bo'ling
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    {new Date(item.date).toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  <a 
                    href={item.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group"
                  >
                    Batafsil o'qish
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a 
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
            >
              Barcha yangiliklar
            </a>
          </motion.div>
        </div>
      </section>

      {/* === Sections === */}
      <motion.section
        className="w-full py-12 bg-gray-50"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sky-900 text-center text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            Maktabda Faoliyat Ko'rsatayotgan Bo'limlar
          </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-white rounded-xl shadow-md h-32 sm:h-36 md:h-40 justify-center hover:shadow-xl hover:scale-105 transition"
              whileHover={{ y: -4 }}
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-1 sm:mb-2">
                <ErrorBoundary>
                  <Suspense fallback={
                    <div className="w-full h-full bg-gray-200 animate-pulse rounded" />
                  }>
                    <img 
                      src={sectionErrors[section.id] ? '' : section.img} 
                      alt="" 
                      className={`w-full h-full object-contain ${sectionErrors[section.id] ? 'hidden' : ''}`}
                      loading="lazy"
                      width="80"
                      height="80"
                      aria-hidden="true"
                      onError={() => setSectionErrors(prev => ({
                        ...prev,
                        [section.id]: true
                      }))}
                    />
                    {sectionErrors[section.id] && (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                        <MdErrorOutline className="text-gray-400 text-2xl" />
                      </div>
                    )}
                  </Suspense>
                </ErrorBoundary>
              </div>
              <div className="space-y-1">
                <h3 className="text-center text-xs sm:text-sm md:text-base font-semibold text-sky-900 line-clamp-2">
                  {section.title}
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-600 text-center hidden sm:block line-clamp-2 px-1">
                  {section.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

      <Numbers />
      <Footer />
    </div>
  );
};

export default React.memo(Home);
