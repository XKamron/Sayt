import React from 'react'
import { myGov } from '../img/index'

const UsefulLinks = () => {
  return (
    <div>
        <div className='mx-[3rem] lg:mx-[5rem] my-10'>
                <p className="text-[#00486C] text-[20px] text-center font-bold font-['Montserrat']">Maktabda faoliyat ko‘rsatayotgan bo‘limlar</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5">
                    <div className="bg-cyan-50 rounded-[15px] flex items-center justify-center p-4">
                        <img src={myGov} alt="" className='max-w-full max-h-full' />
                    </div>
                    <div className="bg-cyan-50 rounded-[15px] flex items-center justify-center p-4">
                        <img src={myGov} alt="" className='max-w-full max-h-full' />
                    </div>
                    <div className="bg-cyan-50 rounded-[15px] flex items-center justify-center p-4">
                        <img src={myGov} alt="" className='max-w-full max-h-full' />
                    </div>
                    <div className="bg-cyan-50 rounded-[15px] flex items-center justify-center p-4">
                        <img src={myGov} alt="" className='max-w-full max-h-full' />
                    </div>
                    <div className="bg-cyan-50 rounded-[15px] flex items-center justify-center p-4">
                        <img src={myGov} alt="" className='max-w-full max-h-full' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default UsefulLinks;