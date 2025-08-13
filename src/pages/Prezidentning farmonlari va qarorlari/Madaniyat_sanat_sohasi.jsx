import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Madaniyat_sanat_sohasi = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">O‘zbekiston Respublikasi Prezidenti farmoni</p>
          <p className="text-sm sm:text-base md:text-lg">Madaniyat va san’at sohasining jamiyat hayotidagi o‘rni va ta’sirini yanada oshirish chora-tadbirlari to‘g‘risida</p>
          <p className="text-left mt-5">So‘nggi yillarda O‘zbekiston Respublikasida milliy madaniyatni yanada rivojlantirish, yangi O‘zbekistonning yangi tarixini yaratish, moddiy va nomoddiy madaniy meros durdonalarini saqlash va targ‘ib etish, xalq og‘zaki ijodiyoti va havaskorlik san’atini yanada ommalashtirish, yurtimizning jahon madaniy makoniga faol integratsiyalashuvini ta’minlash, madaniyat va san’at sohasini innovatsion rivojlantirishga qaratilgan tizimli chora-tadbirlar amalga oshirildi. Xususan:

birinchidan, O‘zbekiston Respublikasi Prezidentining 2018-yil 28-noyabrdagi PQ-4038-son qarori bilan O‘zbekiston Respublikasida milliy madaniyatni yanada rivojlantirish konsepsiyasi (keyingi o‘rinlarda — Konsepsiya) va uni amalga oshirish bo‘yicha “yo‘l xaritasi” tasdiqlandi;

ikkinchidan, madaniyat va san’at tashkilotlarining “do‘stlar klublari” faoliyatini yo‘lga qo‘yish orqali ularni har tomonlama qo‘llab-quvvatlash, moddiy-texnika bazasini mustahkamlash bo‘yicha mutlaqo yangicha samarali tizim yaratildi;

uchinchidan, muzeylar renovatsiya dasturi qabul qilindi, o‘zbek xalqining ko‘hna va betakror san’ati namunasi bo‘lgan “Xorazm lazgisi” YUNESKOning Insoniyat nomoddiy madaniy merosining reprezentativ ro‘yxatiga kiritildi;

to‘rtinchidan, madaniy meros obyektlari va san’at ashyolarini restavratsiya qilish bo‘yicha milliy maktab, shuningdek, xalq cholg‘ulari, milliy raqs, maqom yo‘nalishlarida respublika ko‘rik-tanlovlari qayta tiklandi;

beshinchidan, mamlakatimizda muntazam ravishda o‘tkaziladigan Xalqaro maqom san’ati anjumani, Xalqaro baxshichilik san’ati festivali, “Sharq taronalari” xalqaro musiqa festivali, “Buyuk ipak yo‘li” xalqaro folklor san’ati festivali hamda “Raqs sehri” xalqaro festivali tashkil etilib, o‘zbek mumtoz va folklor san’atining noyob namunalari va an’analarini hamda madaniy muloqotni yanada rivojlantirish bo‘yicha samarali tizim yo‘lga qo‘yildi.

Shu bilan birga, Konsepsiyani amalga oshirish, sohada zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish, yuqori malakali kadrlarni tayyorlash, iste’dodli yosh ijodkorlarni izlab topish va qo‘llab-quvvatlash, ta’lim muassasalarini musiqa darsliklari, notalar to‘plamlari va o‘quv-metodik adabiyotlar bilan ta’minlashning yaxlit tizimi yaratilmagan.

Aholi, ayniqsa, olis hududlarda istiqomat qiladigan fuqarolarga madaniy dam olish xizmatlari ko‘rsatish darajasini oshirish, buning uchun respublikaning barcha hududlarida teatr, muzey, ko‘chma sirk va hayvonot bog‘lari faoliyatini doimiy ravishda yo‘lga qo‘yish dolzarb vazifa bo‘lib qolmoqda.

Yuqoridagi vazifalarni samarali amalga oshirish, madaniyat va san’at sohasidagi islohotlarni jadal davom ettirish, madaniyat organlari va muassasalari faoliyatini yanada takomillashtirish, shuningdek, 2017 — 2021-yillarda O‘zbekiston Respublikasini rivojlantirishning beshta ustuvor yo‘nalishi bo‘yicha Harakatlar strategiyasining ijrosini ta’minlash maqsadida:
<br/>
1. Quyidagilar:

2020 — 2021-yillarda O‘zbekiston Respublikasida madaniyat va san’atni yanada rivojlantirishga doir qo‘shimcha chora-tadbirlar dasturi 1-ilovaga muvofiq;

O‘zbekiston Respublikasida milliy madaniyatni yanada rivojlantirish konsepsiyasining 2021 — 2025-yillarga mo‘ljallangan maqsadli ko‘rsatkichlari 2-ilovaga muvofiq tasdiqlansin.

Vazirlar Mahkamasi Konsepsiyani amalga oshirish bo‘yicha “yo‘l xaritalari” va chora-tadbirlar dasturlarini qabul qilishda mazkur bandga muvofiq tasdiqlanayotgan maqsadli ko‘rsatkichlarning bajarilishini ta’minlash bo‘yicha tadbirlarni nazarda tutsin.
<br/>
2. Belgilansinki, 2021-yil 1-yanvardan boshlab:

konsert-tomosha faoliyatini litsenziyalash, litsenziatlarning davlat reyestrini yuritish, ularning faoliyati va erishgan natijalari haqidagi axborotlarni kiritib borish Konsert-tomosha faoliyati ishtirokchilarining yagona onlayn portali orqali amalga oshiriladi;

konsert-tomosha tadbiriga bir martalik ruxsatnoma berish uchun undiriladigan yig‘im bekor qilinadi;

davlat organlari va tashkilotlarining asosiy vazifa va funksiyalaridan kelib chiqib, ularning tashabbuslari bilan o‘tkaziladigan ommaviy-madaniy va konsert-tomosha tadbirlari har yili tasdiqlanadigan ommaviy-madaniy va konsert-tomosha tadbirlarining kalendar rejalari (keyingi o‘rinlarda — kalendar rejalar) asosida o‘tkaziladi;

O‘zbekiston Respublikasi Prezidenti, Vazirlar Mahkamasi hamda mahalliy davlat hokimiyati organlarining kalendar rejalarda nazarda tutilmagan davlat tadbirlarini o‘tkazishni nazarda tutuvchi qarorlarida ushbu tadbirlarni tashkil etish bo‘yicha ko‘rsatiladigan xizmatlar bo‘yicha buyurtmachilar hamda ularni moliyalashtirish manbalari ko‘rsatiladi;

konsert-tomosha faoliyatini amalga oshiruvchi shaxslar tomonidan davlat organlari va boshqa tashkilotlarning buyurtmalariga asosan ko‘rsatiladigan barcha xizmatlar yozma va haq evaziga tuziladigan shartnoma asosida taqdim etiladi, konsert-tomosha faoliyatini amalga oshiruvchi davlat muassasalari xodimlari bilan tuzilgan mehnat shartnomalaridan kelib chiqadigan majburiyatlar bundan mustasno.
<br/>
3. O‘zbekiston Respublikasi Madaniyat vazirligi (keyingi o‘rinlarda — Madaniyat vazirligi) va boshqa davlat organlari tomonidan davlat tadbirlari va boshqa tadbirlarga ijodkorlar va ijrochilarning jamoatchilik asosida jalb qilinishiga yo‘l qo‘yilmasligi belgilansin.
<br/>
4. Madaniyat vazirligi, Moliya vazirligi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, Maktabgacha ta’lim vazirligi va Xalq ta’limi vazirligi 2020/2021 o‘quv yilidan boshlab notalar to‘plamlari va maxsus musiqiy adabiyotlarni O‘zbekiston Respublikasining Davlat budjeti mablag‘lari hisobidan chop etilishini va ularning ta’lim muassasalariga to‘liq yetkazilishini ta’minlasin.
<br/>
5. 2020-yil 1-sentabrdan boshlab davlat organlari va tashkilotlari tizimidagi konsert, madaniyat saroylari va boshqa muassasalarda to‘liq jonli ijro asosida o‘tkazilgan konsert dasturlari uchun ijara to‘lovidan 50 foiz chegirma berish tartibi joriy etilsin.
<br/>
6. Madaniyat va san’at sohasi vakillarining San’atkor, ijodkor va ijrochilarning mualliflik huquqlarini himoya qilish palatasini (keyingi o‘rinlarda — Palata) tashkil etish to‘g‘risidagi tashabbuslari qo‘llab-quvvatlansin.

Belgilansinki, Palata mulkiy huquqlarni jamoaviy asosda boshqaradigan tashkilot hisoblanadi.

Madaniyat vazirligi Palata faoliyatining dastlabki bosqichlarida uni qo‘llab-quvvatlash uchun 1 mlrd so‘m ajratilishini ta’minlasin.

O‘zbekiston Respublikasi Bosh vazirining o‘rinbosari B.A. Musayev, madaniyat vaziri O.A. Nazarbekov Palata hamda mulkiy huquqlarni jamoaviy asosda boshqaradigan boshqa tashkilotlar faoliyatini tashkil etishga har tomonlama ko‘maklashsin.
<br/>
7. Belgilansinki, mulkiy huquqlarni jamoaviy asosda boshqaruvchi tashkilotlar ularga bevosita huquq egalari yoki ularning merosxo‘rlari tomonidan berilgan vakolatlar doirasida da’vo bilan sudga murojaat qilgan taqdirda davlat bojini to‘lash muddati kechiktirilib, bu boj keyinchalik aybdor tarafdan undirib olinadi.
<br/>
8. Madaniyat vazirligi tomonidan xarid qilingan, ommaviy ijroga mo‘ljallangan dramatik, musiqali va musiqali-dramatik asarlarni 2020-yil 1-sentabrdan boshlab xususiy teatrlarda ham sahnalashtirish va ijro etishga ruxsat berilsin.

Bunda, xususiy teatrlarda sahnalashtirilgan hamda ijro etilgan asarlar uchun mualliflik haqi to‘lash har yili O‘zbekiston Respublikasining Davlat budjetidan ajratiladigan mablag‘lar doirasida amalga oshirilishi belgilansin.
<br/>
9. Boy tarixi, o‘zbek milliy qo‘g‘irchoq teatri maktabining shakllanishi va rivojidagi beqiyos hissasini inobatga olib, Respublika qo‘g‘irchoq teatriga O‘zbek Milliy qo‘g‘irchoq teatri nomi berilsin.

Madaniyat vazirligi va Moliya vazirligi Navoiy, Namangan, Sirdaryo va Toshkent viloyatlari hokimliklari bilan birgalikda ikki oy muddatda ushbu viloyatlarda qo‘g‘irchoq teatrlarini tashkil etish to‘g‘risidagi Hukumat qarori loyihasini Vazirlar Mahkamasiga kiritsin.
<br/>
10. O‘zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag‘allikni qisqartirish vazirligi, Moliya vazirligi, Madaniyat vazirligi, Qurilish vazirligi:

O‘zbekiston Respublikasining 2021 — 2023-yillarga mo‘ljallangan ijtimoiy va ishlab chiqarish infratuzilmasini rivojlantirish dasturlarida 2021-yilda Navoiy, Namangan, Sirdaryo, Qashqadaryo, Xorazm va Toshkent viloyatlari qo‘g‘irchoq teatrlari binolarini qurish, ularga ajratilgan binolarni rekonstruksiya qilish, zamonaviy uskunalar bilan jihozlash ishlarini nazarda tutsin;

2020-yilga mo‘ljallangan ijtimoiy va ishlab chiqarish infratuzilmasini rivojlantirish dasturi doirasida maqbullashtirilgan mablag‘lar hisobidan “O‘zbek davlat sirki” davlat muassasasining bino va inshootlarini rekonstruksiya qilish, qo‘shimcha ravishda hayvonlarni saqlash xonalarini qurish hamda zamonaviy uskunalar bilan jihozlash ishlarining to‘liq moliyalashtirilishini, shuningdek qurilish, rekonstruksiya va jihozlash ishlarini joriy yil oxiriga qadar to‘liq yakuniga yetkazib, foydalanishga topshirilishini ta’minlasin.
<br/>
11. Qoraqalpog‘iston Respublikasi Vazirlar Kengashi va viloyatlar hokimliklari Madaniyat vazirligi va Moliya vazirligi bilan birgalikda 2020-2021-yillar davomida Qoraqalpog‘iston Respublikasi respublika budjeti, viloyatlar budjetlari mablag‘lari hisobidan har bir hududda ko‘chma sirklar (shapito, dorbozlar guruhlari) hamda hayvonot bog‘lari tashkil etilishi va doimiy faoliyat yuritishini ta’minlasin.
<br/>
12. 2020-yil 1-sentabrdan boshlab shunday tartib joriy etilsinki, unga muvofiq:

ko‘chma sirklar (shapito, dorbozlar guruhlari) tomonidan o‘tkaziladigan tomosha tadbirlariga ommaviy tadbir o‘tkazish uchun ruxsatnoma va ruxsat berish xususiyatiga ega boshqa hujjatlarni olish talab etilmaydi, bunda tadbir tashkilotchilari uni o‘tkazish joyi va vaqti to‘g‘risida ichki ishlar organlarini kamida 10 kun oldin yozma ravishda xabardor qiladi;

ichki ishlar organlari, Milliy gvardiya va Favqulodda vaziyatlar vazirligi organlari ko‘chma sirklar (shapito, dorbozlar guruhlari) tomonidan o‘tkaziladigan tomosha tadbirlarida jamoat tartibi va yong‘in xavfsizligini to‘lov undirilmagan holda ta’minlaydi;

davlat organlari va tashkilotlari tizimidagi madaniyat va istirohat bog‘lari, sport inshootlari, sayilgohlar va boshqa ochiq hududlarda ko‘chma sirklar (shapito, dorbozlar guruhlari) tomonidan tomosha tadbirlari o‘tkazish uchun ijara va boshqa turdagi to‘lovlar undirilmaydi;

nomoddiy madaniy meros obyektlarini (dorboz, askiya va lapar) asrash va ulardan foydalanish faoliyati O‘zini o‘zi band qilgan fuqarolarga vaqtinchalik mehnat guvohnomalari beriladigan faoliyat (xizmatlar, ishlar) turlari ro‘yxatiga kiradi (madaniyat markazlari tarkibida faoliyat yuritayotgan shaxslar bundan mustasno) va ularning ushbu faoliyatdan olingan daromadlariga jismoniy shaxslardan olinadigan daromad solig‘i tatbiq etilmaydi.
<br/>
13. Madaniyat vazirligi tizimida:

Madaniyat vazirligi markaziy apparati tuzilmasida madaniyat muassasalari va havaskorlik san’atini rivojlantirish, sohada axborot texnologiyalarini keng joriy etish va raqamlashtirish masalalariga mas’ul vazir o‘rinbosari lavozimi joriy etilsin;

O‘zbekiston davlat konservatoriyasining “O‘zbek maqom san’ati fakulteti” hamda O‘zbekiston davlat san’at va madaniyat institutining tegishli ta’lim yo‘nalishlari va mutaxassisliklari negizida maqom ijrochiligi, baxshichilik va katta ashula yo‘nalishlari bo‘yicha kadrlar tayyorlovchi tayanch oliy ta’lim muassasasi — Yunus Rajabiy nomidagi O‘zbek milliy musiqa san’ati instituti tashkil etilsin;

davlat muassasasi shaklidagi Madaniy meros ilmiy-tadqiqot instituti tashkil etilsin;

Respublika ixtisoslashtirilgan estrada va sirk maktabi Karim Zaripov nomidagi Respublika estrada va sirk kolleji etib qayta tashkil etilsin;

V. Uspenskiy va R. Glier nomidagi Respublika ixtisoslashtirilgan musiqa akademik litseylari maktab-internatlar uchun belgilangan imtiyozlarni tatbiq qilgan holda tegishlicha V. Uspenskiy va R. Glier nomidagi Respublika ixtisoslashtirilgan musiqa maktablariga aylantirilsin.

O‘zbekiston davlat konservatoriyasi huzuridagi Iqtidorli bolalar akademik litseyi hamda Toshkent ixtisoslashtirilgan madaniyat maktabi negizida Madaniyat vazirligi tizimida Respublika musiqa va san’at kolleji tashkil etilsin;
<br/>
14. 2020-yil sentyabr oyidan boshlab davlat muzeylarida har oyning birinchi yakshanbasi “ochiq eshiklar kuni” deb e’lon qilinsin.

Belgilansinki, “ochiq eshiklar kuni”da fuqarolar muzey ashyolari va muzey kolleksiyalarini kirib ko‘rish uchun davlat muzeylariga bepul kiritiladi.
<br/>
15. Madaniyat vazirligi, Moliya vazirligi, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi va viloyatlar hokimliklari 2020 — 2025-yillar davomida bosqichma-bosqich har bir tuman va shaharda tarix va madaniyat davlat muzeylarining filiallari shaklida o‘lkashunoslik muzeylari tashkil etilishi va O‘zbekiston Respublikasi Davlat budjeti hisobidan moliyalashtiriladigan muzeylar, ularning filial va bo‘limlari ro‘yxatiga kiritilishini ta’minlasin.
<br/>
16. O‘zbekiston davlat san’at muzeyiga — san’at sohasidagi, O‘zbekiston tarixi davlat muzeyiga — madaniyat va tarix sohasidagi barcha muzeylar faoliyatini ilmiy-tadqiqot va metodik jihatdan muvofiqlashtirish, ularning ushbu yo‘nalishlardagi o‘zaro hamkorligini ta’minlash, kadrlarning ilmiy salohiyatini oshirish vazifasi yuklansin.

Madaniyat vazirligi va Fanlar akademiyasi 2021-yil 1-yanvarga qadar O‘zbekiston davlat san’at muzeyi va O‘zbekiston tarixi davlat muzeyida muzeyshunoslik, san’atshunoslik, madaniyatshunoslik yo‘nalishlarida qonun hujjatlarida belgilangan tartibda ixtisoslashtirilgan ilmiy kengashlar va ilmiy-metodik kengashlar tashkil etish choralarini ko‘rsin.

Madaniyat vazirligi Moliya vazirligi hamda Bandlik va mehnat munosabatlari vazirligi bilan birgalikda ikki oy muddatda 2021-yil 1-yanvardan boshlab muzeylarning ilmiy darajaga ega bo‘lgan xodimlarining bazaviy lavozim maoshlarini oshirish bo‘yicha Vazirlar Mahkamasiga taklif kiritsin.
<br/>
17. O‘zbekiston Respublikasi Vazirlar Mahkamasi bir oy muddatda yetakchi ijodiy tashkilotlarning “do‘stlar klublari”ni tashkil etish bo‘yicha ijobiy tajribasini muzeylar sohasiga tatbiq etilishini ta’minlasin.
<br/>
18. O‘zbekiston Respublikasi Oliy Majlisi palatalari, Madaniyat vazirligi, “O‘zbekkino” milliy agentligi, O‘zbekiston Badiiy akademiyasi, O‘zbekiston Yozuvchilar uyushmasi, O‘zbekiston kompozitorlari va bastakorlari uyushmasi, O‘zbekiston teatr arboblari uyushmasi, Respublika Ma’naviyat va ma’rifat markazi hamda keng jamoatchilikning madaniyat va san’atning jamiyatimiz ijtimoiy-ma’naviy hayotida tutgan o‘rnini hisobga olib, soha xodimlarini qo‘llab-quvvatlash maqsadida 15-aprel sanasini “O‘zbekiston Respublikasi madaniyat va san’at xodimlari kuni” deb e’lon qilish to‘g‘risidagi taklifi ma’qullansin.

Madaniyat vazirligi o‘n kun muddatda “O‘zbekiston Respublikasi madaniyat va san’at xodimlari kuni”ni belgilash bo‘yicha qonun loyihasini belgilangan tartibda Vazirlar Mahkamasiga kiritsin.
<br/>
19. O‘zbekiston Respublikasi Prezidentining 2019-yil 14-yanvardagi “Davlat aktivlarini boshqarish, monopoliyaga qarshi kurashishni tartibga solish tizimini va kapital bozorini tubdan takomillashtirish chora-tadbirlari to‘g‘risida”gi PF-5630-son Farmoni 6-bandining “a” kichik bandi birinchi xatboshisi “davlat mulki hisoblangan moddiy madaniy merosning ko‘chmas mulk obyektlari bundan mustasno” so‘zlari bilan to‘ldirilsin.
<br/>
20. Madaniyat vazirligi manfaatdor vazirlik va idoralar bilan birgalikda:

ikki hafta muddatda O‘zbekiston Respublikasi Prezidentining “O‘zbekiston Respublikasi Madaniyat vazirligi faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”gi qarori loyihasini;

ikki oy muddatda qonun hujjatlariga ushbu Farmondan kelib chiqadigan o‘zgartirish va qo‘shimchalar to‘g‘risidagi takliflarni Vazirlar Mahkamasiga kiritsin.
<br/>
21. Mazkur Farmonning ijrosini nazorat qilish O‘zbekiston Respublikasi Prezidentining maslahatchisi A.A. Abduvaxitov va O‘zbekiston Respublikasi Bosh vazirining o‘rinbosari B.A. Musayev zimmasiga yuklansin.

          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh.,<br />
              2020-yil 26-may,
<br />
PF-6000-son
</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
</div>              
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Madaniyat_sanat_sohasi;