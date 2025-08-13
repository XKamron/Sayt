import React, { useState } from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const YoshlargaOid = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] block mb-6">1-bob. Umumiy qoidalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi.</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi yoshlarga oid davlat siyosati sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining yoshlarga oid davlat siyosati to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

yoshlarga oid davlat siyosati — davlat tomonidan amalga oshiriladigan hamda yoshlarni ijtimoiy jihatdan shakllantirish va ularning intellektual, ijodiy va boshqa yo‘nalishdagi salohiyatini kamol toptirish uchun shart-sharoitlar yaratilishini nazarda tutadigan ijtimoiy-iqtisodiy, tashkiliy va huquqiy chora-tadbirlar tizimi;

yoshlar (yosh fuqarolar) — o‘n to‘rt yoshga to‘lgan va o‘ttiz yoshdan oshmagan shaxslar;

yosh oila — er-xotinning ikkisi ham o‘ttiz yoshdan oshmagan oila yoxud farzand (bola) tarbiyalab voyaga yetkazayotgan o‘ttiz yoshdan oshmagan yolg‘iz otadan yoki yolg‘iz onadan iborat bo‘lgan oila, shu jumladan nikohdan ajralgan, beva erkak (beva ayol);

yosh mutaxassis — oliy yoki o‘rta maxsus, kasb-hunar ta’limi muassasasini bitirgan, ta’lim muassasasini bitirganidan so‘ng olgan ixtisosligi bo‘yicha uch yil ichida ishga kirgan va ma’lumoti to‘g‘risidagi hujjatda ko‘rsatilgan ixtisosligi bo‘yicha ishlayotganiga uch yildan ko‘p bo‘lmagan o‘ttiz yoshdan oshmagan xodim;

yoshlar tadbirkorligi — yuridik shaxs tashkil etmagan holda yosh fuqarolar tomonidan, shuningdek ta’sischilari yosh fuqarolar bo‘lgan yuridik shaxslar tomonidan amalga oshiriladigan tadbirkorlik faoliyati.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Yoshlarga oid davlat siyosatining asosiy prinsiplari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosatining asosiy prinsiplari quyidagilardan iborat:

ochiqlik va shaffoflik;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda yoshlarning ishtirok etishi;

yoshlar tashabbuslarini qo‘llab-quvvatlash va rag‘batlantirish;

ma’naviy, axloqiy va madaniy qadriyatlarning ustuvorligi;

yoshlarning kamsitilishiga yo‘l qo‘yilmasligi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Yoshlarga oid davlat siyosatining asosiy yo‘nalishlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosatining asosiy yo‘nalishlari quyidagilardan iborat:

yoshlarning huquqlari, erkinliklari va qonuniy manfaatlarini ta’minlash;

yoshlarning hayoti va sog‘lig‘ini saqlash;

yoshlarning ma’naviy, intellektual, jismoniy va axloqiy jihatdan kamol topishiga ko‘maklashish;

yoshlar uchun ochiq va sifatli ta’limni ta’minlash;

yoshlarni ishga joylashtirish va ularning bandligi uchun shart-sharoitlar yaratish;

yoshlarni vatanparvarlik, fuqarolik tuyg‘usi, bag‘rikenglik, qonunlarga, milliy va umuminsoniy qadriyatlarga hurmat ruhida, zararli ta’sirlar va oqimlarga qarshi tura oladigan, hayotga bo‘lgan qat’iy ishonch va qarashlarga ega qilib tarbiyalash;

yoshlarni axloqiy negizlarni buzishga olib keladigan xatti-harakatlardan, terrorizm va diniy ekstremizm, separatizm, fundamentalizm, zo‘ravonlik va shafqatsizlik g‘oyalaridan himoya qilish;

yoshlarning huquqiy ongi va huquqiy madaniyati darajasini yuksaltirish;

iqtidorli va iste’dodli yoshlarni qo‘llab-quvvatlash hamda rag‘batlantirish;

yoshlar tadbirkorligini rivojlantirish uchun shart-sharoitlar yaratish;

yoshlarda sog‘lom turmush tarziga intilishni shakllantirish, shuningdek yoshlarning bo‘sh vaqtlarini mazmunli tashkil etish va yoshlar sportini ommaviy rivojlantirish uchun shart-sharoitlar yaratish;

yosh oilalarni ma’naviy va moddiy jihatdan qo‘llab-quvvatlash, ular uchun munosib uy-joy va ijtimoiy-maishiy sharoitlarni yaratish bo‘yicha kompleks chora-tadbirlar tizimini amalga oshirish;

yoshlarning huquqlari va erkinliklarini ro‘yobga chiqarish sohasida faoliyatni amalga oshiruvchi xalqaro tashkilotlar bilan hamkorlikni rivojlantirish.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Yoshlarga oid davlat siyosati sohasidagi davlat dasturlari, hududiy va boshqa dasturlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosati davlat dasturlari, hududiy va boshqa dasturlar asosida amalga oshirilishi mumkin.

Davlat dasturlari, hududiy va boshqa dasturlar yoshlarni ijtimoiy qo‘llab-quvvatlash, yosh fuqarolarning shaxsiy, siyosiy, iqtisodiy, ijtimoiy hamda madaniy huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilish va ro‘yobga chiqarishni ta’minlaydigan zarur shart-sharoitlarni yaratish, jamiyat hayotida ularning o‘rni va faolligini oshirish, sog‘lom va barkamol yosh avlodni tarbiyalash maqsadida ishlab chiqiladi hamda amalga oshiriladi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi hamda unda ishtirok etuvchi organlar va muassasalar', 
      content: (
        <>
          <span className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] block mb-6">2-bob. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi hamda unda ishtirok etuvchi organlar va muassasalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

