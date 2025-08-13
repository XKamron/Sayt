import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Atestatsiya = () => {
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
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Maktabgacha, umumiy o'rta, o'rta maxsus, professional va maktabdan tashqari ta'lim tashkilotlari pedagog kadrlarini attestatsiyadan o'tkazish tartibini takomillashtirish chora-tadbirlari to'g'risida</h2>
          <p className="text-left mt-5 font-['Montserrat', 'sans-serif']">O‘zbekiston Respublikasi Prezidentining “O‘zbekistonning yangi taraqqiyot davrida ta’lim-tarbiya va ilm-fan sohalarini rivojlantirish chora-tadbirlari to‘g‘risida” 2020-yil 6-noyabrdagi PF-6108-son hamda “2017 — 2021-yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha Harakatlar strategiyasini “Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili”da amalga oshirishga oid davlat dasturi to‘g‘risida” 2021-yil 3-fevraldagi PF-6155-son farmonlarida belgilangan vazifalar ijrosini ta’minlash, shuningdek, maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarini attestatsiyadan o‘tkazish tartibini yanada takomillashtirish maqsadida Vazirlar Mahkamasi qaror qiladi:
<br/>
1. O‘zbekiston Respublikasi Prezidentining “O‘zbekistonning yangi taraqqiyot davrida ta’lim-tarbiya va ilm-fan sohalarini rivojlantirish chora-tadbirlari to‘g‘risida” 2020-yil 6-noyabrdagi PF-6108-son Farmoni 4-bandiga hamda 2021-yil 3-fevraldagi PF-6155-son Farmoni bilan tasdiqlangan 2017 — 2021-yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha Harakatlar strategiyasini “Yoshlarni qo‘llab-quvvatlash va aholi salomatligini mustahkamlash yili”da amalga oshirishga oid davlat dasturining 228-bandiga muvofiq 2022-yil 1-yanvardan boshlab pedagog xodimlarga malaka toifasini berishning yangi tizimi joriy qilinayotganligi ma’lumot uchun qabul qilinsin.
<br/>
2. Belgilab qo‘yilsinki, 2022-yil 1-yanvardan boshlab:

maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarini (keyingi o‘rinlarda — pedagog kadrlar) attestatsiyadan o‘tkazish bo‘yicha vazirliklar va idoralar, Qoraqalpog‘iston Respublikasi, viloyatlar, Toshkent shahri, tumanlar (shaharlar) hamda ta’lim muassasalari miqyosidagi attestatsiya komissiyalari tuzish va yig‘ma jild orqali hujjat topshirish amaliyoti bekor qilinadi;

pedagog kadrlarni attestatsiyadan o‘tkazish ularning pedagogik mahorati va psixologik tayyorgarligini baholash hamda Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi (keyingi o‘rinlarda — Ta’lim inspeksiyasi) tomonidan o‘quv fani bo‘yicha malaka sinovini o‘tkazish orqali amalga oshiriladi;

pedagog kadrlarni attestatsiyadan o‘tkazish va ularga malaka toifasi (lavozim) berish bo‘yicha hujjatlarni qabul qilish pedagog kadrlar tomonidan davlat xizmatlari markazlariga borgan holda yoki mustaqil ravishda O‘zbekiston Respublikasining Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasi rasmiy veb-saytidagi maxsus portal orqali amalga oshiriladi;

pedagog kadrlarga qog‘oz shaklidagi attestatsiyadan o‘tganlik to‘g‘risidagi sertifikat berish amaliyoti bekor qilinib, elektron raqamli imzo bilan tasdiqlangan va QR-kod qo‘yilgan elektron shakldagi sertifikat berish tartibi joriy etiladi;

pedagog kadrlarga ushbu qaror qabul qilingunga qadar berilgan attestatsiyadan o‘tganlik to‘g‘risidagi sertifikatlar o‘z kuchida qoladi hamda amaldagi malaka toifasini (lavozimini) tasdiqlashda va amal qilish muddati tugagunga qadar sertifikatda ko‘rsatilgan malaka toifasi (lavozimi) bo‘yicha bazaviy tarif stavkalari asosida haq to‘lashda hisobga olinadi.
<br/>
3. Quyidagilarni nazarda tutuvchi Maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarini attestatsiyadan o‘tkazish tartibi to‘g‘risidagi nizom 1-ilovaga muvofiq tasdiqlansin:

pedagog kadrlarning pedagogik mahoratini va psixologik tayyorgarligini baholash hamda o‘quv fani bo‘yicha malakalarini sinovdan o‘tkazish;

davlat xizmatlari markazlari, O‘zbekiston Respublikasining Yagona interaktiv davlat xizmatlari portali yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali pedagog kadrlarning hujjatlarini onlayn qabul qilish hamda pedagog kadrlarga elektron raqamli imzo bilan tasdiqlangan va QR-kod qo‘yilgan elektron shakldagi sertifikat berish;

uzoq muddatli uzluksiz stajga va oliy malaka toifasiga ega pedagog kadrlarni attestatsiyadan o‘tkazmasdan ularning oliy malaka toifasini saqlab qolish hamda nodavlat ta’lim tashkilotlarining pedagog kadrlarini ham attestatsiyadan o‘tkazish va malaka toifasi berish.
<br/>
4. Ta’lim inspeksiyasi 2022-yil 1-yanvarga qadar:

O‘zbekiston Respublikasi Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi bilan birgalikda Ta’lim inspeksiyasining budjetdan tashqari rivojlantirish jamg‘armasi mablag‘lari hisobidan “pedkadr.tdi.uz” platformasini ishlab chiqsin;

Vazirlar Mahkamasi huzuridagi Davlat personallashtirish markazi va boshqa manfaatdor vazirliklar va idoralar bilan birgalikda shaxsga doir ma’lumotlar bo‘yicha axborot tizimining “pedkadr.tdi.uz” platformasi bilan integratsiya qilinishini ta’minlasin.
<br/>
5. Tizimida maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim muassasalari bo‘lgan vazirliklar va idoralar:

bo‘ysunuvidagi ta’lim tashkilotlari tomonidan navbatdagi attestatsiyadan o‘tadigan hamda navbatdan tashqari attestatsiyadan o‘tish xohishini bildirgan pedagog kadrlarning pedagogik mahorati va psixologik tayyorgarligi baholanishini tashkil etsin hamda baholash natijalari yuzasidan ma’lumotnomaning pedagog kadrlarga o‘z vaqtida taqdim etilishini ta’minlasin;

attestatsiyadan o‘tganiga besh yil to‘lgan va besh yil davomida amaldagi malaka toifasini (lavozimini) himoya qilmagan yoki malakasini oshirmagan pedagog kadrlarni navbatdagi attestatsiyaga o‘z vaqtida jalb etish choralarini ko‘rsin.
<br/>

6. Belgilansinki:
<br/>

pensiya yoshiga to‘lgan pedagog kadrlar navbatdagi attestatsiyaga jalb etilmaydi, attestatsiyadan o‘tganlik muddati tugashidan qat’i nazar ularning amaldagi malaka toifasi (lavozimi) saqlab qolinadi hamda mazkur malaka toifasi (lavozimi) bo‘yicha ularga haq to‘lanadi;
<br/>

pensiya yoshiga to‘lgan pedagog kadrlar o‘z xohishiga ko‘ra navbatdan tashqari attestatsiyadan o‘tib, malaka toifasi (lavozimi) oshirilgan taqdirda, ularga yangi tasdiqlangan malaka toifasi (lavozimi) bo‘yicha haq to‘lanadi.
<br/>

7. Pedagog kadrlarni attestatsiyadan o‘tkazish jarayoni bilan bog‘liq xarajatlar O‘zbekiston Respublikasi Davlat budjetidan Ta’lim inspeksiyasiga ajratilgan mablag‘lar doirasida amalga oshirilishi belgilab qo‘yilsin.
<br/>

8. Vazirlar Mahkamasining “Ta’lim muassasalarida chet tillarini o‘qitishning sifatini yanada takomillashtirish chora-tadbirlari to‘g‘risida” 2017-yil 11-avgustdagi 610-son qarorining 3-bandi uchinchi xatboshisi chiqarib tashlansin.
<br/>

9. O‘zbekiston Respublikasi Hukumatining 2-ilovaga muvofiq ayrim qarorlari o‘z kuchini yo‘qotgan deb hisoblansin.
<br/>

10. Ta’lim inspeksiyasi manfaatdor vazirliklar va idoralar bilan birgalikda o‘zlari qabul qilgan normativ-huquqiy hujjatlarni bir oy muddatda ushbu qarorga muvofiqlashtirsin.
<br/>

11. Mazkur qarorning bajarilishini nazorat qilish O‘zbekiston Respublikasi Bosh vazirining ijtimoiy rivojlantirish masalalari bo‘yicha o‘rinbosari B.A. Musayev, Vazirlar Mahkamasi huzuridagi Ta’lim sifatini nazorat qilish davlat inspeksiyasi boshlig‘i U.N. Tashkenbayev, maktabgacha ta’lim vaziri A.V. Shin, xalq ta’limi vaziri Sh.X. Shermatov hamda oliy va o‘rta maxsus ta’lim vaziri A.H. Toshkulov zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2021-yil 17-sentabr,
<br />
572-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Bosh vaziri A. ARIPOV</p>
    <p>Vazirlar Mahkamasining 2021-yil 17-sentabrdagi 572-son qaroriga
    1-ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">Maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarini attestatsiyadan o‘tkazish tartibi to‘g‘risida
          NIZOM</p>
          <p className="text-sm sm:text-base md:text-lg">1-bob. Umumiy qoidalar</p>
          <p className="text-left mt-5">1. Ushbu Nizom davlat maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari (keyingi o‘rinlarda — ta’lim tashkilotlari) pedagog kadrlarini (keyingi o‘rinlarda — pedagog kadrlar) attestatsiyadan o‘tkazish tartibini belgilaydi.

Mazkur Nizom O‘zbekiston Respublikasi Adliya vazirligining yuridik texnikumlari pedagog kadrlariga nisbatan tatbiq etilmaydi.
<br/>
2. Quyidagilar pedagog kadrlarni attestatsiyadan o‘tkazishning vazifalari hisoblanadi:

pedagog kadrlarning ta’lim to‘g‘risidagi hujjatida ko‘rsatilgan tayyorlov, ta’lim yo‘nalishi, mutaxassisligi yoki ixtisosligi bo‘yicha bilimlarini sinovdan o‘tkazish;

pedagog kadrlarning o‘z fanini bilishi, faoliyati samaradorligi, pedagogik mahorati, psixologik tayyorgarligini o‘rganish va xolisona baho berish hamda ularni rag‘batlantirish;

maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlarini yuqori bilim saviyasiga ega bo‘lgan, iste’dodli va iqtidorli pedagog kadrlar bilan to‘ldirish.
<br/>

3. Attestatsiyaning asosiy prinsiplari majburiylik, davriylik, oshkoralik, kengashib ish ko‘rish hamda xolislik hisoblanadi.
<br/>

4. Pedagog kadrlar har besh yilda bir marta navbatdagi majburiy attestatsiyadan o‘tkaziladi.

Ilgari attestatsiyadan o‘tmagan ishga yangi qabul qilingan pedagog kadrlarga yoki oliy ta’lim tashkilotlarini bitirib birinchi bor ishga kirgan pedagog kadrlar kasbiy faoliyatiga uch yil to‘lgandan so‘ng navbatdagi majburiy attestatsiyadan o‘tkaziladi.

Pedagog kadrlar o‘z xohishiga ko‘ra navbatdan tashqari attestatsiyadan o‘tkazilishi mumkin.

Navbatdagi majburiy attestatsiya natijalariga ko‘ra amaldagi malaka toifasi (lavozimi) oshirilgan, saqlangan yoki tushirilgan, shuningdek, navbatdan tashqari attestatsiya natijalariga ko‘ra amaldagi malaka toifasi (lavozimi) oshirilgan yoki saqlangan pedagog kadrlar navbatdagi majburiy attestatsiyaga besh yildan so‘ng jalb etiladi.

Pedagog kadrlarning majburiy attestatsiyaga o‘z muddatida jalb etilishi uchun pedagog kadr faoliyat ko‘rsatayotgan ta’lim tashkilotining rahbari shaxsan javobgar hisoblanadi.

Pedagog kadrlarning attestatsiyasini tashkil etish va o‘tkazish ushbu Nizomga 1-ilovada keltirilgan sxemaga muvofiq amalga oshiriladi.

Nodavlat maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlarining pedagog kadrlari o‘z xohishiga ko‘ra mazkur Nizom talablariga muvofiq navbatdan tashqari attestatsiyadan o‘tishi mumkin.
<br/>

5. Attestatsiyaga ta’lim tashkilotlarining oliy ma’lumotli pedagog kadrlari jalb etiladi.

Ta’lim tashkilotlarining oliy ma’lumotga ega bo‘lmagan pedagog kadrlari, shuningdek, ishlab chiqarish ta’limi ustalari kasbiy standartlar hamda xodimlarning har bir lavozim va kasb bo‘yicha malaka darajasiga qo‘yiladigan talablar asosida tizimida maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari bo‘lgan vazirliklar va idoralar (keyingi o‘rinlarda — manfaatdor vazirliklar va idoralar) tomonidan attestatsiyadan o‘tkaziladi.

Ta’lim tashkilotlarining oliy ma’lumotga ega bo‘lmagan pedagog kadrlari va ishlab chiqarish ta’limi ustalarini attestatsiyadan o‘tkazish tartibi manfaatdor vazirliklar va idoralar tomonidan belgilanadi.
<br/>

6. Quyidagilar navbatdagi majburiy attestatsiyaga jalb etilmaydi:

fan nomzodi, falsafa doktori (Doctor of Philosophy (PhD) yoki fan doktori (Doctor of Science (DSc) darajasiga hamda Oliy attestatsiya komissiyasi tomonidan berilgan katta ilmiy xodim, dotsent va professor ilmiy unvoniga ega bo‘lgan pedagog kadrlar;

oliy malaka toifa (bosh o‘qituvchi lavozimi)ga ega bo‘lganidan so‘ng oliy malaka toifani 15 yil davomida saqlab kelgan va uzluksiz ish stajiga ega bo‘lgan pedagog kadrlar;

pedagogik faoliyat bo‘yicha 25 yil va undan ko‘p ish stajiga ega bo‘lgan pedagog xodimlar;

yoshga doir pensiyaga chiqishi uchun 5 yildan ko‘p bo‘lmagan vaqt qolgan pedagog xodimlar;

pedagogik faoliyat bilan shug‘ullanayotgan pensiya yoshiga to‘lgan pedagog kadrlar;

pedagogik faoliyat bo‘yicha uch yildan kam bo‘lgan ish stajiga ega pedagog kadrlar;

homilador ayollar, ular homilador bo‘lgan davrda hamda ishga chiqqanidan keyin bir yil davomida;

homiladorlik va tug‘ish hamda bolani parvarish qilish ta’tillarida bo‘lgan ayollar, ular ta’tilda bo‘lgan davrda hamda ishga chiqqanidan keyin bir yil davomida;

pedagogik faoliyat bilan shug‘ullanayotgan uch yoshgacha bolalari bor ayollar;

uzoq (uch oydan ortiq vaqt mobaynida) davolanishni o‘tayotgan pedagog kadrlar, ular davolanayotgan davrda hamda ishga chiqqanidan keyin olti oy davomida;

mazkur Nizomning 8 va 9-bandlarida ko‘rsatilgan pedagog kadrlar, ularga malaka toifasi to‘g‘ridan to‘g‘ri berilgan yoki bir pog‘ona oshirilgan vaqtdan boshlab keyingi besh yil davomida;

respublika va chet el davlatlariga o‘qishga, qayta tayyorlash va malaka oshirish kurslariga yuborilgan pedagog kadrlar;

ijtimoiy muhofazaga muhtoj, ish topishda qiynalayotgan va mehnat bozorida teng shartlar asosida raqobatlasha olmaydigan shaxslar uchun eng kam miqdordagi ish o‘rinlariga zaxiraga olib ishga joylashtirilgan pedagog kadrlar, bu ish joylariga qabul qilingan kundan boshlab uch yil davomida.

Qonunchilik hujjatlariga muvofiq mazkur bandda ko‘rsatilmagan boshqa pedagog kadrlar ham navbatdagi majburiy attestatsiyadan ozod qilinishi mumkin.
<br/>

7. Navbatdagi majburiy attestatsiyaga jalb etilmaydigan pedagog kadrlar o‘z xohishiga ko‘ra navbatdan tashqari attestatsiyadan o‘tishlari mumkin.

Navbatdagi majburiy attestatsiyaga jalb etilmaydigan pedagog kadrlarning amaldagi malaka toifalari (lavozimlari) saqlanib qoladi hamda ularga ta’lim tashkilotlarida ishlagan davrida mazkur malaka toifasi (lavozimi) bo‘yicha haq to‘lanadi.

O‘z xohishiga ko‘ra navbatdan tashqari attestatsiyada qatnashib, malaka toifasini (lavozimini) oshirgan yoki saqlab qolgan pedagog kadrlarga oshirilgan yoki saqlab qolingan malaka toifasi (lavozim) bo‘yicha haq to‘lanadi.

O‘z xohishiga ko‘ra navbatdan tashqari attestatsiyada qatnashib, attestatsiyadan o‘ta olmagan pedagog kadrlarning malaka toifasi (lavozimi) tushirilmaydi hamda ularga navbatdan tashqari attestatsiyada qatnashishdan oldin amalda bo‘lgan malaka toifasi (lavozimi) bo‘yicha haq to‘lanadi.

<br/>
8. Quyidagi pedagog kadrlarga malaka toifasi (lavozim) to‘g‘ridan to‘g‘ri (attestatsiyadan o‘tkazilmasdan) beriladi:

<br/>
a) O‘zbekiston Respublikasi Maktabgacha ta’lim vazirligi tomonidan ro‘yxati tasdiqlanadigan sport musobaqalarining:

tuman (shahar) bosqichi g‘olibini (1-o‘rin) tayyorlagan maktabgacha ta’lim tashkilotlarining jismoniy tarbiya yo‘riqchilariga — ikkinchi malaka toifasi (katta o‘qituvchi lavozimi);

Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar bosqichi g‘olibini (1-o‘rin) tayyorlagan maktabgacha ta’lim tashkilotlarining jismoniy tarbiya yo‘riqchilariga — birinchi malaka toifasi (yetakchi o‘qituvchi lavozimi);

xalqaro hamda respublika bosqichi g‘olibi va sovrindorlarini (1 — 3-o‘rin) tayyorlagan maktabgacha ta’lim tashkilotlarining jismoniy tarbiya yo‘riqchilariga — oliy malaka toifasi (bosh o‘qituvchi lavozimi);

<br/>
b) belgilangan tartibda tasdiqlanadigan sport va ommaviy jismoniy tarbiya tadbirlarining respublika, hududiy va jismoniy tarbiya-sport tashkilotlari kalendar rejalariga kiritiladigan sport musobaqalarining:

tuman (shahar) bosqichi g‘olibini (1-o‘rin) tayyorlagan ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilariga — ikkinchi malaka toifasi (katta o‘qituvchi lavozimi);

Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar bosqichi g‘olibini (1-o‘rin) tayyorlagan ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilariga — birinchi malaka toifasi (yetakchi o‘qituvchi lavozimi);

xalqaro hamda respublika bosqichi g‘olibi va sovrindorlarini (1 — 3-o‘rin) tayyorlagan ta’lim tashkilotlari jismoniy tarbiya fani o‘qituvchilariga — oliy malaka toifasi (bosh o‘qituvchi lavozimi);

<br/>
v) jismoniy tarbiya fan olimpiadasining, shuningdek, “Besh tashabbus olimpiadasi”, olimpiya, noolimpiya va milliy sport turlari bo‘yicha uch bosqichli umumrespublika sport musobaqalarining:

