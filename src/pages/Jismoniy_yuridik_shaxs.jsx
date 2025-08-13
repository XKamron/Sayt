import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Jismoniy_yuridik_shaxs = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">1-bob. Umumiy qoidalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi va qo‘llanilish sohasi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi davlat organlari va davlat muassasalariga (bundan buyon matnda davlat organlari deb yuritiladi), shuningdek ularning mansabdor shaxslariga jismoniy va yuridik shaxslarning murojaatlari (bundan buyon matnda murojaatlar deb yuritiladi) sohasidagi munosabatlarni tartibga solishdan iborat.

Ushbu Qonunning amal qilishi davlat ishtirokidagi tashkilotlarga va fuqarolarning o‘zini o‘zi boshqarish organlariga (bundan buyon matnda tashkilotlar deb yuritiladi) nisbatan ham tatbiq etiladi.

Ushbu Qonunning amal qilishi:

ko‘rib chiqish tartibi ma’muriy javobgarlik to‘g‘risidagi, fuqarolik protsessual, jinoyat-protsessual, jinoyat-ijroiya, iqtisodiy protsessual qonunchilik va boshqa qonun hujjatlari bilan belgilangan murojaatlarga;

davlat organlarining, shuningdek ular tarkibiy bo‘linmalarining o‘zaro yozishmalariga nisbatan tatbiq etilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Murojaatlar to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

ariza — huquqlarni, erkinliklarni va qonuniy manfaatlarni amalga oshirishda yordam ko‘rsatish to‘g‘risidagi iltimos bayon etilgan murojaat;

taklif — davlat va jamiyat faoliyatini takomillashtirishga doir tavsiyalarni o‘z ichiga olgan murojaat;

shikoyat — buzilgan huquqlarni, erkinliklarni tiklash va qonuniy manfaatlarni himoya qilish to‘g‘risidagi talab bayon etilgan murojaat;

elektron murojaat — belgilangan tartibda axborot-kommunikatsiya texnologiyalari vositasida berilgan, shu jumladan davlat organining, tashkilotning rasmiy veb-saytiga joylashtirilgan murojaat, real vaqt rejimida axborot-kommunikatsiya texnologiyalaridan foydalangan holda berilgan og‘zaki murojaatlar bundan mustasno;

takroriy murojaat — ayni bir jismoniy yoki yuridik shaxsdan kelib tushgan, uning avvalgi murojaati yuzasidan qabul qilingan qaror ustidan shikoyat qilinayotgan yoki boshqacha tarzda norozilik bildirilayotgan, shuningdek, agar takroriy murojaat kelib tushgan paytga kelib qonunchilikda belgilangan ko‘rib chiqish muddati tugagan bo‘lsa, ilgarigi murojaati o‘z vaqtida ko‘rib chiqilmaganligi to‘g‘risida xabar qilinayotgan murojaat;

anonim murojaat — jismoniy shaxsning familiyasi (ismi, otasining ismi), uning yashash joyi to‘g‘risidagi ma’lumotlar yoki yuridik shaxsning to‘liq nomi, uning joylashgan eri (pochta manzili) to‘g‘risidagi ma’lumotlar ko‘rsatilmagan yoxud ular haqida yolg‘on ma’lumotlar ko‘rsatilgan murojaat, shuningdek uni identifikatsiya qilish imkoniyatini bermaydigan elektron murojaat yoxud imzo bilan tasdiqlanmagan yozma murojaat;

murojaatning dublikati — ayni bir jismoniy yoki yuridik shaxs murojaatining ko‘chirma nusxasi;

ommaviy qabul — davlat organi rahbarining yoki bu borada vakolat berilgan mansabdor shaxsining jismoniy shaxslar va yuridik shaxslarning vakillari bilan ommaviy uchrashuvlarida murojaatlarni qabul qilishga doir harakati;

videokonferensaloqa — uzoqda joylashgan bir nechta abonentlarning real vaqt rejimida audio- va videoaxborot almashish imkoniyati bilan axborot-kommunikatsiya texnologiyalaridan foydalangan holda interaktiv hamkorlik qilishi;

davlat ishtirokidagi tashkilot — ustav fondida davlat ulushi mavjud bo‘lgan tijorat tashkiloti yoxud to‘liq yoki qisman davlat organi tomonidan tashkil etilgan yoki ta’sis etilgan notijorat tashkiloti.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Murojaatlarni ko‘rib chiqishning asosiy prinsiplari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni ko‘rib chiqishning asosiy prinsiplari quyidagilardan iborat:

qonuniylik;

murojaatlarni o‘z vaqtida va to‘liq ko‘rib chiqish;

murojaatlarga nisbatan talablarning bir xilligi;

jismoniy va yuridik shaxslarning huquqlari, erkinliklari va qonuniy manfaatlariga rioya etilishi;

murojaatlarni ko‘rib chiqishda byurokratizm va sansalorlikka yo‘l qo‘yilmasligi;

murojaatlarni ko‘rib chiqishda davlat organlari, tashkilotlar va ular mansabdor shaxslari faoliyatining shaffofligi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Murojaatlarning shakllari va turlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar og‘zaki, yozma yoxud elektron shaklda bo‘lishi mumkin.

Arizalar, takliflar va shikoyatlar murojaatlarning turlari hisoblanadi.

Murojaatlar, ularning shakli va turidan qat’i nazar, bir xil ahamiyatga ega bo‘ladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Murojaatlarga qo‘yiladigan talablar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy shaxsning murojaatida jismoniy shaxsning familiyasi (ismi, otasining ismi), uning yashash joyi to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak.

Yuridik shaxsning murojaatida yuridik shaxsning to‘liq nomi, uning joylashgan eri (pochta manzili) to‘g‘risidagi ma’lumotlar ko‘rsatilgan bo‘lishi kerak.

Jismoniy va yuridik shaxsning murojaatida davlat organining, tashkilotning aniq nomi, murojaat yuborilayotgan mansabdor shaxsning lavozimi va (yoki) familiyasi (ismi, otasining ismi) ko‘rsatilgan, shuningdek murojaatning mohiyati bayon etilgan bo‘lishi kerak.

Murojaatlarda murojaat etuvchilarning elektron pochta manzili, aloqa telefonlari va fakslari raqamlari ko‘rsatilishi mumkin.

Murojaatlar davlat tilida va boshqa tillarda berilishi mumkin.

Yozma murojaat murojaat etuvchi jismoniy shaxsning imzosi yoki murojaat etuvchi yuridik shaxs vakolatli shaxsining imzosi bilan tasdiqlangan bo‘lishi lozim. Jismoniy shaxsning yozma murojaatini murojaat etuvchining imzosi bilan tasdiqlash imkoni bo‘lmagan taqdirda, bu murojaat uni yozib bergan shaxsning imzosi bilan tasdiqlanib, uning familiyasi (ismi, otasining ismi) ham qo‘shimcha ravishda yozib qo‘yilishi kerak.

