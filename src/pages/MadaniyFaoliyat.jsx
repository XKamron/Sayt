import { useState } from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MadaniyFaoliyat = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">1-bob. Umumiy qoidalar</span>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>1-modda. Ushbu Qonunning maqsadi</h1>
            <p>Ushbu Qonunning maqsadi madaniy faoliyat, shuningdek madaniyat tashkilotlari faoliyati sohasidagi (bundan buyon matnda madaniy faoliyat sohasidagi deb yuritiladi) munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>2-modda. Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilik

</h1>
            <p>Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilik ushbu Qonun hamda boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida O‘zbekiston Respublikasining madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchiligida nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>3-modda. Asosiy tushunchalar</h1>
            <p>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:
ijodkor — kasbiy yoki nokasbiy asosda (havaskorlik asosida) madaniy faoliyatning bir yoxud bir necha yo‘nalishi bo‘yicha ijodiy faoliyat bilan shug‘ullanuvchi jismoniy shaxs;

ijodiy jamoa — ijodkorlardan va boshqa mutaxassislardan tarkib topgan, madaniy faoliyatning bir yoki bir necha yo‘nalishi bo‘yicha ijodiy faoliyat bilan shug‘ullanish uchun tashkil etilgan kasbiy yoki nokasbiy jamoalar (havaskorlik jamoalari);

ijodiy faoliyat — madaniyat obyektlarini barpo etishga, takrorlashga, tarqatishga, tiklashga yoki saqlashga, shuningdek madaniyatni rivojlantirishga doir faoliyat;

madaniy tadbirlar — madaniy faoliyat sohasidagi madaniy-tomosha tadbirlari, madaniy-ma’rifiy, madaniy-ommaviy va boshqa tadbirlar;

madaniy tadbir tashkilotchisi — tashabbusiga ko‘ra madaniy tadbir o‘tkaziladigan va (yoki) bunday tadbirga tayyorgarlik ko‘rish hamda uni o‘tkazishga doir tashkiliy yoki moliyaviy yoxud moddiy ta’minotni amalga oshiradigan yuridik yoki jismoniy shaxs;

madaniyat xodimi — o‘z kasbiy faoliyatini madaniyat tashkilotlarida amalga oshiruvchi jismoniy shaxs.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>4-modda. Madaniy faoliyat sohasidagi asosiy prinsiplar</h1>
            <p>Madaniy faoliyat sohasidagi asosiy prinsiplar quyidagilardan iborat:

ma’naviy, axloqiy va madaniy qadriyatlarning ustuvorligi;

ijodiy faoliyat erkinligi;

milliy va umuminsoniy qadriyatlarni hurmat qilish;

madaniyatlar xilma-xilligi;

madaniyatlararo munosabatlarda teng huquqlilik;

madaniy faoliyat sohasidagi ta’lim va tarbiyaning tizimliligi, ilmiyligi hamda uzluksizligi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Madaniy faoliyat sohasini tartibga solish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">2-bob. Madaniy faoliyat sohasini tartibga solish</span>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>5-modda. Madaniy faoliyat sohasidagi davlat siyosatining asosiy yo‘nalishlari</h1>
            <p>Madaniy faoliyat sohasidagi davlat siyosatining asosiy yo‘nalishlari quyidagilardan iborat:

madaniyatni rivojlantirishni davlat tomonidan qo‘llab-quvvatlash;

tarixiy va madaniy merosning but saqlanishini ta’minlash, shuningdek xalq ijodiyotini qo‘llab-quvvatlash;

madaniy faoliyat sohasiga davlat-xususiy sheriklikni joriy etish;

aholining madaniy ehtiyojlarini qanoatlantirish va madaniy xizmatlar sifatini yaxshilash;

aholining, shu jumladan yoshlarning ijodiy salohiyatini ro‘yobga chiqarish uchun shart-sharoitlar yaratish va ularni yaxshilash;

yosh iste’dodlarni o‘qitish, yuqori malakali kadrlarni tayyorlash va ularning malakasini oshirish tizimini takomillashtirish;

madaniy faoliyat sohasida zarur shart-sharoitlarni va sog‘lom raqobat muhitini yaratish;

xalqaro hamkorlikni rivojlantirish.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>6-modda. Madaniy faoliyat sohasidagi davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi organlar</h1>
            <p>Madaniy faoliyat sohasidagi davlat siyosatini ro‘yobga chiqarishni amalga oshiruvchi organlar quyidagilardan iborat:

O‘zbekiston Respublikasi Vazirlar Mahkamasi;

O‘zbekiston Respublikasi Madaniyat vazirligi;

O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi;

“O‘zbekkino” Milliy agentligi;

mahalliy davlat hokimiyati organlari.

Ushbu moddaning birinchi qismida ko‘rsatilmagan davlat organlari va tashkilotlar madaniy faoliyat sohasidagi davlat siyosatini ro‘yobga chiqarishda qonunchilikka muvofiq ishtirok etadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>7-modda. O‘zbekiston Respublikasi Vazirlar Mahkamasining madaniy faoliyat sohasidagi vakolatlari
</h1>
            <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

madaniy faoliyat sohasida yagona davlat siyosati amalga oshirilishini ta’minlaydi;

madaniy faoliyat sohasidagi davlat dasturlari ishlab chiqilishini, tasdiqlanishini va amalga oshirilishini ta’minlaydi;

davlat madaniyat muassasalari va tashkilotlarini tashkil etadi, qayta tashkil etadi hamda tugatadi;

konsert-tomosha faoliyatini litsenziyalash tartibini belgilaydi;

davlat boshqaruvi organlarining madaniy faoliyat sohasidagi faoliyatini muvofiqlashtiradi.

O‘zbekiston Respublikasi Vazirlar Mahkamasi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>8-modda. O‘zbekiston Respublikasi Madaniyat vazirligining madaniy faoliyat sohasidagi vakolatlari</h1>
            <p>O‘zbekiston Respublikasi Madaniyat vazirligi:

madaniy faoliyat sohasidagi davlat siyosatini amalga oshiradi;

madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikka rioya etilishi yuzasidan monitoring yuritadi, uni takomillashtirishga doir takliflar ishlab chiqadi;

teatr, musiqa, xoreografiya, estrada, sirk va xalq amaliy san’ati rivojlanishini ta’minlaydi;

O‘zbekiston Respublikasida va xorijiy mamlakatlarda kasbiy hamda havaskorlik san’ati festivallari, ko‘rik-tanlovlar, shuningdek ko‘rgazmalar o‘tkazilishini tashkil etadi;

madaniyat va san’at sohasidagi yuksak yutuqlar uchun mukofotlar ta’sis etish hamda O‘zbekiston Respublikasining faxriy unvonlarini berish to‘g‘risidagi takliflarni ishlab chiqadi va belgilangan tartibda kiritadi;

madaniyat va san’atni rivojlantirishga doir maqsadli dasturlarni ishlab chiqadi hamda belgilangan tartibda tasdiqlaydi;

madaniyat xodimlarini tayyorlash, qayta tayyorlash va ularning malakasini oshirish bo‘yicha choralar ko‘radi;

manfaatdor vazirliklar, idoralar va boshqa tashkilotlar bilan birgalikda madaniy faoliyat sohasidagi ilmiy tadqiqotlarni rivojlantirishga ko‘maklashadi;

dramatik, musiqali, musiqali-dramatik asarlarni, tasviriy va amaliy san’at asarlarini hamda haykaltaroshlik asarlarini yaratishga doir davlat buyurtmasini amalga oshiradi;

madaniyatshunoslikni, teatrshunoslikni, san’atshunoslikni, musiqashunoslikni va madaniy faoliyat sohasidagi boshqa ilmiy yo‘nalishlarni rivojlantirish, oliy ta’lim tashkilotlarida hamda ilmiy-tadqiqot muassasalarida ilmiy va ilmiy-pedagogik kadrlar tayyorlanishini takomillashtirish yuzasidan choralar ko‘radi;

vazirliklarning, idoralarning, mahalliy ijro etuvchi hokimiyat organlarining va boshqa tashkilotlarning madaniyat va san’at sohasidagi ishlarini muvofiqlashtiradi;

iste’dodli yoshlarni va istiqbolli ijodiy jamoalarni aniqlash hamda qo‘llab-quvvatlashga doir tadbirlar majmuini amalga oshiradi;

xalqaro madaniy aloqalarni amalga oshiradi va rivojlantiradi;

tarmoqlarga oid badiiy kengashlarni tashkil etish va shakllantirish tartibini belgilaydi.

O‘zbekiston Respublikasi Madaniyat vazirligi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.

Vazirliklar va idoralar tasarrufida bo‘lgan madaniyat obyektlariga doir qarorlar O‘zbekiston Respublikasi Madaniyat vazirligi bilan kelishuvga ko‘ra, qonunchilikda belgilangan tartibda qabul qilinadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>9-modda. O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligining madaniy faoliyat sohasidagi vakolatlari</h1>
            <p>O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligi axborot-kutubxona faoliyati sohasidagi maxsus vakolatli davlat organidir.

O‘zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Axborot va ommaviy kommunikatsiyalar agentligining vakolatlari “Axborot-kutubxona faoliyati to‘g‘risida”gi O‘zbekiston Respublikasi Qonuni bilan belgilanadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>10-modda. “O‘zbekkino” Milliy agentligining madaniy faoliyat sohasidagi vakolatlari</h1>
            <p>“O‘zbekkino” Milliy agentligi kinematografiya sohasidagi maxsus vakolatli davlat organidir.

“O‘zbekkino” Milliy agentligi:

kinematografiya sohasidagi davlat siyosatini amalga oshiradi;

kinematografiya sohasidagi davlat dasturlarini ishlab chiqish va amalga oshirishda ishtirok etadi;

kinematografiya tashkilotlari faoliyatini muvofiqlashtiradi;

kinematografiya sohasiga xalqaro va davlatlararo standartlarni joriy etishga doir takliflarni O‘zbekiston Respublikasi Vazirlar Mahkamasiga kiritadi;

O‘zbekiston Respublikasi hududida filmlarni namoyish etish, sifatli xizmatlar ko‘rsatish va kinojihozlardan texnik jihatdan foydalanish qoidalarini ishlab chiqadi;

kinematografiya mahsulotining badiiy va mafkuraviy darajasini oshirish bo‘yicha choralar ko‘radi.

“O‘zbekkino” Milliy agentligi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>11-modda. Mahalliy davlat hokimiyati organlarining madaniy faoliyat sohasidagi vakolatlari</h1>
            <p>Mahalliy davlat hokimiyati organlari:

madaniy faoliyat sohasidagi hududiy dasturlarni ishlab chiqish va amalga oshirishda ishtirok etadi;

tegishli hududda joylashgan madaniyat muassasalari va tashkilotlariga ko‘maklashadi;

madaniy tadbirlarni tashkil etish va o‘tkazishda fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari hamda fuqarolik jamiyatining boshqa institutlari bilan hamkorlik qiladi;

madaniy faoliyat sohasidagi davlat siyosatini amalga oshirishda davlat boshqaruvi organlarining hududiy bo‘linmalari bilan birgalikda ishtirok etadi.

Mahalliy davlat hokimiyati organlari qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>12-modda. Fuqarolarning, fuqarolar o‘zini o‘zi boshqarish organlarining, nodavlat notijorat tashkilotlarining va fuqarolik jamiyati boshqa institutlarining madaniy faoliyatda ishtirok etishi</h1>
            <p>Fuqarolar, fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolik jamiyatining boshqa institutlari:

madaniy faoliyat sohasidagi dasturlarni ishlab chiqish va amalga oshirishda ishtirok etadi;

madaniy faoliyat sohasidagi davlat organlari va boshqa tashkilotlar bilan hamkorlik qiladi;

fuqarolarning madaniyatini yuksaltirishga doir ishlarni amalga oshirishda ishtirok etadi;

madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikning ijrosi ustidan jamoatchilik nazoratini amalga oshiradi.

Fuqarolar, fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolik jamiyatining boshqa institutlari boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>13-modda. Tarmoqlarga oid badiiy kengashlar</h1>
            <p>Tasarrufida madaniyat tashkilotlari bo‘lgan davlat organlari va tashkilotlar, shuningdek madaniyat tashkilotlari tomonidan teatr, musiqa va konsert faoliyati, sirk san’ati va tasviriy san’at, arxitektura va dizayn bo‘yicha tarmoq badiiy kengashlari tashkil etiladi.

Tarmoqlarga oid badiiy kengashlar maslahat organlari hisoblanadi.

Tarmoqlarga oid badiiy kengashlar tarkibiga, qoida tariqasida, taniqli ijodkorlar, madaniyat xodimlari, olimlar, mutaxassislar, madaniyat tashkilotlari assotsiatsiyalarining (uyushmalarining) vakillari kiradi.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Madaniy faoliyat sohasidagi asosiy huquq va majburiyatlar', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">3-bob. Madaniy faoliyat sohasidagi asosiy huquq va majburiyatlar</span>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>14-modda. Fuqarolarning madaniy faoliyat sohasidagi huquq va majburiyatlari</h1>
            <p>O‘zbekiston Respublikasi fuqarolari quyidagi huquqlarga ega:

madaniyat yutuqlaridan foydalanish va jamiyatning madaniy hayotida ishtirok etish;

ijodiy jamoalar tarkibida yoki mustaqil ravishda, kasbiy yoki nokasbiy (havaskorlik) asosda ijodiy faoliyat bilan shug‘ullanish;

o‘z ehtiyojlariga, manfaatlari va qobiliyatiga (imkoniyatlariga) muvofiq madaniy faoliyat yo‘nalishlarini erkin tanlash;

o‘z mulkida turgan madaniy boyliklarga qonunchilikda belgilangan tartibda egalik qilish, ulardan foydalanish va ularni tasarruf etish;

madaniy-ommaviy tadbirlar jarayonida qonunchilikda taqiqlanmagan turli ramzlardan va o‘z fikrini oshkora ifoda etishning boshqa vositalaridan foydalanish;

qonunchilikda belgilangan tartibda madaniyat obyektlariga borish, Milliy muzey fondi tarkibiga kiritilgan muzey ashyolari va muzey kolleksiyalari, axborot-kutubxona muassasalari hamda axborot-kutubxona resurslari, shuningdek arxiv hujjatlari bilan tanishish.

O‘zbekiston Respublikasi fuqarolari:

O‘zbekiston xalqining tarixiy, ma’naviy va madaniy merosini avaylab asrashi;

madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikka rioya etishi;

O‘zbekiston xalqining hamda uning hududida yashovchi boshqa millatlar va elatlarning milliy madaniyatini, an’analarini va tilini hurmat qilishi;

madaniy-ommaviy tadbirlar va boshqa madaniy tadbirlar o‘tkaziladigan joylarda jamoat tartibini saqlashi, shuningdek umum qabul qilingan odob-axloq normalariga rioya etishi shart.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>15-modda. Chet el fuqarolarining hamda fuqaroligi bo‘lmagan shaxslarning madaniy faoliyat sohasidagi huquq va majburiyatlari</h1>
            <p>Chet el fuqarolari hamda fuqaroligi bo‘lmagan shaxslar O‘zbekiston Respublikasi hududida madaniy faoliyat sohasida O‘zbekiston Respublikasi fuqarolari bilan teng ravishda huquqlardan foydalanadi va zimmasida majburiyatlar bo‘ladi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>16-modda. Madaniy faoliyat sohasidagi mulk huquqi</h1>
            <p>Har bir shaxs madaniy faoliyat sohasida mulk huquqiga ega.

Mulk huquqi tarixiy, ilmiy, badiiy yoki o‘zgacha madaniy qimmatga ega bo‘lgan ashyolarga, shuningdek moddiy madaniy meros obyektlariga nisbatan tatbiq etilishi mumkin.

Tarixiy, ilmiy, badiiy yoki o‘zgacha madaniy qimmatga ega bo‘lgan ashyolarni, shuningdek moddiy madaniy meros obyektlarini olish tartibi, ularga egalik qilish, ulardan foydalanish va ularni tasarruf etishning o‘ziga xos xususiyatlari qonunchilikda belgilanadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>17-modda. Madaniy faoliyat sohasidagi mualliflik huquqi va turdosh huquqlar</h1>
            <p>Madaniy faoliyat sohasida fan, adabiyot va san’at asarlarini yaratish (mualliflik huquqi) hamda ulardan foydalanish, ijrolar, fonogrammalar, efir yoki kabel orqali eshittirish va namoyish etish tashkilotlarining eshittirishlari hamda ko‘rsatuvlarini yaratish va ulardan foydalanish (turdosh huquqlar) bilan bog‘liq holda yuzaga keladigan munosabatlar mualliflik huquqi va turdosh huquqlar to‘g‘risidagi qonunchilik bilan tartibga solinadi.

Ijodiy faoliyat bilan kasbiy va nokasbiy asosda (havaskorlik asosida) shug‘ullanuvchi ijodkorlar mualliflik huquqi hamda turdosh huquqlar sohasida teng huquqlarga, shuningdek intellektual mulk huquqiga, o‘z ijodiy faoliyatining natijalarini erkin tasarruf etish, davlat tomonidan qo‘llab-quvvatlanish huquqiga ega.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>18-modda. Ijodiy faoliyat natijalarini olib chiqish va olib kirish huquqi</h1>
            <p>Yuridik va jismoniy shaxslar qonunchilikda belgilangan tartibda o‘z ijodiy faoliyati natijalarini ko‘rgazmaga qo‘yish, ommaga ko‘rsatishning boshqa shakllaridan foydalanish, shuningdek ularni sotish maqsadida O‘zbekiston Respublikasidan tashqariga olib chiqish va O‘zbekiston Respublikasi hududiga olib kirish huquqiga ega.