tuman (shahar) bosqichi g‘olibi va sovrindorlarini (1 — 3-o‘rin) tayyorlagan umumiy o‘rta ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilariga — ikkinchi malaka toifasi (katta o‘qituvchi lavozimi);

Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar bosqichi g‘olibi va sovrindorlarini (1 — 3-o‘rin) tayyorlagan umumiy o‘rta ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilariga — birinchi malaka toifasi (yetakchi o‘qituvchi lavozimi);

xalqaro hamda respublika (final) bosqichi g‘olibi va sovrindorlarini (1 — 3-o‘rin) tayyorlagan umumiy o‘rta ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilariga — oliy malaka toifasi (bosh o‘qituvchi lavozimi);

<br/>
g) xalqaro matematika (IMO), fizika (IPhO), kimyo (IChO), biologiya (IBO) informatika (IOI) olimpiadalarida oltin, kumush yoki bronza medal (birinchi, ikkinchi va uchinchi o‘rin) sovrindorlarini tayyorlagan ta’lim tashkilotlarining pedagog kadrlariga — oliy malaka toifasi (bosh o‘qituvchi lavozimi);

<br/>
d) oliy malaka toifasiga (bosh o‘qituvchi lavozimiga) ega bo‘lganidan so‘ng oliy malaka toifasini (bosh o‘qituvchi lavozimini) 15 yil davomida saqlab kelgan va uzluksiz ish stajiga ega bo‘lgan pedagog kadrlarga — oliy malaka toifasi (bosh o‘qituvchi lavozimi).

<br/>
9. Quyidagi pedagog kadrlarining malaka toifasi (lavozimi) bir pog‘onaga oshiriladi:

O‘zbekiston Respublikasining davlat mukofotlari bilan taqdirlangan pedagog kadrlar;

“Ustoz” milliy mukofoti g‘oliblari;

Worldskills musobaqalari sovrindorlarini tayyorlagan ta’lim tashkilotlarining pedagog kadrlari;

respublika miqyosidagi fan olimpiadalari va ko‘rik-tanlovlarda g‘oliblikni qo‘lga kiritgan o‘quvchilarni tayyorlagan pedagog kadrlar;

Pedagog kadrlarning malaka toifasini (lavozimini) bir pog‘onaga oshirishda mazkur Nizom kuchga kirgandan keyingi erishilgan natijalar inobatga olinadi.

<br/>
10. Ilgari attestatsiyadan o‘tmagan ishga yangi qabul qilingan pedagog kadrlarga yoki oliy ta’lim tashkilotlarini bitirib birinchi bor ishga kirgan pedagog kadrlarga attestatsiyaga jalb etilgunga qadar quyidagi tartibda malaka toifasi (lavozim) beriladi:

bakalavr darajasiga ega pedagog kadrlarga — mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimi;

magistr darajasiga ega mutaxassislarga, shuningdek, oliy ma’lumot darajasi bo‘yicha akademik darajalar joriy etilgunga qadar olingan oliy ma’lumotli pedagog kadrlarga — ikkinchi malaka toifasi (katta o‘qituvchi lavozimi);

