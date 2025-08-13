import React, { useState } from 'react';
import Tabs from '../../components/Tabs';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Pedagogiga_yonalishi = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 flex-1 flex flex-col font-['Montserrat', 'sans-serif']">
        <div className="text-center mb-6">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-600 font-['Montserrat', 'sans-serif'] pt-24">O'zbekiston Respublikasi Prezidenti farmoni</h1>
          <h2 className="text-sm sm:text-base md:text-lg font-['Montserrat', 'sans-serif']">Oliy ta'lim muassasalarida pedagogika yo'nalishida maxsus sirtqi bo'limlarni tashkil etish to'g'risida</h2>
          <p className="text-justify mt-5 text-sm sm:text-base leading-relaxed font-['Montserrat', 'sans-serif']">Bugungi kunda xalq ta’limi tizimida jami 15359 ta ta’lim muassasasi, jumladan 4893 ta maktabgacha ta’lim muassasasi, 9680 ta umumiy o‘rta ta’lim maktabi, 23 ta Mehribonlik uyi, 304 ta bolalar musiqa va san’at maktabi, 211 ta “Barkamol avlod” markazi, 227 ta bolalar va o‘smirlar sport maktabi faoliyat ko‘rsatmoqda. Ularda o‘rta maxsus, kasb-hunar kollejlarini va bilim yurtlarini bitirgan 97 564 nafar pedagog kadrlar faoliyat yuritmoqdalar.

Mazkur ta’lim muassasalarining maktabgacha, boshlang‘ich, musiqa, tasviriy san’at, chet tillari, mehnat ta’limi, jismoniy tarbiya yo‘nalishlari va boshqa fanlar bo‘yicha oliy ma’lumotli pedagog kadrlarga bo‘lgan ehtiyojlarini qondirish, tumanlar va qishloq joylardagi ta’lim muassasalarini yuqori malakali pedagog kadrlar bilan ta’minlash hamda ularni tayyorlash tizimini joylarda tashkil etishni yanada takomillashtirish orqali ta’lim sifatini yaxshilash maqsadida:
<br/>
1. O‘zbekiston Respublikasi Xalq ta’limi vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi, Iqtisodiyot vazirligi, Moliya vazirligi hamda Qoraqalpog‘iston Respublikasi, viloyatlar va Toshkent shahri hokimliklarining 2017/2018 o‘quv yilidan boshlab oliy ta’lim muassasalarida pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlarni tashkil etish to‘g‘risidagi takliflariga rozilik berilsin.
<br/>
2. Pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlar tashkil etiladigan oliy ta’lim muassasalari ro‘yxati ilovaga muvofiq tasdiqlansin.

O‘zbekiston Respublikasi ta’lim muassasalariga o‘qishga qabul qilish bo‘yicha davlat komissiyasiga ushbu ro‘yxatga o‘zgartirish va qo‘shimchalar kiritish huquqi berilsin.
<br/>
3. Belgilab qo‘yilsinki:

oliy ta’lim muassasalari tarkibida tashkil etilgan maxsus sirtqi bo‘limlarning bakalavriat ta’lim yo‘nalishlariga qabul o‘rta maxsus, kasb-hunar ma’lumotiga hamda kamida uch yil pedagogik amaliy ish stajiga ega bo‘lgan, maktabgacha, maktab va maktabdan tashqari ta’lim muassasalari ehtiyojlari asosida tasarrufida ushbu ta’lim muassasalari mavjud bo‘lgan vazirliklar va idoralar tomonidan beriladigan tavsiyanomaga ega pedagog kadrlar hisobidan amalga oshiriladi;

maxsus sirtqi bo‘limda o‘qish to‘lov-kontrakt asosida amalga oshiriladi. Ta’lim yo‘nalishlari bo‘yicha bitta talabani bir yillik o‘qitish qiymatini aniqlash belgilangan tartibda amalga oshiriladi;

maxsus sirtqi bo‘limda o‘qiyotgan talabalarga imtihonlar, sinovlar topshirish, diplom, kurs, laboratoriya va boshqa o‘quv ishlarini bajarish vaqtida ularning oylik maoshlari asosiy ish joyida saqlangan holda bir o‘quv yilida ikki marta bir oydan o‘quv ta’tillari beriladi. Bunda, o‘quv ta’tillari qoida tariqasida umumta’lim muassasalaridagi qishki va yozgi ta’til vaqtiga to‘g‘ri kelgan davrda beriladi va ularga belgilangan tartibdagi yillik mehnat ta’tillarini berish tartibi ham saqlanib qoladi;

