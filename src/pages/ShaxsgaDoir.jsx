import { useState } from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ShaxsgaDoir = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">1-bob. Umumiy qoidalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi shaxsga doir ma’lumotlar sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining shaxsga doir ma’lumotlar to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Ushbu Qonunning qo‘llanilish sohasi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunning amal qilishi shaxsga doir ma’lumotlarga ishlov berish va ularni himoya qilish chog‘ida qo‘llaniladigan ishlov berish vositalaridan, shu jumladan axborot texnologiyalaridan qat’i nazar yuzaga keladigan munosabatlarga nisbatan tatbiq etiladi.

Ushbu Qonunning amal qilishi:

jismoniy shaxs tomonidan shaxsga doir ma’lumotlarga shaxsiy, maishiy maqsadlarda va o‘z kasbiy yoki tijorat faoliyati bilan bog‘liq bo‘lmagan holda ishlov berish;

Milliy arxiv fondi hujjatlarini va shaxsga doir ma’lumotlarni o‘z ichiga olgan boshqa arxiv hujjatlarini shakllantirish, saqlash va ulardan foydalanish;

davlat sirlarini tashkil etadigan ma’lumotlar jumlasiga kiritilgan shaxsga doir ma’lumotlarga ishlov berish;

tezkor-qidiruv, razvedka va kontrrazvedka faoliyati, jinoyatchilikka qarshi kurashish, huquq-tartibotni saqlash jarayonida, shuningdek jinoiy faoliyatdan olingan daromadlarni legallashtirishga qarshi kurashish doirasida olingan shaxsga doir ma’lumotlarga ishlov berish chog‘ida yuzaga keladigan munosabatlarga nisbatan tatbiq etilmaydi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

shaxsga doir ma’lumotlar — muayyan jismoniy shaxsga taalluqli bo‘lgan yoki uni identifikatsiya qilish imkonini beradigan, elektron tarzda, qog‘ozda va (yoki) boshqa moddiy jismda qayd etilgan axborot;

shaxsga doir ma’lumotlar subyekti (subyekt) — shaxsga doir ma’lumotlar o‘ziga taalluqli bo‘lgan jismoniy shaxs;

shaxsga doir ma’lumotlar bazasi — tarkibida shaxsga doir ma’lumotlar mavjud bo‘lgan axborot tizimi tarzidagi ma’lumotlar bazasi;

shaxsga doir ma’lumotlarga ishlov berish — shaxsga doir ma’lumotlarni yig‘ish, tizimlashtirish, saqlash, o‘zgartirish, to‘ldirish, ulardan foydalanish, ularni berish, tarqatish, uzatish, egasizlantirish va yo‘q qilish bo‘yicha bir harakatni yoki harakatlar majmuini amalga oshirish;

shaxsga doir ma’lumotlar bazasining operatori (operator) — shaxsga doir ma’lumotlarga ishlov berishni amalga oshiruvchi davlat organi, jismoniy va (yoki) yuridik shaxs;

shaxsga doir ma’lumotlar bazasining mulkdori (mulkdor) — shaxsga doir ma’lumotlar bazasiga egalik qilish, undan foydalanish va uni tasarruf etish huquqiga ega bo‘lgan davlat organi, jismoniy va (yoki) yuridik shaxs;

uchinchi shaxs — subyekt, mulkdor va (yoki) operator bo‘lmagan, ammo shaxsga doir ma’lumotlarga ishlov berish bo‘yicha holatlar yoki munosabatlar orqali ular bilan bog‘liq bo‘lgan har qanday shaxs.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Ushbu Qonunning asosiy prinsiplari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonunning asosiy prinsiplari quyidagilardan iborat:

inson va fuqaroning konstitutsiyaviy huquq va erkinliklariga rioya etish;

shaxsga doir ma’lumotlarga ishlov berish maqsadlari va usullarining qonuniyligi;

shaxsga doir ma’lumotlarning aniqligi va ishonchliligi;

shaxsga doir ma’lumotlarning maxfiyligi va himoya qilinganligi;

subyektlar, mulkdorlar va operatorlar huquqlarining tengligi;

shaxs, jamiyat va davlatning xavfsizligi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Shaxsga doir ma’lumotlar sohasini davlat tomonidan tartibga solish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">2-bob. Shaxsga doir ma’lumotlar sohasini davlat tomonidan tartibga solish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Shaxsga doir ma’lumotlar sohasini davlat tomonidan tartibga solishni amalga oshiruvchi organlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar sohasini davlat tomonidan tartibga solish O‘zbekiston Respublikasi Vazirlar Mahkamasi va shaxsga doir ma’lumotlar sohasidagi vakolatli davlat organi tomonidan amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining shaxsga doir ma’lumotlar sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

shaxsga doir ma’lumotlar sohasida yagona davlat siyosati amalga oshirilishini ta’minlaydi;

shaxsga doir ma’lumotlar sohasidagi davlat dasturlarini tasdiqlaydi;

Shaxsga doir ma’lumotlarga ishlov berishning namunaviy tartibini tasdiqlaydi;

Mulkdorning va (yoki) operatorning shaxsga doir ma’lumotlarga ishlov berilishini hamda ularning himoya qilinishini ta’minlovchi tuzilmaviy bo‘linmasi yoki vakolatli shaxsi faoliyatini tashkil etishning namunaviy tartibini tasdiqlaydi;

Shaxsga doir ma’lumotlar bazalarining davlat reyestrini yuritadi;

shaxsga doir ma’lumotlar bazasi Shaxsga doir ma’lumotlar bazalarining davlat reyestrida ro‘yxatdan o‘tkazilganligi to‘g‘risida guvohnoma beradi;

shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilik talablariga rioya etilishi ustidan o‘z vakolatlari doirasida davlat nazoratini amalga oshiradi;

O‘zbekiston Respublikasi Vazirlar Mahkamasiga shaxsga doir ma’lumotlar sohasidagi normativ-huquqiy bazani takomillashtirish yuzasidan takliflar kiritadi;