yoshlarga oid davlat siyosatining ro‘yobga chiqarilishini ta’minlaydi;

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarining ishlab chiqilishi va amalga oshirilishini ta’minlaydi;

yoshlarga oid davlat siyosati sohasidagi qonun ijodkorligi faoliyatida ishtirok etadi, tegishli normativ-huquqiy hujjatlarni ishlab chiqadi va qabul qiladi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishga qaratilgan normativ-huquqiy hujjatlar va dasturlarning ijrosi hamda ularning vakolatlariga kiradigan boshqa muhim masalalar to‘g‘risida asoslantirilgan tushuntirishlar taqdim etish talabi bilan so‘rovlar yuborishga haqli;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi hamda unda ishtirok etuvchi organlar va muassasalarning faoliyatini o‘z vakolatlari doirasida muvofiqlashtiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishning borishini umumlashtirish va tahlil qilishni tashkil etadi hamda uni yanada takomillashtirish bo‘yicha chora-tadbirlar ko‘radi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarish masalalari bo‘yicha davlat organlari va muassasalari, nodavlat notijorat tashkilotlari va fuqarolik jamiyati boshqa institutlarining hamkorligini ta’minlaydi;

yoshlarga oid davlat siyosati sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Vazirlar Mahkamasi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-1-modda. O‘zbekiston Respublikasi Yoshlar ishlari agentligining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Yoshlar ishlari agentligi yoshlarga oid davlat siyosati

sohasidagi maxsus vakolatli davlat boshqaruvi organidir (bundan buyon matnda maxsus vakolatli davlat organi deb yuritiladi).
Maxsus vakolatli davlat organi:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini ishlab chiqadi va amalga oshiradi;

yoshlarga oid davlat siyosati sohasidagi qonun ijodkorligi faoliyatida ishtirok etadi, tegishli normativ-huquqiy hujjatlarni takomillashtirish yuzasidan takliflar tayyorlaydi;

yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilikka rioya etilishi ustidan nazoratni amalga oshiradi;

yoshlarning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilishga qaratilgan chora-tadbirlarni amalga oshiradi;

yoshlar o‘rtasida huquqbuzarliklar profilaktikasini amalga oshirishda ishtirok etadi;

yoshlarga oid davlat siyosatining ro‘yobga chiqarilishini tahlil qiladi, shuningdek uni takomillashtirish bo‘yicha takliflar ishlab chiqadi;

yoshlarni huquqiy va ijtimoiy himoya qilishga, shuningdek ularning bandligini ta’minlashga qaratilgan chora-tadbirlarni amalga oshiradi;

xorijda o‘qiydigan yoshlar bilan ishlarni tizimli asosda tashkil etadi;

yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilikning aniqlangan buzilishlarini, ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etish haqida davlat organlari va tashkilotlari rahbarlariga ko‘rib chiqilishi majburiy bo‘lgan taqdimnomalar kiritadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarish masalalari bo‘yicha davlat organlari va tashkilotlarining hamkorligini ta’minlashga doir chora-tadbirlarni amalga oshiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda nodavlat notijorat tashkilotlari, fuqarolarning o‘zini o‘zi boshqarish organlari hamda fuqarolik jamiyatining boshqa institutlari bilan hamkorlik qiladi;

yoshlarga oid davlat siyosati sohasida xalqaro hamkorlikni rivojlantirish bo‘yicha chora-tadbirlar ko‘radi.

Maxsus vakolatli davlat organi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.

Maxsus vakolatli davlat organi va uning hududiy boshqarmalari davlat organlari hamda tashkilotlariga yoshlarga oid davlat siyosatini ro‘yobga chiqarish bo‘yicha normativ-huquqiy hujjatlar va dasturlarning ijrosi hamda ularning vakolatlariga kiradigan boshqa muhim masalalar to‘g‘risida asoslantirilgan tushuntirishlar taqdim etish talabi bilan so‘rovlar yuborishga haqli.

Yoshlarga oid davlat siyosatini ro‘yobga chiqarishga bevosita yoki bilvosita ta’sir ko‘rsatadigan normativ-huquqiy hujjatlar loyihalari maxsus vakolatli davlat organi bilan majburiy tartibda kelishiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Mahalliy davlat hokimiyati organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mahalliy davlat hokimiyati organlari:

tegishli hududda yoshlarga oid davlat siyosatining ro‘yobga chiqarilishini ta’minlaydi;

yoshlarga oid davlat siyosati sohasidagi hududiy dasturlarni ishlab chiqadi, tasdiqlaydi va amalga oshiradi;

tegishli hududda yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi organlar va muassasalarning faoliyatini muvofiqlashtiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishning samaradorligini oshirish uchun yoshlarning ehtiyoji monitoringi olib borilishini va baholanishini ta’minlaydi;

yoshlarning bandligi va ularni ishga joylashtirish siyosati ro‘yobga chiqarilishini ta’minlaydi, mehnat bozori va yosh mutaxassislarni ishga joylashtirish amaliyoti monitoringini tashkil etadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda nodavlat notijorat tashkilotlari, fuqarolarning o‘zini o‘zi boshqarish organlari hamda fuqarolik jamiyatining boshqa institutlari bilan hamkorlik qiladi.

Mahalliy davlat hokimiyati organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi organlar va muassasalar tizimi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi organlar va muassasalar tizimiga quyidagilar kiradi:

ta’limni davlat tomonidan boshqarish organlari va ta’lim muassasalari;

davlat sog‘liqni saqlash tizimini boshqarish organlari va sog‘liqni saqlash muassasalari;

jismoniy tarbiya va sport bo‘yicha organlar;

madaniyat organlari;

mehnat organlari;

prokuratura organlari;

ichki ishlar organlari;

adliya organlari;

mudofaa ishlari bo‘yicha organlar.

Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda boshqa organlar va muassasalar ham qonunchilikka muvofiq ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. Ta’limni davlat tomonidan boshqarish organlarining va ta’lim muassasalarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ta’limni davlat tomonidan boshqarish organlari va ta’lim muassasalari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

ta’lim sifatini oshirishga, malakali kadrlarni tayyorlashga qaratilgan normativ-huquqiy hujjatlarni va boshqa hujjatlarni ishlab chiqishda ishtirok etadi;

manfaatdor organlar va muassasalar bilan birgalikda o‘rta maxsus, kasb-hunar va oliy ta’lim muassasalari bitiruvchilari bandligining tahlilini amalga oshiradi hamda uning natijalari asosida ta’lim muassasalarida mutaxassislarni tayyorlashni takomillashtirish bo‘yicha takliflarni ishlab chiqadi;

yoshlarning ta’limi va tarbiyasi sifatini oshirish, o‘quv jarayoniga ta’limning zamonaviy shakllari va usullarini joriy etish chora-tadbirlarini ko‘radi;

ta’lim muassasalarida yoshlarning bo‘sh vaqtini mazmunli o‘tkazishni ta’minlash maqsadida sport seksiyalari, fan, texnika to‘garaklari va ijodiy to‘garaklar, klublar tashkil etadi;

yoshlarning huquqiy ongi va huquqiy madaniyatini yuksaltirish, shuningdek ularni ma’naviy-axloqiy jihatdan tarbiyalashga doir faoliyatda ishtirok etadi;

imkoniyati cheklangan yoshlarga ijtimoiy-psixologik va pedagogik yordam ko‘rsatadi;

yosh fuqarolarni ijtimoiy reabilitatsiya qilish va ijtimoiy moslashtirish bo‘yicha chora-tadbirlar ko‘radi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Ta’limni davlat tomonidan boshqarish organlari va ta’lim muassasalari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. Davlat sog‘liqni saqlash tizimini boshqarish organlarining va sog‘liqni saqlash muassasalarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Davlat sog‘liqni saqlash tizimini boshqarish organlari va sog‘liqni saqlash muassasalari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlar o‘rtasida sanitariya-gigiyenaga oid bilimlarni tarqatish va sog‘lom turmush tarzini shakllantirish bo‘yicha targ‘ibotni tashkil etadi;

yoshlar o‘rtasida tizimli tibbiy tekshiruvlarni tashkil etadi;

imkoniyati cheklangan yoshlarni tibbiy-ijtimoiy reabilitatsiya qilish bo‘yicha chora-tadbirlarni amalga oshiradi;

ichkilikbozlikka, giyohvandlikka, zaharvandlikka chalingan, ruhiy holati buzilgan, yuqumli kasalliklarga va boshqa ijtimoiy xavfli kasalliklarga chalingan yosh fuqarolarni aniqlaydi, ularni hisobga olishni, tekshiruvdan o‘tkazishni, shuningdek tibbiy-ijtimoiy reabilitatsiya qilishni va ijtimoiy moslashtirishni amalga oshiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Davlat sog‘liqni saqlash tizimini boshqarish organlari va sog‘liqni saqlash muassasalari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. Jismoniy tarbiya va sport bo‘yicha organlarning yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Jismoniy tarbiya va sport bo‘yicha organlar:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlar o‘rtasida jismoniy tarbiya va sportni rivojlantirish, sog‘lom turmush tarzini shakllantirishga bo‘lgan intilishni va sportga qiziqishni rag‘batlantirish bo‘yicha chora-tadbirlarni amalga oshiradi;

yoshlar o‘rtasida xalq o‘yinlari, milliy va boshqa sport turlari bo‘yicha musobaqalar o‘tkazilishini tashkil etadi;

yoshlar o‘rtasida xalqaro sport aloqalarini rivojlantirish va mustahkamlashda, sport musobaqalarini o‘tkazishda ishtirok etadi;

jismoniy tarbiya va sport sohasida xalqaro hamda respublika miqyosida o‘tkaziladigan tadbirlarda iqtidorli va iste’dodli yoshlarning ishtirok etishini ta’minlaydi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Jismoniy tarbiya va sport bo‘yicha organlar qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. Fuqarolarning, fuqarolar o‘zini o‘zi boshqarish organlarining, nodavlat notijorat tashkilotlarining va fuqarolik jamiyati boshqa institutlarining madaniy faoliyatda ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Fuqarolar, fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolik jamiyatining boshqa institutlari:

madaniy faoliyat sohasidagi dasturlarni ishlab chiqish va amalga oshirishda ishtirok etadi;

madaniy faoliyat sohasidagi davlat organlari va boshqa tashkilotlar bilan hamkorlik qiladi;

fuqarolarning madaniyatini yuksaltirishga doir ishlarni amalga oshirishda ishtirok etadi;

madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikning ijrosi ustidan jamoatchilik nazoratini amalga oshiradi.

