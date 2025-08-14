import { useState } from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Bolalar_musiqa = () => {
  const [setActiveTab] = useState(1);



  return (
    <div className="flex flex-col min-h-screen bg-white font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 flex-1 flex flex-col font-['Montserrat', 'sans-serif']">
        <div className="text-center mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 font-['Montserrat', 'sans-serif'] pt-24">O'zbekiston Respublikasi Prezidenti farmoni</h1>
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Bolalar musiqa va san'at maktablarining moddiy-texnik bazasini mustahkamlash va ularning faoliyatini yanada yaxshilash bo'yicha 2009—2014 yillarga mo'ljallangan davlat dasturi to'g'risida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">Unib-o‘sib kelayotgan yosh avlodning iste’dodini har tomonlama kamol toptirish va madaniy saviyasini yuksaltirish, yoshlarimizning milliy va jahon musiqalari, tasviriy san’atining yuksak namunalaridan keng bahramand bo‘lishi uchun zarur sharoitlar yaratish, boshlang‘ich musiqiy ta’lim tizimini tubdan takomillashtirish, bolalar musiqa va san’at maktablarini rivojlantirish hamda zamonaviy moddiy-texnik bazasini shakllantirish, ularni musiqiy madaniyat va san’at sohasidagi yuqori malakali pedagog kadrlar va mutaxassislar bilan ta’minlash maqsadida:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi zimmasiga quyidagi vazifalar yuklansin:

boshlang‘ich musiqiy ta’limni tashkil etish va uning rivojlanishini ta’minlash, ushbu yo‘nalish bo‘yicha mutaxassislar hamda pedagoglarning mahorati va malaka darajasini oshirish;

bolalar musiqa va san’at maktablarida ta’lim tizimini takomillashtirish, o‘sib kelayotgan yosh avlodning madaniy saviyasini yuksaltirish, ular orasida iste’dodlarni har tomonlama rivojlantirish, yoshlarning milliy va jahon san’atining yuksak namunalaridan keng bahramand bo‘lishi uchun zarur shart-sharoitlar yaratish;

R. Glier nomidagi va V. Uspenskiy nomidagi respublika ixtisoslashtirilgan musiqa akademik litseylarining moddiy-texnik hamda umumta’lim o‘quv bazasini rivojlantirish va mustahkamlashni, ularning samarali faoliyat ko‘rsatishi uchun zarur sharoitlar yaratilishini ta’minlash.

R. Glier nomidagi va V. Uspenskiy nomidagi respublika ixtisoslashtirilgan musiqa akademik litseylarining kasbiy yo‘nalishiga oid faoliyatini o‘quv-metodik jihatdan ta’minlash vazifasi O‘zbekiston davlat konservatoriyasi zimmasiga yuklanishi belgilab qo‘yilsin.
<br/>

2. O‘zbekiston Respublikasi Prezidentining 2008-yil 7-yanvardagi F-2908-sonli farmoyishiga binoan tuzilgan Respublika komissiyasi tomonidan ishlab chiqilgan Bolalar musiqa va san’at maktablarining moddiy-texnik bazasini mustahkamlash va ularning faoliyatini yanada yaxshilash bo‘yicha 2009—2014-yillarga mo‘ljallangan, quyidagi masalalarni o‘z ichiga olgan Davlat dasturi (keyingi o‘rinlarda Davlat dasturi deb yuritiladi) tasdiqlansin:

2009—2014-yillarda bolalar musiqa va san’at maktablarining moddiy-texnik bazasini mustahkamlash, ularning faoliyatini yanada yaxshilash tadbirlari 1-ilovaga muvofiq;

2009—2014-yillarda yangitdan quriladigan hamda kapital rekonstruksiya qilinadigan bolalar musiqa va san’at maktablarining asosiy parametrlari 2 va 3-ilovalarga* muvofiq.

O‘zbekiston Respublikasi “Davarxitektqurilish” qo‘mitasi va Xalq ta’limi vazirligi tomonidan bolalar musiqa ta’limi sohasidagi mutaxassis va pedagoglarni jalb etgan holda, bolalar musiqa va san’at maktablarining 1-tipi uchun 200 o‘quvchiga va 2-tipi uchun 150 o‘quvchiga mo‘ljallangan ikkita namunaviy loyiha ishlab chiqilgani ma’lumot uchun qabul qilinsin.

Bolalar musiqa va san’at maktablarini kapital rekonstruksiya qilish O‘zbekiston Respublikasi “Davarxitektqurilish” qo‘mitasi va Xalq ta’limi vazirligi tomonidan tasdiqlangan 1-va 2-tipdagi namunaviy loyihalarga qat’iy muvofiq ravishda amalga oshirilishi lozimligi belgilab qo‘yilsin.
<br/>

3. O‘zbekiston Respublikasi Iqtisodiyot vazirligi, Moliya vazirligi, Xalq ta’limi vazirligi, Xalq ta’limi vazirligi huzuridagi Bolalar sportini rivojlantirish jamg‘armasi, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi, viloyatlar va Toshkent shahar hokimliklari:

ushbu qarorga binoan tasdiqlangan Davlat dasturida nazarda tutilgan chora-tadbirlar belgilangan muddatlarda samarali va sifatli bajarilishini ta’minlasin;

har yili Investitsiya dasturi loyihasini va qurilishlarning manzilli ro‘yxatlarini shakllantirishida bolalar musiqa va san’at maktablarining aniq soni va ro‘yxatini ko‘rsatgan holda, ularning yangilarini qurish va kapital rekonstruksiya qilish, zarur asboblar, uskunalar va inventarlar bilan jihozlash bo‘yicha ishlarni moliyalashtirish hajmlarini belgilasin;

2009-2010-yillarga mo‘ljallangan Investitsiya dasturi loyihasi va Davlat budjeti parametrlarini shakllantirishda R. Glier nomidagi va V. Uspenskiy nomidagi akademik litseylarni kengaytirish va rekonstruksiya qilish uchun zarur budjet mablag‘lari, shuningdek, ularning moddiy-texnik bazasini mustahkamlash uchun mablag‘larni nazarda tutsin.
<br/>

4. Bolalar musiqa va san’at maktablarini yangitdan qurish uchun maydonlarni tanlashda tasdiqlangan normativ va parametrlarga muvofiq ularning, qoida tariqasida, albatta respublika tuman va shaharlarining turar-joy massivlarida joylashtirilishi hisobga olinsin.
<br/>

5. Quyidagilar belgilansin:

bolalar musiqa va san’at maktablarini qurish va kapital rekonstruksiya qilish bo‘yicha buyurtmachi vazifasi O‘zbekiston Respublikasi Xalq ta’limi vazirligi huzuridagi Bolalar sportini rivojlantirish jamg‘armasi va uning joylardagi tuzilmalari zimmasiga yuklatiladi;

mahalliy shart-sharoitlarni hisobga olgan holda tasdiqlangan namunaviy loyihalar va loyihaga tegishli qarorlardan har qanday chetga chiqishlarga faqat bosh loyiha instituti bilan kelishilgan va O‘zbekiston Respublikasi “Davarxitektqurilish” qo‘mitasi tomonidan tasdiqlangan taqdirdagina yo‘l qo‘yiladi;

yangitdan qurilgan hamda kapital rekonstruksiya qilingan bolalar musiqa va san’at maktablari obyektlarini foydalanishga qabul qilish 4-ilovaga muvofiq tarkibdagi Davlat komissiyasi tomonidan tasdiqlangan sifat standartlari va namunaviy loyihalarga qat’iy muvofiq ravishda amalga oshiriladi;

bolalar musiqa va san’at maktablarining samarali faoliyat ko‘rsatishi, ularning har tomonlama to‘liq ishlashini ta’minlash hamda malakali pedagog kadrlar bilan to‘ldirish mas’uliyati O‘zbekiston Respublikasi Madaniyat vazirligi zimmasiga yuklatiladi.
<br/>

6. Quyidagilar:

moliyalashtirish manbalaridan qat’i nazar, namunaviy loyihalarga asoslanmagan hamda tasdiqlangan qurilish normalari va standartlariga mos kelmaydigan yangi bolalar musiqa va san’at maktablari qurish va ularni kapital rekonstruksiya qilish;

yangitdan quriladigan va kapital rekonstruksiya qilinadigan bolalar musiqa va san’at maktablarida tiklash ishlarini amalga oshirishda 2 va 3-ilovalarda ko‘rsatilgan parametrlarga qattiq rioya qilinsin va ularni bir toifadan boshqa toifaga o‘tkazish qat’iyan taqiqlansin.
<br/>

7. O‘zbekiston Respublikasi “Davarxitektqurilish” qo‘mitasi Xalq ta’limi vazirligi, Xalq ta’limi vazirligi huzuridagi Bolalar sportini rivojlantirish jamg‘armasi bilan birgalikda:

bolalar musiqa va san’at maktablarini qurish va kapital rekonstruksiya qilish uchun tasdiqlangan namunaviy loyihalar bo‘yicha ishlarni batamom tugatib topshirish sharti bilan tanlov pudrat tender savdolarini o‘tkazish o‘z vaqtida va aniq tashkil qilinishini ta’minlasin;

buyurtmachi va pudratchi o‘rtasidagi shartnoma majburiyatlari bajarilishi ustidan, jumladan, tasdiqlangan namunaviy loyihalarga, qurilish normalari va qoidalariga muvofiq bajarilgan loyiha va qurilish ishlarining sifatiga qat’iy rioya etilishi ustidan qattiq monitoring o‘rnatsin.

<br/>
8. O‘zbekiston Respublikasi Xalq ta’limi vazirligi huzuridagi Bolalar sportini rivojlantirish jamg‘armasi, “Davarxitektqurilish” qo‘mitasi rahbarlari, Qoraqalpog‘iston Respublikasi Vazirlar Kengashi raisi, viloyatlar va Toshkent shahar hokimlari zimmasiga:

bolalar musiqa va san’at maktablari obyektlarini qurish hamda kapital rekonstruksiya qilish manzilli dasturiga kiritilgan obyektlar bo‘yicha tanlov pudrat tender savdolari o‘z vaqtida o‘tkazilishi;

bolalar musiqa va san’at maktablari obyektlaridagi qurilish-montaj ishlarini amalga oshirishda namunaviy loyihalarga, shuningdek, tasdiqlangan qurilish norma va qoidalariga qat’iy rioya etilishi bo‘yicha shaxsiy mas’uliyat yuklansin.

<br/>
9. O‘zbekiston Respublikasi Xalq ta’limi vazirligi Tashqi iqtisodiy aloqalar, investitsiyalar va savdo vazirligi, Iqtisodiyot vazirligi, Moliya vazirligi bilan birgalikda tasdiqlangan Davlat dasturiga kiritilgan bolalar musiqa va san’at maktablarini rivojlantirish va moddiy-texnik bazasini yaxshilash, shu jumladan, ularni jihozlash uchun imtiyozli shartlar asosidagi xorijiy kreditlar va grantlarni jalb etish borasidagi ishlarni faollashtirsin.

<br/>
10. Vazirlar Mahkamasi tomonidan tasdiqlanadigan ro‘yxat bo‘yicha Davlat dasturi doirasida bolalar musiqa va san’at maktablarining moddiy-texnika bazasini mustahkamlash uchun olib kelinadigan musiqa asboblari va maxsus uskunalar 2015-yil 1-yanvargacha bo‘lgan muddatda bojxona to‘lovlaridan ozod qilinsin (bojxona rasmiylashtiruvi yig‘imlari bundan mustasno).

<br/>
11. O‘zbekiston Respublikasi Prezidentining 2008-yil 7-yanvardagi F-2908-sonli farmoyishi asosida tuzilgan Respublika komissiyasiga O‘zbekiston Respublikasi Iqtisodiyot vazirligi, Xalq ta’limi vazirligi, Moliya vazirligining taqdimnomasiga binoan yangitdan quriladigan hamda kapital rekonstruksiya qilinadigan bolalar musiqa va san’at maktablarining har yili tasdiqlanadigan manzilli ro‘yxatiga tasdiqlangan umumiy parametrlar doirasida o‘zgartirishlar kiritish huquqi berilsin.

<br/>
13. Respublika komissiyasi (Sh.M. Mirziyoyev):

bolalar musiqa va san’at maktablarining moddiy-texnik bazasini mustahkamlash va ularning faoliyatini yanada yaxshilash bo‘yicha 2009—2014-yillarga mo‘ljallangan Davlat dasturining amalga oshirilishi ustidan tizimli monitoring olib borsin;

har yili yarim yil va kalendar yili yakunlari bo‘yicha Vazirlar Mahkamasining majlislarida tasdiqlangan Davlat dasturini amalga oshirish natijalarini muhokama qilib borsin.

<br/>
14. O‘zbekiston Respublikasi Xalq ta’limi vazirligi boshqa manfaatdor vazirliklar va idoralar bilan birgalikda bir oy muddatda qonun hujjatlariga ushbu qarordan kelib chiqadigan o‘zgartish va qo‘shimchalar to‘g‘risida Vazirlar Mahkamasiga takliflar kiritsin.

<br/>
15. Mazkur qarorning ijrosini nazorat qilish O‘zbekiston Respublikasi Bosh vaziri Sh.M. Mirziyoyev zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2008-yil 8-iyul, 
<br />
PQ-910-son</p>
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

export default Bolalar_musiqa;