davlat xavfsizligini ta’minlash sohasidagi vakolatli davlat organlariga ularning faoliyati sohasiga nisbatan qo‘llaniladigan belgilangan ma’lumotlarni yuboradi;

shaxsga doir ma’lumotlarning zarur himoya qilinganlik darajasini belgilaydi;

ishlov beriladigan shaxsga doir ma’lumotlarning hajmi va mazmunini, faoliyat turini, shaxsga doir ma’lumotlar xavfsizligiga bo‘lgan tahdidlarning haqiqiyligini tahlil qiladi;

shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilikning buzilishlarini bartaraf qilish haqida yuridik va jismoniy shaxslar tomonidan ijro etilishi majburiy bo‘lgan ko‘rsatmalar kiritadi;

chet davlatlarning vakolatli organlari va xalqaro tashkilotlar bilan shaxsga doir ma’lumotlar sohasida hamkorlikni amalga oshiradi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. Shaxsga doir ma’lumotlar sohasidagi vakolatli davlat organi

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Davlat personallashtirish markazi shaxsga doir ma’lumotlar sohasidagi vakolatli davlat organidir (bundan buyon matnda vakolatli davlat organi deb yuritiladi).

Vakolatli davlat organi:

shaxsga doir ma’lumotlar sohasidagi davlat siyosatini amalga oshiradi;

shaxsga doir ma’lumotlar sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

Shaxsga doir ma’lumotlarga ishlov berishning namunaviy tartibini tasdiqlaydi;

Mulkdorning va (yoki) operatorning shaxsga doir ma’lumotlarga ishlov berilishini hamda ularning himoya qilinishini ta’minlovchi tuzilmaviy bo‘linmasi yoki vakolatli shaxsi faoliyatini tashkil etishning namunaviy tartibini tasdiqlaydi;

Shaxsga doir ma’lumotlar bazalarining davlat reyestrini yuritadi;

shaxsga doir ma’lumotlar bazasi Shaxsga doir ma’lumotlar bazalarining davlat reyestrida ro‘yxatdan o‘tkazilganligi to‘g‘risida guvohnoma beradi;

shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilik talablariga rioya etilishi ustidan o‘z vakolatlari doirasida davlat nazoratini amalga oshiradi;

O‘zbekiston Respublikasi Vazirlar Mahkamasiga shaxsga doir ma’lumotlar sohasidagi normativ-huquqiy bazani takomillashtirish yuzasidan takliflar kiritadi;

davlat xavfsizligini ta’minlash sohasidagi vakolatli davlat organlariga ularning faoliyati sohasiga nisbatan qo‘llaniladigan belgilangan ma’lumotlarni yuboradi;

shaxsga doir ma’lumotlarning zarur himoya qilinganlik darajasini belgilaydi;

ishlov beriladigan shaxsga doir ma’lumotlarning hajmi va mazmunini, faoliyat turini, shaxsga doir ma’lumotlar xavfsizligiga bo‘lgan tahdidlarning haqiqiyligini tahlil qiladi;

shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilikning buzilishlarini bartaraf qilish haqida yuridik va jismoniy shaxslar tomonidan ijro etilishi majburiy bo‘lgan ko‘rsatmalar kiritadi;

chet davlatlarning vakolatli organlari va xalqaro tashkilotlar bilan shaxsga doir ma’lumotlar sohasida hamkorlikni amalga oshiradi.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Shaxsga doir ma’lumotlarga ishlov berish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">3-bob. Shaxsga doir ma’lumotlarga ishlov berish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. Shaxsga doir ma’lumotlarga ishlov berish ishtirokchilari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyekt va operator shaxsga doir ma’lumotlarga ishlov berish ishtirokchilaridir. Subyektning qonuniy vakili, mulkdor va uchinchi shaxslar ham shaxsga doir ma’lumotlarga ishlov berish ishtirokchilari sifatida ish yuritishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. Shaxsga doir ma’lumotlarni yig‘ish, tizimlashtirish va saqlash</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar bazasi mulkdor va (yoki) operator, shuningdek uchinchi shaxs tomonidan amalga oshiriladigan vazifalarni bajarish uchun zarur hamda yetarli bo‘lgan shaxsga doir ma’lumotlarni yig‘ish yo‘li bilan shakllantiriladi.

Shaxsga doir ma’lumotlarni yig‘ish, tizimlashtirish tartibi va prinsiplari mulkdor va (yoki) operator tomonidan mustaqil ravishda belgilanadi. Shaxsga doir ma’lumotlarni saqlash shaxsga doir ma’lumotlarni yig‘ish chog‘ida ilgari bildirilgan maqsadlar talab etadigan darajada subyektni identifikatsiya qilish imkonini beradigan shaklda amalga oshiriladi.

Shaxsga doir ma’lumotlarni saqlash muddati ularni yig‘ish va ularga ishlov berish maqsadiga erishish sanasi bilan belgilanadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. Shaxsga doir ma’lumotlarni o‘zgartirish va to‘ldirish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarni o‘zgartirish va to‘ldirish subyektning murojaati asosida, ushbu murojaat berilgan paytdan e’tiboran uch kunlik muddatdan kechiktirmay mulkdor va (yoki) operator tomonidan amalga oshiriladi.

Haqiqatga to‘g‘ri kelmaydigan shaxsga doir ma’lumotlarni o‘zgartirish va to‘ldirish bunday nomuvofiqlik aniqlangan paytdan e’tiboran darhol amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. Shaxsga doir ma’lumotlardan foydalanish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mulkdorning, operatorning va uchinchi shaxsning faoliyati maqsadlarini amalga oshirishga qaratilgan shaxsga doir ma’lumotlar bilan harakatlar shaxsga doir ma’lumotlardan foydalanishdir.

Mulkdor, operator va uchinchi shaxs tomonidan shaxsga doir ma’lumotlardan foydalanish bu ma’lumotlarning zarur darajada himoya qilinishini ta’minlash sharti bilan faqat ushbu shaxsga doir ma’lumotlarni yig‘ish bo‘yicha ilgari bildirilgan maqsadlar uchun amalga oshiriladi.