Fuqarolar, fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolik jamiyatining boshqa institutlari boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-1-modda. Madaniyat organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Madaniyat organlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlar o‘rtasida badiiy ijodiyot, xalq va havaskorlik ijodiyoti targ‘ibotini amalga oshiradi;

yoshlar o‘rtasida kino, teatr, musiqa, xoreografiya, tasviriy san’atni, sirk, xalq amaliy san’atini va estrada san’atini rivojlantirishga, ularning g‘oyaviy-badiiy va axloqiy saviyasini oshirishga ko‘maklashadi;

yoshlar o‘rtasidagi ommaviy-madaniy va bayram tadbirlari g‘oyaviy mazmun bilan to‘ldirilishini ta’minlaydi, ijodiy uyushmalar va boshqa nodavlat notijorat tashkilotlari bilan yaqin hamkorlikni yo‘lga qo‘yadi;

yoshlar o‘rtasida xalqaro madaniy aloqalarni rivojlantirish va mustahkamlashda, konferensiyalar va ko‘rgazmalar o‘tkazishda ishtirok etadi;

ijodkor yoshlarni har tomonlama qo‘llab-quvvatlaydi, ularning o‘z iqtidori va iste’dodini to‘laqonli namoyon qilishi uchun zarur shart-sharoitlar yaratadi;

ijodiy safarlar tashkil etilishini hamda madaniyat sohasida xalqaro va respublika miqyosida o‘tkaziladigan ko‘riklarda, tanlovlarda, festivallarda, boshqa tadbirlarda iqtidorli va iste’dodli yoshlarning ishtirok etishini ta’minlaydi;

milliy o‘zlikni anglashda mustaqillik, yuksak ma’naviyat, insonparvarlik an’analariga sadoqat g‘oyalarini yanada chuqur singdirish, radikalizm va ekstremizmning yot g‘oyalariga qarshi immunitetni mustahkamlash borasida yoshlar o‘rtasida ma’rifiy ishlarni amalga oshiradi;

xalqimiz tarixi va bugungi hayotining eng yorqin sahifalarini, mamlakatimizning erkin demokratik taraqqiyotini aks ettiruvchi asarlar yaratishda ijodiy jamoalarga, ayniqsa ijodkor yoshlarga har tomonlama ko‘maklashadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Madaniyat organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. Mehnat organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mehnat organlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarning bandligi darajasini tizimli asosda tahlil qiladi, ularning bandligini ta’minlashda ishtirok etadi;

yoshlarni kasbga o‘qitish va qayta tayyorlash bo‘yicha tizimni tashkil etadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Mehnat organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Prokuratura organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Prokuratura organlari:

yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilikning aniq va bir xilda ijro etilishi ustidan nazoratni amalga oshiradi;

yoshlarga oid davlat siyosati sohasidagi qonun ijodkorligi faoliyatida ishtirok etadi;

yoshlar o‘rtasida huquqbuzarliklar profilaktikasini amalga oshiradi, shu jumladan huquqbuzarliklarning sodir etilishi sabablarini va bunga imkon berayotgan shart-sharoitlarni aniqlaydi, bartaraf etadi;

yoshlarning huquqiy ongi va huquqiy madaniyatini yuksaltirishga doir faoliyatda ishtirok etadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Prokuratura organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Ichki ishlar organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ichki ishlar organlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarning huquqiy ongi va huquqiy madaniyatini yuksaltirishga doir faoliyatda ishtirok etadi;

yoshlar o‘rtasida huquqbuzarliklar profilaktikasini amalga oshiradi, shu jumladan huquqbuzarliklarning sodir etilishi sabablarini va bunga imkon berayotgan shart-sharoitlarni aniqlaydi, bartaraf etadi;

yosh fuqarolarni ijtimoiy reabilitatsiya qilish va ijtimoiy moslashtirish chora-tadbirlarini ko‘radi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Ichki ishlar organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Adliya organlarining yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Adliya organlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarga oid davlat siyosati sohasidagi qonun ijodkorligi faoliyatida ishtirok etadi;

yoshlarga oid davlat siyosati sohasidagi normativ-huquqiy hujjatlarni takomillashtirish yuzasidan takliflar kiritadi;

yoshlarning huquqiy ongi va huquqiy madaniyatini yuksaltirishga doir faoliyatni amalga oshiradi hamda muvofiqlashtiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Adliya organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Mudofaa ishlari bo‘yicha organlarning yoshlarga oid davlat siyosati sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mudofaa ishlari bo‘yicha organlar:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarning chaqiruvga qadar boshlang‘ich tayyorgarligini tashkil etishda ishtirok etadi;

yoshlarni ma’naviy-axloqiy jihatdan va harbiy-vatanparvarlik ruhida tarbiyalashga doir tadbirlarda ishtirok etadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ishtirok etuvchi boshqa organlar va muassasalar bilan hamkorlik qiladi.

Mudofaa ishlari bo‘yicha organlar qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda fuqarolar o‘zini o‘zi boshqarish organlarining ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Fuqarolarning o‘zini o‘zi boshqarish organlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

davlat va xo‘jalik boshqaruvi organlari, nodavlat notijorat tashkilotlari va boshqa tashkilotlar bilan birgalikda kam ta’minlangan oilalardan bo‘lgan yosh fuqarolarga qonunchilikda belgilangan tartibda qo‘shimcha moddiy yordam ko‘rsatadi;

