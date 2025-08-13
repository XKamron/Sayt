import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Madaniyat = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 flex-1 flex flex-col font-['Montserrat', 'sans-serif']">
        <div className="text-center mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 font-['Montserrat', 'sans-serif'] pt-24">O'ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING QARORI</h1>
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Madaniyat va san'at muassasalarini malakali mutaxassislar bilan ta'minlash va ularni davlat tomonidan tizimli qo'llab-quvvatlash to'g'risida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">Baxshichilik, an’anaviy xonandalik, sozandalik va fortepiano ijrochilik yo‘nalishlarida yuqori malakali kadrlar tayyorlashni kengaytirish va tahsil olayotgan talabalarni davlat tomonidan qo‘llab-quvvatlash, shuningdek, 2022-yil 30-iyun — Yoshlar kuni munosabati bilan bo‘lib o‘tgan uchrashuvlarda O‘zbekiston Respublikasi Prezidenti tomonidan ilgari surilgan tashabbuslarni amalga oshirish maqsadida Vazirlar Mahkamasi qaror qiladi:
<br/>
1. O‘zbekiston Respublikasi Prezidenti Sh.M. Mirziyoyev rahbarligida 30-iyun — Yoshlar kuni munosabati bilan bo‘lib o‘tgan uchrashuvda berilgan topshiriqlarning 54-sonli bayoni 3-bandiga muvofiq, 2022/2023 o‘quv yilidan boshlab:

maqom xonandaligi, maqom cholg‘u ijrochiligi va baxshichilik yo‘nalishlariga yangi qabul qilingan talabalarning shartnoma to‘lovlari davlat tomonidan to‘liq qoplab berilishi;

fortepiano ijrochilarini tayyorlash bo‘yicha qabul kvotasini 3 baravarga ko‘paytirib, talabalarning kontrakt to‘lovlarini to‘liq qoplab berilishi belgilanganligi ma’lumot uchun qabul qilinsin.
<br/>

2. Belgilansinki:

ilovaga muvofiq tasdiqlangan bakalavriat ta’lim yo‘nalishlari ro‘yxatiga kiritilgan O‘zbekiston Respublikasi Madaniyat vazirligi tizimidagi oliy ta’lim muassasalarining kunduzgi ta’lim shaklida to‘lov-kontrakt asosida o‘qishga yangi qabul qilingan birinchi bosqich talabalarining (keyingi o‘rinlarda — talabalarning) 2022/2023 o‘quv yili uchun to‘lov-kontrakt (stipendiyasiz) summasi 2022-yil 15-noyabrga qadar O‘zbekiston Respublikasi Madaniyat vazirligiga Davlat budjetidan ajratilgan mablag‘lar doirasida;

kelgusi o‘quv yilidan boshlab esa 15-sentabrga qadar Madaniyat vazirligiga Davlat budjetidan ushbu maqsadlar uchun ajratilgan qo‘shimcha mablag‘lar hisobidan qoplanadi;

talabalarning to‘lov-kontrakt summasi uchun ajratiladigan mablag‘lar hajmi Madaniyat vazirligi tizimidagi oliy ta’lim muassasalariga budjet tizimi budjetlari xarajatlarining iqtisodiy tasnifi bo‘yicha 48 21 190 “Boshqa xarajatlar” moddasida bir satrda rejalashtirilgan holda aks ettiriladi;

talabalarning to‘lov-kontrakt summasi uchun ajratilgan mablag‘lar oliy ta’lim muassasalarining budjetdan tashqari (to‘lov-kontrakt) mablag‘lari bo‘yicha shaxsiy g‘azna hisobvarag‘iga o‘tkaziladi hamda belgilangan tartibda sarflanadi.
<br/>

3. O‘zbekiston Respublikasi Madaniyat vazirligi uch kun muddatda to‘lov-kontrakt summasi Davlat budjeti mablag‘lari hisobidan to‘lab beriladigan bakalavriat ta’lim yo‘nalishlari bo‘yicha o‘qishga yangi qabul qilingan talabalarning ro‘yxatini shakllantirsin hamda to‘lov-kontrakt summalarini tegishli oliy ta’lim muassasalariga o‘tkazib berilishini ta’minlasin.
<br/>

4. O‘zbekiston Respublikasi Madaniyat vazirligi Iqtisodiy taraqqiyot va kambag‘allikni qisqartirish vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi bilan kelishilgan holda haqiqiy ehtiyojdan kelib chiqib O‘zbekiston davlat konservatoriyasiga “Fortepiano (organ)” bakalavriat ta’lim yo‘nalishi bo‘yicha to‘lov-kontrakt asosidagi qabul parametrini 2023/2024 o‘quv yilidan boshlab uch baravargacha oshirgan holda tasdiqlasin.
<br/>

5. Ushbu qarorning bajarilishini nazorat qilish O‘zbekiston Respublikasi Bosh vaziri o‘rinbosari — turizm va madaniy meros vaziri A.A. Abduxakimov hamda O‘zbekiston Respublikasi madaniyat vaziri O.A. Nazarbekov zimmasiga yuklansin.


          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2022-yil 2-noyabr,
<br />
633-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Bosh vaziri A. ARIPOV</p>
    <p>Vazirlar Mahkamasining 2022-yil 2-noyabrdagi 633-son qaroriga
    ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">Madaniyat vazirligi tizimidagi oliy ta’lim muassasalarining kunduzgi ta’lim shaklida to‘lov-kontrakt asosida o‘qishga yangi qabul qilingan birinchi bosqich talabalarining to‘lov-kontrakt summasi Davlat budjeti mablag‘lari hisobidan qoplab beriladigan bakalavriat ta’lim yo‘nalishlari
          RO‘YXATI</p>
        </div>

        {/* Bakalavriat ta'lim yo'nalishlari jadvali */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-400 text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-400 px-3 py-2 text-center font-bold">T/r</th>
                <th className="border border-gray-400 px-3 py-2 text-center font-bold">Ta'lim yo'nalishi shifri</th>
                <th className="border border-gray-400 px-3 py-2 text-center font-bold">Ta'lim yo'nalishlari va mutaxassisliklari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">1</td>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">60112400</td>
                <td className="border border-gray-400 px-3 py-2 text-left align-top">
                  Professional ta'lim:<br/>
                  vokal san'ati (an'anaviy xonandalik)<br/>
                  cholg'u ijrochiligi (an'anaviy cholg'ular)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">2</td>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">60211400</td>
                <td className="border border-gray-400 px-3 py-2 text-left align-top">
                  Vokal san'ati (an'anaviy xonandalik)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">3</td>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">60211500</td>
                <td className="border border-gray-400 px-3 py-2 text-left align-top">
                  Cholg'u ijrochiligi: (an'anaviy cholg'ular)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">4</td>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">60211900</td>
                <td className="border border-gray-400 px-3 py-2 text-left align-top">
                  Baxshichilik va dostonchilik
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">5</td>
                <td className="border border-gray-400 px-3 py-2 text-center align-top">60211501</td>
                <td className="border border-gray-400 px-3 py-2 text-left align-top">
                  Fortepiano (organ)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Madaniyat;