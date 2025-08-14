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
import AktorlikSanati from './pages/Vazirlar mahkamasi qarori/AktorlikSanati';
import BolalarMusiqaMaktabi from './pages/Vazirlar mahkamasi qarori/BolalarmusiqaMaktabi';
import Bakalavariat from './pages/Vazirlar mahkamasi qarori/Bakalavariat';
import IxtisosMaktab from './pages/Vazirlar mahkamasi qarori/IxtisosMaktab'
import Konservatoriya from './pages/Vazirlar mahkamasi qarori/Konservatoriya'
import Atestatsiya from './pages/Vazirlar mahkamasi qarori/Atestatsiya'
import Maktabgacha from './pages/Vazirlar mahkamasi qarori/Maktabgacha'
import MadaniyatVazirligi from './pages/Vazirlar mahkamasi qarori/MadaniyatVazirligi'
import OdobAxloq from './pages/Vazirlar mahkamasi qarori/OdobAxloq'
import Madaniyat from './pages/Vazirlar mahkamasi qarori/Madaniyat'
import BolalarMusiqa from './pages/Prezidentning farmonlari va qarorlari/BolalarMusiqa'
import PedagogigaYonalishi from './pages/Prezidentning farmonlari va qarorlari/PedagogigaYonalishi'
import MaqomSanati from './pages/Prezidentning farmonlari va qarorlari/MaqomSanati'
import BaxchichilikSanati from './pages/Prezidentning farmonlari va qarorlari/BaxchichilikSanati'
import KorrupsiyagaQarshiP from './pages/Prezidentning farmonlari va qarorlari/KorrupsiyagaQarshiP'
import KorrupsiyagaQarshi from './pages/KorrupsiyagaQarshi'
import MusiqaMaktablari from './pages/Prezidentning farmonlari va qarorlari/MusiqaMaktablari'
import MadaniyatVazirligiFaoliyati from './pages/Prezidentning farmonlari va qarorlari/MadaniyatVazirligiFaoliyati'
import MadaniyatSanatSohasi from './pages/Prezidentning farmonlari va qarorlari/MadaniyatSanatSohasi'
import MadaniyatSanatniRivojlantirish from './pages/Prezidentning farmonlari va qarorlari/MadaniyatSanatniRivojlantirish'
import MadaniyatSanatSohasiYenadaRivojlantirish from './pages/Prezidentning farmonlari va qarorlari/MadaniyatSanatSohasiYenadaRivojlantirish'
import BmsmXodimlari from './pages/BmsmXodimlari'
import MalakaTavsiflari from './pages/MalakaTavsiflari'
import OquvchilarXavfsizligi from './pages/OquvchilarXavfsizligi'
import MehnatMuxofazasi from './pages/MehnatMuxofazasi'
import MehnatniMuhofazaQilish from './pages/MehnatniMuhofazaQilish'
import OquvDasturlari from './pages/OquvDasturlari'
import Tanlovlar from './pages/Tanlovlar'
import OquvjarayonlariHujjatlar from './pages/OquvjarayonlariHujjatlar'
import Hujjatlar from './pages/Hujjatlar'
import Korrupsiya from './pages/Korrupsiya'
import BmsmPedagogikKengash from './pages/BmsmPedagogikKengash'
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
        <Route path="/maktabKorsatkichlari" element={<MaktabKorsatkichlari />} />
        <Route path="/savolJavob" element={<SavolJavob />} />
        <Route path="/vazir" element={<Vazir />} />
        <Route path="/prezidentFarmonlari" element={<PrezidentFarmonlari />} />
        <Route path="/vazirBuyruqlari" element={<VazirBuyruqlari />} />
        <Route path="/adliyaHujjatlar" element={<AdliyaHujjatlar />} />
        <Route path="/rahbariyat" element={<Rahbariyat />} />
        <Route path="/xodimlar" element={<Xodimlar />} />
        <Route path="/bmsmHujjatlar" element={<BmsmHujjatlar />} />
        <Route path="/lokalHujjatlar" element={<LokalHujjatlar />} />
        <Route path="/talimTogrisidaQonun" element={<TalimTogrisidaQonun />} />
        <Route path="/aholiniIshBilanTaminlash" element={<AholiniIshBilanTaminlash />} />
        <Route path="/bolaHuquqlari" element={<BolaHuquqlari />} />
        <Route path="/jismoniyYuridikShaxs" element={<JismoniyYuridikShaxs />} />
        <Route path="/kasabaUyushmasi" element={<KasabaUyushmasi />} />
        <Route path="/korrupsiyagaQarshiP" element={<KorrupsiyagaQarshiP />} />
        <Route path="/korrupsiyagaQarshi" element={<KorrupsiyagaQarshi />} />
        <Route path="/madaniyFaoliyat" element={<MadaniyFaoliyat />} />
        <Route path="/yoshlargaOid" element={<YoshlargaOid />} />
        <Route path="/mehnatMuhofaza" element={<MehnatMuhofaza />} />
        <Route path="/nogironligiBLShaxs" element={<NogironligiBLShaxs />} />
        <Route path="/shaxsgaDoir" element={<ShaxsgaDoir />} />
        <Route path="/aktorlikSanati" element={<AktorlikSanati />} />
        <Route path="/bolalarmusiqaMaktabi" element={<BolalarMusiqaMaktabi />} />
        <Route path="/bakalavariat" element={<Bakalavariat />} />
        <Route path="/ixtisosMaktab" element={<IxtisosMaktab />} />
        <Route path="/konservatoriya" element={<Konservatoriya />} />
        <Route path="/atestatsiya" element={<Atestatsiya />} />
        <Route path="/maktabgacha" element={<Maktabgacha />} />
        <Route path="/madaniyatVazirligi" element={<MadaniyatVazirligi />} />
        <Route path="/odobAxloq" element={<OdobAxloq />} />
        <Route path="/madaniyat" element={<Madaniyat />} />
        <Route path="/bolalarMusiqa" element={<BolalarMusiqa />} />
        <Route path="/pedagogigaYonalishi" element={<PedagogigaYonalishi />} />
        <Route path="/maqomSanati" element={<MaqomSanati />} />
        <Route path="/baxchichilikSanati" element={<BaxchichilikSanati />} />
        <Route path="/musiqaMaktablari" element={<MusiqaMaktablari />} />
        <Route path="/madaniyatVazirligiFaoliyati" element={<MadaniyatVazirligiFaoliyati />} />
        <Route path="/madaniyatSanatSohasi" element={<MadaniyatSanatSohasi />} />
        <Route path="/madaniyatSanatniRivojlantirish" element={<MadaniyatSanatniRivojlantirish />} />
        <Route path="/madaniyatSanatSohasiYenadaRivojlantirish" element={<MadaniyatSanatSohasiYenadaRivojlantirish />} />
        <Route path="/bmsmXodimlari" element={<BmsmXodimlari />} />
        <Route path="/malakaTavsiflari" element={<MalakaTavsiflari />} />
        <Route path="/oquvchilarXavfsizligi" element={<OquvchilarXavfsizligi />} />
        <Route path="/mehnatMuxofazasi" element={<MehnatMuxofazasi />} />
        <Route path="/mehnatniMuhofazaQilish" element={<MehnatniMuhofazaQilish />} />
        <Route path="/oquvDasturlari" element={<OquvDasturlari />} />
        <Route path="/Tanlovlar" element={<Tanlovlar />} />
        <Route path="/OquvjarayonlariHujjatlar" element={<OquvjarayonlariHujjatlar />} />
        <Route path="/hujjatlar" element={<Hujjatlar />} />
        <Route path="/korrupsiya" element={<Korrupsiya />} />
        <Route path="/bmsmPedagogikKengash" element={<BmsmPedagogikKengash />} />
        <Route path="*" element={<Error />} />
        <Route path="/davlatRamzlari" element={<DavlatRamzlari />} />
        <Route path="/taraqqiyotStrategiya" element={<TaraqqiyotStrategiya />} />
        <Route path="/beshTashabbus" element={<BeshTashabbus />} />
        <Route path="/bmsmXodimlari" element={<BmsmXodimlari />} />
      </Routes>
    </Router>
  );
}

export default App;
