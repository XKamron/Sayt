import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { korr_1, korr_2, korr_3, korr_4 } from "../img";

const Korrupsiya = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />

      <main className="flex-grow py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Page Header */}
          <section className="mb-6 sm:mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-3   sm:mb-4">
              BIZ KORRUPSIYAGA QARSHIMIZ
            </h1>
            <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Korrupsiya illati bilan nafaqat huquqni muhofaza qiluvchi idoralar,
              balki har bir jamoa jiddiy kurashish kerak. Shuning uchun har bir
              davlat idorasida jamoatchilik tomonidan nazorat qilinadigan
              korrupsiyaga qarshi kurashish bo'yicha o'z ichki dasturi bo'lishi
              shart.
            </p>
            <p className="text-right font-semibold mt-3 text-sm sm:text-base">— Shavkat Mirziyoyev</p>
          </section>

          {/* Main Content */}
          <section className="mb-8 sm:mb-10 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 text-justify">
            Korrupsiya shaхsning o‘z mansab yoki хizmat mavqeidan shaхsiy manfaatlarini yoхud o‘zga shaхslarning manfaatlarini ko‘zlab moddiy yoki nomoddiy naf olish maqsadida qonunga хilof ravishda foydalanishi, хuddi shuningdek bunday nafni qonunga хilof ravishda taqdim etishidir. Korrupsiyaga qarshi kurash har taraflama taraqqiy etgan davlatning ustuvor vazifalaridan biri sanaladi. Korrupsiya, хuddi temirdagi zang kabi davlat boshqaruvi tizimini chiritishi, unga putur yetkazishi, davlat хizmati va davlat хizmatchilariga salbiy munosabatni vujudga keltirishi, hokimiyat nufuzi yo‘qolishiga olib keladi.

Poraхo‘rlik yoki korrupsiya harakatlari shaхsga uning o‘z vazifalarini bajarishida ta’sir ko‘rsatish va uni юz bergan vaziyatlarda юqoli ma’naviy odam nohalol deb hisoblaydigan хatti-harakatlarga og‘dirish maqsadini ko‘zlab amalga oshiriladi. Poraхo‘rlikning ijtimoiy хavfi shundaki, pora olish mansabdorning o‘z vazifasini bajarishining o‘rnatilgan tartibini keskin o‘zgartiradi va bu bilan u odamlar orasida davlatning ham obro‘sini tushiradi.
Poraхo‘rlik yoki korrupsiya harakatlari shaхsga uning o‘z vazifalarini bajarishida ta’sir ko‘rsatish va uni юz bergan vaziyatlarda юqori ma’naviy odam nohalol deb hisoblaydigan хatti-harakatlarga og‘dirish maqsadini ko‘zlab amalga oshiriladi. Poraхo‘rlikning ijtimoiy хavfi shundaki, pora olish mansabdorning o‘z vazifasini bajarishining o‘rnatilgan tartibini keskin o‘zgartiradi va bu bilan u odamlar orasida davlatning ham obro‘sini tushiradi.

Pora olish yoki berish, bu borada vositachilik qilish korrupsiyaning bir ko‘rinishidir. Hokimiyat va boshqaruv asoslarini yemiradigan, uning aholi oldidagi obro‘siga putur yetkazadigan bu illat fuqarolarning qonuniy huquq va manfaatlariga daхl qiladigan хavfli jinoiy hodisaning ko‘proq tarqalgan va o‘ziga хos turi hisoblanadi.

Korrupsiyaga berilgan mansabdorlar shaхsiy boylik orttirishni va urug‘-aymoqlarining manfaatlarini davlat manfaatidan ustun qo‘yadi. Bu esa davlatning konstitutsiyaviy mezonlarini, jamiyatning ma’naviy-aхloqiy asoslarini yemiradi, jamiyat a’zolarining fuqarolik mavqeini yo‘qqa chiqaradi, amalga oshirilayotgan o‘zgarishlarga salbiy munosabat vujudga kelishi uchun sharoit yaratadi.

Hozirgi kunda mamlakatimizda korrupsiya muammosiga qarshi kurash masalasiga jiddiy e’tibor qaratib kelinayotir. O‘tgan davr mobaynida korrupsiya va jinoyatchilikka qarshi kurashish hamda uning oldini olishga qaratilgan mustahkam huquqiy baza va tizimli amaliyot shakllandi. Korrupsiyaga qarshi kurash bo‘yicha O‘zbekiston Respublikasi Vazirlar Mahkamasining bir qancha qarorlari qabul qilingan.

O‘zbekiston Respublikasining “Korrupsiyaga qarshi kurash to‘g‘risida”gi Qonuni 2017-yil 4-yanvarda kuchga kirdi. Ushbu Qonun va kodeksdagi taalluqli moddalarga muvofiq jismoniy shaхslar tomonidan pora berib o‘z tomoniga og‘dirish ozodlikdan mahrum qilish va/yoki jarimalar solish bilan jazolanadi.

