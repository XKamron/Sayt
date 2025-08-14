import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BmsmPedagogikKengash = () => {
  const content = [
    {
      title: "Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi Ustavi bilan TASDIQLANGAN",
      text: "Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi pedagogik kengashi to'g'risida NIZOM"
    },
    {
      title: "1. Umumiy qoidalar",
      text: `Davlatning musiqa va san’at yo‘nalishi bo‘yicha ta’lim siyosatini amalga oshirish, maqsad va vazifalardan kelib chiqqan holda ta’lim-tarbiya jarayonini rivojlantirish, uni takomillashtirishda pedagogik jamoaning faoliyat yo‘nalishini belgilash, ta’limdagi yutuqlarni va ilg‘or pedagogik tajribalarni amaliyotga joriy etishda pedagogik jamoani birlashtirish, demokratiya, oshkoralik, o‘zini o‘zi boshqarish tamoyillari asosida boshqaruvni amalga oshirish maqsadida muassasada pedagogik kengash tashkil qilinadi.`
    },
    {
      text: `Pedagogik kengash muassasaning yuqori boshqaruv organi hisoblanadi.`
    },
    {
      title: "2. Tashkil etish tartibi",
      text: `6-son BMSMning direktori pedagogik kengash raisi hisoblanadi. Pedagogik kengash kotibi pedagog xodimlar orasidan tayinlanadi.`
    },
    {
      text: `Pedagogik kengash raisi o‘z vazifasini bajara olmaydigan (kasal bo‘lgan, xizmat safariga ketgan va hokazo) holatlarda uning vazifalari direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari tomonidan amalga oshiriladi.`
    },
    {
      title: "3. Tarkibi",
      text: `Pedagogik kengash tarkibi muassasa direktori, direktorning o‘quv-ma’rifiy ishlar bo‘yicha o‘rinbosari va pedagog xodimlardan iborat bo‘ladi. Muassasaning har bir pedagog xodimi ishga qabul qilingan paytdan boshlab pedagogik kengashning a’zosi hisoblanadi.`
    },
    {
      title: "4. Ishtirokchilar",
      text: `Pedagogik kengashda muhokama qilinadigan masalalarning mazmunidan kelib chiqib, yig‘ilishga tegishli Madaniyat boshqaruv organlari, ota-onalar qo‘mitasi, fuqarolarning o‘zini o‘zi boshqarish organi, mahalliy davlat hokimiyati, huquqni muhofaza qiluvchi organlar va boshqa tashkilotlar vakillari taklif qilinishi mumkin.`
    },
    {
      title: "5. Nazorat",
      text: `Pedagogik kengashning faoliyati tegishli Madaniyat boshqaruv organlari (bo‘ysunuviga ko‘ra yuqori turuvchi tashkilot) tomonidan nazorat qilinadi.`
    },
    {
      title: "6. Faoliyat tartibi",
      text: `Pedagogik kengash faoliyati muassasa yillik ish rejasida maxsus band bilan aks etadi. Ish reja pedagogik kengash yig‘ilishida ko‘rib chiqilib, ma’qullanganidan so‘ng pedagogik kengash raisi tomonidan tasdiqlanadi.`
    },
    {
      title: "7. Yig‘ilish mavzulari",
      text: `Pedagogik kengash yig‘ilishida muassasaning faoliyatiga oid eng muhim va dolzarb masalalar muhokama qilinadi.`
    },
    {
      title: "8. Yig‘ilish tartibi",
      text: `Pedagogik kengash yig‘ilishi har chorakda kamida bir marta o‘tkaziladi. Zaruriyatga ko‘ra, navbatdan tashqari yig‘ilish o‘tkazilishi mumkin.`
    },
    {
      text: `Pedagogik kengash yig‘ilishi bayonnomasi uning kotibi tomonidan yuritiladi. Bayonnoma pedagogik kengash raisi va kotibi tomonidan imzolanadi.`
    },
    {
      text: `Bayonnomalarning raqami, sanasi va yig‘ilishda ko‘rilgan masalalar to‘g‘risidagi ma’lumotlar pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftariga yozib boriladi. Pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftari raqamlanadi, ip o‘tkazib tikiladi hamda tegishli Madaniyat boshqaruv organi (bo‘ysunuviga ko‘ra yuqori turuvchi tashkilot) tomonidan imzolanib, muhrlanadi.`
    },
    {
      title: "9. Bayonnoma tuzish tartibi",
      text: `Bayonnomaning kirish qismida pedagogik kengash yig‘ilishi o‘tkazilgan sana, bayonnoma tartib raqami, ishtirok etganlar va ularning soni yoziladi.`
    },
    {
      text: `Pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftarida kun tartibiga kiritilgan masala muhokamasi, pedagogik kengash a’zolari tomonidan kiritilgan taklif va mulohazalar hamda kun tartibidagi har bir masala yuzasidan qabul qilingan qarorlar qayd etib boriladi.`
    },
    {
      text: `Pedagogik kengash yig‘ilishi bayonnomalarini raqamlash har o‘quv-yili boshida (avgust oyida) yangidan boshlanadi.`
    },
    {
      title: "10. Yig‘ilishning vakolatli bo‘lishi",
      text: `Pedagogik kengashning yig‘ilishlari, agar ularda barcha kengash a’zolari umumiy sonining kamida uchdan ikki qismi, navbatdan tashqari yig‘ilishda esa uchdan bir qismi ishtirok etayotgan bo‘lsa, vakolatli hisoblanadi.`
    },
    {
      title: "11. Qaror qabul qilish tartibi",
      text: `Pedagogik kengash qarorlarini qabul qilish ochiq ovoz berish orqali amalga oshiriladi.`
    },
    {
      text: `Pedagogik kengash qarori uning yig‘ilishida ishtirok etgan a’zolari umumiy sonining oddiy ko‘pchilik ovozi bilan qabul qilinadi. Ovozlar teng bo‘lib qolgan taqdirda pedagogik kengash raisi hal qiluvchi ovozga ega bo‘ladi.`
    },
    {
      title: "12. Xabardor qilish",
      text: `Pedagogik kengash yig‘ilishini o‘tkazish vaqti, joyi va kun tartibi bir hafta oldin e’lon qilinadi (navbatdan tashqari pedagogik kengash yig‘ilishi bundan mustasno).`
    },
    {
      title: "13. Materiallar tayyorlash",
      text: `Pedagogik kengash yig‘ilishida muhokama qilinadigan masalalar bo‘yicha tayyorlanadigan materiallar yig‘ilish boshlanishidan kamida bir hafta oldin ijrochilar tomonidan rahbariyatga yoki yig‘ilish kotibiga topshirilishi shart.`
    },
    {
      title: "14. Pedagogik kengash huquqlari",
      text: `6-son BMSMning pedagogik kengashi quyidagi huquqlarga ega:`,
      list: [
        "o‘quv jarayonini takomillashtirish va moddiy-texnik bazasini mustahkamlash bo‘yicha qarorlar qabul qilish;",
        "o‘quv-yili yakunida o‘quvchilarni keyingi sinfga ko‘chirish yoki sinfda qoldirish masalalarini hal etish;",
        "o‘quv, ma’naviy-ma’rifiy, ilmiy-metodik va tajriba-sinov ishlarida faol ishtirok etgan pedagog xodimlarni moddiy rag‘batlantirish yuzasidan muassasa huzuridagi maxsus komissiyaga taklif kiritish;",
        "pedagog xodimlar orasidan muassasa huzuridagi maxsus komissiyaning kamida ikki nafar a’zosini tayinlash;",
        "pedagog xodimning malaka toifasini oshirish bo‘yicha tavsiya berish;",
        "ko‘rik-tanlovlar, festivallar, ustoz saboqlari, mahorat darslari hamda boshqa musiqiy va san’at tadbirlarida o‘qituvchi-o‘quvchilarning ishtirok etishlari uchun nomzodlarni tavsiya etish;",
        "o‘quv jarayonini takomillashtirish bo‘yicha choralar ko‘rish;",
        "6-son BMSMning istiqbol rejasini belgilash."
      ],
      note: "Pedagogik kengash qonun hujjatlariga hamda o‘z vazifalariga muvofiq boshqa huquqlarga ham ega bo‘lishi mumkin."
    },
    {
      title: "15. Pedagogik kengash majburiyatlari",
      text: `6-son BMSMning pedagogik kengashi quyidagilarga majbur:`,
      list: [
        "muassasaning ish rejasi ijrosi bo‘yicha belgilangan tartibda hisobotlar tinglash;",
        "pedagog xodimlar va o‘quvchilarning huquqlari va qonuniy manfaatlarini himoya qilish;",
        "umumiy faoliyatga oid eng muhim va dolzarb masalalarni muhokama qilish;",
        "har chorakda metodik kengashning faoliyatiga doir hisobotini ko‘rib chiqish;",
        "ta’lim-tarbiya sifatini yanada yaxshilash bo‘yicha berilgan har qanday taklifni qabul qilish va ko‘rib chiqish;",
        "dars mashg‘ulotlari o‘quv rejasini o‘quvchilar tomonidan o‘zlashtirishga qulay bo‘lishi nuqtai nazaridan takomillashtirish;",
        "ta’lim-tarbiyaga oid munozarali masalalarni muhokama qilish va yakuniy qaror qabul qilish;",
        "zamonaviy axborot-kommunikatsion texnologiyalarni joriy etish bo‘yicha pedagogik izlanishlarni va ijodiy tashabbuskorliklarni qo‘llab-quvvatlash;",
        "o‘quv jarayonini samarali tashkil qilishning turli shakl va uslublarini muhokama qilish va amaliyotga tatbiq etish;",
        "pedagog xodimlarga maktabdan tashqari ta’limga oid normativ-huquqiy va metodik hujjatlarning yetkazilishi va tushuntirish ishlarining olib borilishini nazorat qilish."
      ],
      note: "Pedagogik kengash faoliyati qonun hujjatlarida ko‘zda tutilgan boshqa majburiyatlar va vazifalarga ham ega bo‘lishi mumkin."
    },
    {
      title: "16. Hujjatlar",
      text: `6-son BMSMda pedagogik kengash faoliyatiga oid quyidagi hujjatlar bo‘lishi lozim:`,
      list: [
        "Madaniyat boshqaruv organi (bo‘ysunuviga ko‘ra yuqori turuvchi tashkilot) tomonidan tasdiqlangan muassasaning pedagogik kengashi to‘g‘risidagi nizom;",
        "pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftari."
      ],
      note: "Kengash qarorlarini ijroga yo‘naltirish yoki talab etilganda pedagogik kengash yig‘ilishi bayonnomasidan ko‘chirma tayyorlanishi mumkin."
    },
    {
      title: "17. Hujjatlarni saqlash tartibi",
      text: `Pedagogik kengash yig‘ilishi bayonnomalarini qayd etish daftarining saqlanishiga pedagogik kengash raisi va kotibi javobgar hisoblanadi.`
    },
    {
      text: `Pedagogik kengash yig‘ilish bayonnomalarini qayd etish daftari yuritilishga qarab (bir necha qismli daftarlar ham tutilishi mumkin) 5-yil davomida saqlanadi hamda o‘rnatilgan tartibda arxivga topshiriladi.`
    },
    {
      title: "18. Qarorlarni ijro etish",
      text: `Pedagogik kengash qarorlarini bajarish belgilangan xodimlar uchun majburiy bo‘lib, qarorlar ijrosining umumiy nazorati pedagogik kengash raisi tomonidan amalga oshiriladi.`
    },
    {
      title: "19. Qo‘shimcha qoidalar",
      text: `Pedagogik kengashda muassasa faoliyatiga oid turli qarorlar, shuningdek, kengash a’zolari ro‘yxatini tasdiqlash to‘g‘risidagi qaror qabul qilinadi.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />

      <main className="flex-grow py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto w-full">
          {/* Page Header */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              BMSM Pedagogik Kengashi
            </h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
              Toshkent shahar Chilonzor tumani T. Jalilov nomidagi 6-son bolalar musiqa va san'at maktabi
            </p>
          </section>

          {/* Content */}
          <div className="bg-white overflow-hidden">
            <div className="p-6 sm:p-8">
              {content.map((section, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {section.title && (
                    <h2 className="text-lg sm:text-xl font-bold text-sky-800 mb-3">
                      {section.title}
                    </h2>
                  )}
                  {section.text && (
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      {section.text}
                    </p>
                  )}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      {section.list.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="text-gray-600 text-sm italic mt-3">
                      {section.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BmsmPedagogikKengash;