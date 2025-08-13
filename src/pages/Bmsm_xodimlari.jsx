import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';

const Bmsm_xodimlari = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-900 mb-4 text-center font-montserrat">
            Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi xodimlarining ODOB-AXLOQ QOIDALARI
          </h1>
          <h2 className="text-xl font-semibold text-sky-800 mb-4 text-center">1-bob. Umumiy qoidalar</h2>
          <div className="p-6 mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              1. Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi (keyingi o'rinlarda BMSMi) xodimlarining Odob-axloq qoidalari (keyingi o'rinlarda — Odob-axloq qoidalari) xodimlarning kasbiy madaniyati, xizmat faoliyati davomida hamda xizmatdan tashqari vaqtda odob-axloqi, tashqi ko'rinishi va kiyinish uslubining namunaviy qoidalarini belgilaydi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Odob-axloq qoidalari BMSMda yuksak kasbiy madaniyatni shakllantirish, jamoatchilik ongida davlat xizmatiga bo'lgan hurmat va ishonchni oshirish hamda xodimlarning axloq qoidalariga zid bo'lgan xatti-harakatlarining oldini olishga qaratilgan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              2. Xodimlar o'z kasbiy faoliyatini quyidagi prinsiplar asosida amalga oshirishi shart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4 mb-4">
              <li>qonuniylik;</li>
              <li>Vatanga sadoqat va xizmat vazifasiga fidoyilik, yuklangan funksional vazifalarini to'liq bajarish, ijro intizomiga qat'iy rioya etish;</li>
              <li>fuqarolar huquqlari, erkinliklari va qonuniy manfaatlarining ustuvorligi;</li>
              <li>davlat va jamiyat manfaatlariga sodiqlik;</li>
              <li>adolatlilik, halollik va xolislik;</li>
              <li>korrupsiyaviy holatlarga murosasiz munosabatda bo'lish va qarshi kurashish;</li>
              <li>xizmat sirini qat'iy saqlash;</li>
              <li>mansab vakolatlarini suiiste'mol qilmaslik;</li>
              <li>manfaatlar to'qnashuviga yo'l qo'ymaslik.</li>
            </ul>
          </div>
          <div className="text-center mb-6">
            <p className="text-sm sm:text-base md:text-lg">2-bob. Kasbiy madaniyatga oid umumiy odob-axloq qoidalari</p>
            <p className="text-left mt-5">7. Xodimlar:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4 mb-4">
              <li>fuqarolarning jinsi, irqi, millati, fuqaroligi, tili, dini, ijtimoiy kelib chiqishi, e'tiqodi, shaxsiy va ijtimoiy mavqeyi kamsitilishiga olib keluvchi ta'sir choralari va harakatlar (harakatsizlik)ga yo'l qo'ymasligi;</li>
              <li>halol, adolatli va kamtar bo'lishi, fuqarolar bilan muloqotda xushmuomala, vazmin va samimiy munosabatni namoyish qilishi;</li>
              <li>jismoniy va yuridik shaxslarning huquqlari va qonuniy manfaatlariga daxldor qarorlarni qabul qilishda qonuniylikni, adolatlilikni va shaffoflikni ta'minlashi;</li>
              <li>davlat va jamiyat manfaatlariga zarar yetkazuvchi, davlat organlari va tashkilotlari faoliyati samaradorligini pasaytiradigan harakatlar (harakatsizlik)dan tiyilishi;</li>
              <li>o'zining xatti-harakati va axloqi tufayli jamoatchilikning tanqidiga uchramaslik choralarini ko'rish, tanqid uchun ta'qibga yo'l qo'ymasligi, asosli va konstruktiv tanqiddan o'z faoliyatidagi kamchiliklar hamda nuqsonlarni bartaraf etish yo'lida foydalanishi;</li>
              <li>davlat organlari va tashkilotlari, davlat xizmatchilari va boshqa shaxslarga o'z xizmat mavqeyidan foydalangan holda shaxsiy masalalar yuzasidan ta'sir o'tkazmasligi;</li>
              <li>o'z xizmat vakolatlarini jismoniy va yuridik shaxslarning manfaatlarini ko'zlab bajarish yoki bajarmaslik evaziga ulardan biron-bir mukofot, foyda yoki sovg'alar olmasligi;</li>
              <li>davlat mulkining but saqlanishini ta'minlashi, o'ziga ishonib topshirilgan davlat mulkidan faqat xizmat maqsadlarida foydalanishi;</li>
              <li>xizmat intizomiga qat'iy rioya qilishi, ish vaqtidan oqilona va samarali foydalanishi;</li>
              <li>aholining davlat xizmatlari iste'molchisi sifatidagi talablariga muvofiq doimiy ravishda faoliyat sifatini oshirib borish choralarini ko'rish;</li>
              <li>qonun bilan intizomiy, ma'muriy va jinoiy javobgarlik nazarda tutilgan huquqbuzarlik va boshqa xatti-harakatlarga yo'l qo'ymasligi;</li>
              <li>kasb etikasi va ishchanlik uslubiga rioya etishi;</li>
              <li>siyosiy partiyalar, jamoat birlashmalari va boshqa nodavlat tashkilotlari manfaatlari yo'lida xizmat mavqeyi va imkoniyatlaridan foydalanmasligi kerak.</li>
            </ul>
          </div>
          <div className="text-center mb-6">
            <p className="text-sm sm:text-base md:text-lg">3-bob. Xizmat faoliyatiga oid odob-axloq qoidalari</p>
            <p className="text-left mt-5">9. Xodimlar xizmat faoliyati davomida quyidagilarga majbur:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4 mb-4">
              <li>O'zbekiston Respublikasining Konstitutsiyasi, qonunlari va boshqa qonunchilik hujjatlariga so'zsiz rioya etishi;</li>
              <li>mamlakat sha'nini e'zozlash, davlat siyosatiga sodiq bo'lish;</li>
              <li>tashqi siyosat sohasida davlat manfaatlarini qat'iy himoya qilish;</li>
              <li>o'z xizmat vazifalarini vijdonan, halol va yuksak professional darajada bajarish, rasmiyatchilik, soxtakorlik va suiste'molchilikka yo'l qo'ymaslik;</li>
              <li>xizmat majburiyatlarini samarali bajarish uchun zarur bo'lgan bilim va ko'nikmalarni doimiy asosda oshirish;</li>
              <li>yuqori davlat organlari va tashkilotlari hamda mansabdor shaxslarining o'z vakolatlari doirasida qabul qilgan qarorlari hamda berilgan topshiriqlarni o'z vaqtida va sifatli bajarish;</li>
              <li>ishlab chiqilayotgan normativ-huquqiy va boshqa hujjatlarga biron-bir shaxs, guruh yoki idoralar manfaati nuqtai nazaridan yondashmaslik hamda ularning manfaatlari ifoda etilishiga yo'l qo'ymaslik;</li>
              <li>har qanday qonunbuzilishiga, ayniqsa, korrupsiya holatlariga qarshi murosasizlik bilan kurashish;</li>
              <li>xizmat safarlari, nazorat tadbirlari davomida mehnat faoliyati bilan bog'liq bo'lgan har qanday turdagi sarf-xarajatlarni boshqa shaxslar hisobidan amalga oshirmaslik;</li>
              <li>davlat xizmatchilari yoki boshqa shaxslar tomonidan jinoyat yoki boshqa huquqbuzarlik sodir etishga undovchi murojaatlar haqida, shuningdek, hamkasblari tomonidan sodir etilgan yoki tayyorgarlik ko'rilayotgan qonunbuzilishlar haqida o'zining rahbariga zudlik bilan ma'lum qilish;</li>
              <li>chet el fuqarolari bilan alohida belgilangan tartibga zid ravishda bevosita yoki boshqa shaxslar orqali muloqotga kirishmaslik;</li>
              <li>o'z xizmat majburiyatlarini bajarayotganda fuqarolar va boshqa shaxslarni kamsitmaslik, ularning ta'siridan saqlanish, fuqarolar huquqlari, majburiyatlari va qonuniy manfaatlarini hisobga olish;</li>
              <li>o'z xizmat majburiyatlarini vijdonan bajarishga to'sqinlik qilishi mumkin bo'lgan xatti-harakatlardan saqlanish;</li>
              <li>davlat siri, qonun bilan qo'riqlanadigan va xizmatga oid boshqa ma'lumotlarning oshkor etilmasligini ta'minlash yuzasidan barcha choralarni ko'rish, ulardan qonunga zid ravishda foydalanmaslik;</li>
              <li>axborotlarni tarqatish qoidalariga rioya qilish, Internet jahon axborot tarmog'i va axborot kommunikatsiya vositalaridan foydalanishda axborot xavfsizligini ta'minlashning belgilangan tartibiga amal qilish;</li>
              <li>biriktirilgan xizmat kompyuteri hamda elektron tashuvchilaridagi xizmatga oid ma'lumotlarning xavfsiz saqlanishini ta'minlash va ularni boshqa shaxslarga tarqatilishining oldini olish choralarini ko'rish;</li>
              <li>ijtimoiy tarmoqlarda davlat organlari va tashkilotlari hamda mansabdor shaxslar faoliyatini muhokama qilmaslik, axloqqa zid iboralarni ishlatmaslik, mamlakatda amalga oshirilayotgan islohotlarga nisbatan odamlarda ishonchsizlik kayfiyatini yuzaga keltirishi mumkin bo'lgan materiallarni joylashtirmaslik;</li>
              <li>fuqarolar va hamkasblarining sha'ni va qadr-qimmatiga dog' tushiruvchi ma'lumotlar, tuhmat, ig'vo va uydirmalarni tarqatmaslik;</li>
              <li>mehnat va ijro intizomi, ichki tartib qoidalariga, shuningdek, telefonda so'zlashish va kiyinish madaniyatiga qat'iy rioya etish;</li>
              <li>o'ziga ishonib topshirilgan mulkka va moliyaviy mablag'larg
