import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Pedagogical staff data
const pedagoglar = [
  {
    fio: 'Abduraxmonova Nodira Mansurovna',
    malumot: 'oliy',
    oqish: 'Nizomiy nomidagi Toshkent davlat pedagogika instituti',
    mutaxassis: 'musiqiy talim',
    yonalish: 'fortepiano',
    boshlagan: '2004-yil 5-yanvardan',
  },
  {
    fio: 'Akbarbekov Davranbek Ravshanbekovich',
    malumot: 'orta-maxsus',
    oqish: 'Respublika estrada sirk kolleji',
    mutaxassis: 'estrada artisti, doira',
    yonalish: 'jornavoz',
    boshlagan: '2020-yil 7-sentyabrdan',
  },
  {
    fio: 'Bobrovskaya Irina Aleksandrovna',
    malumot: 'oliy',
    oqish: 'Tojikiston davlat sanat instituti',
    mutaxassis: 'musiqashunos',
    yonalish: 'musiqa nazariyasi',
    boshlagan: '1993-yil 26-avgustdan',
  },
  {
    fio: 'Djafarova Salmaz Islam qizi',
    malumot: 'orta-maxsus',
    oqish: 'Buxoro davlat sanat bilim yurti',
    mutaxassis: 'fortepiano oqituvchisi',
    yonalish: 'jornavoz',
    boshlagan: '2023-yil 13-sentyabrdan',
  },
  {
    fio: 'Ismoilova Iroda Mansur qizi',
    malumot: 'tugallanmagan oliy',
    oqish: 'Botir Zokirov nomidagi milliy estrada sanati instituti',
    mutaxassis: 'orta maktabda musiqa va ashula oqituvchisi',
    yonalish: 'jornavoz',
    boshlagan: '2024-yil 20-sentabrdan',
  },
  {
    fio: 'Karimov Komiljon Muxammatqulovich',
    malumot: 'oliy',
    oqish: 'Toshkent davlat madaniyat Instituti',
    mutaxassis: 'folklor etnografik jamoalari tashkilotchisi',
    yonalish: 'xalq cholgulari, qashqar rubobi sinfi',
    boshlagan: '2022-yil 9-avgustdan',
  },
  {
    fio: 'Kodirova Nargiza Abduvali qizi',
    malumot: 'orta-maxsus',
    oqish: 'Bekobod ixtisoslashtirilgan sanat maktabi',
    mutaxassis: 'orta maktabda musiqa oqituvchisi va jornavoz',
    yonalish: 'fortepiano estrada ijrochiligi',
    boshlagan: '2024-yil 20-sentyabrdan',
  },
  {
    fio: 'Koloskova Natalya Lvovna',
    malumot: 'oliy',
    oqish: 'Nizomiy nomidagi Toshkent davlat pedagogika instituti',
    mutaxassis: 'musiqiy talim',
    yonalish: 'fortepiano',
    boshlagan: '2020-yil 7-sentyabrdan',
  },
  {
    fio: 'Koltinova Yelena Sergeyevna',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'vokal sanati, estrada xonandaligi',
    yonalish: 'estrada xonandaligi',
    boshlagan: '2018-yil 2-oktyabrdan',
  },
  {
    fio: 'Kosheleva Natalya Rustamovna',
    malumot: 'orta-maxsus',
    oqish: 'Estrada sirk kolleji',
    mutaxassis: 'estrada cholgulari ijrochisi',
    yonalish: 'fortepiano',
    boshlagan: '2001-yil 2-sentyabrdan',
  },
  {
    fio: 'Kurbanova Maxbuba Yegitaliyevna',
    malumot: 'oliy',
    oqish: 'Nizomiy nomidagi Toshkent davlat pedagogika instituti',
    mutaxassis: 'musiqiy talim',
    yonalish: 'estrada cholgu ijrochiligi, fortepiano',
    boshlagan: '2015-yil 2-sentyabrdan',
  },
  {
    fio: 'Livieva Izabella Anvarovna',
    malumot: 'oliy',
    oqish: 'M.Ashrafiy nomidagi Toshkent davlat konservatoriyasi',
    mutaxassis: 'oqituvchi, jornovoz',
    yonalish: 'fortepiano, jornovoz',
    boshlagan: '1993-yil 10-martdan',
  },
  {
    fio: 'Maxkamova Aziza Zafarjon qizi',
    malumot: 'oliy',
    oqish: 'Jizzak pedagogika universiteti',
    mutaxassis: 'musiqiy talim',
    yonalish: 'fortepiano',
    boshlagan: '2023-yil 12-avgustdan',
  },
  {
    fio: 'Maxmudov Adxam Raufovich',
    malumot: 'oliy',
    oqish: 'Toshkent davlat madaniyat instituti',
    mutaxassis: 'madaniy- oqartuv xodimi, orkestr kollektivning rahbari',
    yonalish: 'xalq cholgulari, doira sinfi',
    boshlagan: '2004-yil 5-yanvardan',
  },
  {
    fio: 'Muratova Madina Djalalidinovna',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'xor ijrochiligi',
    yonalish: 'xor ijrochiligi sinfi',
    boshlagan: '2024-yil 20-sentabrdan',
  },
  {
    fio: 'Narxodjaeva Shoxista Nadimovna',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'kompozitor',
    yonalish: 'musiqa nazariyasi',
    boshlagan: '2022-yil 3-sentyabrdan',
  },
  {
    fio: 'Ruzmetova Vazira Aleksandrovna',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'musiqa ovoz rejissori',
    yonalish: 'torli cholgular, skripka sinfi',
    boshlagan: '2014-yil 2-sentyabrdan',
  },
  {
    fio: 'Saydasheva Elmira Faritovna',
    malumot: 'orta-maxsus',
    oqish: 'X. Niyoziy nomli Toshkent davlat musiqa bilim yurti',
    mutaxassis: 'oqituvchi, jornovoz',
    yonalish: 'fortepiano',
    boshlagan: '1999-yil 2-sentabrdan',
  },
  {
    fio: 'Saydullayev Saidakbar Soibjon ogli',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'cholgu ijrochiligi (fleyta)',
    yonalish: 'damli cholgular, fleyta sinfi',
    boshlagan: '2023-yil 4-sentyabrdan',
  },
  {
    fio: 'Shestakova Lidiya Borisovna',
    malumot: 'orta-maxsus',
    oqish: 'D.Ovezov namidagi Turkmaniston davlat musiqa bilim yurti',
    mutaxassis: 'oqituvchi, jornovoz',
    yonalish: 'jornovoz',
    boshlagan: '1974-yil 2-sentyabrdan',
  },
  {
    fio: 'Sufiyev Maynus',
    malumot: 'orta-maxsus',
    oqish: 'Leninobod musiqa bilim yurti',
    mutaxassis: 'xalq cholgu asboblari orkestri raxbari',
    yonalish: 'estrada cholgu ijrochiligi, gitara sinfi',
    boshlagan: '2023-yil 1-dekabrdan',
  },
  {
    fio: 'Titeyeva Zarina Maratovna',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'estrada vokal ijrochisi va pedagogi',
    yonalish: 'estrada xonandaligi',
    boshlagan: '2024-yil 20-sentabrdan',
  },
  {
    fio: 'Trashkov Dmitriy Vladimirovich',
    malumot: 'oliy',
    oqish: 'Ozbekiston davlat konservatoriyasi',
    mutaxassis: 'estrada ijrochiligi, gitara cholgusi',
    yonalish: 'estrada ijrochiligi, gitara sinfi',
    boshlagan: '2012-yil 1-noyabrdan',
  },
  {
    fio: 'Tursunxodjaeva Gulchexra Muradjanovna',
    malumot: 'orta-maxsus',
    oqish: 'Respublika rassomlik kolleji',
    mutaxassis: 'rassom, kulolchi',
    yonalish: 'tasviriy sanat',
    boshlagan: '2012-yil 1-dekabrdan',
  },
  {
    fio: 'Xasanova Nilyufarxon Saydivalievna',
    malumot: 'orta-maxsus',
    oqish: 'X. Niyoziy nomli Toshkent davlat musiqa bilim yurti',
    mutaxassis: 'xor dirijorligi',
    yonalish: 'fortepiano',
    boshlagan: '2020-yil 20-sentyabrdan',
  },
  {
    fio: 'Yunusova Dilbar Muxamedovna',
    malumot: 'oliy',
    oqish: 'Toshkent davlat madaniyat instituti',
    mutaxassis: 'madaniy- oqartuv xodimlari xavaskorlik teatr kollektivi rahbari',
    yonalish: 'xoreografiya',
    boshlagan: '2011-yil 2-sentyabrdan',
  },
  {
    fio: 'Yunusova Dono Alisherovna',
    malumot: 'orta-maxsus',
    oqish: 'Toshkent xoreografiya kolleji',
    mutaxassis: 'ansambl artisti, xalq raqsi ijrochisi',
    yonalish: 'xoreografiya',
    boshlagan: '2014-yil 9-fevraldan',
  },
  {
    fio: 'Yunusova Salomat Muxamedaminovna',
    malumot: 'orta-maxsus',
    oqish: 'Toshkent Xoreografiya bilim yurti',
    mutaxassis: 'sharq xalqlari raqsi',
    yonalish: 'xoreografiya',
    boshlagan: '2011 yil 24 yanvardan',
  }
];

const Xodimlar = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-sky-900 mb-4 pt-24 font-montserrat">
            Maktabda faoliyat ko'rsatayotgan pedagoglar
          </h1>
          <p className="text-sky-700 text-sm sm:text-base max-w-2xl mx-auto font-montserrat">
            To'xtasin Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi pedagoglari ro'yxati
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-sky-100 p-4 text-center">
            <div className="text-2xl font-bold text-sky-900 font-montserrat">{pedagoglar.length}</div>
            <div className="text-sky-600 text-sm">Jami pedagoglar</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-sky-100 p-4 text-center">
            <div className="text-2xl font-bold text-sky-900 font-montserrat">{pedagoglar.filter(p => p.malumot === 'oliy').length}</div>
            <div className="text-sky-600 text-sm">Oliy ma'lumotli</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-sky-100 p-4 text-center">
            <div className="text-2xl font-bold text-sky-900 font-montserrat">{new Set(pedagoglar.map(p => p.yonalish)).size}</div>
            <div className="text-sky-600 text-sm">Yo'nalishlar</div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-sky-100 overflow-hidden">
          
          {/* Desktop Table Layout (lg and above) */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-sky-200">
                <thead className="bg-sky-100 sticky top-0 z-10">
                  <tr>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider w-12 font-montserrat">#</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider min-w-[200px] font-montserrat">F.I.Sh.</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider w-20 font-montserrat">Ma'lumoti</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider min-w-[250px] font-montserrat">O'quv yurti</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider min-w-[150px] font-montserrat">Mutaxassisligi</th>
                    <th scope="col" className="px-3 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider w-24 font-montserrat">Yo'nalish</th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-sky-900 uppercase tracking-wider min-w-[140px] font-montserrat">Ishlash muddati</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-sky-100">
                  {pedagoglar.map((item, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'hover:bg-sky-50 transition-colors duration-150' : 'bg-sky-50 hover:bg-sky-100 transition-colors duration-150'}
                    >
                      <td className="px-3 py-4 text-sky-700 font-semibold text-sm font-montserrat">{idx + 1}</td>
                      <td className="px-4 py-4 text-sky-700 text-sm font-medium font-montserrat">
                        <div className="max-w-[200px] break-words">{item.fio}</div>
                      </td>
                      <td className="px-3 py-4 text-sky-700 text-sm font-montserrat">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          {item.malumot}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sky-700 text-sm">
                        <div className="max-w-[250px] break-words leading-relaxed">{item.oqish}</div>
                      </td>
                      <td className="px-4 py-4 text-sky-700 text-sm">
                        <div className="max-w-[150px] break-words">{item.mutaxassis}</div>
                      </td>
                      <td className="px-3 py-4 text-sky-700 text-sm font-montserrat">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {item.yonalish}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sky-700 text-sm">
                        <div className="max-w-[140px] break-words text-xs">{item.boshlagan}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tablet Layout (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <div className="p-4 space-y-4">
              {pedagoglar.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-sky-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-900 text-white text-sm font-bold">
                            {idx + 1}
                          </span>
                          <h3 className="font-semibold text-sky-900 text-lg font-montserrat">{item.fio}</h3>
                        </div>
                        <div className="flex space-x-2">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {item.malumot}
                          </span>
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                            {item.yonalish}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-xs font-medium text-sky-600 uppercase tracking-wide block mb-1 font-montserrat">O'quv yurti</span>
                      <span className="text-sky-800 text-sm font-montserrat">{item.oqish}</span>
                    </div>
                    
                    <div>
                      <span className="text-xs font-medium text-sky-600 uppercase tracking-wide block mb-1 font-montserrat">Mutaxassisligi</span>
                      <span className="text-sky-800 text-sm font-montserrat">{item.mutaxassis}</span>
                    </div>
                    
                    <div className="col-span-2">
                      <span className="text-xs font-medium text-sky-600 uppercase tracking-wide block mb-1 font-montserrat">Ishlash muddati</span>
                      <span className="text-sky-800 text-sm font-montserrat">{item.boshlagan}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Card layout */}
          <div className="md:hidden">
            <div className="p-4 space-y-4">
              {pedagoglar.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-sky-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-900 text-white text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {item.malumot}
                      </span>
                    </div>
                    <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.yonalish}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-sky-900 text-base mb-1 font-montserrat">{item.fio}</h3>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-sky-600 uppercase tracking-wide font-montserrat">O'quv yurti</span>
                        <span className="text-sky-800 mt-1 font-montserrat">{item.oqish}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-sky-600 uppercase tracking-wide font-montserrat">Mutaxassisligi</span>
                        <span className="text-sky-800 mt-1 font-montserrat">{item.mutaxassis}</span>
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-sky-600 uppercase tracking-wide font-montserrat">Ishlash muddati</span>
                        <span className="text-sky-800 mt-1 font-montserrat">{item.boshlagan}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-sky-600 font-montserrat">
            Jami pedagoglar soni: <span className="font-semibold">{pedagoglar.length}</span> |
            Oxirgi yangilanish: <span className="font-semibold">{new Date().toLocaleDateString('uz-UZ')}</span>
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Xodimlar;
