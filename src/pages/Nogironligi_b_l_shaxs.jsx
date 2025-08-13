import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Nogironligi_b_l_shaxs = () => {
  const tabs = [
    {
      title: 'I BOB. UMUMIY QOIDALAR',
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200 leading-tight">I BOB. UMUMIY QOIDALAR</h2>
          <div className="mb-8">
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi nogironligi bo'lgan shaxslarning huquqlarini ta'minlash sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilik</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi O‘zbekiston Respublikasi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

nogironlik belgisiga ko‘ra kamsitish — maqsadi yoki natijasi siyosiy, iqtisodiy, ijtimoiy, madaniy, fuqaroviy sohada yoki boshqa sohada o‘zgalar bilan nogironligi bo‘lgan shaxslarning teng huquq va erkinliklarini e’tirof etishni yoki ro‘yobga chiqarishni inkor qilishdan iborat bo‘lgan, nogironlik sababli har qanday ajratib qo‘yish, istisno etish, chetlatish, cheklash;

nogironligi bo‘lgan bolalar (bola) — barqaror jismoniy, aqliy, sensor (sezgi) yoki ruhiy nuqsonlari tufayli hayotiy faoliyati cheklanganligi munosabati bilan davlat va jamiyat tomonidan ijtimoiy yordam ko‘rsatilishiga hamda o‘z huquqlari va qonuniy manfaatlari himoya qilinishiga muhtoj o‘n sakkiz yoshgacha bo‘lgan shaxslar;

nogironligi bo‘lgan shaxs — ijtimoiy yordam va himoyaga, jamiyat va davlatning siyosiy, iqtisodiy, ijtimoiy hayotida boshqalar bilan birga teng to‘liq va samarali ishtirok etish uchun shart-sharoitlar yaratilishiga muhtoj barqaror jismoniy, aqliy, sensor (sezgi) yoki ruhiy nuqsonlari bo‘lgan shaxs;

nogironligi bo‘lgan shaxslarni ijtimoiy himoya qilish — hayot faoliyatiga doir cheklovlarni yengib o‘tish, ularning o‘rnini qoplash (kompensatsiya qilish) uchun nogironligi bo‘lgan shaxslarga shart-sharoitlarni ta’minlaydigan hamda ularga jamiyat va davlat hayotida ishtirok etishning boshqa fuqarolar bilan teng imkoniyatlarini yaratishga qaratilgan, davlat tomonidan kafolatlangan iqtisodiy, ijtimoiy va huquqiy chora-tadbirlar tizimi;

nogironligi bo‘lgan shaxslarning jamoat birlashmalari — nogironligi bo‘lgan shaxslar tomonidan nogironligi bo‘lgan shaxslarning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilish, ularning jamiyat va davlat hayotida boshqa fuqarolar bilan teng ravishda ishtirok etish imkoniyatlarini ta’minlash maqsadida tuzilgan nodavlat notijorat tashkilotlari;

protez-ortopediya moslamalari — yo‘q bo‘lgan qo‘l-oyoqlarning yoki tana boshqa qismlarining o‘rnini bosish uchun mo‘ljallangan, organizmning buzilgan yoki yo‘qolgan funksiyalarini kompensatsiya qiluvchi moslamalar;

surdotarjima — biror-bir tildan daktil alifbosi yordamida va (yoki) imo-ishora tilida tarjima qilish usuli;

surdotexnika vositalari — eshitishdagi nuqsonlarni tuzatish va kompensatsiya qilish uchun texnik vositalar, shu jumladan aloqani va axborot uzatishni kuchaytiruvchi vositalar;

tibbiy-ijtimoiy ekspertiza — tekshiruvdan o‘tkazilayotgan shaxsning klinik-funksional, ijtimoiy, kasbiy-mehnat va psixologik ma’lumotlarini kompleks baholash asosida uning sog‘lig‘i yo‘qolganligi darajasini hamda organizmining funksiyalari turg‘un buzilganligi sababli hayot faoliyati cheklanganligi darajasini, nogironlik guruhini, nogironlikning boshlanishi sababi hamda vaqtini aniqlash, shuningdek shaxs uchun sog‘lig‘ining holatiga ko‘ra mumkin bo‘lgan mehnat faoliyati turlari va zarur mehnat sharoitlari, o‘zgalarning parvarishiga, sanatoriy-kurortda davolanishning tegishli turlariga hamda ijtimoiy himoyaga bo‘lgan ehtiyoji to‘g‘risida tavsiyalar berish;

tiflotexnika vositalari — nogironligi bo‘lgan shaxslarning ko‘rishidagi nuqsoni natijasida yo‘qolgan imkoniyatlarini tiklash va kompensatsiya qilishga qaratilgan vositalar;

shaxs hayot faoliyatining cheklanganligi — shaxsning o‘ziga o‘zi xizmat qilish, harakatlanish, yo‘lni topa olish, muloqot qilish, o‘z xulq-atvorini nazorat qilish, shuningdek o‘qish va mehnat faoliyati bilan shug‘ullanish qobiliyatini yoki imkoniyatini to‘liq yoxud qisman yo‘qotganligi.</p>
          </div>
          <div>
            <h2 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Nogironligi bo‘lgan shaxslarning huquqlarini ta'minlashning asosiy prinsiplari</h2>
            <p>Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlashning asosiy prinsiplari quyidagilardan iborat:

nogironligi bo‘lgan shaxslarning qadr-qimmatini, ularning mustaqilligini, tanlash erkinligini hurmat qilish;

nogironlik belgisiga ko‘ra kamsitilishga yo‘l qo‘ymaslik;

insonning huquq va erkinliklarini amalga oshirishdagi imkoniyatlar tengligi;

nogironligi bo‘lgan bolalarning rivojlanayotgan qobiliyatini va o‘z individualligini saqlab qolish huquqini hurmat qilish;

obyektlar va xizmatlarning qulayligi;

nogironligi bo‘lgan shaxslarni jamiyat va davlatning hayotiga jalb etish.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Nogironligi bo‘lgan shaxslarning qadr-qimmatini, ularning mustaqilligini, tanlash erkinligini hurmat qilish prinsipi</h3>
            <p>Nogironligi bo‘lgan shaxslarning qadr-qimmatini, ularning mustaqilligini, tanlash erkinligini hurmat qilish nogironligi bo‘lgan shaxslarning va ular oilalarining huquq va erkinliklarini boshqa fuqarolar bilan teng ravishda himoya qilish hamda amalga oshirish kafolatlarini belgilash orqali ta’minlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Nogironlik belgisiga ko‘ra kamsitilishga yo‘l qo‘ymaslik prinsipi</h3>
            <p>Nogironligi bo‘lgan shaxslarga nisbatan har qanday ajratib qo‘yish, istisno etish, chetlatish, cheklash yoki afzal ko‘rish, shuningdek nogironligi bo‘lgan shaxslarning obyektlar va xizmatlardan foydalanishi uchun shart-sharoitlar yaratishni rad etish taqiqlanadi.

Nogironligi bo‘lgan shaxslar uchun imkoniyatlar tengligini ta’minlashga hamda ularni jamiyat va davlat hayotiga jalb etishga qaratilgan maxsus choralar boshqa fuqarolarga nisbatan kamsituvchi choralar hisoblanmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. Nogironligi bo‘lgan shaxslarning huquq va erkinliklarini amalga oshirishdagi imkoniyatlar tengligi prinsipi</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquq va erkinliklarini amalga oshirishdagi imkoniyatlar tengligi ular uchun obyektlar hamda xizmatlardan, ijtimoiy, iqtisodiy va madaniy sohalardan, sog‘liqni saqlashdan, ta’limdan, ishga joylashishdan, shuningdek axborotdan va aloqa vositalaridan foydalanish kafolatlarini yaratishga hamda ulardan teng ravishda foydalanish imkoniyatlarini berishga doir chora-tadbirlarni amalga oshirish yo‘li bilan ta’minlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Nogironligi bo‘lgan bolalarning rivojlanayotgan qobiliyatini va o‘z individualligini saqlab qolish huquqini hurmat qilish prinsipi</h3>
            <p>Nogironligi bo‘lgan bolalar boshqa bolalar bilan teng ravishda insonning barcha huquq va erkinliklaridan to‘liq hajmda foydalanadi.

Nogironligi bo‘lgan bolalarni har tomonlama va uyg‘un rivojlantirish, ularning ijtimoiy faolligini, mehnatga bo‘lgan qiziqishiga ko‘maklashish, ta’limga, ilm-fanga, texnikaga, san’at va sportga jalb etish maqsadida nogironligi bo‘lgan bolalar manfaatlarining ustunligi ularga nisbatan bajariladigan barcha harakatlarda ustuvor hisoblanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Obyektlar va xizmatlarning qulayligi prinsipi</h3>
            <p>Obyektlar va xizmatlarning qulayligi nogironligi bo‘lgan shaxslarning binolardan, inshootlardan, transportdan, axborotdan va aloqa vositalaridan, shu jumladan axborot-kommunikatsiya texnologiyalari va tizimlaridan, shuningdek boshqa obyektlardan va aholiga ko‘rsatiladigan xizmatlardan o‘zga fuqarolar bilan teng ravishda foydalanishi uchun shart-sharoitlar yaratish yo‘li bilan ta’minlanadi.

Shaharlarni, boshqa aholi punktlarini rejalashtirishga va qurishga, turar joy va rekreatsiya zonalarini shakllantirishga, yangi qurilish uchun mo‘ljallangan loyiha yechimlarini ishlab chiqishga, binolarni, inshootlarni va ularning majmualarini rekonstruksiya qilishga, shuningdek umumiy foydalanishdagi transport vositalarini, axborotni hamda aloqa vositalarini ishlab chiqishga va ishlab chiqarishga mazkur obyektlarni nogironligi bo‘lgan shaxslarning ulardan moneliksiz foydalanishi uchun moslashtirmasdan yo‘l qo‘yilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. Nogironligi bo‘lgan shaxslarni jamiyat va davlat hayotiga jalb etish prinsipi</h3>
            <p>Nogironligi bo‘lgan shaxslarni jamiyat va davlat hayotiga jalb etish ularning ijtimoiy-siyosiy hayotda ishtirok etishini har tomonlama rag‘batlantirish hamda cheklovlarning har qanday shakllariga yo‘l qo‘ymaslik orqali amalga oshiriladi.

Davlat organlari nogironligi bo‘lgan shaxslarning jamiyat va davlat hayotiga jalb etishni ta’minlashga doir chora-tadbirlarni amalga oshiradi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasini tartibga solish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">2-bob. Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasini tartibga solish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat siyosatining asosiy yo‘nalishlari</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat

siyosatining asosiy yo‘nalishlari quyidagilardan iborat:
nogironligi bo‘lgan shaxslarning kamsitilishiga yo‘l qo‘ymaslik yuzasidan kompleks chora-tadbirlar ko‘rish;

nogironligi bo‘lgan shaxslarning sha’ni va qadr-qimmatini himoya qilish;

nogironligi bo‘lgan shaxslarning huquqlari va imkoniyatlari tengligini boshqa fuqarolar bilan teng ravishda ta’minlash;

nogironligi bo‘lgan shaxslarni jamiyat va davlat hayotiga jalb etish;

nogironligi bo‘lgan shaxslar huquqlari va qadr-qimmatini hurmat qilish masalalari bo‘yicha jamiyatda ma’rifiy-tarbiyaviy ishlarni tashkil etish;

nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilikka rioya etilishini ta’minlash;

davlat organlarining va ular mansabdor shaxslarining nogironligi bo‘lgan shaxslarning huquqlari, erkinliklari hamda qonuniy manfaatlarini himoya qilishga doir faoliyatining ochiqligi va shaffofligini ta’minlash;

nogironligi bo‘lgan shaxslarning inklyuziv ta’lim (maktabgacha, maktabdan tashqari, umumiy o‘rta, o‘rta maxsus, professional, oliy va oliy o‘quv yurtidan keyingi ta’lim) olish imkoniyatini ta’minlash;

davlat organlari va nodavlat notijorat tashkilotlari o‘rtasida nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi hamkorlikni rivojlantirish.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi vakolatlari</h3>
            <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasida davlat siyosati amalga oshirilishini ta’minlaydi;

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat dasturlarining ishlab chiqilishi, tasdiqlanishi va amalga oshirilishini ta’minlaydi;

nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilik ijrosini ta’minlaydi;

davlat boshqaruvi organlarining nogironligi bo‘lgan shaxslarning huquqlarini ta’minlashga doir faoliyati ustidan nazoratni amalga oshiradi;

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash bo‘yicha xizmatlarning davlat tomonidan kafolatlangan hajmini belgilaydi.

O‘zbekiston Respublikasi Vazirlar Mahkamasi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. Davlat boshqaruvi organlarining nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi vakolatlari

</h3>
            <p>Davlat boshqaruvi organlari o‘z vakolatlari doirasida:

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat siyosatini amalga oshiradi;

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash bo‘yicha ustuvor yo‘nalishlarni belgilaydi;

nogironligi bo‘lgan shaxslarni reabilitatsiya qilish, ijtimoiy himoya qilish va ularning huquqlarini ta’minlashga doir davlat dasturlarini shakllantiradi hamda amalga oshiradi;

nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilik ijrosini ta’minlaydi;

nogironligi bo‘lgan shaxslarni tibbiy, kasbiy va ijtimoiy reabilitatsiya qilish sohasida ilmiy tadqiqotlar o‘tkazilishini hamda mutaxassislar tayyorlanishini moliyalashtiradi va tashkil etadi;

o‘zgalarning parvarishiga va yordamiga muhtoj nogironligi bo‘lgan shaxslarga ijtimoiy xizmat ko‘rsatish bo‘yicha statsionar muassasalar tarmog‘ini rivojlantirishga doir choralar ko‘radi;

reabilitatsiya, ilmiy-ishlab chiqarish markazlarining, nogironligi bo‘lgan shaxslarga ijtimoiy xizmat ko‘rsatish statsionar muassasalarining, ixtisoslashtirilgan ta’lim muassasalarining hamda sanatoriy-kurort muassasalarining tarmog‘ini yaratadi, shuningdek nogironligi bo‘lgan shaxslarga ijtimoiy-maishiy xizmatlar ko‘rsatish bo‘yicha tashkilotlarni tashkil etadi;

davlat sog‘liqni saqlash tizimining ambulatoriya va statsionar davolash-profilaktika muassasalarida tiklash terapiyasi bo‘limlarining tarmog‘ini yaratadi.

Davlat boshqaruvi organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Mahalliy davlat hokimiyati organlarining nogironligi bo‘lgan shaxslarning huquqlarini ta'minlash sohasidagi vakolatlari</h3>
            <p>Mahalliy davlat hokimiyati organlari:

nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilik ijrosini ta’minlaydi;

nogironligi bo‘lgan shaxslarni reabilitatsiya qilish, ijtimoiy himoya qilish va ularning huquqlarini ta’minlashga doir hududiy dasturlarni shakllantiradi, tasdiqlaydi hamda amalga oshiradi;

nogironligi bo‘lgan shaxslarni ishga joylashtirish uchun ish o‘rinlarining eng kam sonini belgilaydi.

Mahalliy davlat hokimiyati organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat siyosatini amalga oshiruvchi davlat organlari faoliyatini muvofiqlashtirish va ushbu Qonunning qoidalari bajarilishini ta’minlashga qaratilgan kelishilgan sa’y-harakatlarni ishlab chiqish uchun O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash tashkil etiladi.

Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash tarkibiga nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat siyosatini amalga oshirish o‘z vakolatiga kiradigan vazirliklar, idoralar va tashkilotlar vakillari, shuningdek nodavlat notijorat tashkilotlari, shu jumladan nogironligi bo‘lgan shaxslarning jamoat birlashmalari vakillari kiritiladi.

O‘zbekiston Respublikasi Bosh vazirining o‘rinbosarlaridan biri Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash raisidir.

Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengashning majlislari zaruratga qarab, lekin yarim yilda kamida bir marta rais tomonidan chaqiriladi.

Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash to‘g‘risidagi nizom va uning shaxsiy tarkibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan tasdiqlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Fuqarolar o‘zini o‘zi boshqarish organlarining va nodavlat notijorat tashkilotlarining nogironligi bo‘lgan shaxslarning huquqlarini ta'minlashda ishtirok etishi</h3>
            <p>Fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlari nogironligi bo‘lgan shaxslarning huquqlarini ta’minlashga ko‘maklashadi.

Fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlari:

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlashga doir faoliyatni amalga oshirish chog‘ida davlatdan va belgilangan tartibda xalqaro tashkilotlardan huquqiy, uslubiy, tashkiliy hamda moliyaviy yordam olishi;

nogironligi bo‘lgan shaxslarni ijtimoiy himoya qilish bilan bog‘liq muammolarni hal etishda, shuningdek tegishli tadbirlarni moliyalashtirishda ishtirok etishi;

nogironligi bo‘lgan shaxslarning boshqa fuqarolar bilan teng ravishda binolardan, inshootlardan, transportdan, axborotdan va aloqa vositalaridan, shu jumladan axborot-kommunikatsiya texnologiyalari hamda tizimlaridan, shuningdek boshqa obyektlardan va aholiga ko‘rsatiladigan xizmatlardan foydalanishi uchun shart-sharoitlar yaratishda ishtirok etishi mumkin;

nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilikka rioya etilishi ustidan jamoatchilik nazoratini amalga oshiradi.

Fuqarolarning o‘zini o‘zi boshqarish organlari va nodavlat notijorat tashkilotlari nogironligi bo‘lgan shaxslarning huquqlarini ta’minlashga doir boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Nogironligi bo‘lgan shaxslarning jamoat birlashmalari</h3>
            <p>Nogironligi bo‘lgan shaxslarning jamoat birlashmalari nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi davlat siyosatini shakllantirishda:

davlat va xo‘jalik boshqaruvi organlariga, mahalliy davlat hokimiyati organlariga nogironligi bo‘lgan shaxslarning huquqlari hamda qonuniy manfaatlarini ta’minlash yuzasidan takliflar kiritish;

nogironligi bo‘lgan shaxslarga tegishli ijtimoiy xizmat turlarini taqdim etish samaradorligini baholashda ishtirok etish;

nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash masalalari bo‘yicha ishlab chiqilayotgan normativ-huquqiy hujjatlar loyihalariga takliflar kiritish;

Nogironligi bo‘lgan shaxslar ishlari bo‘yicha idoralararo kengash ishida va majlislarida ishtirok etish;

vakolatli davlat organlari bilan birgalikda sport, ma’rifiy va madaniy-ommaviy tadbirlarni tashkil etish yo‘li bilan ishtirok etishga haqlidir.

Davlat va xo‘jalik boshqaruvi organlari, mahalliy davlat hokimiyati organlari nogironligi bo‘lgan shaxslarning manfaatlariga daxldor qarorlarni tayyorlash hamda qabul qilishda nogironligi bo‘lgan shaxslarning jamoat birlashmalari va ularning vakolatli vakillari bilan hamkorlik qiladi.

Yuridik va jismoniy shaxslar nogironligi bo‘lgan shaxslarning jamoat birlashmalariga moddiy-texnik hamda moliyaviy yordam ko‘rsatishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Nogironligi bo‘lgan shaxslarning jamiyat va davlat hayotida to‘la huquqli tarzda ishtirok etishi uchun qulay shart-sharoitlar yaratish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">3-bob. Nogironligi bo‘lgan shaxslarning jamiyat va davlat hayotida to‘la huquqli tarzda ishtirok etishi uchun qulay shart-sharoitlar yaratish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Nogironligi bo‘lgan shaxslarning tengligini ta'minlash va kamsitilishiga yo‘l qo‘ymaslik</h3>
            <p>Nogironlik belgisi bo‘yicha har qanday kamsitish taqiqlanadi.

Teng imkoniyatlarni ta’minlash va nogironlik belgisiga ko‘ra kamsitilishiga yo‘l qo‘ymaslik uchun davlat organlari nogironligi bo‘lgan shaxslarning obyektlar hamda xizmatlardan, ijtimoiy, iqtisodiy va madaniy sohalardan, sog‘liqni saqlashdan, ta’limdan, ishga joylashishdan, shuningdek axborotdan va aloqa vositalaridan teng ravishda foydalanish imkoniyatlarini ta’minlashga doir chora-tadbirlarni amalga oshiradi.

Davlat kamsitilishning barcha shakllaridan nogironligi bo‘lgan shaxslarning huquqiy jihatdan teng ravishda va samarali himoya qilinishini kafolatlaydi.

Davlat insonning asosiy huquqlari va erkinliklaridan foydalanish imkoniyatini berishda nogironligi bo‘lgan shaxslarning kamsitilishiga yo‘l qo‘ymaslik choralarini ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Shaxsiy hayot daxlsizligi huquqi</h3>
            <p>Nogironligi bo‘lgan shaxslar qonunchilikda nazarda tutilgan tartibda tajovuzlardan himoya qilinish, o‘z shaxsiy hayoti, oilasi, uy-joyi yoki xat-xabarlari daxlsizligi, sha’ni va qadr-qimmati himoya qilinishi huquqiga ega.

Davlat nogironligi bo‘lgan shaxsning shaxsi, sog‘lig‘i holati to‘g‘risidagi ma’lumotlarning maxfiyligini ta’minlash choralarini ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Oilaga va oila muhitiga bo‘lgan huquq</h3>
            <p>Davlat nogironligi bo‘lgan bolalarning oilaga va oila muhitiga bo‘lgan huquqlarini ta’minlash, ixtisoslashtirilgan muassasalarga joylashtiriladigan nogironligi bo‘lgan bolalar sonini qisqartirish, ularning oilaviy sharoitlarda va nogironligi bo‘lgan bolalarni joylashtirishning boshqa shakllari doirasida qarindoshlarini jalb etish hisobidan muqobil parvarish qilinishini ta’minlash choralarini ko‘radi.

Davlat nogironligi bo‘lgan bolalarni parvarishlayotgan oilalarga moddiy, maslahatga oid va boshqacha tarzda yordam beradi hamda ularni qo‘llab-quvvatlaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Fuqarolik va erkin harakatlanish huquqi</h3>
            <p>Nogironligi bo‘lgan shaxslar boshqa fuqarolar bilan teng ravishda fuqarolikni olish va o‘zgartirish, shuningdek O‘zbekiston Respublikasi hududi bo‘ylab erkin harakatlanish, O‘zbekiston Respublikasiga kirish va O‘zbekiston Respublikasidan chiqib ketish huquqiga ega, bundan O‘zbekiston Respublikasi fuqarolari uchun qonunchilikda belgilangan cheklovlar mustasno.

Davlat va nodavlat notijorat tashkilotlari, shu jumladan nogironligi bo‘lgan shaxslarning jamoat birlashmalari nogironligi bo‘lgan shaxslarni ularning yoshi, jinsi va nogironlik shaklini, shuningdek shaxsiy ehtiyojlarini inobatga oluvchi qo‘llab-quvvatlash hamda xizmatlar ko‘rsatish dasturlarining mavjudligi va qulayligi to‘g‘risida xabardor qiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Uy-joyga bo‘lgan huquq</h3>
            <p>Davlat nogironligi bo‘lgan shaxslarga uy-joy qurilishi bo‘yicha davlat dasturlaridan va maxsus dasturlardan foydalanish imkoniyatini ta’minlaydi.

Davlat nogironligi bo‘lgan shaxslarga va o‘z tarkibida nogironligi bo‘lgan shaxs bor oilalarga uy-joyni qulay narxlar bo‘yicha olish uchun zarur shart-sharoitlar hamda imkoniyatlarni ta’minlaydi.

Uy-joyga yoki uy-joy sharoitlarini yaxshilashga muhtoj nogironligi bo‘lgan shaxslarni hisobga olish mahalliy ijro etuvchi hokimiyati organlari tomonidan amalga oshiriladi.

Mahalliy ijro etuvchi hokimiyati organlari tomonidan uy-joy olishga yoki uy-joy sharoitlarini yaxshilashga muhtoj bo‘lgan fuqarolarni hisobga olish ro‘yxatlarini shakllantirish chog‘ida nogironligi bo‘lgan shaxslar va o‘z tarkibida nogironligi bo‘lgan shaxs bor oilalar alohida ro‘yxatga kiritiladi.

Nogironligi bo‘lgan shaxslar uy-joy qurilishi bo‘yicha davlat dasturlari va maxsus dasturlar doirasida imtiyozli shartlar asosida uy-joy va imtiyozli ipoteka krediti olish huquqiga ega.

Nogironligi bo‘lgan shaxslarning va o‘z tarkibida nogironligi bo‘lgan shaxs bor oilalarning elektron onlayn-auksionlar vositasida yer uchastkalarini sotib olish bilan bog‘liq xarajatlarining o‘rni O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilangan tartibda qoplanadi.

Nogironligi bo‘lgan shaxslarga uy-joyni taqsimlashda imkoniyatga qarab, obyektlar va xizmatlarning qulayligi prinsipiga rioya etilgan holda, ish joyiga, tibbiyot va reabilitatsiya muassasalariga yaqin bo‘lgan uy-joy beriladi.

Nogironligi bo‘lgan shaxslarga davlat uy-joy fondining ko‘p kvartirali uylaridagi turar joylar ularning xohishiga ko‘ra pastki qavatlardan berilishi mumkin. Yuqori qavatlardagi kvartiralarga ega bo‘lgan nogironligi bo‘lgan shaxslar bo‘sh turar joylar mavjud bo‘lgan taqdirda ularni pastki qavatlarda joylashgan turar joylarga almashtirishga haqli.

Nogironligi bo‘lgan shaxslarga yoki o‘z tarkibida nogironligi bo‘lgan shaxs bor oilalarga beriladigan turar joylar obyektlar va xizmatlarning qulayligi prinsipiga muvofiq bo‘lishi kerak.

Nogironligi bo‘lgan shaxslar egallab turgan turar joylar nogironligi bo‘lgan shaxslarning erkin harakatlanishi va foydalanishi uchun maxsus vositalar hamda moslamalar bilan jihozlangan bo‘lishi kerak. Mazkur turar joylarni jihozlash mahalliy ijro etuvchi hokimiyati organlari tomonidan amalga oshiriladi.

Nogironligi bo‘lgan shaxslar imtiyozli shartlar asosida ijtimoiy uy-joy olish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Ijtimoiy infratuzilma obyektlarini nogironligi bo‘lgan shaxslarning ehtiyojlariga rioya etgan holda loyihalashtirish, qurish va rekonstruksiya qilish</h3>
            <p>Davlat boshqaruvi organlari, mahalliy davlat hokimiyati organlari va tashkilotlar nogironligi bo‘lgan shaxslarning, shu jumladan o‘rindiqli aravachalardan hamda yetaklovchi itlardan foydalanuvchi shaxslarning barcha ijtimoiy infratuzilma obyektlariga (turar joylarga, jamoat va ishlab chiqarish binolariga, imoratlar va inshootlarga, sog‘liqni saqlash va sport obyektlariga, madaniy-tomosha muassasalariga hamda boshqa muassasalarga) moneliksiz kirishi uchun shart-sharoitlar yaratishi shart.

Tashkiliy-huquqiy shaklidan qat’i nazar, jamoat binolari hamda inshootlarini loyihalashtirish, qurish va rekonstruksiya qilish nogironligi bo‘lgan shaxslarning ehtiyojlari inobatga olingan holda amalga oshirilishi kerak.

Jamoat binolari hamda inshootlarini loyihalashtirish, qurish va rekonstruksiya qilish chog‘ida nogironligi bo‘lgan shaxslar foydalanishi uchun avtotransport saqlash joylarini maqbul miqdorda hamda o‘lchamda barpo etish bo‘yicha choralar nazarda tutilishi kerak.

Uy-joylar va ijtimoiy infratuzilma obyektlarida liftlarni sotib olish hamda o‘rnatish chog‘ida, tashkiliy-huquqiy shaklidan qat’i nazar, tegishli tashkilotlar liftlarning nogironligi bo‘lgan shaxslarning barcha toifalari uchun qulay bo‘lishini va ulardan foydalanish imkoniyatini ta’minlashi shart.

Ijtimoiy-maishiy va madaniy maqsadlarga mo‘ljallangan qurilish obyektlarini hamda rekonstruksiya qilinayotgan obyektlarni foydalanishga qabul qilish nogironligi bo‘lgan shaxslarning jamoat birlashmalari vakillari davlat qabul komissiyasi tarkibiga kiritilgan holda amalga oshiriladi.

Nogironligi bo‘lgan shaxslarning obyektlar va xizmatlardan foydalanishi uchun shart-sharoitlar yaratish qurilish loyihalarining majburiy qismidir. Binolarni, inshootlarni va ularning majmualarini qurish hamda rekonstruksiya qilishga doir normalar va qoidalar nogironligi bo‘lgan shaxslarning jamoat birlashmalari fikr-mulohazalarini hisobga olgan holda ishlab chiqilishi kerak.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Transport vositalarining va yo‘l infratuzilmasining qulayligi</h3>
            <p>Transport vositalarining va yo‘l infratuzilmasining qulayligi aholiga transport xizmati ko‘rsatuvchi tashkilotlar (tashkiliy-huquqiy shaklidan qat’i nazar) tomonidan nogironligi bo‘lgan shaxslarning jamoat birlashmalari ishtirokida:

nogironligi bo‘lgan shaxslarga qulaylik yaratish uchun jamoat transportining maxsus vositalar bilan jihozlanishini, shu jumladan alohida joylar jihozlanishini, eshitish qobiliyati zaif bo‘lganlar uchun axborot tablolari o‘rnatilishini hamda bekatlarning ovozli tarzda e’lon qilinishini;

shahar va qishloq jamoat transporti vositalarining yo‘nalishlari hamda ko‘rsatkichlari keskin farqlanuvchi rangdagi yirik harflar bilan tasvirlanishini;

yo‘lovchi poyezdlarining vagonlari maxsus o‘rinlar bilan va perronlar, shuningdek temir yo‘l vokzallari maxsus mexanik panduslar bilan jihozlanishini;

to‘xtash maydonchalarini shaharsozlik normalari va qoidalarini hisobga olgan holda jihozlash, shu jumladan ularga panduslar va tutqichlar o‘rnatish, transport vositasining kirish eshiklari oldidagi maydonchalarda taktil qoplamalarini qo‘llash, shuningdek elektron axborot tablolarini o‘rnatish;

piyodalar o‘tish joylari va chorrahalarini, ko‘chalar hamda umumiy foydalanishdagi yo‘llarni nogironligi bo‘lgan shaxslarning ehtiyojlariga muvofiq moslashtirish;

chorrahalarda tovushli va vizual signalizatsiya tizimlarini o‘rnatish;

aeroportlarda va aerovokzallarda, yirik temir yo‘l stansiyalarida, shuningdek metroda nogironligi bo‘lgan shaxslarni transport vositalarigacha kuzatib borish;

nogironligi bo‘lgan shaxslar uchun maxsus kutish joylarini jihozlash yo‘li bilan ta’minlanadi.

Mahalliy transport vositalarini ishlab chiqish va ishlab chiqarish nogironligi bo‘lgan shaxslarning ehtiyojlari inobatga olingan holda amalga oshirilishi kerak.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Mehmonxona xonalarining qulayligi</h3>
            <p>Mehmonxonalarning mulkdorlari umumiy xonalar fondining kamida bitta xonasini o‘rindiqli aravachadan foydalanadigan nogironligi bo‘lgan shaxslar uchun qulay tarzda jihozlashi, shuningdek eshitish va ko‘rish bo‘yicha nogironligi bo‘lgan shaxslarning tegishli ehtiyojlariga muvofiq e’lonlar uchun displeylar hamda ovozli qurilmalar o‘rnatilishini ta’minlashi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Axborotdan foydalanish</h3>
            <p>Davlat nogironligi bo‘lgan shaxslarga axborot olish huquqlari amalga oshirilishini kafolatlaydi hamda nogironligi bo‘lgan shaxslarni keng omma uchun mo‘ljallangan, qulay formatlardagi va nogironlikning turli shakllari hisobga olingan texnologiyalardan foydalangan holda axborot bilan ta’minlaydi.

Davlat odamlar o‘rtasidagi muloqot vositalari sifatida imo-ishora tilidan, muloqotning boshqa muqobil shakllaridan foydalanilishiga ko‘maklashadi.

Davlat nogironligi bo‘lgan shaxslarga televizion dasturlar, filmlar, teatr tadbirlari va boshqa madaniy tadbirlarning ular uchun qulay formatlarda bo‘lishini ta’minlaydi. Davlat telekanallarida yangiliklar ko‘rsatuvlarining surdotarjima yoki subtitrlar bilan namoyish etilishi ta’minlanadi.

Davlat kommunikatsiyaning muqobil shakllaridan (Brayl harflaridan va ovozli shakllardan) foydalangan holda badiiy adabiyotlar, maktab darsliklari, boshqa didaktik materiallar va o‘qitish vositalari nashr etilishini ta’minlaydi.

Davlat organlari va tashkilotlar o‘z rasmiy veb-saytlariga joylashtirilgan axborot bilan qulay tarzda tanishish hamda xizmatlardan foydalanish uchun nogironligi bo‘lgan shaxslarga qo‘shimcha imkoniyatlarni yaratishi shart.

Davlat organlari va tashkilotlar axborot-kommunikatsiya uskunalarining hamda axborot ta’minotining davlat xaridlariga davlat buyurtmasini amalga oshirishda nogironligi bo‘lgan shaxslarning barcha toifalari uchun qulaylik mezonlariga rioya etilishini hisobga olishi kerak.

Davlat organlari va tashkilotlar, zarur bo‘lgan taqdirda, mazkur davlat organining yoki tashkilotning vakili va eshitishida nuqsonlari mavjud nogironligi bo‘lgan shaxs o‘rtasidagi muloqotni ta’minlash uchun imo-ishora tili tarjimonini shartnoma bo‘yicha yollaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Madaniy hayotda ishtirok etishga, dam olishga va sport bilan shug‘ullanishga bo‘lgan huquq</h3>
            <p>Davlat organlari va tashkilotlar nogironligi bo‘lgan shaxslarning moddiy madaniy meros obyektlaridan, turistik hamda sport obyektlaridan va inshootlaridan, shuningdek dam olish obyektlaridan foydalanishini ta’minlaydi.

Teatrlar, muzeylar, kinoteatrlar, axborot-kutubxona muassasalari va axborot-resurs markazlari, madaniyat va istirohat bog‘lari nogironligi bo‘lgan shaxslar foydalanishi uchun qulay bo‘lishi kerak.

Nogironligi bo‘lgan shaxslarning moddiy madaniy meros obyektlaridan, turistik va sport obyektlari hamda inshootlaridan, shuningdek tashkilotning dam olish obyektlaridan foydalanishini ta’minlash maqsadida, tashkiliy-huquqiy shaklidan qat’i nazar, tashkilotlar nogironligi bo‘lgan shaxslarning jamoat birlashmalari ishtirokida:

nogironligi bo‘lgan shaxslarning va ular oilalarining madaniy, sport hamda turistik tadbirlarda ishtirok etishiga ko‘maklashadi;

nodavlat notijorat tashkilotlari bilan sheriklikda madaniy, sport va ko‘ngilochar tadbirlar o‘tkazilishini tashkil etadi;

nogironligi bo‘lgan shaxslarga sport bilan shug‘ullanish, sport musobaqalarini o‘tkazish va ularda ishtirok etish uchun zarur shart-sharoitlar hamda imkoniyatlar yaratadi;

faoliyati nogironligi bo‘lgan shaxslarni sport bilan shug‘ullanishga va jamiyatning madaniy hayotiga jalb etishga qaratilgan nodavlat notijorat tashkilotlariga ko‘maklashadi;

nogironligi bo‘lgan shaxslarning barcha darajalardagi sport tadbirlarida ishtirok etishini targ‘ib qilish va rag‘batlantirishda ishtirok etadi.

Tashkiliy-huquqiy shaklidan qat’i nazar, tashkilotlar nogironligi bo‘lgan shaxslarning sport inshootlari obyektlaridan, dam olish obyektlaridan, shuningdek turistik obyektlardan foydalanishini, shu jumladan bepul asosda foydalanishini ta’minlash uchun shart-sharoitlar yaratadi.

Davlat mulki bo‘lgan sport obyektlari va inshootlarining sport zallari hamda xonalarini nogironligi bo‘lgan shaxslarga sport bilan shug‘ullanish uchun bepul asosda taqdim etiladi, bundan qonunchilikda nazarda tutilgan hollar mustasno.

Davlat sportning paralimpiya turlari bo‘yicha murabbiylar, hakamlar hamda boshqa mutaxassislarni o‘qitish va tayyorlashni ta’minlaydi.

Davlat organlari nogironligi bo‘lgan shaxslarning sport bilan shug‘ullanishi uchun shart-sharoitlar yaratish va ularni sport bilan shug‘ullanishga jalb etishga doir dasturlarni nodavlat notijorat tashkilotlari, shu jumladan nogironligi bo‘lgan shaxslarning jamoat birlashmalari bilan birgalikda har yili ishlab chiqadi hamda amalga oshiradi.

Davlat nogironligi bo‘lgan shaxslarning sport bilan shug‘ullanishini moddiy jihatdan qo‘llab-quvvatlash tizimini yaratadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Murojaat qilish huquqi</h3>
            <p>Nogironligi bo‘lgan shaxslar davlat organlariga, tashkilotlarga va ularning mansabdor shaxslariga yakka tartibda yoki jamoa bo‘lib murojaat qilish huquqiga ega.

Davlat organlari, tashkilotlar va ularning mansabdor shaxslari murojaatlarni ko‘rib chiqayotganda O‘zbekiston Respublikasining Konstitutsiyasi hamda qonunlari talablariga rioya etishi, ushbu murojaatlarning to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishi uchun choralar ko‘rishi, shuningdek nogironligi bo‘lgan shaxslarning buzilgan huquqlari, erkinliklari tiklanishini hamda ularning qonuniy manfaatlari himoya qilinishini ta’minlash yuzasidan o‘z vakolatlari doirasida choralar ko‘rishi shart.

Davlat organlari, tashkilotlar va ularning mansabdor shaxslari nogironligi bo‘lgan shaxslarning murojaatlar (arizalar, shikoyatlar, takliflar) bilan kirishi uchun quyidagilar vositasida zarur shart-sharoitlar yaratishi shart:

shaxslararo muloqot vositasi sifatida imo-ishora tilini e’tirof etish va qo‘llab-quvvatlash, shuningdek uni rivojlantirish hamda jamiyat va davlat hayot faoliyatining turli sohalarida qo‘llash choralarini ko‘rish;

nogironligi bo‘lgan shaxslarning huquqlarini himoya qilish va amalga oshirish uchun zarur bo‘lgan hollarda surdotarjima xizmatlarini ko‘rsatish;

nogironligi bo‘lgan shaxslar tomonidan o‘z murojaatini imzolash uchun faksimil imzodan foydalanish.

Eshitishi va nutqi bo‘yicha nogironligi bo‘lgan shaxslarga:

tergov harakatlarini amalga oshirishda yoki jinoyat, fuqarolik, ma’muriy va iqtisodiy ishlar bo‘yicha sud protsesslarida ishtirok etish chog‘ida;

hujjatlarni yoki bitimlarni notarial tartibda rasmiylashtirishda;

avtomobilni boshqarish ko‘nikmalariga yoki kompyuter savodxonligiga o‘qish chog‘ida;

davlat xizmatlari ko‘rsatish chog‘ida surdotarjimon xizmatlari ko‘rsatiladi.

Eshitishi va nutqi bo‘yicha nogironligi bo‘lgan shaxslarga surdotarjimon xizmatlari qonunchilikda nazarda tutilgan boshqa hollarda ham ko‘rsatilishi mumkin.

Davlat har yili surdotarjimonlar, surdopedagoglar, defektologlar va logopedlar tayyorlanishini ta’minlaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Nogironligi bo‘lgan shaxsning faksimil imzosi</h3>
            <p>Nogironligi bo‘lgan shaxsning faksimil imzosi — sog‘lig‘ining holatiga ko‘ra (ko‘rishning buzilishi, qo‘l-oyoqlar yo‘qligi, harakatlarni muvofiqlashtirishning buzilishi, falajlik) o‘z qo‘li bilan imzo qo‘yish imkoniyatiga ega bo‘lmagan nogironligi bo‘lgan shaxsning o‘z qo‘li bilan qo‘ygan imzosi o‘rnini bosadigan, maxsus tayyorlangan shtamp (klishe).

Nogironligi bo‘lgan shaxsning faksimil imzosi nogironligi bo‘lgan shaxs tomonidan faqat, agar u o‘zining jismoniy nuqsonlari sababli zarur hujjatlarni imzolash chog‘ida o‘z qo‘li bilan imzo qo‘yish imkoniyatiga ega bo‘lmasa, qo‘llanilishi mumkin.

Faksimil imzo nogironligi bo‘lgan shaxs uchun tayyorlanadi va uning tomonidan butun hayoti davomida foydalaniladi. Faksimil imzo yo‘qolgan taqdirda uning dublikati tayyorlanadi.

Hech kim faksimil imzodan foydalanishi munosabati bilan o‘z fuqarolik huquqlarini amalga oshirishda cheklanishi mumkin emas.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Jamiyatning ongida nogironligi bo‘lgan shaxslarning huquqlari va qadr-qimmatiga hurmatni shakllantirish hamda mustahkamlash</h3>
            <p>Davlat organlari jamiyatning ongida nogironligi bo‘lgan shaxslarning huquqlari va qadr-qimmatiga hurmatni shakllantirish hamda mustahkamlash maqsadida:

nogironligi bo‘lgan shaxslarning faol ijtimoiy roli ijobiy qabul qilinishiga ommaviy axborot vositalari va matbuot vositasida ko‘maklashishni;

nogironligi bo‘lgan shaxslarning salohiyatini hamda jamiyat va davlat taraqqiyotiga qo‘shayotgan hissasini targ‘ib qilishni;

nogironligi bo‘lgan shaxslarning ijtimoiy integratsiyasiga imkon beruvchi timsolini ijobiy va bag‘rikenglik asosida gavdalantirish yo‘nalishidagi ommaviy axborot vositalarini rag‘batlantirishni;

nogironligi bo‘lgan shaxslarga nisbatan qotib qolgan qarashlarni va xurofotlarni yo‘q qilish bo‘yicha chora-tadbirlar amalga oshirish;

ta’limning barcha bosqichlarida, shu jumladan bolalarda go‘daklik yoshidan boshlab nogironligi bo‘lgan shaxslarga nisbatan hurmat bilan munosabatda bo‘lishni tarbiyalashni;

nogironligi bo‘lgan shaxslarning qadr-qimmati va qobiliyati hamda ularning ish joyidagi va mehnat bozoridagi jamoa yutuqlariga qo‘shayotgan hissasi e’tirof etilishiga ko‘maklashishni;

nogironligi bo‘lgan shaxslarga va ularning huquqlariga bag‘ishlangan tarbiyaviy-tanishtiruv dasturlarini ishlab chiqish hamda joriy etishni ta’minlaydi.

Davlat har yili quyidagi davlat buyurtmalarini joylashtiradi:

jamiyatda nogironligi bo‘lgan shaxslarga nisbatan qotib qolgan qarashlarni va xurofotlarni bartaraf etishga, shuningdek nogironligi bo‘lgan shaxslarning ijobiy timsolini shakllantirishga qaratilgan badiiy, hujjatli filmlar, spektakllar tayyorlanishiga doir;

nogironligi bo‘lgan shaxslarning salohiyatini hamda jamiyat va davlat hayotiga qo‘shadigan hissasini targ‘ib qilishga, shuningdek nogironligi bo‘lgan shaxslarning ijobiy timsolini yaratishga qaratilgan ijtimoiy reklama axborotini hamda maqolalarni tayyorlash va ommaviy axborot vositalarida yoritishga doir.

Nogironligi bo‘lgan shaxslar to‘g‘risidagi ijobiy tasavvurga qaratilgan ijtimoiy reklama telekanallarda, matbuotda va boshqa ommaviy axborot vositalarida joylashtiriladi.

Huquq va gumanitar yo‘nalishdagi oliy ta’lim muassasalarida nogironligi bo‘lgan shaxslarning huquqlari bo‘yicha kurslar o‘tkaziladi va o‘quv fanlari o‘rgatiladi.</p>
          </div>
        </>
      )
    },
    { 
      title: '4-bob. Fuqaroni nogironligi bo‘lgan shaxs deb e’tirof etish, nogironligi bo‘lgan shaxslarni reabilitatsiya va abilitatsiya qilish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">4-bob. Fuqaroni nogironligi bo‘lgan shaxs deb e’tirof etish, nogironligi bo‘lgan shaxslarni reabilitatsiya va abilitatsiya qilish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Tibbiy-ijtimoiy ekspertiza</h3>
            <p>Fuqaroni nogironligi bo‘lgan shaxs deb topish — tibbiy-ijtimoiy ekspert komissiyalari tomonidan, o‘n sakkiz yoshgacha bo‘lgan bolalarni nogironligi bo‘lgan shaxs deb topish esa — pediatriya tibbiy-ijtimoiy ekspert komissiyalari tomonidan amalga oshiriladi.

Shaxs tibbiy-ijtimoiy ekspertizaga davlat tibbiyot muassasasi tomonidan yuboriladi, bundan ushbu moddaning uchinchi qismida nazarda tutilgan hollar mustasno.

Tashkiliy-huquqiy shaklidan qat’i nazar, tibbiyot tashkilotlari nogironligi belgilari aniq ko‘rinib turgan shaxslarni klinik-funksional ma’lumotlarni olishga doir qo‘shimcha tekshiruvlarni o‘tkazmasdan turib, tibbiy-ijtimoiy ekspertizaga yuborishga haqli.

Agar shaxs sog‘lig‘ining holatiga ko‘ra tibbiy-ijtimoiy ekspert komissiyasiga borish imkoniga ega bo‘lmasa va bu tibbiyot muassasasining xulosasi bilan tasdiqlansa, tibbiy-ijtimoiy ekspertiza uyda yoki shaxs davolanishda bo‘lgan statsionarda o‘tkazilishi mumkin.

Tibbiy-ijtimoiy ekspert komissiyasining majlislarida mahalliy mehnat organlarining, mahalliy davlat hokimiyati organlarining, kasaba uyushmalarining, sug‘urta tashkilotlarining va boshqa tashkilotlarning vakillari, shuningdek nogironligi bo‘lgan shaxslarning jamoat birlashmalari vakillari ishtirok etishi mumkin.

Tekshiruvdan o‘tkazish tibbiy hujjatlar qabul qilingan kundan e’tiboran o‘n kalendar kundan kechiktirmay tibbiy-ijtimoiy ekspert komissiyalari tomonidan o‘tkaziladi. Tibbiy-ijtimoiy ekspertizadan o‘tish uchun yuborilgan shaxs tibbiy-ijtimoiy ekspert komissiyasi tomonidan tekshiruvdan o‘tkazish kuni to‘g‘risida tibbiy hujjatlar qabul qilingan kundan e’tiboran ikki ish kuni ichida xabardor qilinadi. Nogironlik aniqlangan taqdirda, tibbiy-ijtimoiy ekspert komissiyalari tomonidan hujjatlar qabul qilingan sanadan boshlab fuqaro nogironligi bo‘lgan shaxs deb e’tirof etiladi.

Tibbiy-ijtimoiy ekspertiza natijalari bo‘yicha nogironligi bo‘lgan shaxs deb topilgan fuqaroga — nogironlik guruhi, uning belgilanish sababi va muddatlari, o‘n sakkiz yoshgacha bo‘lgan bolalarga esa qayta tekshiruvdan o‘tish muddati bilan — “Nogironligi bo‘lgan bolalar” toifasi belgilanadi.

Qayta tekshiruvdan o‘tkazish muddati ko‘rsatilmaydigan nogironlik inson a’zolari funksiyalarining hamda organizmi tizimlarining barqaror, asliga qaytarib bo‘lmas tarzdagi morfologik o‘zgarishlari va buzilishlari mavjud bo‘lgan, amalga oshirilgan reabilitatsiya tadbirlarining samarasizligi oqibatida kasallikning kechishi va sog‘liqning tiklanishini, ijtimoiy moslashuvni yaxshilash mumkin bo‘lmagan taqdirda, belgilangan tartibda tasdiqlangan kasalliklar va anatomik nuqsonlar ro‘yxatiga muvofiq belgilanadi.

Ko‘rsatilgan muddatlardan oldin qayta tekshiruvdan o‘tkazish sog‘liqning holati va hayot faoliyatining cheklanganlik darajasi o‘zgarganda yoki tibbiy-ijtimoiy ekspert komissiyalari asoslanmagan qaror qabul qilganligi faktlari aniqlanganda yoxud yuqori turuvchi tibbiy-ijtimoiy ekspert komissiyalari tomonidan nazorat vazifasi bajarilganda amalga oshiriladi.

Tibbiy-ijtimoiy ekspert komissiyalari zarur uskunalar bilan jihozlangan davlat tibbiyot muassasalariga bepul tekshiruvlar o‘tkazish uchun biriktirib qo‘yiladi.

Davlat boshqaruvi organlari va boshqa davlat tashkilotlari nogironlikning yuzaga kelishiga ta’sir etuvchi omillar hamda shart-sharoitlarni o‘rganish maqsadida nogironlikka olib keluvchi kasalliklar yuzaga kelishining ishlab chiqarish, ijtimoiy, ekologik va boshqa sabablarini tahlil qilishni o‘z vakolatlari doirasida amalga oshiradi.

Tibbiy-ijtimoiy ekspert komissiyalari nogironligi bo‘lgan shaxslarning ma’lumotlar bazasini shakllantirish, nogironlikni hisobga olish va nogironlik tuzilmasini tahlil qilish maqsadida nogironligi bo‘lgan shaxslarning (bolalarning) shaxsiy yig‘majildlarini yuritadi.

Nogironlikni belgilash mezonlari va mexanizmlari O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Nogironligi bo‘lgan shaxslarni reabilitatsiya va abilitatsiya qilish</h3>
            <p>Nogironligi bo‘lgan shaxslarni reabilitatsiya qilishning maqsadi ularga to‘laqonli hayot tarzini yuritish hamda o‘z huquqlari va potensial imkoniyatlarini amalga oshirish imkonini beradigan ijtimoiy maqomini, o‘ziga o‘zi xizmat ko‘rsatishga va kasbiy faoliyatning har xil turlariga oid qobiliyatini tiklashdan iboratdir.

Davlat nogironligi bo‘lgan shaxslarning davlat muassasalarida tibbiy, ijtimoiy, kasbiy hamda jismoniy reabilitatsiya va abilitatsiya qilinishini kafolatlaydi.

Tibbiy reabilitatsiya qilish nogironligi bo‘lgan shaxslar a’zolarining hamda organizmi tizimlarining buzilgan va (yoki) yo‘qolgan funksiyalarini saqlab qolishga, qisman yoki to‘liq tiklashga qaratilgan tibbiy xizmatlar majmuidir.

Ijtimoiy reabilitatsiya qilish nogironligi bo‘lgan shaxslarning hayot faoliyati cheklanganligini yengib o‘tishi uchun shart-sharoitlar yaratishga, ijtimoiy maqomini, o‘ziga o‘zi xizmat ko‘rsatish, mustaqil yashash imkoniyatlarini tiklashga, shuningdek ularni jamiyatda oilaviy hayotning odatiy sharoitlariga qaytarishga qaratilgan chora-tadbirlar majmuidir.

Kasbiy reabilitatsiya qilish nogironligi bo‘lgan shaxslarni kasbga yo‘naltirishga, kasbga o‘qitishga va ishga joylashtirishga, shuningdek ularning boy berilgan kasbiy bilimlari, mahorati va ko‘nikmalarini tiklashga qaratilgan chora-tadbirlar majmuidir.

Nogironligi bo‘lgan shaxslar organizmining buzilgan yoki vaqtincha yo‘qolgan funksiyalarini hamda ularning ijtimoiy va kasbiy faoliyatga bo‘lgan qobiliyatini jismoniy tarbiya va sport vositalari hamda usullaridan foydalangan holda tiklash (tuzatish va kompensatsiya qilish) jismoniy reabilitatsiya qilishdir.

Nogironligi bo‘lgan shaxslarni reabilitatsiya va abilitatsiya qilish nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturiga muvofiq tashkil etiladi.

Abilitatsiya qilish jamiyat hayotiga moslashtirish uchun organizmning yo‘q bo‘lgan (tug‘ma) va (yoki) rivojlanmagan funksiyalarini shakllantirishga qaratilgan tibbiy, ijtimoiy, pedagogik, psixologik jihatdan tuzatish va boshqa tuzatish chora-tadbirlari majmuidir.

Abilitatsiya qilish bo‘yicha xizmatlar xavf guruhidagi bolalarga ko‘rsatiladigan tibbiy-ijtimoiy, psixologik va pedagogik jihatdan tuzatish xizmatlarini, shuningdek boshqa tuzatish xizmatlarini o‘z ichiga oladi.

Xavf guruhidagi bolalar jumlasiga erta aralashuv hamda zarur tibbiy, ijtimoiy, psixologik, pedagogik jihatdan tuzatishga yoki boshqa tuzatishga oid ko‘mak ko‘rsatilmaganda jismoniy va (yoki) ruhiy rivojlanishida yuqori darajadagi ortda qolish ehtimoli mavjud uch yoshgacha bo‘lgan bolalar kiradi.

Abilitatsiya qilish bo‘yicha xizmatlar, tashkiliy-huquqiy shaklidan qat’i nazar, tibbiy-ijtimoiy tashkilotlar, shuningdek tibbiy-ijtimoiy xizmatlar ko‘rsatishga doir ixtisoslashtirilgan tashkilotlar tomonidan ko‘rsatiladi.

Nogironligi bo‘lgan shaxslarni (bolalarni) abilitatsiya qilish ularning ehtiyojlariga imkon qadar moslashtirilgan hajmda, malakali xodimlar tomonidan amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi</h3>
            <p>Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi tibbiy-ijtimoiy ekspertiza asosida ishlab chiqilgan, nogironligi bo‘lgan shaxs uchun maqbul reabilitatsiya choralari majmui bo‘lib, ushbu choralar organizmning buzilgan yoki yo‘qolgan funksiyalarini, shuningdek nogironligi bo‘lgan shaxs mehnat faoliyatining ayrim turlarini bajarish qobiliyatini tiklashga, kompensatsiya qilishga qaratilgan tibbiy, ijtimoiy, kasbiy va jismoniy reabilitatsiya choralarini amalga oshirishning ayrim turlari, shakllari, hajmlari, muddatlari hamda tartibini o‘z ichiga oladi.

Nogironligi bo‘lgan shaxs uchun tibbiy-ijtimoiy ekspertiza o‘tkazilganidan keyin o‘n kun ichida nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi ishlab chiqiladi.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi davlat organlari va tashkilotlari, fuqarolarning o‘zini o‘zi boshqarish organlari, shuningdek tashkiliy-huquqiy shaklidan qat’i nazar, boshqa tashkilotlar tomonidan bajarilishi shart.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi tibbiy, ijtimoiy, ta’limga oid va kasbiy sohalardagi mutaxassislar tomonidan o‘tkaziladigan ko‘p sohalar bo‘yicha baholash asosida ishlab chiqiladi.

Tashkiliy-huquqiy shaklidan qat’i nazar, davlat organlari va tashkilotlar, fuqarolarning o‘zini o‘zi boshqarish organlari, shuningdek boshqa tashkilotlar nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturlarida nazarda tutiladigan chora-tadbirlarning so‘zsiz, o‘z vaqtida va to‘liq bajarilishini ta’minlaydi.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturini tuzishda tibbiy-ijtimoiy ekspert komissiyasi shifokorlari nogironligi bo‘lgan shaxsni ushbu Qonunda berilayotgan huquqlari to‘g‘risida xabardor qilishi shart.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturini bajarish bo‘yicha tadbirlarni moliyalashtirish O‘zbekiston Respublikasining Davlat budjeti mablag‘lari va qonunchilikda taqiqlanmagan boshqa manbalar hisobidan amalga oshiriladi.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturida ko‘rsatilgan tadbirlarni o‘tkazish chog‘ida nogironligi bo‘lgan shaxs quyidagi huquqlarga ega:

reabilitatsiyani o‘tkazishda ishtirok etuvchi shaxslar tomonidan o‘ziga nisbatan teng, hurmat bilan munosabatda bo‘linishi;

o‘z huquqlari va imkoniyatlari, shuningdek reabilitatsiyadan o‘tish xususiyati, sifati, shart-sharoitlari haqida to‘liq hamda ishonchli axborot olish;

nodavlat notijorat tashkilotlari, shu jumladan nogironligi bo‘lgan shaxslarning jamoat birlashmalari vakillarini reabilitatsiya o‘tkazishning har qanday bosqichida jalb etish.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturi nogironligi bo‘lgan shaxs uchun tavsiya xususiyatiga ega. Ushbu shaxs reabilitatsiya chora-tadbirlarining u yoki bu turidan, shakli va hajmidan, shuningdek dasturni amalga oshirishdan butunlay voz kechishga haqli. Nogironligi bo‘lgan shaxs o‘zining reabilitatsiya qilishning muayyan texnik vositasi yoki boshqa vositasi yoxud turi, shu jumladan avtomobillar, o‘rindiqli aravachalar, protez-ortopediya moslamalari, maxsus harfli matbaa nashrlari, ovoz kuchaytiruvchi apparatlar, signalizatorlar, subtitrli yoki surdotarjimali videomateriallar va boshqa shu kabi vositalar bilan ta’minlanishi to‘g‘risidagi masalani mustaqil ravishda hal qilishga haqlidir.

Reabilitatsiya qilishning texnik vositalari va xizmatlari nogironligi bo‘lgan shaxslarga, qoida tariqasida, natura shaklida taqdim etiladi.

Agar nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturida nazarda tutilgan reabilitatsiya qilishning texnik vositasini yoxud xizmatni unga taqdim etishning imkoni bo‘lmasa yoki nogironligi bo‘lgan shaxs o‘z hisobidan tegishli vositani olgan yoxud xizmat uchun haq to‘lagan bo‘lsa, unga nogironligi bo‘lgan shaxsga taqdim etilishi kerak bo‘lgan reabilitatsiya qilishning texnik vositasining yoki xizmatning qiymati miqdorida kompensatsiya to‘lanadi.

Nogironligi bo‘lgan shaxs nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturidan butunlay voz kechgan yoki dasturning ayrim qismlari amalga oshirilishidan voz kechgan taqdirda davlat organlari va tashkilotlari, fuqarolarning o‘zini o‘zi boshqarish organlari, shuningdek boshqa tashkilotlar, tashkiliy-huquqiy shaklidan qat’i nazar, dasturning bajarilmaganligi uchun javobgar bo‘lmaydi.

Nogironligi bo‘lgan shaxsni reabilitatsiya qilishning yakka tartibdagi dasturini ishlab chiqish va amalga oshirish tartibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>34-modda. Protez-ortopediya moslamalari va reabilitatsiya qilishning texnik vositalari</h3>
            <p>Davlat zamonaviy protez-ortopediya moslamalarini va reabilitatsiya qilishning texnik vositalarini yaratish hamda ishlab chiqarishni tashkil etish maqsadida reabilitatsiya qilish industriyasini rivojlantirishga ko‘maklashadi.

Protez-ortopediya moslamalarining va reabilitatsiya qilish texnik vositalarining davlat reyestri (ro‘yxati), bunday vositalar bilan ta’minlash tartibi, shuningdek nogironligi bo‘lgan shaxslarni reabilitatsiya qilishning texnik vositalari bilan ta’minlash uchun tibbiy ko‘rsatmalar va qarshi ko‘rsatmalar ro‘yxati belgilangan tartibda aniqlanadi.

Nogironligi bo‘lgan shaxslarni protez-ortopediya moslamalari va reabilitatsiya qilishning texnik vositalari bilan ta’minlash bo‘yicha xarajatlarga doir majburiyatlarni moliyalashtirish, shu jumladan ularni tayyorlash va ta’mirlash O‘zbekiston Respublikasining Davlat budjeti mablag‘lari hisobidan amalga oshiriladi.

Nogironligi bo‘lgan shaxslarning protez-ortopediya moslamalari va ularni reabilitatsiya qilishning texnik vositalari uchun ushbu moddada nazarda tutilgan xarajatlarni moliyalashtirishga doir qo‘shimcha mablag‘lar qonunchilikda taqiqlanmagan boshqa manbalardan ham olinishi mumkin.

Hisobot davri yakunlari bo‘yicha qaysi tadbirkorlik subyektining tushumi umumiy hajmining kamida o‘ttiz foizi nogironligi bo‘lgan shaxslar uchun protez-ortopediya moslamalarini va anjomlarini ishlab chiqarishdan, shuningdek ularga ortopedik protezlash xizmatlari ko‘rsatishdan, protez-ortopediya moslamalarini va anjomlarini ta’mirlash hamda xizmat ko‘rsatishdan kelib tushgan bo‘lsa, o‘sha tadbirkorlik subyekti quyidagi huquqlarga ega:

o‘zi kiritgan takliflar tanlov savdolari boshqa ishtirokchilarining takliflari bilan teng bo‘lgan taqdirda xaridor tomonidan investitsiya majburiyatlarini va ijtimoiy majburiyatlarni qabul qilish sharti bilan davlat mulki obyektlarini “nol” xarid qiymati bo‘yicha realizatsiya qilish yuzasidan o‘tkazilgan tanlov savdolari natijalariga ko‘ra kontrakt tuzishga doir ustunlik;

davlat mulki obyekti uchun mazkur obyektning ijara haqi stavkasi eng kam miqdorining ellik foizi miqdorida ijara haqi to‘lash.</p>
          </div>
        </>
      )
    },
    {
      title: '5-bob. Nogironligi bo‘lgan shaxslarning sog‘lig‘ini saqlash va ularga ijtimoiy yordam ko‘rsatish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">5-bob. Nogironligi bo‘lgan shaxslarning sog‘lig‘ini saqlash va ularga ijtimoiy yordam ko‘rsatish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>35-modda. Nogironligi bo‘lgan shaxslarning sog‘lig‘ini saqlash</h3>
            <p>Davlat nogironligi bo‘lgan shaxslarning sog‘liqni saqlash xizmatlaridan, sifatli va nogironligi bo‘lgan shaxslarning ehtiyojlarini hisobga oluvchi tibbiy yordamdan boshqa fuqarolar bilan teng ravishda foydalanish huquqi amalga oshirilishini ta’minlash uchun zarur choralar ko‘radi.

Davlat nogironligi bo‘lgan shaxslarga, fuqarolarga bepul tibbiy yordam ko‘rsatishning davlat kafolatlari dasturi doirasida amalga oshiriladigan malakali tibbiy yordam ko‘rsatilishi bo‘yicha choralar ko‘radi. Nogironligi bo‘lgan shaxslarni tibbiy parvarish qilish barcha darajalardagi mavjud tibbiy xizmatlar doirasida, shuningdek nogironligi bo‘lgan shaxslar uchun ixtisoslashtirilgan xizmatlar tomonidan amalga oshiriladi.

Zo‘rayib boruvchi shakldagi yoki yakuniy bosqichdagi bedavo kasalliklarga chalingan shaxslar bemorlarning jismoniy, ruhiy, hissiy va ma’naviy ehtiyojlarini qanoatlantirishni nazarda tutuvchi palliativ tibbiy parvarishlash xizmatlari ko‘rsatilishi huquqiga ega bo‘ladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>36-modda. Nogironligi bo‘lgan shaxslarga ijtimoiy yordam ko‘rsatish</h3>
            <p>Nogironligi bo‘lgan shaxslarga ijtimoiy yordamning quyidagi turlari ko‘rsatiladi:

pul to‘lovlari (pensiyalar, nafaqalar, bir yo‘la beriladigan to‘lovlar);

reabilitatsiya qilishning texnik vositalari, surdotexnika, tiflotexnika vositalari yoki boshqa vositalar, shu jumladan o‘rindiqli aravachalar, protez-ortopediya moslamalari, maxsus harfli matbaa nashrlari, ovoz kuchaytiruvchi apparatlar va signalizatorlar, subtitrli yoki surdotarjimali videomateriallar, shuningdek avtomobillar bilan ta’minlash;

tibbiy, ijtimoiy, kasbiy, jismoniy reabilitatsiya qilish bo‘yicha xizmatlar va maishiy xizmatlar;

transport xizmatlari;

dori vositalari bilan ta’minlash.

Nogironligi bo‘lgan shaxslarga ijtimoiy yordam mahalliy davlat hokimiyati organlari, sog‘liqni saqlash, xalq ta’limi organlari, boshqa davlat organlari tomonidan tibbiy-ijtimoiy ekspert komissiyalarining xulosalari asosida ko‘rsatiladi.

Nogironligi bo‘lgan, o‘ziga o‘zi xizmat ko‘rsatish qobiliyatini qisman yoki to‘liq yo‘qotgan va o‘zgalarning doimiy parvarishiga muhtoj bo‘lgan shaxslarga ularning uyida hamda vakolatli davlat organlarining ixtisoslashtirilgan statsionar muassasalarida qonunchilikda belgilangan tartibda xizmatlar ko‘rsatiladi. Bu muassasalarda ijtimoiy xizmatlar ko‘rsatish bilan bir qatorda hayot faoliyati uchun tegishli shart-sharoitlar ta’minlanadi, tibbiy xizmatlar ko‘rsatiladi, shuningdek mehnat faoliyati va dam olish tashkil etiladi.

Ish beruvchining aybi bilan mehnatda mayib bo‘lgan yoki kasb kasalligiga chalingan nogironligi bo‘lgan shaxslar tibbiy ko‘rsatmalarga binoan ish beruvchining (tashkilotning tashkiliy-huquqiy shaklidan qat’i nazar) mablag‘lari hisobidan reabilitatsiya qilishning texnik va maxsus transport vositalari bilan ta’minlanadi.

Mahalliy davlat hokimiyati organlari nogironligi bo‘lgan shaxslarga mahalliy budjet mablag‘lari hisobidan qo‘shimcha ijtimoiy kafolatlar belgilash huquqiga ega.

Nogironligi bo‘lgan shaxslar sanatoriy-kurortda bepul sog‘lomlashtirish, shuningdek dori vositalari, nogironligi bo‘lgan shaxslarni parvarish qilish uchun mo‘ljallangan tibbiy buyumlar va nogironligi bo‘lgan bolalar uchun maxsus shifobaxsh oziq-ovqat mahsulotlari bilan ta’minlanish huquqiga ega.

Nogironligi bo‘lgan shaxslarning sanatoriy-kurortda sog‘lomlashtirilishini ta’minlash tartibi hamda dori vositalarining, nogironligi bo‘lgan shaxslarni parvarish qilish uchun mo‘ljallangan tibbiy buyumlarning va nogironligi bo‘lgan bolalar uchun maxsus shifobaxsh oziq-ovqat mahsulotlarining ro‘yxati O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>37-modda. Nogironligi bo‘lgan shaxslarga ijtimoiy-maishiy xizmat ko‘rsatish</h3>
            <p>Nogironligi bo‘lgan shaxslarga ijtimoiy-maishiy xizmat ko‘rsatish sog‘liqni saqlash organlari, bandlik va mehnat munosabatlari organlari, xayriya tashkilotlari va boshqa tashkilotlar tomonidan fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari, shu jumladan nogironligi bo‘lgan shaxslarning jamoat birlashmalari ishtirokida amalga oshiriladi hamda quyidagi turlarni o‘z ichiga oladi:

ijtimoiy himoya qilish va ijtimoiy xizmatlar ko‘rsatish masalalari yuzasidan maslahat berish;

tegishli organlar va tashkilotlarga yuborish;

sog‘lig‘ining holatiga ko‘ra o‘ziga nisbatan homiylik belgilanishiga muhtoj nogironligi bo‘lgan shaxslarga ko‘maklashish va homiylarning o‘z majburiyatlarini bajarishi ustidan nazoratni amalga oshirish;

protez-ortopediya moslamalarini va reabilitatsiya qilishning texnik vositalarini olishda ko‘maklashish;

o‘zgalarning parvarishiga muhtoj nogironligi bo‘lgan shaxslarni dori vositalari bilan bepul yoki imtiyozli ta’minlash;

o‘zgalarning parvarishiga muhtoj nogironligi bo‘lgan shaxslarning asosiy oziq-ovqat mahsulotlari hamda gigiyena vositalari bilan bepul ta’minlanishiga, shu jumladan ovqat tayyorlashiga va uy-joyni yig‘ishtirishiga, gigiyenani amalga oshirishiga ko‘maklashish.

Agar xodim ish beruvchining aybi bilan nogiron va o‘zgalarning parvarishiga muhtoj bo‘lib qolgan bo‘lsa, nogironligi bo‘lgan shaxs mehnat qobiliyatini yo‘qotgan vaqtda uni parvarish qiluvchi shaxsni ish beruvchi tibbiy-ijtimoiy ekspert komissiyalarining yoki pediatriya tibbiy-ijtimoiy ekspert komissiyalarining xulosasiga binoan o‘z hisobidan ta’minlashi hamda jabrlangan xodimga yetkazilgan moddiy zararning o‘rnini qoplashi va ma’naviy ziyonni kompensatsiya qilishi shart.</p>
          </div>
        </>
      )
    },
    {
      title: '6-bob. Nogironligi bo‘lgan shaxslarning ta’lim olishi, ushbu shaxslarni kasbga tayyorlash, qayta tayyorlash va ularning malakasini oshirish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">6-bob. Ta’lim oluvchilarning, ular ota-onasining hamda boshqa qonuniy vakillarining huquq va majburiyatlari</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>38-modda. Nogironligi bo‘lgan shaxslarning ta’lim olish huquqi</h3>
            <p>Nogironligi bo‘lgan shaxslar barcha darajalardagi ta’lim tashkilotlarida ta’lim olish va o‘z qobiliyatini yanada to‘liqroq rivojlantirish uchun butun umri davomida ta’lim olish hamda jamiyat va davlat hayotida ishtirok etish huquqiga ega.

Davlat nogironligi bo‘lgan shaxslarning inklyuziv ta’limini rivojlantirishni, ularning ta’lim olishi va kasbiy tayyorgarlikdan, qayta tayyorlashdan va malaka oshirishdan o‘tishi uchun zarur shart-sharoitlar yaratilishini kafolatlaydi.

Ta’lim tashkilotlari davlat organlari bilan birgalikda nogironligi bo‘lgan bolalarning maktabgacha, maktabdan tashqari va umumiy o‘rta ta’lim olishini, shuningdek o‘rta maxsus, professional, oliy va oliy o‘quv yurtidan keyingi ta’limi olishini ta’minlaydi.

Agar nogironligi bo‘lgan bolalarni ta’lim muassasalarida o‘qitishning vaqtincha imkoni bo‘lmasa, ta’lim sohasidagi davlat boshqaruvi organlari va ta’lim muassasalari nogironligi bo‘lgan bolalarning sohaga oid shifokorlar tavsiyalari asosida hamda ota-onasining yoki boshqa qonuniy vakillarining roziligi bilan uyda o‘qitilishini ta’minlaydi.

Nogironligi bo‘lgan bolalarni uyda o‘qitish O‘zbekiston Respublikasining Davlat budjeti mablag‘lari hisobidan amalga oshiriladi.

Davlat nogironligi bo‘lgan bolalarning bepul umumiy o‘rta, maktabdan tashqari, o‘rta maxsus va professional ta’lim olishini kafolatlaydi.

Nogironligi bo‘lgan shaxslarni to‘lovdan ozod qilgan holda yoki imtiyozli shartlar asosida maxsus o‘quv qo‘llanmalari va adabiyotlar, shuningdek surdotarjimonlar xizmatlaridan foydalanish imkoniyati bilan ta’minlash O‘zbekiston Respublikasining Davlat budjeti mablag‘lari hisobidan amalga oshiriladi.

Nodavlat ta’lim tashkilotlari nogironligi bo‘lgan shaxslarni (bolalarni) o‘qitganlik uchun to‘lov bo‘yicha imtiyozlar belgilashga haqli.

Nogironligi bo‘lgan shaxslarga ta’lim berish, ularni kasbga tayyorlash, qayta tayyorlash va ularning malakasini oshirish turli shakllarda, shu jumladan ishlab chiqarishdan ajralgan va ajralmagan holda, eksternat shaklida, shuningdek masofaviy ta’lim texnologiyalaridan foydalangan holda, umumiy tipdagi ta’lim muassasalarida va tashkilotlarida, ixtisoslashtirilgan ta’lim muassasalarida, uyda, maxsus guruhlarda, sinflarda va yakka tartibdagi o‘quv rejalari bo‘yicha o‘qitish yo‘li bilan amalga oshiriladi.

Nogironligi bo‘lgan bolalarni har tomonlama va uyg‘un rivojlantirish, ularda ijtimoiy faollikni shakllantirish, mehnatga ishtiyoq uyg‘otish, ularni ilm-fanga, texnikaga, san’atga va sportga jalb etish maqsadida ta’lim muassasalari nogironligi bo‘lgan bolalarning maktabdan tashqari ta’limdan foydalanishini, buning uchun zarur shart-sharoitlar yaratgan holda, davlat organlari bilan birgalikda ta’minlashi shart.

Imo-ishora tili O‘zbekiston Respublikasi tomonidan nogironligi bo‘lgan shaxslarning shaxslararo muomala vositasi sifatida e’tirof etiladi.

Davlat organlari nogironligi bo‘lgan shaxslarning har biri uchun mosroq bo‘lgan tillarni, muloqot qilish usullari va vositalarini rivojlantirish, Brayl alifbosini, muqobil harflarni, nutq va og‘zaki muomala ko‘nikmalarini o‘zlashtirish, shuningdek o‘qituvchilarni va maktab xodimlarini inklyuziv ta’lim masalalarida o‘qitish, imo-ishora tilini va Brayl alifbosini biladigan nogironligi bo‘lgan o‘qituvchilarni ta’lim muassasalariga ishga joylashtirish yordamida nogironligi bo‘lgan shaxslar uchun ta’lim tizimini takomillashtirish choralarini ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>39-modda. Nogironligi bo‘lgan bolalarning maktabgacha ta’limi</h3>
            <p>Nogironligi bo‘lgan bolalarning maktabgacha ta’limi maktabgacha ta’lim tashkilotlarida amalga oshiriladi.

Maktabgacha yoshdagi nogironligi bo‘lgan bolalarga nisbatan zarur reabilitatsiya va abilitatsiya qilish choralari amalga oshiriladi hamda ularning maktabgacha ta’lim tashkilotlarida bo‘lishi uchun qulay shart-sharoitlar yaratiladi.

Sog‘lig‘ining holati maktabgacha ta’lim muassasalarida bo‘lishni vaqtincha istisno etadigan nogironligi bo‘lgan bolalar uchun ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotlari tashkil etiladi.

Ko‘p tarmoqli ixtisoslashtirilgan maktabgacha ta’lim tashkilotlarida ilg‘or uslubiyotlarni o‘z ichiga oladigan maktabgacha ta’lim va tarbiyaning davlat ta’lim dasturini amalga oshirish ta’minlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>40-modda. Nogironligi bo‘lgan shaxslarning umumiy o‘rta, o‘rta maxsus, professional, maktabdan tashqari, oliy va oliy ta’limdan keyingi ta’limi</h3>
            <p>Nogironligi bo‘lgan shaxslarning umumiy o‘rta va o‘rta maxsus ta’limi, professional ta’limi ta’lim muassasalarida va tashkilotlarida, zaruriyat bo‘lganda esa ixtisoslashtirilgan ta’lim muassasalarida amalga oshiriladi.

Nogironligi bo‘lgan shaxslarning maktabdan tashqari ta’limi bolalar, o‘smirlar ijodiyot saroylari, uylari, klublari va markazlarida, “Barkamol avlod” bolalar maktabida, bolalar-o‘smirlar sport maktablarida, bolalar musiqa va san’at maktablarida, studiyalarda, axborot-kutubxona hamda sog‘lomlashtirish muassasalarida amalga oshiriladi.

Nogironligi bo‘lgan shaxslarning oliy ta’limi oliy ta’lim muassasalarida va tashkilotlarida amalga oshiriladi.

Nogironligi bo‘lgan shaxslarning oliy ta’limdan keyingi ta’limi oliy ta’lim va ilmiy tashkilotlarda olinishi mumkin.

Statsionar davolash-profilaktika yoki reabilitatsiya muassasalarida davolash kursini o‘tayotgan nogironligi bo‘lgan bolalar uchun mazkur muassasalarda o‘quv mashg‘ulotlari tashkil etiladi.

Professional ta’lim olish uchun maxsus shart-sharoitlarga muhtoj nogironligi bo‘lgan shaxslar uchun turli tipdagi va xildagi ixtisoslashtirilgan professional ta’lim muassasalari tashkil etiladi. Ularda o‘qitish maxsus o‘quv dasturlari asosida davlat ta’lim standartlariga muvofiq amalga oshiriladi.

Nogironligi bo‘lgan shaxslar uchun oliy ta’lim muassasalarida davlat granti asosida abituriyentlarni qabul qilish umumiy sonining ikki foizi miqdorida qo‘shimcha qabul kvotasi ajratiladi.

Nogironligi bo‘lgan shaxslarni qo‘shimcha kvota asosida oliy ta’lim muassasalariga qabul qilish kirish imtihonlari natijalari bo‘yicha amalga oshiriladi.

Nogironligi bo‘lgan shaxslar uchun ajratilgan qo‘shimcha kvotalar bo‘yicha o‘qishga qabul qilinmagan abituriyentlar to‘plagan ballari bilan ta’limning ushbu yo‘nalishi bo‘yicha tanlovda umumiy asoslarda ishtirok etadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>41-modda. Nogironligi bo‘lgan shaxslarni kasbga tayyorlash, qayta tayyorlash va ularning malakasini oshirish</h3>
            <p>Nogironligi bo‘lgan shaxslarni kasbga tayyorlash, qayta tayyorlash va ularning malakasini oshirish ta’lim muassasalarida va tashkilotlarida, shu jumladan ixtisoslashtirilgan ta’lim muassasalarida, shuningdek nogironligi bo‘lgan shaxslarning jamoat birlashmalari korxonalarida nogironligi bo‘lgan shaxslarni reabilitatsiya qilishning yakka tartibdagi dasturiga muvofiq ta’minlanadi.

Davlat kasbga tayyorlash (shu jumladan kasbga tashxis qo‘yish va yo‘naltirish, shakllantirish va reabilitatsiya qilish), tarbiyalash, o‘qitish va takomillashtirish davrida didaktik hamda yo‘riqnomaviy material, shu jumladan ko‘zi ojizlar uchun materiallar (Brayl alifbosi), ko‘rish qobiliyati zaif bo‘lganlar uchun ovozli variantdagi harflar, ovozli adabiyot, shu jumladan guruhlarda o‘qitish uchun yordamchi ovoz tizimlari, eshitish qobiliyati zaif bo‘lganlar uchun mimika va imo-ishora tiliga tarjima bilan ta’minlanishini kafolatlaydi.

Sog‘liqni saqlash muassasalari tomonidan yengil avtomobillarni boshqarish uchun yaroqli deb e’tirof etilgan nogironligi bo‘lgan shaxslarni haydovchilikka tayyorlash maxsus o‘quv dasturlari asosida amalga oshiriladi.

Kar va kar-soqov shaxslarni haydovchilikka tayyorlash umumiy o‘quv dasturi asosida surdotarjima bilan amalga oshiriladi.</p>
          </div>
        </>
      )
    },
    {
      title: '7-bob. Nogironligi bo‘lgan shaxslarning mehnat qilishi va bandligi', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">7-bob. Nogironligi bo‘lgan shaxslarning mehnat qilishi va bandligi</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>42-modda. Mehnat qilishga bo‘lgan huquqning amalga oshirilishini ta’minlash</h3>
            <p>Nogironligi bo‘lgan shaxs odatdagi mehnat sharoitlariga ega tashkilotlarda, nogironligi bo‘lgan shaxslarning mehnatidan foydalanuvchi ixtisoslashtirilgan korxonalarda, sexlarda va uchastkalarda ishlashga, shuningdek qonunchilikda taqiqlanmagan yakka tartibdagi mehnat faoliyatini yoki boshqa faoliyatni amalga oshirishga haqli.

Mehnat munosabatlarining barcha shakllariga nisbatan, shu jumladan ishga qabul qilish shartlariga, ishga yollashga, mehnat faoliyatini amalga oshirishga, ishni saqlab qolishga, xizmatda (ishda) lavozim bo‘yicha ko‘tarilishga, shuningdek xavfsiz mehnat sharoitlari ta’minlanishiga nisbatan nogironlik belgisiga ko‘ra kamsitish taqiqlanadi.

Nogironligi bo‘lgan shaxsning mehnat to‘g‘risidagi qonunchilikda nazarda tutilgan vaqtincha mehnatga qobiliyatsizligi va ta’tillarda bo‘lishi davrida ish beruvchining tashabbusi bilan mehnat shartnomasini bekor qilishga yo‘l qo‘yilmaydi, bundan tashkilot to‘liq tugatilgan hollar mustasno.

Nogironligi bo‘lgan shaxslarni tungi vaqtda ishga, shuningdek ishdan tashqari vaqtdagi ishlarga va dam olish kunlari ishga jalb etishga yo‘l qo‘yilmaydi, bundan qonunchilikda nazarda tutilgan hollar mustasno.

I va II guruh nogironligi bo‘lgan ishlovchi shaxslarga nisbatan mehnatga haq to‘lash miqdori kamaytirilmagan holda qisqartirilgan ish vaqti davomiyligi belgilanadi va mehnat to‘g‘risidagi qonunchilikka muvofiq har yilgi asosiy uzaytirilgan ta’til beriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>43-modda. Nogironligi bo‘lgan shaxslarni ishga joylashtirish va ularning bandligini ta’minlash</h3>
            <p>Davlat nogironligi bo‘lgan shaxslarni ishga joylashtirish va ularning bandligini ta’minlash, shuningdek mehnat bozorida ularning raqobatbardoshliligini oshirish maqsadida:

nogironligi bo‘lgan shaxslarni kasbiy reabilitatsiya qilishni amalga oshiradi, ularni mehnatda kuzatib boradi, shuningdek nogironligi bo‘lgan shaxslarning mos keladigan ishga kirishini, saqlab qolinishini va xizmatda (ishda) lavozim bo‘yicha ko‘tarilishini ta’minlaydi;

tashkiliy-huquqiy shaklidan qat’i nazar, aholi bandligi to‘g‘risidagi qonunchilikda nazarda tutilgan tartibda tashkilotlarda nogironligi bo‘lgan shaxslarni ishga qabul qilish uchun ish o‘rinlarining eng kam sonini belgilaydi;

nogironligi bo‘lgan shaxslarni ishga joylashtirish uchun mos keladigan kasblar bo‘yicha ish o‘rinlarini zaxira qilinishini ta’minlaydi;

tashkiliy-huquqiy shaklidan qat’i nazar, tashkilotlarni nogironligi bo‘lgan shaxslarni ishga joylashtirishga rag‘batlantiradi, shuningdek ixtisoslashtirilgan ish o‘rinlari tashkil etilishini ta’minlaydi;

nogironligi bo‘lgan shaxslarning tadbirkorlik faoliyati bilan shug‘ullanishi uchun zarur shart-sharoitlar yaratilishini ta’minlaydi;

ixtisoslashtirilgan korxonalarni davlat tomonidan qo‘llab-quvvatlaydi;

nogironligi bo‘lgan shaxslarni yangi kasblarga o‘qitish o‘quv dasturlari tashkil etilishi va takomillashtirilishini ta’minlaydi;

nogironligi bo‘lgan shaxslarning davlat sektoriga ishga joylashtirilishini va bandligi rag‘batlantirilishi hamda rivojlantirilishini ta’minlaydi;

nogironligi bo‘lgan shaxslarning mehnatidan, shu jumladan ularning kasanachiligidan foydalanuvchi tashkilotlarni davlat tomonidan qo‘llab-quvvatlaydi.

Nogironligi bo‘lgan shaxslarni ishga joylashtirish mahalliy mehnat organlari tomonidan ta’minlanadi.

Mahalliy davlat hokimiyati organlari tomonidan xodimlarining soni yigirma nafardan ortiq bo‘lgan tashkilotlarda xodimlar umumiy sonining kamida uch foizi miqdorida nogironligi bo‘lgan shaxslarni ishga joylashtirish uchun ish o‘rinlarining eng kam soni belgilanadi.

Nogironligi bo‘lgan shaxslarning mehnatidan foydalanish uchun nogironligi bo‘lgan shaxslarning ehtiyojlarini hamda mahalliy xususiyatlarni hisobga olgan holda ixtisoslashtirilgan korxonalar va ish o‘rinlari tashkil etiladi. Ko‘rish bo‘yicha nogironligi bo‘lgan shaxslar shart-sharoitlari o‘z imkoniyatlariga muvofiq bo‘lgan ishlab chiqarishda ishtirok etish uchun ustuvor huquqqa ega bo‘ladi.</p>
          </div>
        </>
      )
    },
    {
      title: '8-bob. Yakunlovchi qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">8-bob. Yakunlovchi qoidalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>44-modda. Nizolarni hal etish</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquqlarini ta’minlash sohasidagi nizolar qonunchilikda belgilangan tartibda hal etiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>45-modda. Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h3>
            <p>Nogironligi bo‘lgan shaxslarning huquqlari to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>46-modda. O‘zbekiston Respublikasining ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish</h3>
            <p>Quyidagilar o‘z kuchini yo‘qotgan deb topilsin:
<br/>
1) O‘zbekiston Respublikasining 1991-yil 18-noyabrda qabul qilingan “O‘zbekiston Respublikasida nogironlarni ijtimoiy himoya qilish to‘g‘risida”gi 422-XII-sonli Qonuni (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 2, 78-modda);
<br/>
2) O‘zbekiston Respublikasi Oliy Kengashining 1991-yil 18-noyabrda qabul qilingan “O‘zbekiston Respublikasida nogironlarni ijtimoiy himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini amalga kiritish tartibi haqida”gi 423-XII-sonli Qarori (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 2, 79-modda);
<br/>
3) O‘zbekiston Respublikasining 1998-yil 1-mayda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 621-I-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 1998-yil, № 5-6, 102-modda) 2-bandi;
<br/>
4) O‘zbekiston Respublikasining 2001-yil 12-mayda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 220-II-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2001-yil, № 5, 89-modda) I bo‘limi;
<br/>
5) O‘zbekiston Respublikasining 2004-yil 27-avgustda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 671-II-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2004-yil, № 9, 171-modda) I bo‘limi;
<br/>
6) O‘zbekiston Respublikasining 2004-yil 3-dekabrda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish, shuningdek ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish to‘g‘risida”gi 714-II-sonli Qonuni (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2005-yil, № 1, 18-modda) I bo‘limining 7-bandi;
<br/>
7) O‘zbekiston Respublikasining 2005-yil 23-mayda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar kiritish to‘g‘risida”gi O‘RQ-2-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2005-yil, № 5, 152-modda) 1-moddasi;
<br/>
8) O‘zbekiston Respublikasining 2008-yil 11-iyulda qabul qilingan “O‘zbekiston Respublikasida nogironlarni ijtimoiy himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga o‘zgartish va qo‘shimchalar kiritish haqida”gi O‘RQ-162-sonli Qonuni (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2008-yil, № 7, 353-modda);
<br/>
9) O‘zbekiston Respublikasining 2010-yil 9-sentabrda qabul qilingan “Fuqarolarning pensiya ta’minoti tizimi takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar kiritish to‘g‘risida”gi O‘RQ-254-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2010-yil, № 9, 334-modda) 1-moddasi;
<br/>
10) O‘zbekiston Respublikasining 2013-yil 30-aprelda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish to‘g‘risida”gi O‘RQ-352-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2013-yil, № 4, 98-modda) 1-moddasi;
<br/>
11) O‘zbekiston Respublikasining 2013-yil 7-oktabrda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish, shuningdek ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish to‘g‘risida”gi O‘RQ-355-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2013-yil, № 10, 263-modda) 1-moddasi;
<br/>
12) O‘zbekiston Respublikasining 2016-yil 26-dekabrda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish to‘g‘risida”gi O‘RQ-416-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2016-yil, № 12, 383-modda) 2-moddasi;
<br/>
13) O‘zbekiston Respublikasining 2017-yil 13-iyunda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish, shuningdek ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish to‘g‘risida”gi O‘RQ-436-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2017-yil, № 6, 300-modda) 2-moddasi;
<br/>
14) O‘zbekiston Respublikasining 2018-yil 3-yanvarda qabul qilingan “Ayrim davlat organlari faoliyati takomillashtirilishi, shuningdek fuqarolarning huquqlari va erkinliklarini himoya qilish kafolatlarini ta’minlashga doir qo‘shimcha chora-tadbirlar qabul qilinishi munosabati bilan O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartish va qo‘shimchalar kiritish to‘g‘risida”gi O‘RQ-456-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2018-yil, № 1, 1-modda) 1-moddasi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>47-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash</h3>
            <p>O‘zbekiston Respublikasi Sog‘liqni saqlash vazirligi va boshqa manfaatdor tashkilotlar ushbu Qonunning ijrosini, ijrochilarga yetkazilishini hamda mohiyati va ahamiyati aholi o‘rtasida tushuntirilishini ta’minlasin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>48-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish</h3>
            <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin;

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini qayta ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>49-modda. Ushbu Qonunning kuchga kirishi</h3>
            <p>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran uch oy o‘tgach kuchga kiradi.</p>
            <div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2020-yil 15-oktabr,
<br />
O‘RQ-641-son</p>
              <p>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
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
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">O‘ZBEKISTON RESPUBLIKASINING QONUNI</p>
          <p className="text-sm sm:text-base md:text-lg">Nogironligi bo‘lga shaxslarning huquqlari to‘g‘risida</p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full">
            <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Nogironligi_b_l_shaxs;