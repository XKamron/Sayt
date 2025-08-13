import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Oquv_dasturlari = () => {
  const pdfCategories = [
    {
      title: "Fortepiano yo‘nalishi",
      files: [
        { name: "Umumiy fortepiano bo‘yicha o‘quv dasturi", file: "/files/Dastur_Fortepiano_umumiy.pdf" },
        { name: "Maxsus fortepiano bo‘yicha o‘quv dasturi", file: "/files/Dastur_Fortepiano_maxsus.pdf" },
        { name: "Notani varaqdan o‘qish bo‘yicha o‘quv dasturi", file: "/files/Dastur_Fortepiano_Notani_varaqdan_uqish.pdf" },
        { name: "Fortepiano ansambli o‘quv dasturi", file: "/files/Dastur_Fortepiano_ansambl.pdf" },
        { name: "Jo‘rnavozlik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Fortepiano_akkomponoment.pdf" },
      ]
    },
    {
      title: "O‘zbek xalq cholg‘ulari yo‘nalishi",
      files: [
        { name: "Afg‘on rubobi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Afgon_rubobi.pdf" },
        { name: "Chang bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Chang.pdf" },
        { name: "Doira va zarbli cholg‘lar bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Doira_va_zarbli_cholgular.pdf" },
        { name: "Dutor bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Dutor.pdf" },
        { name: "Dutor bas bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Dutor_bas.pdf" },
        { name: "G‘ijjak bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Gijjak.pdf" },
        { name: "Nay bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Nay.pdf" },
        { name: "Qashqar rubobi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Qashqar_rubobi.pdf" },
        { name: "Qo‘shnay bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Qushnay.pdf" },
        { name: "Rubob prima bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Rubob_prima.pdf" },
        { name: "Gitara bo‘yicha o‘quv dasturi", file: "/files/Dastur_gitara.pdf" },
      ]
    },
    {
      title: "Xalq cholg‘ulari yo‘nalishi",
      files: [
        { name: "Akkordeon bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Akkordeon.pdf" },
        { name: "Bayan bo‘yicha o‘quv dasturi", file: "/files/Dastur_Xalq_Bayan.pdf" },
        { name: "6 torli gitara bo‘yicha o‘quv dasturi", file: "/files/Dastur_gitara.pdf" },
      ]
    },
    {
      title: "An’anaviy ijrochilik yo‘nalishi",
      files: [
        { name: "An’anaviy doira bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_doira.pdf" },
        { name: "An’anaviy dutor bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_dutor.pdf" },
        { name: "An’anaviy nay bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_nay.pdf" },
        { name: "An’anaviy qashqar rubobi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_qashqar_rubobi.pdf" },
        { name: "An’anaviy tanbur bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_tanbur.pdf" },
        { name: "An’anaviy ud bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_ud.pdf" },
        { name: "An’anaviy g‘ijjak bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_gijjak.pdf" },
        { name: "An’anaviy chang va qonun bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_chang_qonun.pdf" },
        { name: "Tanlangan cholg‘u bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_ijrochilik_tanlangan_cholgu.pdf" },
      ]
    },
    {
      title: "Torli cholg‘ular yo‘nalishi",
      files: [
        { name: "Skripka bo‘yicha o‘quv dasturi", file: "/files/Dastur_torli_skripka.pdf" },
        { name: "Alt bo‘yicha o‘quv dasturi", file: "/files/Dastur_torli_alt.pdf" },
        { name: "Violonchel bo‘yicha o‘quv dasturi", file: "/files/Dastur_torli_violonchel.pdf" },
      ]
    },
    {
      title: "Damli va zarbli cholg‘ular yo‘nalishi",
      files: [
        { name: "Fleyta bo‘yicha o‘quv dasturi", file: "/files/Dastur_Damli_Fleyta.pdf" },
        { name: "Klarnet bo‘yicha o‘quv dasturi", file: "/files/Dastur_Damli_Klarnet.pdf" },
        { name: "Truba bo‘yicha o‘quv dasturi", file: "/files/Dastur_Damli_Truba.pdf" },
        { name: "Saksofon bo‘yicha o‘quv dasturi", file: "/files/Dastur_Damli_Saksofon.pdf" },
        { name: "Ksilofon, marimba va kichik baraban bo‘yicha o‘quv dasturi", file: "/files/Dastur_Damli_Ksilofon.pdf" },
      ]
    },
    {
      title: "An’anaviy qo‘shiqchilik yo‘nalishi",
      files: [
        { name: "An’anaviy xonandalik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_xonandalik.pdf" },
        { name: "Jamoa ijrochiligi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_xonandalik_jamoa_ijrochiligi.pdf" },
        { name: "Xonandalar ansambli bo‘yicha o‘quv dasturi", file: "/files/Dastur_Ananaviy_xonandalik_xonandalar_ansambli.pdf" },
      ]
    },
    {
      title: "Vokal yo‘nalishi",
      files: [
        { name: "Akademik vokal bo‘yicha o‘quv dasturi", file: "/files/Dastur_akademik_vokal.pdf" },
        { name: "Estrada xonandaligi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Estrada_xonandaligi.pdf" },
        { name: "Ovoz qo‘yish bo‘yicha o‘quv dasturi", file: "/files/Dastur_Estrada_vokal.pdf" },
      ]
    },
    {
      title: "Amaliy san’at yo‘nalishi",
      files: [
        { name: "Ganch o‘ymakorligi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Amaliy_sanat_ganch_uymakorligi.pdf" },
        { name: "Kashtachilik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Amaliy_sanat_kashtachilik.pdf" },
        { name: "Naqqoshlik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Amaliy_sanat_naqqoshlik.pdf" },
        { name: "Yog‘och o‘ymakorligi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Amaliy_sanat_yogoch_uymakorligi.pdf" },
        { name: "Zardo‘zlik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Amaliy_sanat_zarduzlik.pdf" },
      ]
    },
    {
      title: "Xoreografiya yo‘nalishi",
      files: [
        { name: "O‘zbekcha raqs bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_uzbekcha_raqs.pdf" },
        { name: "Zamonaviy raqs bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_zamonaviy_raqs.pdf" },
        { name: "Tarixiy-sahna raqs bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_tarixiy-sahna_raqsi.pdf" },
        { name: "Tarixiy-maishiy raqs bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_tarixiy_maishiy.pdf" },
        { name: "Klassik raqs bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_klassik_raqs_tarixi.pdf" },
        { name: "Ritmika va parter bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_ritmika_va_parter.pdf" },
        { name: "Balet va o‘zbek raqs tarixi bo‘yicha o‘quv dasturi", file: "/files/Dastur_xoreog_balet_va_uzb_raqs_tarixi.pdf" },
        { name: "Klassik raqs, o‘zbek raqsi, xalq-sahna raqsi predmetidan dasturiy reja", file: "/files/Dastur_xoreog_dasturiy_reja.pdf" },
      ]
    },
    {
      title: "Teatr san’ati yo‘nalishi",
      files: [
        { name: "Aktyorlik mahorati bo‘yicha o‘quv dasturi", file: "/files/Dastur_Teatr_aktyorlik_mahorati.pdf" },
        { name: "Sahna harakati bo‘yicha o‘quv dasturi", file: "/files/Dastur_Teatr_sahna_harakati.pdf" },
        { name: "Sahna nutqi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Teatr_sahna_nutqi.pdf" },
      ]
    },
    {
      title: "Tasviriy san’at yo‘nalishi",
      files: [
        { name: "Qalamtasvir bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_qalamtasvir.pdf" },
        { name: "Rangtasvir bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_rangtasvir.pdf" },
        { name: "Kompozitsiya bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_kompozitsiya.pdf" },
        { name: "Haykaltaroshlik bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_haykaltaroshlik.pdf" },
        { name: "Tasviriy san’at tarixi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_tarixi.pdf" },
        { name: "Kompyuter grafikasi bo‘yicha o‘quv dasturi", file: "/files/Dastur_Tasviriy_sanat_kompyuter_grafikasi.pdf" },
      ]
    },
    {
      title: "Musiqa nazariyasi bo‘limi",
      files: [
        { name: "Solfedjio bo‘yicha o‘quv dasturi", file: "/files/Dastur_Solfedjio_uzbek.pdf" },
        { name: "Musiqa adabiyoti bo‘yicha o‘quv dasturi (o‘zbek tilida)", file: "/files/Dastur_musiqa_adabiyoti_uzbek.pdf" },
        { name: "Musiqa adabiyoti bo‘yicha o‘quv dasturi (rus tilida)", file: "/files/Dastur_musiqa_adabiyoti_rus.pdf" },
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-['Montserrat', 'sans-serif']">
      <Header />
      <Navbar />

      <main className="flex-grow py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {/* Page Header */}
          <section className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-900 mb-3">
              O'quv Dasturlari
            </h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
              Maktabimizda amal qilayotgan barcha yo'nalishlar bo'yicha o'quv dasturlari
            </p>
          </section>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pdfCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-sky-50 p-2.5 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-sky-900">
                      {category.title}
                    </h2>
                  </div>
                  
                  <ul className="space-y-2.5">
                    {category.files.map((pdf, idx) => (
                      <li key={idx} className="group">
                        <a
                          href={pdf.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start text-sm sm:text-base text-gray-700 hover:text-sky-600 transition-colors duration-200"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-sky-400 rounded-full mt-2.5 mr-2"></span>
                          <span className="leading-relaxed">{pdf.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
               
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Oquv_dasturlari;