manfaatlar to‘qnashuviga yo‘l qo‘ymaslik.
<br/>
3. Xodimlar mehnat faoliyati davomida va ishdan tashqari vaqtda xulq-atvorning quyidagi umumiy qoidalariga amal qilishi lozim:

Xodimning obro‘siga putur yetkazishi mumkin bo‘lgan xatti-harakatlardan tiyilish, axloq normalariga doimiy rioya qilish;

mas’uliyat, kasbiga sadoqat va halollikni kundalik shiorga aylantirish;

murakkab vazifalarni bajarishda hamkasblariga ko‘maklashish;

xushmuomalalik, e’tiborlilik va hushyorlik bilan fuqarolarda davlatga nisbatan ishonch va hurmat hissini uyg‘otish;

oilasida sog‘lom muhitni ta’minlab, oila a’zolariga doimiy g‘amxo‘r bo‘lish, farzandlarida vatanparvarlik va boshqa yuksak axloqiy fazilatlarni shakllantirish;

fuqarolarning ijtimoiy kelib chiqishi, iqtisodiy ahvoli va boshqa omillardan qat’i nazar, ular bilan bir xil, samimiy, odob doirasida munosabatda bo‘lish;

jamiyatda axloqning umume’tirof etilgan qoidalariga amal qilish.
<br/>
4. Xodimlar o‘z vakolatlarini amalga oshirayotganda O‘zbekiston Respublikasining Konstitutsiyasi va qonunlariga, “Davlat fuqarolik xizmati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuniga, O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlariga, Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi madaniyat vazirining buyruqlariga va qarorlariga, Toshkent shahar madaniyat boshqarmasi boshlig‘ining buyruqlariga, ushbu Odob-axloq qoidalariga va boshqa qonunchilik hujjatlariga amal qiladi.
<br/>
5. Xodimlar Odob-axloq qoidalariga rioya qilish majburiyatiga, fuqarolar esa xodimlardan mazkur qoidalarga mos bo‘lgan kasbiy madaniyatni talab qilish huquqiga ega.
<br/>
6. Xodimlarning Odob-axloq qoidalariga rioya etishi ularning faoliyati hamda xizmatdagi axloqini baholashning asosiy mezonlaridan biri hisoblanadi.

Xodimlar tomonidan Odob-axloq qoidalariga rioya qilinishi holati ularni kelgusida yuqori lavozimlarga tayinlash va rahbar kadrlar zaxirasini shakllantirishda hisobga olinadi.
        </li>
      </ul>
        </div>
        <div className="text-center mb-6">

          <p className="text-sm sm:text-base md:text-lg">2-bob. Kasbiy madaniyatga oid umumiy odob-axloq qoidalari</p>
          <p className="text-left mt-5">7. Xodimlar:

fuqarolarning jinsi, irqi, millati, fuqaroligi, tili, dini, ijtimoiy kelib chiqishi, e’tiqodi, shaxsiy va ijtimoiy mavqeyi kamsitilishiga olib keluvchi ta’sir choralari va harakatlar (harakatsizlik)ga yo‘l qo‘ymasligi;

halol, adolatli va kamtar bo‘lishi, fuqarolar bilan muloqotda xushmuomala, vazmin va samimiy munosabatni namoyish qilishi;

jismoniy va yuridik shaxslarning huquqlari va qonuniy manfaatlariga daxldor qarorlarni qabul qilishda qonuniylikni, adolatlilikni va shaffoflikni ta’minlashi;

davlat va jamiyat manfaatlariga zarar yetkazuvchi, davlat organlari va tashkilotlari faoliyati samaradorligini pasaytiradigan harakatlar (harakatsizlik)dan tiyilishi;

o‘zining xatti-harakati va axloqi tufayli jamoatchilikning tanqidiga uchramaslik choralarini ko‘rishi, tanqid uchun ta’qibga yo‘l qo‘ymasligi, asosli va konstruktiv tanqiddan o‘z faoliyatidagi kamchiliklar hamda nuqsonlarni bartaraf etish yo‘lida foydalanishi;

davlat organlari va tashkilotlari, davlat xizmatchilari va boshqa shaxslarga o‘z xizmat mavqeyidan foydalangan holda shaxsiy masalalar yuzasidan ta’sir o‘tkazmasligi;

o‘z xizmat vakolatlarini jismoniy va yuridik shaxslarning manfaatlarini ko‘zlab bajarish yoki bajarmaslik evaziga ulardan biron-bir mukofot, foyda yoki sovg‘alar olmasligi;

davlat mulkining but saqlanishini ta’minlashi, o‘ziga ishonib topshirilgan davlat mulkidan faqat xizmat maqsadlarida foydalanishi;

xizmat intizomiga qat’iy rioya qilishi, ish vaqtidan oqilona va samarali foydalanishi;

aholining davlat xizmatlari iste’molchisi sifatidagi talablariga muvofiq doimiy ravishda faoliyat sifatini oshirib borish choralarini ko‘rishi;

qonun bilan intizomiy, ma’muriy va jinoiy javobgarlik nazarda tutilgan huquqbuzarlik va boshqa xatti-harakatlarga yo‘l qo‘ymasligi;

kasb etikasi va ishchanlik uslubiga rioya etishi;

siyosiy partiyalar, jamoat birlashmalari va boshqa nodavlat tashkilotlari manfaatlari yo‘lida xizmat mavqeyi va imkoniyatlaridan foydalanmasligi kerak.
<br/>
8. Xodimlar o‘ziga bo‘ysunuvchi xodimlardan ular mehnat vazifasini bajarayotgan paytda partiya nomidan siyosiy faoliyat bilan shug‘ullanishni talab qilishi, siyosiy partiyalar, jamoat birlashmalari va boshqa nodavlat tashkilotlari faoliyatida ishtirok etishga da’vat etishi yoki majburlashiga yo‘l qo‘yilmaydi.
          </p>
        </div>
        <div className="text-center mb-6">

          <p className="text-sm sm:text-base md:text-lg">3-bob. Xizmat faoliyatiga oid odob-axloq qoidalari</p>
          <p className="text-left mt-5">9. Xodimlar xizmat faoliyati davomida quyidagilarga majbur:

O‘zbekiston Respublikasining Konstitutsiyasi, qonunlari va boshqa qonunchilik hujjatlariga so‘zsiz rioya etishi;

mamlakat sha’nini e’zozlash, davlat siyosatiga sodiq bo‘lish;

tashqi siyosat sohasida davlat manfaatlarini qat’iy himoya qilish;

o‘z xizmat vazifalarini vijdonan, halol va yuksak professional darajada bajarish, rasmiyatchilik, soxtakorlik va suiste’molchilikka yo‘l qo‘ymaslik;

xizmat majburiyatlarini samarali bajarish uchun zarur bo‘lgan bilim va ko‘nikmalarni doimiy asosda oshirish;

yuqori davlat organlari va tashkilotlari hamda mansabdor shaxslarining o‘z vakolatlari doirasida qabul qilgan qarorlari hamda berilgan topshiriqlarni o‘z vaqtida va sifatli bajarish;

ishlab chiqilayotgan normativ-huquqiy va boshqa hujjatlarga biron-bir shaxs, guruh yoki idoralar manfaati nuqtai nazaridan yondashmaslik hamda ularning manfaatlari ifoda etilishiga yo‘l qo‘ymaslik;

har qanday qonunbuzilishiga, ayniqsa, korrupsiya holatlariga qarshi murosasizlik bilan kurashish;

xizmat safarlari, nazorat tadbirlari davomida mehnat faoliyati bilan bog‘liq bo‘lgan har qanday turdagi sarf-xarajatlarni boshqa shaxslar hisobidan amalga oshirmaslik;

davlat xizmatchilari yoki boshqa shaxslar tomonidan jinoyat yoki boshqa huquqbuzarlik sodir etishga undovchi murojaatlar haqida, shuningdek, hamkasblari tomonidan sodir etilgan yoki tayyorgarlik ko‘rilayotgan qonunbuzilishlar haqida o‘zining rahbariga zudlik bilan ma’lum qilish;

chet el fuqarolari bilan alohida belgilangan tartibga zid ravishda bevosita yoki boshqa shaxslar orqali muloqotga kirishmaslik;

o‘z xizmat majburiyatlarini bajarayotganda fuqarolar va boshqa shaxslarni kamsitmaslik, ularning ta’siridan saqlanish, fuqarolar huquqlari, majburiyatlari va qonuniy manfaatlarini hisobga olish;

o‘z xizmat majburiyatlarini vijdonan bajarishga to‘sqinlik qilishi mumkin bo‘lgan xatti-harakatlardan saqlanish;

davlat siri, qonun bilan qo‘riqlanadigan va xizmatga oid boshqa ma’lumotlarning oshkor etilmasligini ta’minlash yuzasidan barcha choralarni ko‘rish, ulardan qonunga zid ravishda foydalanmaslik;