Mulkdor va (yoki) operatorning, shuningdek uchinchi shaxsning shaxsga doir ma’lumotlarga ishlov berish bilan bog‘liq bo‘lgan xodimlari tomonidan shaxsga doir ma’lumotlardan foydalanish faqat ularning o‘z kasbiy, xizmat yoki mehnat majburiyatlariga muvofiq amalga oshirilishi kerak.

Mulkdor va (yoki) operatorning, shuningdek uchinchi shaxsning shaxsga doir ma’lumotlarga ishlov berish bilan bog‘liq bo‘lgan xodimlari o‘ziga ishonib topshirilgan yoki kasbiy, xizmat yoxud mehnat majburiyatlarini bajarishi sababli ma’lum bo‘lib qolgan shaxsga doir ma’lumotlarning oshkor etilishiga yo‘l qo‘ymasligi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. Shaxsga doir ma’lumotlarni berish

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarni muayyan shaxsga oshkor etishga qaratilgan harakatlar shaxsga doir ma’lumotlarni berish hisoblanadi.

Shaxsga doir ma’lumotlarni davlat boshqaruvi organlariga berish bepul asosda amalga oshiriladi.

Subyekt o‘zining shaxsga doir ma’lumotlarini berishni rad qilgan taqdirda, o‘zining rad qilishi sabablarini ko‘rsatmaslik huquqiga ega.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Shaxsga doir ma’lumotlarni tarqatish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarni nomuayyan doiradagi shaxslarga oshkor etishga, shu jumladan shaxsga doir ma’lumotlarni ommaviy axborot vositalarida hammaga ma’lum qilishga, Internet jahon axborot tarmog‘ida ishlov berishga yoki shaxsga doir ma’lumotlardan biror-bir boshqa usul bilan foydalanish imkonini berishga qaratilgan harakatlar shaxsga doir ma’lumotlarni tarqatishdir.

Shaxsga doir ma’lumotlarni yig‘ishning ilgari bildirilgan maqsadlaridan chetga chiqilgan hollarda, ushbu ma’lumotlarni tarqatish subyektning roziligi bilan amalga oshiriladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Shaxsga doir ma’lumotlarni transchegaraviy uzatish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarni mulkdor va (yoki) operator tomonidan O‘zbekiston Respublikasi hududidan tashqariga uzatish shaxsga doir ma’lumotlarni transchegaraviy uzatishdir.

Shaxsga doir ma’lumotlarni transchegaraviy uzatish shaxsga doir ma’lumotlar subyektlarining huquqlari bir xilda himoya qilinishini ta’minlovchi chet davlatlar hududiga amalga oshiriladi.

Shaxsga doir ma’lumotlarning bir xilda himoya qilinishini ta’minlamaydigan chet davlatlar hududiga shaxsga doir ma’lumotlarni transchegaraviy uzatish quyidagi hollarda amalga oshirilishi mumkin:

subyektning o‘z shaxsga doir ma’lumotlarini transchegaraviy uzatish bo‘yicha roziligi mavjud bo‘lganda;

O‘zbekiston Respublikasining konstitutsiyaviy tuzumini himoya qilish, jamoat tartibini saqlash, fuqarolarning huquqlari va erkinliklarini, aholining sog‘lig‘i va ma’naviyatini muhofaza qilish zarur bo‘lganda;

O‘zbekiston Respublikasining xalqaro shartnomalarida nazarda tutilgan hollarda.

Shaxsga doir ma’lumotlarni transchegaraviy uzatish O‘zbekiston Respublikasining konstitutsiyaviy tuzumi asoslarini, O‘zbekiston Respublikasi fuqarolarining ma’naviyatini, sog‘lig‘ini, huquqlari va qonuniy manfaatlarini himoya qilish, mamlakat mudofaasini hamda davlat xavfsizligini ta’minlash maqsadida taqiqlanishi yoki cheklanishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Shaxsga doir ma’lumotlarni egasizlantirish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Amalga oshirilishi natijasida shaxsga doir ma’lumotlarning muayyan subyektga tegishliligini aniqlash imkoni bo‘lmay qoladigan harakatlar shaxsga doir ma’lumotlarni egasizlantirishdir.

Tarixiy, statistik, sotsiologik yoki ilmiy maqsadlarda shaxsga doir ma’lumotlarga ishlov berish uchun mulkdor va operator, shuningdek uchinchi shaxs bu ma’lumotlarni egasizlantirishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Shaxsga doir ma’lumotlarni yo‘q qilish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Amalga oshirilishi natijasida shaxsga doir ma’lumotlarni tiklash imkoni bo‘lmay qoladigan harakatlar shaxsga doir ma’lumotlarni yo‘q qilishdir.

Shaxsga doir ma’lumotlar mulkdor va (yoki) operator, shuningdek uchinchi shaxs tomonidan quyidagi hollarda yo‘q qilinishi lozim:

shaxsga doir ma’lumotlarga ishlov berish maqsadiga erishilganda;

subyektning shaxsga doir ma’lumotlarga ishlov berish uchun berilgan roziligi chaqirib olinganda;

shaxsga doir ma’lumotlarga ishlov berishning subyekt bergan rozilik bilan belgilangan muddati o‘tganda;

