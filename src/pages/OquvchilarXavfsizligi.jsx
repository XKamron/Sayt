import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  pj1, pj2, pj3, pj4, pj5, pj6, 
  pj20_1, pj20_2, pj20_3, pj20_4, pj20_7, pj20_8,
  yol1, yol2, yol3, yol4, yol5, yol6, 
  xs1, xs2, xs3, xs4, xs5, xs7,
  ognetush_1_1, ognetush_1_2, ognetush_1_3, ognetush_1_4, ognetush_1_5, ognetush_1_6
} from '../img';

const SafetyItem = ({ image, text, isWrong = false }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100"
      aria-label={text}
    >
       <div className="relative mb-4 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
        <AnimatePresence>
          {!isImageLoaded && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse"
            />
          )}
        </AnimatePresence>
       <img 
          src={image} 
          alt="" 
          className={`w-full h-full object-contain transition-opacity duration-300 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsImageLoaded(true)}
          loading="lazy"
        />
        {isWrong && (
          <div 
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md"
            aria-hidden="true"
          >
            ✕
          </div>
      )}
      </div>
      <p className="text-center text-sm md:text-base font-medium text-gray-800 leading-relaxed">
        {text}
      </p>
    </motion.div>
  );
};

const SafetySection = ({ title, items, id }) => (
  <section id={id} className="scroll-mt-20 mb-16">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h2>
      <div className="w-20 h-1  mx-auto mt-2 rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <SafetyItem 
          key={`${id}-${index}`}
          image={item.image}
          text={item.text}
          isWrong={item.isWrong}
        />
      ))}
    </div>
  </section>
);


const OquvchilarXavfsizligi = () => {
  // removed activeSection state as it was unused




  const fireOccurrence = [
    { image: pj1, text: "Yonayotgan elektr asboblarini suv bilan o'chirma.", isWrong: true },
    { image: pj2, text: "Oynalarni ochma.", isWrong: true },
    { image: pj3, text: "Yong'in paytida berkinib olish mumkin emas.", isWrong: true },
    { image: pj4, text: "Binoni tark etishga urin.", isWrong: false },
    { image: pj5, text: "Yong'in paytida liftdan foydalanish mumkin emas.", isWrong: true },
    { image: pj6, text: "Yong'in haqida qo'shinlarga xabar ber va ulardan yong'in o'chiruvchilarni chaqirishlarini so'ra", isWrong: false },
  ];

  const fireSafetyRules = [
    { image: pj20_1, text: "Nosoz elektrasboblardan foydalanma. Ularni qarovsiz qoldirma.", isWrong: true },
    { image: pj20_2, text: "Sim va elektrasboblarni ho'l qo'llaring bilan ushlama.", isWrong: true },
    { image: pj20_3, text: "Olov bilan o'ynama.", isWrong: true },
    { image: pj20_4, text: "Kattalarsiz yonuvchi suyuqliklardan (atseton, benzin, kerosin) foydalanma", isWrong: true },
    { image: pj20_7, text: "Plitani qarovsiz qoldirma. Zarurat bo'lmaganda uni yoqma.", isWrong: true },
    { image: pj20_8, text: "Archa oldida tezda alanga oluvchi vositalardan foydalanma", isWrong: true },
  ];

  const roadSafetyRules = [
    { image: yol1, text: "Harakatkanayotgan mashinalar oldidan ko'chani chopib kesib o'tma.", isWrong: true },
    { image: yol2, text: "Yo'ldan faqat svetoforning yashil chirog'i yonganida o't.", isWrong: true },
    { image: yol3, text: "Ko'chaning mashina yuradigan qismida o'ynash man etiladi.", isWrong: true },
    { image: yol4, text: "Ko'chani yerosti yo'li orqali kesib o't.", isWrong: true },
    { image: yol5, text: "Ko'chani piyodalar yo'lchasi orqali kesib o't (zebra - piyodalar yuradigan chiziq).", isWrong: true },
    { image: yol6, text: "Agar yo'ldan o'tishga ulgurmagan bo'lsang ko'chaning markaziy chizig'ida to'xta va svetoforning yashil chirog'i yonishini kut.", isWrong: true },
  ];

  const generalSafetyRules = [
    { image: xs1, text: "Iflos qo'llar bilan ovqat yema.", isWrong: true },
    { image: xs2, text: "Suyuqlik va dorilarni tatib ko'rma.", isWrong: true },
    { image: xs3, text: "Elektr tokidan ehtiyot bo'l.", isWrong: true },
    { image: xs4, text: "Qarovsiz jonivorlar bilan o'ynama.", isWrong: true },
    { image: xs5, text: "Notanish kishilarga eshik yoki derazani ochma.", isWrong: true },
    { image: xs7, text: "O'tkir va kesadigan narsalarni o'ynama.", isWrong: true },
  ];


  return (
<div className="min-h-screen flex flex-col bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      

        <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            O'quvchilar xavfsizligi
          </h1>
          
          <SafetySection 
            id="fire-occurrence"
            title="Yong'in sodir bo'lganda quyidagilarni bajar:"
            items={fireOccurrence}
          />
          
          <SafetySection 
            id="fire-safety"
            title="Yong'in xavfsizligi qoidalariga rioya qil:"
            items={fireSafetyRules}
          />
          
          <SafetySection 
            id="road-safety"
            title="Yo'l xavfsizligi qoidalari:"
            items={roadSafetyRules}
          />
          
          <SafetySection 
            id="general-safety"
            title="Umumiy xavfsizlik qoidalari:"
            items={generalSafetyRules}
          />
          
          <section className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Yong'in xavfsizligi qoidalariga rioya qil:
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch">
  <div className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-sm mb-4 md:mb-0">
    <p>- Zudlik bilan yong'in xavfsizligi xizmatiga xabar ber;</p>
    <p>- Odamlarni va hayvonlarni xavfsiz joyga olib chiq;</p>
    <p>- Оlovni suv, qum, o't o'chirgich va shu kabilar bilan o'chir;</p>
    <p>- Yong'in sodir bo'lgan xonaning eshigini zarurat bo'lmasa ochma, chunki ochiq eshik yong'inni yanada kuchaytiradi.</p>
  </div>
  <div className="flex-1 bg-white rounded-lg p-4 md:p-6 shadow-sm">
    <p>- Elvizak bo'lmasligi uchun boshqa xonalardagi oynalarni, eshiklarni yop;</p>
    <p>- Yetib kelgan o't o'chiruvchilarning barcha buyruqlarini bajar, ularga qo'lingizdan kelgunicha yordam ber.</p>
    <p>Ma'muriyatning ruxsatisiz bolalar yong'in o'chirishda va mol-mulkni qutqarishda ishtirok etmaydi.</p>
  </div>
</div>
          </section>
          <section className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                O't o'chirgich bilan ishlash usullari:
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
  <div className="flex-1 space-y-4">
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_1} alt="O't o'chirgich 1" className="w-20 h-20 object-contain" />
      <p className="text-sm">Yong'in o'chirayotgan modda oqimi uzunligidan oshmaydigan masofada olovga yaqinlash (ochiq joyda shamolga ro'para tomondan).</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_2} alt="O't o'chirgich 2" className="w-20 h-20 object-contain" />
      <p className="text-sm">Tekis yuzada yong'in o'chirayotgan modda oqimini yong'inning asosiy qismiga yo'naltir.</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_3} alt="O't o'chirgich 3" className="w-20 h-20 object-contain" />
      <p className="text-sm">Yong'in chuqurlashgan joyda yong'in o'chirayotgan modda oqimini yong'inning yuqori qismidan yo'naltir.</p>
    </div>
  </div>
  <div className="flex-1 space-y-4">
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_4} alt="O't o'chirgich 4" className="w-20 h-20 object-contain" />
      <p className="text-sm">Devorda (konstruksiyada) yong'in o'chirayotgan modda oqimini pastdan tepaga harakat qilgan holda yong'inning yuqori qismidan zigzag shaklida yo'naltir.</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_5} alt="O't o'chirgich 5" className="w-20 h-20 object-contain" />
      <p className="text-sm">Zarur bo'lganda yong'inni bir necha o't o'chirgich bilan o'chir.</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
      <img src={ognetush_1_6} alt="O't o'chirgich 6" className="w-20 h-20 object-contain" />
      <p className="text-sm">Yong'in o'chirgandan so'ng yong'in qaytadan sodir bo'lmasligini nazorat qil.</p>
    </div>
  </div>
</div>
          </section>
        </div>
      </main>

      <Footer />
      

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default OquvchilarXavfsizligi;