axborotlarni tarqatish qoidalariga rioya qilish, Internet jahon axborot tarmog‘i va axborot kommunikatsiya vositalaridan foydalanishda axborot xavfsizligini ta’minlashning belgilangan tartibiga amal qilish;

biriktirilgan xizmat kompyuteri hamda elektron tashuvchilaridagi xizmatga oid ma’lumotlarning xavfsiz saqlanishini ta’minlash va ularni boshqa shaxslarga tarqatilishining oldini olish choralarini ko‘rish;

ijtimoiy tarmoqlarda davlat organlari va tashkilotlari hamda mansabdor shaxslar faoliyatini muhokama qilmaslik, axloqqa zid iboralarni ishlatmaslik, mamlakatda amalga oshirilayotgan islohotlarga nisbatan odamlarda ishonchsizlik kayfiyatini yuzaga keltirishi mumkin bo‘lgan materiallarni joylashtirmaslik;

fuqarolar va hamkasblarining sha’ni va qadr-qimmatiga dog‘ tushiruvchi ma’lumotlar, tuhmat, ig‘vo va uydirmalarni tarqatmaslik;

mehnat va ijro intizomi, ichki tartib qoidalariga, shuningdek, telefonda so‘zlashish va kiyinish madaniyatiga qat’iy rioya etish;

o‘ziga ishonib topshirilgan mulkka va moliyaviy mablag‘larga ehtiyotkorlik va tejamkorlik bilan munosabatda bo‘lish;

jamoada sog‘lom ma’naviy muhitni saqlash choralarini ko‘rish;

jismoniy va yuridik shaxslarning murojaatlarini qonunda belgilangan tartibda hamda muddatlarda qonuniy, asosli va adolatli hal qilish;

mehnat jamoasida ishchanlik muhitini shakllantirish va uni mustahkamlashga ko‘maklashishi;

mehnat jamoasida hamkasblarining sha’ni va qadr-qimmatini obro‘sizlantiradigan shaxsiy va kasbiy fazilatlarini muhokama qilishdan tiyilishi kerak.
<br/>
10. BMSM direktori quyidagilarga majbur:

bo‘ysunuvidagi xodimlarga professionalizm, halollik, xolislik va adolatlilikda o‘rnak bo‘lish;

jamoada sog‘lom ma’naviy muhit va ishchan kayfiyatni shakllantirish;

xodimlarni qonunga xilof xatti-harakatlarni amalga oshirishga undamaslik hamda ulardan bunday harakatlarni bajarishni talab qilmaslik;

kadrlarni mahalliychilik, urug‘-aymoqchilik, tanish-bilishchilik yoki shaxsiy sadoqat belgilari bo‘yicha tanlash, tayinlash yoki tavsiya etishga yo‘l qo‘ymaslik;

jamoada guruhbozlik va favoritizm (ayrim xodimlarni yaqin olish va qo‘llab-quvvatlash) ko‘rinishlariga yo‘l qo‘ymaslik, shuningdek, xizmat vazifalarini bajarish jarayonida boshqa salbiy omillarning oldini olish;

xodimlarning faoliyatiga baho berishda qonuniy, asosli va adolatli qarorlar qabul qilish;

xodimlar tomonidan korrupsiya va boshqa suiiste’molchiliklar sodir etilishining oldini olish choralarini ko‘rish;

bo‘ysunuvidagi xodimlarni huquqiy va ijtimoiy jihatdan himoya qilish choralarini ko‘rish;

vakolati doirasida shartnomalar tuzish, tanlovlar o‘tkazish yoki rozilik berish masalalariga xolis, adolatli va qonuniy yondashish.
<br/>
11. BMSM direktori bo‘ysunuvidagi xodimlarga qo‘pol muomalada bo‘lishi, haqorat qilishi, shaxsiyatiga tegishi, ularga asossiz tanbeh berishi yoki ayblashi hamda kamsitishi mumkin emas.
          </p>
        </div>
        <div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">4-bob. Xizmatdan tashqari odob-axloq qoidalari</p>
<p className="text-left mt-5">12. Xodimlar ishdan bo‘sh vaqtlarida umumqabul qilingan axloq normalariga rioya qilishlari va ularga zid bo‘lgan xulq-atvor va xatti-harakatlardan o‘zlarini tiyishlari shart.
<br/>
13. Xodimlar ishdan tashqari vaqtda quyidagilarga majbur:

milliy urf-odat, qadriyat va an’analarga hurmat bilan munosabatda bo‘lish;

dabdababozlik, shuhratparastlik, guruhbozlik, maishatbozlik, ichkilikbozlik va boshqa salbiy illatlarga yo‘l qo‘ymaslik;

rasmiy e’lon qilingan ma’lumotlardan tashqari davlat xizmati faoliyatiga oid masalalarni muhokama qilmaslik;

jamoat joylarida (kafe, restoran va boshqa ko‘ngilochar maskanlarda) o‘zini tutish qoidalariga rioya etish, atrofdagilarning e’tiborini tortuvchi ortiqcha va salbiy harakatlarga yo‘l qo‘ymaslik;

jamoat tartibi va xavfsizligiga qarshi qaratilgan xatti-harakatlarni sodir etmaslik, mazkur noqonuniy harakatlarga boshqalarni jalb etmaslik yoki da’vat qilmaslik;

xizmat majburiyatlarini bajarish bilan bog‘liq bo‘lgan idora va tashkilotlar rahbar va xodimlaridan, boshqa mansabdor shaxslaridan qimmatbaho sovg‘a olmaslik;

xizmat guvohnomalarini saqlash va foydalanish tartibiga qat’iy rioya etish, ulardan xizmatga aloqador bo‘lmagan holatlarda foydalanmaslik, shu jumladan, vakolatli shaxslarga xizmat guvohnomasini ko‘rsatib, mavqeyini suiiste’mol qilmaslik;

ish faoliyati bilan bog‘liq ma’lumotlarni ishga aloqador bo‘lmagan boshqa shaxslar ishtirokida muhokama qilmaslik;

shaxsiy transport vositalaridan foydalanishda belgilangan tartibga amal qilish, yo‘l harakati qoidalariga qat’iy rioya etish;

tadbirkorlik yoki haq to‘lanadigan boshqa faoliyat bilan (pedagogik, ilmiy va ijodiy faoliyatdan tashqari) shug‘ullanmaslik, O‘zbekiston Respublikasi qonunlari va O‘zbekiston Respublikasi Prezidenti qarorlarida nazarda tutilgan hollar bundan mustasno;

BMSM hamda davlat xizmatiga dog‘ tushiruvchi xatti-harakatlardan tiyilish;

tashqi ko‘rinishini belgilangan me’yorlar doirasida saqlash, kamtarona kiyinish, atrofdagilarning e’tiborini o‘ziga ortiqcha jalb qiladigan tarzda kiyinmaslik.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">5-bob. Jamoatchilik, ommaviy axborot vositalari vakillari bilan munosabatlarga oid odob-axloq qoidalari</p>
<p className="text-left mt-5">14. Xodimlar ommaviy axborot vositalari bilan o‘zaro hamkorlik qilishi, davlat organlari va tashkilotlarining faoliyatini ommaviy axborot vositalarida yoritilishiga ko‘maklashishi kerak.
<br/>
15. Davlat siyosati yoki davlat organlari va tashkilotlari faoliyati to‘g‘risidagi ommaviy bayonotlar davlat organlari va tashkilotlari rahbari yoki mazkur yo‘nalish bo‘yicha vakolatli mansabdor shaxs tomonidan amalga oshiriladi.
<br/>
16. Quyidagi hollarda ommaviy bayonot berilishi mumkin emas:

ommaviy bayonot matni va mazmuni davlat siyosati yoki davlat organlari va tashkilotlari faoliyatiga aloqador bo‘lmasa;

ommaviy bayonotda keltiriladigan axborotlar davlat sirlari bilan bog‘liq bo‘lsa;

ommaviy bayonot boshqa davlat organlari va tashkilotlari nufuzini pasaytirish yoki ularning mansabdor shaxslarini kamsitishga yo‘naltirilgan bo‘lsa.
<br/>
17. Davlat xizmatida jamoatchilik nazoratini ta’minlash maqsadida jamoatchilik tomonidan BMSM faoliyatiga oid ayblov yoki tanqid bildirilgan taqdirda, BMSM unga nisbatan bildirilgan ayblov yoki tanqidga ommaviy izoh yoxud raddiya berishi lozim.
<br/>
18. Agar ommaviy bayonotda fuqarolarning sha’ni hamda qadr-qimmatini kamsitadigan iboralar bo‘lsa, xodim o‘z fikrlarining yanglishligi yoki noto‘g‘riligini tan olishi hamda sha’ni, qadr-qimmatiga va ishchanlik obro‘siga daxl qilingan fuqarodan, agar qonun hujjatlarida boshqa oqibatlar nazarda tutilmagan bo‘lsa, kechirim so‘rashi shart.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">6-bob. Xizmat faoliyatidagi tashqi ko‘rinish va kiyinish uslubiga oid odob-axloq qoidalari</p>
<p className="text-left mt-5">19. Xodimlarning xizmat faoliyatidagi tashqi ko‘rinishi va kiyinish uslubi fuqarolarning davlat organlari va tashkilotlari faoliyatiga hurmatini, shu jumladan davlat xizmatining nufuzini oshirishga xizmat qilishi kerak.
<br/>
20. Xodimning tashqi ko‘rinishi mehnat sharoitlari va xizmat turiga qarab, xizmat majburiyatlarini bajarishi vaqtida fuqarolarning davlat tashkilotiga nisbatan hurmat bilan munosabatda bo‘lishiga ko‘maklashishi, umumiy qabul qilingan ish uslubiga muvofiq bo‘lishi va rasmiylik, xolislik, kamtarlik va intizomni namoyon etishi lozim.
<br/>
21. Xodimning ish joyida tashqi ko‘rinishi va kiyinish uslubiga oid qo‘shimcha talablar chki mehnat tartibida belgilanadi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">7-bob. Manfaatlar to‘qnashuvi</p>
<p className="text-left mt-5">22.Xodimlar mansab yoki xizmat majburiyatlarini bajarish vaqtida manfaatlar to‘qnashuviga olib keladigan yoki olib kelishi mumkin bo‘lgan shaxsiy manfaatdorlikka yo‘l qo‘ymasligi kerak.
<br/>
23. Manfaatlar to‘qnashuvi yuzaga kelgan taqdirda xodimlar o‘zining rahbarini darhol xabardor qilishi shart.
<br/>
Manfaatlar to‘qnashuvi mavjudligi to‘g‘risida ma’lumotlar olgan rahbar bu to‘qnashuvning oldini olish yoki uni bartaraf etish yuzasidan o‘z vaqtida choralar ko‘rishga majbur.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">8-bob. Xodimlarning manfaatini himoya qilish</p>
<p className="text-left mt-5">24. Xodimlarni xizmat vazifalarini bajarish bilan bog‘liq tahdid, haqorat, tuhmat va qonunga xilof boshqa xatti-harakatlardan himoya qilish BMSM direktori tomonidan amalga oshiriladi.
<br/>
25. Zimmasiga yuklatilgan vazifalarni bajarishga to‘sqinlik qilish, jinoyat yoki boshqa huquqbuzarlik sodir etishga og‘dirishga qaratilgan murojaatlar, shuningdek, hamkasblari tomonidan sodir etilgan yoki sodir etishga tayyorgarlik ko‘rilayotgan qonunbuzilishlar haqida xabar bergan xodimlarni vujudga kelishi mumkin bo‘lgan tahdid va xavf-xatarlardan himoya qilish choralari ko‘riladi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">9-bob. Odob-axloq qoidalariga rioya etilishini nazorat qilish</p>
<p className="text-left mt-5">26. Xodimlar tomonidan odob-axloq qoidalariga rioya etilishi ustidan nazorat Odob-axloq komissiyasi tomonidan amalga oshiriladi.
<br/>
27. BMSMda lavozimga tayinlangan xodimlar mazkur Odob-axloq qoidalari bilan tilxat asosida imzo qo‘ydirgan holda tanishtiriladi.
<br/>
28. Mazkur Odob-axloq qoidalarini buzish holatlari bo‘yicha xizmat tekshiruvi BMSM direktorining ko‘rsatmasiga muvofiq Odob-axloq komissiyasi tomonidan o‘tkaziladi.
Xizmat tekshiruvini o‘tkazish tartibi BMSM tomonidan belgilanadi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">10-bob. Odob-axloq qoidalariga rioya etmaganlik uchun javobgarlik</p>
<p className="text-left mt-5">29. Xodimlar tomonidan Odob-axloq qoidalariga rioya etmaganlik holati ularga nisbatan axloqiy va intizomiy ta’sir choralarini qo‘llash uchun asos bo‘ladi.
<br/>
30. Odob-axloq qoidalariga rioya etmaganlik uchun Odob-axloq komissiyasi tomonidan xodimlarga quyidagi axloqiy ta’sir choralari qo‘llaniladi:

ogohlantirish;

uzr so‘rash yoki rasmiy uzrnoma keltirishni talab qilish;

davlat organlari va tashkilotlarining kollegial yig‘ilishlarida tanbeh berish.
<br/>
31. Odob-axloq komissiyasi xodimga nisbatan intizomiy ta’sir chorasini qo‘llash uchun BMSM direktorigs taqdimnoma kiritishi mumkin.

Odob-axloq komissiyasi odob-axloq qoidalari BMSM direktori tomonidan buzilgan taqdirda, unga nisbatan tegishli chora ko‘rish masalasi yuzasidan takliflarni Toshkent viloyati Madaniyat boshqarmasi boshlig‘iga yuboradi.
<br/>
32. Xodimning Odob-axloq qoidalarini buzishi ularni qonunga muvofiq intizomiy va boshqa javobgarlikka tortish uchun asos bo‘ladi.
</p>
</div>
<div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san’at maktabi xodimlarining Odob-axloq komissiyasi to‘g‘risida NIZOM
          </p>
          <p className="text-sm sm:text-base md:text-lg">1-bob. Umumiy qoidalar</p>
          <p className="text-left mt-5">1. Ushbu Nizom Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san’at maktabi Odob-axloq komissiyasi (keyingi o‘tin1arda - Komissiya) faoliyatini tartibga soladi.
<br/>
2. Komissiya 6-son bolalar musiqa va san’at maktabi xodimlari (keyingi o‘rinlarda - xodimlar) tomonidan odob-axloq qoidalariga rioya etishini nazorat qilish, ularning axloq normalariga zid bo‘lgan xatti-harakatlarini oldini olish va odob-axloq qoidalariga rioya etish bilan bog‘liq nizolarni ko‘rib chiqish maqsadida tuziladi.
<br/>
3. Komissiya faoliyati O‘zbekiston Respublikasining Konstitutsiyasi va qonunlariga, “Davlat fuqarolik xizmati to‘g‘risida”gi O‘zbekiston Respublikasining Qonuniga, O‘zbekiston Respublikasi Oliy Majlisi palatalarining qarorlariga, O‘zbekiston Respublikasi Prezidentining farmon, qaror va farmoyishlariga, Vazirlar Mahkamasining qarorlari va farmoyishlariga, O‘zbekiston Respublikasi Madaniyat vaziri buyruqlari va qarorlariga, Toshkent shahar madaniyat boshqarmasi boshlig‘i buyruqlariga, Toshkent shahar madaniyat boshqarmasi marhaziy apparati, hududiy bo‘linmalari hamda boshqarma tizinıidagi idoraviy mansub tashkilotlar xodimlarining odob-axloq qoidalariga, ushbu nizomga va boshqa qonunchilik hujjatlariga muvofiq amalga oshiriladi.
<br/>
4. Komissiya Komissiya raisi, kotibi va a’zolaridan iborat bo‘lib, umumiy soni besh nafardan kam bo‘lmasligi va toq sonda bo‘lishi lozim.

Komissiya tarkibiga tajribali, mehnat jamoasida obro‘-e’tiborga sazovor bo‘lgan davlat xizmatchilari kiritiladi.

Komissiya tarkibi davlat organi va tashkiloti rahbari qarori bilan tasdiqlanadi va doimiy ravishda faoliyat yuritadi.

Komissiya tarkibiga komissiya tomonidan qabul qilinadigan qarorlarga ta’sir ko‘rsatish mumkin bo‘lgan manfaatlar to‘qnashuvi ehtimolini nazarda tutgan holda o‘zgartirish kiritiladi.
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">2-bob. Komissiyaning asosiy vazifalari va funksiyalari</p>
          <p className="text-left mt-5">5. Komissiyaning asosiy vazifalari quyidagilardan iborat:

xodimlarning idoraviy odob-axloq qoidalarini ishlab chiqish;

xodimlar tomonidan odob-axloq qoidalariga rioya etilishi masalalarini ko‘rib chiqish, xizmat tekshiruvlarini o‘tkazish;

xodimlar o‘rtasida axloq normalariga zid bo‘lgan xatti-harakatlarning oldini olishga qaratilgan kompleks chora-tadbirlarni amalga oshirish;

jismoniy va yuridik shaxslarning davlat xizmatchilarining xatti-harakatlariga doir murojaatlarini ko‘rib chiqish;

xodimlarning sha’ni va qadr-qimmatini himoya qilish bilan bog‘liq masalalarni ko‘rib chiqish;

xodimlarning odob-axloq qoidalarini takomillashtirish yuzasidan takliflar ishlab chiqish;

xodimlar tomonidan odob-axloq qoidalariga rioya etilishi holatini tahlil qilish, natijalari haqida davlat organi va tashkiloti rahbari va jamoatchilikni xabardor qilib borish.
<br/>
6. Komissiya o‘z vakolatlari doirasida:

xodimlar tomonidan odob-axloq qoidalariga rioya etilishi ustidan nazoratni amalga oshiradi;

xodimlar tomonidan odob-axloq qoidalarining buzilishi bilan bog‘liq masalalar yuzasidan xulosalar tayyorlaydi;

xodimlarning odob-axloq qoidalari bilan bog‘liq masalalarini ko‘rib chiqish jarayonida zarur axborotni so‘rab oladi;

ko‘rib chiqish uchun kiritilgan masalalarni hal etish uchun Komissiya majlislariga ekspertlar va mutaxassislarni jalb qiladi;

odob-axloq qoidalariga oid masalalar yuzasidan xodimlarga tegishli maslahat va tushuntirishlar beradi;