talabalarning oliy ta’lim muassasasida o‘qishda bo‘lgan davriga to‘g‘ri keladigan dars soatlari o‘qishga yuborgan ta’lim muassasasining o‘qituvchilari (xodimlari) tomonidan mehnatga soatbay haq to‘lash shartlari asosida o‘tiladi;

maxsus sirtqi bo‘lim talabalari o‘qishga kirishda tavsiyanoma beruvchi vazirlik yoki idora, oliy ta’lim muassasasi va talaba o‘rtasida o‘qishni yakunlagandan keyin tavsiyanoma bergan tashkilot yo‘llanmasida ko‘rsatilgan ish joyida (ta’lim muassasasida) besh yildan kam bo‘lmagan muddatda ishlab berish majburiyati bilan uch tomonlama shartnoma tuziladi;

maxsus sirtqi bo‘limlarda ta’lim yo‘nalishlari xususiyatiga qarab bir o‘qituvchiga to‘g‘ri keladigan talabalar soni nisbati qonun hujjatlarida belgilangan normativlar asosida belgilanadi;

oliy ta’lim muassasasida maxsus sirtqi bo‘lim o‘quv jarayonini tashkil etishga fakultet dekani maqomidagi bo‘lim boshlig‘i rahbarlik qiladi.
<br/>
4. O‘zbekiston Respublikasi ta’lim muassasalariga o‘qishga qabul qilish bo‘yicha davlat komissiyasiga 2017/2018 o‘quv yili uchun:

oliy ta’lim muassasalari maxsus sirtqi bo‘limlarida o‘qish uchun tavsiyanoma beruvchi vazirliklar va idoralar ro‘yxatini;

maktabgacha, maktab va maktabdan tashqari ta’lim muassasalari ehtiyojlari asosida vazirliklar va idoralar tomonidan berilgan takliflarni inobatga olgan holda maxsus sirtqi bo‘limlarga qabul kvotalarini;

maxsus sirtqi bo‘limlarga qabul qilish tartibi va mezonlari hamda uch tomonlama shartnoma shaklini tasdiqlash huquqi berilsin.

Kelgusi o‘quv yillariga qabul kvotalari oliy ta’lim muassasalari uchun belgilangan tartibda belgilanadi.
<br/>
5. Pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlar tashkil etiladigan oliy ta’lim muassasalarida ikkinchi va undan keyingi oliy ma’lumot berish sirtqi ta’lim shaklida tashkil etilsin, bunda ikkinchi va undan keyingi oliy ma’lumot olish bakalavriat ta’lim yo‘nalishining 2-kursidan (o‘quv rejalardagi fanlar farqidan qat’i nazar) kamida 3 yil muddat etib belgilansin.

2017/2018 o‘quv yili uchun maxsus sirtqi va sirtqi ta’limlarda o‘quv jarayoni istisno tariqasida joriy yilning 1-oktabridan boshlanishi belgilab qo‘yilsin.
<br/>
6. O‘zbekiston Respublikasi Xalq ta’limi vazirligi va Oliy va o‘rta maxsus ta’lim vazirligi 2017-yil 30-sentabrgacha:

2017/2018 o‘quv yili uchun oliy ta’lim muassasalarining maxsus sirtqi bo‘limiga 1-kursga talabalarni qabul qilish yuqori saviyada va adolatli o‘tkazilishini ta’minlasin;

oliy ta’lim muassasalarining maxsus sirtqi bo‘limlari tashkil etilgan ta’lim yo‘nalishlarining o‘quv rejasi va fan dasturlarini tasdiqlasin, shuningdek ularga muvofiq fanlarni o‘quv adabiyotlari bilan ta’minlash choralarini ko‘rsin;

pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlarda dars berishga yuqori salohiyatga ega professor-o‘qituvchilar tarkibini shakllantirsin;

O‘zbekiston Respublikasi Moliya vazirligi bilan birgalikda oliy ta’lim muassasalari tomonidan tasdiqlangan shtatlar jadvali, daromadlar va xarajatlar smetasiga tegishli o‘zgartirishlar kiritishni va ular belgilangan tartibda ro‘yxatdan o‘tkazilishini ta’minlasin.
<br/>
7. Nizomiy nomidagi Toshkent davlat pedagogika universiteti maxsus sirtqi bo‘lim ta’lim yo‘nalishlari bo‘yicha malaka talablari, o‘quv rejalari va dasturlari hamda o‘quv va o‘quv-metodik adabiyotlarni yaratish bo‘yicha tayanch oliy ta’lim muassasasi etib belgilansin va uning huzurida pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlar tashkil etilgan oliy ta’lim muassasalarining o‘quv-metodik faoliyatini Muvofiqlashtiruvchi Kengash tashkil qilinsin.