Ushbu moddaning birinchi qismida nazarda tutilgan hollarda madaniy boyliklarni olib chiqish hamda olib kirish madaniy boyliklarni olib chiqish va olib kirish to‘g‘risidagi qonunchilik bilan tartibga solinadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>19-modda. O‘zbekiston Respublikasida yashovchi millatlar va elatlarning madaniyatini, urf-odatlarini hamda an’analarini saqlash va rivojlantirish</h1>
            <p>O‘zbekiston Respublikasida yashovchi millatlar va elatlar o‘z madaniyatini, urf-odatlarini, an’analarini saqlash hamda rivojlantirish, shuningdek o‘z madaniy-tarixiy muhitini tiklash va saqlash huquqiga ega.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Madaniy faoliyat sohasidagi ayrim faoliyat turlarini amalga oshirish', 
      content: (
        <>
          <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">4-bob. Madaniy faoliyat sohasidagi ayrim faoliyat turlarini amalga oshirish</span>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>20-modda. Madaniy-ommaviy tadbirlar</h1>
            <p>Aholini madaniy tadbirlarda ishtirok etish uchun jalb qilishga, madaniyatga erishtirishga va aholi o‘rtasida yuksak darajadagi madaniyatni shakllantirishga qaratilgan madaniy tadbirlar madaniy-ommaviy tadbirlar jumlasiga kiradi.

Madaniy-ommaviy tadbirlar ommaviy tadbirlarni o‘tkazish uchun maxsus mo‘ljallangan yoki moslashtirilgan, yong‘inga qarshi xavfsizlik, tez tibbiy yordam ko‘rsatish, evakuatsiya qilish tizimlariga qo‘yiladigan kommunikatsiya, muhandislik-texnik himoya vositalari va boshqa vositalar hamda madaniy-ommaviy tadbirlar ishtirokchilarining xavfsizligini ta’minlash tizimlari bilan jihozlanganlikning yagona normativ-huquqiy talablariga muvofiq bo‘lgan ochiq joy uchastkalarida, binolarda, inshootlarda hamda boshqa joylarda (madaniy-ma’rifiy muassasalarning, sport majmualarining binolarida) o‘tkazilishi mumkin.

Madaniy-ommaviy tadbirlar ommaviy tadbirlarni o‘tkazish uchun ruxsatnomalar mavjud bo‘lgan taqdirda o‘tkaziladi.

Madaniy-ommaviy tadbirlar o‘tkazilayotgan vaqtda milliy, irqiy, etnik yoki diniy adovat qo‘zg‘atishga, shafqatsizlik va zo‘ravonlikni targ‘ib etishga, shuningdek o‘zga shaxslarning huquqlarini kamsitishga qaratilgan plakatlar, timsollar, transparantlardan va boshqa ashyolardan foydalanish taqiqlanadi.

Madaniy-ommaviy tadbirlarni tashkil etish va o‘tkazish, shuningdek ommaviy tadbirlarni o‘tkazishga doir ruxsatnomalarni berish tartibi qonunchilikda belgilanadi.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>21-modda. Konsert-tomosha faoliyati</h1>
            <p>O‘zbekiston Respublikasi hududida hamda uning tashqarisida konsert-tomosha faoliyati O‘zbekiston Respublikasi Madaniyat vazirligi beradigan konsert-tomosha faoliyatini amalga oshirish huquqiga doir litsenziya asosida jismoniy va yuridik shaxslar tomonidan amalga oshiriladi.

Konsert-tomosha faoliyatini amalga oshirishga doir litsenziya talablari va shartlari jumlasiga quyidagilar kiradi:

konsert-tomosha faoliyatini amalga oshirish sohasidagi qonunchilikka majburiy ravishda rioya etish;

ijrochilarning qonunchilikda belgilanadigan mezonlar va malaka talablariga muvofiq bo‘lishi;

jismoniy va yuridik shaxslar tomonidan aholiga konsert-tomosha xizmatlarini qonunchilikda nazarda tutilgan talablarga muvofiq ko‘rsatish;

konsert-tomosha tadbirlarida, to‘ylarda va boshqa tantanalarda san’atkorning odob-axloq qoidalariga, sahna madaniyatiga hamda tashqi ko‘rinish madaniyatiga zid bo‘lgan xatti-harakatlar amalga oshirilishini, ma’naviyatga salbiy ta’sir ko‘rsatadigan hamda tomoshabinlarning his-tuyg‘ularini haqorat qiladigan axloqsizlik g‘oyalarini targ‘ib qilishni istisno etgan holda milliy mentalitetga, milliy qadriyatlar va urf-odatlarga muvofiq bo‘lgan qo‘shiqlarni hamda ular bo‘yicha yaratilgan videokliplarni ijro etish;

o‘tkazilgan konsert-tomosha tadbirlarining soni to‘g‘risida litsenziyalovchi organning hududiy bo‘linmalariga litsenziyalovchi organ tomonidan belgilanadigan shakl bo‘yicha choraklik hisobotlar taqdim etish;

O‘zbekiston Respublikasi hududidan tashqarida konsert-tomosha tadbirlarini amalga oshirish to‘g‘risida litsenziyalovchi organni yozma ravishda xabardor qilish;

konsert-tomosha faoliyatini amalga oshirish huquqi uchun davlat boji to‘lash.</p>
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>22-modda. Ijodiy jamoalarning va ijrochilarning gastrol faoliyati</h1>
            <p>Ijodiy jamoalarning va alohida ijrochilarning O‘zbekiston Respublikasi hududidagi gastrol faoliyati buyurtmachi bilan tuzilgan shartnoma asosida amalga oshiriladi.

Ijodiy jamoalarning va ijrochilarning xorijiy mamlakatlar hududidagi gastrollari mualliflik huquqiga va turdosh huquqlarga rioya etilishini ta’minlaydigan shartnomalar asosida amalga oshiriladi.</p>
           
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>23-modda. Ijodiy buyurtma</h1>
            <p>Ijodiy buyurtma davlat organlari va tashkilotlarining ijodiy jamoalar yoki ijodkorlar tomonidan quyidagilarni yaratishga doir buyurtmasidan iboratdir:

ommaviy ijro etish uchun dramatik, musiqali va musiqali-dramatik, adabiy asarlarni;

haykaltaroshlik, tasviriy san’at asarlarini;

badiiy, rassomlik, kinematografik va teatr asarlarini;

O‘zbekiston xalqining ko‘p asrlik tarixini, milliy va umumjahon qadriyatlarini aks ettiruvchi boshqa asarlarni.

Ijodiy buyurtmani bajarganlik uchun ijodiy jamoalarga yoki ijodkorlarga mualliflik haqini to‘lash miqdori va tartibi qonunchilikda belgilanadi.</p>
           
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>24-modda. Xalq ijodiyoti</h1>
            <p>Xalq og‘zaki ijodiyoti, xalq musiqasi, xalq teatri (qo‘g‘irchoqbozlik), badiiy havaskorlik xalq ijodiyoti jumlasiga kiradi.</p>
            
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>25-modda. Xalq badiiy hunarmandchiligi va amaliy san’ati</h1>
            <p>Jismoniy va yuridik shaxslarning asosan qo‘l mehnati usulida, an’anaviy asbob-uskunalar hamda moslamalardan foydalanilgan, shuningdek tegishli bilimlar hamda ko‘nikmalar qo‘llanilgan holda buyumlar va asarlarni yaratishga doir faoliyati xalq badiiy hunarmandchiligi va amaliy san’ati jumlasiga kiradi.</p>
            
          </div>
          <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>26-modda. O‘zbekiston xalq o‘yinlari</h1>
            <p>Xalq o‘yinlarining milliy va ijtimoiy-madaniy yo‘nalishga ega bo‘lgan turlari (dorbozlik, yog‘och oyoqda yurish bilan bog‘liq o‘yinlar va boshqalar) O‘zbekiston xalq o‘yinlari jumlasiga kiradi..</p>
            
          </div>
        </>
      )
    },
    {
        title: '5-bob. Madaniy faoliyatni tashkil etish', 
        content: (
          <>
            <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">5-bob. Madaniy faoliyatni tashkil etish</span>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>27-modda. Madaniyat tashkilotlari</h1>
              <p>Madaniy faoliyat sohasidagi faoliyatni asosiy faoliyat turi sifatida amalga oshiruvchi yuridik shaxs yoki yuridik shaxsning tarkibiy bo‘linmasi madaniyat tashkilotidir.

Madaniyat tashkilotlari davlat madaniyat muassasalari va tashkilotlari yoki nodavlat madaniyat tashkilotlari shaklida tashkil etilishi mumkin.

Davlat mulkida turgan mulk negizida davlat hokimiyati va boshqaruvi organlari tomonidan tashkil etilgan muassasalar va tashkilotlar davlat madaniyat muassasalari va tashkilotlari jumlasiga kiradi.

Madaniy faoliyat sohasidagi faoliyatni asosiy faoliyat turi sifatida amalga oshiruvchi nodavlat tashkilotlar nodavlat madaniyat tashkilotlari jumlasiga kiradi.

Madaniyat tashkilotlari faoliyatining turlari ularning muassislari tomonidan belgilanadi hamda ustavda va (yoki) boshqa ta’sis hujjatlarida ko‘rsatiladi.

Davlat muassasalari va madaniyat tashkilotlari o‘zida saqlanayotgan madaniy boyliklar to‘g‘risidagi axborotni, shuningdek teatr sahna asarlarining va (yoki) ijodiy dasturlarning mavsumiy repertuaridan chiqarilgan audiovizual yozuvlarni qonunchilikda belgilangan tartibda elektron axborot resurslariga joylashtiradi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>28-modda. Madaniyat tashkilotlarining asosiy toifalari</h1>
              <p>Madaniyat tashkilotlari madaniy faoliyatning turlariga qarab quyidagi toifalarga bo‘linadi:

madaniy-tomosha tashkilotlari;

madaniy-ma’rifiy tashkilotlar;

boshqa madaniyat tashkilotlari.

Faoliyatining asosiy turi sahna san’ati asarlarini yaratishdan va ularni omma oldida namoyish etishdan iborat bo‘lgan madaniyat tashkilotlari (teatrlar, filarmoniyalar, sirklar, konsert tashkilotlari (professional ijodiy jamoalar, musiqiy jamoalar hamda ansambllar va boshqalar), kinematografiya tashkilotlari va boshqalar) madaniy-tomosha tashkilotlari jumlasiga kiradi.

Faoliyatining asosiy turi madaniyat obyektlaridan foydalanishni ta’minlashdan, shaxsning intellektual, ma’naviy-axloqiy, madaniy va ta’lim olishga bo‘lgan ehtiyojlarini qanoatlantirishdan, shaxsning ijodiy qobiliyatini rivojlantirish uchun shart-sharoitlar yaratishdan, shuningdek milliy madaniyatni tiklash va yanada rivojlantirishga ko‘maklashishdan, madaniy meros obyektlarini saqlashdan iborat bo‘lgan madaniyat tashkilotlari (madaniyat markazlari, milliy madaniy markazlar, muzeylar, badiiy galereyalar (ko‘rgazmalar), ko‘rgazma zallari, tarixiy-madaniy qo‘riqxonalar, madaniyat va istirohat bog‘lari, klub muassasalari, madaniyat saroylari hamda uylari, madaniyat va san’at sohasidagi ta’lim muassasalari, madaniy-axborot markazlari hamda madaniy-ma’rifiy markazlar va boshqalar) madaniy-ma’rifiy tashkilotlar jumlasiga kiradi.

Moddiy madaniy meros obyektlari va arxitektura yodgorliklari, qayta tiklash (restavratsiya) markazlari, tadqiqot markazlari, ijodiy ustaxonalar, xalq badiiy hunarmandchiligi va amaliy san’ati tashkilotlari hamda boshqalar boshqa madaniyat tashkilotlari jumlasiga kiradi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>29-modda. Madaniyat markazlari</h1>
              <p>Davlat muassasasi shaklida tashkil etilgan, aholining madaniy ehtiyojlarini o‘rganish, shuningdek madaniy-ma’rifiy va ko‘ngilochar xizmatlar ko‘rsatish bo‘yicha faoliyatni amalga oshiruvchi, badiiy ijod, amaliy san’at va havaskorlik bilan shug‘ullanuvchi yuridik shaxs madaniyat markazidir.

Madaniyat markazlarining asosiy vazifalari quyidagilardan iborat:

aholiga ko‘rsatiladigan madaniy xizmatlar sifatini yaxshilash, aholining bo‘sh vaqti mazmunli o‘tishini ta’minlash va madaniy ehtiyojlarini qanoatlantirish, ijodiy jamoalarning milliy qadriyatlarni, urf-odatlar va an’analarni o‘zida mujassam etgan namunaviy dasturlarni shakllantirish;

xalq ijodiyotini va badiiy havaskorlikni saqlash hamda rivojlantirish, badiiy va amaliy ijodiy jamoalarni, havaskorlik guruhlarini tashkil etish, ularning faoliyat ko‘rsatishi uchun zarur shart-sharoitlar yaratish, shuningdek ijodiy jarayonlarni tizimli asosda boyitib borish;

bolalarni to‘garaklarga jalb etish, ularni chet tillarga o‘qitish, “Nutq madaniyati” kurslarini tashkil etish, xalq ijodiyotining barcha janrlari va yo‘nalishlarini, havaskorlik san’atini va nomoddiy madaniy merosni keng targ‘ib qilish, shuningdek ularni asl holida kelajak avlodga yetkazish;

adabiyot va san’at arboblari, professional ijodiy guruhlar bilan birga ma’naviy-ma’rifiy va madaniy-ommaviy tadbirlarni tashkil etish hamda ular ishtirokida aholi, shu jumladan yoshlar bilan ijodiy uchrashuvlar va suhbatlar o‘tkazish;

xalq ijodiyoti va tomosha san’ati tanlovlarini, tuman (shahar) festivallarini o‘tkazish, iste’dodli yoshlarni aniqlash hamda ijodkor yoshlarni qo‘llab-quvvatlash;

ommaviy bayramlar, tomoshalar hamda xalq sayillarini tashkil etish, yuridik va jismoniy shaxslar bilan tuzilgan shartnomalarga ko‘ra ijtimoiy-madaniy bo‘sh vaqtni tashkil etish sohasida pulli xizmatlar ko‘rsatish.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>30-modda. Milliy madaniy markazlar</h1>
              <p>Milliy madaniy markazlar tilni, madaniyatni, urf-odatlar va an’analarni, tarixiy qadriyatlarni saqlash va rivojlantirish, madaniy va ma’naviy merosni saqlash, millatlararo tinchlik va totuvlikni saqlab turish, millatlararo munosabatlarni uyg‘unlashtirish, xalqaro madaniy almashinuvni rag‘batlantirish, shuningdek xalqlar o‘rtasidagi do‘stlik aloqalarini mustahkamlash maqsadida tashkil etiladi.

O‘zbekiston Respublikasi hududida yashovchi millatlar va elatlarning vakillari bo‘lgan O‘zbekiston Respublikasi fuqarolari nodavlat notijorat tashkilotlari shaklida milliy madaniy markazlarni tashkil etishi mumkin.

Milliy madaniy markazlar O‘zbekiston Respublikasining xalqaro shartnomalari va qonunchiligida belgilangan tartibda, chet davlatlarda O‘zbekiston Respublikasi tomonidan yoki O‘zbekiston Respublikasida chet davlatlar tomonidan tashkil etilishi mumkin.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>31-modda. Teatr</h1>
              <p>Teatr sahna asarlarini (drama, musiqali drama, musiqa, raqs, qo‘g‘irchoq, pantomima, hajviy va hazil-mutoyiba sahna asarlarini, bolalar va o‘smirlar uchun, yoshlarbop, eksperimental va boshqa asarlarni) yaratishni, ommaviy ijro etishni va (yoki) ommaviy namoyish qilishni amalga oshiradigan madaniy-tomosha tashkilotidir.

Teatrning asosiy vazifalari O‘zbekiston xalqining (O‘zbekiston Respublikasida yashovchi millatlar va elatlarning) teatr madaniyatini, milliy o‘zini o‘zi anglashini va tillarini saqlash hamda rivojlantirishdan, shuningdek sahna asarlarini yaratish, ommaviy ijro etish va (yoki) ommaviy namoyish qilishdan, mazkur yo‘nalishda innovatsion loyihalarni amalga oshirishdan iboratdir.

Teatrlar badiiy yo‘nalishlarni, repertuarni tanlashda, sahna asarlarini yaratish, ommaviy ijro etish va (yoki) ommaviy namoyish qilish to‘g‘risida qaror qabul qilishda, shuningdek samarali ijodiy jarayonni va ishlab chiqarishni rivojlantirish uchun zarur bo‘lgan, qonunchilikka zid bo‘lmagan boshqa faoliyatni amalga oshirishda erkindir.

Sahna asarlarini yaratish, ommaviy ijro etish va (yoki) ommaviy namoyish qilish uchun chet ellik ijodkorlar shartnoma asosida jalb etilishi mumkin.

Har bir sahna asarini sahnalashtiruvchi rejissorning tavsiyalari asosida davlat teatri rahbari tomonidan sahnalashtirish guruhi tuziladi.

Davlat teatrlarida har bir sahna asari ommaviy ijro etish va (yoki) ommaviy namoyish qilish uchun tayyor ekanligi to‘g‘risidagi qaror teatrning badiiy kengashi tavsiyasiga ko‘ra teatr rahbari tomonidan qabul qilinadi.

Davlat teatrining badiiy kengashi to‘g‘risidagi nizom va uning tarkibi O‘zbekiston Respublikasi Madaniyat vazirligi tomonidan tasdiqlanadi hamda kamida uch yilda bir marta yangilab turiladi.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>32-modda. Sirk</h1>
              <p>Sirk estrada-sirk janri asarlarining (akrobatika, gimnastika, jonglyorlik, polvonlik, dorbozlik, qiziqchilik, fokuschilik, pantomima, olov o‘yinlari, chavandozlik (ot sporti turi), hayvonlarni o‘rgatish va boshqalar) sahna tomoshalarini amalga oshiruvchi madaniy-tomosha tashkilotidir.

Sirklar badiiy yo‘nalishlarni, repertuarni tanlashda, estrada-sirk janri asarlarini yaratish va sahnalashtirish to‘g‘risida qarorlar qabul qilishda, shuningdek samarali ijodiy jarayonni va ishlab chiqarishni rivojlantirish uchun zarur bo‘lgan, qonunchilikka zid bo‘lmagan faoliyatni amalga oshirishda erkindir.

Sirklarning hayvonlarni parvarishlash, o‘rgatish hamda ular ishtirokida sahna tomoshalarini namoyish etishga tayyorlash bo‘yicha faoliyatida hayvonlarni oziqlantirish hamda ularga xizmat ko‘rsatish normalariga, veterinariya-sanitariya va zootexnika talablariga, shuningdek xavfsizlik talablariga rioya etilishi kerak.

Estrada-sirk janridagi asarlarni yaratish va sahnalashtirish uchun shartnoma asosida chet ellik ijodkorlar jalb etilishi mumkin.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>33-modda. Konsert tashkilotlari</h1>
              <p>Konsert tashkiloti san’at asarlarini ommaviy ijro etishni, badiiy jamoalar va alohida ijrochilarning faoliyatini tashkil etish bilan shug‘ullanuvchi tashkilotdir.

Konsert tashkilotlarining asosiy vazifalari musiqiy-estetik jihatdan tarbiyalash, yuksak badiiy ijodiy dasturlarni va alohida ijrolarni yaratish uchun shart-sharoitlarni ta’minlash, professional badiiy jamoalar va alohida ijrochilar konsertlarini tashkil etish, musiqiy-ma’rifiy faoliyatni amalga oshirishdan iboratdir.

Konsert tashkilotlari ijodiy dasturlarni va alohida ijrolarni yaratishda, repertuarni tanlashda mustaqildir.

Ijodiy dasturlarni va alohida ijrolarni yaratish uchun chet ellik ijodkorlar shartnoma asosida jalb etilishi mumkin.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>34-modda. Madaniy-ma’rifiy tashkilotlar faoliyatining asosiy yo‘nalishlari</h1>
              <p>Madaniy-ma’rifiy tashkilotlar faoliyatining asosiy yo‘nalishlari quyidagilardan iborat:

xalq ijodiyotini, xalq badiiy hunarmandchiligi va amaliy san’atini, shuningdek madaniy meros obyektlarini saqlash va targ‘ib qilish;

O‘zbekiston Respublikasida o‘tkaziladigan bayramlarni, konsertlarni, ashula va raqs bayramlarini, taqdimotlarni, festivallarni, tanlovlarni, xalq amaliy va tasviriy san’ati ko‘rgazmalarini tashkil etish;

ilmiy-amaliy, axborot-uslubiy ishlarni tashkil etish;

madaniy-ko‘ngilochar faoliyatning va xalq ijodiyotining ilg‘or tajribasini o‘rganish, umumlashtirish, ommalashtirish, tatbiq etish va tarqatish;

eng yaxshi xalq ijodiyoti jamoalarini viloyatlar, hududlar, respublika bayramlarida, xalqaro bayramlarda, tanlovlarda, festivallarda ishtirok etish uchun jalb qilish orqali ularni ommalashtirish;

madaniyat tashkilotlarining assotsiatsiyalarini (uyushmalarini), shuningdek madaniyatni saqlash va rivojlantirishga qaratilgan innovatsion loyihalarni, madaniy tadbirlar hamda tashabbuslarni qo‘llab-quvvatlash.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>35-modda. Davlat madaniyat muassasalari va tashkilotlariga “Milliy” yoki “Akademik” maqomini berish</h1>
              <p>Davlat madaniyat muassasalariga va tashkilotlariga madaniyat hamda san’at sohasida erishgan yutuqlari uchun O‘zbekiston Respublikasi Vazirlar Mahkamasining taqdimnomasiga binoan O‘zbekiston Respublikasi Prezidenti tomonidan “Milliy” yoki “Akademik” maqomi berilishi mumkin.</p>
             
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>36-modda. Davlat madaniyat muassasalari va tashkilotlarining attestatsiyasi</h1>
              <p>Davlat madaniyat muassasalari va tashkilotlarining attestatsiyasi ular asosiy faoliyatining samaradorligini baholash, moddiy, mehnat va moliyaviy resurslardan oqilona foydalanish, ularning tuzilmalarini tartibga solish maqsadida uch yilda bir marta o‘tkaziladi.

Davlat madaniyat muassasalari va tashkilotlarining attestatsiyasi tartibi qonunchilikda belgilanadi.</p>
             
            </div>
          </>
        )
    },
      {
        title: '6-bob. Madaniyat tashkilotlarini tashkil etish, qayta tashkil etish va tugatish. Madaniyat tashkilotlarini assotsiatsiyalarga (uyushmalarga) birlashtirish', 
        content: (
          <>
            <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">6-bob. Madaniyat tashkilotlarini tashkil etish, qayta tashkil etish va tugatish. Madaniyat tashkilotlarini assotsiatsiyalarga (uyushmalarga) birlashtirish</span>
            <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>37-modda. Madaniyat tashkilotlarini tashkil etish</h1>
              <p>Madaniyat tashkilotlari mulkdor yoki u vakil qilgan shaxs tomonidan yoxud vakolatli organning farmoyishi asosida tashkil etiladi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>38-modda. Madaniyat tashkilotlarini qayta tashkil etish</h1>
              <p>Madaniyat tashkilotlarini qayta tashkil etish (qo‘shib yuborish, birlashtirish, bo‘lish, ajratib chiqarish, o‘zgartirish) ular muassislarining (ishtirokchilarining) qaroriga yoki ta’sis hujjatlarida shunga vakolat berilgan yuridik shaxs organining qaroriga ko‘ra amalga oshirilishi mumkin.

Madaniyat tashkilotini qayta tashkil etish tartibi qonunchilikda belgilanadi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>39-modda. Madaniyat tashkilotlarini tugatish</h1>
              <p>Madaniyat tashkilotlarini tugatish qonunchilikda belgilangan tartibda amalga oshiriladi.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>40-modda. Madaniyat tashkilotlarini assotsiatsiyalarga (uyushmalarga) birlashtirish</h1>
              <p>Madaniyat tashkilotlari o‘z faoliyatini muvofiqlashtirish, shuningdek umumiy manfaatlarni ifoda etish va himoya qilish maqsadida assotsiatsiyalar (uyushmalar) shaklida jamoat birlashmalari tashkil etishi mumkin.

Madaniyat tashkilotlari tomonidan tuzilgan assotsiatsiyalar (uyushmalar) nodavlat notijorat tashkilotlari bo‘lib, ular o‘z faoliyatini ta’sis hujjatlari asosida amalga oshiradi.
</p>
            </div>
          </>
        )
      },
      {
        title: '7-bob. Madaniy faoliyat sohasidagi xalqaro hamkorlik', 
        content: (
          <>
            <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">7-bob. Madaniy faoliyat sohasidagi xalqaro hamkorlik</span>
            <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>41-modda. Madaniy faoliyat sohasidagi xalqaro hamkorlikning asosiy yo‘nalishlari</h1>
              <p>Madaniy faoliyat sohasidagi xalqaro hamkorlikning asosiy yo‘nalishlari quyidagilardan iborat:

xalqaro madaniy almashinuv;

xalqaro madaniyat tashkilotlari bilan hamkorlik;

madaniyat obyektlarini va san’at asarlarini ommalashtirish.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>42-modda. Xalqaro madaniy almashinuv</h1>
              <p>O‘zbekiston Respublikasi xalqaro madaniy almashinuvni rivojlantirishga ko‘maklashadi.

Xalqaro madaniy almashinuvning asosiy shakllari quyidagilardan iborat:

milliy madaniy markazlarni tashkil etish va rivojlantirish;

madaniyat xodimlarini o‘qish (tajriba orttirish) uchun yuborish;

madaniyat sohasida zamonaviy innovatsion texnologiyalarni, texnik vositalarni yaratish va amalda joriy etish;

milliy urf-odatlar va an’analarni namoyish qilish;

milliy madaniyat kunlari, ko‘rik-tanlovlar, festivallar, ko‘rgazmalar, konferensiyalar, adabiy seminarlar, gastrollar hamda boshqa madaniy tadbirlarni tashkil etish va o‘tkazish;

madaniyat xodimlari o‘rtasida o‘zaro tajriba almashishni va hamkorlikning boshqa turlarini yo‘lga qo‘yish.

Xalqaro madaniy almashinuvni amalga oshirish tartibi O‘zbekiston Respublikasining xalqaro shartnomalari va qonunchiligi bilan belgilanadi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>43-modda. Xalqaro madaniyat tashkilotlari bilan hamkorlik</h1>
              <p>O‘zbekiston Respublikasi hududida O‘zbekiston Respublikasining xalqaro shartnomalari va qonunchiligiga muvofiq xalqaro madaniyat tashkilotlarining filiallari hamda vakolatxonalari tashkil etilishi mumkin.

O‘zbekiston Respublikasining madaniyat tashkilotlari o‘z ta’sis hujjatlarida belgilangan tartibga muvofiq xalqaro madaniyat tashkilotlariga a’zo bo‘lish, chet el fuqarolarining, fuqaroligi bo‘lmagan shaxslarning, shuningdek xalqaro va xorijiy tashkilotlarning xayriyalarini qonunchilikda belgilangan tartibda tasarruf etish huquqiga ega.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>44-modda. Madaniyat obyektlarini va san’at asarlarini ommalashtirish</h1>
              <p>Davlat madaniyat obyektlarini va san’at asarlarini ommalashtirish choralarini ko‘radi.

O‘zbekiston Respublikasi Madaniyat vazirligi manfaatdor vazirliklar, idoralar va muassasalar bilan hamkorlikda madaniyat obyektlarini va san’at asarlarini ommalashtirish maqsadida:

madaniyat va san’atning barcha yo‘nalishlari bo‘yicha xalqaro ko‘rik-tanlovlar, festivallar va ko‘rgazmalar tashkil etadi;

O‘zbekiston Respublikasi hududidan tashqarida o‘tkaziladigan xalqaro ko‘rik-tanlovlar, festivallar va ko‘rgazmalarda ishtirok etadi;

chet davlatlarda “O‘zbekiston madaniyati kunlari”ni tashkil etadi.

Nodavlat notijorat tashkilotlari ham madaniyat obyektlarini va san’at asarlarini ommalashtirish maqsadida ko‘rik-tanlovlar, festivallar va ko‘rgazmalar tashkil etishi mumkin.
</p>
            </div>
          </>
        )
      },
      {
        title: '8-bob. Yakunlovchi qoidalar', 
        content: (
          <>
            <span className="text-sky-600 text-3xl font-bold font-['Montserrat']">8-bob. Yakunlovchi qoidalar</span>
            <div>
            <h1 className='text-[20px] font-semibold text-[red] p-5'>45-modda. Olis hududlarda madaniyatni rivojlantirish</h1>
              <p>Olis va borish qiyin bo‘lgan joylarda madaniyatni rivojlantirish, madaniyat tashkilotlarining faoliyatini yo‘lga qo‘yish, ularning moddiy-texnika bazasini mustahkamlash, aholining estetik ehtiyojlarini qanoatlantirish va aholiga ko‘rsatilayotgan madaniy xizmatlar sifatini yaxshilash bo‘yicha ishlarga davlat tomonidan ustuvor ahamiyat beriladi.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>46-modda. Madaniy faoliyat sohasidagi faoliyatni moliyalashtirish</h1>
              <p>Madaniy faoliyat sohasidagi faoliyatni moliyalashtirish manbalari quyidagilardan iborat:

O‘zbekiston Respublikasi Davlat budjetining mablag‘lari;

madaniyat tashkilotlarining o‘z mablag‘lari;

xalqaro va xorijiy tashkilotlarning mablag‘lari;

jismoniy va yuridik shaxslarning (metsenatlarning) xayriyalari;

qonunchilikda taqiqlanmagan boshqa manbalar.</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>47-modda. Madaniyat xodimlarini ijtimoiy himoya qilish</h1>
              <p>Madaniyat xodimlarini ijtimoiy himoya qilish qonunchilikda belgilangan tartibda amalga oshiriladi.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>48-modda. Madaniyat xodimlarini rag‘batlantirish</h1>
              <p>Madaniyatni rivojlantirishga salmoqli hissa qo‘shgan madaniyat xodimlari davlat mukofotlari (premiyalari) bilan taqdirlanishi, shuningdek qonunchilikda nazarda tutilgan boshqa shakllarda rag‘batlantirilishi mumkin.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>49-modda. Nizolarni hal etish</h1>
              <p>Madaniy faoliyat sohasidagi nizolar qonunchilikda belgilangan tartibda hal etiladi.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>50-modda. Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikni buzganlik uchun javobgarlik</h1>
              <p>Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risidagi qonunchilikni buzganlikda aybdor shaxslar belgilangan tartibda javobgar bo‘ladi.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>51-modda. Ushbu Qonunning ijrosini, yetkazilishini, mohiyati va ahamiyati tushuntirilishini ta’minlash</h1>
              <p>O‘zbekiston Respublikasi Madaniyat vazirligi va boshqa manfaatdor tashkilotlar ushbu Qonunning ijrosini, ijrochilarga yetkazilishini hamda mohiyati va ahamiyati aholi o‘rtasida tushuntirilishini ta’minlasin.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>52-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish</h1>
              <p>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin;

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini qayta ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.
</p>
            </div>
            <div>
              <h1 className='text-[20px] font-semibold text-[red] p-5'>53-modda. Ushbu Qonunning kuchga kirishi</h1>
              <p>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran kuchga kiradi.
</p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2021-yil 20-yanvar,
<br />
O‘RQ-668-son</p>
              <p>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
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
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 py-4 md:py-8 flex-1 flex flex-col">
        <div className="text-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl pt-24 font-bold text-sky-600">O‘ZBEKISTON RESPUBLIKASINING QONUNI</p>
          <p className="text-sm sm:text-base md:text-lg">Madaniy faoliyat va madaniyat tashkilotlari to‘g‘risida</p>
          <p className="text-left mt-5">Qonunchilik palatasi tomonidan 2020-yil 24-noyabrda qabul qilingan <br/>
          Senat tomonidan 2021-yil 6-yanvarda ma’qullangan</p>
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

export default MadaniyFaoliyat;