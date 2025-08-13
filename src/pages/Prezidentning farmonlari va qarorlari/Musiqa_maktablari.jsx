import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Musiqa_maktablari = () => {
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
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 font-['Montserrat', 'sans-serif'] pt-24">O'zbekiston Respublikasi Prezidenti farmoni</h1>
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Bolalar musiqa va san'at maktablari rahbar, o'qituvchi va konsertmeystyerlari mehnatiga haq to'lash va ularni moddiy rag'batlantirish tizimini takomillashtirish to'g'risida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">Bolalar musiqa va san’at maktablarida ta’lim-tarbiya berish sifatini yangi bosqichga ko‘tarish, ko‘p yillar davomida o‘zining fidokorona xizmatlari bilan ta’lim samaradorligini oshirishga hissa qo‘shib kelayotgan bolalar musiqa va san’at maktablari rahbar va pedagog xodimlarining ijtimoiy himoyasini kuchaytirish, ularning ijodiy mahorati va mehnatini munosib rag‘batlantirish tizimini yanada takomillashtirish maqsadida:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi, Bandlik va mehnat munosabatlari vazirligi hamda Moliya vazirligining bolalar musiqa va san’at maktablari xodimlarining bazaviy tarif stavkalarini 2019-yil 1-oktabrdan:

direktor va direktor o‘rinbosarlari uchun — 1,5 baravarga;

o‘qituvchilar va konsertmeystyerlar uchun — 1,25 baravarga oshirish to‘g‘risidagi takliflari ma’qullansin.
<br/>
2. O‘zbekiston Respublikasi Madaniyat vazirligi manfaatdor vazirlik va idoralar bilan birgalikda ikki oy muddatda:

a) bolalar musiqa va san’at maktablarida o‘quv-tarbiya jarayonini tubdan yaxshilash maqsadida ilg‘or xorijiy tajribani o‘rganish asosida:

ta’lim sifatini baholashning zamonaviy tizimini ishlab chiqsin va tasdiqlasin;

axborot-kommunikatsiya texnologiyalaridan keng foydalanishni nazarda tutgan holda o‘quv reja va dasturlarni qayta ko‘rib chiqsin hamda tasdiqlasin;

b) bolalar musiqa va san’at maktablari:

rahbar xodimlari lavozimiga nomzodlarni tanlov asosida saralash amaliyotini joriy qilish va ularni rag‘batlantirishni kuchaytirish;

rahbar xodimlarining masofadan turib malakasini oshirish tizimini samarali tashkil etish va qamrovini kengaytirish;

o‘qituvchilari va konsertmeystyerlariga nisbatan malaka talablari, ular faoliyatini baholash tizimi hamda ta’limning mazmun va sifatiga qo‘yilgan davlat talablarini takomillashtirish choralarini ko‘rsin.
<br/>
3. O‘zbekiston Respublikasi Moliya vazirligi mazkur qarorni amalga oshirish bilan bog‘liq xarajatlarni moliyalashtirish uchun talab etiladigan zarur mablag‘larni 2019-yil uchun ajratsin hamda 2020-yildan boshlab O‘zbekiston Respublikasi Davlat budjeti xarajatlari parametrlarida nazarda tutsin.
<br/>
4. O‘zbekiston Respublikasi Madaniyat vazirligi manfaatdor vazirliklar va idoralar bilan birgalikda bir oy muddatda qonun hujjatlariga mazkur qarordan kelib chiqadigan o‘zgartirish va qo‘shimchalar to‘g‘risida Vazirlar Mahkamasiga takliflar kiritsin.
<br/>
5. Mazkur qarorning ijrosini nazorat qilish O‘zbekiston Respublikasining Bosh vaziri A.N. Aripov va O‘zbekiston Respublikasi Prezidentining maslahatchisi A.A. Abduvaxitov zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh.,<br />
              2019-yil 30-sentabr,
<br />
PQ-4468-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Prezidenti I. KARIMOV</p>
</div>              
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Musiqa_maktablari;