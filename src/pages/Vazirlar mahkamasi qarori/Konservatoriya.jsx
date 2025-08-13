import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Konservatoriya = () => {
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
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">O'zbekiston davlat konservatoriyasi huzurida musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazi faoliyatini tashkil etish to'g'risida</h2>
          <p className="text-left mt-5 font-['Montserrat', 'sans-serif']">O‘zbekiston Respublikasi Prezidentining “O‘zbekiston davlat konservatoriyasi faoliyatini yanada rivojlantirish va takomillashtirish chora-tadbirlari to‘g‘risida” 2017-yil 8-avgustdagi PQ-3178-son qarori ijrosini ta’minlash, shuningdek, musiqa sohasidagi pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish tizimini yanada takomillashtirish maqsadida Vazirlar Mahkamasi qaror qiladi:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi hamda Oliy va o‘rta maxsus ta’lim vazirligining O‘zbekiston davlat konservatoriyasi huzurida Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazini (keyingi o‘rinlarda Markaz deb ataladi) tashkil etish to‘g‘risidagi taklifi ma’qullansin.
<br/>
2. Quyidagilar:

O‘zbekiston davlat konservatoriyasi huzuridagi Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazi boshqaruv xodimlarining cheklangan umumiy soni 11 nafardan iborat tuzilmasi 1-ilovaga muvofiq;

Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish tartibi to‘g‘risida nizom 2-ilovaga muvofiq tasdiqlansin.

O‘zbekiston Respublikasi madaniyat vaziriga, zarur hollarda, O‘zbekiston davlat konservatoriyasi huzuridagi Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazi tuzilmasiga xodimlarning umumiy cheklangan soni hamda mehnatga haq to‘lash jamg‘armasi doirasida o‘zgartirishlar kiritish huquqi berilsin.
<br/>
3. Quyidagilar Markazning asosiy vazifalari etib belgilansin:

musiqa sohasi pedagoglarini qayta tayyorlash va malakasini oshirish;

musiqa sohasi pedagoglarini qayta tayyorlash va malakasini oshirish kurslarining o‘quv-metodik bazasini shakllantirish va faoliyatini muvofiqlashtirish hamda ularga tashkiliy-metodik rahbarlikni amalga oshirish;

o‘quv jarayoniga zamonaviy pedagogik va axborot-kommunikatsiya texnologiyalarini keng joriy etishni hisobga olgan holda qayta tayyorlash va malaka oshirish kurslarining o‘quv rejalari va dasturlarini tizimli ravishda takomillashtirishni ta’minlash;

musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish jarayonlarining ilmiy muammolariga yo‘naltirilgan fundamental, amaliy va innovatsion ilmiy izlanishlar olib borilishini muvofiqlashtirish;

o‘qitishning zamonaviy shakl va uslublari, samarali pedagogik texnologiyalar, elektron axborot resurslaridan keng foydalangan holda ta’lim jarayonining yuqori darajada olib borilishini ta’minlash;

musiqa sohasi pedagoglarining malakasini har besh yilda bir marta oshirish, bunda ilg‘or xalqaro tajribadan keng foydalanish, professional bilimlarni va ko‘nikmalarni rivojlantirishga yo‘naltirilgan samarali o‘qitish dasturlari va uslublarini joriy etish;

qayta tayyorlash va malaka oshirish kurslari tinglovchilarining zamonaviy axborot-kommunikatsiya texnologiyalarini va xorijiy tillarni samarali o‘zlashtirishlari uchun qulay shart-sharoitlar yaratish;

xalqaro tanlovlarda munosib qatnashadigan iqtidorli yosh professional musiqachilar tayyorlash uchun ularning ko‘nikma va bilimlarini rivojlantirishga yo‘naltirilgan zamonaviy o‘qitish dasturlari va uslublarini joriy etish.
<br/>

4. Belgilab qo‘yilsinki, Markaz yuridik shaxs maqomiga, o‘z ustaviga, O‘zbekiston Respublikasi Davlat gerbi tasviri tushirilgan va o‘z nomi davlat tilida yozilgan muhrga hamda blankalarga, mustaqil balansga, O‘zbekiston Respublikasi Moliya vazirligining G‘aznachiligida shaxsiy g‘azna hisobvarag‘iga ega bo‘lgan, musiqaga ixtisoslashtirilgan maktab (maktab-internatlar), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablarining pedagog xodimlarini (keyingi o‘rinlarda musiqa sohasi pedagoglari deb ataladi) qayta tayyorlash va ularning malakasini oshirishga ixtisoslashtirilgan ilmiy-metodik va ta’lim muassasasi hisoblanadi.
<br/>

5. O‘zbekiston Respublikasi Madaniyat vazirligi:
<br/>

a) bir hafta muddatda Markazga O‘zbekiston davlat konservatoriyasi hududidan bino va xonalar ajratish choralarini ko‘rsin;
<br/>

b) ikki oy muddatda:

sohani rivojlantirishga yo‘naltirilgan vazifalardan kelib chiqqan holda Markaz ustavini ishlab chiqib, belgilangan tartibda tasdiqlasin va uning davlat ro‘yxatidan o‘tkazilishini ta’minlasin;

Markazni yuqori malaka va tajribaga ega bo‘lgan kadrlar, shuningdek, xalqaro darajadagi tanlovlarning g‘olib va sovrindorlari bo‘lgan malakali musiqa sohasi mutaxassislari bilan ta’minlasin;

malaka oshirish va qayta tayyorlash kurslari uchun o‘quv reja va dasturlarini ishlab chiqsin va belgilangan tartibda tasdiqlasin, ularning doimiy ravishda takomillashtirib borilishini ta’minlash choralarini ko‘rsin.
<br/>

6. Belgilab qo‘yilsinki:

tizimida musiqa sohasi pedagog va mutaxassislari bo‘lgan vazirlik va idoralar har yili 15-noyabrga qadar tegishli muassasalarda faoliyat yuritayotgan musiqa sohasi pedagog va mutaxassislarining egallab turgan lavozimiga ko‘ra malaka oshirish kurslaridan o‘tishi bo‘yicha belgilangan davriylikni inobatga olgan holda keyingi kalendar yilda malaka oshirish kurslariga o‘qishga yuboriladigan tinglovchilar kontingentini shakllantirib, O‘zbekiston Respublikasi Madaniyat vazirligiga taqdim etib boradilar;

Markaz xodimlariga oliy ta’lim muassasalari uchun belgilangan me’yorlar bo‘yicha mehnatga haq to‘lash miqdorlari va shartlari tatbiq etiladi;

ta’lim jarayoniga oliy ta’lim muassasalarining professor-o‘qituvchilari hamda musiqa sohasidagi yetakchi mutaxassislar jalb etilganda, ularga belgilangan tartibda soatbay asosida ish haqi to‘lanadi.
<br/>
7. Quyidagilar Markaz faoliyatini moliyalashtirish manbalari etib belgilansin:

O‘zbekiston Respublikasi Davlat budjeti mablag‘lari;

O‘zbekiston Respublikasi Innovatsion rivojlanish vazirligi tomonidan o‘tkaziladigan tanlovlarning natijalari bo‘yicha ajratiladigan grantlar;

to‘lov-kontrakt asosida tinglovchilarni o‘qitishdan tushadigan mablag‘lar;

xo‘jalik faoliyatidan va shartnoma asosida ko‘rsatilgan xizmatlardan tushadigan mablag‘lar;

ta’lim xizmatlari ko‘rsatishdan, ilmiy-o‘quv, o‘quv-metodik, ilmiy va axborot-tahliliy mahsulotlarni ishlab chiqishdan va boshqa faoliyat turlaridan olingan daromadlar;

jismoniy va yuridik shaxslarning homiylik xayriyalari;

xalqaro moliya institutlari, xorijiy va donor tashkilotlarning grantlari;

qonun hujjatlarida taqiqlanmagan boshqa manbalar.

Belgilab qo‘yilsinki, Markazni saqlash xarajatlari 2019-yilda O‘zbekiston Respublikasi Davlat budjetidan ijtimoiy soha uchun ajratilgan mablag‘lar hisobidan amalga oshiriladi, 2020-yildan boshlab O‘zbekiston Respublikasi Davlat budjeti parametrlarida nazarda tutiladi.
<br/>
8. O‘zbekiston Respublikasi Prezidentining 2018-yil 19-dekabrdagi PQ-4067-son qarori bilan tasdiqlangan O‘zbekiston Respublikasining 2019-yilga mo‘ljallangan Investitsiya dasturida Markaz qurilishi uchun 10 mlrd. so‘m mablag‘ nazarda tutilgani ma’lumot uchun qabul qilinsin.

O‘zbekiston Respublikasi Investitsiyalar va tashqi savdo vazirligi manfaatdor vazirliklar va idoralar bilan birgalikda tasdiqlangan loyiha-smeta hujjatlariga asosan O‘zbekiston Respublikasining 2020-yilga mo‘ljallangan rivojlanish davlat dasturi parametrlarini shakllantirishda Markazni qurish hamda jihozlash ishlari uchun belgilangan tartibda mablag‘lar ajratilishini nazarda tutsin.
<br/>
9. O‘zbekiston Respublikasi Moliya vazirligi Markazga 1 ta xizmat avtotransport vositasini saqlash uchun limit ajratsin.
<br/>
10. O‘zbekiston Respublikasi Madaniyat vazirligi manfaatdor vazirliklar va idoralar bilan birgalikda o‘zlari qabul qilgan normativ-huquqiy hujjatlarni bir oy muddatda ushbu qarorga muvofiqlashtirsin.
<br/>
11. Mazkur qarorning bajarilishini nazorat qilish O‘zbekiston Respublikasi Bosh vazirining ijtimoiy rivojlantirish masalalari bo‘yicha o‘rinbosari A.A. Abduxakimov hamda O‘zbekiston Respublikasi madaniyat vaziri B.S. Sayfullayev zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2019-yil 20-fevral,
<br />
149-son
</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Bosh vaziri A. ARIPOV</p>
    <p>Vazirlar Mahkamasining 2019-yil 20-fevraldagi 149-son qaroriga 2-ILOVA</p>
</div>              
            </div>
        </div>
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish tartibi to‘g‘risida
          NIZOM</p>
          <p className="text-sm sm:text-base md:text-lg">1-bob. Umumiy qoidalar</p>
          <p className="text-left mt-5">1. Ushbu Nizom davlat hamda nodavlat musiqaga ixtisoslashtirilgan maktab (maktab-internatlar), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablarining pedagog xodimlari hamda O‘zbekiston Respublikasi Madaniyat vazirligining “O‘zbek milliy maqom markazi”, ansambllar, orkestrlar rahbar va xodimlarini (keyingi o‘rinlarda musiqa sohasi pedagog va mutaxassislari deb ataladi) qayta tayyorlash va ularning malakasini oshirish tartibini belgilaydi.
<br/>
2. Musiqa sohasi pedagog va mutaxassislari bo‘yicha lavozimlar va mutaxassisliklar nomenklaturasi O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan shakllantiriladi.
<br/>
3. Davlat va nodavlat ta’lim muassasalarining musiqa sohasi pedagog va mutaxassislari O‘zbekiston davlat konservatoriyasi huzuridagi Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazi (keyingi o‘rinlarda Markaz deb ataladi) bilan tuzilgan shartnoma asosida mazkur Nizomga ilovadagi sxema bo‘yicha qayta tayyorlash va malaka oshirishdan o‘tadilar.
<br/>
4. Ushbu Nizomda quyidagi asosiy tushunchalar qo‘llaniladi:
<br/>
buyurtma — davlat va nodavlat ta’lim muassasalarining musiqa sohasi pedagog va mutaxassislarini tizimli tahlil qilish asosida O‘zbekiston Respublikasi Davlat budjeti, shuningdek, nodavlat ta’lim muassasalari hisobidan moliyalashtiriladigan malaka oshirish kurslaridan o‘tishning davriyligiga muvofiq keyingi kalendar yil uchun oylar va o‘qish yo‘nalishlari bo‘yicha shakllantirilgan tinglovchilar kontingenti;
<br/>

buyurtmanoma — buyurtmachi tomonidan musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish kursiga qabul qilish uchun Markazga taqdim etiladigan va mazkur Nizomda belgilangan tartibda rasmiylashtirilgan pedagog va mutaxassislar ro‘yxati;
<br/>

buyurtmachi — tasarrufida musiqa sohasidagi o‘rta, o‘rta maxsus, maktabdan tashqari ta’lim muassasalari mavjud bo‘lgan vazirliklar, idoralar va tashkilotlar, shuningdek, nodavlat ta’lim muassasalari;
<br/>

kontingent — davlat tasarrufidagi musiqaga ixtisoslashtirilgan maktab (maktab-internatlar), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablarining musiqa sohasi, shuningdek, nodavlat ta’lim muassasalari pedagog xodimlari hamda O‘zbekiston Respublikasi Madaniyat vazirligining “O‘zbek milliy maqom markazi”, ansambllar, orkestrlarning rahbar va xodimlarining faoliyatini tizimli tahlil qilish asosida O‘zbekiston Respublikasi Davlat budjeti, shuningdek, nodavlat ta’lim muassasasi hisobidan moliyalashtiriladigan malaka oshirish kurslaridan o‘tishning belgilangan davriyligiga muvofiq keyingi kalendar yil uchun oylar va o‘qish yo‘nalishlari bo‘yicha shakllantirilgan tinglovchilar ro‘yxati;
<br/>

malaka talablari — qayta tayyorlash va malaka oshirish kurslari bitiruvchisining umumiy bilim va kasb tayyorgarligi darajasiga qo‘yiladigan talablar;
<br/>

pedagog xodim — musiqaga ixtisoslashtirilgan maktab (maktab-internatlar), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablarida ta’lim-tarbiya faoliyatini amalga oshiruvchi o‘qituvchi;
<br/>

tinglovchi — Markaz direktori buyrug‘i bilan qayta tayyorlash va malaka oshirish kursiga qabul qilingan musiqa sohasi pedagog va mutaxassislari;
<br/>

tyutor (pedagog o‘qituvchi-konsultant) — masofaviy malaka oshirish ta’lim jarayonida tegishli o‘quv moduli bo‘yicha tinglovchilar faoliyatini muvofiqlashtiruvchi va yo‘naltiruvchi, metodik yordam ko‘rsatuvchi, o‘qish va bilish nazoratini amalga oshiruvchi subyekt;
<br/>

yakuniy nazorat — tinglovchilarni yakuniy test sinovlari va bitiruv malakaviy (kursni tugatish) ishiga qo‘yilgan baholar yig‘indisi.
          </p>
        </div>
        <div className="text-center mb-6">
          <p className="text-sm sm:text-base md:text-lg">2-bob. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirishning maqsadi va vazifalari</p>
          <p className="text-left mt-5">5. O‘quv jarayonini malaka talablariga muvofiq yuqori ilmiy-uslubiy darajada ta’minlash, ilg‘or pedagogik va axborot texnologiyalari, shuningdek, o‘qitishning interaktiv usullari bo‘yicha kasbiy va pedagogik mahoratni doimiy ravishda rivojlantirishga ko‘maklashish uchun zarur bo‘lgan kasbiy bilimlar va ko‘nikmalarni muntazam ravishda yangilab borish, musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish kurslarining (keyingi o‘rinlarda qayta tayyorlash va malaka oshirish kurslari deb ataladi) maqsadi hisoblanadi.
<br/>
6. Quyidagilar Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirishning vazifalari hisoblanadi:

musiqa sohasi pedagog va mutaxassislari kasbiy mahorati darajasining lavozim malaka tavsiflariga muvofiqligini ta’minlash;

musiqa sohasi pedagog va mutaxassislarini qonunchilik normalari, nazariya, ilmiy tadqiqotlar, texnologik taraqqiyot va sohadagi innovatsiyalar, shuningdek, ta’lim amaliyotini tashkil etishning zamonaviy uslublari sohasidagi so‘nggi yutuqlari bilan tanishtirib borish;

musiqa sohasi pedagog va mutaxassislari salohiyatidan hamda mavjud moddiy-texnika bazasidan foydalanish imkoniyatlarini kengaytirish;

ilg‘or xorijiy tajribalarni keng joriy etgan holda musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish faoliyatining sifati va samaradorligini oshirishni ta’minlash;

Internet jahon axborot tarmog‘i, multimedia tizimlari va masofadan o‘qitish usullaridan keng foydalangan holda, musiqa sohasi pedagoglariga zamonaviy ish uslublarini o‘zlashtirishga, axborot-kommunikatsiya va innovatsion texnologiyalarni o‘z faoliyatiga faol tatbiq etishiga ko‘maklashish;

musiqa sohasi pedagog va mutaxassislarining kasbiy bilimi, ko‘nikmasi va mahoratini uzluksiz yangilab borish, zamonaviy talablarga muvofiq ta’lim sifatini ta’minlash uchun zarur darajada kasbiy tayyorgarlikni oshirish;

mustaqil fikrlash ko‘nikmalarini singdirish, pedagogik nufuzni va kompetentlikni rivojlantirish;

musiqa sohasi mutaxassislarini zamonaviy musiqiy repertuardagi o‘zgarishlar, kompozitorlik va bastakorlik ijodiyotidagi yangiliklardan xabardor qilish va mehnat faoliyatiga singdirish;

rahbar xodimlarning musiqa sohasi pedagog va mutaxassislarini boshqarish malakalarini shakllantirish, musiqa sohasidagi yangiliklarni tahlil qilish va joriy etishga o‘rgatish, xorijiy tajribalarni o‘zi rahbarlik qilayotgan muassasaga tatbiq etish, innovatsiyalarni joriy etishga o‘rgatish;

o‘quv-tarbiyaviy va ma’naviy-axloqiy ishlarni amalga oshirishda ilg‘or ta’lim-tarbiya texnologiyalaridan va jahon tajribasidan foydalanish ko‘nikmalarini mustahkamlash;

musiqa sohasi pedagog va mutaxassislarining malakasini oshirish va qayta tayyorlash mazmunini takomillashtirish bo‘yicha ilmiy-tadqiqot hamda o‘quv-metodik ishlarni olib borish ko‘nikmalarini shakllantirish;

qayta tayyorlash va malaka oshirish kurslarining to‘g‘ridan to‘g‘ri shakllarini amaliyotga joriy etish;

musiqa sohasi pedagog va mutaxassislari tomonidan zamonaviy axborot-kommunikatsiya texnologiyalarini va xorijiy tillarni o‘zlashtirish uchun qo‘shimcha shart-sharoitlar yaratish;

O‘zbekiston davlat konservatoriyasi kafedralarining musiqaga ixtisoslashtirilgan madaniyat va san’at maktablari (maktab-internatlari), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablari hamda O‘zbekiston Respublikasi Madaniyat vazirligining “O‘zbek milliy maqom san’ati markazi”, ansambllar, orkestrlar bilan o‘zaro integratsiyasini ta’minlash;

pedagoglarni qayta tayyorlash va ularning malakasini oshirish tizimini yanada rivojlantirish va modernizatsiya qilish.
          </p>
        </div>
        <div className="text-center mb-6">

          <p className="text-sm sm:text-base md:text-lg">3-bob. Musiqa sohasidagi pedagog va mutaxassislarni qayta tayyorlash va ularning malakasini oshirish tizimida ta’lim jarayonining mazmuni va sifatiga qo‘yiladigan malaka talablari</p>
          <p className="text-left mt-5">7. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish tizimida ta’lim jarayonining mazmuni va sifatiga qo‘yiladigan malaka talablari “Ta’lim to‘g‘risida” va “Kadrlar tayyorlash milliy dasturi to‘g‘risida”gi O‘zbekiston Respublikasining qonunlariga muvofiq belgilanadi hamda ularda ta’lim jarayonini tashkil etishni, uning mazmunini, metodik ta’minlashni, sifat va samaradorligini oshirishni takomillashtirishga doir talablar aks ettiriladi.
<br/>
8. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish tizimida ta’lim dasturi mazmuniga qo‘yiladigan talablar yo‘nalishlar bo‘yicha zarur hamda yetarli bilim va ko‘nikmalarni o‘zlashtirish hisobga olingan holda, pedagog va mutaxassislarning malaka tavsiflariga qat’iy muvofiqlik tamoyillari asosida belgilanadi.
<br/>

9. Ta’lim dasturi ilm-fan, pedagogik va innovatsion texnologiyalarning so‘nggi yutuqlariga muvofiq tashkil etilishi hamda ta’lim turlari o‘rtasida uzluksizlik va uzviylikni ta’minlash talablariga mos bo‘lishi kerak.

Ta’lim dasturida ta’lim oluvchilar tomonidan bilimlarni mustaqil izlash va ularni o‘zlashtirish nazarda tutilishi lozim.

Markazning o‘quv rejasi va dasturlarini tuzish, ekspertizadan o‘tkazish, tasdiqlash va ularni ta’lim jarayoniga joriy etish O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan amalga oshiriladi.
          </p>
        </div>
        <div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">4-bob. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish tizimi</p>
<p className="text-left mt-5">10. Musiqa sohasining pedagoglarini qayta tayyorlash va ularning malakasini oshirish tizimiga quyidagilar kiradi:

O‘zbekiston Respublikasi Madaniyat vazirligi;

O‘zbekiston davlat konservatoriyasi (keyingi o‘rinlarda Konservatoriya deb ataladi);

O‘zbekiston davlat konservatoriyasi huzuridagi Musiqa sohasi pedagog va ularning mutaxassislarini qayta tayyorlash va ularning malakasini oshirish markazi (keyingi o‘rinlarda Markaz deb ataladi);

buyurtmachi.
<br/>
11. O‘zbekiston Respublikasi Madaniyat vazirligi (keyingi o‘rinlarda Vazirlik deb ataladi):

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish tizimiga umumiy rahbarlik qiladi va ularning faoliyatini muvofiqlashtiradi;

buyurtma asosida tashkil etiladigan malaka oshirish kurslarini O‘zbekiston Respublikasi Davlat budjetidan moliyalashtirish uchun Moliya vazirligiga taklif kiritadi;

keyingi kalendar yili uchun O‘zbekiston Respublikasi Davlat budjetidan moliyalashtiriladigan malaka oshirish kurslarini, oylar, malaka oshirish shakllari va o‘qish yo‘nalishlari bo‘yicha buyurtmani shakllantiradi va tasdiqlaydi;

qayta tayyorlash va malaka oshirish kurslarining o‘quv jarayonini takomillashtirish mexanizmlari va uslublarini belgilaydi, tegishli o‘quv-metodik, normativ-huquqiy hujjatlarni hamda qayta tayyorlash va malaka oshirish kurslari tinglovchilari bilimlarini baholash mezonlarini tasdiqlaydi;

Markazning axborot-resurs markazi va moddiy-texnik bazasini mustahkamlash choralarini ko‘radi;

qayta tayyorlash va malaka oshirish kurslari bitiruvchilarining tayyorgarligi va kompetensiyasiga qo‘yiladigan malaka talablarini tasdiqlaydi;

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish ishlarini takomillashtirishga doir maqsad va vazifalarni belgilaydi;

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirishga doir malaka talablari, o‘quv reja va dasturlarini tasdiqlaydi;

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirishni takomillashtirish mexanizmi va usullarini, ta’lim mazmuni va sifatiga qo‘yiladigan talablarni, qayta tayyorlash va malaka oshirish tizimini takomillashtirish jarayoni samaradorligini aniqlaydigan dinamik ko‘rsatkichlarni hamda tinglovchilarning prognoz kontingentini belgilaydi;

Markazning qayta tayyorlash va malaka oshirish kurslariga ilmiy salohiyatli, mahoratli, ilmiy maktab yaratgan, darslik va o‘quv qo‘llanmalar muallifi bo‘lgan, doimiy ravishda kasbiy mahoratini va malakasini oshirib borayotgan pedagog xodimlarni jalb etadi.
<br/>

12. Konservatoriya:

pedagoglarning kasbiy bilimi va malakasini oshirish ishlariga ilmiy-metodik jihatdan rahbarlik qiladi;

ta’lim dasturlarining uzluksizligi va izchilligini hisobga olib, ijodiy tafakkurni rivojlantirishga yo‘naltirilgan o‘qitishning interaktiv usullaridan foydalangan holda pedagoglarni qayta tayyorlash va ularning malakasini oshirish bo‘yicha namunaviy o‘quv rejasini, dasturini, o‘quv-metodik va boshqa hujjatlarni ishlab chiqadi;

qayta tayyorlash va malaka oshirishning samarali shakllarini joriy etishning ilmiy-metodik va tashkiliy-metodik asoslarini ishlab chiqadi;

ta’limning ilg‘or shakl va usullari, zamonaviy ta’lim va axborot-kommunikatsiya texnologiyalarini qayta tayyorlash va malaka oshirish jarayoniga joriy etish asosida, pedagog va boshqa mutaxassis xodimlarning kasbiy bilimi, ko‘nikmasi va malakalarini oshirish choralarini ko‘radi;

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish sohasidagi xorijiy tajribalarni, shuningdek, eng yaxshi ta’lim muassasalarining yutuqlarini ommalashtirish asosida ilmiy asoslangan innovatsiyalarni joriy etadi;

Markaz bilan birgalikda namunaviy o‘quv rejasi va dasturlari asosida qayta tayyorlash va malaka oshirishning barcha shakllari bo‘yicha ishchi o‘quv rejasi va dasturlarini, ilg‘or o‘qitish uslublari va axborot texnologiyalaridan foydalangan holda yo‘nalishlar bo‘yicha tarqatma materiallar ishlab chiqadi;

Markaz tomonidan o‘quv rejasi va dasturlarining bajarilishini nazorat qiladi;

qayta tayyorlash va malaka oshirish kurslarining amaliy va ko‘chma mashg‘ulotlarining kasbiy yo‘nalishga oid ixtisoslashgan ta’lim muassasalari bazasida o‘tkazilishini tashkil etadi;

qayta tayyorlash va malaka oshirish kurslarining o‘quv jarayoniga oliy ta’lim muassasasida faoliyat yuritayotgan professor-o‘qituvchilarni, shuningdek, shartnoma asosida mamlakatning boshqa oliy ta’lim muassasalarining yuqori malakali pedagog xodimlarini va xorijiy mutaxassislarni keng jalb etishni ta’minlaydi;

ilg‘or pedagogik texnologiyalarning shakl va usullarini qayta tayyorlash va malaka oshirish jarayoniga joriy etishga ko‘maklashadi;

zamonaviy pedagogik va axborot-kommunikatsiya texnologiyalari asosida qayta tayyorlash va malaka oshirish kurslarining ishchi o‘quv rejasi va dasturlarini takomillashtiradi;

tegishli yo‘nalishlar bo‘yicha yetakchi xorijiy ilmiy va ta’lim muassasalari bilan hamkorlik o‘rnatib, axborot-kommunikatsiya texnologiyalari yordamida onlayn rejimda malaka oshirish tizimini tashkil etishni ta’minlaydi;

qayta tayyorlash va malaka oshirish kurslarining tegishli o‘quv-metodik resurslarini ishlab chiqadi;

qayta tayyorlash va malaka oshirish kursi mashg‘ulotlarining sifatini doimiy nazorat qiladi;

pedagogika sohasida erishilgan ilmiy-tadqiqot natijalarini qayta tayyorlash va malaka oshirish jarayoniga o‘z vaqtida joriy etishni ta’minlaydi;

Markaz professor-o‘qituvchilarining ilmiy izlanishlari uchun zaruriy shart-sharoitlar yaratadi;

qayta tayyorlash va malaka oshirish jarayonining zarur darajada tashkil etilishi va o‘tkazilishi uchun javob beradi;

Markazda tashkil etiladigan konferensiya, forum va ilmiy-amaliy anjumanlarning o‘tkazilishiga ko‘maklashadi;

Markaz faoliyati yuzasidan axborotni har 6 oy yakunlari bo‘yicha Konservatoriya kengashida muhokama qiladi va Markaz faoliyatini yanada takomillashtirishga oid taklif va tavsiyalarni Vazirlikka taqdim etadi.
<br/>

13. Markaz:

musiqa sohasi pedagog va mutaxassislari uchun qayta tayyorlash va malaka oshirishning ilg‘or shakl va usullarini joriy etadi;

musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish bo‘yicha ta’lim dasturlarini takomillashtirish yuzasidan ilmiy-tadqiqot hamda o‘quv-uslubiy ishlarni olib borish ko‘nikmalarini rivojlantiradi;

masofadan o‘qitish usullari asosida musiqa sohasi pedagog va mutaxassislari uchun tashkil etiladigan qayta tayyorlash va malaka oshirish kurslarining tegishli o‘quv-uslubiy resurslarini ishlab chiqadi, kurslardagi o‘quv mashg‘ulotlarini onlayn va offlayn shakllarida tashkil etishni yanada takomillashtiradi;

tegishli yo‘nalishlar bo‘yicha fanlarning umumkasbiy va maxsus bloklari bo‘yicha qayta tayyorlash va malaka oshirishni tashkil etadi hamda ular bo‘yicha zamonaviy uslubiy, axborot-ma’lumotnoma bazasini yaratadi;

buyurtmachi tashkilotlar bilan hamkorlikda musiqa sohasi pedagog va mutaxassislari qayta tayyorlash va ularning malakasini oshirish bo‘yicha ta’lim dasturlarini uzluksiz takomillashtirib boradi;

o‘quv-tarbiya jarayonining amaliyot bazalari bilan o‘zaro samarali hamkorligini ta’minlaydi, musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish jarayonini ko‘chma mashg‘ulotlar orqali zamonaviy texnika va texnologiyalar bilan jihozlangan ta’lim muassasalarida tashkil etadi;

innovatsion ilmiy yutuqlarni, zamonaviy pedagogik va axborot-kommunikatsiya texnologiyalarini qo‘llashni, masofadan o‘qitishni, mustaqil ta’lim olishni kengaytirishni nazarda tutuvchi texnika va texnologiyalarni ta’lim tizimiga joriy etadi.
<br/>

14. Buyurtmachi:

musiqa sohasi pedagog va mutaxassislari faoliyatining tizimli tahlilini amalga oshiradi va elektron ma’lumotlar bazasiga kiritib boradi;

malaka oshirish davriyligiga amal qilgan holda musiqa sohasi pedagog va mutaxassislarini keyingi kalendar yil uchun har yilning 15-noyabriga qadar ularning egallab turgan lavozimiga ko‘ra kurslardan o‘tishi bo‘yicha belgilangan davriylikni inobatga olgan holda malaka oshirish kurslariga yuboriladigan tinglovchilar kontingentini shakllantiradi va Vazirlikka taqdim etadi;

qayta tayyorlash va malaka oshirish kurslarining o‘quv rejasi, dasturi, o‘quv-uslubiy va boshqa hujjatlarini tayyorlashda, o‘quv kurslarining davomiyligi, davriyligi hamda tashkil etish shakllari bo‘yicha Vazirlikka takliflar kiritadi;

mehnat bozori talablaridan kelib chiqqan holda yangi mutaxassislikka talab ortishi munosabati bilan ayrim musiqa sohasi pedagog va mutaxassislarining qayta ixtisoslashuvi yuzasidan Vazirlikka takliflar kiritadi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">5-bob. Qayta tayyorlash va malaka oshirishning turlari va shakllari</p>
<p className="text-left mt-5">15. Musiqa sohasi pedagog va mutaxassislarining malakasini oshirish to‘g‘ridan to‘g‘ri (ta’lim dasturlari bo‘yicha o‘qitish) va bilvosita (ta’lim dasturlarisiz o‘qitish) shakllarda tashkil etiladi.
<br/>
16. Musiqa sohasi pedagog va mutaxassislarining malakasini oshirishning quyidagi to‘g‘ridan to‘g‘ri malaka oshirish shakllari qo‘llaniladi:

Markazda o‘qitish;

“ustoz-shogird” usuli bo‘yicha o‘qitish;

mustaqil o‘qib bilim orttirish;

masofaviy ta’lim;

stajirovka o‘tash orqali tajriba orttirish.
<br/>

17. Markazda o‘qitish yakka tartibdagi topshiriqlar yoki aniq yo‘naltirilgan dasturlar asosida, ta’limning tegishli turi o‘quv jarayonining monitoringi natijalarini va xodimlar tayyorlash sifatini hisobga olib, malaka talablariga, shuningdek, ta’limni boshqarish bo‘yicha Vazirlik talablariga muvofiq ishlab chiqilgan fanlar bo‘yicha maqsadli kasbiy ta’lim dasturlarini o‘zlashtirishdir.

Malaka oshirish bo‘yicha ixtisoslashtirilgan ta’lim muassasasida o‘qitish 2+2 yoki 3+1 sxemalari bo‘yicha (tegishli ravishda 50 yoki 75% — yashash joyi bo‘yicha mustaqil ravishda bilim orttirish, 50 yoki 25% — bevosita ta’lim muassasasida) masofadan malaka oshirish shaklida tashkil etilishi mumkin. O‘qitishning bunday shakllari axborot uzatishning zamonaviy axborot-kommunikatsiya vositalari va pedagoglarning malakasini oshirish bo‘yicha maxsus virtual kurslar mavjud bo‘lgan taqdirda qo‘llaniladi.
<br/>

18. “Ustoz-shogird” usuli bo‘yicha o‘qitish — tanlov asosida saralab olingan, mamlakatda (mintaqada), ilmiy va pedagogik jamoatchilik o‘rtasida o‘zining yuqori natijalari, kasbiy faoliyatining yuqori ko‘rsatkichlari, raqobatbardosh xodimlar tayyorlash bo‘yicha o‘z maktabi bilan mashhur bo‘lgan yuqori malakali pedagog-ustozlar rahbarligida tegishli ta’lim muassasalarida fanlar bo‘yicha musiqa sohasi pedagog va mutaxassislarining malakasini maqsadli oshirish hisoblanadi.
<br/>

19. Mustaqil o‘qib bilim orttirish — musiqa sohasi pedagog va mutaxassislari tomonidan kasb mahoratini oshirishga, kasbiy layoqat va ilmiy dunyoqarashni kengaytirishga yo‘naltirilgan bo‘lib, ularning o‘z lavozimi va mutaxassisligi bo‘yicha yangi bilim, ko‘nikma va malakalarni uzluksiz ravishda mustaqil o‘zlashtirishini nazarda tutadi.

Mustaqil ravishda bilim olish musiqa sohasi pedagog va mutaxassislari uzluksiz ta’limining (malaka oshirishining) ajralmas tarkibiy qismidir, u axborot texnologiyalarining egallab olinishini rag‘batlantiradi. Mustaqil ta’lim belgilangan tartibda, malaka oshirishning tegishli ta’lim dasturlari bo‘yicha amalga oshirilgan bo‘lsa, bilimlarning yakuniy nazorati natijalari asosida pedagog va mutaxassislarga Markaz tomonidan malaka oshirganlik haqida belgilangan namunadagi hujjat (sertifikat) beriladi.

Malaka oshirishning ushbu shakli ta’lim dasturini ta’lim oluvchi tomonidan tuzilgan va Markaz tomonidan tasdiqlangan yakka tartibdagi reja asosida mustaqil o‘qish vositasida o‘zlashtirishni nazarda tutadi.

Mustaqil o‘qib bilim orttirish shaklida malaka oshirish barqaror yuqori professional reytingga ega bo‘lgan, zamonaviy axborot texnologiyalari bilan ishlashning amaliy ko‘nikmalarini egallagan, o‘zini o‘zi kamol toptirish jarayoniga tanqidiy va ijodiy yondasha oladigan tinglovchilar uchun O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan tavsiya etiladi.
<br/>

20. Masofaviy ta’lim — onlayn (videoma’ruzalar, maslahatlar, nazorat turlarini masofadan turib real vaqt rejimida o‘tkazish) va offlayn (masofaviy ta’lim tizimidagi tegishli o‘quv-metodik resurslarni mustaqil ravishda o‘zlashtirish) shaklida amalga oshiriladi.
<br/>

21. Stajirovka o‘tash orqali tajriba orttirish — ta’lim muassasalarida pedagoglarni ta’lim va uni boshqarish sohasidagi fan va texnika taraqqiyotining eng yangi yutuqlari, zamonaviy texnika va texnologiyalar bilan tanishtirishni, rahbarlik salohiyatini oshirishni nazarda tutadi.

Stajirovka xizmat safariga yuborish tarzida ham amalga oshiriladi.

Stajirovka tamom bo‘lgandan keyin xodimlarga stajirovka muddati ko‘rsatilgan holda ularning stajirovkadan o‘tganligi to‘g‘risida tajriba orttirilgan muassasa rahbarining imzosi va muhri bilan tasdiqlangan ma’lumotnoma beriladi.

<br/>
22. Qisqa muddatli kurslar malaka oshirish ta’lim dasturlari asosida tashkil etilgan innovatsion menejment, pedagogik yoki axborot texnologiyalarini o‘zlashtirish kurslarida o‘qish bo‘lib, musiqa sohasi pedagog va mutaxassislarining malakasini oshirishning to‘g‘ridan to‘g‘ri shakllari tarzida amalga oshiriladi. Ushbu kurslar majburiy bo‘lmagan holda pedagog va mutaxassislarning kasbiy o‘sishiga ko‘maklashadi.

Mazkur kurslarning ta’lim dasturlari malaka oshirish ta’lim dasturlarining muayyan qismini (fan bloklari yoki modullarini) qamrab olgan va Markaz tomonidan ushbu kurslar o‘tkazilgan bo‘lsa, kurslarni tamomlagandan keyin berilgan sertifikatlarda ko‘rsatilgan o‘qish soatlari hajmi navbatdagi malaka oshirish bo‘yicha zarur soatlarning jami hajmiga kiradi (hisobga olinadi).
<br/>

23. Musiqa sohasi pedagog va mutaxassislari malakasini oshirishning bilvosita shakllari quyidagilardan iborat:

ochiq o‘quv mashg‘ulotlari;

ilmiy, ilmiy-metodik va ilmiy-amaliy seminarlarda, konferensiyalarda hamda mahorat darslarida ma’ruzalar bilan qatnashish.

<br/>
24. Ochiq o‘quv mashg‘ulotlari — zamonaviy axborot-kommunikatsiya texnologiyalari, o‘qitishning interaktiv usullari qo‘llanilgan holda akademik guruhlarda jadval bo‘yicha o‘tkaziladigan oldindan e’lon qilingan muammo yoki innovatsiya mavzusi bo‘yicha mashg‘ulotdir.

Ochiq o‘quv mashg‘ulotlariga tegishli sohadagi tajribali pedagoglar, olimlar va mutaxassislar taklif etiladi.

Ushbu mashg‘ulotlarning sifati Konservatoriya va Markazning qo‘shma yig‘ilishida muhokama qilinadi.

<br/>
25. Ilmiy, ilmiy-metodik va ilmiy-amaliy seminarlar, konferensiyalar, avgust o‘qishlarida ma’ruzalar bilan qatnashish — ta’lim va tarbiyaning dolzarb muammolari, shuningdek, o‘quv jarayonining yuqori sifatini ta’minlashga yo‘naltirilgan pedagogika fani va amaliyoti, musiqa sohasi innovatsiyalari, o‘qitish metodologiyasi va texnologiyasining muhim masalalari bo‘yicha ilmiy va ilmiy-metodik ma’ruza (axborot)lar bilan chiqishlar orqali ta’minlanadi.

<br/>
26. Malaka oshirishning bilvosita shakllari musiqa sohasi pedagog va mutaxassislarini navbatdagi malaka oshirish kursigacha bo‘lgan davrda o‘z ustida mustaqil ishlashi natijalarini baholash va uning kasbiy malaka darajasini aniqlashga xizmat qiladi, shuningdek, pedagog va mutaxassislarni malaka toifalariga attestatsiyadan o‘tkazish jarayonida hisobga olinadi.

<br/>
27. Musiqa sohasi pedagog va mutaxassislarining malakasini oshirish quyidagi turlarda amalga oshiriladi:

asosiy ishdan ajralgan holda;

asosiy ishdan qisman ajralgan holda (uyg‘unlashtirilgan uslub);

asosiy ishdan ajralmagan holda (masofaviy ta’lim).

<br/>
28. Asosiy ishdan ajralgan holda va asosiy ishdan qisman ajralgan holda (uyg‘unlashtirilgan uslubda) malaka oshirish Konservatoriya va Markaz bazasida o‘tkaziladi.

<br/>
29. Asosiy ishdan qisman ajralgan holda (uyg‘unlashtirilgan uslubda) malaka oshirish kursi umumiy davomiyligining 50 yoki 25 foizi — Markazda auditoriya mashg‘ulotlariga ajratiladi. Kursning qolgan qismi musiqaga ixtisoslashtirilgan madaniyat va san’at maktablari (maktab-internatlar), o‘rta maxsus va maktabdan tashqari ta’lim muassasalari, xususan, bolalar musiqa va san’at maktablari hamda O‘zbekiston Respublikasi Madaniyat vazirligining “O‘zbek milliy maqom san’ati markazi”, ansambllar, orkestrlar bazasida yakka tartibdagi topshiriqlarni bajargan holda amaliy mashg‘ulotlar o‘tkazilishini nazarda tutadi. Amaliy mashg‘ulotlarni asosiy ish joyida o‘tkazishga yo‘l qo‘yiladi. Amaliy mashg‘ulotlar har bir o‘zlashtirilgan moduli bo‘yicha test sinovlari, referat topshirish, amaliyot bo‘yicha hisobot va shu kabi shakllardagi nazorat turlarini nazarda tutadi.

<br/>
30. Asosiy ishdan ajralmagan holdagi malaka oshirish turi o‘qitishning masofaviy ta’lim shaklida amalga oshiriladi.

<br/>
31. Quyidagilar qayta tayyorlashning asosiy turlari hisoblanadi:

pedagogik qayta tayyorlash;

kasbiy qayta tayyorlash (ixtisoslashuv).

<br/>
32. Pedagogik qayta tayyorlash — oliy ma’lumotli nopedagog mutaxassislarning bazaviy kasbiy ma’lumotini ta’limning tegishli turi malaka talablari bilan belgilanadigan o‘quv-tarbiya jarayonining talab etiladigan sifatini ta’minlaydigan darajada pedagogik faoliyatni yuritish uchun zarur va yetarli bo‘lgan pedagogik tayyorgarlik talablariga muvofiqlashtirish maqsadida mutaxassislarni qayta tayyorlashdir.

<br/>
33. Kasbiy qayta tayyorlash (ixtisoslashuv) — oliy pedagogik ma’lumotli mutaxassislar tomonidan ta’limning tegishli turi malaka talablari bilan belgilanadigan o‘qitishning talab etiladigan sifatini ta’minlaydigan darajada o‘quv fani yoki kurs bo‘yicha kasbiy faoliyatni yuritish uchun zarur va yetarli hajmda yangi kasbiy bilimlar, malaka va ko‘nikmalarni o‘zlashtirishni nazarda tutadi.

Musiqa sohasi pedagog va mutaxassislarini kasbiy qayta tayyorlash, o‘quv rejalariga yangi o‘quv modullari yoki kurslar joriy etilishi, xodimlarning buyurtmachilari yoki mehnat bozorining talablari bilan belgilanadigan ayrim xodimlarning qayta ixtisoslashuvi yoki yangi mutaxassislikka ega bo‘lishi munosabati bilan Markaz tashabbusiga ko‘ra shartnoma asosida tashkil etiladi.

<br/>
34. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash asosiy ishdan ajralgan va ajralmagan holda amalga oshiriladi.

<br/>
35. Ta’lim dasturlarining mazmuni va o‘qitishning davomiyligi malaka talablarida ko‘rsatilgan tartibda belgilanadi. Qayta tayyorlashdan muvaffaqiyatli o‘tgan musiqa sohasi pedagog va mutaxassislariga belgilangan namunadagi diplom beriladi.

<br/>
36. Qayta tayyorlashga ikkinchi oliy ta’limni olish sifatida qaralmaydi. Qayta tayyorlash natijasida beriladigan hujjat (diplom) faqat muayyan lavozimda faoliyat ko‘rsatish yoki muayyan fanlar bo‘yicha o‘quv mashg‘ulotlari olib borish huquqini beradi.

<br/>
37. Markaz qayta tayyorlash kurslari faoliyatini buyurtmachilarning buyurtmanomalari, malaka talablari, shuningdek, ta’limni boshqarish bo‘yicha vakolatli davlat organi talablari asosida ishlab chiqilgan dasturlar bo‘yicha amalga oshiradi.

<br/>
38. Qayta tayyorlash va malaka oshirish kurslarida o‘quv mashg‘ulotlarining quyidagi asosiy turlari qo‘llaniladi: ma’ruza; amaliy va yakka tartibdagi mashg‘ulot; interaktiv seminarlar; trening; ko‘chma mashg‘ulot; tajriba almashish; mustaqil o‘qish; laboratoriya ishi; bitiruv malakaviy ishini (kursni tugatish ishini) himoya qilish.

Ayrim o‘quv mashg‘ulotlari Konservatoriyaning o‘quv va moddiy-texnik bazasida tashkil etiladi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">6-bob. Qayta tayyorlash va malaka oshirishning davomiyligi, davriyligi va o‘quv yuklamasining hajmi</p>
<p className="text-left mt-5">39. Musiqa sohasi pedagog va mutaxassislarining malakasini oshirishning davomiyligi uni tashkil etish shakllariga hamda pedagogning kasbiy malaka darajasini va individual kasbiy ehtiyojini hisobga olgan holda buyurtmachi tomonidan belgilanadigan talablarga bog‘liq holda aniqlanadi.

Musiqa sohasi pedagog va mutaxassislari 5 yilda kamida bir marta, rahbar xodimlar esa — 3 yilda kamida bir marta malaka oshirishlari shart.
<br/>
40. Musiqa sohasi pedagog va mutaxassislarining malakasini oshirish dasturlarini o‘zlashtirish muddati o‘quv rejasiga kiritilgan fanlar soni hamda ularning yuklamalari hajmidan kelib chiqib belgilanadi va u 4 haftadan (144 soatdan) kam bo‘lmasligi shart (qisqa muddatli malaka oshirish kurslari bundan mustasno). Malaka oshirishning to‘g‘ridan to‘g‘ri shakllari uchun auditoriya mashg‘ulotlarining va mustaqil ishlarning eng yuqori hajmi haftasiga 36 soat etib belgilanadi.
<br/>

41. Musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash dasturlarini o‘zlashtirish muddati o‘quv rejasiga kiritilgan fanlar soni hamda ularning yuklamalari hajmidan kelib chiqib belgilanadi va u 16 haftadan (576 soatdan) kam bo‘lmasligi shart. Auditoriya mashg‘ulotlari va mustaqil ishlarning haftalik yuklamasining eng yuqori hajmi haftasiga 36 soat etib belgilanadi.

Markazda oliy ma’lumotga ega bo‘lmagan mutaxassislar uchun o‘qish muddati 6 oydan (720 soatdan) kam bo‘lmagan maqom san’ati bo‘yicha qayta tayyorlash kurslari tashkil etilishi mumkin.
<br/>

42. Auditoriya mashg‘ulotlarining barcha turlari 80 daqiqa davom etadi, o‘quv mashg‘ulotlari oralig‘idagi tanaffus kamida 10 daqiqani tashkil etadi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">7-bob. Qayta tayyorlash va malaka oshirish kurslarini tashkil etish va o‘tkazish</p>
<p className="text-left mt-5">43. Malaka oshirish kurslari Vazirlik tomonidan tasdiqlangan buyurtmanoma asosida hamda buyurtmachilar bilan tuzilgan shartnomalar asosida Markazda tashkil etiladi.
<br/>
44. Markazga taqdim etiladigan buyurtmanomada xodimning familiyasi, ismi va otasining ismi, qachon va qaysi ta’lim muassasasini bitirganligi, diplom bo‘yicha mutaxassisligi, pedagogik staji, ish joyi, lavozimi, oxirgi marta malaka oshirgan vaqti va sertifikat raqami, malaka oshirish yo‘nalishi va malaka oshirishga keladigan vaqti (oyi) ko‘rsatiladi.
<br/>

45. Malaka oshirish kurslaridan o‘tish jadvali har yili 15-dekabrga qadar Vazirlik tomonidan tasdiqlanadi hamda buyurtmachilarga yetkaziladi.
<br/>

46. Buyurtmachilar malaka oshirish kurslaridan o‘tish jadvaliga asosan tegishli musiqa sohasi pedagog va mutaxassislarining Markazga o‘z vaqtida o‘qishga yetib borishlarini ta’minlaydilar.
<br/>

47. Joriy yilda buyurtmaga kiritilmagan musiqa sohasi pedagog va mutaxassislari Markaz bilan tuzilgan shartnoma asosida malaka oshirish kurslaridan o‘tishlari mumkin.
<br/>

48. Shartnoma asosidagi musiqa sohasi pedagog va mutaxassislarini qayta tayyorlash va ularning malakasini oshirish kurslari buyurtmachi talabi va mehnat bozorining ehtiyojlaridan kelib chiqqan holda Markazda tashkil etiladi.

Markaz buyurtmachi tomonidan taqdim etilgan hujjatlarni o‘rganib chiqib, qayta tayyorlash va malaka oshirish kurslarini tashkil etish uchun Vazirlikka buyurtmanoma bilan murojaat qiladi.
<br/>

49. Shartnoma asosida qayta tayyorlash kurslarini tashkil etish uchun quyidagi hujjatlar talab qilinadi:

qayta tayyorlash kurslarida o‘qishi rejalashtirilayotgan tinglovchilar (familiyasi, ismi va otasining ismi, qachon va qaysi ta’lim muassasasini bitirganligi, diplom bo‘yicha mutaxassisligi, pedagogik staji) haqida ma’lumot;

qayta tayyorlash kurslarini o‘tkazish jadvali;

qayta tayyorlash kurslari uchun uslubiy ta’minotning (o‘quv-mavzu rejasi, dasturlar, majmualar) mavjudligi haqida ma’lumot;

qayta tayyorlash kurslarini o‘tkazish uchun yetarli bo‘lgan ilmiy-pedagogik salohiyatning (ma’ruzachi va amaliy darslarni olib boruvchi professor-o‘qituvchilarning familiyasi, ismi va otasining ismi, ilmiy darajasi va ilmiy unvoni, asosiy ish joyi) mavjudligi haqida ma’lumot;

qayta tayyorlash kurslarini o‘tkazish uchun zarur bo‘lgan moddiy-texnik bazaning (auditoriya fondi, kompyuter xonalari, fan xonalari, kutubxona va h.k.) mavjudligi haqida ma’lumot.
<br/>

50. Markazda qayta tayyorlash kurslari buyurtmachi tomonidan taklif etiladigan yo‘nalishlardan kelib chiqqan holda tashkil etiladi.
<br/>

51. Qayta tayyorlash va malaka oshirish kurslariga tinglovchilarni qabul qilish Markaz direktori buyrug‘i bilan rasmiylashtiriladi.

Qayta tayyorlash va malaka oshirish kurslariga tinglovchilarni qabul qilish to‘g‘risidagi buyruq kurslar boshlanishi sanasidan boshlab 3 kun mobaynida rasmiylashtiriladi.

<br/>
52. Qayta tayyorlash va malaka oshirish kurslari boshlangandan keyin 3 kun mobaynida mashg‘ulotlarga kelmagan tinglovchilar, kelmaslikning sabablaridan qat’i nazar, kurslarga qo‘yilmaydi.

<br/>
53. Musiqa sohasi pedagog va mutaxassislari malaka oshirish kurslariga uzrli sabablarga ko‘ra o‘z vaqtida kelmagan bo‘lsa, ularga o‘qishning tegishli yo‘nalishi bo‘yicha navbatdagi malaka oshirish kurslarida o‘qishga ruxsat beriladi.

<br/>
54. Markaz qayta tayyorlash va malaka oshirish kurslariga tinglovchilarning o‘z vaqtida kelmaganligi haqida tegishli buyurtmachiga xabar beradi.

<br/>
55. Qayta tayyorlash va malaka oshirish kurslarida o‘quv jarayoni tegishli yo‘nalishlar bo‘yicha tasdiqlangan namunaviy o‘quv rejasi va dasturlariga muvofiq ishlab chiqilgan ishchi o‘quv rejasi va dasturlari asosida amalga oshiriladi hamda mashg‘ulotlar jadvali bo‘yicha tartibga solinadi.

Namunaviy o‘quv rejasi va dasturlari fan, texnika, texnologiyalar va ishlab chiqarishni rivojlantirishning ustuvor yo‘nalishlari asosida har yili takomillashtiriladi.

<br/>
56. Qayta tayyorlash va malaka oshirish kurslarining o‘quv jarayoniga jalb etilgan tinglovchilar akademik guruhlarga bo‘linadi. Bunda, akademik guruhlar kamida 25 kishini tashkil etadi. Akademik guruhlarni shakllantirishda qayta tayyorlash va malaka oshirish kursining yo‘nalishi, o‘quv rejasi va dasturlari, pedagoglarning bazaviy ma’lumoti va egallab turgan lavozimlari, shuningdek, buyurtmachining talablari hisobga olinadi.

Malaka oshirish kurslarida tinglovchilar kontingenti yetarli bo‘lmagan yo‘nalishlarda, istisno tariqasida, Markaz direktori buyrug‘i bilan malaka oshirish masofaviy ta’lim shaklida amalga oshirilishi mumkin.

<br/>
57. Tinglovchilarning o‘zlashtirishini baholash tizimi Vazirlik tomonidan belgilangan tartibga muvofiq amalga oshiriladi.

<br/>
58. Qayta tayyorlash va malaka oshirish kurslarida mashg‘ulotlar o‘tkazish uchun Konservatoriyaning yetakchi pedagog xodimlari, ilmiy-tadqiqot muassasalari va tashkilotlarining yetakchi mutaxassislari, doktorlik dissertatsiyalarini himoya qilish bo‘yicha ilmiy kengash a’zolari, shuningdek, xorijiy mutaxassislar jalb etiladilar.

Qayta tayyorlash va malaka oshirish kurslarini o‘tkazish uchun jalb etiladigan professor-o‘qituvchilar mehnatiga haq to‘lash qonunchilikda belgilangan tartibda amalga oshiriladi.

<br/>
59. Qayta tayyorlash va malaka oshirish kurslarini tashkil qilish, ularni talab darajasida o‘tkazish, ta’lim jarayoni samaradorligini ta’minlash hamda tinglovchilarning yashashi uchun sharoit yaratish (Markazda tinglovchilar turar joyi mavjud bo‘lsa) Markaz direktori zimmasiga yuklanadi.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">8-bob. Malaka oshirishning masofaviy shaklini tashkil etish va o‘tkazish</p>
<p className="text-left mt-5">60. Malaka oshirishning masofaviy shakli (keyingi o‘rinlarda masofaviy ta’lim shakli deb ataladi) Vazirlik bilan kelishgan holda, tegishli o‘quv rejasi va o‘quv dasturlari asosida, maxsus virtual kurslar faoliyat ko‘rsatadigan, axborot-kommunikatsiya vositalari yordamida axborotlarni uzatish va qabul qilish uchun zarur baza bilan jihozlangan hamda tegishli moddiy-texnik, o‘quv-metodik bazaga va xodimlar salohiyatiga ega bo‘lgan Markaz tomonidan tashkil etiladi.
<br/>
61. Masofaviy ta’lim shaklidagi malaka oshirish kursining davomiyligi Markazda o‘qishning tegishli kursi akademik soatlarida belgilanadi, bunda kalendar muddatlar akademik muddatlardan ortiq bo‘lishi mumkin.
<br/>
62. Masofaviy ta’lim shakli bo‘yicha kurslarga yuqori malakali, shuningdek, axborot-kommunikatsiya texnologiyalarini zarur darajada qo‘llash ko‘nikmalariga ega bo‘lgan pedagoglar qabul qilinadi.
<br/>
63. Masofaviy ta’lim shakli bo‘yicha o‘qitish jarayonida tinglovchilar faoliyati, ta’lim jarayonini muvofiqlashtirish va yo‘naltirish, Konservatoriya professor-o‘qituvchilari tarkibidan Konservatoriya rektori bilan kelishilgan holda, Markaz direktorining buyrug‘i bilan biriktiriladigan tyutor (pedagog o‘qituvchi-konsultant) tomonidan amalga oshiriladi.

Tinglovchilar bilan doimiy aloqa bog‘lash, tinglovchilarga zarur metodik yordam berish, yakka tartibdagi mashg‘ulotni bajarish yuzasidan nazoratni amalga oshirish va tinglovchilar bilimlarini baholash tyutorning vazifalariga kiradi. Tyutor yakka tartibdagi topshiriqning tinglovchi tomonidan bajarilishi xolisona baholanishi uchun javob beradi.

Tyutor bilan aloqa elektron pochta, telefon va boshqa elektron aloqa vositalari yordamida amalga oshiriladi. Shuningdek, tyutor bilan aloqa kontakt-sessiyalar (bevosita yuzma-yuz muloqot) tarzida (kursning o‘quv rejasida belgilangan muddatlarda) ham amalga oshirilishi mumkin.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">10-bob. Qayta tayyorlash va malaka oshirish kurslari tinglovchilarining bitiruv malakaviy (kursni tugatish) ishi himoyasi</p>
<p className="text-left mt-5">69. Qayta tayyorlash va malaka oshirish kurslari tinglovchilari o‘qishni tugatgandan keyin, yakuniy attestatsiya komissiyalari tomonidan o‘tkaziladigan bitiruv malakaviy (kursni tugatish) ishini (keyingi o‘rinlarda bitiruv malakaviy ishi deb ataladi) himoya qilishdan o‘tishlari kerak.

Yakuniy attestatsiya komissiyalari Markaz direktorining buyrug‘i asosida Konservatoriya rektori bilan kelishilgan holda tashkil etiladi.
<br/>
70. Qayta tayyorlash va malaka oshirish kurslari tinglovchilariga yakuniy test sinovlari ijobiy natijalari asosida bitiruv malakaviy ishini himoya qilishiga ruxsat beriladi.
<br/>

71. Qayta tayyorlash va malaka oshirish bo‘yicha ta’lim dasturlari talablarini muvaffaqiyatli bajargan tinglovchilarga tegishli ravishda davlat namunasidagi quyidagi hujjatlar beriladi:

malaka oshirish haqida davlat namunasidagi sertifikat — kamida 4 hafta (144 soat) hajmidagi ta’lim dasturlarini o‘tagan tinglovchilar uchun;

qayta tayyorlash haqida davlat namunasidagi diplom — kamida 16 hafta (576 soat) hajmidagi ta’lim dasturlarini o‘tagan tinglovchilar uchun.

Yakuniy nazorat natijasida o‘qitish dasturini o‘zlashtirish yuzasidan qoniqarsiz baho olgan tinglovchilarga o‘quv kursini tamomlaganlik to‘g‘risidagi ma’lumotnoma beriladi.

Qayta tayyorlash haqida davlat namunasidagi diplom va malaka oshirish haqida davlat namunasidagi sertifikat belgilangan tartibda rasmiylashtiriladi.
<br/>

72. Musiqa sohasi pedagog va mutaxassislarining malaka toifalarini olishi (o‘zgartirishi) va egallab turgan lavozimlariga muvofiqligini attestatsiyadan o‘tkazishda ular qayta tayyorlash yoki malaka oshirish kurslaridan o‘tganligi to‘g‘risida hujjat (diplom, sertifikat)ning mavjudligi talab etiladi.
<br/>

73. Shartnoma asosida qayta tayyorlash va malaka oshirish kurslari uchun xarajatlar smetasi Markaz tomonidan tuziladi va belgilangan tartibda Vazirlik tomonidan tasdiqlanadi.

Xarajatlar smetasida kursning o‘quv rejasi va dasturida nazarda tutilgan barcha dars mashg‘ulotlari uchun to‘lanadigan soatbay haq, Markazning moddiy-texnik ta’minoti, kursni tashkil etish va o‘tkazishga jalb etilgan (rahbar, pedagog va texnik) xodimlarga to‘lanadigan ish haqi, ularni rag‘batlantirish, shuningdek, to‘lanadigan soliqlar uchun mablag‘lar nazarda tutiladi.

Shartnoma asosida tashkil etiladigan kurslarda o‘qish uchun tinglovchi tomonidan to‘lanadigan mablag‘ mazkur kurslarni o‘tkazish uchun sarflanadigan xarajatlar hajmidan kelib chiqqan holda (xarajatlar smetasidagi jami xarajatlarni tinglovchilar soniga bo‘lish orqali) hisoblab chiqiladi.

Qayta tayyorlash kurslarida o‘qish uchun Markaz bilan buyurtmachi o‘rtasida belgilangan tartibda to‘lov kontrakti (shartnoma) rasmiylashtiriladi, qonun hujjatlarida belgilangan holatlar bundan mustasno.
</p>
</div>
<div className="text-center mb-6">

<p className="text-sm sm:text-base md:text-lg">11-bob. Yakunlovchi qoida</p>
<p className="text-left mt-5">74. Ushbu Nizom talablarining buzilishida aybdor bo‘lgan shaxslar qonun hujjatlarida belgilangan tartibda javob beradilar.
</p>
</div>
      </main>
      <Footer />
    </div>
  );
};

export default Konservatoriya;