yoshlarning huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilishga, ularning jamiyat hayotidagi roli va faolligini oshirishga, sog‘lom va barkamol yosh avlodni tarbiyalashga, oilada ma’naviy-axloqiy muhitni shakllantirishga qaratilgan chora-tadbirlarni ko‘radi;

yoshlarni tarbiyalash masalalari yuzasidan ta’lim muassasalari va boshqa muassasalar bilan hamkorlik qiladi;

tegishli hududda joylashgan korxonalar, muassasalar va tashkilotlarda yoshlarning bandligini ta’minlashga ko‘maklashadi;

yoshlarga oid davlat siyosati sohasidagi qonunchilikning ijro etilishi, davlat dasturlarining va hududiy dasturlarning ro‘yobga chiqarilishi ustidan jamoatchilik nazoratini amalga oshiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishda boshqa organlar va muassasalar, nodavlat notijorat tashkilotlari va fuqarolik jamiyatining boshqa institutlari bilan hamkorlik qiladi.

Fuqarolarning o‘zini o‘zi boshqarish organlari qonunchilikka muvofiq boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda nodavlat notijorat tashkilotlarining ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Nodavlat notijorat tashkilotlari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarda hayotga bo‘lgan qat’iy ishonch va qarashlarni shakllantirishda, ularni qonunlarga, milliy va umuminsoniy qadriyatlarga hurmat ruhida, zararli ta’sirlar va oqimlarga qarshi tura oladigan qilib tarbiyalashda ishtirok etadi;

sog‘lom va barkamol yoshlarni tarbiyalashga, jamiyat hayotida ularning roli hamda faolligini oshirishga doir tadbirlarni tashkil etadi va o‘tkazadi;

yoshlarni ijtimoiy jihatdan qo‘llab-quvvatlashni, yosh fuqarolarning shaxsiy, siyosiy, iqtisodiy, ijtimoiy hamda madaniy huquqlari, erkinliklari va qonuniy manfaatlarini himoya qilishni hamda ro‘yobga chiqarishni ta’minlaydigan shart-sharoitlarni yaratishga ko‘maklashadi;

fan, sport, san’at va madaniyat sohasida yoshlarning ijodiy iste’dodi va qobiliyatini erta aniqlashga hamda rivojlantirishga ko‘maklashadi;

yoshlarga oid davlat siyosati sohasidagi qonunchilikning ijro etilishi, davlat dasturlarining va hududiy dasturlarning ro‘yobga chiqarilishi ustidan jamoatchilik nazoratini amalga oshiradi;

yoshlarda sog‘lom turmush tarziga intilishni shakllantirishda, yuqumli kasalliklarga va boshqa ijtimoiy xavfli kasalliklarga, ichkilikbozlikka, giyohvandlikka, zaharvandlikka, kashandalikka hamda o‘zga zararli illatlarga qarshi kurashishga doir profilaktika chora-tadbirlarini amalga oshirishda, yoshlarning bo‘sh vaqtlarini mazmunli tashkil etishda, yoshlar sportini ommaviy rivojlantirishda ishtirok etadi;

yoshlar orasida ekologik madaniyatni oshirishga, ekologik ta’lim va tarbiyani rivojlantirishga ko‘maklashadi;

qonunchilikda belgilangan tartibda yoshlarni o‘qitish bilan shug‘ullanishi mumkin;

yoshlarni tadbirkorlikka jalb etishga, kasbga yo‘naltirishga, qayta tayyorlashga va malakasini oshirishga ko‘maklashadi.

Nodavlat notijorat tashkilotlari qonunchilikka muvofiq boshqa tadbirlarda ham ishtirok etishi mumkin.

Davlat yoshlarga oid davlat siyosatini ro‘yobga chiqarishda nodavlat notijorat tashkilotlarining ishtirok etishini kafolatlaydi va ta’minlaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Yoshlarga oid davlat siyosatini ro‘yobga chiqarishda ommaviy axborot vositalarining ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ommaviy axborot vositalari:

yoshlarga oid davlat siyosati sohasidagi davlat dasturlarini, hududiy va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishga, shu jumladan sog‘lom va barkamol yosh avlodni tarbiyalashga, jamiyat hayotida uning roli va faolligini oshirishga, huquqiy ongi va huquqiy madaniyatini yuksaltirishga qaratilgan tadbirlarni yoritadi;

yoshlarning ma’naviy, intellektual, jismoniy va axloqiy jihatdan kamol topishiga ko‘maklashishga doir tadbirlarda ishtirok etadi;

yoshlarga oid davlat siyosati sohasidagi qonunchilikning ijro etilishi, davlat dasturlari va hududiy dasturlar ro‘yobga chiqarilishi ustidan jamoatchilik nazoratini amalga oshiradi;

yoshlarga oid davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi hamda unda ishtirok etuvchi organlar va muassasalar, shuningdek fuqarolik jamiyatining boshqa institutlari bilan yoshlarga oid davlat siyosatini ro‘yobga chiqarish masalalari bo‘yicha hamkorlik qiladi.

Ommaviy axborot vositalari qonunchilikka muvofiq boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Yoshlarning nodavlat notijorat tashkilotlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarning nodavlat notijorat tashkiloti jismoniy va (yoki) yuridik shaxslar tomonidan ixtiyoriylik asosida tashkil etilgan, daromad (foyda) olishni o‘z faoliyatining asosiy maqsadi qilib olmagan hamda olingan daromadlarni (foydani) o‘z ishtirokchilari (a’zolari) o‘rtasida taqsimlamaydigan, yoshlarning shaxsiy, siyosiy, iqtisodiy, ijtimoiy hamda madaniy huquqlari, erkinliklari va qonuniy manfaatlarini ro‘yobga chiqarishni hamda himoya qilishni, shuningdek yoshlarning ijtimoiy faolligini oshirishni o‘zining maqsadlari deb biladigan, o‘zini o‘zi boshqaradigan tashkilotdir.

Yoshlarning nodavlat notijorat tashkilotlarini davlat moddiy va moliyaviy jihatdan qo‘llab-quvvatlaydi, ularga qonunchilikda belgilangan tartibda ta’lim muassasalarining binolaridan, klublar, madaniyat va aholi dam olish markazlaridan, sport inshootlaridan va boshqa inshootlardan foydalanish huquqini beradi.

Yoshlarning nodavlat notijorat tashkiloti o‘z ustavida nazarda tutilgan, faoliyatini moddiy jihatdan ta’minlash uchun zarur bo‘lgan binolarga, inshootlarga, uy-joy fondiga, uskunalarga, ashyolarga, madaniy-ma’rifiy va sog‘lomlashtirish uchun mo‘ljallangan mol-mulkka, pul mablag‘lariga, qimmatli qog‘ozlarga va boshqa mol-mulkka ega bo‘lishi mumkin.

O‘n to‘rt yoshga to‘lgan shaxs yoshlarning nodavlat notijorat tashkiloti a’zosi bo‘lishi mumkin. Yoshlarning nodavlat notijorat tashkilotiga a’zo bo‘lish, a’zolikni yo‘qotish shartlari va tartibi, shu jumladan yoshiga ko‘ra uning a’zoligidan chiqish shartlari tegishli nodavlat notijorat tashkilotining ustavida belgilanadi.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Yoshlarni huquqiy va ijtimoiy himoya qilish', 
      content: (
        <>
          <span className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] block mb-6">3-bob. Yoshlarni huquqiy va ijtimoiy himoya qilish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Yoshlar huquqlari va erkinliklarining kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Konstitutsiyasiga hamda qonunga muvofiq har bir yosh fuqaroning huquqlari va erkinliklari kafolatlanadi.

Yosh fuqarolarning huquqlari va erkinliklari cheklanishi mumkin emas, qonunda belgilangan hollar bundan mustasno.

Jinsi, irqi, millati, tili, dini, ijtimoiy kelib chiqishi, e’tiqodi, shaxsi va ijtimoiy mavqeyidan qat’i nazar, yoshlarning huquqlari va erkinliklarini biror bir tarzda bevosita yoki bilvosita cheklashga yo‘l qo‘yilmaydi hamda bunday cheklash qonunchilikka muvofiq javobgarlikka sabab bo‘ladi.

Davlat voyaga yetmaganlarni jazoni ijro etish muassasalarida va ixtisoslashtirilgan o‘quv-tarbiya muassasalarida saqlashda shaxsning huquqlariga va qadr-qimmati hurmat qilinishiga, insonparvarlik prinsiplariga rioya etilishini kafolatlaydi.

Voyaga yetmaganlar uchun ular sodir etgan huquqbuzarlikning og‘irlik darajasi va ularning yoshi hisobga olingan holda jazoni ijro etish muassasalarida va ixtisoslashtirilgan o‘quv-tarbiya muassasalarida qonunchilikka muvofiq tabaqalashtirilgan rejimda saqlash nazarda tutiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Yoshlarni ijtimoiy himoya qilish kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Qonunchilikda belgilangan tartibda yoshlar uchun quyidagilar kafolatlanadi:

bepul tibbiy xizmat ko‘rsatilishi;

bepul umumiy o‘rta va o‘rta maxsus ta’lim olish;

davlat ta’lim muassasalarida davlat grantlari doirasida bepul kasb-hunar va oliy ta’lim olish;

davlat sport-sog‘lomlashtirish va madaniy-ma’rifiy muassasalariga borish uchun shart-sharoitlar yaratish;

uy-joy qurish, olish va uni rekonstruksiya qilish uchun imtiyozli kreditlar berish;

ta’lim muassasalarida o‘qish uchun imtiyozli kreditlar berish;

yetim bolalarni va ota-onasining qaramog‘idan mahrum bo‘lgan bolalarni turar joylar bilan ta’minlash;

o‘rta maxsus, kasb-hunar yoki oliy ta’lim muassasasini bitirganidan keyin bandlikni ta’minlash bo‘yicha chora-tadbirlar ko‘rish;

mehnat sohasida yoshga doir o‘ziga xosliklarni inobatga olgan holda imtiyozlar berish va ishni ta’lim bilan qo‘shib olib borish uchun shart-sharoitlar yaratish;

ijtimoiy infratuzilma obyektlarini loyihalashtirish va qurish chog‘ida yoshlarning ehtiyojlarini hisobga olish;

jamoat transportidan foydalanishda imtiyozlar berish.

Ish topishda qiynalayotgan va mehnat bozorida teng sharoitlarda raqobatlashishga qodir bo‘lmagan yosh fuqarolarni ishga joylashtirishga yordam qo‘shimcha ish o‘rinlari va ixtisoslashtirilgan korxonalarni barpo etish, o‘qitish bo‘yicha maxsus dasturlarni tashkil etish, shuningdek ijtimoiy himoyaga muhtoj bo‘lgan yoshlarni ishga joylashtirish uchun korxonalar, muassasalar, tashkilotlarda ish joylarining eng kam miqdori zaxirasini yaratish yo‘li bilan ta’minlanadi.

