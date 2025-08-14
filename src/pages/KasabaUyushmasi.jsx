import { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KasabaUyushmasi = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">1-bob. Umumiy qoidalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi fuqarolarning kasaba uyushmalariga birlashish huquqini amalga oshirish, shuningdek kasaba uyushmalarini tuzish va ularning faoliyatini tashkil etish sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Kasaba uyushmalari to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Qonunchilikda ushbu Qonunni O‘zbekiston Respublikasi Qurolli Kuchlarida, ichki ishlar organlarida, Davlat xavfsizlik xizmatida, Milliy gvardiyasida va boshqa harbiy tuzilmalarda qo‘llashning o‘ziga xos xususiyatlari belgilanishi mumkin.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining kasaba uyushmalari to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

kasaba uyushmasi — fuqarolarning o‘z faoliyati yoki o‘qishi turi bo‘yicha umumiy kasbiy manfaatlari bilan bog‘liq bo‘lgan, ularning mehnatga oid, boshqa ijtimoiy-iqtisodiy huquq va manfaatlarini ifodalash hamda himoya qilish maqsadida tuziladigan, o‘z ustavi asosida faoliyat ko‘rsatadigan ixtiyoriy jamoat birlashmasi;

boshlang‘ich kasaba uyushmasi tashkiloti — bir yoki bir nechta ish beruvchida ishlaydigan yoki tegishli ta’lim muassasasida o‘qiydigan kasaba uyushmasi a’zolarining tegishli kasaba uyushmasi ustavi asosida faoliyat ko‘rsatadigan ixtiyoriy birlashmasi;

kasaba uyushmalarining birlashmasi — xodimlarning kasbiy, mehnatga oid, ijtimoiy-iqtisodiy huquq va manfaatlarini amalga oshirish hamda himoya qilishda harakatlarning muvofiqlashtirilishiga va birligiga erishish maqsadida tarmoqqa doir, hududiy yoki kasbiy o‘ziga xoslikni hisobga oluvchi boshqa belgi bo‘yicha tuziladigan ixtiyoriy birlashma;

kasaba uyushmasining bo‘linmasi — kasaba uyushmasining ustaviga muvofiq tashkil etiladigan, tegishli hududda uning vazifalarini yoki vazifalarining bir qismini amalga oshiradigan bo‘linma.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Kasaba uyushmalariga birlashish huquqi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Mehnat faoliyatini amalga oshirayotgan fuqarolar, shuningdek o‘rta maxsus, kasb-hunar ta’limi, oliy ta’lim va ilmiy-tadqiqot muassasalarida ta’lim olayotgan, o‘n besh yoshga to‘lgan shaxslar (bundan buyon matnda xodimlar deb yuritiladi) hech qanday tafovutsiz o‘z tanloviga ko‘ra va oldindan ruxsat olmay turib, ixtiyoriy ravishda kasaba uyushmalarini tuzish huquqiga, shuningdek kasaba uyushmalariga ularning ustavlariga rioya etish sharti bilan a’zo bo‘lish huquqiga egadir.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Kasaba uyushmalari faoliyatining prinsiplari', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">2-bob. Kasaba uyushmalari faoliyatining prinsiplari</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Kasaba uyushmalari faoliyatining asosiy prinsiplari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari faoliyatining asosiy prinsiplari quyidagilardan iborat:

qonuniylik;

ixtiyoriylik;

kamsitishga yo‘l qo‘ymaslik;

mustaqillik va o‘zini o‘zi boshqarish;

teng huquqlilik;

oshkoralik va ochiqlik.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Qonuniylik prinsipi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari o‘z faoliyatida O‘zbekiston Respublikasining Konstitutsiyasiga, ushbu Qonunga va boshqa qonunchilik hujjatlariga so‘zsiz rioya etishi hamda ularni bajarishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. Ixtiyoriylik prinsipi
</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Fuqarolar o‘z qonuniy manfaatlarini himoya qilish uchun o‘z tanloviga ko‘ra ixtiyoriy ravishda kasaba uyushmalarini tuzish, ularga a’zo bo‘lish, kasaba uyushmasi faoliyati bilan shug‘ullanish va kasaba uyushmalariga a’zolikdan chiqish huquqiga ega.

Kasaba uyushmasiga a’zo bo‘lish va a’zolikdan chiqish, shuningdek mehnat shartnomasi bekor qilinganidan keyin kasaba uyushmasiga a’zolikni saqlab qolish tartibi va shartlari tegishli kasaba uyushmasining ustavi bilan tartibga solinadi.

Fuqarolarning kasaba uyushmalariga birlashishga bo‘lgan huquqini amalga oshirishga to‘sqinlik qilishga, shuningdek ularni kasaba uyushmasiga a’zo bo‘lishga yoki a’zolikdan chiqishga majburlashga yo‘l qo‘yilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Kamsitishga yo‘l qo‘ymaslik prinsipi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalariga mansublik yoki mansub emaslik fuqarolarning qonunchilikda kafolatlanadigan mehnatga oid, boshqa ijtimoiy-iqtisodiy, siyosiy, shaxsiy huquqlari, erkinliklari va qonuniy manfaatlarini biror-bir tarzda cheklashga sabab bo‘lmaydi. Ishga qabul qilishni, ishda ko‘tarilishni, shuningdek xodim bilan mehnat shartnomasini bekor qilishni muayyan kasaba uyushmasiga mansublik, unga a’zo bo‘lish yoki a’zolikdan chiqish bilan bog‘liq qilib qo‘yish taqiqlanadi.

Xodimning kasaba uyushmasiga a’zo bo‘lmasligiga yoki a’zolikdan chiqishiga doir yozma yoki og‘zaki majburiyatlari haqiqiy emas.

O‘zini kasaba uyushmasiga mansubligi yoki mansub emasligi belgisiga qarab kamsitilgan deb hisoblovchi shaxs kamsitishni bartaraf etish, yetkazilgan moddiy zararning o‘rnini qoplash va ma’naviy ziyonni kompensatsiya qilish to‘g‘risidagi ariza bilan sudga murojaat qilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Mustaqillik va o‘zini o‘zi boshqarish prinsipi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari o‘z faoliyatida, shu jumladan moliyaviy faoliyatida davlat hokimiyati va boshqaruvi organlaridan mustaqildir, ular oldida hisobdor emas hamda ular tomonidan nazorat qilinmaydi, bundan qonunda nazarda tutilgan hollar mustasno.

Kasaba uyushmalari mustaqil ravishda o‘z ustavlarini ishlab chiqadi va tasdiqlaydi, tashkiliy tuzilmasini belgilaydi, kasaba uyushmasi organlarini saylaydi, o‘z faoliyatini tashkil etadi, yig‘ilishlar, shuningdek boshqa tadbirlar o‘tkazadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. Teng huquqlilik prinsipi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarining barcha a’zolari ushbu Qonunda, boshqa normativ-huquqiy hujjatlarda, kasaba uyushmalarining ustavlarida yoki lokal hujjatlarida belgilangan o‘z huquq va majburiyatlari borasida tengdir.

Kasaba uyushmalari tarmoqqa mansubligidan, hududiy joylashuvidan, kasaba uyushmalari birlashmasidagi ishtirokidan yoki boshqa belgisidan qat’i nazar teng huquqlarga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. Oshkoralik va ochiqlik prinsipi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarining, ular birlashmalarining faoliyati oshkora va ochiqdir. Kasaba uyushmalari tomonidan qabul qilinadigan ustavlar va nizomlar ommaviy axborot vositalarida, Internet jahon axborot tarmog‘ida, shu jumladan kasaba uyushmalarining rasmiy veb-saytlarida albatta e’lon qilinishi lozim.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Kasaba uyushmalarining, ular birlashmalarining huquqlariga rioya etilishi kafolatlari', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">3-bob. Kasaba uyushmalarining, ular birlashmalarining huquqlariga rioya etilishi kafolatlari</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. Kasaba uyushmalarining, ular birlashmalarining faoliyatiga aralashmaslik kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat kasaba uyushmalarining, ular birlashmalarining huquqlari va qonuniy manfaatlari himoya qilinishini kafolatlaydi.

Davlat organlari, ularning mansabdor shaxslari, ish beruvchilar kasaba uyushmalarining, ular birlashmalarining huquqlariga rioya etilishini ta’minlaydi. Kasaba uyushmalarining, ular birlashmalarining faoliyatiga aralashishga, shu jumladan ularning faoliyati to‘g‘risida biror-bir hujjat taqdim etishni talab qilishga yo‘l qo‘yilmaydi, bundan qonunda nazarda tutilgan hollar mustasno.

Kasaba uyushmalarining, ular birlashmalarining faoliyatini davlat organlari, ularning mansabdor shaxslari, ish beruvchilar tashabbusiga ko‘ra tugatishga yo‘l qo‘yilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. Kasaba uyushmalari faoliyatini davlat tomonidan qo‘llab-quvvatlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat kasaba uyushmalari faoliyatini subsidiyalar, grantlar va ijtimoiy buyurtmalar shaklida qo‘llab-quvvatlashi mumkin.

Davlat kasaba uyushmalari faoliyatini qonunchilikka muvofiq boshqa tarzda ham qo‘llab-quvvatlashi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Kasaba uyushmalarining mulk huquqi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarining mulki daxlsizdir va u qonun bilan qo‘riqlanadi. Kasaba uyushmalarining mol-mulki natsionalizatsiya, rekvizitsiya va musodara qilinmaydi, bundan qonunda nazarda tutilgan hollar mustasno.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Kasaba uyushmalari organlariga saylangan va ishlab chiqarishdagi ishidan ozod etilmagan xodimlar uchun kafolatlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Quyidagilarga intizomiy jazo berilishi mumkin emas:

kasaba uyushmasi organi tarkibiga saylangan va ishlab chiqarishdagi ishidan ozod etilmagan xodimlarga — shu organning roziligisiz;

tashkilot bo‘linmalaridagi kasaba uyushmalari organlarining rahbarlariga — tegishli kasaba uyushmasi organining roziligisiz;

tashkilotdagi kasaba uyushmalari organlarining rahbarlariga — tegishli kasaba uyushmalari birlashmasining roziligisiz.

Kasaba uyushmalari organlari tarkibiga saylangan va ishlab chiqarishdagi ishidan ozod etilmagan shaxslar bilan mehnat shartnomasini ish beruvchining tashabbusiga ko‘ra bekor qilishga mehnat shartnomasini bekor qilishning umumiy tartibiga rioya etishdan tashqari, ular a’zo bo‘lgan kasaba uyushmasi organining roziligi oldindan olingan holda yo‘l qo‘yiladi, tashkilot kasaba uyushmasi organining raisi bilan mehnat shartnomasini ish beruvchining tashabbusi bilan bekor qilishga esa bundan tashqari tegishli kasaba uyushmalari birlashmasining shunday roziligi olingan taqdirda yo‘l qo‘yiladi.

Kasaba uyushmalari organlarining ishlab chiqarishdagi o‘z ishidan ozod etilmagan a’zolariga jamoa shartnomasida, kelishuvida belgilanadigan shartlarga ko‘ra mehnat jamoasining manfaatlarini ko‘zlab jamoatchilik vazifalarini bajarishi, shuningdek kasaba uyushmasining yo‘nalishi bo‘yicha qisqa muddatli o‘qishi uchun o‘rtacha ish haqi saqlangan holda vaqt beriladi.

Kasaba uyushmalari organlarining a’zolari ishlab chiqarishdagi ishidan kasaba uyushmalari tomonidan chaqiriladigan qurultoylarda, konferensiyalarda delegat sifatida, shuningdek kasaba uyushmalarining plenumlari va rayosatlari ishida ishtirok etish vaqtiga ozod qilinib, ularga kasaba uyushmasining mablag‘lari hisobidan o‘rtacha ish haqi miqdorida haq to‘lanadi.

Kasaba uyushmasining ustavida nazarda tutilgan hollarda tashkilotlarda kasaba uyushmasining tashkilotchilari yoki kasaba uyushmasi guruhlarining tashkilotchilari saylanishi mumkin, ularga nisbatan ushbu moddada nazarda tutilgan kafolatlar tatbiq etiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Kasaba uyushmalari organlariga saylangan va ishlab chiqarishdagi ishidan ozod etilgan xodimlar uchun kafolatlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari organlaridagi saylab qo‘yiladigan lavozimlarga saylanganligi tufayli ishlab chiqarishdagi ishidan ozod etilgan xodimlarga ularning saylov vakolatlari tugaganidan so‘ng avvalgi ishi (lavozimi) beriladi, bunday ish (lavozim) mavjud bo‘lmagan taqdirda esa o‘sha tashkilotda yoki xodimning roziligi bilan boshqa tashkilotda avvalgisiga teng boshqa ish (lavozim) beriladi.

Kasaba uyushmalari organlariga saylangan xodimlarga tegishli ish (lavozim) berish imkoni bo‘lmagan taqdirda, ular qonunchilikda, jamoa shartnomalarida, kelishuvlarida nazarda tutilgan imtiyozlardan foydalanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Kasaba uyushmalari organlariga saylangan xodimlar uchun mehnatga oid qo‘shimcha kafolatlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari organlari tarkibiga saylangan va ishlab chiqarishdagi ishidan ozod etilmagan xodimlarga ish beruvchining tashabbusiga ko‘ra intizomiy jazo berishga, ular bilan mehnat shartnomasini bekor qilishga, shuningdek kasaba uyushmalari organlari tarkibiga saylangan xodimlar bilan mehnatga oid munosabatlarni ularning saylov vakolatlari tugaganidan keyin ikki yil ichida ish beruvchining tashabbusiga ko‘ra bekor qilishga mahalliy mehnat organining oldindan roziligini olmasdan turib yo‘l qo‘yilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Ish beruvchining kasaba uyushmalari faoliyatini amalga oshirish uchun shart-sharoitlar yaratishga doir majburiyatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ish beruvchi:

kasaba uyushmalarining huquqlariga rioya etishi, ularning faoliyatiga ko‘maklashishi;

xodimlarning manfaatlariga daxldor qarorlar qabul qilinguniga qadar kasaba uyushmalari bilan maslahatlashuvlar o‘tkazishi, mehnat to‘g‘risidagi qonun hujjatlarida va normativ hujjatlarda nazarda tutilgan hollarda esa ularning roziligini olishi;

kasaba uyushmalarining takliflarini o‘z vaqtida ko‘rib chiqishi va ularga qabul qilingan qarorlar haqida yozma shaklda, sabablarini ko‘rsatgan holda xabar qilishi;

kasaba uyushmalari organlari vakillarini ular manfaatlarini ifoda etayotgan xodimlarning ish joylariga moneliksiz kiritishi;

kasaba uyushmalariga xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan masalalar bo‘yicha zarur axborotni bepul taqdim etishi;

kasaba uyushmalariga o‘z vazifalarini bajarishi uchun zarur sharoitlarni ta’minlash;

kasaba uyushmalari organlari tarkibiga saylangan va ishlab chiqarishdagi ishidan ozod etilmagan shaxslarga kasaba uyushmalariga oid majburiyatlarini ish vaqtida bajarishi uchun vaqt berishi. Bunda kasaba uyushmalariga oid majburiyatlarni bajarish vaqti ish haftasi soatlari sonining 30 foizidan kam bo‘lmasligi kerak;

kasaba uyushmalariga jamoa shartnomasida, kelishuvida belgilangan maqsadlar uchun va miqdorlarda mablag‘lar o‘tkazishi;

kasaba uyushmasining a’zolari bo‘lgan xodimlarning yozma arizalari mavjud bo‘lganda kasaba uyushmasining tegishli hisobvarag‘iga xodimlarning ish haqidan ushlab qolingan kasaba uyushmasiga a’zolik badallarini, agar jamoa shartnomasida, kelishuvida shunday qoida nazarda tutilgan bo‘lsa, o‘z vaqtida o‘tkazishi shart.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini hamda boshlang‘ich kasaba uyushmalari tashkilotlarini tashkil etish, qayta tashkil etish va ularning faoliyatini tugatish tartibi', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">4-bob. Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini hamda boshlang‘ich kasaba uyushmalari tashkilotlarini tashkil etish, qayta tashkil etish va ularning faoliyatini tugatish tartibi</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini va boshlang‘ich kasaba uyushmalari tashkilotlarini tashkil etish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari o‘z faoliyatini jamoat birlashmasi shaklidagi yuridik shaxsni tashkil etgan holda amalga oshiradi.

Kasaba uyushmalari bir yoki bir nechta tashkilot xodimlarining tashabbusiga ko‘ra tashkil etiladi.

Kasaba uyushmalarining bo‘linmalari, boshlang‘ich kasaba uyushmalari tashkilotlari yuridik shaxs maqomi bilan yoki yuridik shaxs maqomisiz tashkil etilishi mumkin. Kasaba uyushmalari o‘z boshlang‘ich kasaba uyushmalari tashkilotlarining, shu jumladan yuridik shaxs maqomiga ega bo‘lmagan boshlang‘ich kasaba uyushmalari tashkilotlarining hisobini yuritadi.

Kasaba uyushmalari adliya organlarida ro‘yxatdan o‘tkazilgan ustav asosida faoliyat ko‘rsatadi.

Davlat organlari, ularning mansabdor shaxslari, ish beruvchilar kasaba uyushmalarini, ularning birlashmalarini tashkil etish tashabbuskorlari, shuningdek ularning rahbar organlari a’zolari bo‘lishi mumkin emas.

Kasaba uyushmasini, kasaba uyushmalari birlashmasini tashkil etish tashabbuskorlari qurultoyni (konferensiyani) yoki umumiy yig‘ilishni chaqiradi, unda ustav qabul qilinadi, shuningdek rahbar organlar tuziladi.

Kasaba uyushmalari, ularning birlashmalari, shuningdek yuridik shaxs bo‘lgan bo‘linmalari hamda boshlang‘ich kasaba uyushmalari tashkilotlari davlat ro‘yxatidan o‘tkazilgan paytdan e’tiboran tashkil etilgan hisoblanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Kasaba uyushmasining, kasaba uyushmalari birlashmasining ustavi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmasining, kasaba uyushmalari birlashmasining ustavida quyidagilar nazarda tutiladi:

nomi, maqsad va vazifalari;

tashkiliy-huquqiy shakli, faoliyat qaysi hudud doirasida amalga oshirilsa, o‘sha hudud;

birlashayotgan xodimlarning toifalari va kasbiy guruhlari;

kasaba uyushmasi, kasaba uyushmalari birlashmasi a’zoligiga qabul qilish va undan chiqish (chiqarish) shartlari;

a’zolik badallarini to‘lash tartibi va ularning miqdorlari;

a’zolarning huquq va majburiyatlari;

tuzilmasi va rahbar organlari, zarur bo‘lgan taqdirda nazorat-taftish organlari;

kasaba uyushmalari organlarining vakolati va ularni shakllantirish tartibi, ularning vakolatlari muddatlari, doimiy asosda faoliyat ko‘rsatuvchi rahbar organining joylashgan eri;

pul mablag‘larini va boshqa mol-mulkni shakllantirish manbalari, shuningdek ularni boshqarish tartibi;

a’zolar oldida hisobot berish tartibi va muddatlari;

qayta tashkil etish va tugatish tartibi;

ustavga o‘zgartish va qo‘shimchalar kiritish tartibi.

Kasaba uyushmasi, kasaba uyushmalari birlashmasi ustavida ularning ramzlari tavsifi bo‘lishi mumkin.

Ustavda kasaba uyushmasi, kasaba uyushmalari birlashmasi faoliyatiga taalluqli bo‘lgan, qonunchilikka zid bo‘lmagan boshqa qoidalar ham nazarda tutilishi mumkin.

Kasaba uyushmalari birlashmasi ustavining talablari kasaba uyushmalari birlashmasi a’zolari bo‘lgan kasaba uyushmalari uchun majburiydir.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini va boshlang‘ich kasaba uyushmalari tashkilotlarini davlat ro‘yxatidan o‘tkazish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarini, ularning birlashmalarini, shuningdek yuridik shaxs bo‘lgan bo‘linmalarini va boshlang‘ich kasaba uyushmalari tashkilotlarini davlat ro‘yxatidan o‘tkazish adliya organlari tomonidan amalga oshiriladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Kasaba uyushmalarining, ular birlashmalarining ramzlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari bayroqqa, timsolga, ramziy bayroqqa va boshqa ramzlarga ega bo‘lishi mumkin. Kasaba uyushmalarining, ular birlashmalarining ramzlari davlat ramzlari bilan bir xil bo‘lmasligi kerak.

Kasaba uyushmalarining, ular birlashmalarining ramzlari ularning rahbar organi tomonidan ustavga muvofiq tasdiqlanadi va davlat ro‘yxatidan o‘tkaziladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini va boshlang‘ich kasaba uyushmalari tashkilotlarini qayta tashkil etish hamda ularning faoliyatini tugatish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarini, ularning birlashmalarini, bo‘linmalarini va boshlang‘ich kasaba uyushmalari tashkilotlarini qayta tashkil etish ustavda belgilanadigan ular rahbar organining qaroriga ko‘ra amalga oshiriladi.

Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining faoliyatini tugatish ular rahbar organining qaroriga binoan yoki sud tartibida amalga oshiriladi.

Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining faoliyati ma’muriy tartibda tugatilishi yoki to‘xtatib turilishi mumkin emas.</p>
            
          </div>
        </>
      )
    },
    {
        title: '5-bob. Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari faoliyatining iqtisodiy asoslari', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">5-bob. Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari faoliyatining iqtisodiy asoslari</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining mol-mulki</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, shuningdek yuridik shaxs bo‘lgan bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari o‘z mulkida binolarga, inshootlarga, turar joylarga va yashash uchun mo‘ljallanmagan joylarga, asbob-uskunalarga, inventarlarga, pul mablag‘lariga, shu jumladan chet el valyutasidagi pul mablag‘lariga, qimmatli qog‘ozlarga va boshqa mol-mulkka ega bo‘lishi mumkin.

Yuridik shaxs maqomiga ega bo‘lmagan kasaba uyushmasining bo‘linmasi, boshlang‘ich kasaba uyushmasi tashkiloti tegishli kasaba uyushmasi yoki uning bo‘linmasi yoxud ularning arizasiga ko‘ra ish beruvchi tomonidan o‘ziga xizmat ko‘rsatuvchi bankda ochiladigan maxsus bank hisobvarag‘iga ega bo‘lishga, mazkur hisobvaraqda turgan pul mablag‘larini erkin tasarruf etishga haqli. Kasaba uyushmasi tashkilotining maxsus hisobvarag‘idan ish beruvchining majburiyatlari bo‘yicha undiruvga yo‘l qo‘yilmaydi.

Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining ish beruvchilar birlashmalariga (ittifoqlariga, uyushmalariga) va siyosiy partiyalarga biror-bir moliyaviy yordam ko‘rsatishi taqiqlanadi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining mol-mulkini shakllantirish manbalari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Quyidagilar kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining mol-mulkini shakllantirish manbalari bo‘lishi mumkin:

a’zolik badallari;

ixtiyoriy mulkiy badallar va xayriyalar;

tadbirkorlik faoliyatidan tushgan tushumlar;

qonunchilikda taqiqlanmagan boshqa tushumlar.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari mol-mulkining manbalari, ularni shakllantirish va ulardan foydalanish tartibi ularning ta’sis hujjatlarida belgilanadi.

Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining mol-mulkini shakllantirish manbalaridan olingan mablag‘lardan ularning ta’sis hujjatlarida belgilangan maqsadlarga erishish va vazifalarni hal etish uchun foydalaniladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining tadbirkorlik faoliyati</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, shuningdek yuridik shaxs bo‘lgan bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari o‘z ta’sis hujjatlarida belgilangan tegishli maqsad hamda vazifalari doirasida tadbirkorlik faoliyati bilan shug‘ullanishi mumkin.

Kasaba uyushmalari, ularning birlashmalari, shuningdek yuridik shaxs bo‘lgan bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari o‘z ta’sis hujjatlarida belgilangan maqsad hamda vazifalariga muvofiq belgilangan tartibda tashqi iqtisodiy faoliyatni amalga oshirish, tijorat tashkilotlarini tashkil etish, noshirlik faoliyati bilan shug‘ullanish, turli jamg‘armalar shakllantirish huquqiga ega.</p>
             
            </div>
          </>
        )
    },
      {
        title: '6-bob. Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining huquqlari', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">6-bob. Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining va boshlang‘ich kasaba uyushmalari tashkilotlarining huquqlari</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilish masalalarini hal qilishda ishtirok etishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari aholi bandligini ta’minlash, ishdan ozod etilayotgan xodimlarni himoya qilish masalalarini, shuningdek xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilishga doir boshqa masalalarni hal qilishda ishtirok etish huquqiga ega.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari xodimlarning mehnat huquqlarini himoya qilib sudga da’vo arizasi, shuningdek sud buyrug‘ini chiqarish to‘g‘risidagi ariza bilan murojaat qilishga haqli.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Normativ-huquqiy hujjatlar va texnik jihatdan tartibga solish sohasidagi normativ hujjatlar loyihalarini ishlab chiqishda ishtirok etishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar loyihalarini ishlab chiqishda ishtirok etish huquqiga ega.

Xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga daxldor bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar loyihalari majburiy tartibda tegishli kasaba uyushmasi yoki kasaba uyushmalari birlashmasi bilan kelishib olinishi shart.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Jamoa muzokaralarini olib borishga hamda jamoa shartnomalari va kelishuvlarini tuzishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari manfaatlari ular tomonidan ifoda etilayotgan xodimlar nomidan jamoa muzokaralarini olib borishga, jamoa shartnomalari va kelishuvlarini tuzishga bo‘lgan ustuvor huquqqa egadir.

Ish beruvchining vakili bo‘lgan shaxslarning xodimlar nomidan jamoa muzokaralarini olib borishi hamda jamoa shartnomalari va kelishuvlarini tuzishi taqiqlanadi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Bandlikka ko‘maklashish sohasidagi huquqlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari davlat bandlik dasturlarini ishlab chiqishda ishtirok etish, bandlikni ta’minlash, shu jumladan yangi ish o‘rinlarini tashkil qilish va mavjudlarini saqlab qolish, tashkilotlarning faoliyatini yaxshilash, xodimlarning ommaviy ravishda ishdan ozod etilishining oldini olish bo‘yicha chora-tadbirlarni taklif etish huquqiga ega.

Ish beruvchi xodimlarning manfaatlarini ifoda etuvchi tegishli kasaba uyushmasiga yoki kasaba uyushmalari birlashmasiga xodimlarning ommaviy ravishda ishdan ozod etilishi ehtimoli to‘g‘risida o‘z vaqtida, kamida ikki oy oldin axborot taqdim etadi va ishdan ozod etish oqibatlarini yumshatishga qaratilgan maslahatlashuvlar o‘tkazadi.

Kasaba uyushmalari, ularning birlashmalari ish beruvchining xodimlarni ommaviy ravishda ishdan ozod etish to‘g‘risidagi qarorini olti oygacha bo‘lgan muddatga to‘xtatib turish haqidagi takliflarni mahalliy davlat hokimiyati organlari ko‘rib chiqishi uchun kiritish huquqiga ega.

Jamoa shartnomasida yoki kelishuvida nazarda tutilgan hollarda, tegishli kasaba uyushmasining yoki boshlang‘ich kasaba uyushmasi tashkilotining oldindan roziligini olmasdan turib mehnat shartnomasini ish beruvchining tashabbusiga ko‘ra bekor qilishga, agar qonunchilikda boshqacha qoida nazarda tutilmagan bo‘lsa, yo‘l qo‘yilmaydi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Xodimlarni ijtimoiy himoya qilish sohasidagi huquqlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari insonning munosib hayot kechirishini va erkin rivojlanishini ta’minlovchi shart-sharoitlar yaratishga qaratilgan ijtimoiy dasturlarni shakllantirishda, xodimlarni ijtimoiy himoya qilish bo‘yicha chora-tadbirlarni ishlab chiqishda, turmush darajasining asosiy mezonlarini va tirikchilik uchun zarur bo‘lgan narsalarning eng kam miqdorini belgilashda ishtirok etish huquqiga ega.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari tashkilotlarni qayta tashkil etish yoki tugatish chog‘ida tugatish komissiyalarining ishida ishtirok etishga haqli.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Axborot olishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari o‘z ustav faoliyatini amalga oshirish uchun davlat organlaridan, ularning mansabdor shaxslaridan, ish beruvchilardan xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlari masalalari yuzasidan bepul axborot olish huquqiga ega.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Mehnatni muhofaza qilish sohasidagi huquqlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari mehnatni muhofaza qilish masalalari bo‘yicha davlat dasturlarini shakllantirishda ishtirok etish huquqiga ega.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari mehnatni muhofaza qilish sohasida:

tashkilotlarning rahbarlaridan va boshqa mansabdor shaxslaridan mehnat sharoitlari va mehnatni muhofaza qilish to‘g‘risida, shuningdek ishlab chiqarishdagi barcha baxtsiz hodisalar va kasb kasalliklari haqida axborot olish;

ishlab chiqarishdagi baxtsiz hodisalar va kasb kasalliklarini tekshirishda ishtirok etish;

xodimlarning hayoti va sog‘lig‘iga xavf tug‘ilgan hollarda ishlarni to‘xtatib turish to‘g‘risida, shuningdek mehnatni muhofaza qilish talablarining buzilishlarini bartaraf etish haqida ish beruvchiga takliflar kiritish;

mehnatni muhofaza qilishning holatini o‘rganish, ish beruvchilarning jamoa shartnomalari va kelishuvlarida nazarda tutilgan mehnatni muhofaza qilishga doir majburiyatlarining bajarilishini nazorat qilish;

loyihalashtirilayotgan, qurilayotgan, rekonstruksiya qilinayotgan va foydalanilayotgan ishlab chiqarish obyektlarida mehnat sharoitlarining xavfsizligi ekspertizasida, shuningdek loyihalashtirilayotgan va foydalanilayotgan ishlab chiqarish vositalarining xavfsizligi ekspertizasida ishtirok etish;

ishlab chiqarish obyektlarini va ishlab chiqarish vositalarini sinovlardan o‘tkazish hamda foydalanishga qabul qilish bo‘yicha komissiyalarning ishida mustaqil ekspertlar sifatida ishtirok etish;

tibbiy-ijtimoiy ekspert komissiyasi majlislarida ishtirok etish;

texnik jihatdan tartibga solish sohasidagi normativ hujjatlar va mehnatni muhofaza qilish masalalari bo‘yicha normativ-huquqiy hujjatlar loyihalarini ishlab chiqishda ishtirok etish;

mehnatni muhofaza qilish talablarini buzganlikda, ishlab chiqarishdagi baxtsiz hodisalar faktlarini yashirganlikda aybdor bo‘lgan shaxslarni javobgarlikka tortish to‘g‘risidagi talablar bilan tegishli organlarga murojaat etish;

xodimning mehnat majburiyatlarini bajarishi bilan bog‘liq holda mayib bo‘lishi yoki sog‘lig‘iga boshqacha tarzda shikast yetkazilishi tufayli yetkazilgan zararning o‘rnini qoplash hamda xodimlarning sog‘lig‘i va mehnatini muhofaza qilishga bo‘lgan huquqlari kamsitilgan boshqa hollarda xodimning huquqini himoya qilib sudga murojaat qilish huquqiga ega.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>34-modda. Jamoatchilik nazoratini amalga oshirish sohasidagi huquqlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari ish beruvchilar tomonidan xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar, shuningdek jamoa shartnomalari va kelishuvlari talablariga rioya etilishi ustidan jamoatchilik nazoratini ish o‘rinlarida amalga oshirish huquqiga ega.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>35-modda. Mehnat nizolarini ko‘rib chiqishda xodimlarning manfaatlarini himoya qilishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari qonunchilikda tashkil etilishi hamda faoliyat ko‘rsatishi tartibi belgilanadigan mehnat nizolari bo‘yicha komissiyalarning ishida ishtirok etish huquqiga ega.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari jamoaviy mehnat nizolarini tartibga solishda ishtirok etish huquqiga ega.

Kasaba uyushmalari, ularning birlashmalari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilish uchun yuridik hamda boshqa xizmatlarni tashkil etishi, shuningdek shartnoma asosida tegishli mutaxassislarni jalb qilishi mumkin.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari tashkilotlarning rahbarlariga hamda boshqa mansabdor shaxslariga xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlarning hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlarning aniqlangan buzilishlarini bartaraf etish to‘g‘risida ko‘rib chiqilishi majburiy bo‘lgan ko‘rsatmalar kiritishga, shuningdek tashkilotlarning rahbarlariga mazkur qoidabuzarliklarda aybdor bo‘lgan shaxslarni intizomiy javobgarlikka tortish haqida taqdimnomalar kiritishga haqli.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari mehnatga oid huquqiy munosabatlardan kelib chiquvchi talablar bo‘yicha da’volar bilan qonunchilikda belgilangan tartibda murojaat qilish chog‘ida sudlarda davlat bojini to‘lashdan ozod etiladi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>36-modda. O‘zbekiston Respublikasining xalqaro shartnomalarini tuzishda va ularning ijrosini monitoring qilishda ishtirok etishga bo‘lgan huquq</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari O‘zbekiston Respublikasining xodimlar ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan xalqaro shartnomalarini tuzishda hamda ularning ijrosini monitoring qilishda ishtirok etishi mumkin.

Kasaba uyushmalari, ularning birlashmalari tegishli davlat organlarining, ular mansabdor shaxslarining, ish beruvchilarning xodimlar ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan O‘zbekiston Respublikasining xalqaro shartnomalari ijro etilishi to‘g‘risidagi axborotini eshitishga haqli.

Kasaba uyushmalari, ularning birlashmalari boshqa mamlakatlarning kasaba uyushmalari bilan hamkorlik qilish, xalqaro va boshqa kasaba uyushmalari birlashmalariga, tashkilotlariga a’zo bo‘lish huquqiga ega.
</p>
            </div>
          </>
        )
      },
      {
        title: '7-bob. Jamoatchilik nazoratini amalga oshirish', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">7-bob. Jamoatchilik nazoratini amalga oshirish</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>37-modda. Jamoatchilik nazoratining obyekti</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlarining, ular mansabdor shaxslarining, ish beruvchilarning:

xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar ijrosini ta’minlashga;

jamoa shartnomalari va kelishuvlarini bajarishga, ijtimoiy sheriklik doirasida amalga oshiriladigan loyihalar hamda dasturlarni ro‘yobga chiqarishga doir faoliyati jamoatchilik nazorati obyektidir.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>38-modda. Murojaatlar va so‘rovlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari davlat organlariga, ularning mansabdor shaxslariga, ish beruvchilarga, ularning birlashmalariga (ittifoqlariga, uyushmalariga) arizalar, shikoyatlar va takliflar bilan murojaat qilishga, ularga so‘rovlar yuborishga haqli.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari olingan axborotni davlat organlarining, ish beruvchilarning, ular birlashmalarining (ittifoqlarining, uyushmalarining), tashkilotlar kollegial boshqaruv organlarining vakillari ishtirokida muhokama qilishga haqli.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilish uchun zarur bo‘lgan ma’lumotnomalarni hamda boshqa hujjatlarni davlat organlaridan so‘rab olishga, shuningdek so‘ralgan hujjatlarni yoki ularning tasdiqlangan ko‘chirma nusxalarini berishi shart bo‘lgan tashkilotlardan so‘rab olishga haqli.

Kasaba uyushmalarining, ular birlashmalarining, bo‘linmalarining, boshlang‘ich kasaba uyushmalari tashkilotlarining axborotga bo‘lgan huquqi, agar mazkur axborot qonunda belgilangan tartibda shaxsga doir ma’lumotlar yoxud davlat sirlarini yoki qonun bilan qo‘riqlanadigan boshqa sirni tashkil etuvchi ma’lumotlar jumlasiga kiritilgan bo‘lsa, cheklanishi mumkin.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>39-modda. Davlat organlarining, ish beruvchilarning, ular birlashmalarining (ittifoqlarining, uyushmalarining) ochiq hay’at majlislarida ishtirok etish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari davlat organlarining, ish beruvchilarning, ular birlashmalarining (ittifoqlarining, uyushmalarining) ochiq hay’at majlislarida ishtirok etish huquqiga ega bo‘lib, mazkur organlar o‘z ochiq hay’at majlislarida ularning ishtirok etishi uchun shart-sharoitlar yaratishi shart.

O‘zbekiston Respublikasi Vazirlar Mahkamasining majlislariga xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan masalalar ko‘rib chiqilayotganda kasaba uyushmalarining eng ommaviy birlashmasi vakili taklif etiladi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>40-modda. Jamoatchilik muhokamasi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar, texnik jihatdan tartibga solish sohasidagi normativ hujjatlar, davlat organlari, ish beruvchilar, ularning birlashmalari (ittifoqlari, uyushmalari) qarorlari loyihalarining jamoatchilik muhokamalarini o‘tkazishi mumkin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>41-modda. Jamoatchilik eshituvi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga daxldor bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar talablarini bajarish bo‘yicha davlat organlarining, ular mansabdor shaxslarining, ish beruvchilarning faoliyatiga taalluqli bo‘lgan masalalarni muhokama qilish maqsadida jamoatchilik eshituvlarini o‘tkazishi mumkin.

Boshlang‘ich kasaba uyushmalari tashkilotlari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga daxldor bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar talablarini bajarish bo‘yicha ish beruvchilarning faoliyatiga taalluqli bo‘lgan masalalarni muhokama qilish maqsadida jamoatchilik eshituvlarini o‘tkazishi mumkin.

Jamoatchilik eshituvlari davlat organlarining, ish beruvchilarning, ular birlashmalarining (ittifoqlarining, uyushmalarining), fuqarolik jamiyati boshqa institutlarining vakillari va kasaba uyushmalarining a’zolari ishtirokida o‘tkazilishi mumkin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>42-modda. Jamoatchilik monitoringi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlar, shuningdek jamoa shartnomalari va kelishuvlari ijrosining jamoatchilik monitoringini o‘tkazishi mumkin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>43-modda. Jamoatchilik ekspertizasi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar, texnik jihatdan tartibga solish sohasidagi normativ hujjatlar, davlat organlarining, ish beruvchilarning, ular birlashmalarining (ittifoqlarining, uyushmalarining) qarorlari loyihalarini, shuningdek jamoa shartnomalari va kelishuvlari loyihalarini jamoatchilik ekspertizasidan o‘tkazishi mumkin.

Kasaba uyushmasi, kasaba uyushmalarining birlashmasi normativ-huquqiy hujjat, texnik jihatdan tartibga solish sohasidagi normativ hujjat loyihasining mazmunidan umuman yoki uning biror-bir qismidan norozi bo‘lgan taqdirda, normativ-huquqiy hujjatni, texnik jihatdan tartibga solish sohasidagi normativ hujjatni qabul qiluvchi organga tegishli xulosa kiritishga haqli.

Kasaba uyushmasining, kasaba uyushmalari birlashmasining xodimlar huquq va qonuniy manfaatlariga to‘sqinlik qiluvchi yoki ularni cheklovchi normativ-huquqiy hujjatlarga, texnik jihatdan tartibga solish sohasidagi normativ hujjatlarga o‘zgartish va qo‘shimchalar kiritish, shuningdek bunday hujjatlarni o‘z kuchini yo‘qotgan deb topish zarurligi to‘g‘risidagi tavsiyalari va yozma so‘rovlari ko‘rib chiqilishi shart bo‘lib, ularni ko‘rib chiqish natijalari haqidagi asosli xulosalar keyinchalik kasaba uyushmasiga, kasaba uyushmalarining birlashmasiga yuboriladi.

Ish beruvchilarning qarorlari, jamoa shartnomalari va kelishuvlari loyihalarining jamoatchilik ekspertizasi kasaba uyushmalarining bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari tomonidan ham amalga oshirilishi mumkin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>44-modda. Kasaba uyushmalarining inspeksiyalarini tuzish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlarga hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlarga rioya etilishi ustidan jamoatchilik nazoratini amalga oshirish maqsadida kasaba uyushmalarining, ular birlashmalarining va bo‘linmalarining tuzilmasida kasaba uyushmalarining tegishli inspektorlari faoliyat ko‘rsatadigan inspeksiyalar (bundan buyon matnda kasaba uyushmalarining inspeksiyalari deb yuritiladi) tuzilishi mumkin.

Kasaba uyushmalarining inspeksiyasi to‘g‘risidagi nizom tegishli kasaba uyushmasi yoki kasaba uyushmalari birlashmasi tomonidan tasdiqlanadi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>45-modda. Kasaba uyushmalarining inspektorlari huquq va majburiyatlari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarining inspektorlari o‘z faoliyatini amalga oshirish chog‘ida:

davlat organlaridan, tashkilotlardan, ularning mansabdor shaxslaridan, ish beruvchilardan, ularning birlashmalaridan (ittifoqlaridan, uyushmalaridan) o‘z vazifalarini bajarish uchun zarur bo‘lgan ma’lumotnomalarni va boshqa hujjatlarni, statistik ma’lumotlarni hamda boshqa axborotni so‘rash va bepul olish;

sudlarda va mehnat nizolarini ko‘rib chiqadigan boshqa organlarda xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilish uchun o‘z tashabbusiga ko‘ra yohud xodimlarning iltimosiga binoan vakillar sifatida ishtirok etish;

xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlarga hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlarga rioya etilishi ustidan jamoatchilik nazoratini amalga oshirish maqsadida, shuningdek kasaba uyushmasi a’zolarining murojaatlari asosida tashkilotlarga, ish joylariga borish;

xodimlarning mehnat majburiyatlarini bajarishi bilan bog‘liq bo‘lgan ishlab chiqarishdagi baxtsiz hodisalarni va ularning sog‘lig‘iga boshqacha tarzda shikast yetganligini hamda kasb kasalliklarini tekshirishda belgilangan tartibda ishtirok etish huquqiga ega.

Kasaba uyushmalarining inspektorlari:

qonunchilik talablariga rioya etishi;

tashkilotlarning moliya-xo‘jalik faoliyatiga aralashmasligi;

o‘z vazifalarini amalga oshirish chog‘ida tanishishi mumkin bo‘lgan ishlab chiqarish yoki tijorat sirini tashkil etuvchi ma’lumotlarni oshkor etmasligi, shu jumladan lavozimidan ketganidan keyin ham oshkor etmasligi;

tegishli kasaba uyushmasi organiga xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar hamda texnik jihatdan tartibga solish sohasidagi normativ hujjatlarning buzilishlarini aniqlaganda, shuningdek mazkur qoidabuzarliklarni bartaraf etish hamda ularning oldini olish bo‘yicha ko‘rilgan chora-tadbirlar to‘g‘risida har chorakda axborotni taqdim etishi shart.

Kasaba uyushmalarining inspektorlari tomonidan taqdim etiladigan axborot tegishli kasaba uyushmalari, ularning birlashmalari tomonidan umumlashtiriladi va ularning rasmiy veb-saytlarida, shuningdek, zarur bo‘lgan hollarda, boshqa manbalarda har yili, kelgusi yilning 1-mayidan kechiktirmay e’lon qilinishi lozim.

Kasaba uyushmalarining inspektorlari qonunchilikka muvofiq boshqa huquqlarga ham ega bo‘lishi hamda ularning zimmasida boshqa majburiyatlar ham bo‘lishi mumkin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>46-modda. Jamoatchilik nazoratining natijalari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jamoatchilik nazoratining natijalari bo‘yicha bayonnoma, xulosa, ma’lumotnoma, ko‘rsatma, taqdimnoma shaklidagi yohud qonunchilikda nazarda tutilgan boshqa shakldagi yakuniy hujjat tayyorlanadi.

Yakuniy hujjatda bayon etilgan axborot, tavsiyalar va takliflar davlat organlari hamda ish beruvchilar tomonidan majburiy tartibda ko‘rib chiqiladi va ular yuzasidan qarorlar qabul qilinadi. Davlat organlari va ish beruvchilar ko‘rib chiqish natijalari haqida tegishli kasaba uyushmalarini, ularning birlashmalarini xabardor qiladi.

Ish beruvchilar, ularning birlashmalari (ittifoqlari, uyushmalari), ijro etuvchi hokimiyat organlari tomonidan jamoa shartnomasining, kelishuvining shartlari buzilgan taqdirda, kasaba uyushmalari, ularning birlashmalari ularga bu qoidabuzarliklarni bartaraf etish to‘g‘risida taqdimnoma yuborishga haqli bo‘lib, taqdimnoma bir haftalik muddatda ko‘rib chiqiladi. Bu qoidabuzarliklarni bartaraf etish rad qilingan yoki belgilangan muddatda kelishuvga erishilmagan taqdirda, kelishmovchiliklar qonunchilikka muvofiq ko‘rib chiqiladi.

Xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlariga taalluqli bo‘lgan normativ-huquqiy hujjatlar va texnik jihatdan tartibga solish sohasidagi normativ hujjatlar talablarining buzilishi faktlari aniqlangan taqdirda, kasaba uyushmalari, ularning birlashmalari materiallarni Davlat mehnat inspeksiyasiga yoki huquqni muhofaza qiluvchi organlarga yuborishga haqli.

Kasaba uyushmalari, ularning birlashmalari jamoatchilik nazorati natijalarini e’lon qilishga haqli.
</p>
            </div>
          </>
        )
      },
      {
        title: '8-bob. Mehnat sohasidagi ijtimoiy sheriklik', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">8-bob. Mehnat sohasidagi ijtimoiy sheriklik</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>47-modda. Mehnat sohasidagi ijtimoiy sheriklik va uning asosiy prinsiplari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Mehnat sohasidagi ijtimoiy sheriklik — kasaba uyushmalari (kasaba uyushmalarining birlashmalari) timsolida xodimlar, ish beruvchilar (ish beruvchilarning birlashmalari (ittifoqlari, uyushmalari), davlat organlari o‘rtasida xodimlarning, ish beruvchilarning va davlatning ijtimoiy-mehnat munosabatlarini tartibga solish masalalari bo‘yicha manfaatlarini kelishib olishni ta’minlashga qaratilgan o‘zaro hamkorlikdir.

Kasaba uyushmalari va ish beruvchilar, ularning birlashmalari (ittifoqlari, uyushmalari), davlat organlari o‘rtasidagi ijtimoiy sheriklik teng huquqlilik, vakillarning vakolatliligi, taraflarning manfaatlarini hurmat qilish va hisobga olish, majburiyatlar qabul qilishning ixtiyoriyligi prinsiplari asosida quriladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>48-modda. Mehnat sohasidagi ijtimoiy sheriklik taraflari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Quyidagilar mehnat sohasidagi ijtimoiy sheriklik taraflaridir:

kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari timsolida xodimlar;

ish beruvchilar, ularning birlashmalari (ittifoqlari, uyushmalari);

davlat organlari.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>49-modda. Ijtimoiy-mehnat masalalari bo‘yicha komissiyalar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Mehnat munosabatlari tartibga solinishini ta’minlash, jamoa muzokaralarini, maslahatlashuvlarini olib borish, jamoa shartnomalarining va kelishuvlarining loyihalarini tayyorlash, ularni tuzish, shuningdek ularning bajarilishi ustidan teng huquqlilik asosida nazoratni tashkil etish uchun taraflarning qaroriga binoan zarur vakolatlar berilgan ijtimoiy-mehnat masalalari bo‘yicha komissiyalar tuziladi.

Respublika darajasida doimiy asosda faoliyat ko‘rsatuvchi ijtimoiy-mehnat masalalari bo‘yicha uch tomonlama komissiya tuziladi. Kasaba uyushmalari respublika birlashmalarining, ish beruvchilar respublika birlashmalarining (ittifoqlarining, uyushmalarining), O‘zbekiston Respublikasi Vazirlar Mahkamasining, manfaatdor vazirliklarning va idoralarning vakillari komissiya a’zolari hisoblanadi.

Tarmoq darajasida doimiy asosda faoliyat ko‘rsatuvchi ijtimoiy-mehnat masalalari bo‘yicha komissiyalar tuziladi. Kasaba uyushmalari tarmoq birlashmalarining, ish beruvchilar tarmoq birlashmalarining (ittifoqlarining, uyushmalarining) vakillari, taraflarning taklifi bo‘yicha esa — O‘zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligining hamda boshqa manfaatdor vazirliklarning va idoralarning vakillari ham komissiyalar a’zolari hisoblanadi.

Hududiy darajada doimiy asosda faoliyat ko‘rsatuvchi ijtimoiy-mehnat masalalari bo‘yicha uch tomonlama komissiyalar tuziladi. Kasaba uyushmalari hududiy birlashmalarining, ish beruvchilar hududiy birlashmalarining (ittifoqlarining, uyushmalarining) vakillari, shuningdek mahalliy ijro etuvchi hokimiyat organlarining va boshqa manfaatdor davlat organlarining vakillari komissiyalar a’zolari hisoblanadi.

Tashkilotlar darajasida jamoa muzokaralarini olib borish uchun boshlang‘ich kasaba uyushmalari tashkilotining vakillaridan va ish beruvchining vakillaridan iborat ikki tomonlama komissiyalar tuziladi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>50-modda. Mehnat sohasidagi ijtimoiy sheriklik shakllari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari, ularning birlashmalari ijtimoiy sheriklikni quyidagi shaklda amalga oshirishi mumkin:

jamoa shartnomalari, kelishuvlari loyihalarini tayyorlash va ularni tuzish, shuningdek jamoa shartnomalariga, kelishuvlariga o‘zgartish va qo‘shimchalar kiritish bo‘yicha jamoa muzokaralari o‘tkazish;

jamoa shartnomalari va kelishuvlarining bajarilishi ustidan jamoatchilik nazoratini amalga oshirish;

tashkilotlarning lokal hujjatlari loyihalarini kelishib olish;

xodimlarning ijtimoiy-iqtisodiy huquq va manfaatlarini himoya qilish masalalari yuzasidan taraflarning o‘zaro maslahatlashuvlari;

tashkilotlarni ijtimoiy-iqtisodiy rivojlantirish dasturlarini ishlab chiqish va amalga oshirishda ishtirok etish;

davlat organlari huzuridagi tegishli jamoatchilik kengashlarida ishtirok etish.

Kasaba uyushmalari, ularning birlashmalari ijtimoiy sheriklikda qonunchilikda taqiqlanmagan boshqa shakllarda ham ishtirok etishga haqli.

Kasaba uyushmalari, ularning birlashmalari, bo‘linmalari va boshlang‘ich kasaba uyushmalari tashkilotlari ijtimoiy sheriklik doirasida hamkorlikdagi tadbirlarni o‘tkazish tashabbusi bilan chiqishi, ularni tashkil etishi, shuningdek ularda ishtirok etishi mumkin.
</p>
            </div>
          </>
        )
      },
      {
        title: '9-bob. Yakunlovchi qoidalar', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">9-bob. Yakunlovchi qoidalar</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>51-modda. Nizolarni hal etish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalarining faoliyati sohasidagi nizolar qonunchilikda belgilangan tartibda hal etiladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>52-modda. Kasaba uyushmalari to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Kasaba uyushmalari to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>53-modda. O‘zbekiston Respublikasining ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Quyidagilar o‘z kuchini yo‘qotgan deb topilsin:

1) O‘zbekiston Respublikasining 1992-yil 2-iyulda qabul qilingan “Kasaba uyushmalari, ularning huquqlari va faoliyatining kafolatlari to‘g‘risida”gi 638-XII-sonli Qonuni (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 9, 344-modda);
<br/>
2) O‘zbekiston Respublikasi Oliy Kengashining 1992-yil 2-iyulda qabul qilingan “Kasaba uyushmalari, ularning huquqlari va faoliyatining kafolatlari to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini amalga kiritish haqida”gi 639-XII-sonli Qarori (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 9, 345-modda);
<br/>
3) O‘zbekiston Respublikasining 2001-yil 7-dekabrda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 320-II-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2002-yil, № 1, 20-modda) I bo‘limi;
<br/>
4) O‘zbekiston Respublikasining 2016-yil 28-noyabrda qabul qilingan “Kasaba uyushmalari, ularning huquqlari va faoliyatining kafolatlari to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga o‘zgartishlar kiritish haqida”gi O‘RQ-413-sonli Qonuni (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2016-yil, № 11, 354-modda);
<br/>
5) O‘zbekiston Respublikasining 2019-yil 18-fevralda qabul qilingan “Xavfsizlik va mudofaa sohasidagi ba’zi davlat organlarining faoliyati takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish to‘g‘risida”gi O‘RQ-522-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2019-yil, № 2, 47-modda) 6-moddasi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>54-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Adliya vazirligi va boshqa manfaatdor tashkilotlar ushbu Qonunning ijrosini, ijrochilarga yetkazilishini hamda mohiyati va ahamiyati aholi o‘rtasida tushuntirilishini ta’minlasin
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>55-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin;

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini qayta ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>56-modda. Ushbu Qonunning kuchga kirishi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran uch oy o‘tgach kuchga kiradi.
</p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2019-yil 6-dekabr,
<br />
O‘RQ-637-son</p>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
            </div>
            </div>
          </>
        )
      }
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
                KASABA UYUSHMALARI TO'G'RISIDA
              </h2>
              <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
            </div>
            

          </main>
          <Footer />
        </div>
      );
    };

    export default KasabaUyushmasi;