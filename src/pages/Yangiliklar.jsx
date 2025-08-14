import { useState } from 'react';
import { news_2 } from '../img'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Pagination = ({ totalItems, itemsPerPage, currentPage, onChangePage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleClick = (pageNumber) => {
        onChangePage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <span
                    key={i}
                    className={`mx-2 sm:mx-4 cursor-pointer ${currentPage === i ? "text-sky-600 text-[25px] font-medium font-['Montserrat']" : "text-sky-900 text-[25px] font-medium font-['Montserrat']"
                        }`}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </span>
            );
        }
        return pages;
    };

    return (
        <div className="flex justify-center mt-4">
            {renderPageNumbers()}
        </div>
    );
};


const Yangiliklar = () => {
    const [selectedPage, setSelectedPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setSelectedPage(pageNumber);
    };


    return (
        <div>
            <Header />
            <Navbar />
            <div className='mx-[5rem] my-[2rem]'>
                <div className="block md:flex justify-between items-center py-10 text-sky-900 text-[25px] font-medium font-['Montserrat']">
                    <span className=''>Bosh sahifa / ...</span>
                    <span>So’nngi yangiliklar</span>
                </div>

                {selectedPage === 1 && (
                    <div className='block md:flex my-[2rem]'>
                        <div className='w-full md:w-[70%] mr-0 md:mr-10'>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative col-span-1 ">
                                    <img
                                        src={news_2}
                                        alt=""
                                        class="w-full h-full rounded-[20px]"
                                    />
                                    <div class="absolute bottom-0 w-full h-full bg-gradient rounded-[20px]">
                                        <div class="absolute bottom-0 text-white font-['Montserrat'] p-5">
                                            <span class="text-[10px] font-medium lg:text-base">2023-11-12</span>
                                            <p class="text-[11px] font-semibold lg:text-lg">
                                                Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[30%] news-left mt-5 md:mt-0'>
                            <div class='space-y-4'>
                                <div class="bg-cyan-50 bg-opacity-50 rounded-lg font-['Montserrat'] p-5">
                                    <span class="text-blue-500 text-sm lg:text-base font-medium">
                                        2023-11-12
                                    </span>
                                    <p class="text-blue-950 text-xl lg:text-2xl font-semibold">
                                        Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                    </p>
                                </div>
                                <div class="bg-cyan-50 bg-opacity-50 rounded-lg font-['Montserrat'] p-5">
                                    <span class="text-blue-500 text-sm lg:text-base font-medium">
                                        2023-11-12
                                    </span>
                                    <p class="text-blue-950 text-xl lg:text-2xl font-semibold">
                                        Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                    </p>
                                </div>
                                <div class="bg-cyan-50 bg-opacity-50 rounded-lg font-['Montserrat'] p-5">
                                    <span class="text-blue-500 text-sm lg:text-base font-medium">
                                        2023-11-12
                                    </span>
                                    <p class="text-blue-950 text-xl lg:text-2xl font-semibold">
                                        Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                    </p>
                                </div>
                                <div class="bg-cyan-50 bg-opacity-50 rounded-lg font-['Montserrat'] p-5">
                                    <span class="text-blue-500 text-sm lg:text-base font-medium">
                                        2023-11-12
                                    </span>
                                    <p class="text-blue-950 text-xl lg:text-2xl font-semibold">
                                        Shofirkon: Quyi Chuqurakda bir kunda 500 tup manzarali.....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedPage === 2 && (
                    <div className='text-center mt-4 text-gray-500'>Assalamu alaykum</div>
                )}
            </div>
            <Pagination totalItems={11} itemsPerPage={1} currentPage={selectedPage} onChangePage={handlePageChange} />
            <Footer />
        </div>
    )
}

export default Yangiliklar