Kam ta’minlangan yosh oilalarga qonunchilikda belgilangan tartibda moddiy yordam berish choralari ko‘rilishi mumkin.

O‘quv jarayoni vaqtida o‘quvchilar va talabalarni jamoatchilik ishlariga jalb etishga yo‘l qo‘yilmaydi, bundan ular tomonidan tanlangan mutaxassislikka mos va o‘quv-ishlab chiqarish amaliyotining shakli bo‘lgan hollar yoxud o‘quvchilar va talabalar o‘qishdan bo‘sh vaqtida ixtiyoriy mehnat qilgan hollar mustasno. Mazkur mehnat faoliyatiga mehnat to‘g‘risidagi yoki fuqarolik qonunchilikka muvofiq shartnoma mavjud bo‘lgan taqdirda yo‘l qo‘yiladi.

Qonunchilikda yoshlarni ijtimoiy himoya qilishning boshqa kafolatlari ham berilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Yoshlarni davlat tomonidan qo‘llab- quvvatlashning qo‘shimcha chora-tadbirlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yosh fuqarolar va yosh oilalar uchun qulay shart-sharoitlar yaratish maqsadida davlat tomonidan quyidagilar vositasida yoshlarni qo‘llab-quvvatlashning qo‘shimcha chora-tadbirlari nazarda tutilishi mumkin:

oilaviy hayotga oid muammolar, psixologik-pedagogik, huquqiy va boshqa masalalar yuzasidan maslahatlar berish tizimini rivojlantirish;

yoshlarga ijtimoiy xizmat, ijtimoiy yordam ko‘rsatuvchi nodavlat notijorat tashkilotlari tizimini rivojlantirish;

yoshlarning dam olishi va ularni sog‘lomlashtirishni tashkil etish tizimini rivojlantirish.

Qonunchilikda yoshlarni davlat tomonidan qo‘llab-quvvatlashning boshqa qo‘shimcha chora-tadbirlari ham nazarda tutilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Iqtidorli va iste’dodli yoshlarni davlat tomonidan qo‘llab-quvvatlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Iqtidorli va iste’dodli yoshlarni davlat tomonidan qo‘llab-quvvatlash:

qonunchilikda belgilangan tartibda mukofotlar, stipendiyalar belgilash, ta’lim grantlari taqdim etish;

fan, madaniyat va san’at sohasida ijodiy ustaxonalar va maktablarni tashkil etishga ko‘maklashish;

umumiy o‘rta, o‘rta maxsus, kasb-hunar va oliy ta’lim muassasalarida sport seksiyalari, fan, texnika to‘garaklari va ijodiy to‘garaklar faoliyatini tashkil etish;

iqtidorli va iste’dodli yoshlarni aniqlash va rag‘batlantirish maqsadida tanlovlar, olimpiadalar, ko‘rgazmalar, festivallar, ko‘riklar, konsertlar, simpoziumlar, o‘qishlar, konferensiyalar, seminarlar tashkil etish hamda o‘tkazish;

yoshlarga oid xalqaro tajriba almashuvi;

iqtidorli va iste’dodli yoshlarni ta’lim va ilmiy-tadqiqot muassasalarida, shu jumladan xorijiy mamlakatlarda o‘qitish, qayta tayyorlash va amaliyotni o‘tash dasturlaridan tanlov asosida foydalanishini ta’minlash;

ilmiy-tadqiqot, madaniy-ma’rifiy ishlarni o‘tkazish uchun yosh mutaxassislar va olimlarga shart-sharoitlar yaratish, yosh olimlarning ishlanmalarini amaliyotga joriy etishga ko‘maklashish, shuningdek yoshlarning kadrlar salohiyatini saqlab qolish hamda rivojlantirish;

sport-ta’lim muassasalari, klublari tarmoqlarini rivojlantirish, iqtidorli va iste’dodli yosh sportchilarni qo‘llab-quvvatlash, yoshlar o‘rtasida sport musobaqalarini o‘tkazish;

iqtidorli va iste’dodli yoshlarni qo‘llab-quvvatlayotgan jismoniy va yuridik shaxslarni qonunchilikda belgilangan tartibda rag‘batlantirish yo‘li bilan amalga oshiriladi.

Qonunchilikda iqtidorli va iste’dodli yoshlarni davlat tomonidan qo‘llab-quvvatlashning boshqa chora-tadbirlari ham nazarda tutilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Yoshlar tadbirkorligini davlat tomonidan qo‘llab-quvvatlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Davlat yoshlarning iqtisodiy mustaqilligini qo‘llab-quvvatlaydi.

Yoshlar tadbirkorligini davlat tomonidan qo‘llab-quvvatlash:

davlat organlari tomonidan yoshlar tadbirkorligini tashkil etishda ko‘maklashish;

yoshlarni tadbirkorlik faoliyatiga jalb etish maqsadida imtiyozli kreditlar berish;

yoshlarni tadbirkorlik faoliyati asoslari bo‘yicha o‘qitish, ta’lim muassasalari va ish beruvchilar o‘rtasida hamkorlikni shartnoma asosida rivojlantirish;

yoshlar tadbirkorligini qo‘llab-quvvatlash dasturlarini ishlab chiqish va ro‘yobga chiqarish yo‘li bilan amalga oshiriladi.

Yoshlar tadbirkorligini qo‘llab-quvvatlash maqsadida davlat tomonidan qonunchilikka muvofiq tegishli imtiyozlar va afzalliklar belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Yoshlar ijtimoiy xizmati</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarni va yosh oilalarni ijtimoiy himoya qilish maqsadida O‘zbekiston Respublikasida yoshlar ijtimoiy xizmati faoliyat ko‘rsatadi.

