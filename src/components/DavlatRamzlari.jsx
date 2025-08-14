import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import gerbHeader from '../img/gerb.jpg';

const DavlatRamzlari = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />
            <Navbar />
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-12">
                        O'zbekiston Respublikasi davlat ramzlari
                    </h1>

                {/* Davlat Bayrog'i Section */}
                <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-gray-200">
                            O'zbekiston Respublikasi davlat bayrog'i
                        </h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="mb-4">
                                "O'zbekiston Respublikasi Davlat bayrog'i to'g'risida"gi qonun 1991-yil 18-noyabrda 
                                O'zbekiston Respublikasi Oliy Kengashining navbatdan tashqari o'tkazilgan VII sessiyasida qabul qilingan.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 items-center mt-8">
                                <div className="space-y-4">
                                    <div className="p-4 bg-blue-600 text-white rounded-lg shadow">
                                        <h3 className="font-semibold mb-2">Moviy rang</h3>
                                        <p className="text-sm">Tiriklik mazmuni aks etgan mangu osmon va obihayot ramzi. Timsollar tilida bu – yaxshilikni, donishmandlikni, halollikni, shon-shuhrat va sadoqatni bildiradi.</p>
                                    </div>
                                    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow">
                                        <h3 className="font-semibold mb-2">Oq rang</h3>
                                        <p className="text-sm">Muqaddas tinchlik ramzi bo'lib, u kun charog'onligi va koinot yoritqichlari bilan uyg'unlashib ketadi. Poklik, beg'uborlik, soflikni, orzu va hayollar tozaligi, ichki go'zallikka intilishning timsoli.</p>
                                    </div>
                                    <div className="p-4 bg-green-600 text-white rounded-lg shadow">
                                        <h3 className="font-semibold mb-2">Yashil rang</h3>
                                        <p className="text-sm">Tabiatning yangilanish ramzi. U ko'pgina xalqlarda navqironlik, umid va shodumonlik timsoli hisoblanadi.</p>
                                    </div>
                                    <div className="p-4 bg-red-600 text-white rounded-lg shadow">
                                        <h3 className="font-semibold mb-2">Qizil chiziqlar</h3>
                                        <p className="text-sm">Vujudimizda jo'shib oqayotgan hayotiy qudrat irmoqlarini anglatadi.</p>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <div className="aspect-w-3-aspect-h-2">
                                        <img 
                                            src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" 
                                            alt="O'zbekiston Respublikasi davlat bayrog'i" 
                                            className="w-full h-auto rounded-lg border border-gray-200"
                                        />
                                    </div>
                                    <p className="mt-4 text-sm text-gray-600 text-center">
                                        Oq rangdagi navqiron yarim oy tasviri bizning tarixiy an'analarimiz bilan bog'liq. 
                                        Ayni paytda u qo'lga kiritilgan mustaqilligimiz ramzi ham.
                                    </p>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-gray-600">
                                Davlat bayrog'imizdagi oq rangdagi o'n ikki yulduz tasvirini o'zbek xalqi madaniyati qadimiyligi, 
                                uning komillikka, o'z tuprog'ida saodatga intilishi ramzi sifatida tushunish lozim.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Davlat Gerbi Section */}
                <section className="mb-16 bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-gray-200">
                            O'zbekiston Respublikasi davlat gerbi
                        </h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="mb-6">
                                "O'zbekiston Respublikasi Davlat gerbi to'g'risida"gi Qonun 1992-yil 2-iyulda 
                                O'zbekiston Respublikasi Oliy Kengashining X sessiyasida qabul qilingan.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <p className="mb-4">
                                        O'zbekiston Respublikаsi Dаvlаt gerbi quyidаgi ko'rinishgа egа: tog'lаr, dаryolаr vа so'l tomoni bug'doy boshoqlаridаn, 
                                        o'ng tomoni esа chаnoqlаri ochilgаn g'o'zа shoxlаridаn iborаt chаmbаrgа o'rаlgаn gullаgаn vodiy uzrа quyosh zаrrin nurlаrini sochib turаdi.
                                    </p>
                                    <p>
                                        Gerbning yuqori qismidа Respublikа hurligining rаmzi sifаtidа sаkkizburchаk tаsvirlаngаn bo'lib, uning ichki qismidа yarim oy vа yulduz tаsvirlаngаn. 
                                        Gerbning mаrkаzidа bаxt vа erksevаrlik rаmzi - qаnotlаrini yozgаn Humo qushi tаsvirlаngаn. 
                                        Gerbning pаstki qismidа O'zbekiston Respublikаsi Dаvlаt bаyrog'ini ifodа etuvchi chаmbаr lentаsining bаntidа "O'zbekiston" deb yozib qo'yilgаn.
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-md">
                                    <img 
                                        src={gerbHeader} 
                                        alt="O'zbekiston Respublikasi davlat gerbi" 
                                        className="w-full max-w-xs mx-auto h-auto"
                                    />
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-gray-600">
                                O'zbekiston Respublikаsi Dаvlаt gerbining rаngli ko'rinishidа: Humo qushi vа dаryolаr - kumush rаngidа; quyosh, boshoqlаr, pаxtа chаnoqlаri vа "O'zbekiston" yozuvi - oltin rаngidа; 
                                g'o'zа shoxlаri vа bаrglаri, tog'lаr vаvodiy - yashil rаngdа; chаnoqlаrdаgi pаxtа - oq rаngdа; lentа - O'zbekiston Respublikаsi Dаvlаt bаyrog'ining rаnglаrini аks ettiruvchi uch xil rаngdа; 
                                sаkkizburchаk - oltin zаrhаl bilаn hoshiyalаngаn holdа hаvo rаngdа; yarim oy vа yulduzlаr — oq rаngdа tаsvirlаngаn.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Davlat Madhiyasi Section */}
                <section className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6 md:p-8">
                        <h2 className="text-2xl font-bold text-sky-800 mb-6 pb-2 border-b border-gray-200">
                            O'zbekiston Respublikasi davlat madhiyasi
                        </h2>
                        <div className="prose max-w-none text-gray-700">
                            <p className="text-sm text-gray-500 italic mb-6">
                                Abdulla Oripov so'zi | Mutal Burhonov musiqasi
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-medium">
                                        Serquyosh hur o'lakm, elga baxt, najot,<br />
                                        Sen o'zing do'stlarga yo'ldosh, mehribon!<br />
                                        Yashnagay to abad ilmu fan, ijod,<br />
                                        Shuhrating porlasin toki bor jahon!
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Naqorat:
                                    </p>
                                    <p className="font-medium">
                                        Oltin bu vodiylar - jon O'zbekiston,<br />
                                        Ajdodlar mardona ruhi senga yor!<br />
                                        Ulug' xalq qudrati jo'sh urgan zamon,<br />
                                        Olamni mahliyo aylagan diyor!
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium">
                                        Bag'ri keng o'zbekning o'chmas iymoni,<br />
                                        Erkin, yosh avlodlar senga zo'r qanot!<br />
                                        Istiqlol mash'ali tinchlik posboni,<br />
                                        Xaqsevar, ona yurt, mangu bo'l obod!
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Naqorat:
                                    </p>
                                    <p className="font-medium">
                                        Oltin bu vodiylar - jon O'zbekiston,<br />
                                        Ajdodlar mardona ruhi senga yor!<br />
                                        Ulug' xalq qudrati jo'sh urgan zamon,<br />
                                        Olamni mahliyo aylagan diyor!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
            </div> {/* Close max-w-4xl mx-auto */}
        </main>
        <Footer />
    </div>
    );
};

export default DavlatRamzlari;