Murojaat etuvchilarning vakillari orqali berilgan murojaatlarga ularning vakolatlarini tasdiqlovchi hujjatlar ilova qilinadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. Murojaatlar va ommaviy axborot vositalari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ommaviy axborot vositalari tahririyatlaridan kelib tushgan murojaatlar ushbu Qonunda nazarda tutilgan tartibda va muddatlarda ko‘rib chiqiladi.

Ommaviy axborot vositalariga yo‘llangan murojaatlardan ommaviy axborot vositalari to‘g‘risidagi qonunchilikka muvofiq jamoatchilik fikrini o‘rganish va aks ettirish uchun foydalanilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlarida, tashkilotlarda, shuningdek ularning mansabdor shaxslari tomonidan jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish tashkil etiladi.

Jismoniy shaxslarning va yuridik shaxslar vakillarining shaxsiy qabulini o‘tkazuvchi davlat organlarining, tashkilotlarning rahbarlari yoki boshqa mansabdor shaxslari har qanday masalalar, shu jumladan o‘z vakolatlariga kirmaydigan masalalar bo‘yicha murojaat etilganda qabulni rad etishga haqli emas, ushbu moddaning uchinchi qismida nazarda tutilgan hollar bundan mustasno.

Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish, agar ularning shunday xususiyatga ega bo‘lgan avvalgi murojaati bo‘yicha qaror qabul qilingan va bu haqda ularga ushbu Qonunda belgilangan tartibda xabar qilingan bo‘lsa, rad etilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish tartibi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish davlat organining, tashkilotning rahbari yoki boshqa mansabdor shaxsi tomonidan amalga oshiriladi. Buning uchun davlat organlarida, tashkilotlarda maxsus tarkibiy bo‘linmalar tashkil etilishi mumkin, qabul uchun mas’ul bo‘lgan mansabdor shaxslar belgilanadi.

Davlat organlarining rahbarlari yoki bu borada vakolat berilgan boshqa mansabdor shaxslari tomonidan jismoniy shaxslarning va yuridik shaxslar vakillarining sayyor shaxsiy qabullari, shuningdek ommaviy qabullar tashkil etilishi mumkin.

Jismoniy shaxslarni va yuridik shaxslarning vakillarini qabul qilish belgilangan kun va soatlarda, qabul qilish jadvaliga muvofiq o‘tkaziladi.

Qabul qilish jadvali va uni o‘tkazish vaqti, joyi hamda qabulga oldindan yozilish to‘g‘risidagi axborot, qabul qilish tartibi ularni davlat organlarining rasmiy veb-saytlarida e’lon qilish, shuningdek ularning ma’muriy binosida hamma kirishi mumkin bo‘lgan joylardagi stendlarga yoki boshqa texnik vositalarga joylashtirish orqali manfaatdor shaxslar e’tiboriga yetkaziladi.

Jismoniy shaxslarning va yuridik shaxslar vakillarining sayyor shaxsiy qabullari, shuningdek ommaviy qabullar, zarur bo‘lgan hollarda, qabul qilish jadvallaridan tashqari o‘tkazilishi mumkin. Ommaviy qabul hovlilarga (kvartiralarga), boshqa binolarga va joylarga birma-bir kirib chiqish orqali ham o‘tkazilishi mumkin.

Agar qabul davomida bayon etilgan masalalarni hal etish davlat organining, tashkilotning yoki ular mansabdor shaxsining vakolatlariga kirmasa, tegishli mansabdor shaxslar murojaat etuvchiga murojaatda bayon etilgan masalalarni hal etish uchun qaysi organga yoki tashkilotga murojaat qilish lozimligini tushuntirishi kerak.

Shaxsiy qabul davomida davlat organi, tashkilot rahbarining qaroriga ko‘ra va murojaat etuvchiga bu haqda xabar bergan holda maxsus texnika vositalari (audio- va videoyozuv, shuningdek fotosuratga olish) qo‘llanilishi mumkin.

Jismoniy shaxs og‘zaki murojaat etayotganda o‘z shaxsini tasdiqlovchi hujjatni, yuridik shaxsning vakili esa o‘z vakolatlarini tasdiqlaydigan va o‘z shaxsini tasdiqlovchi hujjatni ko‘rsatishi kerak, ommaviy qabul vaqtida kelib tushgan murojaatlar bundan mustasno.

Og‘zaki murojaatlar real vaqt rejimida axborot-kommunikatsiya texnologiyalaridan foydalangan holda, shu jumladan davlat organlarining, tashkilotlarning ishonch, tezkor aloqa telefonlari orqali va videokonferensaloqa vositasida ham berilishi mumkin.

Videokonferensaloqa vositasida qabul qilish tartibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Xalq qabulxonalari va virtual qabulxonalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">2-bob. Xalq qabulxonalari va virtual qabulxonalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari va Virtual qabulxonasi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari va Virtual qabulxonasi davlat organlari, tashkilotlar va ularning mansabdor shaxslari tomonidan murojaatlarning samarali ko‘rib chiqilishini tashkil etish maqsadida O‘zbekiston Respublikasi Prezidenti tomonidan tuziladi.

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari yuridik shaxs maqomiga ega bo‘lmaydi.

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari tizimini quyidagilar tashkil etadi:

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonasi;

O‘zbekiston Respublikasi Prezidentining Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahridagi Xalq qabulxonalari;

O‘zbekiston Respublikasi Prezidentining tumanlar va shaharlardagi (tumanga bo‘ysunuvchi shaharlardan tashqari) Xalq qabulxonalari.

O‘zbekiston Respublikasi Prezidentining Virtual qabulxonasi kelib tushayotgan murojaatlarni axborot-kommunikatsiya texnologiyalari yordamida qabul qilish, to‘plash, tasniflash va tizimlashtirish, shuningdek ularning to‘liq, o‘z vaqtida hamda sifatli ko‘rib chiqilishi ustidan monitoring va nazoratni amalga oshirish imkonini beruvchi axborot tizimi hisoblanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. O‘zbekiston Respublikasi Prezidenti Xalq qabulxonalarining va Virtual qabulxonasining asosiy vazifalari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Prezidenti Xalq qabulxonalarining va Virtual qabulxonasining asosiy vazifalari quyidagilardan iborat:

aholi bilan to‘g‘ridan-to‘g‘ri muloqotni tashkil etish, ularning huquqlari, erkinliklari hamda qonuniy manfaatlarini to‘laqonli himoya qilishga qaratilgan, murojaatlar bilan ishlashning samarali tizimi faoliyatini ta’minlash;

murojaat qilishga oid konstitutsiyaviy huquqning so‘zsiz amalga oshirilishi uchun sharoitlar yaratish;

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalariga va Virtual qabulxonasiga kelib tushgan murojaatlarning to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishini tashkil etish;

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalariga va Virtual qabulxonasiga kelib tushgan hamda tegishliligi bo‘yicha davlat organlariga, tashkilotlarga yuborilgan murojaatlarning ko‘rib chiqilishi ustidan tizimli monitoring va nazoratni amalga oshirish;

jismoniy shaxslarning va yuridik shaxslar vakillarining qabullarini o‘tkazish, shu jumladan videokonferensaloqa vositasida o‘tkazish;

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalariga va Virtual qabulxonasiga kelib tushayotgan murojaatlarni qayd etish, umumlashtirish, tizimlashtirish, ularni ko‘rib chiqish ustidan monitoring va nazorat qilish bo‘yicha elektron axborot tizimini joriy etish hamda yuritish orqali murojaatlar bilan ishlashda zamonaviy axborot-kommunikatsiya texnologiyalaridan keng foydalanish.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. O‘zbekiston Respublikasi Prezidenti Xalq qabulxonalarining huquq va majburiyatlari
</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari quyidagi huquqlarga ega:

davlat organlari, tashkilotlar bilan hamkorlikni amalga oshirish, ulardan o‘z vakolatiga kiruvchi masalalar yuzasidan hujjatlarni va axborotni so‘rash hamda olish;

zarur hollarda, murojaatlarni ko‘rib chiqish natijalari yuzasidan qabul qilingan qarorlarning ijrosini joylarga chiqib o‘rganish;

murojaatlarni ko‘rib chiqish tartibini takomillashtirish to‘g‘risida davlat organlariga,tashkilotlarga takliflar kiritish;

murojaatlarni ko‘rib chiqish tartibi va muddatlarini buzgan, shuningdek murojaatlarni ko‘rib chiqish natijalari yuzasidan qabul qilingan qarorlarning ijrosini ta’minlamagan shaxslarni javobgarlikka tortish bo‘yicha takliflar kiritish.

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari qonunchilikka muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari:

ushbu Qonun talablariga rioya etishi;

murojaatlar bilan ishlashda mavjud axborot tizimidan foydalanishi;

axborot xavfsizligi talablariga rioya etishi;

o‘z dasturiy-apparat vositalarining uzluksiz ishlashini ta’minlashi;

navbatda turishning elektron boshqaruvi tizimi samarali ishlashini va ma’muriy jihatdan boshqarilishini, murojaat etuvchilarning soni ularning toifalari va tegishli sohalar bo‘yicha muayyan davr uchun (kun, hafta, oy) lozim darajada hisobga olinishini ta’minlashi shart.

O‘zbekiston Respublikasi Prezidentining Xalq qabulxonalari zimmasida qonunchilikka muvofiq boshqa majburiyatlar ham bo‘lishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. O‘zbekiston Respublikasi Prezidentining Virtual qabulxonasi tomonidan murojaatlarga doir masalalar bo‘yicha real vaqt rejimida maslahatlar berish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Prezidentining Virtual qabulxonasi negizida turli tarmoqlar va faoliyat sohalaridan malakali mutaxassislarni maslahatchilar sifatida jalb etgan holda, murojaatlarga doir masalalar bo‘yicha jismoniy va yuridik shaxslarga real vaqt rejimida maslahat berish amalga oshiriladi.

O‘zbekiston Respublikasi Prezidentining Virtual qabulxonasi negizida real vaqt rejimida maslahat berish, bir tomondan, maslahatchilar o‘rtasida, shuningdek boshqa tomondan, o‘zini qiziqtiradigan masala yuzasidan tezkor tartibda axborot olish istagida bo‘lgan jismoniy va yuridik shaxslar o‘rtasida axborot ayirboshlash yo‘li bilan ta’minlanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Davlat organlarining, tashkilotlarning va ular mansabdor shaxslarining virtual qabulxonalarini tashkil etish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Aholi bilan to‘g‘ridan-to‘g‘ri muloqotni tashkil etish, murojaatlarning ko‘rib chiqilishi ustidan tizimli monitoring va nazoratni amalga oshirish, shuningdek murojaatlar bilan ishlashda zamonaviy axborot-kommunikatsiya texnologiyalaridan foydalanish maqsadida davlat organlari, tashkilotlar va ular mansabdor shaxslari o‘z virtual qabulxonalarini tashkil etishi mumkin.

Virtual qabulxonalar qaysi davlat organi,tashkilot yoki ularning qaysi mansabdor shaxslari tomonidan tuzilgan bo‘lsa, o‘sha davlat organi, tashkilot yoki ularning mansabdor shaxslari nomidan faoliyat ko‘rsatadi.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Jismoniy va yuridik shaxslarning murojaat etish huquqlari kafolatlari', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">3-bob. Jismoniy va yuridik shaxslarning murojaat etish huquqlari kafolatlari</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Murojaat etish huquqini amalga oshirish kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy va yuridik shaxslarga davlat organlariga, tashkilotlarga va ularning mansabdor shaxslariga yakka tartibda yoki jamoa bo‘lib murojaat etish huquqi kafolatlanadi.

Murojaat etish huquqi ixtiyoriy amalga oshiriladi. Hech kim biron-bir murojaatni himoya qilishga yoxud unga qarshi qaratilgan harakatlarda ishtirok etishga majbur qilinishi mumkin emas.

Murojaat etish huquqining amalga oshirilishi boshqa jismoniy va yuridik shaxslarning huquqlarini, erkinliklarini hamda qonuniy manfaatlarini, shuningdek jamiyat va davlat manfaatlarini buzmasligi kerak.

Xorijiy davlatlarning jismoniy va yuridik shaxslari, fuqaroligi bo‘lmagan shaxslar O‘zbekiston Respublikasi davlat organlariga, tashkilotlariga va ularning mansabdor shaxslariga ushbu Qonunga muvofiq murojaat etish huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Murojaat etish huquqidan foydalanilayotganda kamsitishga yo‘l qo‘yilmasligi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaat etish huquqidan foydalanilayotganda jismoniy shaxsning jinsi, irqi, millati, tili, dini, ijtimoiy kelib chiqishi, e’tiqodi, shaxsiy va ijtimoiy mavqeyiga, shuningdek yuridik shaxslarning mulk shakli, joylashgan eri (pochta manzili), tashkiliy-huquqiy shakllariga va boshqa holatlariga qarab kamsitishga yo‘l qo‘yilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Murojaat etilganda huquqlar, erkinliklar va qonuniy manfaatlarga rioya etilishining kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlari, tashkilotlar va ularning mansabdor shaxslari murojaatlarni ko‘rib chiqishda O‘zbekiston Respublikasining Konstitutsiyasi hamda qonunlari talablariga rioya etishi, ularning to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishi uchun choralar ko‘rishi, jismoniy va yuridik shaxslarning buzilgan huquqlari, erkinliklari tiklanishini hamda qonuniy manfaatlari himoya qilinishini ta’minlash bo‘yicha o‘z vakolatlari doirasida choralar ko‘rishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Murojaatlarni qabul qilish va ko‘rib chiqish kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar davlat organlari, tashkilotlar va ularning mansabdor shaxslari tomonidan qabul qilinishi va ko‘rib chiqilishi shart, ushbu Qonunning 29 va 30-moddalarida nazarda tutilgan hollar bundan mustasno.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Murojaatlar munosabati bilan ayon bo‘lib qolgan ma’lumotlarning oshkor etilmasligi kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni ko‘rib chiqishda jismoniy shaxslarning shaxsiy hayoti, yuridik shaxslarning faoliyati to‘g‘risidagi ma’lumotlar ularning roziligisiz, shuningdek davlat sirini yoxud qonun bilan qo‘riqlanadigan boshqa sirni tashkil etuvchi ma’lumotlarning va, agar bu jismoniy va yuridik shaxslarning huquqlari, erkinliklari hamda qonuniy manfaatlarini kamsitadigan bo‘lsa, boshqa axborotning davlat organlari, tashkilotlar xodimlari va ular mansabdor shaxslari tomonidan oshkor etilishiga yo‘l qo‘yilmaydi.

Jismoniy va yuridik shaxs to‘g‘risidagi, murojaatga taalluqli bo‘lmagan ma’lumotlarni aniqlashga yo‘l qo‘yilmaydi.

Jismoniy shaxsning iltimosiga ko‘ra uning shaxsiga doir biron-bir ma’lumot oshkor etilmasligi kerak.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Jismoniy va yuridik shaxslarning murojaatlari munosabati bilan ular xavfsizligining kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy shaxsni, uning vakilini, ularning oila a’zolarini, yuridik shaxsni, uning vakilini va yuridik shaxs vakilining oila a’zolarini ular o‘z huquqlari, erkinliklari hamda qonuniy manfaatlarini ro‘yobga chiqarish yoki himoya qilish maqsadida davlat organlariga, tashkilotlarga va ularning mansabdor shaxslariga murojaat etganligi, shuningdek murojaatlarda o‘z fikrini bildirganligi va tanqid qilganligi munosabati bilan ta’qib etish man etiladi.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Murojaatlarni berish va ularni ko‘rib chiqish tartibi', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">4-bob. Murojaatlarni berish va ularni ko‘rib chiqish tartibi</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Murojaatlarni berish tartibi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar ularda qo‘yilgan masalalarni hal etish o‘z vakolati doirasiga kiradigan davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga bevosita yoxud bo‘ysunuv tartibida yuqori turuvchi organga beriladi.

Jismoniy va yuridik shaxslar murojaatni mustaqil ravishda berishga, shuningdek bu boradagi vakolatni o‘z vakiliga berishga yoxud murojaatni pochta aloqasi vositalari orqali yoki elektron shaklda yuborishga haqli. Voyaga yetmaganlar, muomalaga layoqatsiz va muomala layoqati cheklangan shaxslarning manfaatlarini ko‘zlab murojaatlar ularning qonuniy vakillari tomonidan qonunchilikda nazarda tutilgan tartibda berilishi mumkin.

Murojaatga u bo‘yicha ilgari qabul qilingan mavjud qarorlar yoki ularning ko‘chirma nusxalari, shuningdek uni ko‘rib chiqish uchun zarur bo‘lgan boshqa hujjatlar ilova qilinishi mumkin, mazkur hujjatlar qaytarilmaydi, murojaat etuvchi ularni qaytarish haqida yozma ariza bergan hollar bundan mustasno. Ko‘rsatib o‘tilgan hujjatlar murojaat taalluqliligi bo‘yicha boshqa davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga yuborilganda murojaatga ilova qilinishi kerak.

Murojaat pochta aloqa vositasi orqali konvertda kelib tushganda konvertda murojaat va unga ilovalar mavjudligi tekshiriladi. Konvertda murojaat mavjud bo‘lmasa yoki u shikastlangan bo‘lsa, shuningdek murojaatda ko‘rsatilgan ilovalar mavjud bo‘lmasa, dalolatnoma tuzilib, uning bir nusxasi murojaat etuvchiga konvertda ko‘rsatilgan manzil bo‘yicha yuboriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Murojaatlarni berish muddatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni berish muddatlari, qoida tariqasida, belgilanmaydi. Ayrim hollarda, agar davlat organining, tashkilotning yoki ular mansabdor shaxslarining murojaatni ko‘rib chiqish bo‘yicha imkoniyatlariga, jismoniy va yuridik shaxslarning huquqlari, erkinliklari hamda qonuniy manfaatlarini o‘z vaqtida amalga oshirish va himoya qilishni ta’minlash zaruratiga bog‘liq bo‘lsa, shuningdek qonun hujjatlarida nazarda tutilgan boshqa asoslarga ko‘ra murojaatni berish muddati belgilanishi mumkin.

Bo‘ysunuv tartibida yuqori turuvchi organga ariza yoki shikoyat jismoniy yoki yuridik shaxsga uning huquqlari, erkinliklari hamda qonuniy manfaatlarini buzuvchi harakat (harakatsizlik) sodir etilganligi yoxud qaror qabul qilinganligi ma’lum bo‘lgan paytdan e’tiboran uzog‘i bilan bir yildan kechiktirmay beriladi.

Ariza yoki shikoyat berishning uzrli sababga ko‘ra o‘tkazib yuborilgan muddati arizani yoki shikoyatni ko‘rib chiquvchi davlat organi, tashkilot yoki ularning vakolat berilgan mansabdor shaxsi tomonidan tiklanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Murojaatlar bo‘yicha ish yuritish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organi, tashkilot yoki ularning mansabdor shaxsiga kelib tushgan murojaat o‘sha kunning o‘zida, ish vaqti tugaganidan keyin kelib tushgan taqdirda esa, keyingi ish kuni ro‘yxatdan o‘tkazilishi kerak.

Murojaatni ro‘yxatdan o‘tkazishni rad etishga yo‘l qo‘yilmaydi.

Davlat organlarida, tashkilotlarda murojaatlarni ro‘yxatdan o‘tkazish daftari yuritilib, unda murojaatning tartib raqami va kelib tushgan sanasi, murojaat etuvchi jismoniy shaxsning familiyasi (ismi, otasining ismi), yuridik shaxsning nomi, murojaatning qisqacha mazmuni, ijrosi to‘g‘risidagi belgi, shuningdek boshqa ma’lumotlar ko‘rsatiladi.

Davlat organlari, tashkilotlar murojaatlar bilan ishlashda elektron hujjat aylanishi tizimini joriy etishi mumkin.

Davlat organining rahbariga yoki vakolat berilgan mansabdor shaxsiga ommaviy qabullar vaqtida tushgan va joyida hal etilgan og‘zaki murojaatlarni ro‘yxatdan o‘tkazish talab qilinmaydi. Bunda jismoniy shaxsning yoki yuridik shaxs vakilining familiyasi (ismi, otasining ismi), uning yashash joyi to‘g‘risidagi ma’lumotlar, murojaatning qisqacha mazmuni, shuningdek uni ko‘rib chiqish natijasi ommaviy qabul bayonnomasida ko‘rsatiladi.

Murojaatni ro‘yxatdan o‘tkazish va ko‘rib chiqish bo‘yicha ish yuritish qonunchilikda belgilangan tartibda amalga oshiriladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Murojaatlarni ko‘rib chiqish tartibi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organiga, tashkilotga yoki ularning mansabdor shaxslariga kelib tushgan murojaatlar shu organ, tashkilot tomonidan yoki murojaatlarni ko‘rib chiqish bo‘yicha zimmasiga majburiyatlar yuklatilgan mansabdor shaxslar tomonidan ko‘rib chiqiladi.

Davlat organiga, tashkilotga kelib tushgan murojaatlar bo‘ysunuv tartibida quyi turuvchi bo‘linmalarga ham yuborilishi mumkin.

Agar murojaatda davlat organlari, tashkilotlarning bir nechta tarkibiy bo‘linmalariga taalluqli masalalar mavjud bo‘lsa, ularning barchasi murojaatni ko‘rib chiqish bo‘yicha ijrochilar etib belgilanadi. Ijrochilar o‘rtasida birinchi ko‘rsatilgan tarkibiy bo‘linma murojaatning ko‘rib chiqilishini boshqa tarkibiy bo‘linmalar bilan birgalikda ta’minlaydi.

Murojaatni to‘liq, xolisona va o‘z vaqtida ko‘rib chiqish uchun qo‘shimcha ma’lumotlar, ma’lumotnomalar va materiallarga zarurat paydo bo‘lgan taqdirda, mazkur murojaatni ko‘rib chiqayotgan davlat organi, tashkilot yoki ularning mansabdor shaxslari murojaat etuvchidan, shuningdek o‘z vakolatlari doirasida boshqa davlat organlaridan, boshqa tashkilotlardan va mansabdor shaxslardan qo‘shimcha axborotni so‘rab olishi mumkin. Agar axborot davlat sirini yoki qonun bilan qo‘riqlanadigan boshqa sirni tashkil etuvchi ma’lumotlarni o‘z ichiga olgan bo‘lmasa, jismoniy va yuridik shaxslarning huquqlari, erkinliklari hamda qonuniy manfaatlariga, jamiyat va davlat manfaatlariga zarar yetkazmasa, davlat organlari, tashkilotlar va mansabdor shaxslar o‘zlaridan so‘ralayotgan axborotni o‘n kun ichida taqdim etishi shart.

Murojaatlarni ko‘rib chiqayotgan davlat organi, tashkilot yoki ularning mansabdor shaxslari zarur hollarda, murojaatning joyning o‘ziga borib ko‘rib chiqilishini ta’minlashi mumkin.

Agar murojaatda qo‘yilgan masalalar xo‘jalik yurituvchi subyektlar faoliyatiga daxldor bo‘lsa, ularning vakillari murojaatlarni ko‘rib chiqishda ishtirok etish uchun davlat organlari tomonidan o‘z vakolatlari doirasida jalb etiladi.

Agar murojaatni ko‘rib chiqishda xo‘jalik yurituvchi subyektlarning faoliyatini tekshirish, shu jumladan moliyaviy-xo‘jalik faoliyatini tekshirish (taftish qilish) zarurati yuzaga kelsa, tekshirish qonunchilikka muvofiq amalga oshiriladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-1-modda. Voyaga yetmagan shaxslarning murojaatlarini ko‘rib chiqishning o‘ziga xos xususiyatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Voyaga yetmagan shaxslar o‘z huquqlari, erkinliklari va qonuniy manfaatlariga rioya etilishi masalalari yuzasidan davlat organlariga, tashkilotlarga yoki ularning mansabdor shaxslariga ushbu Qonunda belgilangan tartibda mustaqil ravishda murojaat berishga haqli. Davlat organlari, tashkilotlar yoki ularning mansabdor shaxslari tomonidan voyaga yetmagan shaxsning murojaatlarini ko‘rib chiqish uning qonuniy vakillari, shuningdek vasiylik va homiylik organlari ishtirokida amalga oshirilishi mumkin. Voyaga yetmagan shaxslar to‘liq muomala layoqatiga ega bo‘lmaganligi sababli ularning murojaatlarini ko‘rib chiqmasdan qoldirishga yo‘l qo‘yilmaydi.

Murojaatda qo‘yilgan masalalarni hal etish o‘z vakolatiga kirmaydigan davlat organlari, tashkilotlar, shuningdek ularning mansabdor shaxslari murojaatni tegishli davlat organiga, boshqa tashkilotga yoki mansabdor shaxsga yoxud vasiylik va homiylik organiga yuborishi shart.</p>
            
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Ayrim murojaatlarni ko‘rib chiqish tartibi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Takroriy murojaatlar umumiy asoslarda ko‘rib chiqiladi, ushbu Qonunning 30-moddasida ko‘rsatilgan hollar bundan mustasno.

Qo‘yilgan masalalarni hal etish o‘zining vakolati doirasiga kirmaydigan davlat organiga, tashkilotga yoki ularning mansabdor shaxslariga kelib tushgan murojaatlar besh kunlik muddatdan kechiktirmay tegishli organlarga, boshqa tashkilotlarga va mansabdor shaxslarga yuborilib, bu haqda murojaat etuvchiga yozma yoxud elektron shaklda xabar qilinadi. Bunda kelib tushgan elektron murojaat elektron shaklda yuborilishi mumkin.

Murojaatlarni ko‘rib chiqish uchun asossiz ravishda boshqa davlat organlariga, tashkilotlarga o‘tkazish yoxud qarorlari yoki harakatlari (harakatsizligi) ustidan shikoyat qilinayotgan organlarga, tashkilotlarga yoki mansabdor shaxslarga yuborish taqiqlanadi.

Agar murojaatlarda ularni tegishli davlat organlariga, tashkilotlarga yoki mansabdor shaxslarga yuborish uchun zarur ma’lumotlar mavjud bo‘lmasa, bu murojaatlar murojaat etuvchiga besh kunlik muddatdan kechiktirmay asoslantirilgan tushuntirish bilan qaytariladi.

Agar murojaatni ko‘rib chiqish davomida murojaatning dublikati kelib tushsa, mazkur murojaat avval kelib tushgan murojaat bilan birgalikda ko‘rib chiqiladi.

Agar murojaatning dublikati murojaat ko‘rib chiqilganidan va javob yuborilganidan keyin kelib tushsa, bu haqda davlat organi, tashkilot yoki ularning mansabdor shaxslari murojaat etuvchini tegishli tartibda xabardor qiladi.

Murojaatlarning turlariga kiritilmagan xatlarni (tashakkurnomalar, tabriknomalar, taklifnomalar, fikr-mulohazalarni) ko‘rib chiqish davlat organlari, tashkilotlar va ularning mansabdor shaxslari tomonidan ularning o‘z ixtiyoriga ko‘ra amalga oshiriladi.</p>
            
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Murojaat etuvchini eshitish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatni ko‘rib chiqayotgan davlat organi, boshqa tashkilot yoki ularning mansabdor shaxslari o‘z tashabbusiga ko‘ra yoxud murojaat etuvchining iltimosiga ko‘ra uni eshitishni tashkil etishi mumkin.

Davlat organi, tashkilot yoki ularning mansabdor shaxslari murojaat etuvchiga murojaatda ko‘tarilgan masalalar bo‘yicha o‘z fikrini bildirish va murojaat bo‘yicha qo‘shimcha axborot taqdim etish imkoniyatini beradi. Davlat organi, tashkilot yoki ularning mansabdor shaxslari murojaat etuvchini eshitishga ekspertlarni, mutaxassislarni va manfaatdor tashkilotlarning vakillarini jalb etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Murojaatlarga javoblar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni ko‘rib chiqish natijalariga ko‘ra davlat organi, tashkilot yoki ularning mansabdor shaxslari tomonidan qaror qabul qilinadi, bu haqda murojaat qiluvchiga darhol yozma yoki elektron shaklda xabar qilinadi.

Murojaatga javobni davlat organining, tashkilotning rahbari yoki ularning mansabdor shaxsi imzolaydi.

Jamoaviy murojaatlarga javob, agar murojaatda javobni boshqa shaxsga yuborish talab etilmagan bo‘lsa, murojaat qiluvchilarning ro‘yxatida birinchi ko‘rsatilgan shaxsga yuboriladi.

Murojaat, agar unda qo‘yilgan barcha masalalar ushbu Qonun talablariga muvofiq ko‘rib chiqilgan va murojaat qiluvchiga tegishli javob yuborilgan taqdirda, ko‘rib chiqilgan hisoblanadi.

Murojaatlarga javoblar mumkin qadar murojaat etilgan tilda bayon qilinadi, javoblar murojaatda ko‘rsatilgan har bir masala bo‘yicha vajlarni inkor etuvchi yoki tasdiqlovchi aniq asoslarni (zaruratga qarab qonunchilik hujjatlari normalariga havolalar qilingan holda) o‘z ichiga olgan bo‘lishi kerak.

Ommaviy qabullar vaqtida davlat organining rahbariga yoki vakolat berilgan boshqa mansabdor shaxsiga kelib tushgan va joyida hal etilgan og‘zaki murojaatlarga yozma javob yoki elektron shakldagi javob talab etilmaydi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Murojaatlarni ko‘rib chiqish muddatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ariza yoki shikoyat masalani mazmunan hal etishi shart bo‘lgan davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga kelib tushgan kundan e’tiboran o‘n besh kun ichida, qo‘shimcha o‘rganish va (yoki) tekshirish, qo‘shimcha hujjatlarni so‘rab olish talab etilganda esa, bir oygacha bo‘lgan muddatda ko‘rib chiqiladi.

Ariza va shikoyatlarni ko‘rib chiqish uchun tekshirish o‘tkazish, qo‘shimcha materiallarni so‘rab olish yoxud boshqa chora-tadbirlar ko‘rish zarur bo‘lgan hollarda, ularni ko‘rib chiqish muddatlari tegishli davlat organining, tashkilotning rahbari tomonidan istisno tariqasida uzog‘i bilan bir oyga uzaytirilishi mumkin, bu haqda murojaat etuvchiga xabar qilinadi.

Taklif davlat organiga, tashkilotga yoki ularning mansabdor shaxsiga kelib tushgan kundan e’tiboran bir oygacha bo‘lgan muddatda ko‘rib chiqiladi, qo‘shimcha o‘rganishni talab etadigan takliflar bundan mustasno bo‘lib, bu haqda taklifni kiritgan jismoniy yoki yuridik shaxsga o‘n kunlik muddatda yozma shaklda xabar qilinadi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Murojaatlarni ko‘rmay qoldirish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Quyidagi murojaatlar ko‘rib chiqilmaydi:

anonim murojaatlar;

jismoniy va yuridik shaxslarning vakillari orqali berilgan murojaatlar, ularning vakolatini tasdiqlovchi hujjatlar mavjud bo‘lmagan taqdirda;

mazkur Qonunda belgilangan boshqa talablarga muvofiq bo‘lmagan murojaatlar.

Murojaatlar ko‘rmay qoldirilganda tegishli xulosa tuziladi, u davlat organining, tashkilotning rahbari yoki ularning vakolat berilgan mansabdor shaxsi tomonidan tasdiqlanadi.

Jismoniy va yuridik shaxs vakilining vakolatini tasdiqlovchi hujjatlar mavjud emasligi sababli murojaatlar ko‘rmay qoldirilganligi to‘g‘risida murojaat qiluvchi tegishli tartibda xabardor qilinadi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Murojaatlarni ko‘rib chiqishni tugatish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni ko‘rib chiqish quyidagi hollarda tugatiladi:

agar takroriy murojaatlarda yangi vajlar yoki yangidan ochilgan holatlar keltirilmagan bo‘lsa, ilgarigi murojaat materiallarida esa tekshiruvlarning to‘la-to‘kis materiallari mavjud bo‘lsa va murojaat qiluvchiga belgilangan tartibda javoblar berilgan bo‘lsa;

agar murojaat qiluvchi o‘z murojaatini belgilangan tartibda chaqirib olgan bo‘lsa yoki uni ko‘rib chiqishni tugatish to‘g‘risida iltimos qilgan bo‘lsa;

yashash joyi, turgan joyi (pochta manzili), elektron pochta manzili yoki boshqa rekvizitlari o‘zgarganligi to‘g‘risida o‘z vaqtida xabardor qilmaganligi tufayli chaqirishning imkoni yo‘qligi sababli murojaatni murojaat qiluvchining ishtirokisiz ko‘rib chiqish imkoniyati bo‘lmaganda;

murojaatni murojaat qiluvchining ishtirokisiz ko‘rib chiqish imkoniyati mavjud emasligi sababli, davlat organi, tashkilot yoki ularning mansabdor shaxsi tomonidan chaqirilgan murojaat qiluvchi kelmay qolgan taqdirda;