Quyidagilar Muvofiqlashtiruvchi Kengashning asosiy vazifalari etib belgilansin:

maxsus sirtqi bo‘limlar orqali umumta’lim maktablari, maktabgacha va maktabdan tashqari ta’lim muassasalari uchun pedagog kadrlar tayyorlash ta’lim mazmuni zamonaviy talablarga uyg‘un rivojlantirilishini ta’minlash hamda mazkur jarayonlarga ilmiy-metodik rahbarlikni amalga oshirish;

maxsus sirtqi bo‘limlar o‘quv jarayonlariga ilg‘or xorijiy tajriba, zamonaviy pedagogik va axborot-kommunikatsiya texnologiyalarini keng joriy etishni hisobga olgan holda malaka talablari, o‘quv rejalari va dasturlarini tizimli ravishda takomillashtirib borish;

maxsus sirtqi bo‘limlar o‘quv jarayonlariga pedagogika sohasi olimlari va mamlakatimizning yetuk mutaxassislari jalb etilishini tashkil etish;

pedagogika sohasining dolzarb ilmiy muammolarini hal etishga yo‘naltirilgan ilmiy izlanishlar, jumladan fundamental, amaliy va innovatsion tadqiqotlar olib borilishini muvofiqlashtirish;

pedagoglik kasbining jamiyatdagi o‘rni va nufuzini oshirish, jumladan yoshlarni o‘qituvchilik kasbiga yo‘naltirishga qaratilgan tadbirlarni tashkil etish;

maxsus sirtqi bo‘limlar faoliyat olib borayotgan oliy ta’lim muassasalarining ilmiy-pedagogik salohiyatini oshirish, jumladan oliy malakali ilmiy va ilmiy-pedagog kadrlarni maqsadli tayyorlash, hududlardagi oliy ta’lim muassasalari pedagog kadrlarini qayta tayyorlash va malakasini oshirish bo‘yicha tizimli chora-tadbirlarni amalga oshirish.
<br/>
8. O‘zbekiston Respublikasi Xalq ta’limi vazirligi, Oliy va o‘rta maxsus ta’lim vazirligi va Moliya vazirligi 2017/2018 o‘quv yilidan boshlab Nizomiy nomidagi Toshkent davlat pedagogika universiteti tomonidan pedagogika yo‘nalishlari bo‘yicha maxsus sirtqi bo‘limlar tashkil etilgan oliy ta’lim muassasalarini zarur o‘quv va o‘quv-metodik adabiyotlar bilan ta’minlanishini moliyalashtirishning aniq choralarini ko‘rsin.
<br/>

9. O‘zbekiston Respublikasi Oliy va o‘rta maxsus ta’lim vazirligi bir oy muddatda maxsus sirtqi bo‘limlarga qabul qilish tartibi, mezonlari hamda tuziladigan uch tomonlama shartnoma shaklini ishlab chiqib, belgilangan tartibda tasdiqlash uchun Vazirlar Mahkamasiga kiritsin.
<br/>

10. O‘zbekiston Respublikasi Xalq ta’limi vazirligi Oliy va o‘rta maxsus ta’lim vazirligi, manfaatdor vazirliklar va idoralar bilan birgalikda bir oy muddatda:

qonun hujjatlariga ushbu qarordan kelib chiqadigan o‘zgartirish va qo‘shimchalar to‘g‘risida O‘zbekiston Respublikasi Vazirlar Mahkamasiga takliflar kiritsinlar;

o‘zlari qabul qilgan normativ-huquqiy hujjatlarni ushbu qarorga muvofiqlashtirsinlar.
<br/>

11. Mazkur qarorning ijrosini nazorat qilish O‘zbekiston Respublikasining Bosh vaziri A.N. Aripov va O‘zbekiston Respublikasi Prezidentining Davlat maslahatchisi A.N. Yunusxodjayev zimmasiga yuklansin.
          </p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh.,<br />
              2017-yil 9-avgust,
<br />
PQ-3183-son</p>
<div className=''>
    <p>O‘zbekiston Respublikasining Prezidenti I. KARIMOV</p>
</div>              
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pedagogiga_yonalishi;