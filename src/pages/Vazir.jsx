import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const columns = [
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2017-yil 11-dekabrdagi “O‘zbekiston davlat san’at va madaniyat institutida aktyorlik san’ati ta’lim yo‘nalishida maxsus sirtqi bo‘limni tashkil etish to‘g‘risida” 977-son qarori;',
    fileName: '/aktorlik_sanati',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2016-yil 5-maydagi “Bolalar musiqa va san’at maktablari to‘g‘risidagi nizomni tasdiqlash haqida” 144-son qarori;',
    fileName: '/bolalarmusiqa_maktabi',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2018-yil 6-apreldagi “Milliy madaniyatimiz rivojiga katta hissa qo‘shgan san’atkorlarni hamda o‘zbek san’atini dunyo sahnalarida muvaffaqiyatli namoyish etib kelayotgan yoshlarni qo‘llab-quvvatlash chora-tadbirlari to‘g‘risida” 271-son qarori;',
    fileName: '/files/VM_271_06_04_2018.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2018-yil 27-iyuldagi “Alohida iqtidor talab etiladigan bakalavriat ta’lim yo‘nalishlariga kirish test sinovlarisiz, kasbiy (ijodiy) imtihonlar orqali qabul qilish tartibi to‘g‘risidagi nizomni tasdiqlash haqida” 588-son qarori;',
    fileName: '/bakalavariat',
  },
  {
    title: ' O‘zbekiston Respublikasi Vazirlar Mahkamasining 2018-yil 19-iyundagi “Davlat madaniyat muassasalari va davlat arxivlari xodimlari mehnatiga haq to‘lash va ularni moddiy rag‘batlantirishning takomillashtirilgan tizimini tasdiqlash haqida” 458-son qarori;',
    fileName: '/files/VM_458_19_06_2018.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 9-yanvardagi “Ixtisoslashtirilgan san’at va madaniyat maktablari hamda maktab-internatlarning faoliyatini tashkil etish to‘g‘risida” 9-son qarori;',
    fileName: '/ixtisos_maktab',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 20-fevraldagi “O‘zbekiston davlat konservatoriyasi huzurida Musiqa sohasi pedagoglarini qayta tayyorlash va ularning malakasini oshirish markazi faoliyatini tashkil etish to‘g‘risida” 149-son qarori;',
    fileName: '/konservatoriya',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 7-iyundagi “Davlat ta’lim muassasalari hamda nodavlat ta’lim tashkilotlarini attestatsiyadan va davlat akkreditatsiyasidan o‘tkazish tartibini takomillashtirish to‘g‘risida” 470-son qarori;',
    fileName: '/atestatsiya',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2019-yil 23-sentabrdagi “Respublika baxshichilik san’ati markazi va uning huzuridagi Baxshichilik san’atini rivojlantirish jamg‘armasi faoliyatini tashkil etish to‘g‘risida” 798-son qarori;',
    fileName: '/files/VM_798_23_09_2019.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2021-yil 15-iyundagi “Raqamli iqtisodiyot va elektron hukumatning rivojlanish holatini reyting baholash tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida”gi 373-son qarori;',
    fileName: '/files/VM_373_15_06_2021.pdf',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2021-yil 17-sentabrdagi “Maktabgacha, umumiy o‘rta, o‘rta maxsus, professional va maktabdan tashqari ta’lim tashkilotlari pedagog kadrlarini attestatsiyadan o‘tkazish tartibini takomillashtirish chora-tadbirlari to‘g‘risida” 572-son qarori;',
    fileName: '/maktabgacha',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2021-yil 7-sentabrdagi “O‘zbekiston Respublikasi Madaniyat vazirligi to‘g‘risidagi Nizomni tasdiqlash haqida” 558-son qarori;',
    fileName: '/madaniyat_vazirligi',
  },
  {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2022-yil 14-oktabrdagi “Davlat fuqarolik xizmatchilari tomonidan odob-axloq qoidalariga rioya etilishini ta’minlash bo‘yicha qo‘shimcha chora-tadbirlar to‘g‘risida” 595-son qarori;',
    fileName: '/odob_axloq',
  },
    {
    title: 'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2022-yil 2-noyabrdagi “Madaniyat va san’at muassasalarini malakali mutaxassislar bilan ta’minlash va ularni davlat tomonidan tizimli qo‘llab-quvvatlash to‘g‘risida ” 633-son qarori.',
    fileName: '/madaniyat',
  },
];

const Vazir = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <Navbar />
    <main className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pb-4  md:pb-8">
      <h1 className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] text-center mb-6">
        O'zbekiston Respublikasi Vazirlar Mahkamasining qarorlari
      </h1>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {columns.map((column, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-4 sm:p-6"
          >
            <div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">{column.title}</p>
            </div>
            <div className="mt-2">
              {column.fileName ? (
                column.fileName.startsWith('/') && !column.fileName.includes('.') ? (
                  <Link
                    to={column.fileName}
                    className="inline-block text-sky-600 hover:text-sky-700 text-sm sm:text-base font-medium hover:underline"
                  >
                    Batafsil o'qish
                  </Link>
                ) : (
                  <a
                    href={column.fileName}
                    download
                    className="inline-block text-sky-600 hover:text-sky-700 text-sm sm:text-base font-medium hover:underline"
                  >
                    Yuklab olish
                  </a>
                )
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default Vazir;