zarur hollarda, Komissiyada ko‘rib chiqilgan masalalar bo‘yicha xodimni intizomiy javobgarlikka tortish yuzasidan BMSM direktorigsa taklif kiritadi.
<br/>
7. Komissiya BMSMning tarkibiy bo‘linmalari, boshqa davlat organlari va tashkilotlari, mansabdor shaxslari va jamoatchilik bilan hamkorlik qiladi.
<br/>
8. Komissiya faoliyatini tashkil qilish va xodimlar tomonidan odob-axloq qoidalarining buzilishi bilan bog‘liq masalalarni ko‘rib chiqish ushbu nizomga ilovada keltirilgan sxemaga muvofiq amalga oshiriladi.
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">3-bob. Komissiya faoliyatini tashkil etish</p>
          <p className="text-left mt-5">9. Komissiya majlislari zaruriyatga qarab o‘tkaziladi.

Komissiya majlislari ochiq tarzda o‘tkaziladi. Zarur bo‘lgan hollarda Komissiya yopiq majlis o‘tkazish to‘g‘risida qaror qabul qilishi mumkin.
<br/>
10. Komissiya majlisini Komissiya raisi, u yo‘qligida esa, uning topshirig‘iga binoan Komissiya a’zolaridan biri olib boradi. Komissiya majlisida bayonnoma yuritiladi, u raislik qiluvchi va Komissiya kotibi tomonidan imzolanadi.
<br/>
11. Komissiya majlislari, agar ularda Komissiya a’zolari umumiy sonining kamida uchdan ikki qismi hozir bo‘lsa, vakolatli hisoblanadi.
<br/>
12. Komissiyaning navbatdagi majlisi to‘g‘risida uning raisi Komissiya a’zolariga yozma ravishda, qoida tariqasida, kamida ikki kun oldin xabar qiladi, shuningdek majlisning boshqa ishtirokchilarini oldindan xabardor etadi.
<br/>
13. Komissiyaning qarorlari majlisda qatnashgan Komissiya a’zolarining ko‘pchilik ovozi bilan qabul qilinadi. Ovozlar teng bo‘lgan hollarda Komissiya raisining ovozi hal qiluvchi ovoz hisoblanadi.

Komissiyaning qarorlari Komissiya raisi tomonidan imzolanadi.
<br/>
14. Komissiya raisi:

Komissiya ishini tashkil etadi;

Komissiya majlislarini chaqiradi va o‘tkazadi;

Komissiya a’zolariga topshiriqlar beradi;

BMSMning tarkibiy bo‘linmalari, boshqa davlat organlari va tashkilotlari, mansabdor shaxslar va jamoatchilik bilan bo‘lgan munosabatlarda Komissiya nomidan ish yuritadi;

Komissiya majlislarida Komissiya faoliyati to‘g‘risidagi axborot bilan so‘zga chiqadi;

har yili BMSM direktoriga Komissiya faoliyati to‘g‘risida hisobot taqdim etadi.
<br/>
15. Komissiya kotibi:

Komissiyaning faoliyatini tashkiliy-texnik jihatdan ta’minlash masalalarini hal qiladi;

Komissiyaning navbatdagi majlisiga barcha zarur materiallar o‘z vaqtida tayyorlanishini ta’minlaydi, BMSM xodimlaridan zarur hujjatlar va ma’lumotlarni so‘rab oladi;

kun tartibiga muvofiq Komissiya majlislari o‘tkazilishini tashkil etadi;

Komissiyaning a’zolarini va taklif etilgan shaxslarni Komissiya majlisi o‘tkaziladigan joy, sana va vaqt hamda kun tartibiga kiritilgan masalalar haqida xabardor qiladi;

Komissiya majlisining bayonnomasini rasmiylashtiradi va tasdiqlangan bayonnomaning manfaatdor shaxslarga jo‘natilishini ta’minlaydi.
<br/>
16. Komissiya a’zosi:

Komissiya tomonidan ko‘rib chiqiladigan barcha masalalar bo‘yicha ovoz berishga;

Komissiyaning ko‘rib chiqishi uchun masalalar va takliflar kiritishga;

qarorlar tayyorlanishida, muhokamasida, qabul qilinishida, shuningdek ularning amalga oshirilishini tashkil etishda hamda bajarilishini nazorat qilishda ishtirok etishga;

ko‘rib chiqilayotgan masalaga doir hujjatlar, ma’lumotnomalar va boshqa zarur axborot bilan tanishishga;

Komissiya qaroriga rozi bo‘lmagan taqdirda o‘z nuqtai nazarini bayon etishga haqli.
<br/>
17. Komissiyasi a’zosi Komissiya majlisida hozir bo‘lishi va o‘ziga yuklatilgan majburiyatlarni bajarishi shart.

Komissiya a’zosi Komissiya majlisida hozir bo‘lish imkoni bo‘lmaganda Komissiya raisini oldindan xabardor etishi lozim.
<br/>
18. Komissiya majlisida ko‘rilayotgan masalalar Komissiya raisi, kotibi va a’zolariga bevosita yoki bilvosita bog‘liq bo‘lgan taqdirda o‘zini o‘zi rad qilishi shart.
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">4-bob. Xodimlar tomonidan odob-axloq qoidalari buzilishining oldini olish (profilaktika) choralarini ko‘rish</p>
          <p className="text-left mt-5">19. Komissiya muntazam ravishda xodimlar tomonidan odob-axloq qoidalariga rioya etilishi va ularning buzilishini oldini olishga qaratilgan quyidagilarni nazarda tutuvchi profilaktik kompleks chora-tadbirlarni amalga oshiradi:

xodimlarda yuksak kasbiy madaniyatni, jamoada sog‘lom ma’naviy muhit va ishchan kayfiyatni shakllantirish;

xodimlarni “halollik vaksinasi” bilan emlash, ya’ni halollikni ularning ongiga singdirish, ma’rifat orqali ularda korrupsiyaga qarshi murosasiz munosabatda bo‘lish kayfiyatini shakllantirish;

BMSMda taniqli ziyolilar, ijodkorlar, ma’naviyat va ma’rifat sohasining ko‘zga ko‘ringan namoyondalari, o‘z sohasida yuksak natijalarga erishgan mehnat faxriylarini jalb qilgan holda, uchrashuvlar tashkil qilib borish;

