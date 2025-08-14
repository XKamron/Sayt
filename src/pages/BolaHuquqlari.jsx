import { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Bola_huquqlari = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">1-bob. Umumiy qoidalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi bola huquqlarining kafolatlari sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Bola huquqlarining kafolatlari to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola huquqlarining kafolatlari to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining bola huquqlarining kafolatlari to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>3-modda. Asosiy tushunchalar

Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

bola (bolalar) — o‘n sakkiz yoshga to‘lgunga (voyaga yetgunga) qadar bo‘lgan shaxs (shaxslar);

bolaning qonuniy vakillari — ota-onalar, farzandlikka oluvchilar, vasiylar, homiylar;

vasiylik va homiylik — ota-ona qaramog‘idan mahrum bo‘lgan bolalarni ularga ta’minot, tarbiya hamda ta’lim berish, shuningdek ularning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilish maqsadida joylashtirishning huquqiy shakli. Vasiylik o‘n to‘rt yoshga to‘lmagan, homiylik esa o‘n to‘rt yoshdan o‘n sakkiz yoshgacha bo‘lgan bolalarga nisbatan belgilanadi;

yetim bola — otasi ham, onasi ham vafot etgan yoki ular sud qaroriga binoan vafot etgan deb e’lon qilingan bola;

jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bola — nogironlikni belgilash uchun yetarli bo‘lmagan jismoniy, aqliy, sensor (sezgi) va (yoki) ruhiy nuqsonlari bo‘lgan bola;

ijtimoiy himoyaga muhtoj bolalar — yuzaga kelgan holatlar sababli og‘ir turmush sharoitida qolgan, davlat va jamiyat tomonidan alohida himoya qilishga hamda qo‘llab-quvvatlashga muhtoj bolalar, shu jumladan:

nogironligi bo‘lgan bolalar;

jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar;

yetim bolalar;

ota-ona qaramog‘idan mahrum bo‘lgan bolalar;

ixtisoslashtirilgan bolalar muassasalarida tarbiyalanayotgan bolalar;

muayyan yashash joyiga ega bo‘lmagan bolalar;

kam ta’minlangan oilalardagi bolalar;

jinoiy javobgarlikka tortilgan va jazoni ijro etish muassasalarida turgan bolalar;

zo‘ravonlik va ekspluatatsiya, qurolli mojarolar va tabiiy ofatlar natijasida jabrlangan bolalar;

nogironligi bo‘lgan bolalar (bola) — barqaror jismoniy, aqliy, sensor (sezgi) yoki ruhiy nuqsonlari mavjudligi oqibatida hayot faoliyati cheklanganligi munosabati bilan davlat va jamiyat tomonidan ijtimoiy yordam ko‘rsatilishiga hamda o‘z huquqlari va qonuniy manfaatlari himoya qilinishiga muhtoj bo‘lgan bolalar (bola);

ota-onaning o‘rnini bosuvchi shaxslar — qonunda belgilangan tartibda bolaga nisbatan ota-onalik huquqini amalga oshiruvchi va ota-onalik majburiyatlarini bajaruvchi, lekin bolaning ota-onasi bo‘lmagan shaxslar (farzandlikka oluvchilar, vasiylar va homiylar);

ota-ona qaramog‘idan mahrum bo‘lgan bola — ota-onalik huquqidan mahrum qilinganligi yoki cheklanganligi, bedarak yo‘qolgan yoki muomalaga layoqatsiz deb topilganligi yoxud muomalaga layoqati cheklanganligi, bolani tarbiyalashdan yoki uning huquq va manfaatlarini himoya qilishdan bo‘yin tovlaganligi, shu jumladan, uzrsiz sabablarga ko‘ra o‘z bolasini tug‘uruqxona yoki boshqa davolash muassasasidan, tarbiya, aholini ijtimoiy himoyalash muassasasi va shunga o‘xshash boshqa muassasalardan olishdan bosh tortganligi yoxud ota-ona qaramog‘i mavjud bo‘lmagan boshqa holatlar sababli ota-ona yoki yagona ota (ona) qaramog‘idan mahrum bo‘lgan bola.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Bola huquqlarini himoya qilish bo‘yicha davlat siyosati</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola huquqlarini himoya qilish bo‘yicha davlat siyosatining asosiy yo‘nalishlari quyidagilardan iborat:

bolaning huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlash;

bolaning hayoti va sog‘lig‘ini muhofaza qilish;

bolaning kamsitilishiga yo‘l qo‘ymaslik;

bolaning sha’ni va qadr-qimmatini himoya qilish;

bolalar huquqlari va imkoniyatlarining tengligini ta’minlash;

bola huquqlari kafolatlarining huquqiy asoslarini takomillashtirish;

bola huquqlarining kafolatlari to‘g‘risidagi qonunchilikka rioya etilishini ta’minlash;

bola huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlash hamda himoya qilish bo‘yicha davlat organlari va ularning mansabdor shaxslari faoliyatining ochiqligi hamda oshkoraligini ta’minlash;

bolalarning jismoniy, intellektual, ma’naviy va axloqiy kamol topishiga ko‘maklashish;

bola huquqlarini himoya qilish sohasida faoliyatni amalga oshiruvchi kadrlar tayyorlash, ularning malakasini oshirish va ularni qayta tayyorlash;

bolalarda vatanparvarlik, fuqarolik, bag‘rikenglik va tinchliksevarlik tuyg‘ularini tarbiyalash;

bolani O‘zbekiston xalqining tarixiy va milliy an’analari, ma’naviy qadriyatlari hamda jahon madaniyati yutuqlari bilan tanishtirish;

bolaning shaxsini, uning ilmiy, texnikaviy va badiiy ijodkorligini rivojlantirish;

bolalar tashabbuslarini qo‘llab-quvvatlash;

bolada huquqiy ong va huquqiy madaniyatni shakllantirish;

bola huquqlarini ta’minlash maqsadida davlat organlari va nodavlat notijorat tashkilotlari o‘rtasida hamkorlik qilish;

bola huquqlarini himoya qilish sohasida faoliyatni amalga oshiruvchi xalqaro tashkilotlar bilan hamkorlikni rivojlantirish;

bolalarning ijtimoiy ko‘nikmasiga, voyaga yetmaganlar o‘rtasida huquqbuzarliklarni kamaytirishga ko‘maklashish.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Davlat hokimiyati va boshqaruvi organlarining bola huquqlarini ta’minlash bo‘yicha vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat hokimiyati va boshqaruvi organlari o‘z vazifalari doirasida quyidagi vakolatlarni amalga oshiradi:

bola huquqlarini ta’minlash bo‘yicha yagona davlat siyosatini shakllantirish va amalga oshirish;

bola huquqlarini ta’minlash bo‘yicha ustuvor yo‘nalishlarni belgilash;

bola huquqlarining kafolatlari to‘g‘risidagi qonunchilikni ijro etish;

bola huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlash bo‘yicha davlat dasturlari hamda hududiy dasturlarni ishlab chiqish va ro‘yobga chiqarish;

bola huquqlarini ta’minlash bo‘yicha davlat organlari, bolalar muassasalari, tashkilotlar faoliyatini muvofiqlashtirish va nazorat qilish;

bola huquqlarini himoya qilish bo‘yicha davlat siyosatini ro‘yobga chiqarishga doir tadbirlarni belgilangan tartibda O‘zbekiston Respublikasining Davlat budjeti mablag‘lari va qonunchilikda taqiqlanmagan boshqa manbalar hisobidan moliyalashtirish;

davlatga qarashli bolalar muassasalarining moddiy-texnika bazasini mustahkamlash va nodavlat bolalar muassasalarini rivojlantirishga ko‘maklashish chora-tadbirlarini ko‘rish;

bola huquqlarini ta’minlash masalalari yuzasidan O‘zbekiston Respublikasining xalqaro majburiyatlari bajarilishini nazorat qilish hamda xalqaro tashkilotlarda O‘zbekiston Respublikasining manfaatlarini ifodalash;

axborot-ma’rifiy faoliyatni amalga oshirish;

ijtimoiy himoyaga muhtoj bolalarni qo‘llab-quvvatlash masalalarini hal etish.

Davlat hokimiyati va boshqaruvi organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.

Bola huquqlari, erkinliklari va qonuniy manfaatlari himoya qilinishini ta’minlash, davlat organlari va boshqa organlarning, tashkilotlarning bola huquqlarini himoya qilish bo‘yicha faoliyatini muvofiqlashtirish maqsadida qonunchilikda belgilangan tartibda bola huquqlari bo‘yicha vakolatli organ tashkil etilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Bola huquqlarini ta’minlashda fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlarining ishtiroki</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlari bolaga uning huquqlari, erkinliklari va qonuniy manfaatlarini ro‘yobga chiqarishda va himoya qilishda ko‘maklashadi, bolaga yoki uning qonuniy vakiliga huquqiy, uslubiy, axborotga oid va boshqa yordam ko‘rsatadi.

Fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlari:

bola huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlash bo‘yicha davlat dasturlari va hududiy dasturlarni ishlab chiqishda hamda ro‘yobga chiqarishda ishtirok etishi;

bola huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlashga doir vakolatlarni amalga oshirishda davlatdan va xalqaro tashkilotlardan uslubiy, tashkiliy hamda moliyaviy yordam olishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Bola huquqlarining asosiy kafolatlari', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">2-bob. Bola huquqlarining asosiy kafolatlari</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. Bola huquqlarining qonuniy kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Konstitutsiyasi, ushbu Qonun va boshqa qonunchilik hujjatlariga muvofiq har bir bolaga inson hamda fuqaro huquqlari va erkinliklari tegishli bo‘ladi hamda davlat tomonidan kafolatlanadi.

Nikohda va nikohsiz tug‘ilgan bolalar teng hamda har taraflama himoyadan foydalanadi.

Davlat bolaning barcha shakllardagi kamsitishlardan himoya qilinishini ta’minlash uchun zarur choralarni ko‘radi.

Bola huquqlari cheklanishi mumkin emas, qonunda belgilangan hollar bundan mustasno.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Bolaning yashash huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Yashash huquqi har bir bolaning uzviy huquqidir. Bola hayotiga suiqasd qilish eng og‘ir jinoyatdir.

Davlat sog‘lom bolaning tug‘ilishi va rivojlanishini ta’minlash uchun sharoit yaratadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Bolaning individuallikka va uni saqlab qolishga bo‘lgan huquqi kafolatlari

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola tug‘ilgan paytdan e’tiboran familiya, ism, ota ismi olish, millati va fuqaroligiga ega bo‘lish huquqiga, shuningdek ularni saqlab qolish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. Bolaning erkinlik va shaxsiy daxlsizlik huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola erkinlik, shaxsiy daxlsizlik, turar joyi daxlsizligi va xat-xabarlarini sir tutish huquqiga ega.

Har bir bola o‘z sha’ni va qadr-qimmatiga qilingan tajovuzlardan, shaxsiy hayotiga g‘ayriqonuniy aralashuvlardan himoyalanish huquqiga ega.

Bola qonunga asoslanmagan holda ushlab turilishi, hibsga olinishi, qamoqqa olinishi mumkin emas.

Davlat bolaning shaxsi, uy-joyi daxlsizligini, xat-xabarlari sir tutilishini ta’minlaydi hamda bolani ekspluatatsiya va zo‘ravonlikning barcha shakllaridan, shu jumladan jismoniy, ruhiy va jinsiy zo‘ravonlikdan, qiynoqlarga solishdan yoki shafqatsiz, qo‘pol yoxud inson qadr-qimmatini kamsituvchi boshqa shakldagi muomaladan, shahvoniy shilqimliklardan, huquqbuzarliklar va g‘ayriijtimoiy harakatlar sodir etishga jalb etilishidan himoya qilinishini amalga oshiradi.

Davlat:

bolaga nisbatan ekspluatatsiya va zo‘ravonlikning barcha shakllarining oldini olish, shuningdek ularning sodir etilishiga imkon bergan sabablar va shart-sharoitlarni aniqlash hamda bartaraf etish;

ekspluatatsiya va zo‘ravonlikka duchor bo‘lgan bolalarga zarur pedagogik, psixologik, tibbiy, yuridik yordam ko‘rsatish bo‘yicha choralar ko‘radi.

Qo‘llanilgan jazo chorasidan, sudlanganlik holati tugatilganligidan yoki olib tashlanganligidan hamda o‘ziga nisbatan amnistiya yoki afv etish akti qo‘llanilganligidan qat’i nazar, qasddan odam o‘ldirganlik, o‘n sakkiz yoshga to‘lmagan shaxsning nomusiga tekkanlik yoki unga nisbatan zo‘rlik ishlatib, jinsiy ehtiyojni g‘ayritabiiy usulda qondirganlik, o‘n sakkiz yoshga to‘lmagan shaxsni jinsiy aloqada bo‘lish yoki jinsiy ehtiyojni g‘ayritabiiy usulda qondirish bilan bog‘liq holda jinsiy aloqa qilishga majbur etganlik, o‘n olti yoshga to‘lmagan shaxs bilan jinsiy aloqa qilganlik yoki jinsiy ehtiyojni g‘ayritabiiy usulda qondirganlik yoxud unga nisbatan uyatsiz-buzuq harakatlar qilganlik, voyaga yetmagan shaxs tavsiflangan yoki tasvirlangan pornografik mahsulotni tarqatish, reklama qilish, namoyish qilish maqsadida O‘zbekiston Respublikasi hududiga olib kirganlik, xuddi shuningdek uni tayyorlaganlik, tarqatganlik, reklama qilganlik, namoyish etganlik yoxud voyaga yetmagan shaxsni pornografik xususiyatga ega harakatlarning ijrochisi sifatida jalb etganlik, voyaga yetmagan shaxsni jalb etgan holda qo‘shmachilik qilganlik, fohishaxonalar tashkil etganlik yoki saqlaganlik, terrorizm uchun ilgari hukm qilingan shaxslarning ta’lim, tarbiya, bolalar sog‘lomlashtirish, sport va ijodiy tashkilotlarida ishlashi hamda bolalar bilan bevosita ishlashni nazarda tutuvchi faoliyat turlari bilan shug‘ullanishi taqiqlanadi.

Ushbu moddaning oltinchi qismida ko‘rsatilgan shaxslarning reyestrini shakllantirish va yuritish, shuningdek undan axborot olish tartibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. Bolaning himoyaga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bolaga uning huquqlari, erkinliklari va qonuniy manfaatlarini sud orqali himoya qilish, davlat organlarining, fuqarolar o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlarining qonunga xilof qarorlari, ular mansabdor shaxslarining g‘ayriqonuniy harakatlari (harakatsizligi) ustidan sudga shikoyat qilish huquqi kafolatlanadi.

Bolaning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilish uning ota-onasi, ota-onasining o‘rnini bosuvchi shaxslar, qonunda nazarda tutilgan hollarda esa vasiylik va homiylik organi, prokuror, sud tomonidan amalga oshiriladi.

Voyaga yetguncha qonunga muvofiq to‘la muomalaga layoqatli deb e’tirof etilgan (emansipatsiya) bola o‘z huquqlarini, shu jumladan himoyaga bo‘lgan huquqini mustaqil amalga oshirishga hamda majburiyatlarini mustaqil bajarishga haqlidir.

Bola ota-ona va ota-onaning o‘rnini bosuvchi shaxslar tomonidan qilinadigan suiiste’molliklardan himoyalanish huquqiga ega.

Bolaning huquqlari, erkinliklari va qonuniy manfaatlari buzilganda, shu jumladan ota-ona (ulardan biri) yoki ota-onaning o‘rnini bosuvchi shaxslar bolaga ta’minot, tarbiya va ta’lim berish bo‘yicha majburiyatlarini bajarmaganda yoki lozim darajada bajarmaganda yoxud ota-onalik huquqlarini suiiste’mol qilganda bola o‘z huquqlari va qonuniy manfaatlari himoya qilinishini so‘rab vasiylik va homiylik organiga, shuningdek boshqa davlat organlariga mustaqil ravishda murojaat qilishga haqli. Bunday murojaatlarni bola to‘liq muomala layoqatiga ega bo‘lmaganligi sababli ko‘rib chiqmasdan qoldirishga yo‘l qo‘yilmaydi.

Bolaning hayoti yoki sog‘lig‘iga xavf tug‘ilganidan, uning huquqlari, erkinliklari va qonuniy manfaatlari buzilganligidan xabardor bo‘lgan shaxslar bu haqda bola haqiqatda turgan joydagi vasiylik va homiylik organiga ma’lum qilishlari shart. Shunday ma’lumotlar olingan taqdirda, vasiylik va homiylik organi bolaning huquqlari, erkinliklari hamda qonuniy manfaatlarini himoya qilish bo‘yicha zarur choralar ko‘rishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-1-modda. Jinoyat protsessining ishtirokchisi bo‘lgan bola huquqlarini himoya qilish kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat sudga qadar ish yuritishning va sud muhokamasining barcha bosqichlarida bolalarning qonunchilikda belgilangan barcha protsessual huquqlariga rioya etilishi hamda bu huquqlar kafolatlarining ta’minlanishi bo‘yicha choralar ko‘radi.

Bolaga har qanday ruhiy yoki jismoniy ta’sir o‘tkazish, uni ko‘rsatmalar berishga yoki aybini tan olishga majburlash taqiqlanadi.

Sudga qadar ish yuritish va sud muhokamasi jarayonida bolalarga nisbatan ular qonuniy vakillarining ishtirokisiz amalga oshiriladigan protsessual harakatlarni bajarish taqiqlanadi. Qonunchilikda nazarda tutilgan hollarda voyaga yetmagan shaxsga nisbatan protsessual harakatlar uning katta yoshdagi yaqin qarindoshi, pedagog yoki ushbu shaxsning boshqa qonuniy vakili ishtirokida amalga oshirilishi mumkin.

Voyaga yetmagan shaxsning jinoyatlari to‘g‘risidagi ishlar bo‘yicha sudga qadar ish yuritishning va sud muhokamasining barcha bosqichlarida himoyachining ishtirok etishi shart. Bolaning va uning qonuniy vakillarining himoyachidan voz kechishi haqiqiy emas deb hisoblanadi.

Qonunchilikda jinoyat protsessining ishtirokchilari bo‘lgan bolalar uchun boshqa kafolatlar ham nazarda tutilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. Bolalarni tarbiyalayotgan oilalarni davlat tomonidan qo‘llab-quvvatlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat bolalarni tarbiyalayotgan oilalarni qo‘llab-quvvatlashni kafolatlaydi, shuningdek qonunchilikda belgilangan tartibda ularga ijtimoiy yordam ko‘rsatilishini ta’minlaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. Bolaning oilaviy muhitga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola oilada yashash va tarbiyalanish, o‘z ota-onasini bilish, ular bilan birga yashash va ularning g‘amxo‘rligidan foydalanish huquqiga ega, uning manfaatlariga zid bo‘lgan hollar bundan mustasno.

Bolaning ota-onasi bo‘lmaganda, ular ota-onalik huquqidan mahrum qilinganda hamda bola ota-ona qaramog‘idan mahrum bo‘lgan boshqa hollarda uning oilada yashash hamda tarbiyalanish huquqi vasiylik va homiylik organi tomonidan ta’minlanadi.

Bola otasi, onasi, bobosi, buvisi, aka-ukalari, opa-singillari va boshqa qarindoshlari bilan ko‘rishish huquqiga ega. Ota-onasining nikohdan ajralishi, nikohning haqiqiy emas deb topilishi yoki ota va onaning boshqa-boshqa yashashi bolaning huquqlariga ta’sir qilmaydi.

Ota va ona turli davlatlarda yashagan taqdirda ham bola ular bilan ko‘rishish huquqiga ega. Ekstremal vaziyatlarga (ushlab turish, hibsga olish, qamoqqa olish, davolash muassasasida bo‘lish va boshqa hollarda) tushib qolgan bola o‘z ota-onasi va boshqa qarindoshlari bilan qonunchilikda belgilangan tartibda ko‘rishish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Bolaning g‘ayriqonuniy ko‘chirilishdan himoyalanish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola g‘ayriqonuniy ko‘chirilishdan va chet eldan qaytarilmaslikdan himoyalanish huquqiga ega.

Bolaning chet elga safarlari faqat ota va onaning yoki ota-onaning o‘rnini bosuvchi shaxslarning roziligi bilan qonunchilikka muvofiq amalga oshirilishi mumkin. Ushbu masala bo‘yicha ota va ona yoki ota-onaning o‘rnini bosuvchi shaxslar o‘rtasidagi har qanday kelishmovchilik sud tomonidan hal qilinadi.

Ota-ona yoki ota-onaning o‘rnini bosuvchi shaxslar bolaning yo‘qolganligi haqida tegishli organlarga darhol xabar berishlari shart.

Ota-ona yoki ota-onaning o‘rnini bosuvchi shaxslar hamrohligida bo‘lmagan bolalar ularning yoniga kafolatli qaytarilish huquqiga ega.

Bolani ota yoki ona yoxud ularning o‘rnini bosuvchi shaxs tomonidan chet davlat hududida nazoratsiz qoldirish, ya’ni ota-onaning, ular o‘rnini bosuvchi shaxsning bolaga ta’minot, tarbiya va ta’lim berish bo‘yicha o‘z majburiyatlarini bajarishdan bo‘yin tovlashi yoxud hamrohlik qiluvchi shaxsning o‘z zimmasiga yuklatilgan majburiyatlarni bajarmasligi yoki lozim darajada bajarmasligi, shu jumladan bolani o‘z ota-onasiga yoki yaqin qarindoshlariga yoxud O‘zbekiston Respublikasi hududida taqiqlanmagan va tegishli davlatning qonunchiligiga binoan zarur vakolatlarga ega bo‘lgan tashkilotga topshirmasdan qoldirish qonunchilikka muvofiq javobgarlikka sabab bo‘ladi.

O‘zbekiston Respublikasining diplomatik vakolatxonalari chet elda qonuniy vakillari hamrohligisiz turgan bolalarning — O‘zbekiston Respublikasi fuqarolarining hisobini yuritadi va ularning qaytarilishi bo‘yicha choralar ko‘radi. Ota-onasi bedarak yo‘qolgan deb topilgan yoki ular vafot etgan deb e’lon qilingan taqdirda, vasiylik va homiylik organi ana shu bolalarni oilaga, bunday imkoniyat bo‘lmaganda esa yetim bolalar yoki ota-ona qaramog‘idan mahrum bo‘lgan bolalar uchun tayinlangan muassasalarga joylashtirish choralarini ko‘radi.

Qonuniy vakillari hamrohligisiz chet elda turgan bolalarni qaytarish masalalari O‘zbekiston Respublikasining xalqaro shartnomalari asosida hal qilinadi.

O‘zbekiston Respublikasining qonunchiligi va xalqaro shartnomalariga muvofiq davlat ijro etish maqsadlari, shakllari va usullaridan qat’i nazar, bolalarni g‘ayriqonuniy ko‘chirishning oldini olish, shuningdek ularni doimiy yashaydigan mamlakatiga qaytarish choralarini ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Bolaning o‘z fikrini ifoda etish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Oilada har qanday masala hal qilinayotganda bola o‘z fikrini ifoda etishga, shuningdek har qanday sud muhokamasi yoki ma’muriy muhokama jarayonida so‘zlashga haqlidir. Bunda qaror qabul qilishga vakolatli bo‘lgan organlar va mansabdor shaxslar bolaning manfaatlariga taalluqli masalalarni hal qilishda bolaning fikrini, uning yoshidan qat’i nazar, ko‘rib chiqishi hamda bolaning eng ustun manfaatlaridan kelib chiqqan holda qarorlar qabul qilishi kerak.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Bolaning axborot olish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola o‘zining sog‘lig‘i, axloqiy va ma’naviy kamol topishiga ziyon yetkazmaydigan axborotni olish huquqiga ega.

Har bir bola har qanday axborotni izlash, olish va tarqatish huquqiga ega, qonunda nazarda tutilgan cheklashlar bundan mustasno.

Pornografiya, shafqatsizlik va zo‘ravonlikni namoyish etuvchi, inson qadr-qimmatini tahqirlovchi, bolalarga zararli ta’sir ko‘rsatuvchi va huquqbuzarliklar sodir etilishiga sabab bo‘luvchi ommaviy axborot vositalaridan foydalanish, adabiyotlarni tarqatish hamda filmlarni namoyish etish taqiqlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Bolaning fikrlash, so‘z, vijdon va e’tiqod erkinligi huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola fikrlash, so‘z, vijdon va e’tiqod erkinligi huquqiga ega.

Bolaning fikr yuritish va uni ifodalash erkinligi qonunda belgilangan tartibda cheklanishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Bolaning xususiy mulkka bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola qonunda belgilangan tartibda xususiy mulk huquqiga ega bo‘lishi mumkin.

Bolaning shaxsiy foydalanishida bo‘lgan, bola tomonidan hadya, meros tariqasida olingan, shaxsiy mehnati evaziga yoki boshqa qonuniy usulda olingan buyumlar, mol-mulk uning xususiy mulkidir.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Bolaning turar joyga bo‘lgan huquqlari kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola turar joyli bo‘lish huquqiga ega. Mazkur huquq qonunchilikda belgilangan tartibda amalga oshiriladi.

Turar joy mulkdorining yoki turar joyni ijaraga oluvchining oila a’zolari bo‘lgan bolalar ular qayerda bo‘lishlaridan qat’i nazar, turar joy mulkdori yoki turar joyni ijaraga oluvchisi egallab turgan turar joyga nisbatan huquqqa ega bo‘ladi.

Tarbiya, davolash muassasalari va boshqa muassasalarda, qarindoshlari, vasiylari yoki homiylari qaramog‘ida bo‘lgan yetim bolalar, ota-onasining qaramog‘idan mahrum bo‘lgan bolalar turar joyga bo‘lgan mulk huquqini yoki turar joydan foydalanish huquqini saqlab qoladi.

Vasiylik yoki homiylik belgilangan bolaning mulkida yoki foydalanishida bo‘lgan turar joyni o‘zga shaxsga o‘tkazish uchun vasiylik yoki homiylik organining roziligi talab qilinadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Bolaning mehnat qilish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola o‘zining yoshi, sog‘lig‘ining holati va kasbiy tayyorgarligiga muvofiq qonunchilikda belgilangan tartibda mehnat qilish, faoliyat turini va kasbni erkin tanlash, adolatli mehnat sharoitlarida ishlash huquqiga ega.

Ishga qabul qilishga o‘n olti yoshdan yo‘l qo‘yiladi.

Bolalarni mehnatga tayyorlash uchun umumta’lim maktablari, o‘rta maxsus, kasb-hunar o‘quv yurtlarining o‘quvchilarini ularning sog‘lig‘iga hamda ma’naviy va axloqiy kamol topishiga ziyon yetkazmaydigan, ta’lim olish jarayonini buzmaydigan yengil ishni o‘qishdan bo‘sh vaqtida bajarishi uchun — ular o‘n besh yoshga to‘lganidan keyin ota-onasidan birining yoki ota-onasining o‘rnini bosuvchi shaxslardan birining yozma roziligi bilan ishga qabul qilishga yo‘l qo‘yiladi.

borishi uchun zarur sharoitlarni yaratib berish va qonunchilikda nazarda tutilgan boshqa choralarni ko‘rish orqali bolaning mehnat qilish huquqi ta’minlanishini kafolatlaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Bolaning dam olish va bo‘sh vaqtga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola o‘zining yoshi, sog‘lig‘i hamda ehtiyojlariga mos keladigan dam olish va bo‘sh vaqtga bo‘lgan huquqqa ega.

Ota-ona yoki ota-onaning o‘rnini bosuvchi shaxslar o‘z qobiliyatlari hamda imkoniyatlariga muvofiq bolaning har tomonlama kamol topishi va farovonligi uchun zarur turmush sharoitini ta’minlaydi.

Bolalar sog‘lomlashtirish, sport, ijodiy tashkilotlari hamda dam olishni va bo‘sh vaqtni uyushtiruvchi boshqa tashkilotlar qonunchilikka muvofiq davlat organlari tomonidan ta’sis etiladi va qo‘llab-quvvatlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Bolaning sog‘lig‘ini saqlash huquqi kafolatlari

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola sog‘lig‘ini saqlash huquqiga ega.

Davlat sog‘lom bola tug‘ilishini ta’minlash uchun onaga uning sog‘lig‘ini saqlash sharoitlarini yaratadi.

Davlat bolalarga qonunchilikka muvofiq hajmda bepul tibbiy yordamni kafolatlaydi.

Bolaning sog‘lig‘ini saqlash huquqi davlat tomonidan quyidagi yo‘llar bilan ta’minlanadi:

malakali tibbiy xizmat ko‘rsatilishini tashkil qilish;

bolaning, uning ota-onasining salomatligini nazorat qilish va bolalar kasalliklari profilaktikasi;

bolalar va o‘smirlarni davolash-profilaktika muassasalarida dispanser kuzatuvini olib borish hamda davolash;

talab darajasidagi sifatga ega bo‘lgan oziq-ovqat mahsulotlari ishlab chiqarilishi va sotilishini nazorat qilish;

bolaning fiziologik xususiyatlari va sog‘lig‘i holatiga javob beradigan ta’lim olish hamda mehnat qilish sharoitlarini yaratish;

kasbga yaroqlilikni aniqlashda O‘zbekiston Respublikasining Davlat budjeti mablag‘lari hisobidan bepul tibbiy maslahat berish;

sanitariya-gigiyena ta’limi berish, sog‘lom turmush tarzini targ‘ib qilish va rag‘batlantirish;

sog‘lig‘ining holati to‘g‘risida bola uchun qulay bo‘lgan tarzda zarur axborotni taqdim etish.

O‘n to‘rt yoshdan katta yoshdagi bola ma’lumotlarni bilgan holda tibbiy aralashuvga ixtiyoriy ravishda rozilik berish yoki uni rad etish huquqiga ega.

Bola bilan uning hayotiga, sog‘lig‘i va normal rivojlanishiga ziyon yetkazuvchi har qanday ilmiy tajriba yoki boshqa eksperimentlar o‘tkazish taqiqlanadi.

Davlat maxsus cheklovlarni joriy etish va maxsus profilaktika dasturlarini amalga oshirish orqali bolani alkogolga moyillikdan, chekishdan, giyohvandlik vositalarini, psixotrop moddalar va intellektual-irodaviy faoliyatga ta’sir ko‘rsatadigan boshqa moddalarni iste’mol qilishdan himoya qilish bo‘yicha zarur choralarni ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Bolaning bilim olish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har bir bola bilim olish huquqiga ega.

Davlat bolaning bepul majburiy umumiy o‘rta ta’lim va o‘rta maxsus ta’lim olishini kafolatlaydi.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Ijtimoiy himoyaga muhtoj bolalar huquqlarining qo‘shimcha kafolatlari', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">3-bob. Ijtimoiy himoyaga muhtoj bolalar huquqlarining qo‘shimcha kafolatlari</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Ijtimoiy himoyaga muhtoj bolalarning oila muhitiga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat bolaning oilada bo‘lishiga to‘sqinlik qiluvchi sharoitlarni bartaraf qilish, bola oilasidan ajratilgan hollarda esa uni oilasiga tezroq qaytarish bo‘yicha zarur choralarni ko‘radi.

Davlat nogironligi bo‘lgan bolalarni hamda jismoniy va (yoki) ruhiy rivojlanishida nuqsoni bo‘lgan bolalarni tarbiyalayotgan oilalarga moddiy yordam, maslahat yordami va boshqa yordam ko‘rsatadi hamda ularni qo‘llab-quvvatlaydi.

Ota-ona qaramog‘idan mahrum bo‘lgan bola to‘g‘risida g‘amxo‘rlik qilishda imtiyozli huquq bu vazifani bajarishga qodir bo‘lgan qarindoshlariga beriladi.

Bolani oilaga joylashtirishning imkoniyati bo‘lmagan taqdirda, uni ixtisoslashtirilgan muassasalarga joylashtirish oxirgi choradir.

Oilada tarbiyalanishi mumkin bo‘lmagan ijtimoiy himoyaga muhtoj bolalar ularga zarur g‘amxo‘rlikni hamda qo‘llab-quvvatlashni ta’minlaydigan muqobil shaklda joylashtirilish huquqiga ega.

Ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirishning shakllari quyidagilardir:

vasiylik va homiylikni belgilash;

bolani farzandlikka olish;

oilaga tarbiyaga olish (patronat);

ixtisoslashtirilgan tarbiya, davolash muassasalariga, ijtimoiy himoya muassasalariga joylashtirish.

Qonunchilikka muvofiq ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirishning boshqa shakllari ham nazarda tutilishi mumkin.

Ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirish tartibi qonunchilik bilan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Ijtimoiy himoyaga muhtoj bolalarning jamiyatga uyg‘unlashish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ijtimoiy himoyaga muhtoj bolalar jamiyat hayotida ishtirok etishda boshqa bolalar bilan teng huquqlarga egadir.

Davlat ijtimoiy himoyaga muhtoj bolalar va ular oilalarining jamiyat hayotida faol ishtirok etishini ta’minlash uchun ularning sha’ni va qadr-qimmatini kamsitmaslik shartlari asosida dasturlar ishlab chiqish tashabbuskori bo‘ladi hamda zarur resurslar ajratadi.

Ta’lim, tibbiyot va madaniy-ma’rifiy muassasalar nogironligi bo‘lgan bolalarning hamda jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarning erkin harakatlanishlari uchun moslashtirilgan bo‘lishi kerak.

Davlat ijtimoiy himoyaga muhtoj bolalarni reabilitatsiya qilish tizimini shakllantirish va rivojlantirishni tashkil etadi hamda bunga ko‘maklashadi.

Nogironlik belgilangan paytdan boshlab bola tegishli davlat organlari tomonidan bajarilishi majburiy bo‘lgan yakka tartibdagi reabilitatsiya dasturidan foydalanish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Ijtimoiy himoyaga muhtoj bolalarning turar joyga bo‘lgan huquqlari kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Yetim bolalar va ota-ona qaramog‘idan mahrum bo‘lgan bolalar, to‘liq davlat ta’minotida turgan ixtisoslashtirilgan o‘quv-tarbiya muassasalarini bitirgan yoki jazoni o‘tash muassasalaridan ozod qilingan bolalar, shuningdek ijtimoiy himoyaga muhtoj bo‘lgan boshqa toifadagi bolalar o‘zlari ilgari yashagan turar joy maydoniga ega bo‘lish yoki qonunchilikka muvofiq turar joy olish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Ijtimoiy himoyaga muhtoj bolalarning ijtimoiy yordam olishga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ijtimoiy yordam uni olish huquqiga ega bo‘lgan har bir bolaga tayinlanadi.

Ijtimoiy yordam ko‘rsatish miqdori, shartlari va tartibi qonunchilik bilan belgilanadi.

Davlat organlari ota-ona qaramog‘idan mahrum bo‘lgan har bir bolaga, bolalarning joylashtirilishi shaklidan qat’i nazar, moddiy va boshqa sharoitlarni ta’minlaydi.

Davlat ijtimoiy himoyaga muhtoj bolalarni qo‘llab-quvvatlashga yo‘naltirilgan homiylik dasturlarini qonunchilikka muvofiq rag‘batlantiradi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>271-modda. To‘liq davlat ta’minotida bo‘lgan yetim bolalar va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalar huquqlarining kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Yetim bolalar va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalar davlat tarbiya, davolash-sog‘lomlashtirish, tibbiy-ijtimoiy muassasalariga, o‘rta maxsus, ta’lim muassasalariga tarbiyaga berilgan kundan e’tiboran to‘liq davlat ta’minotida bo‘ladi.

To‘liq davlat ta’minotida bo‘lgan yetim bolalarga va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalarga ta’lim berish, ularni uy-joy, oziq-ovqat mahsulotlari, kiyim-bosh, poyabzal va boshqa ashyoviy ta’minot buyumlari bilan ta’minlash, ular ta’lim muassasalarini bitirayotganda, ishga qabul qilinayotganda kiyim-bosh, poyabzal va boshqa ashyoviy ta’minot buyumlari sotib olish uchun nafaqa to‘lash O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilangan tartibda amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Nogironligi bo‘lgan bolalar, jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarning tibbiy-ijtimoiy yordam olishga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Nogironligi bo‘lgan bolalar tibbiy-ijtimoiy yordam olish huquqiga ega bo‘lib, bu profilaktika, davolash-tashxis qo‘yish, reabilitatsiya, sanatoriy-kurort, protez-ortopediya yordamini, harakatlanish vositalari bilan imtiyozli shartlarda ta’minlanishni va boshqa yordam turlarini o‘z ichiga oladi.

Nogironligi bo‘lgan bolalar davlat sog‘liqni saqlash tizimi muassasalarida bepul tibbiy-ijtimoiy yordam olish va o‘z uylarida parvarish qilinish huquqiga ega.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarga tibbiy-ijtimoiy yordam ko‘rsatish tartibi, ularga beriladigan imtiyozlar ro‘yxati qonunchilik bilan belgilanadi.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslarning arizasiga ko‘ra O‘zbekiston Respublikasining Davlat budjeti, homiylik va boshqa jamg‘armalarning mablag‘lari hisobidan, shuningdek ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslarning mablag‘lari hisobidan ijtimoiy muhofaza tizimi muassasalarida saqlanishlari mumkin. .</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Ijtimoiy himoyaga muhtoj bolalarning ta’lim olish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat maxsus pedagogik yondashuvga ehtiyoji bo‘lgan ijtimoiy himoyaga muhtoj bolalarning belgilangan ta’lim standartlari va talablari darajasida bilim olishlarini kafolatlovchi zarur mablag‘lar ajratadi hamda boshqa choralar ko‘radi.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar va nogironligi bo‘lgan bolalar ular uchun maxsus ishlab chiqilgan ta’lim dasturlari bo‘yicha ta’lim muassasalarida o‘qish va tarbiyalanish hamda o‘z jismoniy, aqliy qobiliyatlari va xohishlariga mos bo‘lgan ta’lim olish huquqiga ega.

Tibbiy-psixologik-pedagogik komissiyaning tavsiyasi bo‘lgan taqdirda, jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar va nogironligi bo‘lgan bolalarning ota-onalari o‘z xohish-istagiga ko‘ra hamda bolaning qiziqishlaridan kelib chiqqan holda ta’lim (umumta’lim yoki ixtisoslashtirilgan) muassasasi turini tanlash huquqiga ega.

Ijtimoiy himoyaga muhtoj bolalarga o‘rta maxsus, kasb-hunar va oliy o‘quv yurtlariga o‘qishga kirishda qonunchilik bilan imtiyozlar belgilanishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Ijtimoiy himoyaga muhtoj bolalarning oila muhitiga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat bolaning oilada bo‘lishiga to‘sqinlik qiluvchi sharoitlarni bartaraf qilish, bola oilasidan ajratilgan hollarda esa uni oilasiga tezroq qaytarish bo‘yicha zarur choralarni ko‘radi.

Davlat nogironligi bo‘lgan bolalarni hamda jismoniy va (yoki) ruhiy rivojlanishida nuqsoni bo‘lgan bolalarni tarbiyalayotgan oilalarga moddiy yordam, maslahat yordami va boshqa yordam ko‘rsatadi hamda ularni qo‘llab-quvvatlaydi.

Ota-ona qaramog‘idan mahrum bo‘lgan bola to‘g‘risida g‘amxo‘rlik qilishda imtiyozli huquq bu vazifani bajarishga qodir bo‘lgan qarindoshlariga beriladi.

Bolani oilaga joylashtirishning imkoniyati bo‘lmagan taqdirda, uni ixtisoslashtirilgan muassasalarga joylashtirish oxirgi choradir.

Oilada tarbiyalanishi mumkin bo‘lmagan ijtimoiy himoyaga muhtoj bolalar ularga zarur g‘amxo‘rlikni hamda qo‘llab-quvvatlashni ta’minlaydigan muqobil shaklda joylashtirilish huquqiga ega.

Ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirishning shakllari quyidagilardir:

vasiylik va homiylikni belgilash;

bolani farzandlikka olish;

oilaga tarbiyaga olish (patronat);

ixtisoslashtirilgan tarbiya, davolash muassasalariga, ijtimoiy himoya muassasalariga joylashtirish.

Qonunchilikka muvofiq ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirishning boshqa shakllari ham nazarda tutilishi mumkin.

Ijtimoiy himoyaga muhtoj bolalarni muqobil joylashtirish tartibi qonunchilik bilan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Ijtimoiy himoyaga muhtoj bolalarning jamiyatga uyg‘unlashish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ijtimoiy himoyaga muhtoj bolalar jamiyat hayotida ishtirok etishda boshqa bolalar bilan teng huquqlarga egadir.

Davlat ijtimoiy himoyaga muhtoj bolalar va ular oilalarining jamiyat hayotida faol ishtirok etishini ta’minlash uchun ularning sha’ni va qadr-qimmatini kamsitmaslik shartlari asosida dasturlar ishlab chiqish tashabbuskori bo‘ladi hamda zarur resurslar ajratadi.

Ta’lim, tibbiyot va madaniy-ma’rifiy muassasalar nogironligi bo‘lgan bolalarning hamda jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarning erkin harakatlanishlari uchun moslashtirilgan bo‘lishi kerak.

Davlat ijtimoiy himoyaga muhtoj bolalarni reabilitatsiya qilish tizimini shakllantirish va rivojlantirishni tashkil etadi hamda bunga ko‘maklashadi.

Nogironlik belgilangan paytdan boshlab bola tegishli davlat organlari tomonidan bajarilishi majburiy bo‘lgan yakka tartibdagi reabilitatsiya dasturidan foydalanish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Ijtimoiy himoyaga muhtoj bolalarning turar joyga bo‘lgan huquqlari kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Yetim bolalar va ota-ona qaramog‘idan mahrum bo‘lgan bolalar, to‘liq davlat ta’minotida turgan ixtisoslashtirilgan o‘quv-tarbiya muassasalarini bitirgan yoki jazoni o‘tash muassasalaridan ozod qilingan bolalar, shuningdek ijtimoiy himoyaga muhtoj bo‘lgan boshqa toifadagi bolalar o‘zlari ilgari yashagan turar joy maydoniga ega bo‘lish yoki qonunchilikka muvofiq turar joy olish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Ijtimoiy himoyaga muhtoj bolalarning ijtimoiy yordam olishga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ijtimoiy yordam uni olish huquqiga ega bo‘lgan har bir bolaga tayinlanadi.

Ijtimoiy yordam ko‘rsatish miqdori, shartlari va tartibi qonunchilik bilan belgilanadi.

Davlat organlari ota-ona qaramog‘idan mahrum bo‘lgan har bir bolaga, bolalarning joylashtirilishi shaklidan qat’i nazar, moddiy va boshqa sharoitlarni ta’minlaydi.

Davlat ijtimoiy himoyaga muhtoj bolalarni qo‘llab-quvvatlashga yo‘naltirilgan homiylik dasturlarini qonunchilikka muvofiq rag‘batlantiradi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-1-modda. To‘liq davlat ta’minotida bo‘lgan yetim bolalar va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalar huquqlarining kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Yetim bolalar va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalar davlat tarbiya, davolash-sog‘lomlashtirish, tibbiy-ijtimoiy muassasalariga, o‘rta maxsus, ta’lim muassasalariga tarbiyaga berilgan kundan e’tiboran to‘liq davlat ta’minotida bo‘ladi.

To‘liq davlat ta’minotida bo‘lgan yetim bolalarga va ota-onasining yoki boshqa qonuniy vakillarining qaramog‘idan mahrum bo‘lgan bolalarga ta’lim berish, ularni uy-joy, oziq-ovqat mahsulotlari, kiyim-bosh, poyabzal va boshqa ashyoviy ta’minot buyumlari bilan ta’minlash, ular ta’lim muassasalarini bitirayotganda, ishga qabul qilinayotganda kiyim-bosh, poyabzal va boshqa ashyoviy ta’minot buyumlari sotib olish uchun nafaqa to‘lash O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilangan tartibda amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Nogironligi bo‘lgan bolalar, jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarning tibbiy-ijtimoiy yordam olishga bo‘lgan huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Nogironligi bo‘lgan bolalar tibbiy-ijtimoiy yordam olish huquqiga ega bo‘lib, bu profilaktika, davolash-tashxis qo‘yish, reabilitatsiya, sanatoriy-kurort, protez-ortopediya yordamini, harakatlanish vositalari bilan imtiyozli shartlarda ta’minlanishni va boshqa yordam turlarini o‘z ichiga oladi.

Nogironligi bo‘lgan bolalar davlat sog‘liqni saqlash tizimi muassasalarida bepul tibbiy-ijtimoiy yordam olish va o‘z uylarida parvarish qilinish huquqiga ega.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalarga tibbiy-ijtimoiy yordam ko‘rsatish tartibi, ularga beriladigan imtiyozlar ro‘yxati qonunchilik bilan belgilanadi.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslarning arizasiga ko‘ra O‘zbekiston Respublikasining Davlat budjeti, homiylik va boshqa jamg‘armalarning mablag‘lari hisobidan, shuningdek ota-onasi yoki ota-onasining o‘rnini bosuvchi shaxslarning mablag‘lari hisobidan ijtimoiy muhofaza tizimi muassasalarida saqlanishlari mumkin. .</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Ijtimoiy himoyaga muhtoj bolalarning ta’lim olish huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat maxsus pedagogik yondashuvga ehtiyoji bo‘lgan ijtimoiy himoyaga muhtoj bolalarning belgilangan ta’lim standartlari va talablari darajasida bilim olishlarini kafolatlovchi zarur mablag‘lar ajratadi hamda boshqa choralar ko‘radi.

Jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar va nogironligi bo‘lgan bolalar ular uchun maxsus ishlab chiqilgan ta’lim dasturlari bo‘yicha ta’lim muassasalarida o‘qish va tarbiyalanish hamda o‘z jismoniy, aqliy qobiliyatlari va xohishlariga mos bo‘lgan ta’lim olish huquqiga ega.

Tibbiy-psixologik-pedagogik komissiyaning tavsiyasi bo‘lgan taqdirda, jismoniy va (yoki) ruhiy rivojlanishida nuqsonlari bo‘lgan bolalar va nogironligi bo‘lgan bolalarning ota-onalari o‘z xohish-istagiga ko‘ra hamda bolaning qiziqishlaridan kelib chiqqan holda ta’lim (umumta’lim yoki ixtisoslashtirilgan) muassasasi turini tanlash huquqiga ega.

Ijtimoiy himoyaga muhtoj bolalarga o‘rta maxsus, kasb-hunar va oliy o‘quv yurtlariga o‘qishga kirishda qonunchilik bilan imtiyozlar belgilanishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Yakunlovchi qoidalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">4-bob. Yakunlovchi qoidalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Nizolarni hal etish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola huquqlarining kafolatlari sohasidagi nizolar qonunchilikda belgilangan tartibda hal etiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Bola huquqlarining kafolatlari to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Bola huquqlarining kafolatlari to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladilar.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Ushbu Qonunning kuchga kirishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran kuchga kiradi.</p>
            <div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2008-yil 7-yanvar,
<br />
O‘RQ-637-son</p>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
            </div>
          </div>
        </>
      )
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 font-Montserrat">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col">
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-800 mb-2">
            O'ZBEKISTON RESPUBLIKASINING QONUNI
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-700">
            BOLA HUQUQLARINING KAFOLATLARI TO'GRISIDA
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p> O‘zbekiston Respublikasi Prezidenti Sh. MIRZIYOYEV</p>
          <p> Toshkent sh., 2008-yil 7-yanvar, O‘RQ-637-son</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bola_huquqlari;