Yoshlar ijtimoiy xizmati faoliyatining yo‘nalishlari quyidagilardan iborat:

yosh fuqarolarga psixologik-pedagogik, yuridik yordam ko‘rsatish va maslahatlar berish;

imkoniyati cheklangan yosh fuqarolarga ijtimoiy yordam ko‘rsatish;

yosh oilalarga ijtimoiy yordam ko‘rsatish;

ta’lim va mehnat jamoalarida yoshlarning huquqlari, erkinliklari va qonuniy manfaatlarini ro‘yobga chiqarishga ko‘maklashish;

yosh mutaxassislarga yangi ish joyiga moslashishida, ularni qayta tayyorlashga va ularning malakasini oshirishga, shuningdek qonunchilikda belgilangan tartibda ularni uy-joy bilan ta’minlashga ko‘maklashish;

voyaga yetmaganlar uchun ixtisoslashtirilgan o‘quv-tarbiya muassasalarida ijtimoiy yordam ko‘rsatish;

ozodlikdan mahrum etish joylaridan va ixtisoslashtirilgan o‘quv-tarbiya muassasalaridan qaytib kelgan yosh fuqarolarni ijtimoiy moslashtirish;

yoshlar tadbirkorligini rivojlantirishga ko‘maklashish;

huquqiy targ‘ibot, yoshlarni ishga joylashish, ta’lim olish va kasbiy tayyorgarlik borasida, bo‘sh vaqtini mazmunli o‘tkazish, turizm va sport sohasidagi imkoniyatlar to‘g‘risida xabardor etish;

yoshlarning yashash joylarida bo‘sh vaqtlarini mazmunli o‘tkazishini tashkil etish.

Yoshlar ijtimoiy xizmati o‘z faoliyatini qonunchilikka muvofiq boshqa yo‘nalishlar bo‘yicha ham amalga oshirishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Yakunlovchi qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] block mb-6">4-bob. Yakunlovchi qoidalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Yoshlarga oid davlat siyosatini moliyaviy jihatdan ta’minlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosatini moliyaviy jihatdan ta’minlash qonunchilikda belgilangan tartibda O‘zbekiston Respublikasi Davlat budjetining, homiylarning mablag‘lari va boshqa mablag‘lar hisobidan amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Nizolarni hal etish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosati sohasidagi nizolar qonunchilikda belgilangan tartibda hal etiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Yoshlarga oid davlat siyosati to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Quyidagilar o‘z kuchini yo‘qotgan deb topilsin:

1) O‘zbekiston Respublikasining 1991-yil 20-noyabrda qabul qilingan “O‘zbekiston Respublikasida yoshlarga oid davlat siyosatining asoslari to‘g‘risida”gi 429-XII-sonli Qonuni (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 2, 80-modda);
<br/>
2) O‘zbekiston Respublikasi Oliy Kengashining 1991-yil 20-noyabrda qabul qilingan “O‘zbekiston Respublikasida yoshlarga oid davlat siyosatining asoslari to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini kuchga kiritish tartibi haqida”gi 430-XII-sonli Qarori (O‘zbekiston Respublikasi Oliy Kengashining Axborotnomasi, 1992-yil, № 2, 81-modda);
<br/>
3) O‘zbekiston Respublikasining 1998-yil 1-mayda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 621-I-sonli Qonuni (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 1998-yil, № 5–6, 102-modda) I bo‘limining 3-bandi;
<br/>
4) O‘zbekiston Respublikasining 2004-yil 30-aprelda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish to‘g‘risida”gi 621-II-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2004-yil, № 5, 90-modda) III bo‘limi;
<br/>
5) O‘zbekiston Respublikasining 2004-yil 3-dekabrda qabul qilingan “O‘zbekiston Respublikasining ayrim qonun hujjatlariga o‘zgartishlar va qo‘shimchalar kiritish, shuningdek ayrim qonun hujjatlarini o‘z kuchini yo‘qotgan deb topish to‘g‘risida”gi 714-II-sonli Qonuni (O‘zbekiston Respublikasi Oliy Majlisining Axborotnomasi, 2005-yil, № 1, 18-modda) I bo‘limining 8-bandi;
<br/>
6) O‘zbekiston Respublikasining 2008-yil 31-dekabrda qabul qilingan “Soliq to‘g‘risidagi qonun hujjatlari takomillashtirilishi munosabati bilan O‘zbekiston Respublikasining ayrim qonunlariga o‘zgartish va qo‘shimchalar kiritish haqida”gi O‘RQ-197-sonli Qonunining (O‘zbekiston Respublikasi Oliy Majlisi palatalarining Axborotnomasi, 2008-yil, № 12, 640-modda) 3-moddasi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish.</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi: .

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin; .

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini qayta ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.</p>
            
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Ushbu Qonunning kuchga kirishi.</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran kuchga kiradi.</p>
            <div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2016-yil 14-sentabr,
<br />
O‘RQ-406-son</p>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
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
          <p className="text-sm sm:text-base md:text-lg">Yoshlarga oid davlat siyosati to‘g‘risida</p>
          <p className="text-left mt-5">Qonunchilik palatasi tomonidan 2016-yil 12-avgustda qabul qilingan <br/>
          Senat tomonidan 2016-yil 24-avgustda ma’qullangan</p>
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

export default YoshlargaOid;