agar murojaat qiluvchi jismoniy shaxs vafot etganidan so‘ng murojaatni ko‘rib chiqish huquqiy vorislikka yo‘l qo‘ymasa.

Murojaatni ko‘rib chiqishni tugatish to‘g‘risidagi qarorni davlat organining, tashkilotning rahbari yoki ularning vakolat berilgan mansabdor shaxsi qabul qiladi.

Takroriy murojaatni ko‘rib chiqish ushbu modda birinchi qismining ikkinchi xatboshisiga muvofiq tugatilganda, murojaat qiluvchi takroriy murojaatning asossizligi va ushbu masala yuzasidan u bilan yozishmalar tugatilishi to‘g‘risida yozma ravishda xabardor qilinadi. Yozishmalar olib borish tugatilgan murojaat qiluvchidan takroriy murojaat kelib tushgan taqdirda, bunday murojaatni ko‘rib chiqish murojaat qiluvchini bu haqda xabardor qilmasdan tugatiladi.

Murojaatni ko‘rib chiqish uni chaqirib olish to‘g‘risidagi ariza bo‘yicha tugatilganda murojaat murojaat qiluvchiga davlat organining, tashkilotning yoki ular mansabdor shaxsining xati bilan birga uch kun ichida qaytariladi. Murojaatni chaqirib olish to‘g‘risidagi ariza qonun buzilishlarini aniqlash va bartaraf etish yuzasidan chora-tadbirlar ko‘rilishini istisno etmaydi.

Murojaat qiluvchi chaqirilgan jismoniy shaxsning yoki yuridik shaxs vakilining kelmay qolganligi sababli murojaatni ko‘rib chiqishni tugatish to‘g‘risida tegishli tartibda xabardor qilinadi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Murojaatga javobni tushuntirish va uni tuzatish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy yoki yuridik shaxsning iltimosiga ko‘ra murojaatni ko‘rib chiqqan davlat organi, tashkilot va ularning mansabdor shaxslari murojaatga javobni uning mazmunini o‘zgartirmasdan tushuntirishi, shuningdek yo‘l qo‘yilgan xatolar va arifmetik xatolarni o‘z tashabbusiga ko‘ra yoki murojaat qiluvchining iltimosiga ko‘ra, murojaatga javobning mazmuniga daxl qilmagan holda tuzatishi shart.

Murojaat qiluvchining murojaatga javobni tushuntirish va uni tuzatish to‘g‘risidagi iltimosi u kelib tushgan kundan e’tiboran o‘n kun ichida ko‘rib chiqiladi.</p>
           
          </div>
        </>
      )
    },
    {
        title: '5-bob. Murojaatlarni ko‘rib chiqishda jismoniy va yuridik shaxslarning huquqlari, davlat organlarining, tashkilotlarning va ular mansabdor shaxslarining huquqlari va majburiyatlari', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">5-bob. Murojaatlarni ko‘rib chiqishda jismoniy va yuridik shaxslarning huquqlari, davlat organlarining, tashkilotlarning va ular mansabdor shaxslarining huquqlari va majburiyatlari</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Murojaatlarni ko‘rib chiqishda jismoniy va yuridik shaxslarning huquqlari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar davlat organlari, tashkilotlar va ularning mansabdor shaxslari tomonidan ko‘rib chiqilayotganda jismoniy va yuridik shaxslar quyidagi huquqlarga ega:

murojaatni ko‘rib chiqishning borishi to‘g‘risida axborot olish;

vajlarni shaxsan bayon etish va tushuntirishlar berish;

murojaatni tekshirish materiallari va uni ko‘rib chiqish natijalari bilan tanishish;

qo‘shimcha materiallar taqdim etish yoki bunday materiallarni boshqa organlardan talab qilib olish to‘g‘risida iltimos qilish;

advokat yordamidan foydalanish;

murojaatni ko‘rib chiqishni tugatish to‘g‘risida yoxud murojaatga javobni tushuntirish va (yoki) uni tuzatish to‘g‘risida iltimos qilish;

o‘z murojaatini u ko‘rib chiqilguniga qadar va ko‘rib chiqilayotgan paytda murojaat bo‘yicha qaror qabul qilinguniga qadar yozma yoki elektron shaklda ariza berish yo‘li bilan chaqirib olish;

murojaatni qabul qilishni yoki ko‘rib chiqishni qonunga xilof ravishda rad etganlik ustidan bo‘ysunuv tartibida yuqori turuvchi organga yoki bevosita sudga shikoyat qilish.

Jismoniy va yuridik shaxslar qonunchilikka muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Murojaatlarni ko‘rib chiqishda davlat organining, tashkilotning va ular mansabdor shaxslarining huquqlari va majburiyatlari</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlarni ko‘rib chiqishda davlat organi, tashkilot va ularning mansabdor shaxslari quyidagi huquqlarga ega:

murojaatni ko‘rib chiqish uchun zarur bo‘lgan axborotni belgilangan tartibda so‘rash va olish;

murojaat qiluvchi yoki boshqa shaxs yo‘qligida murojaatni ko‘rib chiqish mumkin bo‘lmaganda yoxud murojaatni eshitish uchun uni chaqirish;

bila turib yolg‘on ma’lumotlar ko‘rsatilgan murojaatni tekshirish sababli yetkazilgan xarajatlarning o‘rnini qoplash to‘g‘risida sudga murojaat qilish.

Davlat organi, tashkilot va ularning mansabdor shaxslari qonunchilikka muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin.

Davlat organi, tashkilot va ularning mansabdor shaxslari:

murojaatlar to‘g‘risidagi qonunchilik talablariga rioya etishi;

murojaat qiluvchiga uning huquqlari, erkinliklari va qonuniy manfaatlariga daxldor hujjatlar, qarorlar va boshqa materiallar bilan tanishib chiqish imkoniyatini, agar ular davlat siri yoki qonun bilan qo‘riqlanadigan boshqa sir bo‘lgan ma’lumotlarni o‘z ichiga olmasa, jismoniy va yuridik shaxslarning huquqlari, erkinliklari va qonuniy manfaatlariga, jamiyat va davlat manfaatlariga zarar yetkazmasa, ta’minlashi;

murojaat etuvchiga ko‘rib chiqish natijalari hamda qabul qilingan qaror haqida murojaat ko‘rib chiqilganidan so‘ng yozma yoxud elektron shaklda darhol xabar qilishi, ommaviy qabullar vaqtida tushgan va joyida hal qilingan og‘zaki murojaatlar bundan mustasno;

murojaat yuzasidan qabul qilingan qaror ustidan, agar jismoniy yoki yuridik shaxs ushbu qarorga rozi bo‘lmasa, shikoyat berish tartibini tushuntirishi;

murojaatni ko‘rib chiqish natijalariga ko‘ra qabul qilingan qarorning ijrosini nazorat qilishi;

qonunga xilof harakatlarni (harakatsizlikni) bartaraf etish yuzasidan darhol chora-tadbirlar ko‘rishi, jismoniy va yuridik shaxslarning huquqlari, erkinliklari va qonuniy manfaatlari buzilishini keltirib chiqaruvchi sabablar va sharoitlarni o‘z vakolatlari doirasida aniqlashi;

jismoniy shaxs, uning vakili, ularning oila a’zolari, yuridik shaxs, uning vakili va yuridik shaxs vakilining oila a’zolari ularning murojaatlari sababli ta’qib etilishini belgilangan tartibda bartaraf etishi;

agar jismoniy yoki yuridik shaxsga uning huquqlari, erkinliklari hamda qonuniy manfaatlari buzilishi natijasida moddiy zarar yoki ma’naviy ziyon yetkazilgan bo‘lsa, qonunda belgilangan tartibda moddiy zararning o‘rnini qoplash yoki ma’naviy ziyonni kompensatsiya qilish choralarini ko‘rishi shart.

Davlat organlari murojaatlar bilan ish olib boruvchi o‘z xodimlarini o‘qitadi va uch yilda kamida bir marta ularning malakasini oshiradi. Davlat organlarining murojaatlar bilan ish olib boruvchi xodimlariga nisbatan qo‘yiladigan talablar, shuningdek ularni o‘qitish va malakasini oshirish tartibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.

Davlat organi, tashkilot va ular mansabdor shaxslarining zimmasida qonunchilikka muvofiq boshqa majburiyatlar ham bo‘lishi mumkin.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>34-modda. Murojaatlarning ko‘rib chiqilishini monitoring va nazorat qilish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlarining, tashkilotlarning rahbarlari yoki vakolat berilgan boshqa mansabdor shaxslari o‘z tuzilmaviy bo‘linmalari tomonidan murojaatlarning ko‘rib chiqilishi ustidan doimiy monitoring va nazoratni amalga oshiradi, ularning to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishini ta’minlash choralarini ko‘radi.

Murojaat u qaysi rahbar yoki vakolat berilgan boshqa mansabdor shaxs tomonidan nazoratga olingan bo‘lsa, o‘sha shaxs tomonidan nazoratdan va ijrodan olinadi.

Oraliq javoblar berilgan va to‘liq ko‘rib chiqilmagan murojaatlar nazoratdan olinmaydi.</p>
             
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>35-modda. Murojaatlarni umumlashtirish va tahlil qilish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlari, tashkilotlar va ularning mansabdor shaxslari kelib tushgan murojaatlarning statistik hisobini yuritadi. Statistik hisobga olishda kelib tushgan, ko‘rib chiqilgan, qanoatlantirilgan, qanoatlantirish rad etilgan, ko‘rmay qoldirilgan murojaatlarning soni, shuningdek murojaatlar bilan ishlashga bog‘liq bo‘lgan boshqa ma’lumotlar nazarda tutilishi kerak.

Davlat organlari, tashkilotlar va ularning mansabdor shaxslari har chorakda murojaatlarni umumlashtiradi va tahlil qiladi.

Davlat organlari murojaatlarni umumlashtirish va tahlil qilish natijalariga ko‘ra ma’lumotnomalar (sharhlar) tuzadi, ularda murojaatlar bilan ishlashning umumiy ko‘rsatkichlari, murojaatlarda tez-tez ko‘tarilgan masalalar, murojaatlarni ko‘rib chiqish yakunlari bo‘yicha aniqlangan asosiy kamchiliklar va qoida buzarliklar, jismoniy va yuridik shaxslarning huquqlari, erkinliklari va qonuniy manfaatlari, shuningdek jamiyat va davlat manfaatlari buzilishini keltirib chiqaruvchi sabablarni bartaraf etish maqsadida ko‘rilgan chora-tadbirlar aks ettiriladi.

Murojaatlarni umumlashtirish va tahlil qilish natijalariga ko‘ra tuzilgan ma’lumotnomalar (sharhlar) tegishli davlat organlarining rasmiy veb-saytlarida e’lon qilinadi.</p>
             
            </div>
          </>
        )
    },
      {
        title: '6-bob. Yakunlovchi qoidalar', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">6-bob. Yakunlovchi qoidalar</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>36-modda. Nizolarni hal etish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy va yuridik shaxslarning murojaatlari sohasidagi nizolar qonunchilikda

belgilangan tartibda hal etiladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>37-modda. Moddiy zararning o‘rnini qoplash va ma’naviy ziyonni kompensatsiya qilish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Jismoniy yoki yuridik shaxsning arizasi, shikoyati ana shu murojaatlar bo‘yicha qonunga xilof qarorlar qabul qilgan davlat organi, tashkilot va ularning mansabdor shaxslari tomonidan qanoatlantirilgan taqdirda, ariza yoki shikoyat berish va uni ko‘rib chiqish bilan bog‘liq zararning o‘rni, arizani, shikoyatni ko‘rib chiqish uchun tegishli davlat organining, tashkilotning, shuningdek ular mansabdor shaxslarining talabiga ko‘ra joylarga borish munosabati bilan qilingan xarajatlarning hamda ana shu vaqt ichida yo‘qotilgan ish haqining o‘rni murojaat etuvchiga sud tartibida qoplanadi. Sud tartibida ma’naviy ziyon ham kompensatsiya qilinishi mumkin.

Jismoniy yoki yuridik shaxsning arizasini yoxud shikoyatini ko‘rib chiqishda qonun talablari buzilganligi munosabati bilan unga yetkazilgan moddiy zararning o‘rnini qoplash va ma’naviy ziyonni kompensatsiya qilish sifatida davlat organi, tashkilot tomonidan to‘langan mablag‘lar aybdor shaxsdan regress tartibida undirib olinishi mumkin.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>38-modda. Murojaatlar to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Murojaatlar to‘g‘risidagi qonunchilikni buzganlik, xuddi shuningdek tuhmat va haqoratdan iborat murojaat berganlik belgilangan tartibda javobgarlikka sabab bo‘ladi.
</p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2017-yil 11-sentabr,
<br />
O‘RQ-445-son</p>
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
            JISMONIY VA YURIDIK SHAXSLARNING MUROJAATLARI TO'GRISIDA
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p> O‘ZBEKISTON RESPUBLIKASINING QONUNI</p>
          <p className="text-sm sm:text-base md:text-lg">BOLA HUQUQLARINING KAFOLATLARI TO‘G‘RISIDA</p>
          <p className="text-left mt-5">Qonunchilik palatasi tomonidan 2007-yil 23-noyabrda qabul qilingan <br/>
          Senat tomonidan 2007-yil 1-dekabrda ma’qullangan</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jismoniy_yuridik_shaxs;