BMSMda xodimlarining kasbiy va boshqaruv ko‘nikmalari o‘sishini, shuningdek ularning malakasini doimiy ravishda oshirishni, ular tomonidan odob-axloq qoidalariga rioya etishlarini ta’minlash maqsadida ularning bilimlari va malakasini doimiy takomillashtirish ishlarini ta’minlash;

xodimlarning iqtisodiy bilimlarini, huquqiy savodxonligini, huquqiy madaniyati va huquqiy ongini, intellektual va ma’naviy rivojlanishini oshirish maqsadida iqtisodiy va huquqiy o‘qishlar tashkil etish;

yangi ishga qabul qilingan xodimlarni odob-axloq qoidalariga qat’iy rioya qilish borasida stajirovkadan o‘tkazish va ular bilan profilaktik suhbatlar tashkil qilish;

xodimlarni malaka oshirish kurslariga, xalqaro seminarlar, konferensiyalar va shu kabi boshqa tadbirlarga yuborish, ular tomonidan o‘z kasbiy darajasi va axloqiy sifatlarini mustaqil oshirishlari uchun shart-sharoit yaratib berish.
<br/>
20. Komissiya xodimlar tomonidan odob-axloq qoidalari buzilishining oldini olish (profilaktika) borasidagi o‘z faoliyatini Komissiya tomonidan tasdiqlanadigan choraklik ish rejalari asosida olib boradi.
<br/>
21. Xodimlar tomonidan odob-axloq qoidalari buzilishining oldini olish (profilaktika) choralari Komissiya tomonidan BMSMning tegishli tarkibiy bo‘linmalari rahbarlari hamda kasaba uyushmalari qo‘mitalari bilan birgalikda tashkil etiladi.
<br/>
22. Xodimlar tomonidan odob-axloq qoidalari buzilishining oldini olish (profilaktika) choralarining natijadorligi yil yakunlari bo‘yicha o‘tkaziladigan Komissiya yig‘ilishida muhokama qilinadi.
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">5-bob. Xodimlar tomonidan odob-axloq qoidalarining buzilishi bilan bog‘liq masalalarni ko‘rib chiqish tartibi</p>
          <p className="text-left mt-5">23. Komissiya xodimlar tomonidan odob-axloq qoidalarining buzilishlari bilan bog‘liq masalalarni:

davlat organi va tashkiloti rahbarining topshirig‘iga ko‘ra;

huquqni muhofaza qiluvchi organlarning murojaatiga asosan;

xodimlarning, shuningdek jismoniy va yuridik shaxslarning murojaatlariga binoan;

o‘z tashabbusi bilan ko‘rib chiqadi.
<br/>
24. Komissiya majlisiga, haqiqiy holatlarni aniqlash va xolisona qaror qabul qilish maqsadida, o‘ziga nisbatan masala ko‘rib chiqilayotgan davlat xizmatchisi, zarur bo‘lgan hollarda esa, murojaat qiluvchi va boshqa shaxslar taklif etiladi. Komissiya majlisining vaqti va joyi haqida tegishli ravishda xabardor etilgan shaxslarning kelmasligi murojaatni ko‘rib chiqish uchun to‘sqinlik qilmaydi.
<br/>
25. Komissiya majlisida:

kun tartibidagi masala o‘qib eshittiriladi;

BMSM direktorining topshirig‘i yoki xodim tomonidan odob-axloq qoidalari buzilganligi to‘g‘risidagi murojaat o‘qib eshittiriladi;

odob-axloq qoidalariga rioya etmaganlikda ayblanayotgan xodim va murojaatchilarning tushuntirishlari eshitiladi.
<br/>
26. Xodim o‘zining huquqi, sha’ni va qadr-qimmatiga, ishchanlik obro‘siga daxl qiladigan murojaat bo‘yicha amaldagi qonun hujjatlariga muvofiq o‘zini himoya qilishga, Komissiyaga zarur materiallar hamda boshqa axborotlarni taqdim etishga haqli.
<br/>
27. Majlis yakuni bo‘yicha Komissiya xodimning harakatlarida odob-axloq qoidalarining buzilishi faktining mavjudligini yoxud mavjud emasligi to‘g‘risida qaror qabul qiladi.
<br/>
28. Odob-axloq qoidalari buzilganligi fakti aniqlangan taqdirda Komissiya tomonidan xodimga quyidagi axloqiy ta’sir choralari qo‘llaniladi:

ogohlantirish;

uzr so‘rash yoki rasmiy uzrnoma keltirishni talab qilish;

BMSMning kollegial yig‘ilishlarida tanbeh berish.
<br/>
29. Komissiya xodimga nisbatan intizomiy ta’sir chorasini qo‘llash uchun BMSM rahbariga taqdimnoma kiritishi mumkin.
<br/>
30. Komissiya tomonidan quyidagi murojaatlar ko‘rib chiqilmaydi:

komissiyada oldin ko‘rib chiqilgan murojaat va aynan shu mazmundagi takror murojaatlar;

anonim murojaatlar;

qonunda belgilangan boshqa talablarga muvofiq bo‘lmagan murojaatlar.
<br/>
31. Komissiya qabul qilingan qaror haqida murojaat qiluvchiga, o‘ziga nisbatan masala ko‘rib chiqilgan xodimgz va BMSM rahbariga yozma ravishda ma’lum qiladi.
<br/>
32. Komissiya odob-axloq qoidalari BMSM rahbari tomonidan buzilgan taqdirda unga nisbatan tegishli chora ko‘rish masalasi yuzasidan takliflarni viloyat Madaniyat boshqarmasi rahbariga yuboradi.
<br/>
33. Komissiyaning qarori ustidan BMSM rahbariga yoki sudga shikoyat qilish mumkin.
<br/>
34. Xodim tomonidan odob-axloq qoidalarining buzilishi haqidagi murojaat uning tashabbuskori tomonidan Komissiya qarori qabul qilinguniga qadar qaytarib olinishi mumkin.
<br/>   
35. Taraflar yarashgan, shuningdek xodim o‘z xohishi bilan murojaatchidan oshkora uzr so‘ragan hollarda, unga nisbatan ta’sir choralari qo‘llanilmasligi mumkin.
          </p>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bmsm_xodimlari;