sudning qarori qonuniy kuchga kirganda.</p>
          </div>
        </>
      )
    },
    { 
      title: '4-bob. Shaxsga doir ma’lumotlarga ishlov berish tartibi', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">4-bob. Shaxsga doir ma’lumotlarga ishlov berish tartibi</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Shaxsga doir ma’lumotlarga ishlov berish shartlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarga ishlov berish ushbu Qonunning asosiy prinsiplariga muvofiq amalga oshirilishi kerak.

Shaxsga doir ma’lumotlarga ishlov berish quyidagi hollarda amalga oshiriladi:

subyekt bu ma’lumotlarga ishlov berishga rozilik berganda;

subyekt taraf bo‘lgan shartnomani bajarish uchun bu ma’lumotlarga ishlov berish yoki shunday shartnoma tuzilguniga qadar subyektning so‘roviga binoan choralar ko‘rish zarur bo‘lganda;

mulkdor va (yoki) operatorning qonunchilikda belgilangan majburiyatlarini bajarish uchun bu ma’lumotlarga ishlov berish zarur bo‘lganda;

subyektning yoki boshqa shaxsning qonuniy manfaatlarini himoya qilish uchun bu ma’lumotlarga ishlov berish zarur bo‘lganda;

mulkdor va (yoki) operatorning yoki uchinchi shaxsning huquqlari va qonuniy manfaatlarini amalga oshirish uchun yoxud shaxsga doir ma’lumotlar subyektlarining huquqlari va qonuniy manfaatlari buzilmasligi sharti bilan ijtimoiy ahamiyatga molik maqsadlarga erishish uchun bu ma’lumotlarga ishlov berish zarur bo‘lganda;

shaxsga doir ma’lumotlarga ularni majburiy ravishda egasizlantirish sharti bilan statistik yoki boshqa tadqiqot maqsadlarida ishlov berilganda;

agar bu ma’lumotlar hamma foydalanishi mumkin bo‘lgan manbalardan olingan bo‘lsa.

Subyektning huquqlarini va qonuniy manfaatlarini himoya qilish maqsadida shaxsga doir ma’lumotlarga ishlov berish zarur bo‘lgan taqdirda, bu ma’lumotlarga ishlov berishga rozilik olish mumkin bo‘lgan paytga qadar subyektning roziligisiz yo‘l qo‘yiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Shaxsga doir ma’lumotlarga ishlov berishga oid talablar

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlarga ishlov berishning maqsadlari mulkdor va (yoki) operatorning faoliyatini tartibga soluvchi normativ-huquqiy hujjatlar, nizomlar, ta’sis hujjatlari yoki boshqa hujjatlar bilan belgilanadi hamda ushbu Qonunga muvofiq bo‘lishi kerak.

Shaxsga doir ma’lumotlarga ishlov berishning maqsadlari ularni yig‘ish chog‘ida ilgari bildirilgan maqsadlarga, shuningdek mulkdorning va (yoki) operatorning huquq va majburiyatlariga muvofiq bo‘lishi kerak.

Shaxsga doir ma’lumotlarga ishlov berishning maqsadi o‘zgargan taqdirda, mulkdor va (yoki) operator subyektning o‘z ma’lumotlariga o‘zgargan maqsadga muvofiq ishlov berilishi uchun roziligini olishi kerak.

Shaxsga doir ma’lumotlar aniq va ishonchli bo‘lishi, zarur bo‘lgan taqdirda esa o‘zgartirilishi va to‘ldirilishi kerak.

Shaxsga doir ma’lumotlar bazasiga kiritilishi mumkin bo‘lgan shaxsga doir ma’lumotlarning hajmi subyekt tomonidan ushbu Qonunga muvofiq belgilanadi. Ishlov beriladigan shaxsga doir ma’lumotlarning hajmi va xususiyati ularga ishlov berish maqsadlari va usullariga muvofiq bo‘lishi kerak.

Shaxsga doir ma’lumotlarga subyektni identifikatsiya qilishga yo‘l qo‘yiladigan shaklda yoki egasizlantirilgan tarzda ishlov beriladi.

Shaxsga doir ma’lumotlarga ishlov berish muddati subyektning o‘z shaxsga doir ma’lumotlariga ishlov berishga roziligi amal qiladigan muddatdan oshib ketmasligi kerak.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Shaxsga doir ma’lumotlar bazalarini ro‘yxatdan o‘tkazish tartibi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar bazalari Shaxsga doir ma’lumotlar bazalarining davlat reyestrida ro‘yxatdan o‘tkazilishi lozim.

Shaxsga doir ma’lumotlar bazasini ro‘yxatdan o‘tkazish ariza berish prinsipi orqali xabardor qilish yo‘li bilan amalga oshiriladi. Shaxsga doir ma’lumotlar bazasini Shaxsga doir ma’lumotlar bazalarining davlat reyestrida ro‘yxatdan o‘tkazish haqidagi ariza vakolatli davlat organiga beriladi.

O‘z tarkibida:

jamoat birlashmasining yoki diniy tashkilotning ishtirokchilariga (a’zolariga) taalluqli bo‘lgan hamda tegishincha jamoat birlashmasi yoki diniy tashkilot tomonidan ishlov beriladigan shaxsga doir ma’lumotlar, ularni uchinchi shaxslarga tarqatmaslik yoki oshkor etmaslik sharti bilan;

subyekt tomonidan hamma foydalanishi mumkin qilib qo‘yilgan;

subyektlarning faqat familiyasini, ismini va otasining ismini o‘z ichiga olgan;

subyektning mulkdor va (yoki) operator turgan hududga bir martalik kirishi uchun yoki boshqa shunga o‘xshash maqsadlar uchun zarur bo‘lgan;

avtomatlashtirilgan davlat axborot tizimlari maqomiga ega bo‘lgan shaxsga doir ma’lumotlarning axborot tizimlariga kiritilgan;

avtomatlashtirish vositalaridan foydalanmagan holda ishlov beriladigan;

mehnat to‘g‘risidagi qonunchilikka muvofiq ishlov beriladigan shaxsga doir ma’lumotlar mavjud bo‘lgan shaxsga doir ma’lumotlar bazalari ro‘yxatdan o‘tkazilmaydi.

Mulkdor va (yoki) operator tegishli shaxsga doir ma’lumotlar bazasini ro‘yxatdan o‘tkazish uchun zarur bo‘lgan ma’lumotlarning har bir o‘zgarishi to‘g‘risida vakolatli davlat organini bunday o‘zgarish yuzaga kelgan kundan e’tiboran o‘n kalendar kundan kechiktirmay xabardor qilishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Shaxsga doir ma’lumotlarga ishlov berishga oid talablar

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyekt o‘zining shaxsga doir ma’lumotlariga ishlov berishga taalluqli bo‘lgan, quyidagilar ko‘rsatilgan axborotni olish huquqiga ega:

shaxsga doir ma’lumotlarga ishlov berilganligi faktining tasdig‘i;

shaxsga doir ma’lumotlarga ishlov berish asoslari va maqsadlari;

shaxsga doir ma’lumotlarga ishlov berishda qo‘llaniladigan usullar;

mulkdorning va (yoki) operatorning nomi hamda ularning (uning) joylashgan eri (pochta manzili), shaxsga doir ma’lumotlardan foydalanish imkoniyatiga ega bo‘lgan yoxud mulkdor va (yoki) operator bilan tuzilgan shartnoma asosida yoki qonun asosida shaxsga doir ma’lumotlar o‘ziga oshkor qilinishi mumkin bo‘lgan shaxslar haqidagi ma’lumotlar;

tegishli subyektga taalluqli bo‘lgan, ishlov beriladigan shaxsga doir ma’lumotlarning tarkibi, ularni olish manbai, agar ushbu Qonunda bunday ma’lumotlarni taqdim etishning boshqacha tartibi nazarda tutilgan bo‘lmasa;

shaxsga doir ma’lumotlarga ishlov berish muddatlari, shu jumladan ularni saqlash muddatlari;

ushbu Qonunning 30-moddasida nazarda tutilgan huquqlarning subyekt tomonidan amalga oshirilish tartibi;

shaxsga doir ma’lumotlarning amalga oshirilgan yoki mo‘ljallanilayotgan transchegaraviy uzatilishi to‘g‘risidagi axborot.

Subyektga o‘zining shaxsga doir ma’lumotlarini taqdim etish boshqa shaxslarning huquqlari va qonuniy manfaatlarini buzadigan hollarda, subyektning o‘z shaxsga doir ma’lumotlariga ishlov berilishiga taalluqli axborotni olishga bo‘lgan huquqi cheklanishi mumkin.

Subyektning shaxsga doir ma’lumotlariga ishlov berishga taalluqli axborotni uchinchi shaxsga taqdim etish tartibi subyektning shaxsga doir ma’lumotlarga ishlov berish uchun roziligi shartlariga ko‘ra belgilanadi.

Mulkdor va (yoki) operator quyidagi hollarda subyektga uning shaxsga doir ma’lumotlariga ishlov berishga taalluqli axborotni taqdim etish majburiyatidan ozod etiladi, agar:

subyekt o‘zining shaxsga doir ma’lumotlariga ishlov berishni amalga oshirish to‘g‘risida ilgari xabardor qilingan bo‘lsa;

shaxsga doir ma’lumotlar subyekt tomonidan hamma foydalanishi mumkin bo‘lgan qilingan bo‘lsa yoki hamma foydalanishi mumkin bo‘lgan manbadan olingan bo‘lsa;

bunday axborotning berilishi jismoniy va yuridik shaxslarning huquqlari va qonuniy manfaatlari buzilishiga olib keladigan bo‘lsa.

Shaxsga doir ma’lumotlarga ishlov berishga taalluqli axborotni taqdim etishni rad qilish to‘g‘risidagi xabarnoma so‘rov bergan subyektga o‘n kun ichida yozma shaklda yuboriladi.

Shaxsga doir ma’lumotlarga ishlov berishga taalluqli axborotni taqdim etishni rad qilish to‘g‘risidagi qaror ustidan subyekt vakolatli davlat organiga yoki sudga shikoyat qilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Shaxsga doir ma’lumotlarga ishlov berish chog‘idagi harakatlar to‘g‘risida xabardor qilish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyekt o‘zining shaxsga doir ma’lumotlari shaxsga doir ma’lumotlar bazasiga kiritilayotganda shaxsga doir ma’lumotlarga ishlov berish maqsadlari, ushbu Qonunning 30-moddasida belgilangan o‘z huquqlari haqida yozma shaklda xabardor qilinishi kerak.

Shaxsga doir ma’lumotlar uchinchi shaxsga berilgan taqdirda, mulkdor va (yoki) operator bu haqda subyektni uch kun ichida yozma shaklda xabardor qiladi.

Subyektni yozma shaklda xabardor qilish quyidagi hollarda amalga oshirilmaydi:

davlat organlari o‘z vakolatlarini amalga oshirayotganda;

shaxsga doir ma’lumotlar tarixiy, statistik, sotsiologik yoki ilmiy maqsadlarda ishlov berish uchun berilganda;

shaxsga doir ma’lumotlar hamma foydalanishi mumkin bo‘lgan manbalardan yig‘ilganda.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Shaxsga doir ma’lumotlarga avtomatlashtirilgan tarzda ishlov berish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyekt o‘z huquqlari va qonuniy manfaatlariga daxldor bo‘lgan, yuridik oqibatlarni keltirib chiqaradigan o‘z shaxsga doir ma’lumotlariga faqat avtomatlashtirilgan tarzda ishlov berish asosida qaror qabul qilishga duchor etilmaslik huquqiga ega, bundan ushbu moddaning ikkinchi qismida nazarda tutilgan hollar mustasno.

Quyidagi hollarda subyektning shaxsga doir ma’lumotlariga faqat avtomatlashtirilgan tarzda ishlov berish asosida qaror qabul qilinishi mumkin:

subyektning yozma shakldagi, shu jumladan elektron hujjat tarzidagi roziligi mavjud bo‘lganda;

agar qaror mulkdor va subyekt o‘rtasidagi shartnomani ijro etish yoki ilgari tuzilgan shartnoma shartlarini bajarish uchun qabul qilinayotgan bo‘lsa;

qonunchilikda nazarda tutilgan hollarda.

Mulkdor va (yoki) operator subyektga uning shaxsga doir ma’lumotlariga faqat avtomatlashtirilgan tarzda ishlov berish asosida qaror qabul qilish tartibini va bunday qarorning ehtimoldagi yuridik oqibatlarini tushuntirishi, bunday qarorga e’tiroz bildirish imkoniyatini berishi, shuningdek subyekt tomonidan o‘z huquqlari va qonuniy manfaatlarini himoya qilish tartibini tushuntirishi shart.

Mulkdor va (yoki) operator ushbu moddaning uchinchi qismida ko‘rsatilgan e’tirozni ko‘rib chiqishi hamda bunday e’tirozni ko‘rib chiqish natijalari haqida subyektni o‘n kun ichida yozma shaklda xabardor qilishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Shaxsga doir maxsus ma’lumotlarga ishlov berish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Irqiy yoki ijtimoiy kelib chiqishga oid ma’lumotlar, siyosiy, diniy yoki dunyoqarashga oid e’tiqodlar, siyosiy partiyalar va kasaba uyushmalariga a’zolik to‘g‘risidagi ma’lumotlar, shuningdek jismoniy yoki ruhiy (psixik) salomatlikka taalluqli ma’lumotlar, shaxsiy hayot va sudlanganlik to‘g‘risidagi ma’lumotlar shaxsga doir maxsus ma’lumotlardir.

Shaxsga doir maxsus ma’lumotlarga ishlov berish taqiqlanadi, bundan ushbu moddaning uchinchi qismida nazarda tutilgan hollar mustasno.

Shaxsga doir maxsus ma’lumotlarga ishlov berishga quyidagi hollarda yo‘l qo‘yiladi:

vakolatli davlat organi tomonidan davlat xavfsizligini tashqi va ichki tahdidlardan himoya qilishni ta’minlash maqsadida;

agar subyekt o‘z shaxsga doir maxsus ma’lumotlariga ishlov berish uchun yozma shaklda, shu jumladan elektron hujjat tarzida rozilik bergan bo‘lsa;

agar shaxsga doir maxsus ma’lumotlar subyekt tomonidan hamma foydalanishi mumkin bo‘lgan manbalarda e’lon qilingan bo‘lsa;

subyektning yoki boshqa shaxslarning huquqlari va qonuniy manfaatlarini himoya qilish maqsadida;

qo‘zg‘atilgan jinoyat ishi, ijro ishini yuritish doirasida sudlar va tegishli huquqni muhofaza qiluvchi organlar faoliyati amalga oshirilayotganda;

jinoiy faoliyatdan olingan daromadlarni legallashtirishga va terrorizmni moliyalashtirishga qarshi kurashishga qaratilgan chora-tadbirlar prokuratura organlari tomonidan amalga oshirilayotganda;

davlat statistika organlari faoliyati amalga oshirilayotganda, shuningdek boshqa davlat organlari tomonidan statistika maqsadlari uchun shaxsga doir ma’lumotlardan foydalanilganda, ularni egasizlantirish sharti bilan;

tibbiy-ijtimoiy xizmatlar ko‘rsatilayotganda yoki tibbiy tashxis, davolash belgilanayotganda, bunday ma’lumotlarga shaxsga doir ma’lumotlarning himoya qilinishini ta’minlash majburiyati zimmasiga yuklatilgan tibbiyot xodimi yoki sog‘liqni saqlash muassasasining boshqa shaxsi tomonidan ishlov berilishi sharti bilan;

mehnatga doir munosabatlar sohasidagi huquqlar amalga oshirilayotganda va majburiyatlar bajarilayotganda;

subyekt muomalaga layoqatsiz bo‘lgan yoki uning muomala layoqati cheklangan taqdirda subyektning yoki uchinchi shaxsning qonuniy manfaatlarini himoya qilish ta’minlanayotganda;

shaxsga doir ma’lumotlar, shu jumladan saylab qo‘yiladigan davlat lavozimlariga nomzodlarning shaxsga doir ma’lumotlari hammaga e’lon qilinganda;

nodavlat notijorat tashkiloti, diniy tashkilot, siyosiy partiya yoki kasaba uyushmasi faoliyati amalga oshirilayotganda, ishlov berish faqat shu tashkilotlar va birlashmalar a’zolarining yoki xodimlarining shaxsga doir ma’lumotlariga taalluqli bo‘lishi hamda subyektlarning roziligisiz uchinchi shaxsga berilmasligi sharti bilan;

ota-ona qaramog‘idan mahrum bo‘lgan bolalarning shaxsga doir ma’lumotlariga ishlov berilayotganda, bu bolalar fuqarolarning oilalariga tarbiyalash uchun joylashtirilayotganda (patronat) hamda vasiylik va homiylikni ta’minlash bo‘yicha boshqa chora-tadbirlar amalga oshirilayotganda;

shaxsga doir ma’lumotlarga davlat xavfsizligini ta’minlash maqsadida ishlov berilayotganda;

sudlanganlik to‘g‘risidagi ma’lumotlarga o‘z vakolatlari doirasida davlat organlari, shuningdek boshqa shaxslar tomonidan ishlov berilayotganda.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Biometrik va genetik ma’lumotlarga ishlov berish

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyektning anatomik va fiziologik o‘ziga xos xususiyatlarini tavsiflovchi shaxsga doir ma’lumotlar biometrik ma’lumotlardir.

Subyektning nasldan-naslga o‘tgan yoki orttirilgan xususiyatlariga taalluqli bo‘lgan, subyektning biologik qiyofasini tahlil qilish yoki muqobil axborot olish imkonini beradigan boshqa elementni tahlil qilish natijasi bo‘lgan shaxsga doir ma’lumotlar genetik ma’lumotlardir.

Subyektning shaxsini aniqlash uchun foydalaniladigan biometrik va genetik ma’lumotlarga faqat mazkur subyektning roziligi mavjud bo‘lgan taqdirda, bundan O‘zbekiston Respublikasining xalqaro shartnomalarini ro‘yobga chiqarish, odil sudlovni amalga oshirish, ijro ishini yuritish bilan bog‘liq hollar mustasno, shuningdek qonunchilikda nazarda tutilgan boshqa hollarda ishlov berilishi mumkin.

Elektron shakldagi biometrik va genetik ma’lumotlardan axborot tizimlaridan tashqarida foydalanish va ularni shunday tizimlardan tashqarida saqlash faqat ulardan ruxsatsiz foydalanishni istisno etadigan axborot tashuvchi moddiy jismlarda amalga oshirilishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '5-bob. Shaxsga doir ma’lumotlarni himoya qilish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">5-bob. Shaxsga doir ma’lumotlarni himoya qilish</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Shaxsga doir ma’lumotlarni himoya qilish kafolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Davlat shaxsga doir ma’lumotlarning himoya qilinishini kafolatlaydi.

Mulkdor va (yoki) operator, shuningdek uchinchi shaxs shaxsga doir ma’lumotlarni himoya qilish bo‘yicha quyidagilarni ta’minlaydigan huquqiy, tashkiliy va texnik choralarni ko‘radi:

subyektning o‘z shaxsiy hayotiga aralashuvdan himoya qilinish huquqi amalga oshirilishini;

shaxsga doir ma’lumotlarning yaxlitligini va but saqlanishini;

shaxsga doir ma’lumotlarning maxfiyligiga rioya etilishini;

shaxsga doir ma’lumotlarga qonunga xilof ravishda ishlov berilishining oldi olinishini.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-1-modda. O‘zbekiston Respublikasi fuqarolarining shaxsga doir ma’lumotlariga ishlov berishning alohida shartlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mulkdor va (yoki) operator O‘zbekiston Respublikasi fuqarolarining shaxsga doir ma’lumotlariga axborot texnologiyalaridan foydalangan holda ishlov berishda, shu jumladan Internet jahon axborot tarmog‘ida ishlov berishda ularning jisman O‘zbekiston Respublikasi hududida joylashgan texnik vositalarda hamda belgilangan tartibda Shaxsga doir ma’lumotlar bazalarining davlat reyestrida ro‘yxatdan o‘tkazilgan shaxsga doir ma’lumotlar bazalarida yig‘ilishini, tizimlashtirilishini va saqlanishini ta’minlashi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Shaxsga doir ma’lumotlarning maxfiyligi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyektning roziligisiz yoki boshqa qonuniy asos mavjud bo‘lmagani holda shaxsga doir ma’lumotlarni oshkor etish va tarqatishga yo‘l qo‘yilmasligi to‘g‘risida mulkdor va (yoki) operator yoki shaxsga doir ma’lumotlardan foydalanishga ruxsat olgan boshqa shaxs tomonidan rioya etilishi majburiy bo‘lgan talab shaxsga doir ma’lumotlarning maxfiyligidir.

Mulkdor va (yoki) operator hamda shaxsga doir ma’lumotlardan foydalanishga ruxsat olgan boshqa shaxslar subyektning roziligisiz shaxsga doir ma’lumotlarni uchinchi shaxslarga oshkor etmasligi va tarqatmasligi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Hamma foydalanishi mumkin bo‘lgan shaxsga doir ma’lumotlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Subyektning roziligi bilan erkin foydalanilishi mumkin bo‘lgan yoki maxfiylikka rioya etishga doir talablar tatbiq etilmaydigan shaxsga doir ma’lumotlar hamma foydalanishi mumkin bo‘lgan shaxsga doir ma’lumotlardir.

Aholini axborot bilan ta’minlash maqsadida shaxsga doir ma’lumotlarning hamma foydalanishi mumkin bo‘lgan manbalari (shu jumladan biografik ma’lumotnomalar, telefon, manzil kitoblari, hamma foydalanishi mumkin bo‘lgan elektron axborot resurslari) yaratilishi mumkin.

Shaxsga doir ma’lumotlarning hamma foydalanishi mumkin bo‘lgan manbalariga subyektning yozma roziligi bilan uning familiyasi, ismi, otasining ismi, tug‘ilgan yili va joyi, manzili, abonent raqami, kasbi to‘g‘risidagi ma’lumotlar hamda subyekt tomonidan ma’lum qilinadigan boshqa shaxsga doir ma’lumotlar kiritilishi mumkin.

Subyekt haqidagi ma’lumotlar shaxsga doir ma’lumotlarning hamma foydalanishi mumkin bo‘lgan manbalaridan uning murojaatiga ko‘ra, rozilik qanday shaklda berilgan bo‘lsa, shunday shaklda yoki yozma shaklda, shu jumladan elektron hujjat tarzida, shuningdek vakolatli davlat organining yoki sudning qaroriga ko‘ra chiqarib tashlanishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '6-bob. Shaxsga doir ma’lumotlarga ishlov berish ishtirokchilarining huquq va majburiyatlari', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">6-bob. Shaxsga doir ma’lumotlarga ishlov berish ishtirokchilarining huquq va majburiyatlari</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>30-modda. Subyektning huquq va majburiyatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar subyekti:

mulkdorda va (yoki) operatorda, shuningdek uchinchi shaxsda o‘z shaxsga doir ma’lumotlarini va ularning tarkibi mavjudligini bilish;

mulkdordan va (yoki) operatordan shaxsga doir ma’lumotlarga ishlov berish to‘g‘risidagi axborotni so‘rov bo‘yicha olish:

mulkdordan va (yoki) operatordan o‘zining shaxsga doir ma’lumotlaridan foydalanish imkoniyatini berish shartlari to‘g‘risida axborot olish;

o‘zining shaxsga doir ma’lumotlariga nisbatan huquqlari va qonuniy manfaatlarini himoya qilish masalalari yuzasidan vakolatli davlat organiga yoki sudga murojaat etish;

o‘z shaxsga doir ma’lumotlariga ishlov berish uchun rozilik berish va bunday rozilikni chaqirib olish, bundan ushbu Qonunda nazarda tutilgan hollar mustasno;

o‘zining shaxsga doir ma’lumotlarini shaxsga doir ma’lumotlarning hamma foydalanishi mumkin bo‘lgan manbalarida tarqatilishi uchun mulkdorga va (yoki) operatorga, shuningdek uchinchi shaxsga rozilik berish;

agar shaxsga doir ma’lumotlar to‘liq bo‘lmasa, eskirgan, noaniq bo‘lsa, qonunga xilof ravishda olingan bo‘lsa yoki ishlov berish maqsadlari uchun zarur bo‘lmasa, mulkdordan va (yoki) operatordan o‘zining shaxsga doir ma’lumotlariga ishlov berishni vaqtincha to‘xtatib turishni talab qilish huquqiga ega.

Muomalaga layoqatsiz yoki muomala layoqati cheklangan deb topilgan subyektning shaxsga doir ma’lumotlarini tasarruf etishni uning qonuniy vakili amalga oshiradi.

O‘zining shaxsga doir ma’lumotlarini O‘zbekiston Respublikasining konstitutsiyaviy tuzumi asoslarini, O‘zbekiston Respublikasi fuqarolarining ma’naviyatini, sog‘lig‘ini, huquqlari va qonuniy manfaatlarini himoya qilish, mamlakat mudofaasini hamda davlat xavfsizligini ta’minlash maqsadlarida taqdim etish subyektning majburiyatidir.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Mulkdorning va (yoki) operatorning huquq va majburiyatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Mulkdor va (yoki) operator shaxsga doir ma’lumotlarga ishlov berishni amalga oshirish huquqiga ega.

Mulkdor va (yoki) operator:

shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilikka rioya etishi;

subyektning murojaatiga ko‘ra uning shaxsga doir ma’lumotlariga ishlov berishga taalluqli axborotni taqdim etishi;

o‘zi vazifalarini bajarish uchun zarur va yetarli bo‘lgan shaxsga doir ma’lumotlar tarkibini tasdiqlashi;

shaxsga doir ma’lumotlarga ishlov berishdan ko‘zlangan maqsadga erishilgan taqdirda, shuningdek ushbu Qonunda belgilangan boshqa hollarda ularni yo‘q qilish choralarini ko‘rishi;

qonunchilikda nazarda tutilgan hollarda subyektning o‘z shaxsga doir ma’lumotlariga ishlov berish uchun roziligi olinganligi dalilini taqdim etishi;

basharti yangi ma’lumotlarning ishonchliligi hujjatlar bilan tasdiqlansa, shaxsga doir ma’lumotlarni o‘zgartirishi va (yoki) to‘ldirishi yoxud bunday o‘zgartirish va (yoki) to‘ldirishni kiritish imkoni bo‘lmagan taqdirda bu ma’lumotlarni yo‘q qilishi;

shaxsga doir ma’lumotlarga ishlov berish shartlari buzilganligi to‘g‘risida axborot mavjud bo‘lgan taqdirda, ularga ishlov berishni vaqtincha to‘xtatishi yoki ularni yo‘q qilishi;

subyektning shaxsga doir ma’lumotlariga ishlov berishni vaqtincha to‘xtatish va (yoki) ularni yo‘q qilish uchun subyekt tomonidan hujjatlarni elektron tarzda berish imkoniyatini ta’minlashi;

shaxsga doir ma’lumotlar o‘zgartirilgan, yo‘q qilingan va ulardan foydalanish cheklangan hollarda subyektni, shuningdek shaxsga doir ma’lumotlar bazasi operatorini hamda shaxsga doir ma’lumotlarga ishlov berishning boshqa ishtirokchilarini yozma shaklda xabardor qilishi;

shaxsga doir ma’lumotlar uchinchi shaxsga berilgan taqdirda, subyektni yozma shaklda xabardor qilishi;

o‘z mulki bo‘lgan va (yoki) ishlov berilayotgan shaxsga doir ma’lumotlar bazalarini ro‘yxatdan o‘tkazishi;

shaxsga doir ma’lumotlarni himoya qilish bo‘yicha zarur huquqiy, tashkiliy va texnik choralarni ko‘rishi shart.

Mulkdor va (yoki) operator shaxsga doir ma’lumotlarga ishlov berishni quyidagi hollarda uchinchi shaxsga topshirishga haqli:

subyektning yozma shakldagi, shu jumladan elektron hujjat tarzidagi roziligi mavjud bo‘lgan taqdirda;

agar qaror mulkdor va subyekt o‘rtasidagi shartnomani ijro etish yoki ilgari tuzilgan shartnoma shartlarini bajarish uchun qabul qilinayotgan bo‘lsa;

qonunchilikda nazarda tutilgan hollarda.

Mulkdorning va (yoki) operatorning, shuningdek uchinchi shaxsning shaxsga doir ma’lumotlarni himoya qilish bo‘yicha majburiyatlari shaxsga doir ma’lumotlarni yig‘ish paytidan e’tiboran vujudga keladi va ular yo‘q qilib tashlangan yoki egasizlantirilgan paytga qadar amal qiladi.

Mulkdor va (yoki) operator shaxsga doir ma’lumotlarga ishlov berish va ularni himoya qilish bilan bog‘liq ishlar uchun mas’ul bo‘lgan tarkibiy bo‘linmani yoki mansabdor shaxsni belgilaydi hamda uning ishini Shaxsga doir ma’lumotlarga ishlov berishning namunaviy tartibiga muvofiq ta’minlaydi.</p>
          </div>
        </>
      )
    },
    {
      title: '7-bob. Yakunlovchi qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">7-bob. Yakunlovchi qoidalar</span>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Nizolarni hal etish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar sohasida yuzaga keladigan nizolar qonunchilikda belgilangan tartibda hal etiladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Shaxsga doir ma’lumotlar to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>34-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Vakolatli davlat organi boshqa manfaatdor vazirliklar, davlat qo‘mitalari va idoralar bilan birgalikda ushbu Qonunning ijrosini, ijrochilarga yetkazilishini hamda mohiyati va ahamiyati aholi o‘rtasida tushuntirilishini ta’minlasin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>35-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin;

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini qayta ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>36-modda. Ushbu Qonunning kuchga kirishi

</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>Ushbu Qonun 2019-yil 1-oktabrdan e’tiboran kuchga kiradi.</p>
            <div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2019-yil 2-iyul,
<br />
O‘RQ-547-son</p>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
            </div>
          </div>
        </>
      )
    },
  ];


  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-700 leading-tight">O'ZBEKISTON RESPUBLIKASINING QONUNI</h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Shaxsga doir ma'lumotlar to'g'risida</h2>
        </div>
        <div className="bg-white rounded-lg shadow-sm">
          <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShaxsgaDoir;