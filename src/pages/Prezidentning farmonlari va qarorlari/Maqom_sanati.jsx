import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Maqom_sanati = () => {
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
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">O'zbek milliy maqom san'atini yanada rivojlantirish chora-tadbirlari to'g'risida</h2>
          <p className="text-left mt-5 font-['Montserrat', 'sans-serif']">Xalqimiz madaniy merosining ajralmas qismi bo‘lgan milliy maqom san’ati o‘zining qadimiy tarixi, teran falsafiy ildizlari, betakror badiiy uslubi va boy ijodiy an’analari bilan ma’naviy hayotimizda alohida muhim o‘rin egallaydi.

Asrlar davomida ulug‘ shoir va olimlar, mohir bastakorlar, hofiz va sozandalarning mashaqqatli mehnati va fidoiyligi, ijodiy tafakkuri bilan sayqal topib kelayotgan ushbu noyob san’at nafaqat yurtimiz va sharq mamlakatlarida, balki dunyo miqyosida katta shuhrat va e’tibor qozongan. Maqom san’atining gultoji bo‘lgan “Shashmaqom” YUNESKO tomonidan insoniyatning nomoddiy madaniy merosi sifatda e’tirof etilgani hamda uning Reprezentativ ro‘yxatiga kiritilgani buning yaqqol tasdig‘idir.

O‘tgan davr mobaynida mamlakatimizda maqom san’atini o‘rganish va rivojlantirish borasida muayyan ishlar amalga oshirildi. Ayniqsa, o‘zbek “Shashmaqomi” nota matnlarining nashr etilishi va ularga muvofiq ravishda maqom kuy-qo‘shiqlarining magnit lentalarga yozib olinishi ulkan ilmiy-madaniy ahamiyatga ega voqea bo‘ldi.

Hozirgi kunda yurtimizda Yunus Rajabiy nomidagi Maqom ansambli, hududlarda maqom jamoalari, O‘zbekiston davlat konservatoriyasida shu yo‘nalishda maxsus kafedra faoliyat ko‘rsatayotgani, sohaga oid ilmiy izlanishlar olib borilayotganini qayd etish lozim.

Ayni vaqtda milliy o‘zligimizni anglash, madaniyatimizni har tomonlama rivojlantirish, xalqimiz, avvalo, yosh avlodimizni yuksak insoniy tuyg‘ular ruhida tarbiyalash, uning estetik didi va tafakkurini shakllantirishda maqom san’atining keng imkoniyatlaridan yetarlicha foydalanilmayapti.

Mazkur yo‘nalishda chuqur ilmiy-nazariy tadqiqotlar, o‘quv-uslubiy adabiyotlar yaratish, maqom san’atini radio-televideniye, ommaviy axborot vositalari, Internet tarmog‘i orqali mamlakatimizda va chet ellarda targ‘ib etish, maqom ustozlari, soha olimlari va mutaxassislarining, iqtidorli va istiqbolli yosh ijrochilar faoliyatini moddiy va ma’naviy jihatdan qo‘llab-quvvatlash ishlari e’tibordan chetda qolib kelmoqda.

Yuqorida zikr etilgan kamchilik va muammolarni bartaraf etish, o‘zbek maqom san’atini chuqur o‘rganib, o‘ziga xos ijro maktablari va an’analarni yangi bosqichda ravnaq toptirish, uning “oltin fondi”ni yaratish va boyitish, xalqaro nufuzini oshirish va keng targ‘ib qilish maqsadida:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi, Fanlar akademiyasi, O‘zbekiston Milliy teleradiokompaniyasi, Respublika ma’naviyat va ma’rifat markazi, O‘zbekiston kompozitorlari va bastakorlari uyushmasining davlat muassasasi shaklida O‘zbek milliy maqom san’ati markazi (keyingi o‘rinlarda — Maqom markazi) faoliyatini tashkil etish haqidagi taklifi ma’qullansin.
<br/>
2. Quyidagilar:

O‘zbek milliy maqom san’atini yanada rivojlantirishga doir chora-tadbirlar dasturini amalga oshirish bo‘yicha Respublika komissiyasi tarkibi 1-ilovaga;

O‘zbek milliy maqom san’atini yanada rivojlantirishga doir chora-tadbirlar dasturi 2-ilovaga;

O‘zbek milliy maqom san’ati markazining tarkibiy tuzilmasi 3-ilovaga muvofiq tasdiqlansin.
3. O‘zbek milliy maqom san’ati markazining asosiy vazifalari etib quyidagilar belgilansin:

O‘zbekistonda maqom san’atini yanada rivojlantirish, bu borada shakllangan ijro va ijodiy maktablari va an’analarni, buyuk bastakorlar, hofiz va sozandalar merosini chuqur ilmiy asosda o‘rganish va qayta tiklash;

o‘zbek maqom san’ati mumtoz va zamonaviy ijro namunalarining “oltin fondi”ni yaratish;

xalqimiz, xususan, yosh avlodni maqom san’ati bilan keng tanishtirish orqali ularda milliy o‘zlikni anglash tuyg‘usi yuksak badiiy-estetik did va tafakkurni kamol toptirish;
maqom san’ati bo‘yicha ilmiy tadqiqotlar olib borish va targ‘ib qilish bo‘yicha xalqaro hamkorlikni yo‘lga qo‘yish;

mumtoz musiqa merosimiz namunalarini notaga olish, mavjud yozuvlarni takomillashtirish va amaliyotga joriy etish, maqom san’atining ijtimoiy-tarixiy ildizlari, ilmiy-nazariy negizlari, milliy va umumbashariy qadriyatlar bilan bog‘liq jihatlarini yurtimiz olimlari va chet ellik mutaxassislar ishtirokida chuqur o‘rganib, yangi ilmiy tadqiqotlar yaratish;
maqom san’atining ko‘p asrlik ijro yo‘llarini puxta o‘zlashtirib, ularni yangicha usullar bilan boyitib, yosh avlod vakillariga o‘rgatib kelayotgan maqomchilar, maqomshunos ilmiy-pedagog olimlar va mutaxassislar, Maqom markazi xodimlari faoliyatini moddiy va ma’naviy jihatdan qo‘llab-quvvatlash;

Yurtimizda maqom san’ati bo‘yicha xorijiy yetuk ijrochilarning o‘zaro tajriba almashuvi, mahorat darslari hamda turli xalqaro maqom anjumanlari va tanlovlarini tashkil etish;

respublika hududlarida taniqli maqom ijrochilarining konsertlarini va mahorat darslarini tashkillashtirish;

maqom san’atini radio-televideniye, ommaviy axborot vositalari va Internet orqali O‘zbekiston va chet ellarda keng targ‘ib etish.
<br/>

4. Madaniyat vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, Moliya vazirligi:
<br/>

O‘zbekiston davlat konservatoriyasining Musiqiy sharqshunosliq kafedrasi negizida “O‘zbek maqomi tarixi va nazariyasi” kafedrasini tashkil etish, viloyatlardagi pedagogik oliy ta’lim muassasalarining musiqiy ta’lim yo‘nalishida maqom san’atini maxsus fan sifatida o‘qitishni joriy etish;

mazkur ta’lim muassasalariga malakali mutaxassislar, professor-o‘qituvchilarni jalb etish, ular uchun zarur shart-sharoitlarni yaratish, tegishli darslik, o‘quv qo‘llanma va ilmiy-uslubiy adabiyotlar bilan ta’minlash;

respublikadagi mavjud bolalar musiqa va san’at maktablari xamda madaniyat va san’at kollejlari va akademik litseylarda maqom san’atini o‘qitish bo‘yicha bo‘limlar faoliyatini yanada kuchaytirish;

maqom san’atining ijodiy, ilmiy-uslubiy va ijro an’analarini puxta o‘zlashtirish va munosib davom ettirish maqsadida, ta’lim muassasalariga mohir maqomchi san’atkorlarni biriktirish va shu asosda “ustoz-shogird” maktablarini tashkil etish vazifasi topshirilsin.
<br/>
5. 2018-yildan boshlab Shahrisabz shahrida har ikki yilda bir marta Xalqaro maqom san’ati anjumanini o‘tkazish belgilansin.
<br/>

Respublika komissiyasiga:

Madaniyat vazirligi, Tashqi ishlar vazirligi, YUNESKO ishlari bo‘yicha O‘zbekiston Respublikasi milliy komissiyasi, Qurilish vazirligi, Qashqadaryo viloyati hokimligi bilan birgalikda, 6 oy muddatda Shahrisabz shahrining Oqsaroy maydonida mazkur anjumanni o‘tkazish uchun zarur madaniy infratuzilma inshootlarini barpo etish bo‘yicha takliflar kiritish;

Xalqaro maqom san’ati anjumanining ilmiy-ijodiy konsepsiyasi va Nizomini ishlab chiqish;

Oqsaroy maydonining tarixiy qismida maqom san’atiga bag‘ishlangan muzey va milliy sozlar laboratoriyasini tashkil etish;

Shahrisabz shahar madaniyat saroyini kapital ta’mirlash, hozirgi vaqtda Oqsaroy maydonidagi mavjud Maqom markazi hamda bolalar musiqa va san’at maktabi faoliyatlarini takomillashtirish;v

Xalqaro maqom san’ati anjumanini yuksak saviyada o‘tkazish uchun xorijiy davlatlardan taniqli musiqashunos olimlar, san’atkorlar, ijodiy jamoalar va mutaxassislarni taklif etish;

2018-yildan boshlab sohada faol ijod qilayotgan san’atkorlarni qo‘llab-quvvatlash va rag‘batlantirish maqsadida “Eng yaxshi maqom xonandasi”, “Eng yaxshi maqom sozandasi”, “Eng yaxshi maqom ustozi”, “Eng yaxshi maqom targ‘ibotchisi”, “Eng yaxshi yosh maqomchi” kabi nominatsiyalar bo‘yicha mukofotlar ta’sis etish;

O‘zbek milliy maqom san’atini yanada rivojlantirishga doir chora-tadbirlar dasturida belgilangan vazifalar ijrosini ta’minlash vazifalari yuklatilsin.

<br/>
6. Maqom markazi O‘zbekiston Milliy teleradiokompaniyasining “Toshkent radioeshittirish uyi” binosiga ijara to‘lovisiz vaqtincha joylashtirilsin. (Toshkent shahar, Yashnobod tumani, Maxtumquli ko‘chasi 49-uy.)

Madaniyat vazirligi, “Davarxitektqurilish” qo‘mitasi, Moliya vazirligi, Iqtisodiyot vazirligi, Toshkent shahar hokimligi 1 oy muddatda Maqom markazi uchun zamonaviy talablarga javob beradigan loyiha asosida yangi bino qurish bo‘yicha taklif kiritsin.

O‘zbekiston Milliy teleradiokompaniyasi o‘z tizimi uchun budjetdan ajratilgan yillik mablag‘lari doirasida doimiy ravishda “Toshkent radioeshittirish uyi”da ovoz yozish studiyalari va texnik vositalardan Maqom markazi uchun bepul foydalanish va Maqom ansambli tomonidan ijro etiladigan musiqiy asarlarni yozib olish, efirga berish va targ‘ibot qilishni ta’minlasin.

<br/>
7. Maqom yo‘nalishida ijod qilib kelayotgan ijodiy jamoalar, ansambllar 2023-yilgacha barcha soliq to‘lovlaridan ozod etilsin.

<br/>
8. O‘zbekiston Respublikasi Moliya vazirligi.

Maqom markaziga 1 ta yengil avtomobil va 1 ta avtobus harid qilish uchun mablag‘lar ajratsin.

“Toshkent radioeshittirish uyi”da Maqom markaziga ajratilgan xonalarni joriy ta’mirlash uchun mablag‘ ajratsin.

Maqom san’atini tadqiq qilish bilan bog‘liq ilmiy izlanishlar, o‘quv qo‘llanmalar, tarjimalar, ilmiy va uslubiy adabiyotlarni nashr qilish harajatlari O‘zbekiston Respublikasi Davlat budjetining parametrlarida ijtimoiy sohaga nazarda tutilgan mablag‘lar doirasida moliyalashtirilishini ta’minlasin.

O‘zbek milliy maqom san’ati markazini moliyalashtirish hamda Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahrida tashkil etiladigan hududiy bo‘limlarini saqlab turish va moddiy-texnika bazasini mustahkamlash bilan bog‘liq xarajatlarni qoplash O‘zbekiston Respublikasi Davlat budjeti mablag‘lari, o‘z daromadlari va qonun hujjatlarida taqiqlanmagan boshqa manbalar hisobiga amalga oshiriladi.
<br/>

9. Madaniyat vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, Moliya vazirligi, Iqtisodiy taraqqiyot va kambag‘allikni qisqartirish vazirligi, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar hokimliklari uch oy muddatda viloyatlarda O‘zbek milliy maqom san’ati markazining yuridik shaxs maqomiga ega bo‘lgan hududiy bo‘limlarini tashkil etsin.
<br/>

10. O‘zbekiston Respublikasi Tashqi ishlar vazirligi O‘zbekiston Respublikasi Madaniyat vazirligiga maqom san’atini rivojlantirish va targ‘ib qilish bo‘yicha xorijiy davlatlar bilan olib boriladigan barcha hamkorlik ishlarini o‘rnatilgan tartibda tashkil etishda amaliy yordam ko‘rsatsin.
<br/>

11. O‘zbekiston Milliy teleradiokompaniyasi, O‘zbekiston Milliy axborot agentligi, “Jahon” axborot agentligi maqom san’atini rivojlantirish bo‘yicha bajarilgan ishlarni muntazam ravishda yoritib borish maqsadida alohida dastur ishlab chiqsin va amalga oshirsin.
<br/>

12. O‘zbekiston Respublikasi Madaniyat vazirligi O‘zbekiston Respublikasi Adliya vazirligi bilan birgalikda, bir oy muddatda qonun hujjatlariga ushbu qarordan kelib chiqadigan o‘zgartirish va qo‘shimchalar kiritish to‘g‘risida O‘zbekiston Respublikasi Vazirlar Mahkamasiga takliflar kiritsin.
<br/>

13. Mazkur qarorning ijrosini nazorat qilish O‘zbekiston Respublikasining Bosh vaziri A. Aripov va O‘zbekiston Respublikasi Prezidentining Davlat maslahatchisi X. Sultonov zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh.,<br />
              2017-yil 17-noyabr,
<br />
PQ-3391-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Prezidenti I. KARIMOV</p>
    <p>
O‘zbekiston Respublikasi Prezidentining 2017-yil 17-noyabrdagi PQ-3391-son qaroriga
1-ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">O‘zbek milliy maqom san’atini yanada rivojlantirishga doir chora-tadbirlar dasturini amalga oshirish bo‘yicha Respublika komissiyasi
          TARKIBI</p>
          <p className="text-left mt-5">Izoh: Tashkiliy qo‘mita a’zolari boshqa ishga o‘tganda, uning tarkibiga ushbu lavozimga yangidan tayinlangan yoki zimmasiga tegishli vazifalarini bajarish yuklangan shaxslar kiritiladi.
            <br/>
            
Aripov A.	—	O‘zbekiston Respublikasining Bosh vaziri, tashkiliy qo‘mita raisi
<br/>
Sultonov X.	—	O‘zbekiston Respublikasi Prezidentining Davlat maslahatchisi
<br/>
Mamatov R.	—	O‘zbekiston Respublikasi mahalla va oilani qo‘llab-quvvatlash vaziri
<br/>
Sayfullayev B.	—	O‘zbekiston Respublikasi Madaniyat vaziri
<br/>
Saidova G.	—	O‘zbekiston Respublikasi Iqtisodiyot vaziri
<br/>
Xadjayev B.	—	O‘zbekiston Respublikasi Moliya vaziri
<br/>
Davletov R.	—	O‘zbekiston Respublikasi Adliya vaziri
<br/>
Majidov I.	—	O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vaziri
<br/>
Inoyatov U.	—	O‘zbekiston Respublikasi Xalq ta’limi vaziri
<br/>
Komilov A.	—	O‘zbekiston Respublikasi Tashqi ishlar vaziri
<br/>
Abduhalimov B.	—	O‘zbekiston Fanlar Akademiyasi vitse-prezidenti
<br/>
Boltabayev M.	—	O‘zbekiston Fan va texnologiyalar agentligi bosh direktori
<br/>
Usmanov R.	—	Toshkent shahar hokimi
<br/>
Ro‘ziyev Z.	—	Qashqadaryo viloyati hokimi
<br/>
Xadjayev A.	—	O‘zbekiston Milliy teleradiokompaniyasi raisi v.v.b.
<br/>
Ko‘chimov A.	—	O‘zbekiston Milliy axborot agentligi bosh direktori
<br/>
Tangriyev L.	—	O‘zbekiston Matbuot va axborot agentligi bosh direktori
<br/>
Abdullayev R.	—	O‘zbekiston kompozitorlar va bastakorlar uyushmasi raisi
<br/>
Axmedov M.	—	O‘zbekiston Yozuvchilar uyushmasi raisi
<br/>
Qodirov A.	—	Respublika ma’naviyat va ma’rifat markazi rahbari
<br/>
Zakirov B.	—	“Davarxitektqurilish” qo‘mitasi raisi
<br/>
IsmoilovA.	—	Yunus Rajabiy nomidagi “Maqom” ansambli badiiy rahbari
<br/>
Ibrohimov O.	—	O‘zbekiston Fanlar akademiyasi San’atshunoslik ilmiy-tadqiqot instituti yetakchi ilmiy xodimi
<br/>
Begmatov S.	—	O‘zbekiston davlat konservatoriyasi professori
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
<div className='text-right'>
<p>
O‘zbekiston Respublikasi Prezidentining 2017-yil 17-noyabrdagi PQ-3391-son qaroriga
2-ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">O‘zbek milliy maqom san’atini yanada rivojlantirishga doir chora-tadbirlar
          DASTURI</p>

<div className='flex justify-between items-center mt-5 font-bold'>
<div className='text-right'>
<p>
O‘zbekiston Respublikasi Prezidentining 2017-yil 17-noyabrdagi PQ-3391-son qaroriga
2-ILOVA</p>
</div>              
            </div>

{/* --- DASTUR TABLE START --- */}
<div className="overflow-x-auto mt-10 mb-10">
  <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-xl">
    <thead className="bg-sky-100">
      <tr>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">T/r</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Amalga oshiriladigan chora-tadbirlar</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Ijro muddati</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Mas’ul ijrochilar</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-xs sm:text-sm md:text-base">
      <tr><td className="border px-2 py-2">1</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazining Ustavini ishlab chiqish va o‘rnatilgan tartibda davlat ro‘yxatdan o‘tkazilishini ta’minlash.</td><td className="border px-2 py-2">2017-yil noyabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Adliya vazirligi</td></tr>
      <tr><td className="border px-2 py-2">2</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazining shtatlar jadvalini ishlab chiqish va uni tasdiqlash, bunda konsert va ilmiy-tadqiqot muassasalar tashkilotlari xodimlari meqnatiga haq to‘lash tartibini qo‘llashni nazarda tutgan holda joriy etish.</td><td className="border px-2 py-2">2017-yil dekabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Bandlik va mehnat munosabatlari vazirligi, Moliya vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">3</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazi xodimlarining faoliyat yo‘nalishlari va funksiyalarini belgilash bo‘yicha lavozim yo‘riqnomasini ishlab chiqish.</td><td className="border px-2 py-2">2017-yil noyabr</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">4</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazida faoliyat olib boradigan ustozlar va ilmiy xodimlar tarkibini shakllantirish; maqom san’atining keng miqyosdagi targ‘ibotini amalga oshirish maqsadida sharq xalqlari musiqa san’ati namunalari va yetuk namoyandalarining konsertlari hamda mahorat darslarini tashkil etish.</td><td className="border px-2 py-2">2017-yil oktyabr muntazam</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">5</td><td className="border px-2 py-2">Viloyatlarda O‘zbek milliy maqom san’ati markazining hududiy bo‘limlarini tashkil etish bo‘yicha Respublika komissiyasiga taklif tayyorlash.</td><td className="border px-2 py-2">2019-yil noyabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">6</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazi joylashgan binoning markazga ajratilgai qismini ta’mirlash va zarur mebel, inventarlar hamda uskunalar bilan jihozlash.</td><td className="border px-2 py-2">2017-yil noyabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Moliya vazirligi, Iqtisodiyot vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">7</td><td className="border px-2 py-2">Milliy musiqa cholg‘ularida parda tizimini muvofiqlashtirish va sadolarini asl holiga keltirish, markazda cholg‘ularning akustik xususiyatlarini o‘rganish va rivojlayatirish maqsadida xorijiy davlatlardan maxsus anjomlarni keltirish.</td><td className="border px-2 py-2">2017-yil dekabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Moliya vazirligi, Iqtisodiyot vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">8</td><td className="border px-2 py-2">O‘zbekiston Badiiy jamoalari ijodiy birlashmasi tarkibida faoliyat yuritayotgan Y. Rajabiy nomidagi “Maqom” ansamblini O‘zbek milliy maqom san’ati markazi tarkibiga o‘tkazish.</td><td className="border px-2 py-2">2017-yil noyabr</td><td className="border px-2 py-2">Madaniyat vazirligi, Adliya vazirligi</td></tr>
      <tr><td className="border px-2 py-2">9</td><td className="border px-2 py-2">Yunus Rajabiy nomidagi Yosh maqom ijrochilarining Respublika ko‘rik-tanlovini tiklash hamda uni o‘tkazish.</td><td className="border px-2 py-2">2018-yildan boshlab har ikki yilda bir marta</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">10</td><td className="border px-2 py-2">O‘zbek milliy maqom san’ati markazining “Internet”dagi veb-saytini yaratish, uni o‘zbek maqomi tarixi, yo‘nalishlari, maqom asoslariga oid ma’lumotlar bilan to‘ldirib yangilab borish.</td><td className="border px-2 py-2">2017-yil noyabrdan boshlab muntazam</td><td className="border px-2 py-2">Madaniyat vazirligi, Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">11</td><td className="border px-2 py-2">Respublika hududlarida taniqli maqom ijrochilarining konsertlarini va mahorat darslarini tashkil etish. “Art-turizm” dasturi doirasida xorijiy mehmonlar uchun nufuzli konsert-leksiyalarni tashkil etish.</td><td className="border px-2 py-2">2017-yil noyabrdan boshlab muntazam</td><td className="border px-2 py-2">Madaniyat vazirligi, “O‘zbekkonsert” davlat muassasasi, Turizmni rivojlantirish davlat qo‘mitasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">12</td><td className="border px-2 py-2">Yosh maqom ijrochilarni moddiy va ma’naviy qo‘llab-quvvatlash maqsadida ularni ipoteka kreditlari asosida arzon uy-joylar bilan ta’minlash bo‘yicha aniq takliflar tayyorlash va Vazirlar Mahkamasiga kiritish.</td><td className="border px-2 py-2">2017-yil dekabr</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">13</td><td className="border px-2 py-2">O‘zbekiston davlat konservatoriyasi, O‘zbekistoni davlat san’at va madaniyat instituti, madaniyat va san’at kollejlari, ixtisoslashtirlgan musiqa akademik litseylari, bolalar musiqa va san’at maktablarida milliy maqomlar (Buxoro shashmaqomi, Xorazm olti yarim maqomi va Dutor maqomlari, Farg‘ona — Toshkent maqom yo‘llari, O‘zbek “Shashmaqomi” hamda yangi yo‘nalishlar) tizimli ravishda o‘quv dasturlariga kiritish.</td><td className="border px-2 py-2">2018-2019 o‘quv yilidan boshlab</td><td className="border px-2 py-2">Madaniyat vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, O‘rta maxsus, kasb-hunar ta’limi markazi, O‘zbekiston elektron ommaviy axborot vositalari milliy assotsiatsiyasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">14</td><td className="border px-2 py-2">Ixtisoslashtirilgan ta’lim muassasalarida maqom ijrochilarining ko‘rik-tanlovlarini o‘tkazish, milliy maqom san’atini noyob meros sifatida ommaviy axborot vositalari orqali keng yoritib borish.</td><td className="border px-2 py-2">2017-yil noyabrdan boshlab muntazam</td><td className="border px-2 py-2">Xalq ta’limi vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, O‘rta maxsus, kasb-hunar ta’limi markazi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">15</td><td className="border px-2 py-2">Bastakorlar o‘rtasida “Maqom yo‘llarida yaratilgan eng yaxshi asar” nominatsiyasi bo‘yicha tanlovlar o‘tkazib borish.</td><td className="border px-2 py-2">2018-yildan boshlab muntazam</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">16</td><td className="border px-2 py-2">Kompozitorlar o‘rtasida milliy maqomlar asosida yaratilgan zamonaviy yo‘nalishda eng yaxshi sahna asarlar (simfoniya, konsert, kamer-cholg‘u, yirik yo‘nalishdagi sahna asarlari va boshqa) tanlovlarni tashkil etish va o‘gkazish.</td><td className="border px-2 py-2">2019-yildan boshlab har ikki yilda bir marta</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">17</td><td className="border px-2 py-2">Musiqashunoslar orasida respublikamiz va xorijiy mamlakatlariing yirik olimlarini jalb etgan holda doimiy raviishda tanlov va o‘quv seminarlarini tashkil etish.</td><td className="border px-2 py-2">2019-yildan boshlab har ikki yilda bir marta</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbek milliy maqom san’ati markazi, O‘zbekiston mustaqil bosma ommaviy axborot vositalari va axborot agentliklarini qo‘llab-quvvatlash va rivojlantirish jamoat fondi</td></tr>
      <tr><td className="border px-2 py-2">18</td><td className="border px-2 py-2">Ko‘p asrlik maqom ijodkorligi an’analarini o‘zlashtirgan, o‘zining iste’dodi va salohiyati bildn ularni zamon ruhi bilan boyitib, “ustoz-shogird” ta’limiga muvofiq yosh avlodga singdirib kelayotgan taniqli bastakor va musiqashunoslarni Madaniyat vazirligi huzuridagi Madaniyat va san’atni rivojlantirish jamg‘armasi hisobidan moddiy rag‘batlantirish.</td><td className="border px-2 py-2">2018-yildan boshlab muntazam</td><td className="border px-2 py-2">Madaniyat vazirligi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">19</td><td className="border px-2 py-2">Maqom yo‘lida ijod qilgan ustoz san’atkorlar hayoti va ijodiga doir ommabop va maxsus ilmiy kitoblar, nota to‘plamlari va annotatsiyali nota albomlarni nashr etish, respublikamizdagi bolalar musiqa va san’at maktablari, madaniyat va sanat kollejlari va oliy o‘quv yurtlarida foydalanishlari uchun tarqatish, shu borada turli konferensiya va seminarlar o‘tkazish; Abu Rayhon Beruniy nomidagi Sharqshunoslik institutida saqlanayotgan musiqaga oid qo‘lyozmalar ustida tadqiqot ishlarini olib borish va ularning natijalarini monografiya, kitob va to‘plamlar tarzida nashrga tayyorlash va chop etish; Abu Nasr Forobiy, Muhammad Xorazmiy, Abu Ali ibn Sino, Faxriddin Roziy, Safiuddin Urmaviy, Abdulqodir Marog‘iy, Abdurahmon Jomiy, Najmiddin Kavkabiy, Darvish Ali Changiy, Abdurauf Fitrat, Bekjon Rahmon, Matyusuf Harratov, G‘ulom Zafariy va boshqa allomalarning musiqaga oid risolalarini, jumladan, O‘zbekiston Respublikasi Fanlar aqademiyasi San’atshunoslik ilmiy tadqiqot instituti arxivida saqlanyotgan S. Urmaviyning “Kitab al’-advar”, Darvish Ali Changiyning “Risolai musiqiy” qo‘lyozmalarini nashrga tayyorlab chop etish; I. Rajabovning “Sharq musiqasi atamalarinint qisqacha izohli lug‘ati”, “Maqom asoslari” qo‘lyozmalarini nashrga tayyorlab kitob holida chop etish; O. Matyoqubovning “O‘zbek musiqasi” fundamental tadqiqotini nashr etish; ikki jildlik “Maqom” ensiklopediyasini tuzish va nashr etish; Buxoro Shashmaqomi, Xorazm olti yarim Dutor maqomlari, Farg‘ona — Toshkent maqom yo‘li mavzularida yirik (fundamental) tadqiqotlarni olib borish uchun tadqiqotchi olimlarga yaqindan amaliy ko‘mak berish.</td><td className="border px-2 py-2">2018-yildan boshlab muntazam</td><td className="border px-2 py-2">O‘zbekistoi Rsspublikasi Fanlar akademiyasi, Madaniyat vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, Fan va texnologiyalar agentligi, O‘zbekiston Matbuot va axborot agentligi, O‘zbekiston elektron ommaviy axborot vositalari milliy assotsiatsiyasi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbek milliy maqom san’ati markazi</td></tr>
      <tr><td className="border px-2 py-2">20</td><td className="border px-2 py-2">O‘zbekiston Milliy teleradiokompaniyasi orqali maqom san’atini targ‘ib qiluvchi maxsus ilmiy-ommabop ko‘rsatuv namoyishini tashkil etish; yosh iqtidorli ijrochilar va musiqashunos olimlarni milliy maqom san’atini targ‘ib etishda xorijiy mamlakatlar bilan ijodiy tajriba almashish maqsadida xizmat safarlariga yuborish hamda ularga xalqaro miqyosdagi ilmiy anjumanlarda qatnashish imkonini yaratish.</td><td className="border px-2 py-2">2017-yil dekabrdan boshlab muntazam</td><td className="border px-2 py-2">O‘zbekiston milliy teleradiokompaniyasi, Madaniyat vazirligi, O‘zbekiston Jurnalistlari uyushmasi, O‘zbekiston mustaqil bosma ommaviy axborot vositalari va axborot agentliklarini qo‘llab-quvvatlash va rivojlantirish jamoat fondi, O‘zbekistoi elektron ommaviy axborot vositalari milliy assotsiatsiyasi</td></tr>
    </tbody>
  </table>
</div>
{/* --- DASTUR TABLE END --- */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Maqom_sanati;