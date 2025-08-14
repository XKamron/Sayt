import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Aktorlik_sanati = () => {
  
//   const tabs = [
//     {
//       title: 'I bo`lim. Umumiy qoidalar', 
//       content: (
//         <div className="space-y-6">
//           <h2 className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] mb-6">I bo'lim. Umumiy qoidalar</h2>
//           <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//             <h3 className='text-lg sm:text-xl font-semibold text-red-600 mb-4'>1-modda. O'zbekiston Respublikasida aholini ish bilan ta'minlash to'g'risidagi qonunlar</h3>
//             <p className='text-gray-700 leading-relaxed text-sm sm:text-base'>Aholini ish bilan ta'minlashga oid munosabatlar mazkur Qonun, O'zbekiston Respublikasining boshqa qonun hujjatlari bilan, Qoraqalpog'iston Respublikasi hududida esa Qoraqalpog'iston Respublikasi qonunlari bilan ham tartibga solib boriladi.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//             <h3 className='text-lg sm:text-xl font-semibold text-red-600 mb-4'>2-modda. O‘zbekiston Respublikasi aholisini ish bilan ta’minlash</h3>
//             <p>1. Ish bilan ta’minlash odamlarning O‘zbekiston Respublikasi Konstitutsiyasiga va qonunlariga zid kelmaydigan, o‘z shaxsiy va ijtimoiy ehtiyojlarini qondirish bilan bog‘liq bo‘lgan, ularga ish haqi (mehnat daromadi) keltiradigan faoliyatidir.

// Unumli va ijodiy mehnat qilishga bo‘lgan o‘z qobiliyatlarini tasarruf etish va qonun bilan taqiqlanmagan har qanday faoliyat, shu jumladan haq to‘lanadigan ishni bajarish bilan bog‘liq bo‘lmagan faoliyat bilan shug‘ullanish O‘zbekiston Respublikasi fuqarolarining mutlaq huquqlaridir.

// Mehnat qilishga ma’muriy yo‘l bilan biron-bir shaklda majbur etishga yo‘l qo‘yilmaydi. O‘zbekiston Respublikasi qonunlarida ko‘zda tutilgan hollar bundan mustasno. Odamlarning ixtiyoriy ravishda ish bilan band bo‘lmasligi ularni javobgarlikka tortish uchun asos bo‘lmaydi.

// 2. O‘zbekiston Respublikasining:

// yollanib ishlaydigan, shu jumladan haq evaziga to‘la yoki to‘la bo‘lmagan ish kunida (haftasida) ish bajaradigan, shuningdek shartnoma (kontrakt, bitim) bilan tasdiqlangan haq to‘lanadigan ishga ega bo‘lgan, lekin betobligi, otpuska, ishlab chiqarishning vaqtincha to‘xtatib qo‘yilganligi munosabati bilan vaqtincha ishda bo‘lmagan fuqarolari;

// o‘zini ish bilan mustaqil ta’minlaydigan fuqarolari, shu jumladan tadbirkorlar, ishlab chiqarish kooperativlarining a’zolari, fermerlar va ularning ishlab chiqarishda qatnashayotgan oila a’zolari;

// haq to‘lanadigan lavozimga saylangan, tayinlangan yoki tasdiqlangan fuqarolari;

// Qurolli Kuchlarda, ichki qo‘shinlar va temir yo‘l qo‘shinlarida, milliy xavfsizlik va ichki ishlar organlarida xizmatini o‘tayotgan harbiy xizmatchilar, shuningdek noharbiy (muqobil) xizmatni o‘tayotganlar;

// xalqaro hamda chet el tashkilotlarida ishlovchi fuqarolari;

// shaxsiy tomorqa xo‘jaligida va dehqon (fermer) xo‘jaligida ishlab, mahsulotini jamoa xo‘jaliklari, sho‘ro xo‘jaliklari va matlubot kooperatsiyasi tashkilotlariga topshiruvchi hamda bozorda sotuvchi fuqarolari;

// ishlab chiqarishdan ajralgan holda umumiy ta’lim maktablarida, hunar-texnika bilim yurtlarida, o‘rta maxsus harbiy va oliy o‘quv yurtlarida, aspirantura, ordinatura va doktoranturada ta’lim olayotgan fuqarolari;

// o‘z faoliyatini O‘zbekiston Respublikasi qonunlariga muvofiq amalga oshirayotgan jamoat tashkilotlari va diniy muassasalarda ishlayotgan fuqarolari ish bilan ta’minlangan aholi jumlasiga kiradi.

// Boshqa davlatlarning respublika hududida vaqtincha turib, diplomatik vakolatxonalar faoliyatini ta’minlash bilan bog‘liq bo‘lmagan ishlarni bajaruvchi fuqarolari ham ish bilan ta’minlangan aholi jumlasiga kiradi.</p>
//           </div>
//           <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>3-modda. Ishsizlar</h1>
//             <p>16 yoshdan boshlab to pensiyaga chiqish huquqini olishgacha bo‘lgan yoshdagi, ishga va ish haqi (mehnat daromadi)ga ega bo‘lmagan, haqiqatda ish qidirayotgan, mehnat qilishga, kasb-kor tayyorgarligi va qayta tayyorgarlikdan o‘tishga tayyor shaxs sifatida ish bilan ta’minlash davlat xizmatlarida ro‘yxatga olingan va shu xizmatlar maqbul keladigan ishni taklif qilmagan, lekin mehnatga layoqatli shaxslar ishsizlar deb hisoblanadilar.

// Ish bilan ta’minlash davlat xizmatida ro‘yxatga olingan paytdan boshlab 10 kun ichida taklif etilgan o‘ziga maqbul ishni ikki marta rad etgan shaxslar ish qidirayotgan deb e’tirof etilmaydi va taklif etilgan ishni rad qilgan vaqtdan boshlab 30 kalendar kun o‘tgandan keyingina ishsiz sifatida takroran ro‘yxatga olinish huquqiga ega bo‘ladi.

// Ishsizlar sifatida ro‘yxatga olish tartibi O‘zbekiston Respublikasining normativ hujjatlari bilan belgilanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>4-modda. Maqbul keladigan ish</h1>
//             <p>1. Ishdan va ish haqidan (mehnat daromadidan) mahrum bo‘lgan shaxslar uchun mehnat birjasi tomonidan taklif qilingan, ularning kasb tayyorgarligiga mos bo‘lgan, yoshini, sihat-salomatligini, mehnat stajini va oldingi kasbi bo‘yicha tajribasini, yangi ish joyiga transportda qatnashiga hisobga oluvchi ish maqbul keladigan ish hisoblanadi.
// <br />
// 2. 29-moddaning 2-bandida ko‘zda tutilgan ishsizlikning dastlabki davri tugaganidan so‘ng kasbiga (ixtisosiga) mos ish topib berish mumkin bo‘lmagan taqdirda, odamning qobiliyatini, kuchini, oldingi tajribasini va unga qulay bo‘lgan ta’lim vositalarini hisobga olib, kasbini (ixtisosini) o‘zgartirishni talab qiladigan ish maqbul keladigan ish hisoblanishi mumkin.
// <br />
// 3. Birinchi marta ish qidirayotgan, kasbi (ixtisosi) bo‘lmagan shaxslar uchun oldindan kasb tayyorgarligini talab qiluvchi ish, bunday ishni taklif etish imkoniyati bo‘lmagan taqdirda esa, fuqarolarning yoshi va boshqa xususiyatlarini hisobga oladigan hamda mehnat to‘g‘risidagi qonunlarning talablariga mos keladigan haq to‘lanadigan boshqa ish (shu jumladan vaqtinchalik ish) maqbul keladigan ish hisoblanishi mumkin.
// <br />
// 4. Agar ish:

// uy-joy va o‘zga yashash sharoitlari xodim ish bilan ta’minlash davlat xizmatiga murojaat qilishidan oldingi sharoitga nisbatan uncha qulay bo‘lmagan joydan berilsa;

// doimiy istiqomat joyidan ancha uzoq bo‘lsa;

// ish haqi va boshqa mehnat sharoitlari shu mutaxassislik (kasb) uchun bu joydagi o‘rtacha darajadan past bo‘lsa;

// ish uzrli sabablar bilan, jumladan mehnatkashning shaxsiy yoki oilaviy ahvoliga asoslangan holda rad etilgan bo‘lsa, bunday ish maqbul keladigan ish deb hisoblanishi mumkin emas.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>5-modda. Aholini ish bilan ta’minlash sohasidagi davlat siyosatining asosiy qoidalari</h1>
//             <p>Aholini ish bilan ta’minlash sohasidagi davlat siyosati quyidagi qoidalarga asoslanadi:

// aholini ish bilan ta’minlashda O‘zbekiston Respublikasining mustaqilligi;

// mehnat qilish va ishni erkin tanlash huquqini amalga oshirishda barcha odamlarga jinsi, dinga munosabati, yoshi, siyosiy e’tiqodi, millati, til bilishi, ijtimoiy va oilaviy ahvolidan qat’i nazar teng imkoniyatlarini ta’minlash;

// fuqarolarning mehnat tashabbusini qo‘llab-quvvatlash, mehnatkashlarga ish bilan band bo‘lish, mehnat qilish va hayot kechirishda munosib sharoitlarni ta’minlaydigan serunum va ijodiy mehnat qilish qobiliyatini rivojlantirishga ko‘maklashish hamda uni rag‘batlantirish;

// mehnatning ixtiyoriyligi;

// ish bilan ta’minlash sohasida ijtimoiy kafolatlar berish va aholini ishsizlikdan muhofaza qilishni ta’minlash;

// barqaror ish qidirib alohida qiyinchilikka duch kelayotgan odamlarni ish bilan ta’minlashda yordam beruvchi maxsus chora-tadbirlarni amalga oshirish;

// ish bilan ta’minlash sohasidagi tadbirlarni iqtisodiy va ijtimoiy siyosatning boshqa yo‘nalishlari bilan, shu jumladan ijtimoiy ta’minot, daromadlarni oshirish va taqsimlash, pul qadrsizlanishining oldini olish bilan muvofiqlashtirish;

// aholini ish bilan ta’minlash chora-tadbirlarini ishlab chiqish, amalga oshirish va ularning bajarilishini nazorat qilishda O‘zbekiston Respublikasi kasaba uyushmalarining, tadbirkorlik uyushmalarining (ittifoqlarining) davlat boshqaruvi idoralari bilan hamkorligi;

// aholini ish bilan ta’minlash muammolarini hal qilishda respublika ichida va davlatlararo hamkorlik.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>6-modda. Mehnat qilish huquqiga davlat kafolatlari</h1>
//             <p>1. Davlat aholining ish bilan to‘la va samarali ta’minlanishiga ko‘maklashishga, mehnat qilish huquqini ro‘yobga chiqarishi uchun shart-sharoitlar yaratib berishga mas’ul bo‘lib:

// mashg‘ulot va ish turini erkin tanlashni;

// ishga qabul qilishdan asossiz bosh tortish va ishdan asossiz bo‘shatishdan muhofaza qilishni;

// kasb o‘rganish hamda ishli bo‘lishda, mashg‘ulot va mehnat sharoitlarida, ish haqi va daromadlar olishda, xizmatda yuqoriga ko‘tarilishda barcha mehnatkashlar uchun teng imkoniyatlar ta’minlashni;

// korxonalar, muassasalar, tashkilotlar buyurtmalariga binoan tayyorlangan — davlat o‘quv yurtlarini bitirgan yosh mutaxassislarga kamida3 yilga egallagan kasbiga (mutaxassisligiga) yarasha ish berilishini;

// qonunlar bilan belgilangan tartibda bepul umumiy ta’lim va kasb tayyorgarligini hamda qayta tayyorlashni;

// ta’lim sistemasi va ish bilan ta’minlash davlat xizmatlarining ixtisoslashtirilgan markazlarida yoki boshqa o‘quv yurtlarida stipendiya to‘lagan holda yangi kasb-korga bepul o‘rgatishni, malaka oshirishni;

// boshqa joyga ishga yuborish munosabati bilan moddiy xarajatlarni qoplashni;

// odamlarning yoshi va o‘zga xususiyatlarini hisobga olgan holda tashkil etiladigan haq to‘lanadigan jamoat ishlarida ishtirok etish uchun muddatli mehnat shartnomalarini tuzish imkoniyatini kafolatlaydi.
// <br/>
// 2. Davlat idoralari ishchi kuchiga talab va taklif, ishga joylashtirish, kasbga tayyorlash va qayta tayyorlash, kasbga yo‘naltirish va ijtimoiy mehnat qobiliyatini tiklash imkoniyatlari to‘g‘risida statistika ma’lumotlari va axborotlar e’lon qilinishini ta’minlaydi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>7-modda. Aholining ayrim toifalari uchun ish bilan ta’minlashning qo‘shimcha kafolatlari</h1>
//             <p>1. Davlat ijtimoiy muhofazaga muhtoj bo‘lib, ish topishda qiynaladigan, mehnat bozorida teng sharoitlarda raqobatlashishga qodir bo‘lmagan shaxslarga, shu jumladan 14 yoshga to‘lmagan bolalari va nogiron bolalari bo‘lgan yolg‘iz hamda ko‘p bolali ota-onalarga; umumiy ta’lim maktablarini, boshqa o‘quv yurtlarini bitirgan yoshlarga; Qurolli Kuchlardan, IIV qo‘shinlaridan, chegara qo‘shinlaridan, milliy xavfsizlik qo‘shinlaridan bo‘shatilganlarga; nogironlarga, pensiya yoshiga yaqinlashib qolgan kishilarga; qamoqdan ozod qilingan yoki sud qarori bilan majburiy davolanishga yuborilganlarga (quyida ijtimoiy muhofazaga muhtoj shaxslar deb yuritiladi) qo‘shimcha ish joylari va ixtisoslashtirilgan korxonalar, shu jumladan nogironlar mehnat qiladigan korxonalar barpo etish, ish o‘rgatishning maxsus dasturlarini tashkil etish yo‘li bilan va boshqa choralar bilan qo‘shimcha kafolatlarni ta’minlaydi.
// <br/>
// 2. Xalq deputatlari Sovetlari korxonalarga, muassasalarga va tashkilotlarga ijtimoiy muhofazaga muhtoj shaxslar uchun mo‘ljallangan maxsus ish joylarining, shu jumladan ish bilan band qilishning moslashuvchan shakllarining eng kam miqdorini belgilab beradilar.
// <br/>
// 3. Bunday shaxslarni belgilangan kvotalardan ortiq ravishda ishga qabul qilgan korxonalarga O‘zbekiston Respublikasining qonunlari bilan, xalq deputatlari mahalliy Sovetlarining qarorlari bilan daromad solig‘i to‘lashda, respublika va mahalliy budjetlarga boshqa to‘lovlar bo‘yicha imtiyozlar beriladi. Bunday imtiyozlar Vazirlar Mahkamasi tomonidan belgilanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>8-modda. Davlat hokimiyati mahalliy idoralarining ish bilan ta’minlash siyosatini amalga oshirishdagi vakolatlari</h1>
//             <p>Xalq deputatlari viloyatlar va Toshkent shahar Sovetlari mintaqalarning xususiyatlarini hisobga olgan holda aholini ish bilan ta’minlash chora-tadbirlarini ishlab chiqish va amalga oshirish bilan bog‘liq masalalarni hal qiladilar. Ularning qarorlarida, shuningdek jamoa shartnomalarida (bitimlarida) ishsizlik bo‘yicha nafaqalar to‘lashning, maqbul keladigan ishni aniqlashning ushbu Qonunga zid bo‘lmagan, mehnatkashlarning ijtimoiy muhofazalanganligini kuchaytiruvchi shartlari va tartibi, shu jumladan xalq deputatlari tegishli Sovetlarining o‘z mablag‘lari hisobidan nafaqalar to‘lash muddatlarini uzaytirish va nafaqalarni, shuningdek ta’lim olish davrida stipendiyalarni oshirish, pul to‘lanadigan jamoat ishlaridagi mehnatga haq to‘lash belgilanishi mumkin.</p>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: 'II Bo‘lim. O‘zbekiston Respublikasi aholisining ish bilan ta’minlanish huquqlari', 
//       content: (
//         <div className="space-y-6">
//           <h2 className="text-sky-600 text-2xl sm:text-3xl font-bold font-['Montserrat'] mb-6">II Bo‘lim. O‘zbekiston Respublikasi aholisining ish bilan ta’minlanish huquqlari</h2>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>9-modda. Ishga joylashish huquqi</h1>
//             <p>Mehnatkashlar korxonalarga, muassasalarga, tashkilotlarga, yakka dehqonchilik (fermer) xo‘jaliklariga, boshqa ish beruvchilarga bevosita murojaat qilish yoki ish bilan ta’minlash davlat xizmatlarining bepul vositachiligi orqali ish joyini erkin tanlash huquqiga egadirlar.

// Ishga qabul etish to‘g‘risidagi qaror korxona, muassasa, tashkilot (boshqa ish beruvchi) bilan ish qidirayotgan odam o‘rtasidagi o‘zaro kelishuv asosida qabul qilinadi.

// Ishga joylashish chog‘ida shartnomalarni (kontraktlar, bitimlarni) tuzish tartibi va shartlari amaldagi qonunlar bilan tartibga solinadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>10-modda. O‘z kasb-koriga doir maslahatlar olish, tayyorgarlik va qayta tayyorgarlik ko‘rish hamda axborotlar olish huquqi</h1>
//             <p>Ish qidirayotgan va ish bilan ta’minlash davlat xizmatiga murojaat qilgan shaxslar ishni, ish joyini va mehnat tartibini erkin tanlash maqsadida o‘z kasb-koriga doir bepul maslahatlar olishga, tayyorgarlik va qayta tayyorgarlik ko‘rishga hamda tegishli axborotlar olishga haqlidir.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>11-modda. Ishga joylashishning kontrakt tuzish shaklidan foydalanish huquqi</h1>
//             <p>1. Ishga joylashayotgan shaxslar barcha turdagi korxonalar, muassasalar va tashkilotlar bilan mehnat shartnomalari tuzishdan tashqari kontraktlar tuzishga ham haqlidirlar. Kontraktda mehnat qilishning har qanday shartlari nazarda tutilishi mumkin. O‘zbekiston Respublikasining qonunlariga zid keluvchi shartlar bundan mustasno.
// <br />
// 2. Kontrakt amal qiladigan butun muddat davomida boshqa joyga borib ishlagan taqdirda kontrakt bilan ishlayotgan shaxsning doimiy istiqomat joyidagi uy-joy maydoni bronlashtirib qo‘yiladi. U yangi ish joyida kontraktga binoan uy-joy maydoni olish huquqidan mahrum bo‘lmaydi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>12-modda. Chet ellarda o‘z kasbi bo‘yicha faoliyat bilan shug‘ullanish huquqi</h1>
//             <p>O‘zbekiston Respublikasi fuqarolari vaqtincha chet elda bo‘lgan davrda o‘z kasblari bo‘yicha faoliyat bilan shug‘ullanish huquqiga egadir. Bunday fuqarolarning huquqlari va manfaatlarini himoya qilish tartibi O‘zbekiston Respublikasi qonunlari bilan belgilanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>13-modda. Mehnat sohasida ijtimoiy madad olish huquqi</h1>
//             <p>Belgilangan tartibda ishsiz deb e’tirof etilgan shaxslar ishsizlik nafaqasi olish huquqiga egadirlar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>14-modda. Ish bilan ta’minlash davlat xizmati xodimlarining xatti-harakatlari ustidan shikoyat qilish huquqi</h1>
//             <p>Ish bilan ta’minlash davlat xizmati xodimlarining xatti-harakatlari ustidan yuqori idoraga, shuningdek O‘zbekiston Respublikasi qonunlarida belgilab qo‘yilgan tartibda sudga shikoyat qilish mumkin.</p>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: 'III bo‘lim. Aholini ish bilan ta’minlashni tartibga solish va tashkil etish', 
//       content: (
//         <>
//           <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">III bo‘lim. Aholini ish bilan ta’minlashni tartibga solish va tashkil etish</span>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>15-modda. Ish bilan ta’minlashni tartibga solish</h1>
//             <p>O‘zbekiston Respublikasi davlat boshqaruvi idoralari:

// iqtisodiyot strukturasini tahliliy tadqiq etadilar, mehnat bozori ahvolini va aholi bandligi sohasidagi vaziyatni oldindan taxmin qiladilar, bu sohada davlat statistika hisob-kitobini va hisobini amalga oshiradilar;

// ish bilan ta’minlashning respublika va mintaqa dasturlarini ishlab chiqadilar hamda tegishli xalq deputatlari Sovetlari muhokamasiga kiritadilar, bunday dasturlarni amalga oshirishni o‘z vakolatlari doirasida ta’minlaydilar;

// ijtimoiy ishlab chiqarishda qo‘shimcha ishchi o‘rinlar vujudga keltirilishiga, mehnat sharoitlari yaxshilanishiga ko‘maklashadilar;

// tadbirkorlikning rivojlanishini rag‘batlantiradilar, fuqarolarga kooperativlar, kichik korxonalar, ijara korxonalari va aksionerlik jamiyatlarining korxonalarini tashkil etishda ko‘maklashadilar;

// mehnat faoliyati bilan shug‘ullanuvchi aholini ijtimoiy-huquqiy muhofaza qilish chora-tadbirlarini ko‘radilar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>16-modda. Ish bilan ta’minlashning respublika va mintaqa dasturlari</h1>
//             <p>Aholini ish bilan ta’minlashga ko‘maklashish, ishsizlikning oldini olish va ishsizlik oqibatlaridan ijtimoiy muhofaza qilish maqsadida respublika miqyosida va mahalliy darajada ish bilan ta’minlash dasturlari ishlab chiqiladi.

// Aholini ish bilan ta’minlash dasturining mazmuni, uni ishlab chiqish va amalga oshirish tartibi O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>17-modda. Rivojlantirishda ustunlik beriladigan hududlar</h1>
//             <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi viloyat hokimliklarining tavsiyasiga binoan har yili ishchi o‘rinlari respublika Hukumati tomonidan rag‘batlantiriladigan hududlarni belgilaydi.

// Ustuvor rivojlantiriladigan hududlarda ishlab chiqarishlar, ularning shu’balari, qo‘shimcha va nostandart ishchi o‘rinlari vujudga keltirayotgan korxonalar, muassasalar va tashkilotlarga O‘zbekiston Respublikasi qonunlari bilan belgilanadigan tartib va shartlar asosida soliqlar bo‘yicha yengilliklar va boshqa imtiyozlar beriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>18-modda. Ish bilan ta’minlashga ko‘maklashuvchi muvofiqlashtirish qo‘mitalari</h1>
//             <p>Ish bilan ta’minlash siyosatini belgilash va amalga oshirish bo‘yicha kelishilgan qarorlarni ishlab chiqish maqsadida respublika miqyosida va mahalliy darajalarda kasaba uyushmalarining, ish beruvchilar uyushmalari va davlat boshqaruvi idoralarining vakillaridan ish bilan ta’minlashga ko‘maklashuvchi muvofiqlashtirish qo‘mitalari tuziladi. Kasaba uyushmalari va ish beruvchilarning vakillari qo‘mitalarning tarkibiga teng miqdorda kiritiladi.

// Muvofiqlashtirish qo‘mitalarini tashkil etish va ularning ish tartibini qo‘mitalarda vakillik qiluvchi tomonlar belgilaydi.

// Ish bilan ta’minlashga ko‘maklashuvchi muvofiqlashtirish qo‘mitasining faoliyatini respublika darajasida O‘zbekiston Respublikasi Prezidenti Vazirlar Mahkamasi, mahalliy darajada esa xalq deputatlari tegishli Sovetlari uyushtiradi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>19-modda. Ish bilan ta’minlash davlat xizmatlari</h1>
//             <p>1. Aholini ish bilan ta’minlash siyosatini amalga oshirish va fuqarolarga tegishli kafolatlar ta’minlab berish uchun aholini ish bilan ta’minlash davlat xizmati tashkil etiladi. Aholini ish bilan ta’minlash davlat xizmatini tashkil etish va uning ish tartibi respublika qonunlariga muvofiq O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilanadi.

// Ish bilan ta’minlash davlat xizmatlariga pul ajratish aholini ish bilan ta’minlashga ko‘maklashish jamg‘armasi mablag‘lari hisobidan amalga oshiriladi.
// <br/>
// 2. Aholini ish bilan ta’minlash davlat xizmatlari korxonalar, muassasalar, tashkilotlarga va boshqa ish beruvchilarga ko‘rsatadigan xizmatlar, shuningdek mehnat bozorining ahvoli to‘g‘risidagi axborotlar bilan ta’minlash bepul amalga oshiriladi.
// <br/>
// 3. O‘zbekiston Respublikasi Mehnat vazirligining tarkibida mehnat qilish va ish bilan ta’minlashga doir qonunlar mulkchilik shakli va xo‘jalik yuritishning shakllaridan qat’i nazar, davlat va jamoat idoralari, ish beruvchilar tomonidan qanday bajarilayotganini nazorat qiluvchi inspeksiya tuziladi.
// <br/>
// 4. Chet ellarda fuqarolarni, shuningdek chet ellarda ishlash yuzasidan xususiy mehnat bitimlariga ega bo‘lgan O‘zbekiston Respublikasi fuqarolarini, O‘zbekistonga ishga kelgan chet el fuqarolarini ishga yollash va ishga joylashtirish bilan shug‘ullanadigan yuridik va jismoniy shaxslarning faoliyat ko‘rsatishiga, kadrlarni o‘qitish, qayta tayyorlash va malakasini oshirish hamda ishga joylashtirish bo‘yicha pulli xizmat ko‘rsatuvchi yuridik shaxslarning faoliyat ko‘rsatishiga O‘zbekiston Respublikasi Mehnat vazirligi beradigan litsenziyaga binoan ruxsat etiladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>20-modda. Ish bilan ta’minlash davlat xizmatining vazifalari va huquqlari</h1>
//             <p>1. Ish bilan ta’minlash davlat xizmati:

// mehnat bozoridagi holatni tahlil hamda taxmin qiladi va tegishli axborot tarqatilishini ta’minlaydi;

// bo‘sh ish joylarini (vakant lavozimlarni) va ishga joylashtirish masalasida murojaat qilgan fuqarolarning hisobini yuritadi;

// ish bilan ta’minlash xizmatiga murojaat qilgan fuqarolarga va ish beruvchilarga ish topish hamda ishchi kuchi bilan ta’minlash imkoniyatlari to‘g‘risida, kasblarga va xodimlarga nisbatan qo‘yilayotgan talablar hamda ish bilan ta’minlashga doir boshqa masalalar to‘g‘risida maslahatlar beradi;

// fuqarolarga maqbul keladigan ishni tanlashda, korxonalar, muassasalar, tashkilotlar va boshqa ish beruvchilarga esa zarur xodimlarni tanlashda yordam ko‘rsatadi;

// ishlamayotgan fuqarolarni kasbga o‘rgatish, qayta o‘qitish va malakasini oshirishni tashkil etish to‘g‘risida o‘quv yurtlari, muassasalar, tashkilotlar va korxonalar bilan shartnomalar tuzadi;

// bo‘shatilayotgan xodimlarga va ish bilan ta’minlanmagan aholiga ishga joylashtirish hamda kasb tanlash yuzasidan xizmatlar ko‘rsatadi;

// ishsizlarni ro‘yxatga olishni ta’minlaydi va ularga yordam ko‘rsatadi, shu jumladan nafaqalar belgilanishiga va bu nafaqalarni olish uchun chek berilishiga ko‘maklashadi;

// respublika, viloyat, shahar va nohiya ish bilan ta’minlash dasturlari aholini ijtimoiy muhofaza qilish tadbirlarini ko‘zda tutgan holda ishlab chiqilishini tashkil etadi.
// <br/>
// 2. Ish bilan ta’minlash davlat xizmati:

// korxonalar, muassasalar va tashkilotlardan mulkchilik hamda xo‘jalik yuritish shakllaridan qat’i nazar, mo‘ljallanayotgan strukturaviy o‘zgarishlar va amalga oshirilishi natijasida mehnatkashlar ishdan bo‘shatilishi mumkin bo‘lgan boshqa tadbirlar to‘g‘risida, shuningdek bo‘sh ish joylari (vakant lavozimlar) bor-yo‘qligi, shu jumladan ulardagi mehnatning xarakteri va sharoiti haqida axborotlar olish;

// ish bilan ta’minlash davlat xizmatiga murojaat qilgan fuqarolarni malakasi va kasb tayyorgarligi darajasiga muvofiq ishga joylashtirish uchun tegishli bo‘sh ishchi o‘rinlar (vakant lavozimlar) bo‘lgan taqdirda hamma turdagi korxonalar, muassasalar va tashkilotlarga yuborish;

// barcha turdagi korxonalar, muassasalar va tashkilotlar uchun ijtimoiy muhofazaga muhtoj kishilarni ishga qabul qilishga mo‘ljallangan ish joylarining eng kam miqdorini belgilab qo‘yish to‘g‘risida takliflar ishlab chiqish va ularni xalq deputatlari mahalliy Sovetlarining muhokamasiga taqdim etish, shuningdek mazkur fuqarolarni ishga joylashtirish uchun korxonalar, muassasalar va tashkilotlarga yuborish;

// mulkchilik va xo‘jalik yuritish shakllaridan qat’i nazar korxonalar, muassasalar va tashkilotlarning ishonchnomasiga muvofiq ular nomidan fuqarolarni ishga joylashtirish to‘g‘risida shartnomalar tuzish, zarur hollarda ularni oldin kasb tayyorgarligidan o‘tkazish, yo‘lkira, har bir kecha-kunduz uchun haq to‘lash, shuningdek yangi istiqomat va ish joyiga ko‘chib borish chog‘ida tegishli korxonalar, muassasalar, tashkilotlar hisobidan yordam puli berish;

// ish bilan ta’minlanmagan fuqarolarni ularning xohish-istagiga qarab haq to‘lanadigan jamoat ishlariga belgilangan tartibda jo‘natish;

// ish bilan ta’minlashga ko‘maklashish jamg‘armasining mablag‘larini tasarruf etish;

// ish bilan ta’minlashga ko‘maklashish jamg‘armasining mablag‘lari hisobidan ish qidirayotganlar sifatida ro‘yxatga olingan kishilarga kasb o‘rgatish va ularni qayta o‘qitish xarajatlarini to‘lash, shuningdek ushbu Qonunda nazarda tutilgan miqdorlarda ularga butun ta’lim davri uchun stipendiyalar belgilash;

// belgilangan tartibda fuqarolarga ishsizlik nafaqalari tayinlash, qonunda ko‘zda tutilgan hollarda ana shunday nafaqalar to‘lashni to‘xtatib qo‘yish yoki bekor qilish;

// faoliyati aholini ish bilan ta’minlash bilan bog‘liq vositachi tashkilotlarni ro‘yxatga olish va ular faoliyati uchun litsenziyalar berish huquqlariga egadirlar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>21-modda. Korxonalar, tashkilotlar, muassasalarning ish bilan ta’minlashga doir davlat siyosatini ro‘yobga chiqarishda ishtirok etishi</h1>
//             <p>1. O‘z faoliyatini O‘zbekiston Respublikasi hududida amalga oshirayotgan korxonalar, muassasalar, tashkilotlar mulkchilik va xo‘jalik yuritishning shakllaridan qat’i nazar, ish bilan ta’minlashga doir davlat siyosatini:

// O‘zbekiston Respublikasining mehnat to‘g‘risidagi qonunlariga muvofiq mehnat munosabatlarini tartibga soluvchi shartnomalar (bitimlar) shartlarini bajarish;

// ishchilarga kasb tayyorgarligi, qayta tayyorlash va malaka oshirish uchun shart-sharoitlar yaratish;

// aholini ish bilan ta’minlashga ko‘maklashish davlat jamg‘armasiga moliyaviy ajratmalar o‘tkazish;

// xalq deputatlari mahalliy Sovetlari belgilagan miqdordagi shaxslarni ishga joylashtirish;

// bo‘sh ish joylari (vakant lavozimlar) borligi to‘g‘risidagi ma’lumotlarni har oyda ishdan bo‘shatish mumkinligi haqidagi axborotni ishdan bo‘shatish asoslarini, ishdan bo‘shatish daxl qilishi mumkin bo‘lgan fuqarolar soni va toifasini va ishdan bo‘shatish qaysi muddatda amalga oshirilishini ko‘rsatib oldindan (kamida 3 oy oldin) taqdim etish yo‘li bilan amalga oshirishga ko‘maklashadilar

// Bo‘sh ish joylari (vakant lavozimlar) haqidagi axborotni o‘z vaqtida taqdim etmagan va bunday joylar (lavozimlar)ning mavjudligini yashirishda aybdor bo‘lgan va ish bilan ta’minlashga ko‘maklashish davlat jamg‘armasiga pul ajratishdan bo‘yin tovlayotgan mansabdor shaxslarga ish bilan ta’minlash davlat xizmati tomonidan ma’muriy tartibda uch oylik mansab maoshigacha bo‘lgan miqdorda jarima solinadi.

// Mahalliy hokimiyat idoralari xodimlarni ommaviy bo‘shatish to‘g‘risidagi qarorni olti oy muddatga to‘xtatib qo‘yishlari mumkin, bunda ular korxonalar, muassasalar, tashkilotlarning ana shu kechiktirish tufayli ko‘rgan zararlarni qisman yoki batamom qoplaydilar.
// <br/>
// 2. Korxonalar, muassasalar va tashkilotlar ijtimoiy muhofazaga muhtoj shaxslarni ishga joylashtirish uchun ixtisoslashtirilgan ish joylari barpo etishlari shart. Ushbu talab bajarilmagan taqdirda har bir barpo etilmagan ish joyi uchun ishga joylashtirish davlat xizmati tomonidan korxona, muassasa va tashkilotlardan ulardagi xodimning yillik o‘rtacha ish haqi miqdorida jarima undiriladi. O‘zlari avval buyurtma bergan oliy, o‘rta maxsus o‘quv yurtlari va hunar-texnika bilim yurtlarini bitirganlarni, shuningdek qayta tayyorgarlik qo‘rish uchun yuborilganlarni ishga qabul qilishdan bosh tortganliklari uchun ham korxonalar, muassasalar va tashkilotlardan xuddi shuncha miqdorda jarima undiriladi. Undirilgan mablag‘lar ish bilan ta’minlashga ko‘maklashish davlat jamg‘armasini to‘ldirishga o‘tkaziladi.

// Ijtimoiy muhofazaga muhtoj shaxslar uchun ish joylarining miqdorini xalq deputatlari mahalliy Sovetlari ishlovchilar umumiy sonining kamida yetti foizi (shu jumladan nogironlar uchun kamida uch foizi) miqdorida belgilaydilar.

// Ish beruvchilarning aholining raqobatga qobiliyatsiz toifalari uchun belgilangan eng kam miqdordan ortiqcha ish joylarini tashkil etishga, shuningdek ana shunday shaxslarni kasbga tayyorlash va qayta tayyorlashga qilgan sarf-xarajatlari xalq deputatlari mahalliy Sovetlarining mablag‘lari, shuningdek ish bilan ta’minlashga ko‘maklashuvchi davlat jamg‘armasi mablag‘lari va boshqa mablag‘lar hisobidan qoplanishi mumkin.

// Ijtimoiy muhofazaga muhtoj kishilar uchun tashkil etilgan ish joylari xalq deputatlari mahalliy Sovetlari, kasaba uyushmalari va ish bilan ta’minlash davlat xizmatining idoralari bilan kelishgan holdagina qisqartiriladi yoki tugatiladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>22-modda. Aholini ish bilan ta’minlashda kasaba uyushmalarining ishtiroki</h1>
//             <p>Kasaba uyushmalari ish bilan ta’minlash davlat siyosatiga doir masalalar bo‘yicha O‘zbekiston Respublikasining tegishli qonun hujjatlarini va xalq deputatlari mahalliy Sovetlarining qarorlarini ishlab chiqish hamda amalga oshirishda ishtirok etadilar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>23-modda. Ish bilan ta’minlashga ko‘maklashish respublika jamg‘armasi</h1>
//             <p>1. Ish bilan ta’minlashga ko‘maklashish respublika jamg‘armasi respublika miqyosida va mahalliy darajada vujudga keltirilib, ish bilan ta’minlash siyosatini ro‘yobga chiqarish borasidagi chora-tadbirlarni pul bilan ta’minlashga va ish bilan ta’minlash idoralarining samarali faoliyat ko‘rsatishiga mo‘ljallanadi.
// <br/>
// 2. Ish bilan ta’minlashga ko‘maklashish davlat jamg‘armasi O‘zbekiston Respublikasi Hukumati tomonidan belgilanadigan tartibda:

// mulkchilik va xo‘jalik yuritish shaklidan qat’i nazar, korxonalar, muassasalar, tashkilotlar, kooperativlar va boshqa ish beruvchilarning O‘zbekiston Respublikasi Hukumati tabaqalashtirgan holda belgilaydigan, biroq mehnatga haq to‘lash fondining uch foizidan ko‘p bo‘lmagan miqdordagi majburiy ajratmalari (bu xarajatlar mahsulot tannarxiga qo‘shiladi);

// respublika va mahalliy budjetlar mablag‘laridan tegishli budjetlarni shakllantirish chog‘ida O‘zbekiston Respublikasi Hukumati va xalq deputatlari Sovetlari belgilaydigan miqdordagi dotatsiyalar;

// ixtiyoriy ionalar, ushbu Qonunning 21 va 40-moddalariga muvofiq undiriladigan jarimalar va boshqa tushumlar hisobiga tashkil topadi.

// Aholini ish bilan ta’minlashga ko‘maklashish jamg‘armasi hisobidan, ish bilan ta’minlashga ko‘maklashish xizmati va ularning tuman bo‘limlari qoshida ish o‘rinlari tashkil etish maqsadida ochilgan ish o‘rinlari tashkil etish maqsadida ochilgan korxonalar tijorat faoliyatidan olinadigan foydadan undiriladigan soliqlardan, shuningdek davlat va bojxona bojlari to‘lovlaridan ozodi qilinadi.

// Bunda korxonalar, muassasalar, tashkilotlar va kooperativlarning ajratmalari hisobiga hosil bo‘ladigan ish bilan ta’minlashga ko‘maklashish jamg‘armasi mablag‘larining 70 foizi Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahar ish bilan ta’minlash xizmatlarining tasarrufida qoladi (so‘ngra ular nohiyalar va shaharlar uchun taqsimlanadi), 30 foizi esa respublika darajasida markazlashtiriladi.

// Ish bilan ta’minlashga ko‘maklashish jamg‘armasining hisobot yilida foydalanilmagan mablag‘lari olib qo‘yilishi mumkin emas va ular kelgusi moliya yiliga o‘tadi.

// Ish bilan ta’minlashga ko‘maklashish jamg‘armasi tijorat faoliyatidan olinadigan foydadan undiriladigan soliqlarning hamma turini to‘lashdan, shuningdek davlat va bojxona poshlinalaridan ozod qilinadi.
// <br/>
// 3. Ish bilan ta’minlashga ko‘maklashish jamg‘armasi mablag‘larini nimalarga sarflash aholini ish bilan ta’minlash borasidagi tegishli respublika va mintaqa dasturlarida belgilab beriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>24-modda. Haq to‘lanadigan jamoat ishlarini tashkil etish</h1>
//             <p>Xalq deputatlari mahalliy Sovetlari ish bilan ta’minlash davlat xizmatlarining takliflariga muvofiq va ularning ishtirokida o‘z mulki bo‘lgan korxonalar, muassasalar, tashkilotlarda hamda shartnomalar asosida boshqa korxonalar, muassasalar, tashkilotlarda haq to‘lanadigan jamoat ishlarini amalga oshirilishini tashkil etadilar.

// Haq to‘lanadigan jamoat ishlarini bajarishga doir shartnomalar davlat ish bilan ta’minlash xizmatlarida ro‘yxatdan o‘tgan va ishsizlik maqomini olgan fuqarolar bilan 2 oygacha (bu muddatni uzaytirish va ishsizlik muddatini uzaytirish huquqi bilan) muddatga tuziladi.

// Jamoat ishlarini bajarish chog‘ida fuqarolarga bajarilayotgan ishga qarab, biroq 15 foiz oshirilgan ishsizlik nafaqasi miqdoridan kam bo‘lmagan miqdorda haq to‘lash, ana shu ishlar muddatini umumiy va uzluksiz mehnat stajiga qo‘shish, pensiya ta’minoti va vaqtincha ishga layoqatsizlik yuzasidan nafaqalar olish huquqi kafolati beriladi.

// Haq to‘lanadigan jamoat ishlariga jalb qilingan shaxslarga to‘lanadigan ish haqining 50 foizidan kam bo‘lmagan qismi korxonalar, tashkilotlar va muassasalar, qolgan qismi esa mahalliy budjet mablag‘laridan va aholini ish bilan ta’minlashga ko‘maklashish jamg‘armasi hisobidan qoplanadi.

// Aholining turli guruhlari uchun haq to‘lanadigan jamoat ishlarini tashkil etish tartibi va ularni o‘tkazish shartlari O‘zbekiston kasaba uyushmalari Federatsiyasi Kengashi bilan kelishilgan holda O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan tasdiqlanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>25-modda. Ishsizlarga kasb o‘rgatish, ularning malakasini oshirish va ularni qayta tayyorlash</h1>
//             <p>1. Davlat ish bilan ta’minlash xizmatida ro‘yxatdan o‘tgan va ishsizlik maqomini olgan shaxslarni kasbga o‘rgatish, ularning malkasini oshirish va qayta tayyorlash basharti:

// ishsiz zarur kasb malakasiga ega bo‘lmaganligi tufayli unga munosib ish tanlash mumkin bo‘lmasa;

// ishsizning kasb ko‘nikmalariga mos keladigan ish yo‘qligi sababli uning malakasini o‘zgartirish zarur bo‘lsa;

// avvalgi kasbi bo‘yicha ish bajarish qobiliyati yo‘qotilgan bo‘lsa amalga oshirilishi mumkin.
// <br/>
// 2. Fuqarolarga kasb o‘rgatish, ularning malakasini oshirish va ularni qayta tayyorlash ish bilan ta’minlash davlat xizmatlarining yo‘llanmalari bo‘yicha o‘quv yurtlarida ish bilan ta’minlashga ko‘maklashish jamg‘armasida ana shu maqsadlar uchun ko‘zda tutilgan mablag‘lar hisobidan amalga oshiriladi.</p>
//           </div>
//         </>
//       )
//     },
//     {
//       title: 'IV bo‘lim. Ishdan mahrum bo‘lgan chog‘dagi ijtimoiy kafolatlar', 
//       content: (
//         <>
//           <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">IV bo‘lim. Ishdan mahrum bo‘lgan chog‘dagi ijtimoiy kafolatlar</span>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>26-modda. Moddiy madad kafolatlari</h1>
//             <p>O‘zbekiston Respublikasi ishdan mahrum bo‘lgan, birinchi bor ish qidirayotgan, shuningdek uzoq tanaffusdan keyin mehnat faoliyatini qayta boshlashni istagan fuqarolarga:

// korxonalar, muassasalar va tashkilotlardan bo‘shatilgan xodimlarga imtiyozlar berilishidan;

// kasb-kor o‘rganish, malaka oshirish yoki qayta tayyorlash davrida stipendiya to‘lanishidan hamda shu davr umumiy va uzluksiz mehnat stajiga qo‘shilishidan;

// ishsizlik nafaqalari to‘lanishidan;

// ishsizga qaramog‘idagilarni hisobga olgan holda yordam berilishidan;

// haq to‘lanadigan jamoat ishlarida qatnashish imkoniyatidan; aholini ish bilan ta’minlash davlat xizmatining taklifiga binoan ishlash uchun ixtiyoriy tarzda o‘zga erga ko‘chishi bilan bog‘liq xarajatlarning qoplanishidan iborat ijtimoiy kafolatlarni ta’minlaydi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>27-modda. Korxonalar, muassasalar va tashkilotlar xodimlari soni (shtati) qisqarishi, qayta tashkil etilishi yoki tugatilishi munosabati bilan bo‘shatilayotgan xodimlarga moddiy madad berish kafolatlari</h1>
//             <p>1. Xodimlar soni (shtatlar) qisqarishi, korxonalar, muassasalar va qayta tashkil etilishi yoki tugatilishi munosabati bilan ishdan bo‘shatiladigan xodimlarning ish qidirish davrida oldingi ish joyidagi ikki oylik o‘rtacha ish haqi (ishdan bo‘shatish nafaqasi qo‘shib hisoblanganda) saqlanib qoladi. Xodimlar ishdan bo‘shatilgan kundan boshlab 10 ish kuni ichida davlat ish bilan ta’minlash xizmatlarida ro‘yxatdan o‘tsalar uchinchi oy uchun ham oldingi ish joyidan o‘rtacha ish haqini davlat ish bilan ta’minlash xizmatlarining ma’lumotnomasiga binoan olishga haqlidirlar. Yuqoridagi sabablarga ko‘ra ishdan bo‘shatilgan xodimlar har qanday holatda ham ishdan bo‘shagan vaqtdan boshlab uch oy muddat ichida mehnat stajini saqlab qoladilar.

// Basharti ishdan bo‘shatilgan xodimga uch oy ichida maqbul keladigan ish topib berilmasa, u ishsizlik maqomiga ega bo‘ladi; ammo shu davr ichida u taklif etilgan maqbul keladigan ishning ikkitasini rad etsa, ishsizlik maqomiga ega bo‘lmaydi va u o‘ttiz kalendar kunidan so‘ng umumiy asosda ish qidiruvchi shaxs sifatida yangidan ro‘yxatga olinadi.

// Tugatilayotgan korxona, muassasa va tashkilotlarning ishdan bo‘shatilayotgan xodimlarga to‘lanishi lozim bo‘lgan ish haqlari (tovonlar)ni to‘lash uchun yetarli mablag‘lari bo‘lmagan taqdirda, to‘lovlar ularning huquqiy vorislari mablag‘idan to‘lanadi. Tugatilayotgan korxona, muassasa va tashkilotlarning huquqiy vorislari bo‘lmgan taqdirda, ishdan bo‘shatilayotganlarga to‘lovlar aholini ish bilan ta’minlashga ko‘maklashish jamg‘armasi mablag‘i hisobidan to‘lanib, so‘ngra u qonunlarda belgilangan tartibda qoplanadi.
// <br/>
// 2. Korxona, muassasa va tashkilolar tugatilishi, qayta tuzilishi, xodimlar soni (shtatlar) qisqartirilishi munosabati bilan ishdan bo‘shatilgan, davlat ish bilan ta’minlash xizmatidan 10 ish kuni ichida ro‘yxatdan o‘tgan hamda ishlab chiqarishdan ajralgan holda kasbini qayta o‘rganayotgan yoki malakasini oshirayotgan mehnatkashlarning stipendiyasi ishdan bo‘shagan kundan boshlab dstlabki 3 oy davomida oldingi ish joyidagi o‘rtacha ish haqidan kam bo‘lmasligi kerak.
// <br/>
// 3. Ish bilan ta’minlash davlat xizmati korxonalar, muassasalar va tashkilotlarning boshqa korxonalar, muassasalar va tashkilotlardan ishdan bo‘shatiladigan shaxslarni ishga qabul qilishda o‘qishini tashkil etish xarajatlarini to‘la yoki qisman qoplashi mumkin.
// <br/>
// 4. Korxonalar, muassasalar va tashkilotlardan bo‘shatilgan hamda davlat ish bilan ta’minlash xizmatida ro‘yxatga olingan xodimlar xalq deputatlari mahalliy Sovetlarining uy-joylarini olish huquqini, basharti, bo‘shatish korxona, muassasa va tashkilotning qayta tashkil etilishi yoki
// <br/>
// tugatilishi tufayli sodir bo‘lgan bo‘lsa, saqlab qoladilar.

// Ishlovchilar soni (shtatlar)ni qisqartirish tadbirlari amalga oshirilishi munosabati bilan xodimlar bo‘shatilgan taqdirda ular eski ish joyidan uy-joy olish huquqini saqlab qoladilar.
// <br/>
// 5. O‘zlariga bog‘liq bo‘lmagan sabablarga ko‘ra ishlab chiqarishdagi baxtsiz hodisa tufayli yoki kasb kasalligiga yo‘liqishi natijasida ishdan mahrum bo‘lgan hamda ishga joylashishga va kasb o‘rganishga, malakasini oshirishga va qayta tayyorgarlikdan o‘tishga muhtoj bo‘lgan shaxslar ishdan bo‘shatilgan xodimlarga tenglashtiriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>28-modda. Fuqarolarga kasb o‘rganish, malaka oshirish va qayta tayyorgarlikdan o‘tish davrida to‘lanadigan stipendiyalarning miqdori</h1>
//             <p>1. Ushbu Qonunning 27-moddasida sanab o‘tilgan shaxslardan tashqari ishidan va ish haqidan (mehnat daromadidan) mahrum bo‘lgan, ish bilan ta’minlash davlat xizmati tomonidan ro‘yxatga olingan, qaramog‘ida voyaga yetmagan bolalari va boshqa kishilar bo‘lgan shaxslarga kasb o‘rganish, malakasini oshirish yoki qayta tayyorgarlikdan o‘tish davrida eski ish joyidagi o‘rtacha oylik ish haqining 75 foizidan (qaramog‘ida bolalari va boshqa kishilar bo‘lmaganlarga esa — 50 foizidan) kam bo‘lmagan, biroq O‘zbekiston Respublikasi qonunlarida belgilangan eng kam ish haqi miqdoridan kam bo‘lmagan va respublikada tarkib topgan o‘rtacha ish haqidan ortiq bo‘lmagan miqdorda stipendiya to‘lanadi.
// <br/>
// 2. Mehnat intizomini buzganligi uchun ishdan bo‘shatilgan, shuningdek uzoq vaqt ishlamayotgan, birinchi marta ish qidirayotgan va kasb o‘rganishga, malaka oshirishga va qayta tayyorgarlikdan o‘tishga muhtoj bo‘lgan shaxslarga aholining shu toifasi uchun nazarda tutilgan ishsizlik nafaqasidan kam bo‘lmagan va O‘zbekiston Respublikasida belgilangan eng kam ish haqidan ortiq bo‘lmagan miqdorda stipendiya tayinlanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>29-modda. Ishsizlik nafaqalarini to‘lash shartlari va muddatlari</h1>
//             <p>1. Ishsizlik nafaqasi belgilangan tartibda ishsiz deb topilgan shaxslarga ular aholini ish bilan ta’minlash davlat xizmatida ro‘yxatdan o‘tgan kunlaridan boshlab tayinlanadi.

// Ishsizlik nafaqalari olish huquqi ish bilan ta’minlash davlat xizmatida ro‘yxatdan o‘tgan paytdan boshlab kechi bilan o‘n birinchi kundan keyin kuchga kiradi va ishga joylashtirish masalasi hal etilgunga qadar amal qilib turadi.
// <br />
// 2. Ishsizlik nafaqalarini to‘lash muhlati ishidan va ish haqidan (mehnat daromadidan) mahrum bo‘lgan yoki uzoq (bir yildan ortiq) tanaffusdan keyin mehnat faoliyatini tiklashga harakat qilayotgan shaxslar uchun o‘n ikki oylik davr mobaynida 26 kalendar haftasidan, ilgari ishlamagan, birinchi bor ish qidirayotgan shaxslar uchun esa 13 kalendar haftasidan oshmasligi kerak.
// <br />
// 3. Ishsiz nafaqa olish davrida faol ish qidirishi va har ikki haftada kamida bir marta ish bilan ta’minlash davlat xizmatlarida yo‘qlamadan o‘tishi kerak.
// <br />
// 4. Xodimlar soni (shtatlar) qisqartirilishi, korxonalar, tashkilotlar va muassasalarning qayta tashkil etilishi yoki tugatilishi munosabati bilan ishdan bo‘shagan, ishsiz deb e’tirof etilgan, shuningdek pensiya ta’minoti to‘g‘risidagi qonunlarga muvofiq umumiy mehnat staji pensiyaga chiqish huquqiga ega bo‘lgan shaxslar muddatidan oldin (qonunlarda belgilangan muddatdan 2 yil oldin) pensiyaga chiqishga haqlidirlar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>30-modda. Ishsizlik nafaqasi miqdorlarini aniqlash tartibi</h1>
//             <p>1. Ishidan va ish haqidan (mehnat daromadidan) mahrum bo‘lgan shaxslar uchun ishsizlik nafaqasi avvalgi ish joyidagi oxirgi bir yilgi ish haqiga foiz nisbatida belgilanadi. Boshqa hamma hollarda ishsizlik nafaqasi eng kam miqdordagi ish haqiga foiz nisbatida belgilanadi.
// <br />
// 2. 16 yoshga to‘lmagan bolalari va qaramog‘ida boshqa kishilar bo‘lgan ishsizlarga nafaqa miqdori 10 foiz oshiriladi.
// <br />
// 3. Ish haqiga koeffitsiyentlar belgilangan joylarda yashovchi shaxslarga ishsizlik nafaqasi miqdorlari ularning shu joylarda yashagan davri uchun mazkur joyda noishlab chiqarish tarmoqlarining xodimlariga belgilangan koeffitsiyentni qo‘llagan holda tayinlanadi.
// <br />
// 4. Ishsizlik nafaqasining miqdori belgilangan tartibda indekslanishi lozim.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>31-modda. Ishidan va ish haqidan mahrum bo‘lgan shaxslar uchun ishsizlik nafaqasining miqdori</h1>
//             <p>1. Ishidan va ish haqidan (mehnat daromadidan) mahrum bo‘lgan taqdirda ishsizlik nafaqasi olish huquqiga ega bo‘lgan shaxslarga avvalgi ish joyidagi o‘rtacha ish haqining 50 foizi miqdorida, ammo O‘zbekiston Respublikasi qonunlarida belgilangan eng oz ish haqidan kam bo‘lmagan va respublikada tarkib topgan o‘rtacha ish haqidan ortiq bo‘lmagan miqdorda ishsizlik nafaqasi to‘lashga kafolat beriladi.
// <br/>
// 2. Fuqaro ishsizlik nafaqasi olib turgan davrda uning mehnat stajida uzilish bo‘lmaydi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>32-modda. Harbiy xizmatdan, ichki ishlar va milliy xavfsizlik idoralaridan bo‘shatilgan shaxslar uchun ishsizlik nafaqasining miqdori</h1>
//             <p>Harbiy xizmatdan, ichki ishlar va milliy xavfsizlik idoralaridan bo‘shatilishi natijasida ish haqini yo‘qotgan shaxslar ushbu Qonunning 31-moddasida ko‘zda tutilgan shartlar asosida nafaqa olish huquqiga egadirlar.

// Harbiy xizmatdan, ichki ishlar va milliy xavfsizlik idoralaridan bo‘shatilgan hamda ish bilan ta’minlash davlat xizmatiga murojaat qilishdan oldin ishlamagan shaxslarga nafaqa miqdori respublika bo‘yicha belgilangan eng oz ish haqi darajasida belgilanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>33-modda. Birinchi marta ish qidirayotgan shaxslar uchun ishsizlik nafaqasining miqdori</h1>
//             <p>Ilgari ishlamagan, birinchi marta ish qidirayotgan va ishsizlik nafaqasini olish huquqiga ega bo‘lgan shaxslarga ish bilan ta’minlash davlat xizmatlari kasb o‘rganish yoki ishga joylashish uchun imkoniyat bermagan taqdirda ularga belgilangan eng oz ish haqining kamida 75 foizi miqdorida nafaqa olish uchun kafolat beriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>34-modda. Uzoq muddatli tanaffusdan keyin ish qidirayotgan shaxslar uchun ishsizlik nafaqasining miqdori</h1>
//             <p>Uzoq muddatli tanaffusdan keyin yana mehnat faoliyatini boshlashga harakat qilayotgan ishsizlarga:

// ixtisosi bo‘lgan shaxslar ishga joylashish uchun kasb o‘rganish malakasini oshirishi yoki qayta ta’lim olishi talab qilinmasa, 12 oy mobaynida haq to‘lanadigan ish bilan bandligi 12 kalendar haftadan kam bo‘lmasa belgilangan eng kam oylik ish haqidan kam bo‘lmagan miqdorda;

// boshqa hollarda, shu jumladan ixtisosi bo‘lmagan kishilarga ish bilan ta’minlash davlat xizmati kasb o‘rganish imkoniyatini bermagan taqdirda belgilangan eng kam ish haqining 75 foizi miqdorida nafaqa to‘lanishiga kafolat beriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>35-modda. Kasb o‘rganish va qayta tayyorgarlik ko‘rishdan o‘tgan shaxslar uchun ishsizlik nafaqasining miqdori</h1>
//             <p>Ishsiz deb e’tirof etilgan shaxslar ishlab chiqarishdan ajralgan holda kasb o‘rgangan va qayta tayyorgarlikdan o‘tgandan keyin O‘zbekiston Respublikasi qonunlarida belgilangan eng kam ish haqidan kam bo‘lmagan miqdorda ishsizlik nafaqasi olish huquqiga egadirlar.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>36-modda. Ishsizlik nafaqasi to‘lashni to‘xtatib turish va butunlay to‘xtatib qo‘yish</h1>
//             <p>Quyidagi hollarda:

// ishsiz shaxs ishga joylashganda;

// ishsiz taklif qilingan maqbul ishni ikki marta rad etsa;

// ishsizlik nafaqasini oluvchi shaxs pesiya yoshiga yetgan taqdirda;

// ishsiz maqomiga ega bo‘lgan shaxs ozodlikdan mahrum etish tarzida jazoga hukm etilgan bo‘lsa;

// ishsiz shaxs davolash-mehnat profilaktoriysida davolash kursini o‘tayotgan bo‘lsa;

// ishsiz shaxs qayta tayyorlash va kasb malakasini oshrishga yuborilgan bo‘lsa;

// ishsiz shaxs ishsizlik nafaqasini olib turgan davrida ish bilan ta’minlash davlat xizmatini xabardor qilmay vaqtincha ishga joylashgan bo‘lsa;

// ishsizlik nafaqasini aldov yo‘li bilan olishga urinsa ishsizlik nafaqasini to‘lash bekor qilinadi.

// Quyidagi hollarda:

// uzrsiz sabablarga ko‘ra ko‘rsatilgan muddatda ish bilan ta’minlash davlat xizmatiga kelmasa;

// mehnat intizomini buzganlik uchun ishdan bo‘shatilgan bo‘lsa, ishsizlik nafaqasini to‘lash 3 oygacha muddatga to‘xtatib turiladi yoki uning miqdori kamaytiriladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>36-1-modda. Homilador ayollarni ijtimoiy muhofaza qilish</h1>
//             <p>Ishsiz homilador ayollar (basharti homiladorlik davri 28 haftadan oshmagan bo‘lsa,) ish bilan ta’minlash davlat xizmati tomonidan umumiy asosda ish qidiruvchi shaxs sifatida ro‘yxatga olinadilar. Ish bilan ta’minlash davlat xizmati 10 kun ichida ularni ish bilan ta’minlay olmasa, u holda o‘n birinchi kundan boshlab ularga ishsizlik maqomi beriladi. Ishsizlik maqomi birligidan qat’i nazar, homilador ayollarga O‘zbekiston Respublikasida belgilangan eng kam oylik ish haqi miqdorida 12 oy mobaynida 26 kalendar haftadan oshmagan muddatga ishsizlik nafaqasi to‘lanadi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>37-modda. Moddiy yordam</h1>
//             <p>Ishsizga va uning qaramog‘idagi oila a’zolariga moddiy va o‘zga yordam ko‘rsatilishi mumkin, ular ish bilan ta’minlashga ko‘maklashish jamg‘armasidan va tegishli mahalliy budjetdan ajratiladi.

// Ish bilan ta’minlashga ko‘maklashish jamg‘armasidan va mahalliy budjetlardan moddiy va o‘zga yordam ko‘rsatish tartibi, hajmi va shartlari O‘zbekiston Respublikasi Mehnat vazirligi hamda xalq deputatlari mahalliy Kengashlarining qarorlari bilan belgilanadi.</p>
//           </div>
//         </>
//       )
//     },
//     {
//       title: 'V bo‘lim. Aholini ish bilan ta’minlashga doir qonunlar bajarilishini nazorat qilish va ularni buzganlik uchun javobgarlik', 
//       content: (
//         <>
//           <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">V bo‘lim. Aholini ish bilan ta’minlashga doir qonunlar bajarilishini nazorat qilish va ularni buzganlik uchun javobgarlik</span>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>38-modda. Aholini ish bilan ta’minlash to‘g‘risidagi qonunlarning bajarilishini nazorat qiluvchi idoralar</h1>
//             <p>Aholini ish bilan ta’minlash to‘g‘risidagi qonunlarning bajarilishi ustidan nazoratini davlat hokimiyati va boshqaruvi mahalliy organlari, O‘zbekiston Respublikasi Mehnat vazirligi, prokuratura organlari va kasaba uyushmalari amalga oshiradi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>39-modda. Ish bilan ta’minlash haqidagi qonunlarni buzganlik uchun javobgarlik</h1>
//             <p>“Aholini ish bilan ta’minlash to‘g‘risida”gi O‘zbekiston Respublikasi Qonunini buzganlik uchun intizomiy va ma’muriy javobgarlik belgilab qo‘yiladi.</p>
//           </div>
//           <div>
//             <h1 className='text-[20px] font-semibold text-[red] p-5'>40-modda. Mehnatga ma’muriy tarzda majburlaganlik uchun javobgarlik</h1>
//             <p>Ushbu Qonun 2-moddasi 1-bandining uchinchi qismida nazarda tutilgan harakatlarning sodir etilishida aybdor bo‘lgan shaxslar qonun hujjatlariga muvofiq ma’muriy javobgarlikka tortiladilar.</p>
//             <p className='text-right font-bold mt-5'>O‘zbekiston Respublikasining Prezidenti I. KARIMOV</p>
//           </div>
//         </>
//       )
//     },
//   ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Montserrat']">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600">O‘ZBEKISTON RESPUBLIKASI VAZIRLAR MAHKAMASINING QARORI</p>
          <p className="text-sm sm:text-base md:text-lg">O‘zbekiston davlat san’at va madaniyat institutida aktyorlik san’ati ta’lim yo‘nalishida maxsus sirtqi bo‘limni tashkil etish to‘g‘risida</p>
          <p className="text-left mt-5">Respublikadagi barcha teatrlarni yetuk va malakali mutaxassislar bilan ta’minlash, teatrlarning oliy ma’lumotli kadrlarga bo‘lgan ehtiyojlarini qondirish va ularni tayyorlash tizimini sifatli tashkil etishni yanada takomillashtirish maqsadida Vazirlar Mahkamasi qaror qiladi:
<br/>
1. O‘zbekiston Respublikasi Madaniyat vazirligi hamda Oliy va o‘rta maxsus ta’lim vazirligining 2018/2019 o‘quv yilidan boshlab O‘zbekiston davlat san’at va madaniyat institutida (keyingi o‘rinlarda Institut deb ataladi) aktyorlik san’ati ta’lim yo‘nalishida maxsus sirtqi bo‘limni tashkil etish to‘g‘risidagi taklifi ma’qullansin.
<br/>
2. O‘zbekiston Respublikasi Iqtisodiyot vazirligi, Madaniyat vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, Moliya vazirligi Institutda 2018/2019 o‘quv yilidan boshlab aktyorlik san’ati ta’lim yo‘nalishida maxsus sirtqi bo‘lim uchun qabul kvotalarini belgilangan tartibda shakllantirsinlar.
<br/>
3. Belgilab qo‘yilsinki:
<br/>
O‘zbekiston Respublikasi Prezidentining “Respublika oliy ta’lim muassasalari bakalavriatiga kirish test sinovlarini o‘tkazish tartibini takomillashtirish to‘g‘risida” 2017-yil 16-noyabrdagi PQ-3389-son qaroriga muvofiq 2018/2019 o‘quv yilidan boshlab Institutning aktyorlik san’ati ta’lim yo‘nalishidagi maxsus sirtqi bo‘limga ushbu yoki turdosh ta’lim yo‘nalishlari bo‘yicha o‘rta maxsus, kasb-hunar ma’lumotiga, teatr va boshqa madaniyat muassasalarida ta’lim yo‘nalishiga muvofiq kamida uch yil amaliy ish stajiga hamda belgilangan tartibda tavsiyanomaga ega bo‘lgan iqtidorli abituriyentlarni qabul qilish kirish test sinovlarisiz, ijodiy imtihonlar orqali amalga oshiriladi;
<br/>
Institutda maxsus sirtqi ta’lim jarayonini tashkil etish Vazirlar Mahkamasining 2017-yil 21-noyabrdagi 930-son qarori bilan tasdiqlangan Oliy ta’lim muassasasida sirtqi (maxsus sirtqi) ta’limni tashkil etish tartibi to‘g‘risidagi nizom asosida amalga oshiriladi;
<br/>
maxsus sirtqi ta’lim shaklida o‘qish to‘lov-kontrakt asosida tashkil etiladi.
<br/>
4. O‘zbekiston Respublikasi Madaniyat vazirligi Oliy va o‘rta maxsus ta’lim vazirligi bilan birgalikda 2018/2019 o‘quv yilidan boshlab Institutning maxsus sirtqi bo‘limiga talabalarni qabul qilish jarayoni yuqori saviyada tashkil etilishini ta’minlasin.
<br/>
5. O‘zbekiston Respublikasi Madaniyat vazirligi hamda Oliy va o‘rta maxsus ta’lim vazirligi 2018-yil 1-iyungacha:
maxsus sirtqi bo‘lim o‘quv rejasi va fan dasturlarini tasdiqlash, shuningdek, ularga muvofiq fanlarni o‘quv adabiyotlari bilan ta’minlash;

maxsus sirtqi bo‘limda dars berishga yuqori salohiyatga ega bo‘lgan yetakchi mutaxassislar va professor-o‘qituvchilarni jalb etish choralarini ko‘rsin.
<br/>
6. O‘zbekiston Respublikasi Madaniyat vazirligi manfaatdor vazirliklar va idoralar bilan birgalikda o‘zlari qabul qilgan normativ-huquqiy hujjatlarni bir oy muddatda ushbu qarorga muvofiqlashtirsin.
<br/>
7. Mazkur qarorning bajarilishini nazorat qilish O‘zbekiston Respublikasi Bosh vazirining o‘rinbosari Q.V. Akmalov, O‘zbekiston Respublikasi madaniyat vaziri B.S. Sayfullayev zimmalariga hamda Vazirlar Mahkamasining Madaniyat, san’at va yoshlar siyosati masalalari axborot-tahlil departamentiga yuklansin.</p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2017-yil 11-dekabr, 
<br />
977-son</p>
              <p>Vazirlar Mahkamasining Raisi A. ARIPOV</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Aktorlik_sanati;