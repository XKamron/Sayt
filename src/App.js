import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Konstitutsiya from './pages/Konstitutsiya';
import Kodeks from './pages/Kodeks'; 
import Error from './pages/Error';
import Asosiy from './pages/Asosiy';
import Parent from './pages/Parent';
import MaktabKorsatkichlari from './pages/Maktab_korsatkichlari';
import SavolJavob from './pages/Savol_Javob';
import Vazir from './pages/Vazir';
import Prezident_Farmonlari from './pages/Prezident_Farmonlari';
import Vazir_buyruqlari from './pages/Vazir_buyruqlari';
import Adliya_Hujjatlar from './pages/Adliya_Hujjatlar';
import Rahbariyat from './pages/Rahbariyat';
import Xodimlar from './pages/Xodimlar';
import Bmsm_hujjatlar from './pages/Bmsm_hujjatlar';
import Lokal_Hujjatlar from './pages/Lokal_Hujjatlar';
import Talim_togrisida_qonun from './pages/Talim_togrisida_qonun';
import Aholini_ish_bilan_taminlash from './pages/Aholini_ish_bilan_taminlash';
import Bola_huquqlari from './pages/Bola_huquqlari';
import Jismoniy_yuridik_shaxs from './pages/Jismoniy_yuridik_shaxs'; 
import Kasaba_uyushmasi from './pages/Kasaba_uyushmasi';
import Madaniy_Faoliyat from './pages/Madaniy_Faoliyat';
import YoshlargaOid from './pages/YoshlargaOid';
import Mehnat_muhofaza from './pages/Mehnat_muhofaza';
import Nogironligi_b_l_shaxs from './pages/Nogironligi_b_l_shaxs';
import Shaxsga_doir from './pages/Shaxsga_doir';
import Aktorlik_sanati from './pages/Vazirlar mahkamasi qarori/Aktorlik_sanati';
import Bolalarmusiqa_maktabi from './pages/Vazirlar mahkamasi qarori/Bolalarmusiqa_maktabi';
import Bakalavariat from './pages/Vazirlar mahkamasi qarori/Bakalavariat';
import Ixtisos_maktab from './pages/Vazirlar mahkamasi qarori/Ixtisos_maktab'
import Konservatoriya from './pages/Vazirlar mahkamasi qarori/Konservatoriya'
import Atestatsiya from './pages/Vazirlar mahkamasi qarori/Atestatsiya'
import Maktabgacha from './pages/Vazirlar mahkamasi qarori/Maktabgacha'
import Madaniyat_vazirligi from './pages/Vazirlar mahkamasi qarori/Madaniyat_vazirligi'
import Odob_axloq from './pages/Vazirlar mahkamasi qarori/Odob_axloq'
import Madaniyat from './pages/Vazirlar mahkamasi qarori/Madaniyat'
import Bolalar_musiqa from './pages/Prezidentning farmonlari va qarorlari/Bolalar_musiqa'
import Pedagogiga_yonalishi from './pages/Prezidentning farmonlari va qarorlari/Pedagogiga_yonalishi'
import Maqom_sanati from './pages/Prezidentning farmonlari va qarorlari/Maqom_sanati'
import Baxchichilik_sanati from './pages/Prezidentning farmonlari va qarorlari/Baxchichilik_sanati'
import Korrupsiyaga_qarshi_P from './pages/Prezidentning farmonlari va qarorlari/Korrupsiyaga_qarshi_P'
import Korrupsiyaga_qarshi from './pages/Korrupsiyaga_qarshi'
import Musiqa_maktablari from './pages/Prezidentning farmonlari va qarorlari/Musiqa_maktablari'
import Madaniyat_vazirligi_faoliyati from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_vazirligi_faoliyati'
import Madaniyat_sanat_sohasi from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanat_sohasi'
import Madaniyat_sanatni_rivojlantirish from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanatni_rivojlantirish'
import Madaniyat_sanat_sohasi_yenada_rivojlantirish from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanat_sohasi_yenada_rivojlantirish'
import Bmsm_xodimlari from './pages/Bmsm_xodimlari'
import Malaka_tavsiflari from './pages/Malaka_tavsiflari'
import Oquvchilar_xavfsizligi from './pages/Oquvchilar_xavfsizligi'
import Mehnat_muxofazasi from './pages/Mehnat_muxofazasi'
import Mehnatni_muhofaza_qilish from './pages/Mehnatni_Muhofaza_qilish'
import Oquv_dasturlari from './pages/Oquv_dasturlari'
import Tanlovlar from './pages/Tanlovlar'
import Oquvjarayonlari_hujjatlar from './pages/Oquvjarayonlari_hujjatlar'
import Hujjatlar from './pages/Hujjatlar'
import Korrupsiya from './pages/Korrupsiya'
import Bmsm_pedagogik_kengash from './pages/Bmsm_pedagogik_kengash'
import DavlatRamzlari from './components/DavlatRamzlari'
import TaraqqiyotStrategiya from './components/TaraqqiyotStrategiya'
import BeshTashabbus from './components/BeshTashabbus'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/konstitutsiya" element={<Konstitutsiya />} />
        <Route path="/kodeks" element={<Kodeks />} />
        <Route path="/asosiy" element={<Asosiy />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/maktab_korsatkichlari" element={<MaktabKorsatkichlari />} />
        <Route path="/savol_javob" element={<SavolJavob />} />
        <Route path="/vazir" element={<Vazir />} />
        <Route path="/prezident_farmonlari" element={<Prezident_Farmonlari />} />
        <Route path="/vazir_buyruqlari" element={<Vazir_buyruqlari />} />
        <Route path="/adliya_hujjatlar" element={<Adliya_Hujjatlar />} />
        <Route path="/rahbariyat" element={<Rahbariyat />} />
        <Route path="/xodimlar" element={<Xodimlar />} />
        <Route path="/bmsm_hujjatlar" element={<Bmsm_hujjatlar />} />
        <Route path="/lokal_hujjatlar" element={<Lokal_Hujjatlar />} />
        <Route path="/talim_togrisida_qonun" element={<Talim_togrisida_qonun />} />
        <Route path="/aholini_ish_bilan_taminlash" element={<Aholini_ish_bilan_taminlash />} />
        <Route path="/bola_huquqlari" element={<Bola_huquqlari />} />
        <Route path="/jismoniy_yuridik_shaxs" element={<Jismoniy_yuridik_shaxs />} />
        <Route path="/kasaba_uyushmasi" element={<Kasaba_uyushmasi />} />
        <Route path="/korrupsiyaga_qarshi_P" element={<Korrupsiyaga_qarshi_P />} />
        <Route path="/korrupsiyaga_qarshi" element={<Korrupsiyaga_qarshi />} />
        <Route path="/madaniy_faoliyat" element={<Madaniy_Faoliyat />} />
        <Route path="/yoshlargaOid" element={<YoshlargaOid />} />
        <Route path="/mehnat_muhofaza" element={<Mehnat_muhofaza />} />
        <Route path="/nogironligi_b_l_shaxs" element={<Nogironligi_b_l_shaxs />} />
        <Route path="/shaxsga_doir" element={<Shaxsga_doir />} />
        <Route path="/aktorlik_sanati" element={<Aktorlik_sanati />} />
        <Route path="/bolalarmusiqa_maktabi" element={<Bolalarmusiqa_maktabi />} />
        <Route path="/bakalavariat" element={<Bakalavariat />} />
        <Route path="/ixtisos_maktab" element={<Ixtisos_maktab />} />
        <Route path="/konservatoriya" element={<Konservatoriya />} />
        <Route path="/atestatsiya" element={<Atestatsiya />} />
        <Route path="/maktabgacha" element={<Maktabgacha />} />
        <Route path="/madaniyat_vazirligi" element={<Madaniyat_vazirligi />} />
        <Route path="/odob_axloq" element={<Odob_axloq />} />
        <Route path="/madaniyat" element={<Madaniyat />} />
        <Route path="/bolalar_musiqa" element={<Bolalar_musiqa />} />
        <Route path="/pedagogiga_yonalishi" element={<Pedagogiga_yonalishi />} />
        <Route path="/maqom_sanati" element={<Maqom_sanati />} />
        <Route path="/baxchichilik_sanati" element={<Baxchichilik_sanati />} />
        <Route path="/musiqa_maktablari" element={<Musiqa_maktablari />} />
        <Route path="/madaniyat_vazirligi_faoliyati" element={<Madaniyat_vazirligi_faoliyati />} />
        <Route path="/madaniyat_sanat_sohasi" element={<Madaniyat_sanat_sohasi />} />
        <Route path="/madaniyat_sanatni_rivojlantirish" element={<Madaniyat_sanatni_rivojlantirish />} />
        <Route path="/madaniyat_sanat_sohasi_yenada_rivojlantirish" element={<Madaniyat_sanat_sohasi_yenada_rivojlantirish />} />
        <Route path="/bmsm_xodimlari" element={<Bmsm_xodimlari />} />
        <Route path="/malaka_tavsiflari" element={<Malaka_tavsiflari />} />
        <Route path="/oquvchilar_xavfsizligi" element={<Oquvchilar_xavfsizligi />} />
        <Route path="/mehnat_muxofazasi" element={<Mehnat_muxofazasi />} />
        <Route path="/mehnatni_muhofaza_qilish" element={<Mehnatni_muhofaza_qilish />} />
        <Route path="/oquv_dasturlari" element={<Oquv_dasturlari />} />
        <Route path="/Tanlovlar" element={<Tanlovlar />} />
        <Route path="/Oquvjarayonlari_hujjatlar" element={<Oquvjarayonlari_hujjatlar />} />
        <Route path="/hujjatlar" element={<Hujjatlar />} />
        <Route path="/korrupsiya" element={<Korrupsiya />} />
        <Route path="/bmsm_pedagogik_kengash" element={<Bmsm_pedagogik_kengash />} />
        <Route path="*" element={<Error />} />
        <Route path="/davlat_ramzlari" element={<DavlatRamzlari />} />
        <Route path="/taraqqiyot_strategiya" element={<TaraqqiyotStrategiya />} />
        <Route path="/besh_tashabbus" element={<BeshTashabbus />} />
      </Routes>
    </Router>
  );
}

export default App;
