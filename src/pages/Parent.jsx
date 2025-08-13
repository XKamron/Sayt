import React from 'react';
import {
  FaUsers, FaGavel, FaClipboardList, FaMoneyBillWave,
  FaChild, FaHeart, FaHandshake, FaInfoCircle, 
  FaFileAlt, FaFileSignature, FaFileDownload
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Parent = () => {
  const rightsData = [
    { icon: FaGavel, text: "Bolalar musiqa va san'at maktabi rahbariyatidan farzandi uchun mazkur maktabning ustaviga muvofiq zarur shart-sharoitlar yaratilishini talab qilish" },
    { icon: FaHeart, text: "Bola shaxsiga hurmat bilan munosabatda bo'lishni talab qilish" },
    { icon: FaHandshake, text: "Jamoatchilik asosida bolalar musiqa va san'at maktabining ish faoliyatida ishtirok etish" },
    { icon: FaInfoCircle, text: "Qonun hujjatlarida belgilangan boshqa huquqlar" }
  ];

  const responsibilitiesData = [
    { icon: FaHeart, text: "Farzandining jismoniy va ruhiy sog'lom bo'lishi uchun g'amxo'rlik qilish" },
    { icon: FaChild, text: "Bolaning qadr-qimmatiga hurmat bilan qarash, uni mehnatsevarlik, ezgulik, vatanparvarlik ruhida tarbiyalash" },
    { icon: FaGavel, text: "Farzandida qonunlarga itoatkorlik, inson huquqlari va erkinliklariga hurmat tuyg'usini tarbiyalash" },
    { icon: FaClipboardList, text: "Farzandiga o'quv mashg'ulotlarida ishtirok etishi uchun zarur shart-sharoitlar yaratish" },
    { icon: FaUsers, text: "Farzandining ta'lim olishiga ko'maklashish va uzrli sabablarsiz o'quv mashg'ulotlariga muntazam qatnashishini ta'minlash" },
    { icon: FaMoneyBillWave, text: "O'qish uchun to'lovni o'z vaqtida amalga oshirish" }
  ];

  const InfoCard = ({ icon: Icon, children, color = "bg-white" }) => (
    <div className={`${color} rounded-xl shadow-md border border-gray-200 p-5 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-medium`}>
      <div className="flex items-start space-x-3">
        {Icon && (
          <div className="flex-shrink-0 mt-1">
            <div className="w-9 h-9 bg-sky-100 rounded-full flex items-center justify-center">
              <Icon className="text-sky-600 text-base" />
            </div>
          </div>
        )}
        <div className="flex-1 text-gray-700 text-sm sm:text-base leading-relaxed">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 font-Montserrat">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-14 sm:py-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight animate-fade-in">
            Ota-onalar, sizlar uchun!
          </h1>
          <p className="text-lg sm:text-xl text-orange-100 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-200 font-medium">
            Farzandingizning musiqa va san'at sohasidagi rivojlanishi uchun muhim ma'lumotlar
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 font-sans">
        {/* Introduction Section */}
        <section>
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 sm:p-8 hover:shadow-xl transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                <FaInfoCircle className="text-orange-600 text-xl" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Muhim ma'lumot</h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                  Bolaning musiqa va san'at maktabiga o'qishga kirishi - oila hayotidagi muhim voqea bo'lib, 
                  bu oila a'zolaridan ushbu voqeaga jiddiy yondashishini talab qiladi. Farzandingizning 
                  o'zlashtirishi bilan qiziqib maktabga kelib tashrif buyurib tursangiz, pedagoglardan olgan 
                  maslahatlarga amal qilib farzandingizga uy vazifalarini bajarishda yordam bersangiz - bu 
                  Sizning farzandingizni kelajakdagi yutuqlariga qo'shgan g'oyat katta ulushingizdir.
                </p>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg shadow-sm">
                  <p className="text-sm text-orange-800 font-medium">
                    <strong>Eslatma:</strong> Maktabimizda ota-onalar qo'mitasi faoliyat olib boradi. 
                    Maktab pedagoglari tomonidan ota-onalar uchun davra stollari, seminarlar tashkil etilib turiladi. 
                    Sizlardan ushbu tadbirlarda ishtirok etishingizni, maktabda tashkil etiladigan konsertlarda tashrif buyurishingizni iltimos qilib qolamiz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Section */}
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Ota-onalar uchun</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-gray-700">
              Bizning maktabda farzandlaringizning ijodiy salohiyatini rivojlantirishda yordam beramiz
            </p>
          </section>

          {/* Rights Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Ota-onalar huquqlari</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 text-center">
              Maktab Ustaviga muvofiq ota-onalar quyidagi huquqlarga ega
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rightsData.map((right, idx) => (
                <InfoCard key={idx} icon={right.icon} color="bg-green-50">{right.text}</InfoCard>
              ))}
            </div>
          </section>

          {/* Responsibilities Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">Ota-onalar majburiyatlari</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 text-center">
              Farzandingizning muvaffaqiyatli ta'lim olishi uchun quyidagi majburiyatlarni bajarish zarur
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {responsibilitiesData.map((responsibility, idx) => (
                <InfoCard key={idx} icon={responsibility.icon} color="bg-blue-50">{responsibility.text}</InfoCard>
              ))}
            </div>
          </section>

          {/* Documents Section */}
          <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Bolalar musiqa va san'at maktabiga o'qishga kirish uchun taqdim etiladigan hujjatlar
          </h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Asosiy hujjatlar:</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>ta'lim yo'nalishi (yo'nalishlari) ko'rsatilgan ariza;</li>
                <li>o'quvchining tug'ilganlik haqidagi guvohnomasi nusxasi;</li>
                <li>o'quvchiga belgilangan shaklda berilgan tibbiy ma'lumotnoma;</li>
                <li>3 x 4 o'lchamli 2 ta fotosurat.</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-4">Boshqa maktablardan o'tgan o'quvchilar uchun qo'shimcha hujjatlar:</h3>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                <li>o'qigan joyidan ma'lumotnoma;</li>
                <li>o'quvchining baholar (o'zlashtirish) tabeli;</li>
                <li>yakka tartibdagi ish rejasi (musiqa yo'nalishlari uchun).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Application Forms Section */}
        <section className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Ota-onalar tomonidan to'ldiriladigan arizalar namunalari
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition space-y-5">
              <a href="/files/Ota_ona_1_sinfga_qabul.pdf" className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors" download>
                <FaFileAlt className="text-blue-600" />
                <p className="font-medium text-gray-800">O'quvchini o'qishga qabul qilish to'g'risida ariza</p>
                <FaFileDownload className="ml-auto text-gray-400" />
              </a>
              <a href="/files/Ota_ona_cholgu asbobi olish uchun tilxat.pdf" className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors" download>
                <FaFileAlt className="text-blue-600" />
                <p className="font-medium text-gray-800">Musiqa cholg'u asbobi berish to'g'risida ariza va tilxat</p>
                <FaFileDownload className="ml-auto text-gray-400" />
              </a>
              <a href="/files/Ota_ona_boshqa_maktabdan_utkazish.pdf" className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors" download>
                <FaFileAlt className="text-blue-600" />
                <p className="font-medium text-gray-800">O'quvchini boshqa maktabdan o'tkazish to'g'risida ariza</p>
                <FaFileDownload className="ml-auto text-gray-400" />
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition space-y-4">
              <a href="/files/Ota_ona_Badal_pulidan_ozod_ariza.pdf" className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors" download>
              <FaFileAlt className="text-blue-600" />
                <p className="font-medium text-gray-800">Badal pulidan ozod qilish to'g'risida ariza</p>
                <FaFileDownload className="ml-auto text-gray-400" />
              </a>
              <a href="/files/Ota-onalar_bilan_shartnoma.pdf" className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors" download>
              <FaFileAlt className="text-blue-600" />
                <p className="font-medium text-gray-800">Ota-onalar bilan shartnoma</p>
                <FaFileDownload className="ml-auto text-gray-400" />
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 mb-10 hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center space-y-2 md:text-left">
                <a href="/files/Ota_onalar_badal_puli_Nizom (1).pdf" download>
                <p className="text-base sm:text-lg font-medium text-[blue] underline">
                  Ota-onalar tomonidan bolalarning bolalar musiqa va san'at maktablarida o'qishi uchun haq to'lash va undan foydalanish tartibi to'g'risida NIZOM
                </p>
                </a>
                <a href="/files/Ota-onalar_qumitasi_Nizomi.pdf" download>
                <p className="text-base sm:text-lg font-medium text-[blue] underline">
                  6-sonli bolalar musiqa va san'at maktabi ota-onalar qo'mitasi to'g'risidagi Nizom
                </p>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#00486C] mb-8">
              Bolalarning o‘qishi uchun to‘lanadigan haq miqdori
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <div className="bg-[#F0F8FF] rounded-lg p-4 flex flex-col items-center shadow-sm">
                  <p className="text-base sm:text-lg mb-2 font-medium">Musiqa yo'nalishi:</p>
                  <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-[#00486C]">255 000 so'm</h1>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-4 flex flex-col items-center shadow-sm">
                  <p className="text-base text-center sm:text-lg mb-2 font-medium">Bir oiladan 2 yoki undan ortiq farzand o‘qigan taqdirda, har bir farzand uchun:</p>
                  <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-[#00486C]">178 500 so‘m</h1>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="bg-[#F0F8FF] rounded-lg p-4 flex flex-col items-center shadow-sm">
                  <p className="text-base sm:text-lg mb-2 font-medium">San'at yo'nalishi:</p>
                  <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-[#00486C]">170 000 so'm</h1>
                </div>
                <div className="bg-[#F0F8FF] rounded-lg p-4 flex flex-col items-center shadow-sm">
                  <p className="text-base text-center sm:text-lg mb-2 font-medium">Bir oiladan 2 yoki undan ortiq farzand o‘qigan taqdirda, har bir farzand uchun:</p>
                  <h1 className="font-extrabold text-3xl sm:text-4xl text-center text-[#00486C]">119 000 so‘m</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Parent;
