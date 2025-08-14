import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Konstitutsiya from './pages/Konstitutsiya';
import Kodeks from './pages/Kodeks'; 
import Error from './pages/Error';
import Asosiy from './pages/Asosiy';
import Parent from './pages/Parent';
import MaktabKorsatkichlari from './pages/MaktabKorsatkichlari';
import SavolJavob from './pages/SavolJavob';
import Vazir from './pages/Vazir';
import PrezidentFarmonlari from './pages/PrezidentFarmonlari';
import VazirBuyruqlari from './pages/VazirBuyruqlari';
import AdliyaHujjatlar from './pages/AdliyaHujjatlar';
import Rahbariyat from './pages/Rahbariyat';
import Xodimlar from './pages/Xodimlar';
import BmsmHujjatlar from './pages/BmsmHujjatlar';
import LokalHujjatlar from './pages/LokalHujjatlar';
import TalimTogrisidaQonun from './pages/TalimTogrisidaQonun';
import AholiniIshBilanTaminlash from './pages/AholiniIshBilanTaminlash';
import BolaHuquqlari from './pages/BolaHuquqlari';
import JismoniyYuridikShaxs from './pages/JismoniyYuridikShaxs'; 
import KasabaUyushmasi from './pages/KasabaUyushmasi';
import MadaniyFaoliyat from './pages/MadaniyFaoliyat';
import YoshlargaOid from './pages/YoshlargaOid';
import MehnatMuhofaza from './pages/MehnatMuhofaza';
import NogironligiBLShaxs from './pages/NogironligiBLShaxs';
import ShaxsgaDoir from './pages/ShaxsgaDoir';
import AktorlikSanati from './pages/Vazirlar mahkamasi qarori/Aktorlik_sanati';
import BolalarMusiqaMaktabi from './pages/Vazirlar mahkamasi qarori/Bolalarmusiqa_maktabi';
import Bakalavariat from './pages/Vazirlar mahkamasi qarori/Bakalavariat';
import IxtisosMaktab from './pages/Vazirlar mahkamasi qarori/Ixtisos_maktab'
import Konservatoriya from './pages/Vazirlar mahkamasi qarori/Konservatoriya'
import Atestatsiya from './pages/Vazirlar mahkamasi qarori/Atestatsiya'
import Maktabgacha from './pages/Vazirlar mahkamasi qarori/Maktabgacha'
import MadaniyatVazirligi from './pages/Vazirlar mahkamasi qarori/Madaniyat_vazirligi'
import OdobAxloq from './pages/Vazirlar mahkamasi qarori/Odob_axloq'
import Madaniyat from './pages/Vazirlar mahkamasi qarori/Madaniyat'
import BolalarMusiqa from './pages/Prezidentning farmonlari va qarorlari/Bolalar_musiqa'
import PedagogigaYonalishi from './pages/Prezidentning farmonlari va qarorlari/Pedagogiga_yonalishi'
import MaqomSanati from './pages/Prezidentning farmonlari va qarorlari/Maqom_sanati'
import BaxchichilikSanati from './pages/Prezidentning farmonlari va qarorlari/Baxchichilik_sanati'
import KorrupsiyagaQarshiP from './pages/Prezidentning farmonlari va qarorlari/Korrupsiyaga_qarshi_P'
import KorrupsiyagaQarshi from './pages/Korrupsiyaga_qarshi'
import MusiqaMaktablari from './pages/Prezidentning farmonlari va qarorlari/Musiqa_maktablari'
import MadaniyatVazirligiFaoliyati from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_vazirligi_faoliyati'
import MadaniyatSanatSohasi from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanat_sohasi'
import MadaniyatSanatniRivojlantirish from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanatni_rivojlantirish'
import MadaniyatSanatSohasiYenadaRivojlantirish from './pages/Prezidentning farmonlari va qarorlari/Madaniyat_sanat_sohasi_yenada_rivojlantirish'
import BmsmXodimlari from './pages/Bmsm_xodimlari'
import MalakaTavsiflari from './pages/Malaka_tavsiflari'
import OquvchilarXavfsizligi from './pages/Oquvchilar_xavfsizligi'
import MehnatMuxofazasi from './pages/Mehnat_muxofazasi'
import MehnatniMuhofazaQilish from './pages/Mehnatni_Muhofaza_qilish'
import OquvDasturlari from './pages/Oquv_dasturlari'
import Tanlovlar from './pages/Tanlovlar'
import OquvjarayonlariHujjatlar from './pages/Oquvjarayonlari_hujjatlar'
import Hujjatlar from './pages/Hujjatlar'
import Korrupsiya from './pages/Korrupsiya'
import BmsmPedagogikKengash from './pages/Bmsm_pedagogik_kengash'
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
        <Route path="/prezident_farmonlari" element={<PrezidentFarmonlari />} />
        <Route path="/vazir_buyruqlari" element={<VazirBuyruqlari />} />
        <Route path="/adliya_hujjatlar" element={<AdliyaHujjatlar />} />
        <Route path="/rahbariyat" element={<Rahbariyat />} />
        <Route path="/xodimlar" element={<Xodimlar />} />
        <Route path="/bmsm_hujjatlar" element={<BmsmHujjatlar />} />
        <Route path="/lokal_hujjatlar" element={<LokalHujjatlar />} />
        <Route path="/talim_togrisida_qonun" element={<TalimTogrisidaQonun />} />
        <Route path="/aholini_ish_bilan_taminlash" element={<AholiniIshBilanTaminlash />} />
        <Route path="/bola_huquqlari" element={<BolaHuquqlari />} />
        <Route path="/jismoniy_yuridik_shaxs" element={<JismoniyYuridikShaxs />} />
        <Route path="/kasaba_uyushmasi" element={<KasabaUyushmasi />} />
        <Route path="/korrupsiyaga_qarshi_P" element={<KorrupsiyagaQarshiP />} />
        <Route path="/korrupsiyaga_qarshi" element={<KorrupsiyagaQarshi />} />
        <Route path="/madaniy_faoliyat" element={<MadaniyFaoliyat />} />
        <Route path="/yoshlargaOid" element={<YoshlargaOid />} />
        <Route path="/mehnat_muhofaza" element={<MehnatMuhofaza />} />
        <Route path="/nogironligi_b_l_shaxs" element={<NogironligiBLShaxs />} />
        <Route path="/shaxsga_doir" element={<ShaxsgaDoir />} />
        <Route path="/aktorlik_sanati" element={<AktorlikSanati />} />
        <Route path="/bolalarmusiqa_maktabi" element={<BolalarMusiqaMaktabi />} />
        <Route path="/bakalavariat" element={<Bakalavariat />} />
        <Route path="/ixtisos_maktab" element={<IxtisosMaktab />} />
        <Route path="/konservatoriya" element={<Konservatoriya />} />
        <Route path="/atestatsiya" element={<Atestatsiya />} />
        <Route path="/maktabgacha" element={<Maktabgacha />} />
        <Route path="/madaniyat_vazirligi" element={<MadaniyatVazirligi />} />
        <Route path="/odob_axloq" element={<OdobAxloq />} />
        <Route path="/madaniyat" element={<Madaniyat />} />
        <Route path="/bolalar_musiqa" element={<BolalarMusiqa />} />
        <Route path="/pedagogiga_yonalishi" element={<PedagogigaYonalishi />} />
        <Route path="/maqom_sanati" element={<MaqomSanati />} />
        <Route path="/baxchichilik_sanati" element={<BaxchichilikSanati />} />
        <Route path="/musiqa_maktablari" element={<MusiqaMaktablari />} />
        <Route path="/madaniyat_vazirligi_faoliyati" element={<MadaniyatVazirligiFaoliyati />} />
        <Route path="/madaniyat_sanat_sohasi" element={<MadaniyatSanatSohasi />} />
        <Route path="/madaniyat_sanatni_rivojlantirish" element={<MadaniyatSanatniRivojlantirish />} />
        <Route path="/madaniyat_sanat_sohasi_yenada_rivojlantirish" element={<MadaniyatSanatSohasiYenadaRivojlantirish />} />
        <Route path="/bmsm_xodimlari" element={<BmsmXodimlari />} />
        <Route path="/malaka_tavsiflari" element={<MalakaTavsiflari />} />
        <Route path="/oquvchilar_xavfsizligi" element={<OquvchilarXavfsizligi />} />
        <Route path="/mehnat_muxofazasi" element={<MehnatMuxofazasi />} />
        <Route path="/mehnatni_muhofaza_qilish" element={<MehnatniMuhofazaQilish />} />
        <Route path="/oquv_dasturlari" element={<OquvDasturlari />} />
        <Route path="/Tanlovlar" element={<Tanlovlar />} />
        <Route path="/Oquvjarayonlari_hujjatlar" element={<OquvjarayonlariHujjatlar />} />
        <Route path="/hujjatlar" element={<Hujjatlar />} />
        <Route path="/korrupsiya" element={<Korrupsiya />} />
        <Route path="/bmsm_pedagogik_kengash" element={<BmsmPedagogikKengash />} />
        <Route path="*" element={<Error />} />
        <Route path="/davlat_ramzlari" element={<DavlatRamzlari />} />
        <Route path="/taraqqiyot_strategiya" element={<TaraqqiyotStrategiya />} />
        <Route path="/besh_tashabbus" element={<BeshTashabbus />} />
        <Route path="/bmsm_xodimlari" element={<BmsmXodimlari />} />
      </Routes>
    </Router>
  );
}

export default App;
