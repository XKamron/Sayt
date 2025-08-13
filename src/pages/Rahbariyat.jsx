import React, { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Direktor from '../img/Direktor_22.jpg';
import Zavuch from '../img/Zavuch.jpg';

const people = [
  {
    id: 1,
    firstName: 'Karimov',
    lastName: 'Komiljon Muxammatqulovich',
    position: '6-son bolalar musiqa va san’at maktabi direktori',
    phone: '+998 71 277-00-85',
    photo: Direktor,
    workTime: 'Dushanba - 10.00 - 12.00,Chorshanba - 10.00 - 12.00',
    education: [
      { place: 'Toshkent davlat madaniyat instituti talabasi', year: '2008-2012' },
      { place: 'Toshkent shaxar Yunusobod tumani Xamid Olimjon nomli madaniyat uyi qoshidagi  Yulduz estrada guruxi rahbari', year: '2008-2012' },
      { place: 'Toshkent shaxar Yunusobod tumani Xamid Olimjon nomli madaniyat uyi badiiy raxbari', year: '2013-2014' },
      { place: 'Toshkent shahar Yakkasaroy tumani Madaniyat va aholi dam olish markazi badiiy rahbari', year: '2014-2017' },
      { place: 'Toshkent shahar Madaniyat va axoli dam olish markazi badiiy rahbari', year: '2017-2018' },
      { place: 'Toshkent shahar 15- sonli madaniyat va axoli dam olish markazi rahbari', year: '2018-2021' },
      { place: 'Chilonzor tumani Madaniyat bo‘limi bosh mutaxassisi', year: '2022-2023' },
      { place: 'Chilonzor tumani T. Jalilov nomidagi 6–son bolalar musiqa va san’at maktabi rahbari', year: '2023-yildan h.v' },
    ],
    experience: [
      { job: 'Muassasa faoliyatiga umumiy rahbarlik qilish, o‘quv-tarbiya jarayonlari va ta’lim tizimini rivojlantirish hamda uni takomillashtirish'},
      { job: 'ta’lim sifatini yaxshilashning asosiy yo‘nalishlarini belgilash, davlat va jamoat tashkilotlarida uning manfaatlarini himoya qilish', },
      { job: 'muassisga moddiy-texnik bazasini mustahkamlash, o‘quv jarayonini yaxshilash bo‘yicha takliflar kiritish', },
      { job: 'yillik o‘quv-tarbiya rejasini tasdiqlash va pedagogik jamoa tomonidan ushbu rejaning amalga oshirilishini nazorat qilish', },
      { job: 'musiqa va san’at sohasidagi yangi pedagogik texnologiyalarni o‘quv jarayoniga tatbiq etishga, uning moliya-xo‘jalik faoliyatiga rahbarlik qilish', },
      { job: 'pedagog xodimlarga bo‘lgan ehtiyojini aniqlash, kadrlarni tanlash va joy-joyiga qo‘yishni amalga oshirish, pedagog xodimlar attestatsiyasini tashkil qilish', },
      { job: 'ta’lim olayotgan o‘quvchilarning bilimlarini nazorat qilish', },
      { job: 'o‘quvchilarni muassasaga qabul qilish, keyingi sinfga o‘tkazish va ta’lim olganlik to‘g‘risidagi hujjatlar berishni tashkil qilish', },
      { job: 'ota-onalar bilan o‘quv-tarbiyaviy ishlarni takomillashtirish bo‘yicha hamkorlikni tashkil qilish', },
      { job: 'xodimlarga mehnat qilish va malakasini oshirish uchun sharoitlar yaratish, xodimlarning vazifalari va lavozim majburiyatlarini belgilash, ularni moddiy va ma’naviy jihatdan rag‘batlantirish hamda o‘z vakolati doirasida intizomiy jazo choralarini qo‘llash', },
      { job: 'korxona, muassasa va tashkilotlar bilan xo‘jalik shartnomalari tuzish, ishonchnomalar berish, turli yo‘nalishlardagi davlat va nodavlat jamg‘armalar bilan o‘zaro hamkorlikda ish yuritish', },
    ],  
  },
  {
    id: 2,
    firstName: 'Saydullayev',
    lastName: 'Saidakbar Soibjon o‘g‘li',
    position: '6-sonli bolalar musiqa va san’at maktabi direktorining o‘quv ishlari va madaniy-ma‘rifiy ishlar bo‘yicha o‘rinbosari',
    phone: '+998 71 277-00-85',
    photo: Zavuch,
    workTime: 'Seshanba - 14.00 - 16.00,Payshanba - 10.00 - 12.00',
    education: [
      { place: 'Jalaquduq tumani 18-son bolalar musiqa va san’at maktabi fleyta sinf o‘qituvchisi', year: '2018-2019' },
      { place: 'O‘zbekiston davlat konservatoriyasi talabasi', year: '2020-2024' },
      { place: 'O‘zbekiston davlat bojxona instituti orkestr xodimi', year: '2023-2024' },
      { place: 'Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-sonli bolalar musiqa va san’at maktabi fleyta sinfi o‘qituvchisi', year: '2023-2024' },
      { place: 'Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-sonli bolalar musiqa va san’at maktabi direktorining o‘quv ishlari va madaniy-ma’rifiy ishlar bo‘yicha o‘rinbosari', year: '2024-h.v' },
    ],
    experience: [
      { job: 'O‘quv-tarbiyaviy ishlar va ish hujjatlarining ijrosi ta’minlanishini nazorat qilish;' },
      { job: 'o‘quv-uslubiy va ma’naviy-ma’rifiy ishlarni tashkil qilish' },
      { job: 'o‘qitish uslubini tahlil qilish maqsadida o‘quv mashg‘ulotlarini kuzatish' },
      { job: 'pedagog xodimlarning ichki mehnat tartibi qoidalariga rioya etishini nazorat qilish' },
      { job: 'o‘quv-tarbiyaviy, uslubiy ish rejalari, dars jadvali, ochiq darslar va mahorat darslari rejasi, sinov imtihonlari, pedagoglar haqida ma’lumotlar, o‘quv mashg‘ulotlari tarifikatsiyasini tuzish va tasdiqlash uchun muassasa direktoriga taqdim etish' },
      { job: 'direktor bo‘lmagan vaqtda (mehnat ta’tili, kasalligi, xizmat safari va boshqa holatlarda ) uning vazifasini bajarib turish' },
      { job: 'pedagog xodimlar tomonidan dars mashg‘ulotlari o‘tkazilishini, o‘quv-uslubiy, tarbiyaviy hamda sinfdan tashqari ishlarning bajarilishini nazorat qilish' },
      { job: 'o‘quv-tarbiyaviy ishlarningyillik va oylik rejalarini ishlab chiqish' },
      { job: 'pedagog kadrlarni tanlash hamda ularni joy-joyiga qo‘yishda ishtirok etish' },
      { job: 'pedagog xodimlarga metodik yordam ko‘rsatash, pedagog xodimlarning pedagogik faoliyatini tahlil qilish' },
      { job: 'pedagog xodimlarning musiqa va san’at yo‘nalishlari bo‘yicha taqvimiy' },
      { job: 'ish rejalarini tasdiqlash, shuningdek yakka tartibdagi va guruh mashg‘ulotlari jadvalini tuzish hamda ularning bajarilishini nazorat qilish' },
      { job: 'pedagog xodimlarning ish vaqti hisobini olib borish, darslar, imtihonlar jadvali va boshqa o‘quv-tarbiyaviy tadbirlar rejasini ishlab chiqish' },
      { job: 'o‘quvchilarning o‘zlashtirishi va xulqining monitoringini amalga oshirish' },
      { job: 'yakka tartibdagi va guruh jurnallarining belgilangan tartibda yuritilishini ta’minlash' },
      { job: 'o‘quv-yili davomida pedagog xodimlarning o‘quv yuklamalaridagi o‘zgarishlarni muvofiqlashtirib borish' },
      { job: 'sanitariya-gigiena talablari, mehnatni muhofaza qilish, texnika va yong‘in xavfsizligi qoidalari talablariga rioya qilish' },
    ],
  },
];

const Rahbariyat = () => {
  const [openId, setOpenId] = useState(null);

  const handleDropdown = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FCFF] font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="flex-1 px-4 md:px-16 py-8">
        <h1 className="text-sky-900 text-2xl uppercase md:text-3xl font-semibold text-center mb-8 font-['Montserrat', 'sans-serif']">
        Maktab ma’muriyati
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {people.map(person => (
            <div
              key={person.id}
              className="bg-white shadow-md rounded-xl p-4 sm:p-6 flex flex-col justify-between hover:shadow-lg transition duration-200 w-full h-full"
            >
              <div>
                <img
                  src={person.photo}
                  alt={`${person.firstName} ${person.lastName}`}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-sky-200"
                />
                <p className="text-sky-900 text-lg sm:text-xl font-bold mb-2 font-['Montserrat', 'sans-serif']">
                  {person.firstName} {person.lastName}
                </p>
                <p className="text-blue-700 font-semibold mb-1 text-sm sm:text-base">{person.position}</p>
                <p className="text-gray-700 mb-1 text-sm sm:text-base">Telefon: <span className="font-medium">{person.phone}</span></p>
                <p className="text-gray-700 mb-3 text-sm sm:text-base">Ish vaqti: <span className="font-medium">{person.workTime}</span></p>
                <button
                  onClick={() => handleDropdown(person.id)}
                  className="mb-3 px-4 py-2 bg-sky-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm sm:text-base w-full sm:w-auto text-center"
                >
                  Batafsil
                </button>
                {openId === person.id && (
                  <div className="bg-blue-50 rounded-lg p-4 mt-2 text-xs sm:text-sm">
                    <div className="mb-2">
                      <span className="font-semibold font-['Montserrat', 'sans-serif']">Faoliyati:</span>
                      <ul className="list-disc ml-5">
                        {person.education.map((edu, idx) => (
                          <li key={idx}>
                            {edu.place}, {edu.degree} ({edu.year})
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-2">
                      <span className="font-semibold">Vazifasi:</span>
                      <ul className="list-disc ml-5">
                        {person.experience.map((exp, idx) => (
                          <li key={idx}>
                            {exp.job}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p>{person.current}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rahbariyat;