fan nomzodi, falsafa doktori (Doctor of Philosophy (PhD) yoki fan doktori (Doctor of Science (DSc) ilmiy darajasiga hamda Oliy attestatsiya komissiyasi tomonidan berilgan katta ilmiy xodim, dotsent va professor ilmiy unvoniga ega bo‘lgan pedagog kadrlarga — oliy malaka toifasi (bosh o‘qituvchi lavozimi).

<br/>
11. Tuzilmasida maktabgacha, umumiy o‘rta yoki maktabdan tashqari bo‘g‘inlari mavjud bo‘lgan o‘rta maxsus va professional ta’lim tashkilotlarining mazkur bo‘g‘inlarda dars berayotgan pedagog kadrlari attestatsiyadan maktabgacha, umumiy o‘rta va maktabdan tashqari ta’lim tashkilotlari uchun belgilangan tartibda o‘tkaziladi.

<br/>
12. Ta’lim tashkilotlari rahbarlari:

navbatdagi majburiy attestatsiyadan o‘tish muddati tugashidan olti oy oldin pedagog kadrlarni attestatsiyadan o‘tish lozimligi to‘g‘risida yozma ravishda xabardor qilishi;

pedagog kadrlarni attestatsiyadan o‘tkazish tartibi bilan tanishtirishi hamda attestatsiyadan o‘tish uchun hujjat topshirish boshlangunga qadar ularning pedagogik mahorati va psixologik tayyorgarligini baholashni tashkil etishi lozim.

<br/>
13. Attestatsiyaga doir tashkiliy masalalar Ta’lim sifatini nazorat qilish davlat inspeksiyasi (keyingi o‘rinlarda — Ta’lim inspeksiyasi), manfaatdor vazirliklar va idoralar hamda ta’lim tashkilotlari rahbarlari tomonidan amalga oshiriladi.

<br/>
14. Bandlik va mehnat munosabatlari vazirligi attestatsiyaning mehnat to‘g‘risidagi qonunchilik hujjatlarida belgilangan tartibda pedagog kadrlarning huquqlari ta’minlangan holda o‘tishini nazorat qiladi.

<br/>
15. Attestatsiyani o‘tkazishda manfaatdor vazirliklar va idoralar hamda mahalliy davlat hokimiyati organlari faoliyatini muvofiqlashtirish, o‘quv fani bo‘yicha test sinovlarini o‘tkazish va attestatsiya jarayonini qat’iy nazorat qilish Ta’lim inspeksiyasi tomonidan amalga oshiriladi.

Muvofiqlashtirish attestatsiya jadvallarini ishlab chiqishni va tasdiqlashni, attestatsiyani tashkil etishni, qo‘shma qarorlar loyihalarini tayyorlashni, pedagog kadrlar uchun test, ijodiy, nazariy (og‘zaki, yozma) va amaliy sinovlarni o‘tkazishni hamda ularning natijalarini e’lon qilishni, attestatsiyadan o‘tgan pedagog kadrlarga sertifikatlar berishni o‘z ichiga oladi.

Attestatsiyani nazorat qilish uning natijalarini tahlil qilish, baholash, ushbu Nizom talablari buzilishining oldini olish hamda attestatsiyani tashkil etish va o‘tkazish jarayonida yo‘l qo‘yilgan qoidabuzarliklar haqidagi ma’lumotnomalarni Vazirlar Mahkamasining tegishli kotibiyatiga, manfaatdor vazirlik va idoralarga hamda huquqni muhofaza qiluvchi organlarga yuborish orqali amalga oshiriladi.
          </p>
        </div>
        <div className="text-center mb-6">

          <p className="text-sm sm:text-base md:text-lg">2-bob. Attestatsiyadan o‘tish uchun hujjat topshirish</p>
          <p className="text-left mt-5">16. Pedagog kadrlar asosiy ish joyi bo‘yicha attestatsiyaga jalb etiladi. Ta’lim tashkilotlarida o‘rindoshlik asosida dars beradigan va asosiy ish joyi bo‘yicha pedagogik faoliyat bilan shug‘ullanmaydigan pedagog kadrlar o‘rindoshlik asosida faoliyat yuritayotgan ta’lim tashkilotidan attestatsiyaga jalb etiladi.
<br/>
17. Pedagog kadrlarning malaka toifalari (lavozimlari) boshqa ta’lim tashkilotlariga, ta’lim tashkilotlarining bir turidan boshqasiga yoxud nodavlat ta’lim tashkilotidan davlat ta’lim tashkilotiga ishga o‘tganda saqlab qolinadi.

Bunda maktabgacha, umumiy o‘rta va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarining ikkinchi malaka toifasi o‘rta maxsus va professional ta’lim tashkilotlarining katta o‘qituvchisi lavozimiga, birinchi malaka toifasi — yetakchi o‘qituvchisi lavozimiga, oliy malaka toifasi — bosh o‘qituvchisi lavozimiga tenglashtiriladi.
<br/>

18. Pedagog kadrlar oliy ma’lumot olganligi yoki qayta tayyorlash kurslaridan o‘tganligi haqidagi diplomda (keyingi o‘rinlarda — diplom) ko‘rsatilgan tayyorlov, ta’lim yo‘nalishi, mutaxassislik yoki ixtisosligiga mos keladigan o‘quv fanlar bo‘yicha attestatsiyadan o‘tadi.

Pedagog kadrlarning diplomida bittadan ortiq tayyorlov yoki ta’lim yo‘nalishi, mutaxassislik yoki ixtisoslik ko‘rsatilgan bo‘lsa, ular dars berayotgan har bir o‘quv fani bo‘yicha alohida attestatsiyadan o‘tadi, professional ta’lim tashkilotlarining umumkasbiy va maxsus fan o‘qituvchilari bundan mustasno.

Professional ta’lim tashkilotlarida ikki yoki undan ortiq umumkasbiy va maxsus fanlardan dars berayotgan pedagog kadrlar o‘quv yuklamasi ko‘p bo‘lgan bitta o‘quv fani bo‘yicha, bir nechta fandan o‘quv yuklamasi teng miqdorda bo‘lgan hollarda pedagog kadr tomonidan tanlangan o‘quv fani bo‘yicha attestatsiyadan o‘tkaziladi.

Bunda professional ta’lim tashkilotlari umumkasbiy va maxsus fan o‘qituvchilariga attestatsiya natijalari bo‘yicha berilgan lavozimi ular dars berayotgan fan sohasi bo‘yicha boshqa o‘quv fanlariga ham tegishli bo‘ladi.

<br/>
19. Attestatsiyadan o‘tish uchun pedagog kadrlar har yili 1-yanvardan 1-martga qadar va 1-avgustdan 1-oktabrga qadar bevosita davlat xizmatlari markazlari orqali yoki Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasining rasmiy veb-saytida ro‘yxatdan o‘tgan holda murojaat qiladilar.

<br/>
20. Pedagog kadrlarni navbatdagi majburiy attestatsiyadan o‘tkazish bo‘yicha davlat xizmatini ko‘rsatganlik uchun yig‘im undirilmaydi.

<br/>
21. Pedagog kadrlarni navbatdan tashqari attestatsiyadan o‘tkazish bo‘yicha davlat xizmatini ko‘rsatganlik uchun bazaviy hisoblash miqdorining bir baravari miqdorida yig‘im undiriladi.

Yagona interaktiv davlat xizmatlari portali yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali murojaat qilinganda, yig‘im summasining 90 foizi undiriladi.

Pedagog kadrlarni navbatdan tashqari attestatsiyadan o‘tkazish bo‘yicha davlat xizmatini ko‘rsatganlik uchun yig‘im to‘langanligi yagona billing tizimi orqali tasdiqlanadi.

<br/>
22. Yig‘im summasi quyidagi tartibda taqsimlanadi:

<br/>
a) davlat xizmatlari markazlari orqali murojaat etilganda, yig‘im summasining:

<br/>
20 foizi — Adliya vazirligi huzuridagi Davlat xizmatlari agentligi budjetdan tashqari jamg‘armasining shaxsiy hisobvarag‘iga;

<br/>
0,5 foizi — Axborot-kommunikatsiya texnologiyalarini rivojlantirish jamg‘armasining elektron hukumat va raqamli iqtisodiyotning idoralararo loyihalarini moliyalashtirish bo‘yicha maxsus hisobvarag‘iga;

<br/>
50 foizi — Ta’lim inspeksiyasining hisobvarag‘iga;

<br/>
qolgan qismi — Davlat budjetiga o‘tkaziladi;

<br/>
b) Yagona interaktiv davlat xizmatlari portali orqali murojaat etilganda, yig‘im summasining:

<br/>
10 foizi — Adliya vazirligi huzuridagi Davlat xizmatlari agentligi budjetdan tashqari jamg‘armasining shaxsiy hisobvarag‘iga;

<br/>
11,75 foizi (shundan 0,5 foizi — Yagona billing tizimi orqali davlat xizmati ko‘rsatilganda) — Axborot-kommunikatsiya texnologiyalarini rivojlantirish jamg‘armasining elektron hukumat va raqamli iqtisodiyotning idoralararo loyihalarini moliyalashtirish bo‘yicha maxsus hisobvarag‘iga;

<br/>
50 foizi — Ta’lim inspeksiyasining hisobvarag‘iga;

<br/>
qolgan qismi — Davlat budjetiga o‘tkaziladi;

<br/>
v) Ta’lim inspeksiyasining rasmiy veb-saytidagi maxsus portal orqali murojaat etilganda, yig‘im summasining:

<br/>
0,5 foizi — Axborot-kommunikatsiya texnologiyalarini rivojlantirish jamg‘armasining elektron hukumat va raqamli iqtisodiyotning idoralararo loyihalarini moliyalashtirish bo‘yicha maxsus hisobvarag‘iga;

<br/>
20 foizi — Davlat budjetiga;

<br/>
qolgan qismi — Ta’lim inspeksiyasining hisobvarag‘iga o‘tkaziladi.

Pedagog kadr attestatsiyadan o‘tkazish bo‘yicha davlat xizmati ko‘rsatilishidan voz kechgan, amaldagi malaka toifasini (lavozimini) himoya qila olmagan va attestatsiyadan o‘ta olmagan taqdirda, to‘langan yig‘im qaytarib berilmaydi.

Pedagog kadrlar uzrli sabablarga ko‘ra attestatsiyaga kelmaganligi tufayli ularning attestatsiyasi boshqa muddatga ko‘chirilgan taqdirda, yig‘im takroran undirilmaydi.
<br/>

23. Bevosita davlat xizmatlari markazlariga murojaat qilinganda pedagog kadr nomidan davlat xizmatlari markazi xodimi, Yagona interaktiv davlat xizmatlari portali yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali murojaat qilinganda esa pedagog kadrning o‘zi mustaqil ravishda ushbu Nizomga 2-ilovaga muvofiq so‘rovnomani (keyingi o‘rinlarda — so‘rovnoma) elektron tarzda to‘ldiradi.

So‘rovnomaga quyidagi hujjatlar ilova qilinadi:
<br/>

pedagog kadrning ta’lim to‘g‘risidagi hujjati (xorijiy davlatda ta’lim olganlik to‘g‘risidagi hujjatni O‘zbekiston Respublikasida tan olish haqidagi guvohnoma);
<br/>

qayta tayyorlash kurslaridan o‘tganligi haqidagi diplom nusxasi (agar mavjud bo‘lsa);
<br/>

pedagog kadrning pedagogik mahorati va psixologik tayyorgarligini baholash natijalari yuzasidan ma’lumotnoma.
<br/>

Pedagog kadrlardan ushbu bandda ko‘rsatilmagan hujjatlarni taqdim etishni talab qilish taqiqlanadi.
<br/>

Taqdim etilgan hujjatlardagi ma’lumotlarning haqqoniyligiga pedagog kadr mas’ul hisoblanadi.
<br/>

24. Pedagog kadr o‘zi kelib murojaat etganda, davlat xizmatlari markazlari tomonidan so‘rovnoma to‘ldirilgandan so‘ng ariza beruvchi ma’lumotlarning to‘g‘riligini tekshirib, so‘rovnomani imzolarni identifikatsiya qilishning tegishli vositalari (ERI, daktiloskopiya, elektron imzo, Mobil-ID va boshqalar) bilan tasdiqlaydi.

Pedagog kadr Yagona interaktiv davlat xizmatlari portali yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali murojaat etgan taqdirda, so‘rovnomani ERI bilan tasdiqlash talab etilmaydi. Bunda so‘rovnoma pedagog kadr tomonidan dasturga kiritilgan telefon raqamiga yoki elektron pochta manziliga avtomatik tarzda yuboriladigan SMS-xabarnoma orqali tasdiqlanadi.
<br/>

25. Noto‘g‘ri ma’lumotlar yoki qalbaki hujjatlar taqdim etilganligi aniqlangan har qanday bosqichda pedagog kadrning hujjatlarini qabul qilish va attestatsiyadan o‘tkazish jarayoni to‘xtatiladi, topshirilgan hujjatlar va to‘langan yig‘im qaytarilmaydi.

Pedagog kadrlar tomonidan topshirilgan hujjatning qalbaki ekanligini aniqlash Ta’lim inspeksiyasida mavjud bo‘lgan ma’lumotlar asosida amalga oshiriladi. Ta’lim inspeksiyasida mavjud bo‘lgan ma’lumotlar asosida pedagog kadrlar tomonidan topshirilgan hujjatlarning haqqoniyligini aniqlash imkoni bo‘lmagan taqdirda, Ta’lim inspeksiyasi tomonidan tegishli vakolatli tashkilotlarga so‘rovnoma yuboriladi.

Pedagog kadrlar tomonidan topshirilgan hujjatlar qalbaki ekanligi aniqlangan taqdirda, mazkur hujjatlar Ta’lim inspeksiyasi tomonidan qonunchilik hujjatlariga muvofiq chora ko‘rish uchun tegishli huquqni muhofaza qiluvchi organlarga taqdim etiladi.
<br/>

26. Quyidagi holatlarda davlat xizmatlari markazi yoki Ta’lim inspeksiyasi tomonidan davlat xizmatlari ko‘rsatilishi rad etilishi mumkin:

pedagog kadrlar tomonidan so‘rovnomaning elektron raqamli imzo yoki imzoni identifikatsiya qilishning boshqa vositalari yoxud SMS-xabarnoma bilan tasdiqlanmaganligi;

pedagog kadrlar tomonidan noto‘g‘ri ma’lumotlar yoki qalbaki hujjatlar taqdim etilgani ma’lum bo‘lib qolganligi;

so‘rovnoma va unga ilova qilingan hujjatlarning to‘liq taqdim etilmaganligi;

attestatsiyadan o‘tkazish bo‘yicha davlat xizmati ko‘rsatganlik uchun belgilangan yig‘imning to‘lanmaganligi (pedagog kadrni navbatdagi majburiy attestatsiyadan o‘tkazish holatlari bundan mustasno).

Davlat xizmatlari ko‘rsatishni mazkur bandda ko‘rsatilgan asoslardan boshqa holatlar bo‘yicha rad etishga yo‘l qo‘yilmaydi.
<br/>

27. Pedagog kadr davlat xizmatidan foydalanishdan uni ko‘rsatishning har qanday bosqichida bosh tortishga haqli (pedagog kadrni navbatdagi majburiy attestatsiyadan o‘tkazish holatlari bundan mustasno).

Pedagog kadr davlat xizmatidan foydalanishdan bosh tortganda to‘langan yig‘im qaytarilmaydi.

Pedagog kadrga bog‘liq bo‘lmagan holatlar (pedagog kadrning vafot etishi, mehnatga layoqatsiz bo‘lib qolishi yoki pedagog kadr bilan mehnat shartnomasi bekor qilinishi tufayli davlat xizmatidan foydalanish zarurati mavjud emasligi) sababli davlat xizmatidan foydalanilmagan taqdirda, to‘langan yig‘im pedagog kadrga yoki uning qonuniy vakiliga qaytariladi.
<br/>

28. Pedagog kadr davlat xizmatlari markaziga kelib murojaat etgan taqdirda, uning so‘rovnomasi davlat xizmatlari markazi xodimi tomonidan to‘ldirilib, pedagog kadr tomonidan tasdiqlangandan so‘ng 10 daqiqa mobaynida, Yagona interaktiv davlat xizmatlari portali orqali murojaat etganda, avtomatik tarzda Ta’lim inspeksiyasiga elektron shaklda yuboriladi.
<br/>

29. Hujjatlar to‘liq taqdim etilganda Ta’lim inspeksiyasi tomonidan hujjatlar qabul qilinganligi to‘g‘risida davlat xizmatlari markaziga yoki Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasining rasmiy veb-sayti orqali pedagog kadrlarga xabarnoma yuboriladi.

Ushbu xabarnoma QR-kodga ega bo‘lib, bunda pedagog kadrni attestatsiyaga jalb qilish sanalari, jalb qilinadigan fani, pedagog kadrning shaxsiy ma’lumotlari aks ettiriladi hamda shaxsni tasdiqlovchi hujjat bilan elektron yoki bosma ravishda taqdim etilganda, attestatsiya jarayoniga kirish uchun ruxsatnoma sifatida foydalaniladi.
<br/>

30. Hujjatlar to‘liq taqdim etilmagan hollarda Ta’lim inspeksiyasi tomonidan hujjatlar qabul qilinmaganligi to‘g‘risida davlat xizmatlari markaziga yoki Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasining rasmiy veb-sayti orqali pedagog kadrlarga xabarnoma yuboriladi.

Pedagog kadrlar hujjat qabul qilish to‘xtatilgunga qadar kamchiliklarni tuzatgan holda hujjatlarni qayta topshirishlari mumkin. Bunda pedagog kadrdan davlat xizmatini ko‘rsatganlik uchun yig‘im takroran undirilmaydi.
<br/>

31. Pedagog kadrlardan hujjatlarni qabul qilish har yili 1-mart va 1-oktabr sanalarida to‘xtatiladi.

Ta’lim inspeksiyasi tomonidan pedagog kadrlarning o‘quv fani bo‘yicha malaka sinovlarini o‘tkazish shakli hamda jadvali har yili 10-mart va 10-oktabrga qadar tasdiqlanadi, Ta’lim inspeksiyasining rasmiy veb-saytida e’lon qilinadi, tegishli vazirliklar va idoralarga hamda SMS-xabarnoma orqali pedagog kadrlarga yuboriladi.
<br/>

32. Mazkur Nizomning 8 — 10-bandlarida ko‘rsatilgan pedagog kadrlar har yili 1-yanvardan 31-dekabrga qadar to‘g‘ridan to‘g‘ri attestatsiyadan o‘tkazilmasdan malaka toifasi (lavozim) sertifikatini olish uchun bevosita davlat xizmatlari markazlari orqali yoki Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasining rasmiy veb-saytida ro‘yxatdan o‘tgan holda murojaat qiladilar.

Mazkur Nizomning 8 — 10-bandlarida ko‘rsatilgan pedagog kadrlarga to‘g‘ridan to‘g‘ri attestatsiyadan o‘tkazmasdan malaka toifasi (lavozim) sertifikatini berish bo‘yicha davlat xizmatini ko‘rsatganlik uchun yig‘im undirilmaydi.

Bevosita davlat xizmatlari markazlariga murojaat qilinganda mazkur Nizomning 8 — 10-bandlarida ko‘rsatilgan pedagog kadr nomidan davlat xizmatlari markazi xodimi, Yagona interaktiv davlat xizmatlari portali yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali murojaat qilinganda esa pedagog kadrning o‘zi mustaqil ravishda ushbu Nizomga 3-ilovaga muvofiq so‘rovnomani elektron tarzda to‘ldiradi.

Ta’lim inspeksiyasi tomonidan mazkur Nizomning 8 — 10-bandlarida ko‘rsatilgan pedagog kadrning to‘g‘ridan to‘g‘ri attestatsiyadan o‘tkazilmasdan malaka toifasi (lavozim) sertifikatini olish bo‘yicha so‘rovnomasi 20 kun muddatda ko‘rib chiqiladi va ijobiy qaror qabul qilinganda ularga mazkur Nizomga 4-ilovaga muvofiq QR-kod qo‘yilgan elektron shakldagi sertifikat beriladi.
          </p>
        </div>
        <div className="text-center mb-6">

          <p className="text-sm sm:text-base md:text-lg">3-bob. Pedagog kadrlarni attestatsiyadan o‘tkazish</p>
          <p className="text-left mt-5">33. Pedagog kadrlarni attestatsiyadan o‘tkazish ikki bosqichda amalga oshiriladi hamda ikkita bosqich bo‘yicha umumiy 100 ballik tizimda baholanadi.
<br/>
34. Birinchi bosqichda pedagog kadrlarning pedagogik mahorati va psixologik tayyorgarligi ta’lim tashkilotining pedagogik (kuzatuv) kengashlari tomonidan o‘rganiladi hamda mazkur Nizomga 5-ilovaga muvofiq baholash mezonlari asosida 20 ballik tizimda baholanadi.

Pedagog kadrlarning pedagogik mahorati va psixologik tayyorgarligi har bir attestatsiya uchun alohida baholanadi. Bunda oldingi attestatsiya jarayonida baholash obyekti bo‘lgan ko‘rsatkichlar keyingi attestatsiyaning pedagogik mahorat va psixologik tayyorgarlikni baholash bosqichida hisobga olinmaydi.

Manfaatdor vazirliklar va idoralar pedagog kadrlarning pedagogik mahorati va psixologik tayyorgarligini mazkur Nizomga 5-ilovaga muvofiq baholash mezonlari asosida o‘rganish va baholash uchun o‘z tizimidagi muassasalarni yoki mazkur faoliyatni amalga oshirishga ixtisoslashgan boshqa tashkilotlarni, shuningdek, mahalliy va xorijiy mutaxassislarni jalb qilishlari mumkin.

Pedagog kadrlarning pedagogik mahorati va psixologik tayyorgarligini baholash natijalari ushbu Nizomga 6-ilovaga muvofiq shakldagi ma’lumotnomaga kiritilib, ta’lim tashkiloti rahbarining imzosi va muhri bilan tasdiqlangan holda, Ta’lim inspeksiyasiga topshirish uchun pedagog kadrlarga taqdim etiladi.

Pedagog kadrlar pedagogik mahorat va psixologik tayyorgarlikni baholash natijalari yuzasidan ma’lumotnomada necha ball ko‘rsatilganidan qat’i nazar, attestatsiyaning keyingi bosqichida ishtirok etishlari mumkin.

Pedagogik mahorat va psixologik tayyorgarlikni baholash natijalari yuzasidan ma’lumotnoma attestatsiyadan o‘tish uchun hujjat topshirish boshlangan sanaga qadar ko‘pi bilan to‘rt oy muddat ichida berilgan bo‘lishi lozim.
<br/>

35. Ikkinchi bosqichda pedagog kadrlarning o‘quv fani bo‘yicha malaka sinovlari o‘tkaziladi.

Malaka sinovlari quyidagi shakllardan biri bo‘yicha o‘tkaziladi:
<br/>

test sinovlari;
<br/>

ijodiy;
<br/>

nazariy (og‘zaki, yozma);
<br/>

nazariy (og‘zaki, yozma) va amaliy.
<br/>

36. Test sinovlari har yili mart — may hamda oktyabr-noyabr oylarida Ta’lim inspeksiyasi tomonidan o‘tkaziladi.

Test sinovlari sanitariya qoidalari, normalari va gigiyena normativlariga, texnika va yong‘in xavfsizligi qoidalariga qat’iy rioya qilgan holda o‘tkaziladi.

Test sinovlari 40 ta savoldan iborat bo‘ladi, har bir to‘g‘ri bajarilgan test savoli 2 ball bilan baholanib, test sinovlari uchun jami 80 ball beriladi.

Umumiy o‘rta, o‘rta maxsus va professional ta’lim tashkilotlarining kamida S1 darajadagi milliy yoki unga mos darajadagi xalqaro sertifikatga ega chet (ingliz, fransuz, nemis, ispan, italyan, arab, xitoy, yapon, koreys, turk, fors, pushtu, dari, urdu, hind) tili fani o‘qituvchilariga navbatdagi majburiy attestatsiyada o‘quv fani bo‘yicha malaka sinovidan maksimal 80 ball beriladi hamda ular ushbu malaka sinovidan ozod etiladi.
<br/>

37. O‘quv fani bo‘yicha malaka sinovlari:

madaniyat va san’atga (tasviriy va amaliy san’at, dizayn, musiqa, teatr, sirk va xoreografiyaga) ixtisoslashtirilgan ta’lim tashkilotlari pedagog kadrlari uchun — ijodiy sinovlar shaklida;

jismoniy tarbiya va sportga ixtisoslashtirilgan ta’lim tashkilotlarining pedagog kadrlari uchun — nazariy (og‘zaki, yozma) sinovlar shaklida;

ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari uchun — nazariy (og‘zaki, yozma) va amaliy sinovlar shaklida o‘tkaziladi.

O‘quv (maxsus) fani bo‘yicha malaka sinovlari madaniyat va san’atga, jismoniy tarbiya va sportga ixtisoslashtirilgan ta’lim tashkilotlari pedagog kadrlari hamda ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari uchun test sinovlari shaklida ham tashkil etilishi mumkin.

O‘quv (maxsus) fani bo‘yicha malaka sinovlari chet tili fani o‘qituvchilari uchun tinglab tushunish, o‘qish, yozish va gapirish ko‘nikmasini baholashga qaratilgan ijodiy sinovlar shaklida o‘tkaziladi.

<br/>
38. Ijodiy, nazariy (og‘zaki, yozma), amaliy sinovlar Ta’lim inspeksiyasi hamda manfaatdor vazirliklar va idoralarning qo‘shma qarori bilan ro‘yxati tasdiqlanadigan ishchi guruhlar tomonidan har yili mart — may hamda oktyabr-noyabr oylarida o‘tkaziladi va mazkur Nizomga 7-ilovaga muvofiq baholash mezonlari asosida baholanadi.

Ishchi guruh a’zolarining uchdan ikki qismi ishtirok etganda yig‘ilish vakolatli hisoblanadi.

<br/>
39. Madaniyat va san’atga, jismoniy tarbiya va sportga ixtisoslashtirilgan ta’lim tashkilotlari pedagog kadrlari uchun ijodiy va nazariy (og‘zaki, yozma) sinovlar to‘rtta topshiriqdan (savoldan) iborat bo‘ladi va belgilangan vaqtda, to‘liq, to‘g‘ri va sifatli bajarilganligiga (to‘g‘ri javob berilganiga) ko‘ra har bir topshiriq uchun 20 balldan, jami 80 ballik tizimda baholanadi.

<br/>
40. Ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari uchun nazariy (og‘zaki, yozma) sinovlar to‘rtta savoldan iborat bo‘ladi va belgilangan vaqtda, to‘liq, to‘g‘ri va sifatli javob berilganligi ko‘ra har bir topshiriq uchun 5 balldan, jami 20 ballik tizimda baholanadi.

Ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari uchun amaliy sinovlar to‘rtta jismoniy mashqdan (100 metrga yugurish, joyidan turib uzunlikka sakrash, turnikda tortilish (erkaklar uchun), gimnastika o‘rindig‘iga tayanib, qo‘llarni bukish va yoyish (ayollar uchun), yotgan holda qo‘llarni bosh orqasiga qo‘yib gavdani ko‘tarish) iborat bo‘ladi, har bir mashq uchun 15 balldan, jami 60 ballik tizimda mazkur Nizomga 8-ilovaga muvofiq amaliy sinovlar normativlari asosida baholanadi.

Aholining jismoniy tayyorgarlik darajasini baholash tizimida yoshiga mos keladigan ixtiyoriy talablarni muvaffaqiyatli bajargan ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari amaliy sinovlardan ozod etiladi va ularga mazkur sinovlardan maksimal 60 ball beriladi.

<br/>
41. Ijodiy va nazariy (og‘zaki, yozma) sinovlar materiallari tizimida madaniyat va san’at, jismoniy tarbiya va sportga ixtisoslashtirilgan ta’lim muassasalari bo‘lgan vazirliklar va idoralar tomonidan ishlab chiqiladi.

<br/>
42. O‘quv fanidan malaka sinovlari Qoraqalpog‘iston Respublikasi, viloyatlar markazlari va Toshkent shahrida joylashgan ta’lim tashkilotlarida hamda boshqa tashkilotlarning katta sig‘imdagi binolarida oshkoralik va shaffoflikni ta’minlagan holda o‘tkaziladi.

Ta’lim tashkilotlarining jismoniy tarbiya fani o‘qituvchilari uchun amaliy sinovlar ta’lim tashkilotlarining stadionlarida yoki sport zallarida o‘tkaziladi.

<br/>
43. Attestatsiya jarayoni uchun sinov materiallari Ta’lim inspeksiyasi tomonidan testologiyaning xalqaro talablari asosida, xolislik va maxfiylikni ta’minlagan holda shakllantiriladi.

Attestatsiya jarayoni uchun sinov materiallarini shakllantirish uchun Ta’lim inspeksiyasi tomonidan manfaatdor vazirliklar va idoralar, ularning hududiy va idoraviy bo‘ysunuvidagi tashkilotlar, ilmiy-tadqiqot institutlarining yetakchi olimlari va malakali mutaxassislari, mahalliy va xorijiy ekspertlar, shuningdek, nodavlat tashkilotlar vakillari jalb etilishi mumkin.

Sinov materiallarini shakllantirish uchun jalb etiladigan shaxslarga Ta’lim inspeksiyasi bilan tuziladigan shartnomalar asosida haq to‘lanadi.
<br/>

43-1.Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fani bo‘yicha malaka sinovlari quyidagi bo‘limlardan iborat bo‘ladi:
<br/>

a) “tinglab tushunish” bo‘limi og‘zaki nutqni qabul qilish ko‘nikmalarini, eshitilgan matnlardagi asosiy fikr va detalni tushunish mahoratini tekshiradi;
<br/>

b) “o‘qish” bo‘limi o‘qilgan matnlardagi asosiy fikr va detalni tushunish mahoratini tekshiradi;
<br/>

v) “yozma ish” bo‘limi tegishli darajadagi grammatik tuzilishdan va talabgorning lug‘at zaxirasidan foydalangan holda, berilgan mavzular bo‘yicha bir-biri bilan bog‘langan matnlarni tuzish mahoratini tekshiradi;
<br/>

g) “gapirish” bo‘limi tegishli darajadagi grammatik tuzilishdan va lug‘at zaxirasidan foydalangan holda, berilgan savollarga mos javob berish va o‘z nuqtai nazarini asoslash mahoratini tekshiradi.
<br/>

43-2.. Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fani bo‘yicha malaka sinovi qog‘oz blankalarda yoki kompyuterda (onlayn platforma orqali) o‘tkazilishi mumkin. Malaka sinovini o‘tkazish joyi Ta’lim inspeksiyasi tomonidan belgilanadi.

Yozma yoki og‘zaki malaka sinovi uchun imtihon komissiyasi tashkil etiladi.

Imtihon komissiyasining tarkibi Ta’lim inspeksiyasi rahbarining buyrug‘i bilan tasdiqlanadi va unga Ta’lim inspeksiyasi xodimlari, tajribali pedagoglar va malakali mutaxassislar kiritiladi.

Malaka sinovi qog‘oz blankalarda o‘tkazilganda, ikki bosqichdan iborat bo‘ladi. Bunda birinchi bosqich “tinglab tushunish”, “o‘qish”, “yozma ish” bo‘limlaridan, ikkinchi bosqich “gapirish” bo‘limidan tashkil topadi.

Malaka sinovi tegishli maxsus dasturlar asosida kompyuterda o‘tkazilganda, barcha bo‘limlar qamrab olingan holda bir bosqichda amalga oshiriladi.
<br/>

43-3. Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fani bo‘yicha malaka sinovlariga jalb etiladigan imtihon komissiyasi a’zolari va kuzatuvchilar bilan shartnoma tuziladi.
<br/>

43-4. “Tinglab tushunish”, “o‘qish” bo‘limlari bo‘yicha bilimlar maxsus dasturlar yordamida kompyuterda tekshiriladi. “Yozma ish” va “gapirish” bo‘limlari bo‘yicha bilimlar maxsus dasturlar yordamida Ta’lim inspeksiyasining mas’ul tarkibiy bo‘linmasi nazorati ostida imtihon komissiyasi tomonidan tekshiriladi va natijalari rasmiylashtiriladi.
<br/>

43-5. Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fani bo‘yicha malaka sinovi jarayonida:
<br/>

“tinglab tushunish” uchun — 30 daqiqa;
<br/>

“o‘qish” uchun — 45 daqiqa;
<br/>

“yozma ish” uchun — 30 daqiqa;
<br/>

“gapirish” uchun — 10 daqiqa vaqt ajratiladi.
<br/>

43-6. Malaka sinovida:
<br/>

“tinglab tushunish”, “o‘qish” bo‘limlarining har biri 30 ta savoldan;
<br/>

“yozma ish” bo‘limi 120 — 150 ta so‘zdan iborat topshiriqdan;
<br/>

“gapirish” bo‘limi topshiriqlarning 3 ta turidan iborat bo‘ladi.
<br/>

43-7. Ta’lim inspeksiyasi malaka sinovi natijalarini sinov yakunlangan kundan boshlab bir haftadan kechikmasdan, Internet jahon axborot tarmog‘idagi rasmiy veb-saytida e’lon qiladi.
<br/>

43-8. Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fanidan malaka sinovi har bir bo‘limining eng yuqori bahosi 20 ballni va barcha bo‘limlar uchun maksimal baho 80 ballni tashkil etadi.
<br/>

43-9. Chet tili fani o‘qituvchilari uchun o‘quv (maxsus) fanidan malaka sinovini tashkil etish va o‘tkazish bilan bog‘liq jarayonlarda ishtirok etadigan Ta’lim inspeksiyasi xodimlari, imtihon komissiyasi a’zolari, sinov materiallarini tayyorlaydigan ekspertlar va mutaxassislarni xalqaro hamda xorijiy tashkilotlar tomonidan o‘qitish hamda metodik yordam ko‘rsatish bilan bog‘liq xarajatlar Ta’lim inspeksiyasining Davlat budjetidan ajratilgan mablag‘lari doirasida hamda budjetdan tashqari mablag‘lari hisobidan qoplanadi.
<br/>

43-10. Pedagog kadr quyidagi hollarda o‘quv (maxsus) fani bo‘yicha malaka sinovlaridan chetlashtiriladi:
<br/>

sinov o‘tkazilayotgan auditoriyaga har qanday adabiyot, shpargalka yoki telekommunikatsiya va texnika vositalarini olib kirsa;
<br/>

sinov o‘tkazilayotgan vaqtda boshqa ishtirokchilar bilan muloqot qilsa;
<br/>

savollarni ko‘chirib olishga hamda sinov materiallarini auditoriyadan olib chiqishga harakat qilsa;
<br/>

sinov materiallarini boshqa talabgorlarga bersa, sinovni o‘tkazish jarayoniga xalaqit qilsa;
<br/>

sinov jarayoniga boshqa talabgorning o‘rniga kirganligi aniqlansa;
<br/>

sinovlar uchun ajratilgan vaqt tugagandan so‘ng sinov materiallarini topshirishdan bosh tortsa;
<br/>

sinovlar jarayonida videokuzatuvlar orqali talabgorning tartib va qoidalarga amal qilmaganligi aniqlansa.
<br/>

44. Ikkita bosqich natijalariga ko‘ra:
<br/>

a) oliy malaka toifali yoki bosh o‘qituvchi lavozimidagi pedagog kadr:

80 ball va undan yuqori ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, oliy malaka toifasi (bosh o‘qituvchi lavozimi) saqlangan;

80 balldan kam ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tmagan, birinchi malaka toifasiga (yetakchi o‘qituvchi lavozimiga) tushirilgan (navbatdan tashqari attestatsiyaga jalb etilgan pedagog kadrlar bundan mustasno);
<br/>

b) birinchi malaka toifali yoki yetakchi o‘qituvchi lavozimidagi pedagog kadr:

80 ball va undan yuqori ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, oliy malaka toifasi (bosh o‘qituvchi lavozimi) berilgan;

70 balldan 79 ballgacha ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, birinchi malaka toifasi (yetakchi o‘qituvchi lavozimi) saqlangan;

70 balldan kam ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tmagan, ikkinchi malaka toifasiga (katta o‘qituvchi lavozimiga) tushirilgan (navbatdan tashqari attestatsiyaga jalb etilgan pedagog kadrlar bundan mustasno);
<br/>

v) ikkinchi malaka toifali yoki katta o‘qituvchi lavozimidagi pedagog kadr:

70 ball va undan yuqori ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, birinchi malaka toifasi (yetakchi o‘qituvchi lavozimi) berilgan;

60 balldan 69 ballgacha ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, ikkinchi malaka toifasi (katta o‘qituvchi lavozimi) saqlangan;

60 balldan kam ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tmagan, mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimiga tushirilgan (navbatdan tashqari attestatsiyaga jalb etilgan pedagog kadrlar bundan mustasno);
<br/>

g) mutaxassis yoki oliy ma’lumotli o‘qituvchi lavozimidagi pedagog kadr:

60 ball va undan yuqori ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, ikkinchi malaka toifasi (katta o‘qituvchi lavozimi) berilgan;

55 balldan 59 ballgacha ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tgan, mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimi saqlangan;

55 balldan kam ko‘rsatkichga ega bo‘lsa — attestatsiyadan o‘tmagan, mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimiga muvofiq emas deb (navbatdan tashqari attestatsiyaga jalb etilgan pedagog kadrlar bundan mustasno) hisoblanadi.

Navbatdan tashqari attestatsiyaga jalb etilgan pedagog kadrlar attestatsiyadan o‘ta olmagan taqdirda, ularning malaka toifasi (lavozimi) tushirilmaydi hamda ular lavozimiga muvofiq emas deb hisoblanmaydi.

Mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimidagi pedagog kadrlar navbatdagi majburiy attestatsiyadan o‘ta olmagan taqdirda, ish beruvchi xodimning malakasi yetarli bo‘lmaganligi sababli u bilan tuzilgan mehnat shartnomasini mehnat to‘g‘risidagi qonunchilik hujjatlarida belgilangan tartibda bekor qilish huquqiga ega.
<br/>

44-1. Ish beruvchi mehnat shartnomasini bekor qilmagan taqdirda, navbatdagi majburiy attestatsiyadan o‘ta olmagan mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimidagi pedagog kadr navbatdan tashqari attestatsiyaga ko‘pi bilan uch marta jalb etiladi. Bunda uch martadan birortasida ham navbatdan tashqari attestatsiyadan o‘ta olmagan yoki uzrli sababsiz (kasallikka chalinishi oqibatida uzoq muddatli mehnatga qobiliyatsizlik hamda davlat yoki jamoat vazifalarini bajarganligidan tashqari hollarda) attestatsiyada ishtirok etmagan pedagog kadr bilan tuzilgan mehnat shartnomasi xodimning malakasi yetarli bo‘lmaganligi sababli bekor qilinadi.
<br/>

45. Pedagog kadrlar attestatsiyaning biror bosqichida uzrli sababga (vaqtincha mehnatga qobiliyatsizligi, davlat yoki jamoat vazifalarini bajarganligi, respublika va xalqaro musobaqalarda ishtirok etganligi, vaqtincha xorijiy mamlakatda safarda bo‘lganligi, yaqin qarindoshining vafoti, vakolatli davlat organi yoki ta’lim tashkilotlari rahbarlarining ma’lumotnomasida ko‘rsatilgan boshqa asoslarga) ko‘ra kelmagan bo‘lsa, ularning attestatsiyasi boshqa muddatga ko‘chiriladi.
<br/>

46. Pedagog kadr uzrsiz sababga ko‘ra attestatsiyada ishtirok etmagan bo‘lsa, u attestatsiyadan o‘tmagan hisoblanadi hamda uning tegishli malaka toifasi (lavozimi) bir pog‘ona tushiriladi.

Uzrsiz sababga ko‘ra attestatsiyada ishtirok etmagan mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimidagi pedagog kadr attestatsiyadan o‘tmagan hisoblanadi hamda ish beruvchi xodimning malakasi yetarli bo‘lmaganligi sababli u bilan tuzilgan mehnat shartnomasini mehnat to‘g‘risidagi qonunchilik hujjatlarida belgilangan tartibda bekor qilish huquqiga ega.
<br/>

47. Attestatsiya yakunlanganidan so‘ng bir oy muddatda Ta’lim inspeksiyasi boshlig‘ining buyrug‘i bilan attestatsiya natijalariga ko‘ra oliy, birinchi va ikkinchi malaka toifalari hamda bosh, yetakchi va katta o‘qituvchi lavozimlari berilgan pedagog kadrlarning ro‘yxati tasdiqlanadi hamda ro‘yxatga asosan pedagog kadrlarga mazkur Nizomga 9-ilovaga muvofiq shakldagi QR-kod qo‘yilgan elektron shakldagi sertifikatlar (keyingi o‘rinlarda — sertifikat) Ta’lim inspeksiyasining rasmiy veb-sayti orqali onlayn generatsiya qilinadi.

Navbatdagi majburiy va navbatdan tashqari attestatsiya natijalariga ko‘ra malaka toifasi (lavozimi) oshirilgan yoki saqlangan, shuningdek, navbatdagi majburiy attestatsiya natijalariga ko‘ra malaka toifasi (lavozimi) tushirilgan pedagog kadrlarning oylik ish haqlariga kiritiladigan o‘zgarishlar avtomatik tarzda hisoblab chiqarilishi uchun Ta’lim inspeksiyasining rasmiy veb-sayti UzASBO yoki boshqa moliyaviy hisob-kitob dasturlari hamda maktab boshqaruv (ERP) dasturlari bilan integratsiya qilinadi.

Pedagog kadrlar davlat xizmatlari markaziga borish yoki Yagona interaktiv davlat xizmatlari portali yoxud Ta’lim inspeksiyasining rasmiy veb-saytida joylashgan shaxsiy kabinetiga kirish orqali elektron shakldagi sertifikatni yuklab olishi mumkin.

<br/>
48. Pedagog kadrlarning bazaviy tarif stavkalari miqdori, ularning malaka toifasi yoki lavozimi sertifikat asosida belgilanadi hamda ularning ish haqlari sertifikat generatsiya qilingan kundan boshlab qayta hisoblanadi.

<br/>
49. Attestatsiyadan o‘tganlik muddati tugagan va navbatdagi majburiy attestatsiyadan ozod etilmagan pedagog kadrlarga mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimi bo‘yicha haq to‘lanadi.

<br/>
50. Attestatsiyadan o‘tganlik muddati tugab, mutaxassis (oliy ma’lumotli o‘qituvchi) lavozimi bo‘yicha haq to‘lanayotgan pedagog kadrlar navbatdagi majburiy attestatsiyaga oxirgi olgan malaka toifasi (lavozimi) bo‘yicha jalb qilinadi.
          </p>
        </div>
        <div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">4-bob. Attestatsiya natijalari yuzasidan murojaat qilish</p>
<p className="text-left mt-5">51. Attestatsiya natijalaridan norozi bo‘lgan pedagog kadrlar natijalar e’lon qilingan kundan boshlab o‘n kun mobaynida apellatsiya komissiyasiga yozma ravishda ariza (shikoyat) berishlari mumkin.
<br/>
52. Apellatsiya komissiyasi attestatsiya boshlangandan keyin o‘n kun ichida Ta’lim inspeksiyasi boshlig‘ining buyrug‘iga ko‘ra har bir ta’lim turi bo‘yicha yetti kishidan iborat tarkibda tuziladi.

Apellatsiya komissiyasi tarkibi Ta’lim inspeksiyasi boshlig‘ining o‘rinbosari (komissiya raisi), manfaatdor vazirlik va idoraning sohaga mas’ul tarkibiy bo‘linmasi rahbari (komissiya raisi o‘rinbosari), Ta’lim inspeksiyasi xodimlari (bir nafari — komissiya kotibi), manfaatdor vazirlik va idoraning kasaba uyushmasi vakili hamda xodimlaridan iborat bo‘ladi.

Apellatsiya komissiyasiga murojaat qilish yozma ravishda yoki Ta’lim inspeksiyasining rasmiy veb-sayti orqali elektron tarzda amalga oshiriladi.
<br/>

53. Apellatsiya komissiyasining tarkibi va ish tartibi apellatsiya komissiyasini tashkil etish to‘g‘risidagi buyruqda belgilanadi.

Apellatsiya komissiyasining murojaatlarni masofadan turib onlayn tarzda ko‘rib chiqish vaqtlari to‘g‘risidagi ma’lumotlar Ta’lim inspeksiyasining rasmiy veb-saytiga joylashtiriladi.
<br/>

54. Apellatsiya komissiyasi tarkibiga ishchi guruhlar tarkibidan a’zo kiritilmaydi.
<br/>

55. Apellatsiya komissiyasi muammoli holatlarga aniqlik kiritish uchun jamoatchilik asosida malakali mutaxassislarni jalb etishi mumkin.
<br/>

56. Apellatsiya komissiyasi yig‘ilishida komissiya a’zolarining yarmidan ko‘pi ishtirok etsa, uning qabul qilgan qarori qonuniy kuchga ega bo‘ladi.
<br/>

57. Ariza (shikoyat) ro‘yxatga olingan kundan boshlab o‘n kun muddatda ko‘rib chiqiladi.
<br/>

58. Murojaat etuvchi pedagog kadrlar apellatsiya komissiyasi tomonidan murojaati ko‘rib chiqilishi jarayonida bevosita yoki masofadan turib onlayn tarzda ishtirok etishi mumkin.
<br/>

59. Apellatsiya komissiyasi pedagog kadrning attestatsiya jarayonlariga oid murojaatini ko‘rib chiqib, quyidagi qarorlardan birini qabul qiladi:

pedagog kadrning to‘g‘ri baholanganligi, o‘quv fani bo‘yicha test va malaka sinovi materiallarida xato va kamchiliklar, shuningdek, sinovlarni o‘tkazish jarayonida tashkiliy-texnik jihatdan kamchiliklar aniqlanmagan taqdirda, attestatsiya natijalarini o‘zgartirishsiz qoldirish;

pedagog kadrning pedagogik mahorati va psixologik tayyorgarligi noto‘g‘ri baholanganligi, o‘quv fani bo‘yicha test yoki malaka sinovi materiallarida xato va kamchiliklar mavjudligi aniqlangan taqdirda, attestatsiya natijalarini o‘zgartirish;

o‘quv fani bo‘yicha test yoki malaka sinovlarini o‘tkazish jarayonida tashkiliy-texnik jihatdan kamchiliklar mavjudligi aniqlangan taqdirda, test sinovlarining qaytadan topshirilishini tashkil etish.
<br/>

60. Apellatsiya komissiyasi qarori nusxasi murojaat etuvchi pedagog kadrga apellatsiya komissiyasi qarori chiqqan kundan e’tiboran besh kun muddatda taqdim etiladi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">5-bob. Yakunlovchi qoidalar</p>
<p className="text-left mt-5">61 Ta’lim inspeksiyasi hamda manfaatdor vazirliklar va idoralarning qo‘shma qarori, Ta’lim inspeksiyasi rahbarining buyrug‘i yoki apellatsiya komissiyasi qarori yuzasidan pedagog kadrlar qonunchilik hujjatlarida belgilangan tartibda sudga shikoyat qilishi mumkin.
<br/>
62. Ushbu Nizom talablari buzilishida aybdor bo‘lgan shaxslar qonunchilik hujjatlarida belgilangan tartibda javob beradilar.
</p>
</div>
      </main>
      <Footer />
    </div>
  );
};

export default Atestatsiya;