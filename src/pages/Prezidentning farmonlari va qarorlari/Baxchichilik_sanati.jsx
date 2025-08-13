import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Baxchichilik_sanati = () => {
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
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Baxshichilik san'atini yanada rivojlantirish chora-tadbirlari to'g'risida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">Xalqimizning milliy o‘zligini, qadimiy tarixi va tilini, uning hayot tarzi, an’ana va urf-odatlarini o‘zida mujassam etadigan, umumbashariy madaniyatning ajralmas qismi sifatida tan olingan baxshichilik san’ati atoqli baxshi-shoirlarimiz, folklorshunos olimlarimizning fidoyi mehnati, ijodiy tafakkuri bilan asrlardan asrlarga o‘tib kelmoqda.

Xalqimizning yuksak badiiy dahosi bilan yaratilgan ushbu noyob san’atni asrab-avaylash va rivojlantirish bo‘yicha mamlakatimizda muayyan ishlar amalga oshirilmoqda. Bu borada yurtimizda “Alpomish” dostonining ming yilligi keng nishonlangani, Termiz shahrida bu ulug‘ badiiy obida sharafiga, Samarqand shahrida atoqli baxshilarimiz xotirasiga bag‘ishlangan yodgorlik majmualari bunyod etilgani, davlatimiz tomonidan “O‘zbekiston Respublikasi xalq baxshisi” faxriy unvoni ta’sis qilinganini qayd etish lozim.

Bugungi kunda Termiz shahrida baxshichilik maktabi, respublikamizdagi bolalar musiqa va san’at maktablarida folklor sinflari faoliyat ko‘rsatmoqda. Yurtimizda ko‘p tomlik “Qoraqalpoq folklori” to‘plamlari chop etildi, 100 tomlik “O‘zbek xalq ijodi yodgorliklari” majmuasi nashr etilmoqda. Baxshi-shoirlar tomonidan ijro etilayotgan asarlarni yozib olish, ularni ilmiy o‘rganish ishlari davom etmoqda.

Xalqimiz madaniyatining hayotbaxsh sarchashmasi bo‘lgan baxshichilik san’ati atoqli baxshi-shoirlarimiz, folklorshunos olimlarimizning fidoyi mehnati, ijodiy tafakkuri bilan asrlardan asrlarga o‘tib kelmoqda.

Xalqimizning yuksak badiiy dahosi bilan yaratilgan ushbu noyob san’atni asrab-avaylash va rivojlantirish bo‘yicha mamlakatimizda muayyan ishlar amalga oshirilmoqda. Bu borada yurtimizda “Alpomish” dostonining ming yilligi keng nishonlangani, Termiz shahrida bu ulug‘ badiiy obida sharafiga, Samarqand shahrida atoqli baxshilarimiz xotirasiga bag‘ishlangan yodgorlik majmualari bunyod etilgani, davlatimiz tomonidan “O‘zbekiston Respublikasi xalq baxshisi” faxriy unvoni ta’sis qilinganini qayd etish lozim.

Bugungi kunda Termiz shahrida baxshichilik maktabi, respublikamizdagi bolalar musiqa va san’at maktablarida folklor sinflari faoliyat ko‘rsatmoqda. Yurtimizda ko‘p tomlik “Qoraqalpoq folklori” to‘plamlari chop etildi, 100 tomlik “O‘zbek xalq ijodi yodgorliklari” majmuasi nashr etilmoqda. Baxshi-shoirlar tomonidan ijro etilayotgan asarlarni yozib olish, ularni ilmiy o‘rganish ishlari davom etmoqda.

Yaqinda Termiz shahrida ilk bor o‘tkazilgan Xalqaro baxshichilik san’ati festivali xalqaro miqyosdagi yirik madaniy hodisa sifatida keng e’tirof etilgani alohida e’tiborga loyiq.

Ayni vaqtda hozirgi globallashuv davrida, tijorat vositasiga aylangan “ommaviy madaniyat”, shou-biznesning salbiy ta’siri tobora kuchayib borayotgan bir sharoitda folklor san’atiga e’tibor va qiziqish susayib borayotgani, ko‘p joylarda unutilib, himoya va muhofazaga muhtoj bo‘lib turgani kuzatilmoqda.

Xalqimiz madaniyatining hayotbaxsh sarchashmasi bo‘lgan baxshichilik san’atini yanada rivojlantirish, uning milliy madaniyatimiz va san’atimizdagi o‘rni va ahamiyatini yuksaltirish, yosh avlodni milliy o‘zlikni anglash, Vatanga sadoqat, tarixiy merosga hurmat ruhida tarbiyalash maqsadida:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi, Fanlar akademiyasi, Yozuvchilar uyushmasi va Surxondaryo viloyati hokimligining Termiz shahrida davlat muassasasi shaklida Respublika Baxshichilik san’ati markazini (keyingi o‘rinlarda — Markaz) hamda uning huzurida yuridik shaxs maqomiga ega bo‘lgan Baxshichilik san’atini rivojlantirish jamg‘armasini (keyingi o‘rinlarda — Jamg‘arma) tashkil etish haqidagi takliflari ma’qullansin.
<br/>
2. Markazning asosiy vazifalari etib quyidagilar belgilansin:

baxshichilik san’atining ilmiy-nazariy va amaliy asoslarini chuqur o‘rganish va mustahkamlash;

sohada shakllangan ijodiy maktablarning o‘ziga xos ijro uslublari, “ustoz–shogird” an’analarini qayta tiklash va rivojlantirish;

baxshi-shoirlar, folklorshunos olimlar, o‘qituvchi va mutaxassislarning ijodiy va ilmiy faoliyatini qo‘llab-quvvatlash;

madaniyat markazlari, bolalar musiqa va san’at maktablari va boshqa ta’lim muassasalari qoshida baxshichilik san’ati to‘garaklarini tashkil etish;

baxshi-shoirlar ijodiga keng yo‘l ochib berish, ommaviy bayramlar va madaniy tadbirlarda ularning faol ishtirokini ta’minlash;

baxshichilik san’atining sara namunalarini to‘plash va fondini yaratish, ularning audio va video variantlarini ko‘paytirish, bu sohani yurtimizda va dunyoda keng targ‘ib etish uchun axborot-kommunikatsiya texnologiyalaridan, televideniye va Internet imkoniyatlaridan samarali foydalanish;

baxshichilik san’ati yo‘nalishida xalqaro hamkorlikni kuchaytirish, bu borada o‘zaro tajriba almashishni yo‘lga qo‘yish, jumladan, turli xalqaro anjumanlar va tanlovlar, konsertlar va mahorat darslarini tashkil etish.
<br/>
3. Jamg‘armaning asosiy vazifalari etib quyidagilar belgilansin:

moliyaviy va tashkiliy yo‘nalishlarda kompleks chora-tadbirlarni amalga oshirish asosida baxshichilik san’atini yanada rivojlantirishga ko‘maklashish;

mamlakatimizda faoliyat ko‘rsatayotgan baxshi-shoir, oqin va jirovlarni har tomonlama qo‘llab-quvvatlash;

Madaniyat vazirligi tizimidagi muassasalarni baxshichilik san’atiga oid zarur adabiyotlar, o‘quv qo‘llanmalar va davriy nashrlar bilan ta’minlash;

madaniyat va san’at muassasalari qoshidagi baxshichilik to‘garaklarining moddiy-texnik bazasini mustahkamlash, ularni zarur cholg‘ular va jihozlar bilan ta’minlash;

baxshichilik san’ati bilan bog‘liq ilmiy-tadqiqotlar, nashr ishlari hamda kompleks ilmiy ekspeditsiyalarni moliyalashtirish;

baxshichilik san’atiga doir homiylikni rivojlantirish, sohaga xorijiy sarmoya va grantlarni jalb etish;

qonunchilikda belgilangan manbalardan tushadigan mablag‘larni jamg‘arish, ulardan maqsadli va samarali foydalanishni ta’minlash.
<br/>
4. Quyidagilar:

Baxshichilik san’atini yanada rivojlantirish bo‘yicha chora-tadbirlar rejasi 1-ilovaga;

Respublika Baxshichilik san’ati markazining tarkibiy tuzilmasi 2-ilovaga;

Respublika Baxshichilik san’ati markazi huzuridagi Baxshichilik san’atini rivojlantirish jamg‘armasi Kengashining tarkibi 3-ilovaga;

Respublika Baxshichilik san’ati markazi huzuridagi Baxshichilik san’atini rivojlantirish jamg‘armasi ijrochi direksiyasi tuzilmasi 4-ilovaga muvofiq tasdiqlansin.

O‘zbekiston Respublikasi madaniyat vaziriga, zarurat bo‘lganda, Markaz va Jamg‘arma tuzilmalariga xodimlarning belgilangan umumiy soni doirasida o‘zgartirishlar kiritish huquqi berilsin.
<br/>
5. O‘zbekiston Respublikasi Madaniyat vazirligi:

ikki oy muddatda Markaz va Jamg‘arma faoliyatini tashkil etish to‘g‘risidagi qaror loyihasini Vazirlar Mahkamasiga kiritsin. Bunda Jamg‘arma mablag‘larini shakllantirish manbalari nazarda tutilsin;

Moliya vazirligi, Investitsiyalar va tashqi savdo vazirligi, Iqtisodiyot va sanoat vazirligi hamda Surxondaryo viloyati hokimligi bilan birgalikda ikki oy muddatda Termiz shahridagi baxshichilik maktabi negizida baxshichilik san’atiga ixtisoslashtirilgan Respublika maktab-internatini tashkil etish yuzasidan Vazirlar Mahkamasiga taklif kiritsin;

Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari bilan birgalikda baxshichilik san’ati rivoji uchun zarur bo‘lgan musiqa cholg‘ulari (do‘mbira, sibizg‘a, chanqovuz, qo‘shnay, g‘ajirnay, bo‘lamon, qo‘biz kabilar) ishlab chiqaradigan ustalar faoliyatini qo‘llab-quvvatlash, ustaxonalar uchun joy ajratish, maxsus yog‘och va metall mahsulotlari bilan ta’minlash choralarini belgilasin;

O‘zbekiston kompozitorlari va bastakorlari uyushmasi bilan birgalikda baxshi-shoir, jirov va oqinlar tomonidan ijro etiladigan asarlar kuylarini notalashtirish ishlarini bosqichma-bosqich amalga oshirsin;

YUNESKO ishlari bo‘yicha O‘zbekiston Respublikasi Milliy komissiyasi bilan birgalikda o‘zbek xalqining ko‘hna va betakror san’ati namunasi bo‘lgan baxshichilik san’atini YUNESKOning Insoniyat nomoddiy madaniy merosining reprezentativ ro‘yxatiga kiritish bo‘yicha chora-tadbirlarni amalga oshirsin;

Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari bilan birgalikda Qoraqalpog‘iston Respublikasi, Surxondaryo, Qashqadaryo, Xorazm viloyatlarida baxshichilik san’ati davlat ansambllarini, ushbu san’at turi rivojlangan boshqa hududlarda esa viloyat ansambllarini tashkil etsin;

tegishli hududlarda bolalar musiqa va san’at maktablari qoshida baxshichilik san’ati sinflarini tashkil etsin;

O‘zbekiston Respublikasi Adliya vazirligi bilan birgalikda bir oy muddatda qonun hujjatlariga ushbu qarordan kelib chiqadigan o‘zgartirish va qo‘shimchalar to‘g‘risida Vazirlar Mahkamasiga taklif kiritsin.
<br/>
6. Surxondaryo viloyati hokimligi Markaz va Jamg‘arma uchun bino ajratish, uning moddiy-texnik bazasini mustahkamlash hamda avtotransport vositasi bilan ta’minlash choralarini ko‘rsin.
<br/>
7. O‘zbekiston Milliy axborot agentligi, O‘zbekiston Milliy teleradiokompaniyasi va boshqa ommaviy axborot vositalariga ustoz baxshilar va dostonchilar, yosh ijrochilar, baxshichilik san’ati durdonasi hisoblangan mashhur dostonlar haqida ko‘rsatuv va eshittirishlar, maqolalar tayyorlash va e’lon qilib borish hamda mazkur qarorda belgilangan tadbirlarni keng yoritish tavsiya etilsin.
<br/>
8. Mazkur qarorning ijrosini nazorat qilish O‘zbekiston Respublikasining Bosh vaziri A.N. Aripov va O‘zbekiston Respublikasi Prezidenti maslahatchisining o‘rinbosari F.Sh. Mahmudov zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh.,<br />
              2019-yil 14-may,
<br />
PQ-4320-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Prezidenti I. KARIMOV</p>
    <p>
    O‘zbekiston Respublikasi Prezidentining 2019-yil 14-maydagi PQ-4320-son qaroriga
    1-ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">Baxshichilik san’atini yanada rivojlantirish bo‘yicha
          CHORA-TADBIRLAR REJASI</p>


{/* --- DASTUR TABLE START --- */}
<div className="overflow-x-auto mt-10 mb-10">
  <table className="min-w-full divide-y divide-gray-300 border border-gray-300 rounded-xl">
    <thead className="bg-sky-100">
      <tr>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">T/r</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Chora-tadbir nomi</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Ijro muddati</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Moliyalashtirish manbalari</th>
        <th className="px-2 py-3 text-xs sm:text-sm md:text-base font-bold text-gray-700 border">Mas’ul ijrochilar</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-xs sm:text-sm md:text-base">
      <tr><td className="border px-2 py-2">1</td><td className="border px-2 py-2">Respublika Baxshichilik san’ati markazi, Baxshichilik san’atini rivojlantirish jamg‘armasining ustavini ishlab chiqish va o‘rnatilgan tartibda davlat ro‘yxatidan o‘tkazish.</td><td className="border px-2 py-2">2019-yil 1-iyul</td><td className="border px-2 py-2">-</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">2</td><td className="border px-2 py-2">Respublika Baxshichilik san’ati markazi, Baxshichilik san’atini rivojlantirish jamg‘armasi ijrochi direksiyasining shtatlarini va muassasalar xodimlari mehnatiga haq to‘lash tartibini ishlab chiqish va belgilangan tartibda Vazirlar Mahkamasiga kiritish.</td><td className="border px-2 py-2">2019-yil 1-iyul</td><td className="border px-2 py-2">-</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Moliya vazirligi (B. Ashrafxonov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">3</td><td className="border px-2 py-2">Respublika Baxshichilik san’ati markazi, Baxshichilik san’atini rivojlantirish jamg‘armasi faoliyat yo‘nalishlari va funksiyalarini inobatga olib, xodimlarning lavozim yo‘riqnomasini ishlab chiqish.</td><td className="border px-2 py-2">2019-yil 1-iyul</td><td className="border px-2 py-2">-</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Moliya vazirligi (B. Ashrafxonov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">4</td><td className="border px-2 py-2">Madaniyat va san’atga ixtisoslashtirilgan maktablarda baxshichilik sinflari va kurslarini ochish, O‘zbekiston san’at va madaniyat institutida baxshichilik va dostonchilik ta’lim yo‘nalishlarini tashkil etish.</td><td className="border px-2 py-2">2019-yil 1-sentabr</td><td className="border px-2 py-2">-</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Oliy va o‘rta maxsus ta’lim vazirlgi (I. Majidov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">5</td><td className="border px-2 py-2">Respublika Baxshichilik san’ati markazini baxshi-shoirlar tomonidan yaratilgan va ijro etilayotgan doston, terma, aytimlarni sifatli yozib olish va targ‘ib etish uchun zarur bo‘lgan ovoz yozish hamda zamonaviy videotexnika vositalari bilan ta’minlash.</td><td className="border px-2 py-2">2019-yil 1-dekabr</td><td className="border px-2 py-2">Mahalliy budjet mablag‘lari va homiylik xayriyalari</td><td className="border px-2 py-2">Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">6</td><td className="border px-2 py-2">Folklor asarlarini audio va video disklarga yozib olish, ko‘paytirish va sotishni yo‘lga qo‘yish.</td><td className="border px-2 py-2">2019-yil 1-dekabr</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">7</td><td className="border px-2 py-2">Baxshichilik san’ati yo‘nalishida “ustoz-shogird” an’analarining saqlanishi va rivojlanishini ta’minlash maqsadida jamoatchilik asosida “O‘zbekiston baxshilar uyushmasi”ni va uning hududiy bo‘limlarini tashkil etish.</td><td className="border px-2 py-2">2019-yil 1-avgust</td><td className="border px-2 py-2">-</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">8</td><td className="border px-2 py-2">Baxshichilik san’ati yo‘nalishida xalqaro hamkorlikni kuchaytirish orqali chet davlatlar bilan o‘zaro tajriba almashishni yo‘lga qo‘yish.</td><td className="border px-2 py-2">2019-2020-yillarda</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Tashqi ishlar vazirligi (A. Komilov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">9</td><td className="border px-2 py-2">Madaniyat markazlarini baxshichilik san’atiga doir adabiyotlar bilan ta’minlash.</td><td className="border px-2 py-2">2019-yil 1-dekabr</td><td className="border px-2 py-2">Madaniyat va san’atni rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">10</td><td className="border px-2 py-2">2019-yili Termiz shahrida o‘tkazilgan I Xalqaro baxshichilik san’ati festivali haqidagi kitob-albomni nashrga tayyorlash va chop etish.</td><td className="border px-2 py-2">2019-yil 1-dekabr</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), Yozuvchilar uyushmasi (S. Saidov), “Hunarmand” uyushmasi (U. Abdullayev), Badiiy akademiya (A.Nuridinov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">11</td><td className="border px-2 py-2">Madaniyat va san’at muassasalari qoshida baxshichilik san’ati, folklor san’ati, dostonchilik, xalfa qo‘shiqlari, shuningdek, chanqovuz, sibizg‘a, qo‘shnay, bo‘lamon, qo‘biz, nog‘ora singari qadim cholg‘ular sinflari va to‘garaklarini bosqichma-bosqich tashkil etish.</td><td className="border px-2 py-2">2019-2020-yillar</td><td className="border px-2 py-2">Mahalliy budjet va markazlarning o‘z mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">12</td><td className="border px-2 py-2">Baxshichilik san’ati yo‘nalishida baxshilar, oqinlar va jirov ijrochilarining respublika ko‘rik-tanlovini tashkil etish va o‘tkazish.</td><td className="border px-2 py-2">2020-yildan boshlab ikki yilda bir marta</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), Yozuvchilar uyushmasi (S. Saidov), Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">13</td><td className="border px-2 py-2">“O‘zbekiston baxshilari” kitob-albomining ikkinchi tomini nashrga tayyorlash va chop etish.</td><td className="border px-2 py-2">2020-yil 1-avgust</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">14</td><td className="border px-2 py-2">O‘zbek xalq og‘zaki ijodiyotini jahonga targ‘ib etish maqsadida “Xalq ijodiyoti” veb-saytini tashkil etish.</td><td className="border px-2 py-2">2020-yil 1-mart</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi (Sh. Sadikov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">15</td><td className="border px-2 py-2">Joylarda baxshichilik yo‘nalishlarida ansambllar tashkil etgan holda, mahallalar, madaniyat markazlari, istirohat bog‘lari, ta’lim muassasalari hamda san’at saroylarida “Doston” kechalari va taniqli baxshi-shoirlar bilan ijodiy uchrashuvlarni tashkil etish.</td><td className="border px-2 py-2">Reja-jadval asosida</td><td className="border px-2 py-2">Homiylik xayriya mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Fanlar akademiyasi (B. Yuldashev), Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari</td></tr>
      <tr><td className="border px-2 py-2">16</td><td className="border px-2 py-2">O‘qituvchilikka jalb etilgan baxshilarning muntazam malakasini oshirib borish.</td><td className="border px-2 py-2">Reja asosida</td><td className="border px-2 py-2">Bolalar musiqa va san’at maktablari, madaniyat markazlari mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Oliy va o‘rta maxsus ta’lim vazirligi (I. Majidov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">17</td><td className="border px-2 py-2">Baxshilar ijrosidagi dostonlarni izchil to‘plash maqsadida kompleks ilmiy ekspeditsiyalar uyushtirish.</td><td className="border px-2 py-2"></td><td className="border px-2 py-2"></td><td className="border px-2 py-2"></td></tr>
      <tr><td className="border px-2 py-2">18</td><td className="border px-2 py-2">Baxshichilik sohasida shakllangan ijodiy maktablar, “ustoz–shogird” an’analarini qayta tiklash va rivojlantirish.</td><td className="border px-2 py-2">Doimiy</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">19</td><td className="border px-2 py-2">Baxshi-shoirlar, folklorshunos olimlar, o‘qituvchi va mutaxassislarning ijodiy va ilmiy faoliyatini har tomonlama rag‘batlantirish.</td><td className="border px-2 py-2">Doimiy</td><td className="border px-2 py-2">Baxshichilik san’atini rivojlantirish jamg‘armasi mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Moliya vazirligi (B. Ashrafxonov), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">20</td><td className="border px-2 py-2">Hozirga qadar 15 tomi bosmadan chiqqan, jami 100 tomdan iborat etib belgilangan “O‘zbek xalq ijodi yodgorliklari” majmuasini 2030-yilgacha to‘liq nashrdan chiqarish.</td><td className="border px-2 py-2">2019 — 2030-yillar</td><td className="border px-2 py-2">Madaniyat vazirligi huzuridagi Madaniyat va san’atni rivojlantirish jamg‘armasi</td><td className="border px-2 py-2">Fanlar akademiyasi (B. Yuldashev), Prezident Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi (K. Allamjonov), Madaniyat vazirligi (B. Sayfullayev)</td></tr>
      <tr><td className="border px-2 py-2">21</td><td className="border px-2 py-2">Baxshi-shoirlar ijodiga keng yo‘l ochib berish maqsadida ommaviy bayramlar va madaniy tadbirlarda ularning faol ishtirokini ta’minlash.</td><td className="border px-2 py-2">Doimiy</td><td className="border px-2 py-2">Tashabbuskor mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), tegishli vazirliklar va idoralar</td></tr>
      <tr><td className="border px-2 py-2">22</td><td className="border px-2 py-2">Axborot-kommunikatsiya texnologiyalaridan, televideniye va internet imkoniyatlaridan samarali foydalanish orqali baxshichilik san’atini keng targ‘ib etish.</td><td className="border px-2 py-2">Doimiy</td><td className="border px-2 py-2">Madaniyat va san’atni rivojlantirish hamda Baxshichilik san’atini rivojlantirish jamg‘armalari mablag‘lari</td><td className="border px-2 py-2">Madaniyat vazirligi (B. Sayfullayev), Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi (Sh. Sadikov), tegishli vazirliklar va idoralar</td></tr>
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

export default Baxchichilik_sanati;