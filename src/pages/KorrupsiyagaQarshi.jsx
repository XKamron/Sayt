import { useState } from 'react';
import { motion } from 'framer-motion';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const KorrupsiyagaQarshi = () => {
  const tabs = [
    {
      title: '1-bob. Umumiy qoidalar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">1-bob. Umumiy qoidalar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>1-modda. Ushbu Qonunning maqsadi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunning maqsadi korrupsiyaga qarshi kurashish sohasidagi munosabatlarni tartibga solishdan iborat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>2-modda. Korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilik</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilik ushbu Qonun va boshqa qonunchilik hujjatlaridan iboratdir.

Agar O‘zbekiston Respublikasining xalqaro shartnomasida korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikda nazarda tutilganidan boshqacha qoidalar belgilangan bo‘lsa, xalqaro shartnoma qoidalari qo‘llaniladi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>3-modda. Asosiy tushunchalar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonunda quyidagi asosiy tushunchalar qo‘llaniladi:

korrupsiya — shaxsning o‘z mansab yoki xizmat mavqeyidan shaxsiy manfaatlarini yoxud o‘zga shaxslarning manfaatlarini ko‘zlab moddiy yoki nomoddiy naf olish maqsadida qonunga xilof ravishda foydalanishi, xuddi shuningdek bunday nafni qonunga xilof ravishda taqdim etish;

korrupsiyaga oid huquqbuzarlik — korrupsiya alomatlariga ega bo‘lgan, sodir etilganligi uchun qonunchilikda javobgarlik nazarda tutilgan qilmish;

manfaatlar to‘qnashuvi — shaxsiy (bevosita yoki bilvosita) manfaatdorlik shaxsning mansab yoki xizmat majburiyatlarini lozim darajada bajarishiga ta’sir ko‘rsatayotgan yoxud ta’sir ko‘rsatishi mumkin bo‘lgan hamda shaxsiy manfaatdorlik bilan fuqarolarning, tashkilotlarning, jamiyatning yoki davlatning huquqlari va qonuniy manfaatlari o‘rtasida qarama-qarshilik yuzaga kelayotgan yoki yuzaga kelishi mumkin bo‘lgan vaziyat.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>4-modda. Korrupsiyaga qarshi kurashishning asosiy prinsiplari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashishning asosiy prinsiplari quyidagilardan iborat:

qonuniylik;

fuqarolar huquqlari, erkinliklari va qonuniy manfaatlarining ustuvorligi;

ochiqlik va shaffoflik;

tizimlilik;

davlat va fuqarolik jamiyatining hamkorligi;

korrupsiyaning oldini olishga doir chora-tadbirlar ustuvorligi;

javobgarlikning muqarrarligi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>5-modda. Korrupsiyaga qarshi kurashish sohasidagi davlat siyosatining asosiy yo‘nalishlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish sohasidagi davlat siyosatining asosiy yo‘nalishlari quyidagilardan iborat:

aholining huquqiy ongi va huquqiy madaniyatini yuksaltirish, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirish;

davlat va jamiyat hayotining barcha sohalarida korrupsiyaning oldini olishga doir chora-tadbirlarni amalga oshirish;

korrupsiyaga oid huquqbuzarliklarni o‘z vaqtida aniqlash, ularga chek qo‘yish, ularning oqibatlarini, ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etish, korrupsiyaga oid huquqbuzarliklarni sodir etganlik uchun javobgarlikning muqarrarligi prinsipini ta’minlash.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>6-modda. Korrupsiyaga qarshi kurashish sohasidagi davlat dasturlari va boshqa dasturlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish sohasidagi davlat siyosati davlat dasturlari va boshqa dasturlar asosida amalga oshirilishi mumkin.

Davlat dasturlari va boshqa dasturlar ushbu Qonunning qoidalari samarali ijro etilishini ta’minlash, korrupsiyaning holati hamda tendensiyalaridan kelib chiqqan holda korrupsiyaga qarshi kurashish bo‘yicha kompleks va tizimli chora-tadbirlar ko‘rish maqsadida ishlab chiqiladi hamda amalga oshiriladi.</p>
          </div>
        </>
      )
    },
    {
      title: '2-bob. Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi organlar hamda tashkilotlar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">2-bob. Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi organlar hamda tashkilotlar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>7-modda. Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi davlat organlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni bevosita amalga oshiruvchi davlat organlari quyidagilardan iborat:

O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligi;

O‘zbekiston Respublikasi Bosh prokuraturasi;

O‘zbekiston Respublikasi Davlat xavfsizlik xizmati;

O‘zbekiston Respublikasi Ichki ishlar vazirligi;

O‘zbekiston Respublikasi Adliya vazirligi;

O‘zbekiston Respublikasi Bosh prokuraturasi huzuridagi Iqtisodiy jinoyatlarga qarshi kurashish departamenti.

Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni qonunchilikka muvofiq boshqa davlat organlari ham amalga oshiradi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-modda. O‘zbekiston Respublikasining Korrupsiyaga qarshi kurashish bo‘yicha milliy kengashi va uning hududiy kengashlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi organlar hamda tashkilotlarning faoliyatini muvofiqlashtirish uchun O‘zbekiston Respublikasining korrupsiyaga qarshi kurashish bo‘yicha milliy kengashi (bundan buyon matnda Milliy kengash deb yuritiladi) tashkil etiladi.

Qoraqalpog‘iston Respublikasida, viloyatlarda va Toshkent shahrida korrupsiyaga qarshi kurashish bo‘yicha hududiy kengashlar (bundan buyon matnda hududiy kengashlar deb yuritiladi) qonunchilikda belgilangan tartibda tashkil etiladi.

Milliy kengashning asosiy vazifalari quyidagilardan iborat:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarining va boshqa dasturlarning ishlab chiqilishi hamda amalga oshirilishini tashkil etish;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi organlar hamda tashkilotlarning faoliyatini muvofiqlashtirish va hamkorligini ta’minlash;

aholining huquqiy ongi va huquqiy madaniyatini yuksaltirishga, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirishga doir chora-tadbirlarning ishlab chiqilishi hamda amalga oshirilishini tashkil etish;

korrupsiyaga oid huquqbuzarliklarning oldini olishga, ularni aniqlashga, ularga chek qo‘yishga, ularning oqibatlarini, shuningdek ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etishga doir chora-tadbirlar samaradorligi oshirilishini ta’minlash;

korrupsiyaning holati va tendensiyalari to‘g‘risidagi axborotni yig‘ish hamda tahlil etish;

korrupsiyaga qarshi kurashish bo‘yicha chora-tadbirlar amalga oshirilishi yuzasidan monitoringni amalga oshirish, ushbu sohadagi mavjud tashkiliy-amaliy va huquqiy mexanizmlarning samaradorligini baholash;

korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikni takomillashtirish va ushbu sohadagi ishlarni yaxshilash yuzasidan takliflar tayyorlash;

hududiy kengashlar faoliyatini muvofiqlashtirish.

O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligi Milliy kengashning ishchi organidir.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>8-1-modda. O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligining korrupsiyaga qarshi kurashish sohasidagi vakolatlari
</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligi o‘z vakolatlari doirasida:

korrupsiyaning oldini olish va unga qarshi kurashish sohasidagi davlat siyosatini shakllantiradi va amalga oshiradi;

har yili O‘zbekiston Respublikasida korrupsiyaga qarshi kurashish to‘g‘risida milliy ma’ruza tayyorlaydi hamda uni ko‘rib chiqish uchun O‘zbekiston Respublikasi Prezidentiga va O‘zbekiston Respublikasi Oliy Majlisi palatalariga kiritadi;

O‘zbekiston Respublikasi Oliy Majlisi Qonunchilik palatasining va Senatining korrupsiyaga qarshi kurashishga daxldor bo‘lgan qo‘mitalari, Qoraqalpog‘iston Respublikasi Jo‘qorg‘i Kengesining tegishli qo‘mitasi, xalq deputatlari viloyatlar hamda Toshkent shahar, tuman va shahar Kengashlarining korrupsiyaga qarshi kurashish komissiyalari bilan hamkorlik qiladi;

korrupsiyaga oid jinoyatlarni, birinchi navbatda O‘zbekiston Respublikasining milliy manfaatlariga va xalqaro obro‘siga putur yetkazadigan korrupsiyaga oid jinoyatlarni tergov qilish natijalarini kompleks tahlil qiladi, uning yakunlari to‘g‘risida O‘zbekiston Respublikasi Prezidentiga va O‘zbekiston Respublikasi Oliy Majlisi palatalariga axborot beradi;

korrupsiyaga oid jinoyatlar tufayli jamiyat va davlat manfaatlariga yetkazilgan zararning o‘rni to‘liq qoplanishiga erishilishi ustidan nazoratni amalga oshiradi;

normativ-huquqiy hujjatlar va ularning loyihalarining korrupsiyaga qarshi ekspertizasini o‘tkazish tizimi samaradorligini tahlil qiladi, ushbu tizimni takomillashtirish yuzasidan takliflar kiritadi;

fuqarolik jamiyati institutlari bilan birgalikda korrupsiyaning darajasini, shu jumladan hududlar, iqtisodiyot tarmoqlari va boshqa sohalar kesimidagi darajasini baholovchi Korrupsiyani idrok etish milliy indeksini tuzishni tashkil etadi;

davlat xaridlari sohasida korrupsiyaning oldini olish va unga qarshi kurashish maqsadida davlat buyurtmachisining ISO: 37001 korrupsiyaga qarshi standartni qo‘llashini nazarda tutuvchi talabni belgilaydi;

joylarda korrupsiyaning oldini olishga qaratilgan hududiy dasturlar ishlab chiqilishi va amalga oshirilishini tashkil etadi;

korrupsiya holatlariga doir materiallarni qonunchilikda belgilangan tartibda ommaviy axborot vositalariga taqdim etadi;

vazirliklar va idoralarning korrupsiyaning oldini olish va unga qarshi kurashish sohasidagi faoliyatini muvofiqlashtiradi, davlat organlarining, ommaviy axborot vositalarining, fuqarolik jamiyati institutlarining va boshqa nodavlat sektor vakillarining ushbu masalalar bo‘yicha samarali hamkorligini tashkil etadi;

ijro hokimiyati va xo‘jalik boshqaruvi organlari hamda ularning mansabdor shaxslari qarorlarida korrupsiya belgilari aniqlangan hollarda ularning ijrosini to‘xtatish yoki bekor qilish to‘g‘risida ko‘rib chiqilishi majburiy bo‘lgan taqdimnomalar kiritadi.

O‘zbekiston Respublikasi Korrupsiyaga qarshi kurashish agentligi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>9-modda. O‘zbekiston Respublikasi Bosh prokuraturasining korrupsiyaga qarshi kurashish sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Bosh prokuraturasi o‘z vakolatlari doirasida:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikning aniq va bir xilda ijro etilishi ustidan nazoratni amalga oshiradi;

korrupsiyaga qarshi kurashish sohasidagi tezkor-qidiruv faoliyatini, tergovga qadar tekshiruvni, surishtiruvni, dastlabki tergovni amalga oshiruvchi organlar faoliyatini muvofiqlashtiradi;

korrupsiya bilan bog‘liq jinoyatlar bo‘yicha dastlabki tergovni amalga oshiradi;

korrupsiyaning holati va korrupsiyaga qarshi kurashish natijalari to‘g‘risidagi axborotni yig‘ish hamda tahlil qilishni amalga oshiradi;

jismoniy va yuridik shaxslarning korrupsiya faktlariga doir murojaatlarini ko‘rib chiqadi hamda ularning buzilgan huquqlarini tiklash va qonuniy manfaatlarini himoya qilish choralarini ko‘radi;

korrupsiyaga qarshi kurashish sohasidagi qonun ijodkorligi faoliyatida, shu jumladan qonunchilik tashabbusi huquqini amalga oshirishda ishtirok etadi;

aholi o‘rtasida jamiyatda huquqiy ongni, huquqiy madaniyatni yuksaltirishga va qonuniylikni mustahkamlashga qaratilgan huquqiy targ‘ibotga doir faoliyatda ishtirok etadi;

korrupsiyaga oid huquqbuzarliklarning o‘z vaqtida oldi olinishini, aniqlanishini va ularga chek qo‘yilishini ta’minlashga, ularning oqibatlarini, shuningdek ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etishga doir tadbirlarni ishlab chiqadi hamda amalga oshiradi;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi boshqa organlar hamda tashkilotlar bilan hamkorlik qiladi;

korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Bosh prokuraturasi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>10-modda. O‘zbekiston Respublikasi Davlat xavfsizlik xizmatining korrupsiyaga qarshi kurashish sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Davlat xavfsizlik xizmati o‘z vakolatlari doirasida:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

korrupsiya bilan bog‘liq jinoyatlar bo‘yicha tezkor-qidiruv faoliyatini, tergovga qadar tekshiruvni va dastlabki tergovni amalga oshiradi;

korrupsiyaning holati va korrupsiyaga qarshi kurashish natijalari to‘g‘risidagi axborotni yig‘adi hamda tahlil qiladi, milliy xavfsizlik uchun tahdidlarni baholashni amalga oshiradi, tegishli davlat organlariga zarur axborotni taqdim etadi;

jismoniy va yuridik shaxslarning korrupsiya faktlariga doir murojaatlarini ko‘rib chiqadi hamda ularning buzilgan huquqlarini tiklash va qonuniy manfaatlarini himoya qilish choralarini ko‘radi;

korru

psiyaga oid huquqbuzarliklarning o‘z vaqtida oldi olinishini, aniqlanishini va ularga chek qo‘yilishini ta’minlashga, ularning oqibatlarini, shuningdek ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etishga doir tadbirlarni ishlab chiqadi hamda amalga oshiradi;
korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi boshqa organlar hamda tashkilotlar bilan hamkorlik qiladi;

korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Davlat xavfsizlik xizmati qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>11-modda. O‘zbekiston Respublikasi Ichki ishlar vazirligining korrupsiyaga qarshi kurashish sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Ichki ishlar vazirligi o‘z vakolatlari doirasida:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

korrupsiya bilan bog‘liq jinoyatlar bo‘yicha tezkor-qidiruv faoliyatini, tergovga qadar tekshiruvni, surishtiruvni va dastlabki tergovni amalga oshiradi;

korrupsiyaning holati va korrupsiyaga qarshi kurashish natijalari to‘g‘risidagi axborotni yig‘adi hamda tahlil qiladi, tegishli davlat organlariga zarur axborotni taqdim etadi;

jismoniy va yuridik shaxslarning korrupsiya faktlariga doir murojaatlarini ko‘rib chiqadi hamda ularning buzilgan huquqlarini tiklash va qonuniy manfaatlarini himoya qilish choralarini ko‘radi;

aholi o‘rtasida jamiyatda huquqiy ongni, huquqiy madaniyatni yuksaltirishga va qonuniylikni mustahkamlashga qaratilgan huquqiy targ‘ibotga doir faoliyatda ishtirok etadi;

korrupsiyaga oid huquqbuzarliklar to‘g‘risidagi statistika ma’lumotlarining hisobi yuritilishini va tahlil qilinishini ta’minlaydi;

korrupsiyaga oid huquqbuzarliklarning o‘z vaqtida oldi olinishini, aniqlanishini va ularga chek qo‘yilishini ta’minlashga, ularning oqibatlarini, shuningdek ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etishga doir tadbirlarni ishlab chiqadi hamda amalga oshiradi;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi boshqa organlar hamda tashkilotlar bilan hamkorlik qiladi;

korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Ichki ishlar vazirligi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>12-modda. O‘zbekiston Respublikasi Adliya vazirligining korrupsiyaga qarshi kurashish sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Adliya vazirligi o‘z vakolatlari doirasida:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

korrupsiyaga qarshi kurashish sohasidagi qonun ijodkorligi faoliyatida ishtirok etadi;

aholi o‘rtasida jamiyatda huquqiy ongni, huquqiy madaniyatni yuksaltirishga va qonuniylikni mustahkamlashga qaratilgan huquqiy targ‘ibotga doir faoliyatni amalga oshiradi hamda muvofiqlashtiradi;

ta’lim muassasalarida korrupsiyaga qarshi kurashish sohasida huquqiy ta’lim va tarbiyaga doir chora-tadbirlarni amalga oshirishda ishtirok etadi;

normativ-huquqiy hujjatlardagi hamda ularning loyihalaridagi korrupsiya uchun shart-sharoitlar yaratadigan qoidalar va normalarni aniqlash maqsadida ushbu hujjatlar va loyihalarning tahlilini amalga oshiradi;

korrupsiyaga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etish bo‘yicha choralar ko‘radi;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi boshqa organlar hamda tashkilotlar bilan hamkorlik qiladi;

korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Adliya vazirligi qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>13-modda. O‘zbekiston Respublikasi Bosh prokuraturasi huzuridagi Iqtisodiy jinoyatlarga qarshi kurashish departamentining korrupsiyaga qarshi kurashish sohasidagi vakolatlari</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Bosh prokuraturasi huzuridagi Iqtisodiy jinoyatlarga qarshi kurashish departamenti o‘z vakolatlari doirasida:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

jinoiy faoliyatdan olingan daromadlarni legallashtirish bilan bog‘liq jinoyatlar, iqtisodiy va korrupsiya bilan bog‘liq boshqa jinoyatlar bo‘yicha tezkor-qidiruv faoliyatini, tergovga qadar tekshiruvni va surishtiruvni amalga oshiradi;

jinoiy faoliyatdan olingan daromadlarni legallashtirishning ehtimol tutilgan yo‘llari va mexanizmlarini aniqlash uchun pul mablag‘lari yoki boshqa mol-mulk bilan bog‘liq operatsiyalarning monitoringini tashkil etadi hamda o‘tkazadi;

jinoiy ta’qib etishni tashkil qilish va huquqiy ta’sir ko‘rsatishning boshqa choralarini ko‘rish uchun tegishli davlat organlarini korrupsiyaga oid aniqlangan huquqbuzarliklar to‘g‘risida o‘z vaqtida xabardor qiladi;

korrupsiyaga oid huquqbuzarliklarning o‘z vaqtida oldi olinishini, aniqlanishini va ularga chek qo‘yilishini ta’minlashga, ularning oqibatlarini, shuningdek ularga imkon beruvchi sabablar va shart-sharoitlarni bartaraf etishga doir tadbirlarni ishlab chiqadi hamda amalga oshiradi;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi va unda ishtirok etuvchi boshqa organlar hamda tashkilotlar bilan hamkorlik qiladi;

korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlikni amalga oshiradi.

O‘zbekiston Respublikasi Bosh prokuraturasi huzuridagi Iqtisodiy jinoyatlarga qarshi kurashish departamenti qonunchilikka muvofiq boshqa vakolatlarni ham amalga oshirishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>14-modda. Fuqarolar o‘zini o‘zi boshqarish organlarining, nodavlat notijorat tashkilotlarining va fuqarolarning korrupsiyaga qarshi kurashishda ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolar:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etishi;

aholining huquqiy ongi va huquqiy madaniyatini yuksaltirishda, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirishda ishtirok etishi;

korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikning ijro etilishi ustidan jamoatchilik nazoratini amalga oshirishi;

korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikni takomillashtirish yuzasidan takliflar kiritishi;

korrupsiyaga qarshi kurashish sohasida davlat organlari va boshqa tashkilotlar bilan hamkorlik qilishi mumkin.

Fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va fuqarolar qonunchilikka muvofiq boshqa tadbirlarda ham ishtirok etishi mumkin.

Nodavlat notijorat tashkilotlari ushbu moddada nazarda tutilgan tadbirlarni amalga oshirish maqsadida Milliy kengash va hududiy kengashlar faoliyatida, shuningdek davlat organlari huzuridagi ishchi guruhlar, komissiyalar va jamoat-maslahat organlari faoliyatida qonunchilikda belgilangan tartibda ishtirok etadi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>15-modda. Ommaviy axborot vositalarining korrupsiyaga qarshi kurashishda ishtirok etishi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ommaviy axborot vositalari:

korrupsiyaga qarshi kurashish sohasidagi davlat dasturlarini va boshqa dasturlarni ishlab chiqish hamda amalga oshirishda ishtirok etadi;

korrupsiyaga qarshi kurashish sohasidagi davlat siyosatini amalga oshirishga, shu jumladan aholining huquqiy ongi va huquqiy madaniyatini yuksaltirishga, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirishga qaratilgan tadbirlarni yoritadi;

korrupsiyaga qarshi kurashish to‘g‘risidagi qonunchilikning ijro etilishi ustidan jamoatchilik nazoratini amalga oshiradi;

korrupsiyaga qarshi kurashish sohasida davlat organlari va boshqa tashkilotlar bilan hamkorlik qiladi.

Ommaviy axborot vositalari qonunchilikka muvofiq boshqa tadbirlarda ham ishtirok etishi mumkin.</p>
          </div>
        </>
      )
    },
    {
      title: '3-bob. Korrupsiyaga qarshi kurashish sohasida huquqiy ong va huquqiy madaniyatni yuksaltirish', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">3-bob. Korrupsiyaga qarshi kurashish sohasida huquqiy ong va huquqiy madaniyatni yuksaltirish</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>16-modda. Aholining huquqiy ongi va huquqiy madaniyatini yuksaltirish, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlari va boshqa tashkilotlar korrupsiyaga qarshi kurashish maqsadida aholining huquqiy ongi va huquqiy madaniyatini yuksaltirish, jamiyatda korrupsiyaga nisbatan murosasiz munosabatni shakllantirish bo‘yicha zarur chora-tadbirlar ko‘radi, shu jumladan korrupsiyaga qarshi kurashish masalalariga doir tushuntirish ishlarini amalga oshirish, huquqiy tarbiya va ta’limni, ilmiy-amaliy tadbirlarni tashkil etish, o‘quv-uslubiy va ilmiy adabiyotlarni ishlab chiqish yo‘li bilan zarur chora-tadbirlar ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>17-modda. Davlat organlari va boshqa tashkilotlar xodimlarining huquqiy savodxonligini oshirish</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlari va boshqa tashkilotlar o‘z mansabdor shaxslarining hamda boshqa xodimlarining korrupsiyaga qarshi kurashish sohasidagi huquqiy savodxonligini, shu jumladan huquqiy bilimlari darajasini oshirish yuzasidan zarur chora-tadbirlar ko‘radi.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>18-modda. Ta’lim muassasalarida korrupsiyaga qarshi kurashish sohasidagi huquqiy ta’lim va tarbiya</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ta’lim muassasalarida korrupsiyaga qarshi kurashish sohasidagi huquqiy ta’lim va tarbiya belgilangan davlat ta’lim standartlariga muvofiq amalga oshiriladi.

Davlat ta’limni boshqarish organlari va ta’lim muassasalari korrupsiyaga qarshi kurashish sohasidagi davlat siyosatining asosiy yo‘nalishlarini inobatga olgan holda ta’lim muassasalarida huquqiy ta’lim va tarbiyaga, mutaxassislarni kasbiy tayyorlashning sifatini oshirishga, ta’lim dasturlarini doimiy ravishda takomillashtirib borishga qaratilgan chora-tadbirlarni ishlab chiqadi.</p>
          </div>
        </>
      )
    },
    {
      title: '4-bob. Korrupsiyaning oldini olishga doir chora-tadbirlar', 
      content: (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">4-bob. Korrupsiyaning oldini olishga doir chora-tadbirlar</h2>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>19-modda. Davlat boshqaruvi sohasida korrupsiyaning oldini olishga doir chora-tadbirlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat boshqaruvi sohasida korrupsiyaning oldini olishga doir chora-tadbirlar quyidagilardan iborat:

davlat organlari faoliyatining ochiqligini va ularning hisobdorligini ta’minlash, davlat boshqaruvi tizimining samaradorligini oshirish, davlat organlarining, ular mansabdor shaxslarining va boshqa xodimlarining o‘z zimmasiga yuklatilgan vazifalarni bajarishi yuzasidan mas’uliyatini kuchaytirish;

korrupsiyaga qarshi kurashish sohasida davlat organlarining faoliyati ustidan parlament va jamoatchilik nazoratini amalga oshirish;

davlat organlarining va ular xodimlarining faoliyatida korrupsiyaga oid huquqbuzarliklarga yo‘l qo‘ymaslik;

davlat organlarining mansabdor shaxslari va boshqa xodimlari tomonidan o‘z mansab yoki xizmat majburiyatlarining bajarilishi samaradorligi mezonlarini, standartlarini va uning sifatini baholash tizimlarini joriy etish;

davlat organlari xodimlarining kasbiy hamda xizmatdan tashqari faoliyatdagi odob-axloqining yagona prinsiplari va qoidalarini belgilovchi odob-axloq qoidalarini samarali amalga oshirish;

davlat organlari xodimlari manfaatlarining to‘qnashuvini hal qilishning tashkiliy-huquqiy asoslarini takomillashtirish, ularga rioya etilishi yuzasidan monitoring o‘tkazilishini ta’minlash;

davlat organlari xodimlarining huquqiy maqomini belgilash, xizmatni o‘tashning shaffof tartibini o‘rnatish, shaxsiy va kasbiy sifatlar, ochiqlik, beg‘arazlik, adolatlilik va xolislik prinsiplari asosida tanlov bo‘yicha saralash hamda xizmatda ko‘tarilish tizimini joriy etish;

davlat organlari tomonidan jismoniy va yuridik shaxslarning murojaatlari to‘g‘risidagi qonunchilik talablariga rioya etilishi, murojaatlarning to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishi, ular tomonidan jismoniy va yuridik shaxslarning buzilgan huquqlari, erkinliklarini tiklash hamda qonuniy manfaatlarini himoya qilish bo‘yicha o‘z vakolatlari doirasida choralar ko‘rilishi ustidan nazoratni ta’minlash;

davlat organlari faoliyatida korrupsiyaning oldini olishga doir tadbirlarning amalga oshirilishi yuzasidan ushbu organlar tomonidan ko‘rilayotgan chora-tadbirlar samaradorligini baholagan holda muntazam ravishda monitoring o‘tkazish;

normativ-huquqiy hujjatlarning va ular loyihalarining korrupsiyaga qarshi ekspertizasini tashkil etish;

davlat organlarining mansabdor shaxslari va boshqa xodimlarining samarali ijtimoiy himoya qilinishini, moddiy ta’minot olishini va rag‘batlantirilishini ta’minlash.

Qonunchilikda davlat boshqaruvi sohasida korrupsiyaning oldini olishga doir boshqa chora-tadbirlar ham nazarda tutilishi mumkin.

Davlat organlarining va o‘zga tashkilotlarning mansabdor shaxslari hamda boshqa xodimlari qonunchilikka rioya etishi, o‘z mansab yoki xizmat majburiyatlarini beg‘arazlik bilan, xolisona, vijdonan, odob-axloq qoidalariga rioya etgan holda bajarishi hamda korrupsiyaga oid biror-bir huquqbuzarlikni sodir etishdan yoki bunday huquqbuzarliklarni sodir etish uchun shart-sharoitlar yaratadigan boshqa har qanday harakatlardan o‘zini tiyishi shart.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>20-modda. Ijtimoiy-iqtisodiy rivojlanish va tadbirkorlik sohasida korrupsiyaning oldini olishga doir chora-tadbirlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ijtimoiy-iqtisodiy rivojlanish va tadbirkorlik sohasida korrupsiyaning oldini olishga doir chora-tadbirlar quyidagilardan iborat:

ma’muriy va byurokratik to‘siqlarni bartaraf etish, ro‘yxatga olish, ruxsat etish va litsenziyaga doir tartib-taomillarni soddalashtirish hamda ularning tezkorligini oshirish;

davlat organlarining nazorat-tekshiruv vazifalarini maqbullashtirish, tadbirkorlik subyektlarining faoliyatini tekshirish tizimini takomillashtirish, ularning faoliyatiga qonunga xilof ravishda aralashishga yo‘l qo‘ymaslik;

davlat organlari va tadbirkorlik subyektlari o‘rtasidagi o‘zaro munosabatlarning masofaviy shakllarini keng joriy etish;

tadbirkorlik faoliyatini olib borish uchun teng shart-sharoitlar yaratish va insofsiz raqobatga yo‘l qo‘ymaslik;

davlat xaridlarining samarali huquqiy mexanizmlarini joriy etish, davlat xaridlarini joylashtirishda oshkoralik, shaffoflikni ta’minlash hamda raqobat muhitini qo‘llab-quvvatlash;

ta’lim, sog‘liqni saqlash, ijtimoiy ta’minot, kommunal xizmat ko‘rsatish sohasida va ijtimoiy-iqtisodiy rivojlanishning boshqa sohalarida aholi uchun adolatli shart-sharoitlarni hamda teng imkoniyatlarni yaratish, korrupsiyaga oid huquqbuzarliklarga yo‘l qo‘ymaslik;

nodavlat tashkilotlarda korrupsiyaga qarshi kurashishning samarali mexanizmlarini joriy etish.

Qonunchilikda ijtimoiy-iqtisodiy rivojlanish va tadbirkorlik sohasida korrupsiyaning oldini olishga doir boshqa chora-tadbirlar ham nazarda tutilishi mumkin.</p>
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>21-modda. Manfaatlar to‘qnashuvining oldini olish va uni bartaraf etishga doir chora-tadbirlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlarining xodimlari mansab yoki xizmat majburiyatlarini bajarish chog‘ida manfaatlar to‘qnashuviga olib keladigan yoki olib kelishi mumkin bo‘lgan shaxsiy manfaatdorlikka yo‘l qo‘ymasligi kerak.

Manfaatlar to‘qnashuvi yuzaga kelgan taqdirda, davlat organlarining xodimlari o‘zining bevosita rahbarini darhol xabardor qilishi kerak. Manfaatlar to‘qnashuvi mavjudligi to‘g‘risida ma’lumotlar olgan rahbar bu to‘qnashuvning oldini olish yoki uni bartaraf etish yuzasidan o‘z vaqtida choralar ko‘rishi shart.

Davlat organlarining maxsus bo‘linmalari yoki odob komissiyalari manfaatlar to‘qnashuvini hal etish qoidalariga rioya etilishi yuzasidan monitoringni amalga oshiradi.

Davlat organlarining manfaatlar to‘qnashuvining oldini olish yoki uni bartaraf etish talablari buzilishiga yo‘l qo‘ygan xodimlari, shuningdek ularning rahbarlari qonunchilikka muvofiq javobgar bo‘ladi.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>22-modda. Ma’muriy tartib-taomillar sohasida korrupsiyaning oldini olishga doir chora-tadbirlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ma’muriy tartib-taomillar sohasida korrupsiyaning oldini olishga doir chora-tadbirlar quyidagilardan iborat:

qonuniylik va adolatlilik prinsiplarini ta’minlash, ma’muriy-boshqaruv jarayonining beg‘arazligi kafolatlarini yaratish, ushbu jarayonning shaffofligini, tashqi va ichki nazorat uchun ochiqligini oshirish;

o‘z ixtiyoricha harakat qilish vakolatlarini cheklagan holda ma’muriy tartib-taomillarni batafsil tartibga solish, byurokratik rasmiyatchilikka yo‘l qo‘ymaslik;

soddalashtirilgan ma’muriy tartib-taomillarni joriy etish;

davlat organlarining qarorlari ustidan shikoyat qilishning va yetkazilgan zarar o‘rnini qoplashning samarali mexanizmlarini belgilash.

Qonunchilikda ma’muriy tartib-taomillar sohasida korrupsiyaning oldini olishga doir boshqa chora-tadbirlar ham nazarda tutilishi mumkin.</p>
           
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>23-modda. Davlat xaridlarini amalga oshirish sohasida korrupsiyaning oldini olishga doir chora-tadbirlar</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat xaridlarini amalga oshirish sohasida korrupsiyaning oldini olishga doir chora-tadbirlar quyidagilardan iborat:

davlat xaridlarini amalga oshirish tartib-taomillari to‘g‘risidagi axborotning shaffofligi va ochiqligini ta’minlash;

adolatli raqobatni va qarorlar qabul qilish chog‘ida xolisona mezonlardan foydalanilishini ta’minlash;

ichki nazoratning samarali tizimini, shuningdek davlat xaridlarini o‘tkazish natijalari yuzasidan shikoyat qilish va nizolashishning samarali tartib-taomilini yaratish;

davlat elektron savdolarining samarali ishlashini ta’minlash.

Qonunchilikda davlat xaridlarini amalga oshirish sohasida korrupsiyaning oldini olishga doir boshqa chora-tadbirlar ham nazarda tutilishi mumkin.</p>
            
          </div>
          <div>
            <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>24-modda. Normativ-huquqiy hujjatlarning va ular loyihalarining korrupsiyaga qarshi ekspertizasi</h3>
            <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Normativ-huquqiy hujjatlarning va ular loyihalarining korrupsiyaga qarshi ekspertizasi:

korrupsiyaga oid huquqbuzarliklarni sodir etish imkoniyatini yaratadigan, korrupsiyaga sabab bo‘ladigan omillarni aniqlashga;

korrupsiyaga oid huquqbuzarliklarni sodir etish imkoniyatini yaratadigan loyihani qabul qilish oqibatlarini umumiy baholashga;

normativ-huquqiy hujjatlarni qo‘llash jarayonida korrupsiya xususiyatiga ega xavflarning yuzaga kelishi ehtimolini prognoz qilishga;

korrupsiyaga sabab bo‘lgan, aniqlangan omillarni bartaraf etishga qaratilgan tavsiyalarni ishlab chiqishga va choralar ko‘rishga yo‘naltirilgan jarayondan iborat bo‘ladi.

Normativ-huquqiy hujjatlarning va ular loyihalarining korrupsiyaga qarshi ekspertizasi “Normativ-huquqiy hujjatlarning va ular loyihalarining korrupsiyaga qarshi ekspertizasi to‘g‘risida”gi O‘zbekiston Respublikasi Qonunida belgilangan tartibda o‘tkaziladi.</p>
            
          </div>
        </>
      )
    },
    {
        title: '5-bob. Korrupsiyaga oid huquqbuzarliklarni aniqlash, ularga chek qo‘yish, javobgarlikning muqarrarligi', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">5-bob. Korrupsiyaga oid huquqbuzarliklarni aniqlash, ularga chek qo‘yish, javobgarlikning muqarrarligi</h2>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>25-modda. Korrupsiyaga oid huquqbuzarliklarni o‘z vaqtida aniqlash va ularga chek qo‘yishga, korrupsiyaga oid huquqbuzarliklarni sodir etganlik uchun javobgarlikning muqarrarligi prinsipini ta’minlashga doir chora-tadbirlar</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga oid huquqbuzarliklarni o‘z vaqtida aniqlash va ularga chek qo‘yishga, korrupsiyaga oid huquqbuzarliklarni sodir etganlik uchun javobgarlikning muqarrarligi prinsipini ta’minlashga doir chora-tadbirlar quyidagilardan iborat:

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni bevosita amalga oshiruvchi davlat organlarining korrupsiyaning holatini va tendensiyalarini tizimli tahlil qilishga asoslangan samarali ishini tashkil etish, ularning faoliyatida korrupsiyaga oid huquqbuzarliklarga yo‘l qo‘ymaslik;

korrupsiyaga oid huquqbuzarliklarga qarshi kurashning zamonaviy shakllari va usullaridan foydalanish, huquqni muhofaza qiluvchi organlarning texnik ta’minoti darajasini oshirish, ularning ishiga zamonaviy axborot-kommunikatsiya texnologiyalarini joriy etish;

sudlarning mustaqilligi va erkinligini, ular faoliyatining ochiqligini ta’minlash;

korrupsiyaga qarshi kurashish bo‘yicha faoliyatni bevosita amalga oshiruvchi davlat organlari o‘rtasida muvofiqlashtirishni va hamkorlikni ta’minlash;

jismoniy va yuridik shaxslarning korrupsiyaga oid huquqbuzarliklar faktlariga doir murojaatlari to‘liq, xolisona va o‘z vaqtida ko‘rib chiqilishini ta’minlash;

korrupsiyaga oid huquqbuzarliklar to‘g‘risida axborot bergan shaxslarning himoya qilinishini ta’minlash;

korrupsiyaga qarshi kurashning samarali jinoyat-huquqiy va jinoyat-protsessual mexanizmlarini yaratish.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>26-modda. Davlat organlari xodimlarining korrupsiyaga oid huquqbuzarliklar faktlari to‘g‘risida xabar qilish majburiyati</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Davlat organlarining xodimlari ularni korrupsiyaga oid huquqbuzarliklar sodir etishga ko‘ndirish maqsadida biror-bir shaxs o‘zlariga murojaat etganligiga doir barcha hollar to‘g‘risida, shuningdek davlat organlarining boshqa xodimlari tomonidan sodir etilgan shunga o‘xshash huquqbuzarliklarning o‘zlariga ma’lum bo‘lib qolgan har qanday faktlari haqida o‘z rahbarini yoxud huquqni muhofaza qiluvchi organlarni xabardor etishi shart.

Ushbu moddaning birinchi qismida nazarda tutilgan majburiyatning davlat organlarining xodimlari tomonidan bajarilmaganligi qonunchilikka muvofiq javobgarlikka sabab bo‘ladi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>27-modda. Korrupsiyaga oid huquqbuzarliklar uchun javobgarlik</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga oid huquqbuzarliklar sodir etganlik qonunchilikka muvofiq javobgarlikka sabab bo‘ladi.

Korrupsiyaga oid huquqbuzarlik sodir etgan shaxslar sudning qaroriga ko‘ra muayyan huquqlardan, shu jumladan muayyan lavozimlarni egallash huquqidan qonunga muvofiq mahrum etilishi mumkin.

Yuridik shaxslar korrupsiyaga oid huquqbuzarliklarni sodir etganlik uchun qonunda belgilangan tartibda javobgar bo‘ladi.</p>
             
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>28-modda. Korrupsiyaga oid huquqbuzarliklar to‘g‘risidagi axborotni xabar qiluvchi shaxslarni va ularning yaqin qarindoshlarini himoya qilish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga oid huquqbuzarliklar to‘g‘risidagi axborotni xabar qiluvchi shaxslar va ularning yaqin qarindoshlari davlat himoyasida bo‘ladi.

Korrupsiyaga oid huquqbuzarliklar to‘g‘risida xabar qiluvchi shaxslar to‘g‘risidagi ma’lumotlar xizmat sirini tashkil etadi hamda faqat qonunda nazarda tutilgan hollarda va shaxsning o‘zining, shuningdek korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi organ rahbarining yozma ruxsati asosida oshkor etiladi.

Korrupsiyaga oid huquqbuzarliklar to‘g‘risida xabar qiluvchi shaxslarning hamda ularning yaqin qarindoshlarining hayotiga va sog‘lig‘iga haqiqiy tahdidni, ularga nisbatan zo‘rlik ishlatilganligini, ularning mol-mulki yo‘q qilinganligini yoki shikastlantirilganligini tasdiqlovchi yetarli asoslar mavjud bo‘lgan taqdirda, korrupsiyaga qarshi kurashishni amalga oshiruvchi organlar “Jabrlanuvchilarni, guvohlarni va jinoyat protsessining boshqa ishtirokchilarini himoya qilish to‘g‘risida”gi O‘zbekiston Respublikasi Qonuniga muvofiq ularni himoya qilish bo‘yicha zarur choralar ko‘rishi shart.

Korrupsiyaga oid huquqbuzarliklar to‘g‘risidagi axborotni xabar qiluvchi shaxslarning va ularning yaqin qarindoshlarining huquqlari va qonuniy manfaatlariga korrupsiyaga oid huquqbuzarliklar to‘g‘risida xabar qilganligi sababli tajovuz qilishga, shuningdek ish beruvchi tomonidan ularning mehnatga oid huquqlari buzilishiga yo‘l qo‘yilmaydi hamda bu qonunga ko‘ra javobgarlikka sabab bo‘ladi.

Korrupsiyaga oid huquqbuzarliklar to‘g‘risida xabar qiluvchi shaxslarni rag‘batlantirish O‘zbekiston Respublikasi Vazirlar Mahkamasi tomonidan belgilangan tartibda amalga oshiriladi.

Ushbu moddaning qoidalari korrupsiyaga oid huquqbuzarliklar to‘g‘risida bila turib yolg‘on axborotni xabar qilgan shaxslarga nisbatan tatbiq etilmaydi, ular bunday huquqbuzarlik uchun qonunga muvofiq javobgar bo‘ladi.</p>
             
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>29-modda. Korrupsiyaga oid huquqbuzarliklar natijasida qabul qilingan qarorlarni bekor qilish yoki o‘zgartirish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga oid huquqbuzarliklar natijasida qabul qilingan qarorlar manfaatdor shaxsning arizasiga ko‘ra vakolatli davlat organi, boshqa tashkilot yoki mansabdor shaxs tomonidan bekor qilinishi yoxud o‘zgartirilishi yoki sud tartibida haqiqiy emas deb topilishi mumkin.

Korrupsiyaga oid huquqbuzarliklar sodir etilganligi natijasida qabul qilingan qaror bekor qilingan, o‘zgartirilgan yoki haqiqiy emas deb topilgan taqdirda, uning qabul qilinishi natijasida jismoniy va yuridik shaxslarga yetkazilgan zararning o‘rni qonunchilikda belgilangan tartibda qoplanishi lozim.</p>
             
            </div>
          </>
        )
    },
      {
        title: '6-bob. Yakunlovchi qoidalar', 
        content: (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-6 pb-3 border-b border-gray-200">6-bob. Yakunlovchi qoidalar</h2>
            <div>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaning holatini, xususiyatini, miqyoslarini, o‘zgarishlarini va tendensiyalarini, shuningdek korrupsiyaga qarshi kurashish sohasidagi davlat siyosatining amalga oshirilish samaradorligini o‘rganish davlat organlari tomonidan fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va boshqa tashkilotlar, ommaviy axborot vositalari, shuningdek fuqarolar bilan hamkorlikda sotsiologik, maxsus, ilmiy tadqiqotlar hamda boshqa turdagi tadqiqotlar o‘tkazish yo‘li bilan doimiy asosda amalga oshiriladi.

Sotsiologik tadqiqotlar korrupsiyaga eng ko‘p duchor bo‘lgan tarmoqlar va sohalarni, uning yuzaga kelishi sabablari va shart-sharoitlarini aniqlash, shuningdek mazkur faoliyatga jalb etilgan ijtimoiy guruhlarni aniqlash maqsadida sotsiologik so‘rovlar o‘tkazish va boshqa usullardan foydalanish yo‘li bilan jamoatchilik fikrini tizimli o‘rganishni o‘z ichiga oladi.

Maxsus tadqiqotlar huquqni muhofaza qiluvchi va nazorat qiluvchi organlarning korrupsiyaga qarshi kurashish bo‘yicha faoliyati natijalarini, korrupsiyaga oid jinoyatchilikning holatini, korrupsiya ko‘rsatkichlarining statistika hisobini muntazam ravishda tizimli tahlil qilishni, davlat va jamiyat hayotining barcha sohalarida korrupsiyaning xususiyati va miqyoslarini, o‘zgarishlari va tendensiyalarini o‘rganishni o‘z ichiga oladi.

Ilmiy tadqiqotlar korrupsiyaga qarshi kurashish muammolari bo‘yicha ilmiy tadqiqotlar o‘tkazishni, ilmiy uslubiyotlar va tavsiyalar ishlab chiqishni, ularni amaliyotga oqilona joriy etishni, korrupsiyaga qarshi kurashishda qo‘llanilayotgan shakllar va usullar samaradorligini prognoz qilish hamda ilmiy tahlil etishni o‘z ichiga oladi.

Davlat korrupsiyaga qarshi kurashish sohasidagi tadqiqotlarni qo‘llab-quvvatlaydi va rag‘batlantiradi.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>31-modda. Axborot olish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Har kim davlat organlarining tashkil etilishi va faoliyat ko‘rsatishi to‘g‘risida, shu shaxsning o‘ziga yoki shaxslar guruhiga taalluqli bo‘lgan hujjatlarning qabul qilinish jarayonlari haqida axborot olish huquqiga ega.

Davlat organlari, fuqarolarning o‘zini o‘zi boshqarish organlari, nodavlat notijorat tashkilotlari va boshqa tashkilotlar korrupsiya bilan bog‘liq bo‘lgan, jamiyat uchun ahamiyatga molik voqealar, faktlar, hodisalar va jarayonlar to‘g‘risidagi xabarlarni qonunchilikda belgilangan tartibda ommaviy axborot vositalariga taqdim etadi.

Axborot olish faqat qonunga muvofiq cheklanishi mumkin.</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>32-modda. Korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlik</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Korrupsiyaga qarshi kurashish sohasida xalqaro hamkorlik O‘zbekiston Respublikasining qonunchiligi va xalqaro shartnomalariga muvofiq amalga oshiriladi.

Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi davlat

organlari chet davlatlarning vakolatli organlariga zarur axborotni taqdim etish to‘g‘risida so‘rovlar yuborish va ularning so‘rovlariga javob berish huquqiga ega.
Korrupsiyaga qarshi kurashish bo‘yicha faoliyatni amalga oshiruvchi davlat organlari korrupsiyaga oid huquqbuzarliklar natijasida olingan mol-mulkni O‘zbekiston Respublikasining qonunchiligi va xalqaro shartnomalariga muvofiq qaytarish choralarini ko‘radi.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>33-modda. Qonunchilikni ushbu Qonunga muvofiqlashtirish</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasi Vazirlar Mahkamasi:

hukumat qarorlarini ushbu Qonunga muvofiqlashtirsin;

davlat boshqaruvi organlari ushbu Qonunga zid bo‘lgan o‘z normativ-huquqiy hujjatlarini ko‘rib chiqishlari va bekor qilishlarini ta’minlasin.
</p>
            </div>
            <div>
              <h3 className='text-lg sm:text-xl font-semibold text-red-600 py-4 px-3 sm:px-5 bg-red-50 rounded-lg my-4'>34-modda. Ushbu Qonunning kuchga kirishi</h3>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>Ushbu Qonun rasmiy e’lon qilingan kundan e’tiboran kuchga kiradi.
</p>
<div className='flex justify-between items-center mt-5 font-bold'>
              <p className='text-center'>Toshkent sh., <br />
              2017-yil 3-yanvar,
<br />
O‘RQ-419-son</p>
              <p className='text-gray-700 leading-relaxed text-sm sm:text-base mb-6 px-3 sm:px-5'>O‘zbekiston Respublikasining Prezidenti Sh. MIRZIYOYEV</p>
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50 font-Montserrat">
      <Header />
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-8 pt-24 pb-4 md:pt-28 md:pb-8 flex-1 flex flex-col">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-sky-800 mb-2">
            O'ZBEKISTON RESPUBLIKASINING QONUNI
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-700">
            KORRUPSIYAGA QARSHI KURASHISH TO'G'RISIDA
          </h2>
          <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <Tabs tabs={tabs} activeTab={activeTab} onChangeTab={changeTab} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KorrupsiyagaQarshi;