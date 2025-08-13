import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Bolalarmusiqa_maktabi = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col font-['Montserrat', 'sans-serif']">
        <div className="text-center mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 mb-2 font-['Montserrat', 'sans-serif']">O'ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING QARORI</h1>
          <h2 className="text-base sm:text-lg md:text-xl text-gray-700 font-['Montserrat', 'sans-serif']">Bolalar musiqa va san'at maktablari to'g'risidagi nizomni tasdiqlash haqida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">O‘zbekiston Respublikasi Prezidentining “Bolalar musiqa va san’at maktablari faoliyatini yanada takomillashtirish bo‘yicha 2016 — 2020-yillarga mo‘ljallangan Davlat dasturi to‘g‘risida” 2015-yil 20-noyabrdagi PQ-2435-son qaroriga muvofiq O‘zbekiston Respublikasi Vazirlar Mahkamasi qaror qiladi:
<br/>
1. Bolalar musiqa va san’at maktablari to‘g‘risidagi nizom ilovaga muvofiq tasdiqlansin.
<br/>
2. O‘zbekiston Respublikasi Xalq ta’limi vazirligi ikki oy muddatda O‘zbekiston Respublikasi Moliya vazirligi bilan kelishgan holda:
bolalar musiqa va san’at maktablarini musiqa asboblari, maxsus mebellar, asbob-uskunalar va boshqa anjomlar bilan jihozlash normativlari;
musiqa va san’at yo‘nalishlarida ta’lim berishning ilg‘or xorijiy tajribasini hisobga olgan holda takomillashtirilgan o‘quv rejasi tasdiqlanishini ta’minlasin.
<br/>
3. O‘zbekiston Respublikasi Xalq ta’limi vazirligi uch oy muddatda bolalar musiqa va san’at maktablarining namunaviy ustavini ishlab chiqsin va tasdiqlasin.
<br/>
4. Vazirlar Mahkamasining 1995-yil 18-fevraldagi 59-son qarori (O‘zbekiston Respublikasi QT, 1995-y., 2-son, 5-modda) bilan tasdiqlangan Maktabdan tashqari muassasa to‘g‘risidagi nizomning 2-bandi ikkinchi xatboshisi quyidagi tahrirda bayon qilinsin:

“Bolalar musiqa va san’at maktablari hamda “Barkamol avlod” bolalar markazlari faoliyatining xususiyatlari Vazirlar Mahkamasining alohida qarorlarida belgilanadi”.
<br/>
5. Vazirliklar va idoralar o‘zlari qabul qilgan normativ-huquqiy hujjatlarni bir oy muddatda ushbu qarorga muvofiqlashtirsinlar.
<br/>
6. Mazkur qarorning bajarilishini nazorat qilish O‘zbekiston Respublikasi Bosh vazirining o‘rinbosari B.Y. Xodiyev zimmasiga yuklansin.</p>
<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 space-y-4 sm:space-y-0 font-medium text-sm sm:text-base font-["Montserrat", "sans-serif"]'>
              <p className='text-center w-full sm:w-auto'>Toshkent sh., <br />
              2016-yil 5-may,
<br />
144-son</p>
            <div className='flex flex-col items-end w-full sm:w-auto text-right'>
              <p>O‘zbekiston Respublikasining Bosh vaziri Sh. MIRZIYOYEV 
              </p>
              <p className='pt-5'>Vazirlar Mahkamasining 2016-yil 5-maydagi 144-son qaroriga
              ILOVA 
              </p>
            </div>
            </div>
        </div>
        <div className="text-center mb-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 mb-4 font-['Montserrat', 'sans-serif']">Bolalar musiqa va san'at maktablari to'g'risida NIZOM</h2>
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4 font-['Montserrat', 'sans-serif']">I. Umumiy qoidalar</h3>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">O‘zbekiston Respublikasi Prezidentining “Bolalar musiqa va san’at maktablari faoliyatini yanada takomillashtirish bo‘yicha 2016 — 2020-yillarga mo‘ljallangan Davlat dasturi to‘g‘risida” 2015-yil 20-noyabrdagi PQ-2435-son qaroriga muvofiq O‘zbekiston Respublikasi Vazirlar Mahkamasi qaror qiladi:
<br/>
1. Mazkur Nizom uzluksiz ta’lim tizimining majburiy bo‘lmagan turi hisoblangan, maktabdan tashqari ta’lim berishga mo‘ljallangan davlat bolalar musiqa va san’at maktabining (keyingi o‘rinlarda — bolalar musiqa va san’at maktabi) faoliyat ko‘rsatish tartibini belgilaydi.
<br/>
2. Bolalar musiqa va san’at maktabi o‘z faoliyatida O‘zbekiston Respublikasi Konstitutsiyasi va qonunlariga, O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Vazirlar Mahkamasining qarorlariga, ushbu Nizomga, boshqa normativ-huquqiy hujjatlarga hamda o‘z ustaviga amal qiladi.
<br/>
3. Bolalar musiqa va san’at maktabi davlat muassasasi shaklidagi yuridik shaxs hisoblanadi va o‘z ustaviga, mustaqil balansiga, shaxsiy g‘azna hisobvaraqlariga, O‘zbekiston Respublikasining Davlat gerbi tasviri tushirilgan va o‘z nomi yozilgan muhrga, shtampga va blankalarga ega bo‘ladi.
<br/>
4. Bolalar musiqa va san’at maktabi belgilangan tartibda mahalliy davlat hokimiyati organlarida davlat ro‘yxatidan o‘tkaziladi.

Bolalar musiqa va san’at maktabining namunaviy ustavi O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan tasdiqlanadi.
<br/>
5. Bolalar musiqa va san’at maktabida ta’lim olish to‘lov asosida amalga oshiriladi. To‘lovni to‘lash va undan ozod etish masalalari qonunchilikda belgilanadi.
</p>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 my-4">II. Bolalar musiqa va san'at maktabining maqsadi va vazifalari</h3>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">O‘zbekiston Respublikasi Prezidentining “Bolalar musiqa va san’at maktablari faoliyatini yanada takomillashtirish bo‘yicha 2016 — 2020-yillarga mo‘ljallangan Davlat dasturi to‘g‘risida” 2015-yil 20-noyabrdagi PQ-2435-son qaroriga muvofiq O‘zbekiston Respublikasi Vazirlar Mahkamasi qaror qiladi:
<br/>
6. Bolalar musiqa va san’at maktabining asosiy maqsadi yosh avlodning musiqa va san’at turlariga qiziqishi va qobiliyatini rivojlantirish, ijtimoiy faolligini oshirish, ularni xalqimiz an’analariga va milliy qadriyatlarimizga nisbatan hurmat ruhida tarbiyalash, ma’naviy va ma’rifiy saviyasini har tomonlama oshirishdan iborat.
<br/>
7. Quyidagilar bolalar musiqa va san’at maktabining asosiy vazifalari hisoblanadi:

o‘quvchilarning ma’naviy va estetik rivojlanishi uchun keng imkoniyatlar yaratish;

o‘quvchilarning iste’dodini har tomonlama kamol toptirish, madaniy saviyasini yuksaltirish;

o‘quvchilarni milliy va jahon musiqasi, tasviriy san’atning yuksak namunalaridan va o‘zbek xalqining mumtoz musiqa merosi durdonalaridan bahramand bo‘lishi uchun zarur sharoitlar yaratish;

milliy hamda umuminsoniy qadriyatlarni uzviy birlashtirish asosida o‘quvchilarda yuksak axloqiy fazilatlarni shakllantirish;

o‘quvchilarga umumiy musiqa, xoreografiya, teatr san’ati, tasviriy va amaliy san’at yo‘nalishlari bo‘yicha bilimlarning boshlang‘ich asoslarini o‘rgatish orqali ularni musiqa va san’at olamiga jalb etish;

iqtidorli o‘quvchilarni musiqa va san’at yo‘nalishlari bo‘yicha o‘rta maxsus, professional ta’lim muassasalarida o‘qishini davom ettirish uchun tayyorlash.
</p>
        </div>
        <div className="text-center mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 my-4">III. Bolalar musiqa va san'at maktabi faoliyatini tashkil etish</h3>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">8. Bolalar musiqa va san’at maktabi Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahri hokimliklarining qarori bilan tashkil etiladi.
<br/>
9. Bolalar musiqa va san’at maktabi o‘quvchilarning qiziqishlari va ehtiyojlariga ko‘ra, ularning ijodiy imkoniyatlarini yanada rivojlantirishga yo‘naltirilgan musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) va san’at (xoreografiya, teatr san’ati, tasviriy va amaliy san’at) yo‘nalishlarida (keyingi o‘rinlarda ta’lim yo‘nalishlari deb ataladi) faoliyatini amalga oshiradi.
<br/>
10. Bolalar musiqa va san’at maktabida o‘quvchilarga ta’lim berish yakka tartibda yoki bir xil yoshdagi va turli yoshdagi bolalar guruhlarida ularning qiziqishlariga ko‘ra bir yoxud bir necha ta’lim yo‘nalishlari bo‘yicha amalga oshiriladi.
<br/>
11. Bolalar musiqa va san’at maktabida o‘quv-tarbiyaviy ishlar O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan tasdiqlanadigan o‘quv rejalari va o‘quv dasturlari asosida amalga oshiriladi.
<br/>
12. Bolalar musiqa va san’at maktabida o‘quv-tarbiya jarayonini tashkil qilish uchun muassasa direktorining buyrug‘i asosida ta’lim yo‘nalishlari bo‘yicha bo‘linmalar tashkil etilishi mumkin.
</p>
        </div>
        <div className="text-center mb-6">
          <p className="text-xl font-bold">IV. Bolalar musiqa va san’at maktabiga o‘qishga qabul qilish, o‘qishni ko‘chirish</p>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">13. Bolalar musiqa va san’at maktabi rahbariyati har yili iyun — avgust oylarida o‘qishga qabul qilish ishlarini tashkil etadi.

O‘quvchilar bolalar musiqa va san’at maktabiga O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan belgilanadigan qabul kvotalari doirasida o‘qishga qabul qilinadi.

Qabul kvotalari bolalar musiqa va san’at maktabining quvvati, moddiy-texnika bazasi, kadrlar bilan ta’minlanganlik darajasi, ta’lim yo‘nalishlari bo‘yicha talab va ehtiyojlarni inobatga olgan holda shakllantiriladi.
<br/>
14. Bolalar musiqa va san’at maktabida qabul sinovlari o‘tkazish uchun muassasa direktorining buyrug‘i bilan 5 kishidan iborat tarkibda qabul komissiyasi tuziladi.
<br/>
15. Qabul komissiyasi tarkibiga muassasa direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va pedagog xodimlar kiritiladi. Muassasa direktori qabul komissiyasi raisi hisoblanadi.
<br/>
16. Bolalar musiqa va san’at maktabiga o‘qishga kirish uchun o‘quvchining ota-onasi yoki ularning o‘rnini bosuvchi shaxslar (keyingi o‘rinlarda ota-onalar deb ataladi) har yili 1-avgust — 25-avgust mobaynida qabul komissiyasiga quyidagi hujjatlarni taqdim etadi:
<br/>
a) ta’lim yo‘nalishi (yo‘nalishlari) ko‘rsatilgan ariza;
<br/>
b) o‘quvchining tug‘ilganlik haqidagi guvohnomasi nusxasi;
<br/>
c) o‘quvchiga belgilangan shaklda berilgan tibbiy ma’lumotnoma;
<br/>
d) 3 x 4 o‘lchamli 2 ta fotosurat.
17. Qabul sinovlari har yili 31-avgustgacha o‘quvchining ijodiy qobiliyatini aniqlash maqsadida o‘tkaziladi.
Qabul sinovlari qabul komissiyasi huzurida o‘tkaziladi. Qabul sinovlari bir marta topshiriladi, qayta topshirishga yo‘l qo‘yilmaydi.
<br/>
18. Qabul komissiyasi ota-onaning arizasida ko‘rsatilgan ta’lim yo‘nalishi bo‘yicha o‘quvchining quyidagi ijodiy qobiliyatini qabul sinovlarida aniqlaydi:

musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) yo‘nalishi bo‘yicha musiqa ritmiga moslashishi, qo‘shiq aytishi, musiqani eshitishi va eslab qolishi;

san’at yo‘nalishlari:

xoreografiya bo‘yicha jismonan ma’qulligi (tana va oyoqlarning egiluvchanligi), ritmga moslashishi, musiqani eshitishi;

tasviriy va amaliy san’at mutaxassisliklari bo‘yicha tasavvuridagi narsa-buyum yoki manzarani chiza olishi;

teatr san’ati mutaxassisliklari bo‘yicha she’r yoki monologni yoddan ifodali o‘qishi va ovoz yoki harakatga nisbatan taqlid qila olishi.
<br/>
19. Bolalar musiqa va san’at maktabining ikkinchi va undan yuqori sinflariga qabul qilish uchun o‘quvchilar mazkur Nizomning 18-bandida nazarda tutilgan qabul sinovlaridan tashqari O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan tasdiqlangan o‘quv dasturlari bo‘yicha tegishli sinfdagi bilim darajasiga qo‘yiladigan talablar asosida quyidagi maxsus fanlar bo‘yicha ham qabul sinovlarini topshiradilar:
<br/>
a) musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) yo‘nalishi bo‘yicha — mutaxassislik va solfedjio fani;
<br/>
b) san’at yo‘nalishlari bo‘yicha:
xoreografiya — mumtoz raqs, parter fani;

tasviriy va amaliy san’at — chizma tasvir, rang tasvir, kompozitsiya fani;

teatr san’ati — aktyorlik mahorati, sahna nutqi, sahna harakati fani.
<br/>
20. O‘quvchining sinovdan o‘tgan yoki o‘tmaganligi qabul komissiyasi a’zolarining ochiq ovoz berishi yo‘li bilan aniqlanadi. Qabul komissiyasi a’zolarining ko‘pchiligi ijobiy ovoz bergan taqdirda o‘quvchi qabul sinovidan o‘tgan hisoblanadi.
Qabul komissiyasining raisi barcha a’zolardan so‘ng ovoz beradi. Ovozlar soni teng bo‘lib qolganda qabul komissiyasi raisining ovozi hal qiluvchi hisoblanadi.
<br/>
21. Qabul komissiyasi o‘quvchini o‘qishga qabul qilish yoki qabul qilmaslik to‘g‘risida qaror qabul qiladi. Qabul komissiyasining ijobiy qaroriga asosan muassasa direktori o‘quvchini o‘qishga qabul qilish to‘g‘risida buyruq chiqaradi.

O‘quvchilarni o‘quv yili davomida o‘qishga qabul qilishga yo‘l qo‘yilmaydi, boshqa bolalar musiqa va san’at maktabidan o‘qishi ko‘chirilgan o‘quvchilar bundan mustasno.
<br/>
22. O‘quvchining ota-onasi o‘z xohishiga ko‘ra o‘quv yili davomida yoki u tugagandan so‘ng farzandini o‘qiyotgan bolalar musiqa va san’at maktabidan boshqasiga o‘tkazish huquqiga ega.
O‘quvchilar ota-onalarining arizasi asosida o‘qiyotgan bolalar musiqa va san’at maktabidan boshqasiga ta’lim olayotgan ta’lim yo‘nalishi bo‘yicha o‘tkaziladi.
<br/>
23. O‘qiyotgan bolalar musiqa va san’at maktabidan boshqasiga o‘tkazilgan o‘quvchilar tomonidan o‘qishni davom ettirish uchun tanlangan maktabga quyidagi hujjatlar taqdim etiladi:

o‘qigan joyidan ma’lumotnoma;

o‘quvchining baholar (o‘zlashtirish) tabeli;

yakka tartibdagi ish rejasi (musiqa yo‘nalishlari uchun).
<br/>
24. O‘quvchini bir ta’lim yo‘nalishidan boshqa ta’lim yo‘nalishiga o‘tkazish bolalar musiqa va san’at maktabidagi ta’limning birinchi va ikkinchi yilida amalga oshiriladi.

Yuqori sinflarda bir ta’lim yo‘nalishidan boshqa ta’lim yo‘nalishiga o‘tkazishga yo‘l qo‘yilmaydi.
<br/>
25. Bir ta’lim yo‘nalishidan boshqasiga o‘tkazish muassasa direktorining buyrug‘iga asosan 5 kishidan iborat tarkibda tuziladigan o‘quvchilarning o‘qishini bir ta’lim yo‘nalishidan boshqasiga ko‘chirish komissiyasining (keyingi o‘rinlarda ko‘chirish komissiyasi deb ataladi) qaroriga asosan amalga oshiriladi.

Ko‘chirish komissiyasi tarkibiga muassasa direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va pedagog xodimlar kiritiladi. Muassasa direktori ko‘chirish komissiyasi raisi hisoblanadi.

Ko‘chirish komissiyasi o‘quv yili davomida faoliyat yuritadi.
<br/>
26. Ko‘chirish komissiyasi tomonidan bir ta’lim yo‘nalishidan boshqasiga o‘tkazishda o‘quvchining maktabdan tashqari ta’limga qo‘yiladigan mazkur yo‘nalish bo‘yicha davlat ta’lim talablarining minimal darajasini bilishi hisobga olinadi.
<br/>
27. Ko‘chirish komissiyasining qarori o‘quvchiga darhol e’lon qilinadi. Ko‘chirish komissiyasining qarori ijobiy bo‘lgan taqdirda, unga asosan muassasa direktori o‘quvchini tanlagan ta’lim yo‘nalishiga o‘tkazish to‘g‘risida buyruq chiqaradi.
<br/>
28. Bolalar musiqa va san’at maktabida o‘quvchilar kontingenti bir yilda bir marta — sentyabr oyida tasdiqlanadi.
<br/>
29. Bolalar musiqa va san’at maktabi direktori bilan o‘qishga qabul qilingan o‘quvchilarning ota-onalari o‘rtasida o‘qish muddatiga shartnoma tuziladi.
</p>
        </div>
        <div className="text-center mb-6">
          <p className="text-xl font-bold">V. Bolalar musiqa va san’at maktabida o‘quv-tarbiya jarayonini tashkil etish</p>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">30. Bolalar musiqa va san’at maktabida musiqa (fortepiano, torli cholg‘ular, estrada cholg‘u ijrochiligi, xalq cholg‘ulari, damli va zarbli cholg‘ular, an’anaviy cholg‘u ijrochiligi, an’anaviy xonandalik, akademik xonandalik, estrada xonandaligi) va san’at (xoreografiya, tasviriy san’at, amaliy san’at, teatr san’ati) ta’lim yo‘nalishlari mavjud bo‘lib, bolalarni 1-sinfga qabul qilish yoshi va o‘qish muddatlari quyidagicha belgilanadi:
</p>
        </div>
        {/* Educational Directions Table */}
        <div className="mb-8 overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm mt-4 mb-8 min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 py-2 text-left font-semibold">NN</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Ta'lim yo'nalishi</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-semibold">Qabul yoshi</th>
                <th className="border border-gray-300 px-2 py-2 text-left font-semibold">O'qish muddati</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-2 font-semibold bg-gray-50" colSpan="4">
                  Musiqa yo'nalishi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">1</td>
                <td className="border border-gray-300 px-2 py-2">Fortepiano</td>
                <td className="border border-gray-300 px-2 py-2">6-9</td>
                <td className="border border-gray-300 px-2 py-2">7 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">2</td>
                <td className="border border-gray-300 px-2 py-2">Torli cholg'ular</td>
                <td className="border border-gray-300 px-2 py-2">6-9</td>
                <td className="border border-gray-300 px-2 py-2">7 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">3</td>
                <td className="border border-gray-300 px-2 py-2">
                  Estrada cholg'u ijrochiligi:<br/>
                  • fortepino, torli cholg'ular<br/>
                  • damli va zarbli cholg'ular
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  6-9<br/>
                  6-11
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  7 yil<br/>
                  5 yil
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">4</td>
                <td className="border border-gray-300 px-2 py-2">Damli va zarbli cholg'ular</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">5</td>
                <td className="border border-gray-300 px-2 py-2">Xalq cholg'ulari</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">6</td>
                <td className="border border-gray-300 px-2 py-2">An'anaviy cholg'u ijrochiligi</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">7</td>
                <td className="border border-gray-300 px-2 py-2">Akademik xonandalik</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">8</td>
                <td className="border border-gray-300 px-2 py-2">An'anaviy xonandalik</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">9</td>
                <td className="border border-gray-300 px-2 py-2">Estrada xonandaligi</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2 font-semibold bg-gray-50" colSpan="4">
                  San'at yo'nalishi
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">10</td>
                <td className="border border-gray-300 px-2 py-2">Xoreografiya</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">11</td>
                <td className="border border-gray-300 px-2 py-2">Tasviriy san'at</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">12</td>
                <td className="border border-gray-300 px-2 py-2">Amaliy san'at</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-2 py-2">13</td>
                <td className="border border-gray-300 px-2 py-2">Teatr san'ati</td>
                <td className="border border-gray-300 px-2 py-2">6-11</td>
                <td className="border border-gray-300 px-2 py-2">5 yil</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
          <p className="text-left">31. O‘quv yili bolalar musiqa va san’at maktabida 2-sentabrdan kelgusi yilning 31-mayiga qadar davom etadi va to‘rtta chorakka bo‘linadi.
            <br/>
            32. O‘quv-tarbiya jarayonini tashkil etishda quyidagi muddatlarga amal qilinadi:

o‘quv yilining davomiyligi — 34 hafta;

o‘quv haftasining davomiyligi — 6 kun;

dars mashg‘ulotining davomiyligi — 45 daqiqa;

dars mashg‘ulotlari oralig‘idagi tanaffusning davomiyligi — 5 daqiqa.

Mehnat to‘g‘risidagi qonunchilikda bayram (ishlanmaydigan) kuni deb belgilangan kunlarda dars mashg‘ulotlari o‘tkazilmaydi.

Bayram (ishlanmaydigan) kunlariga to‘g‘ri kelib qolgan dars mashg‘ulotlarining mavzulari o‘quv dasturlarini ixchamlashtirgan holda keyingi dars mashg‘ulotlarida o‘tkaziladi.
<br/>
33. O‘quv yili davomidagi ta’tillarning muddatlari quyidagicha belgilanadi:

kuzgi ta’til — 4-noyabrdan boshlab 6 kalendar kun;

qishki ta’til — 28-dekabrdan boshlab 14 kalendar kun;

bahorgi ta’til — 21-martdan boshlab 7 kalendar kun;

yozgi ta’til — 1-iyundan (san’at yo‘nalishlari o‘quvchilari uchun 16-iyundan) boshlab 2-sentabrgacha.

Ta’tilning oxirgi kuni bayram (ishlanmaydigan) kunga to‘g‘ri kelib qolgan taqdirda dars mashg‘ulotlari keyingi ish kunidan boshlab davom ettiriladi.

Choraklar oralig‘idagi ta’tillar davrida bolalar musiqa va san’at maktabining pedagog xodimlari tomonidan mashg‘ulotlarning o‘ziga xos ijodiy dasturlarini ishlab chiqish, o‘zlashtirishi past bo‘lgan o‘quvchilarning bilim saviyasini tahlil qilish va ular bilan qo‘shimcha ishlash, ularga maslahatlar berish, ota-onalar va o‘quvchilar o‘rtasida musiqa va san’atning inson ma’naviy va madaniy saviyasini oshirishdagi o‘rnini targ‘ib-tashviq qilish maqsadida tadbirlar tashkil etish, o‘quvchilar uchun shaxsiy va taqvimiy ish rejalari tuzish kabi ishlar amalga oshiriladi.
<br/>
34. Bolalar musiqa va san’at maktabida o‘quv-tarbiya jarayonini tashkil etish quyidagi shakllarda amalga oshiriladi:

O‘quvchilar bilan guruh bo‘yicha va yakka tartibda mashg‘ulotlar olib borish;

o‘quvchilarning mustaqil ishi;

nazorat darslari;

akademik konsertlar, texnik sinovlar;

mustaqil ravishda ishlangan ijodiy mahsulotlar ko‘rgazmasi;

ko‘rik-tanlov, festival, ustoz saboqlari;

sinfdan sinfga o‘tkazish va bitiruv imtihonlari.
<br/>
35. O‘quvchilarning bilimi va ijodiy mahorati quyidagi tartibda baholanadi: 5 (a’lo), 4 (yaxshi), 3 (qoniqarli), 2 (qoniqarsiz).
<br/>
36. Yakka tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar har bir o‘quvchiga o‘quv yili uchun shaxsiy ish rejasi, guruhli tartibda o‘quv mashg‘ulotlarini olib boradigan o‘qituvchilar taqvimiy ish rejasi tuzadilar.
<br/>
37. Bolalar musiqa va san’at maktabida sinfdan sinfga o‘tkazish va bitiruv imtihonlari har yili 10-may — 31-may mobaynida o‘tkaziladi.
<br/>
38. Bolalar musiqa va san’at maktabi bitiruvchilariga iyun oyida o‘qishni tugatganligi to‘g‘risida mazkur Nizomning ilovasiga muvofiq shakldagi guvohnoma beriladi.
<br/>
39. Bolalar musiqa va san’at maktabini tugatishiga bir yil qolgan o‘quvchilarga ota-onalari arizasiga va mutaxassislik o‘qituvchisining tavsiya xatiga asosan pedagogik kengash qarori bilan iqtidorli bolalarning yoshini, umumiy o‘rta ta’lim maktabida tahsil olayotgan sinfini, o‘quv rejasining bajarilishini inobatga olgan holda o‘qish muddati bir yilga qisqartirilishi mumkin.
<br/>
40. O‘quvchilar bolalar musiqa va san’at maktabidan quyidagi holatlarda chetlashtirilishi mumkin:

o‘z xohishiga binoan;

o‘qishning boshqa bolalar musiqa va san’at maktabiga ko‘chirilishi munosabati bilan;

salomatligi tufayli (tibbiy komissiya ma’lumotnomasi asosida);

akademik o‘zlashtira olmaganligi (qarzdorligi) uchun;

o‘quv intizomini va muassasaning ichki tartib-qoidalarini buzganligi uchun;

o‘qish uchun belgilangan to‘lovning o‘z vaqtida amalga oshirilmaganligi sababli (to‘lovdan ozod etilgan o‘quvchilar bundan mustasno);

o‘quvchining sud tomonidan ozodlikdan mahrum etilganligi munosabati bilan;

vafot etganligi sababli.

Direktorning o‘quvchini bolalar musiqa va san’at maktabidan chetlashtirish to‘g‘risidagi buyrug‘iga quyidagilardan biri asos bo‘ladi: ota-onaning arizasi, pedagogik kengash qarori, o‘qituvchining bildirishnomasi.
<br/>
41. Ota-onalarning arizasi asosida o‘quvchiga bolalar musiqa va san’at maktabi direktorining buyrug‘iga muvofiq bir yil muddatga akademik ta’til berilishi mumkin.
<br/>
42. Bitiruv imtihonlarini topshira olmagan o‘quvchilarga muassasada o‘qiganligi to‘g‘risida ma’lumotnoma beriladi.
</p>
<div className="text-center mb-6">
          <p className="text-xl font-bold">VI. Bolalar musiqa va san’at maktabining huquq va majburiyatlari</p>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">43. Bolalar musiqa va san’at maktabi quyidagi huquqlarga ega:

bolalar musiqa va san’at maktabi xodimlari va o‘quvchilardan muassasaning ustavi va ichki tartib-qoidalariga rioya etilishini talab qilish;

o‘quv jarayonini takomillashtirish va ta’lim jarayonini metodik ta’minlash bo‘yicha takliflar kiritish;

moliyalashtirishning qonunchilikda taqiqlanmagan turli manbalari hisobiga budjetdan tashqari mablag‘larni jalb qilish.
<br/>
44. Bolalar musiqa va san’at maktabining majburiyatlari quyidagilardan iborat:
<br/>
hududiy xalq ta’limi boshqarmalarining hamda mahalliy davlat hokimiyati organlarining qarorlari, buyruqlari va boshqa me’yoriy hujjatlari ijrosini ta’minlash, topshiriq va ko‘rsatmalarini bajarish;
<br/>
o‘z ustavida belgilangan vazifalarni bajarish;
<br/>
maktabdan tashqari ta’limga qo‘yilgan davlat ta’lim talablari, belgilangan tartibda tasdiqlangan o‘quv rejasi va o‘quv dasturlari asosida ta’lim-tarbiya jarayonini tashkil etish;
<br/>
o‘quvchilarni maktabdan tashqari ta’limga jalb etish maqsadida targ‘ibot-tashviqot ishlarini olib borish;
<br/>
ta’lim-tarbiya jarayonini sanitariya qoidalari, normalari va gigiyena normativlari, texnika va yong‘in xavfsizligi qoidalariga muvofiq tashkil etish;
<br/>
bolalar musiqa va san’at maktabi xodimlarini qayta tayyorlashni va ularning malakasini oshirishni tashkil etish;
<br/>
o‘quvchilarni maktabdan tashqari ta’limga jalb etish maqsadida targ‘ibot-tashviqot ishlarini olib borish;
<br/>
ta’lim-tarbiya jarayonini sanitariya qoidalari, normalari va gigiyena normativlari, texnika va yong‘in xavfsizligi qoidalariga muvofiq tashkil etish;
<br/>
bolalar musiqa va san’at maktabi xodimlarini qayta tayyorlashni va ularning malakasini oshirishni tashkil etish;
</p>
        </div>
        <div className="text-center mb-6">
          <p className="text-xl font-bold">VII. Ta’lim jarayoni ishtirokchilarining huquq va majburiyatlari</p>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">45. O‘quvchilar, ota-onalar va pedagog xodimlar (o‘qituvchi, konsertmeyster) bolalar musiqa va san’at maktabidagi ta’lim jarayonining ishtirokchilari hisoblanadi.
            <br/>
            46. O‘quvchilar quyidagi huquqlarga ega:
<br/>
maktabdan tashqari ta’limga qo‘yilgan davlat ta’lim talablari asosida ixtiyoriy ravishda ta’lim olish;
<br/>

qiziqishiga ko‘ra ta’lim yo‘nalishini tanlash;
<br/>

bir necha ta’lim yo‘nalishi bo‘yicha bilim olish;
<br/>

insoniy qadr-qimmatining hurmat qilinishini talab qilish, vijdon erkinligi, axborot erkinligi, o‘z qarashlari va e’tiqodini ifodalash;
<br/>

bolalar musiqa va san’at maktabining o‘quv va ish faoliyatini takomillashtirishga oid takliflar berish;
qonunchilikda belgilangan boshqa huquqlar.
<br/>
47. O‘quvchilarning majburiyatlari quyidagilardan iborat:

bolalar musiqa va san’at maktabining ichki tartib-qoidalariga rioya qilish;

bolalar musiqa va san’at maktabining moddiy-texnika bazasidan samarali foydalanish va uni asrab-avaylash;

jamoatchilik ishlarida faol ishtirok etish;

o‘z ijodiy qobiliyatini rivojlantirish, bilimlarni mustaqil egallash ko‘nikmasini hosil qilish va uni amalda qo‘llash;

qonunchilikda belgilangan boshqa majburiyatlar.
<br/>
48. Ota-onalar quyidagi huquqlarga ega:

bolalar musiqa va san’at maktabi rahbariyatidan farzandi uchun mazkur maktabning ustaviga muvofiq zarur shart-sharoitlar yaratilishini talab qilish;

bola shaxsiga hurmat bilan munosabatda bo‘lishni talab qilish;

jamoatchilik asosida bolalar musiqa va san’at maktabining ish faoliyatida ishtirok etish;

qonunchilikda belgilangan boshqa huquqlar.
<br/>
49. Ota-onalarning majburiyatlari quyidagilardan iborat:

farzandining jismoniy va ruhiy sog‘lom bo‘lishi uchun g‘amxo‘rlik qilish;

bolaning qadr-qimmatiga hurmat bilan qarash, uni mehnatsevarlik, ezgulik, vatanparvarlik ruhida tarbiyalash;

farzandida qonunlarga itoatkorlik, inson huquqlari va erkinliklariga hurmat tuyg‘usini tarbiyalash;

farzandiga o‘quv mashg‘ulotlarida ishtirok etishi uchun zarur shart-sharoitlar yaratish;

farzandining ta’lim olishiga ko‘maklashish va uzrli sabablarsiz o‘quv mashg‘ulotlariga muntazam qatnashishini ta’minlash;

o‘qish uchun to‘lovni o‘z vaqtida amalga oshirish;

qonunchilikda belgilangan boshqa majburiyatlar.
<br/>
50. Pedagog xodimlar quyidagi huquqlarga ega:

bolalar musiqa va san’at maktab faoliyatining muhim masalalari muhokamasida va qarorlar qabul qilinishida qatnashish;

o‘z kasbiy sha’ni va qadr-qimmatini himoya qilish;

bolalar musiqa va san’at maktabini boshqarishda ishtirok etish;

muassasa rahbariyatiga o‘quv jarayonini yaxshilash bo‘yicha takliflar kiritish;

mashg‘ulotlarning o‘ziga xos ijodiy dasturlarini ishlab chiqish;

kasb faoliyati uchun sharoitlar bilan ta’minlanish, malakasini oshirish, qayta tayyorgarlikdan o‘tish;

o‘quv mashg‘ulotining shakli, uslubi va vositalarini mustaqil tanlash;

qonunchilikda belgilangan boshqa huquqlar.
<br/>
51. Pedagog xodimlarning majburiyatlari quyidagilardan iborat:

maktabdan tashqari ta’limga qo‘yilgan davlat ta’lim talablari hamda belgilangan tartibda tasdiqlangan o‘quv rejalari va dasturlari asosida ta’lim-tarbiya jarayonini tashkil etish;

pedagog axloq-odobiga qat’iy rioya qilish;

o‘quv-tarbiyaviy ishlarni yuqori saviyada olib borish, ta’lim mazmunini takomillashtirish, o‘qitish vositalarini yaratishda faol qatnashish;

o‘quvchining qadr-qimmatiga hurmat bilan munosabatda bo‘lish, ularda mehnatsevarlik, ezgulik, mehr-shafqat kabi fazilatlarni shakllantirish, o‘quvchilarni ona Vatanga sadoqat, davlat tiliga, milliy va umuminsoniy, tarixiy va madaniy qadriyatlarga, ota-onaga va o‘zidan katta yoshdagilarga hurmat, atrof muhitga ehtiyotkorlik bilan munosabatda bo‘lish ruhida tarbiyalash;

o‘zining nazariy bilim darajasini, pedagogik mahorati va kasb malakasini uzluksiz ravishda oshirib borish va o‘z ustida muntazam ishlash;

o‘quv-tarbiyaviy va uslubiy ishlarni takomillashtirish yuzasidan takliflar ishlab chiqish;

o‘quvchilarning ota-onalari bilan muntazam hamkorlikni yo‘lga qo‘yish;

qonunchilikda belgilangan boshqa majburiyatlar.
</p>
<p className="text-xl my-5 font-bold">VIII. Bolalar musiqa va san’at maktabida pedagogik faoliyat bilan shug‘ullanish</p>
<p className='text-left'>
52. Tegishli ma’lumotga hamda kasbiy tayyorgarlikka, yuksak fazilatlarga ega shaxslar bolalar musiqa va san’at maktabida pedagogik faoliyat bilan shug‘ullanishga haqli.

Pedagogik faoliyat bilan shug‘ullanishi sud hukmiga asosan man etilgan shaxslarning bolalar musiqa va san’at maktabida ushbu faoliyat bilan shug‘ullanishiga yo‘l qo‘yilmaydi.
<br/>
53. Bolalar musiqa va san’at maktabi pedagog xodimlarining asosiy vazifalari quyidagilardan iborat:

milliy va jahon madaniyatining durdona namunalariga tayanib, yoshlarning estetik didini o‘stirish, ularni yuksak ma’naviy ruhda tarbiyalash;

pedagogik kengash, o‘quv-tarbiya ishlariga bag‘ishlangan konferensiyalar, seminarlar, majlislar, shuningdek yo‘nalishlar bo‘yicha uslubiy birlashmalar hamda muassasa rahbariyatining yig‘ilishlarida qatnashish;

yuqori organlar tomonidan tasdiqlangan hujjatlar asosida ish yuritish, o‘quvchilar bilan sinfdan tashqari o‘tkaziladigan mashg‘ulotlar to‘g‘risida muassasa rahbariyatiga hisobot berish;

o‘quvchilarning o‘quv mashg‘ulotlarini qay darajada o‘zlashtirishlarini, bilim saviyasi va tarbiyasini kuzatish, tahlil qilish va choralar ko‘rish;

yakka tartibda o‘quv mashg‘ulotlari olib boriladigan o‘quvchilar uchun shaxsiy ish rejasi, o‘quv yili boshida nazariy fanlar bo‘yicha taqvimiy ish rejasi tuzish.
<br/>
54. Bolalar musiqa va san’at maktabida pedagog kadrlarni tayyorlash, qayta tayyorlash va ularning malakasini oshirish, kasb mahoratining yuqori darajada saqlab turilishi O‘zbekiston Respublikasi Xalq ta’limi vazirligi tomonidan ta’minlanadi.

Badiiy ta’lim (tasviriy va amaliy san’at, dizayn, san’atshunoslik hamda muzeyshunoslik) yo‘nalishlarida mutaxassislik fanlari bo‘yicha pedagog va mutaxassis kadrlar — O‘zbekiston Badiiy akademiyasi huzuridagi Badiiy ta’lim yo‘nalishlarida pedagog va mutaxassis kadrlarni qayta tayyorlash hamda ularning malakasini oshirish markazida reja asosida bepul malaka oshiradilar.
<br/>
55. Pedagog xodimlar faoliyati bolalar musiqa va san’at maktabi rahbariyati tomonidan nazorat qilinadi.

Bolalar musiqa va san’at maktabining rahbariyati pedagog xodimlarning obro‘-e’tibori va ijtimoiy maqomini, ularning mas’uliyati va kasb mahoratini oshirish bo‘yicha aniq yo‘nalishli ishlarni amalga oshiradi, ularning tizimli ravishda malaka oshirishi va o‘z ustida ishlashi, ta’lim jarayoniga ilg‘or pedagogik va axborot kommunikatsiya texnologiyalari, shuningdek yangi o‘quv dasturlari joriy etilishi uchun shart-sharoitlar yaratadi.
<br/>
56. Bolalar musiqa va san’at maktabida pedagog xodimlardan tashqari ma’muriy-xo‘jalik xodimlari faoliyat ko‘rsatadi.

Ularning lavozimi bo‘yicha huquq va majburiyatlari, ularni ishga qabul qilish tartibi, shtatdagi tegishli lavozimlarga qo‘yiladigan talablar, lavozimga tayinlash va bo‘shatish tartibi bolalar musiqa va san’at maktabi ustavida belgilanadi.
<br/>
57. Bolalar musiqa va san’at maktabi direktoriga, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosariga, pedagog xodimlariga 48 ish kunidan iborat mehnat ta’tili beriladi.

Pedagog xodimlar tomonidan mehnat ta’tilidan so‘ng o‘quv yili boshlangunga qadar muassasani yangi o‘quv yiliga tayyorlash, dars taqsimotini shakllantirish va ish rejalarini tuzish, qabul sinovlarini o‘tkazishda qabul komissiyasi faoliyatida ishtirok etish vazifalari amalga oshiriladi.
</p>
<p className="text-xl my-5 font-bold">IX. Bolalar musiqa va san’at maktabini boshqarish</p>
<p className='text-left'>
58. Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahri hokimliklari bolalar musiqa va san’at maktabining muassislari hisoblanadi.
<br/>
59. Bolalar musiqa va san’at maktabining umumiy faoliyati O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan muvofiqlashtiriladi.
<br/>
60. Bolalar musiqa va san’at maktabiga bevosita rahbarlikni tegishli ravishda Qoraqalpog‘iston Respublikasi Madaniyat vazirligi, Toshkent shahar madaniyat bosh boshqarmasi va viloyatlar madaniyat boshqarmalari boshliqlari tomonidan O‘zbekiston Respublikasi Madaniyat vazirligi bilan kelishgan holda lavozimga tayinlanadigan va lavozimdan ozod etiladigan direktor amalga oshiradi.

Bolalar musiqa va san’at maktabi direktori muassasaning tashkiliy-huquqiy, o‘quv-tarbiyaviy, ma’naviy-ma’rifiy va moliyaviy-xo‘jalik faoliyatining tashkil etilishi uchun bevosita mas’ul hisoblanadi.

Bolalar musiqa va san’at maktabi direktori lavozimiga qo‘yiladigan malaka talablari O‘zbekiston Respublikasi Xalq ta’limi vazirligi tomonidan belgilanadi.
<br/>
61. Direktorning vazifalari quyidagilardan iborat:

bolalar musiqa va san’at maktabiga umumiy rahbarlikni amalga oshirish;

kadrlarni tanlash, joy-joyiga qo‘yish va ularning zaxirasini shakllantirish;

pedagoglar va boshqa xodimlarga o‘z faoliyatini amalga oshirishi uchun zarur sharoit yaratish;

o‘quvchilarning intizomi, bilim saviyasi hamda maktab va sinfdan tashqari olib boriladigan ishlarning tashkil etilishi va mazmuni yuzasidan nazoratni amalga oshirish;

o‘quvchilarni kasb-hunarga yo‘naltirish uchun zarur ishlarni tashkil qilish;

maktabning xarajatlar smetasiga rioya etilishini nazorat qilish;

mehnat intizomi, sanitariya qoidalari, normalari va gigiyena normativlari, mehnatni muhofaza qilish, yong‘in va texnika xavfsizligi qoidalariga rioya etilishini ta’minlash;

bolalarga yil mobaynida maslahat darslari o‘tilishini va ularni maktabga kirish imtihonlariga tayyorlashni nazorat qilish;

umumiy o‘rta, maktabdan tashqari ta’lim muassasalari, madaniyat uylari, klublar o‘rtasida o‘zaro aloqalar o‘rnatish;

ota-onalar va jamoatchilik bilan ish olib borishni tashkil qilish;

bo‘ysunuviga ko‘ra yuqori organlarga hisobot berish;

o‘z vakolati doirasida mehnat vazifalarini buzgan xodimlarga nisbatan mehnat qonunchiligi doirasida intizomiy jazo choralari qo‘llash;

maktabning pedagog va boshqa xodimlarini rag‘batlantirish va mukofotlashga taqdim etish;

pedagog hamda ma’muriy-xo‘jalik xodimlari bilan mehnat shartnomasini tuzish va bekor qilish.
<br/>
62. Direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosarining vazifalari quyidagilardan iborat:

o‘quv-tarbiyaviy ishlar va ish hujjatlarining mazmunini nazorat qilish;

pedagog xodimlarga metodik yordam ko‘rsatish;

o‘quv-uslubiy va ma’naviy-ma’rifiy ishlarni tashkil qilish;

o‘qitish uslubini tahlil qilish maqsadida o‘quv mashg‘ulotlariga kirish;

pedagog xodimlarning bolalar musiqa va san’at maktabi ichki tartib-qoidalariga rioya etishini nazorat qilish;

o‘quv-tarbiyaviy, uslubiy ish rejalari, dars jadvali, ochiq darslar rejasi, sinov imtihonlari, pedagoglar haqida ma’lumotlar, o‘quv mashg‘ulotlari tarifikatsiyasini tuzish va tasdiqlash uchun bolalar musiqa va san’at maktabi direktoriga taqdim etish;

direktor bo‘lmagan vaqtda uning vazifasini bajarib turish;

pedagog xodimlar tomonidan dars jadvali, o‘quv-uslubiy, tarbiyaviy hamda sinfdan tashqari ishlarning bajarilishini nazorat qilish.

Bolalar musiqa va san’at maktabi direktori va uning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari o‘z ixtisosliklari bo‘yicha mehnat qonunchiligiga muvofiq pedagogik faoliyat bilan shug‘ullanishlari mumkin.
<br/>
63. Direktorning xo‘jalik ishlari bo‘yicha o‘rinbosarining vazifalari quyidagilardan iborat:

xo‘jalik faoliyatini boshqarish, bolalar musiqa va san’at maktabining o‘quv mashg‘ulotlari o‘tkazish uchun tayyor holda saqlanishini ta’minlash;

bolalar musiqa va san’at maktabi mablag‘laridan maqsadli foydalanish tadbirlarini o‘z vakolati doirasida ishlab chiqish hamda ulardan to‘g‘ri foydalanilishini ta’minlash;

moliyaviy faoliyat natijalarini tahlil qilish, shartnoma majburiyatlarining belgilangan muddatida to‘liq bajarilishini ta’minlash, moliyalashtirishning qonunchilikda taqiqlanmagan turli manbalari hisobiga budjetdan tashqari mablag‘larni shakllantirish va ulardan samarali foydalanilishini nazorat qilish;

tovar-moddiy boyliklar va asosiy vositalar tushumini to‘liq hisobga olish;

qo‘shimcha moliyaviy manbalar va moddiy mablag‘larni jalb etish hamda xodimlar va o‘quvchilar uchun zarur ijtimoiy-maishiy shart-sharoitlarni ta’minlash chora-tadbirlarini amalga oshirish;

o‘quv jihozlari, asbob-uskunalari va boshqa ta’lim vositalarining saqlanishini va ulardan samarali foydalanilishini ta’minlash;

moddiy-texnika bazasini rivojlantirish ishlarini tashkillashtirish, bino va qo‘shimcha obyektlarning texnik holati va jihozlanganligini muntazam ravishda o‘rganib borish;

bolalar musiqa va san’at maktabiga yetkazib berilayotgan jihozlarni belgilangan tartibda qabul qilish, jihozlarning sinf xonalari va boshqa xonalar bo‘yicha to‘g‘ri taqsimlanishini amalga oshirish;

kuz-qish mavsumiga tayyorgarlik jarayonida tegishli ravishda ko‘mir, suyuq yoqilg‘i, tabiiy gaz va elektr energiyasiga bo‘lgan ehtiyojlarni aniqlash va ma’lumotlarni bolalar musiqa va san’at maktabi direktoriga taqdim etish hamda qabul qilingan yoqilg‘ilarning sifati va saqlanishini ta’minlash;

bolalar musiqa va san’at maktabiga biriktirilgan hududlarni obodonlashtirish, ko‘kalamzorlashtirish va tozalash ishlariga rahbarlik qilish, o‘ziga bo‘ysunuvchi tegishli bo‘linma hamda texnik xizmat ko‘rsatuvchi xodimlar ishlarini muvofiqlashtirish;

sanitariya qoidalari, normalari va gigiyena normativlari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya etish.
<br/>
64. Bolalar musiqa va san’at maktabi faoliyati bilan bog‘liq eng muhim masalalarni muhokama qilish, muammolarni bartaraf etish va istiqboldagi rejalarni shakllantirish maqsadida pedagogik kengash tashkil qilinadi. Pedagogik kengash muassasaning yuqori boshqaruv organi hisoblanadi.

Pedagogik kengash tarkibiga bolalar musiqa va san’at maktabining direktori va pedagog xodimlari kiritiladi.
<br/>
65. Pedagogik kengashning yig‘ilishlari bir o‘quv yili mobaynida kamida besh marta o‘tkaziladi. Unga bolalar musiqa va san’at maktabi direktori raislik qiladi. Direktor bo‘lmagan vaqtda raislikni direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari amalga oshiradi.
<br/>
66. Pedagogik kengashning vazifalari bolalar musiqa va san’at maktabining ustavida belgilanadi.
<br/>
67. Pedagogik kengashning raisi kengash qabul qilgan qarorlarning bajarilishini doimiy ravishda nazorat qilib boradi.
</p>
<p className="text-xl my-5 font-bold">X. Bolalar musiqa va san’at maktabini moliyalashtirish va uning moddiy-texnika ta’minoti</p>
<p className='text-left'>
68. Bolalar musiqa va san’at maktabi faoliyatini moliyalashtirish belgilangan tartibda tasdiqlangan va ro‘yxatdan o‘tkazilgan xarajatlar smetasiga muvofiq amalga oshiriladi.

Bolalar musiqa va san’at maktabi o‘ziga biriktirilgan mol-mulkni va xarajatlar smetasi bo‘yicha ajratilgan mablag‘larni qonunchilikka muvofiq tasarruf etadi.
<br/>
69. Bolalar musiqa va san’at maktabi faoliyatini moliyalashtirish quyidagi manbalar hisobiga amalga oshiriladi:

O‘zbekiston Respublikasi Davlat budjeti mablag‘lari;

ota-onalar to‘lovi mablag‘lari;

o‘quvchilar va pedagog xodimlar tomonidan tayyorlangan mahsulotlar va buyumlarni sotishdan tushgan mablag‘lar;

asosiy mashg‘ulotlardan tashqari paytda bo‘sh binolar, inshootlar, asbob-uskunalarni ijaraga berishdan tushgan mablag‘lar;

xo‘jalik faoliyatidan, qonunchilikda taqiqlanmagan shartnoma asosida pulli xizmat ko‘rsatishdan olingan daromadlar;

o‘quvchilar va pedagog xodimlar tomonidan o‘quv-tarbiya jarayoniga ta’sir etmagan holda badiiy kechalar, konsert va teatr tomoshalari tashkil etishdan olingan mablag‘lar;

jismoniy va yuridik shaxslarning qonunchilikda taqiqlanmagan homiylik xayriyalari, mahalliy va xalqaro tashkilotlarning grantlari;

qonunchilikda taqiqlanmagan boshqa manbalar.
<br/>
70. Qonunchilikda taqiqlanmagan faoliyatdan olingan daromad hisobiga sotib olingan mol-mulk muassasaning mol-mulki tarkibiga kiritiladi.
<br/>
71. Bolalar musiqa va san’at maktabining mol-mulki va pul mablag‘lari sarflanishi uchun bevosita uning direktori javobgar hisoblanadi.
<br/>
72. Bolalar musiqa va san’at maktabi tomonidan qonunchilikka muvofiq moliyaviy va statistik hisobot yuritiladi.
<br/>
73. Bolalar musiqa va san’at maktabi xodimlarini moddiy va ma’naviy rag‘batlantirish hamda ish haqiga ustamalar qonunchilikka muvofiq belgilanadi.
<br/>
74. Bolalar musiqa va san’at maktabi shtatidagi xodimlar soni muassasaning namunaviy shtatlariga muvofiq belgilanadi.

Bolalar musiqa va san’at maktabining namunaviy shtatlari O‘zbekiston Respublikasi Mehnat vazirligi hamda Moliya vazirligi bilan kelishilgan holda Xalq ta’limi vazirligi tomonidan tasdiqlanadi.
<br/>
75. Bolalar musiqa va san’at maktabining moddiy-texnika ta’minoti va kadrlar bilan ta’minlanishi belgilangan normativlarga muvofiq ehtiyojlar asosida amalga oshiriladi.
<br/>
76. Bolalar musiqa va san’at maktabi tegishli mahalliy davlat hokimiyati organlari bilan birgalikda o‘zining moddiy-texnika bazasini mustahkamlash chora-tadbirlarini amalga oshiradi.
</p>
<p className="text-xl my-5 font-bold">XI. Yakunlovchi qoidalar</p>
<p className='text-left'>
77. Bolalar musiqa va san’at maktabi qonunchilikda belgilangan tartibda maktabdan tashqari ta’lim bo‘yicha xalqaro hamkorlikni yo‘lga qo‘yishi mumkin.
Ularning xalqaro hamkorligi shartnomalar asosida xorijiy tashkilotlar bilan pedagogik axborot va tajriba almashish, pedagog xodimlarning malaka oshirishi hamda stajirovka o‘tashi shaklida amalga oshirilishi mumkin.
<br/>
78. Bolalar musiqa va san’at maktabi o‘quvchilarning ota-onalari, fuqarolarning o‘zini o‘zi boshqarish organlari, boshqa ta’lim muassasalari va nodavlat notijorat tashkilotlari bilan uzviy aloqada faoliyat ko‘rsatadi.
<br/>
79. Bolalar musiqa va san’at maktabida uning ish faoliyati bilan bog‘liq bo‘lmagan tashkilotlar, jumladan, siyosiy partiyalar va harakatlar tashkil etilishiga va faoliyat yuritishiga yo‘l qo‘yilmaydi.
<br/>
80. Bolalar musiqa va san’at maktabini qayta tashkil etish yoki tugatish qonunchilikka muvofiq o‘quv yili yakunida muassis tomonidan amalga oshiriladi.

Tugatilgan bolalar musiqa va san’at maktabining muassisi o‘quvchilarni ota-onalarning roziligi bilan boshqa bolalar musiqa va san’at maktabiga o‘tkazish mas’uliyatini oladi.
<br/>
81. Bolalar musiqa va san’at maktabi tugatilgan taqdirda uning pul mablag‘lari va mol-mulkidan, uning majburiyatlarini qoplash bo‘yicha to‘lovlar chegirilgan holda, qonunchilikka hamda bolalar musiqa va san’at maktabi ustaviga muvofiq foydalaniladi.
</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bolalarmusiqa_maktabi;