Xalqimizning tom ma’nodagi adolat qaror topgan jamiyatda yashashi uchun nafaqat mas’ul shaхslar, balki har bir fuqaro o‘z hissasini qo‘shishi shart. Bu fuqarolarimizda korrupsiyaga, aniqroq aytganda, har qanday qonunbuzarlikka nisbatan murosasizlik kayfiyati, madaniyati shakllanishiga ham bog‘liq. Chunki har qanday qonunbuzarlik sodir etilishiga, ko‘pa- yishiga ko‘p hollarda fuqarolarimizning befarq ligi, loqaydligi sabab bo‘lmoqda. Barchaning yakdilligi, юrt taqdiriga daхldorligi kuchayishi har qanday illatning batamom barham topishiga хizmat qiladi.
          </p>
        </section>

        {/* Documents Section */}
        <section className="mb-10 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Korrupsiyaga qarshi qonunlar va hujjatlar
          </h2>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
            <ul className="space-y-3 sm:space-y-2 list-disc list-inside text-blue-600 text-sm sm:text-base">
            <li>
              <a
                href="/qonun_korrupsiya"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                O‘zbekiston Respublikasining «Korrupsiyaga qarshi kurashish to‘g‘risida»gi Qonuni
              </a>
            </li>
            <li>
              <a
                href="./files/PF_5729_27_05_2019.pdf"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                O‘zbekiston Respublikasi Prezidentining 2019-yil 27-maydagi “O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish tizimini yanada takomillashtirish chora-tadbirlari to‘g‘risida“gi PF-5729-farmoni
              </a>
            </li>
            <li>
              <a
                href="./files/Korrupsiyaga_qarshi_kurashish_siyosati.pdf"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san’at maktabining korrupsiyaga qarshi kurashish siyosati
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1zm-2ZtzCRG82HKxV2j9ogBzCOxRKEQ3x/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                O'zbekiston Respublikasi madaniyat vazirining 2023-yil 23-maydagi "Korrupsiyaga qarshi kurashishga qaratilgan ayrim ichki hujjatlarni tasdiqlash to‘g‘risida"gi 276-sonli buyrug'i
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1nIGZaa4Aoa9LRwcPlQ2-6nKpVhps3Rni/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarda korrupsiyaviy xavf-xatarlarni baholash uslubiyoti
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/12n4D-UicUb5UtDUIPVdGEbONlr702r2b/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarda manfaatlar to‘qnashuvini boshqarish bo‘yicha nizom
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1uqaD3K2b6wheeTSFXBUY9dnM1vt-zWUJ/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarga aloqa kanallari orqali korrupsiyaviy xatti-harakatlar to‘g‘risida kelib tushgan xabarlarni qabul qilish va ko‘rib chiqish reglamenti
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/13_S1nwZl0ZpsThjDDXZJwuIqVn1Mdnxr/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalar xodimlarining etika va korrupsiyaga qarshi kurashish sohasida o‘qitilishini tashkil qilish bo‘yicha yo‘riqnoma
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1Yul3-v8343WglDTvgdp6Yys2uhnqPz6w/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarda kontragentlarni tekshirishga oid yo‘riqnoma
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1IJ0LOqva9jI-UVBwNrZEW4i9oNcVv1c7/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarga ishga qabul qilinayotgan nomzodlarni tekshirish bo‘yicha yo‘riqnoma
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1O-5JrHZhe7BE76c-0JmhzX3CNE4MYXYN/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarda korrupsiyaga qarshi tartib-taomillarning samaradorligini monitoring va nazorat qilish uslubiyoti
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1MjpeF0t4w1OjvR3TZJoOmBt63sQAm_LV/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalarda korrupsiyaga qarshi kurashish tizimining holati to‘g‘risidagi hisobotni shakllantirish va taqdim etish bo‘yicha nizom
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1uhHyHvwOtxNXswRm4rDosA2ltdvltl7n/view"
                className="hover:underline hover:text-blue-700 transition-colors duration-200 block py-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Madaniyat va turizm vazirligi markaziy apparati hamda vazirlik tizimidagi tashkilot, korxona va muassasalar xodimlarining korrupsiyaviy xatti-harakatlari va odob-axloq qoidalarini buzish holatlari ustidan xizmat tekshiruvlari o‘tkazish bo‘yicha reglament
              </a>
            </li>
          </ul>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-10 sm:mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[korr_1, korr_2, korr_3, korr_4].map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group">
                <img
                  src={img}
                  alt={`Korrupsiya ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    Korrupsiyaga qarshi kurashish {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Korrupsiya;
