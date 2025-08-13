import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const BeshTashabbus = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-['Montserrat']">
            <Header />
            <Navbar />
            <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center text-sky-900 mb-8">
                        Yoshlar ma'naviyatini yuksaltirish va ularning bo'sh vaqtini mazmunli tashkil etish bo'yicha 5 ta muhim tashabbus
                    </h1>

                    {/* Introduction */}
                    <div className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Mamlakatimiz aholisining 30 foizini 14 yoshdan 30 yoshgacha bo'lgan yigit-qizlar tashkil etadi. Ularning ta'lim olishi, kasb-hunar egallashi uchun keng sharoit yaratilgan. Shu bilan birga, yoshlarning bo'sh vaqtlarini mazmunli o'tkazishni tashkil etish dolzarb masala hisoblanadi. Yoshlar qanchalik ma'naviy barkamol bo'lsa, turli yot illatlarga qarshi immuniteti ham shunchalik kuchli bo'ladi. Ma'lumki, davlatimiz rahbari ijtimoiy, ma'naviy-ma'rifiy sohalardagi ishlarni yangi tizim asosida yo'lga qo'yish bo'yicha 5 ta muhim tashabbusni ilgari surgan.
                            </p>
                        </div>
                    </div>

                    {/* Tashabbus 1 */}
                    <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-sky-800 text-white px-6 py-4">
                            <h2 className="text-xl font-bold">Birinchi tashabbus</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Musiqa, rassomlik, adabiyot, teatr va san'atning boshqa turlariga qiziqishlarini oshirishga, iste'dodini yuzaga chiqarishga xizmat qiladi.
                            </p>
                        </div>
                    </section>

                    {/* Tashabbus 2 */}
                    <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-sky-800 text-white px-6 py-4">
                            <h2 className="text-xl font-bold">Ikkinchi tashabbus</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Yoshlarni jismoniy chiniqtirish, ularning sport sohasida qobiliyatini namoyon qilishlari uchun zarur sharoitlar yaratishga yo'naltirilgan.
                            </p>
                        </div>
                    </section>

                    {/* Tashabbus 3 */}
                    <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-sky-800 text-white px-6 py-4">
                            <h2 className="text-xl font-bold">Uchinchi tashabbus</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Aholi va yoshlar o'rtasida kompyuter texnologiyalari va internetdan samarali foydalanishni tashkil etishga qaratilgan.
                            </p>
                        </div>
                    </section>

                    {/* Tashabbus 4 */}
                    <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-sky-800 text-white px-6 py-4">
                            <h2 className="text-xl font-bold">To'rtinchi tashabbus</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Yoshlar ma'naviyatini yuksaltirish, ular o'rtasida kitobxonlikni keng targ'ib qilish bo'yicha tizimli ishlarni tashkil etishga yo'naltirilgan.
                            </p>
                        </div>
                    </section>

                    {/* Tashabbus 5 */}
                    <section className="mb-12 bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-sky-800 text-white px-6 py-4">
                            <h2 className="text-xl font-bold">Beshinchi tashabbus</h2>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-700 leading-relaxed">
                                Xotin-qizlarni ish bilan ta'minlash masalalarini nazarda tutadi.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BeshTashabbus;