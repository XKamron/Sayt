import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Numbers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                type: 'spring',
                stiffness: 100,
                damping: 12
            } 
        }
    };

    const stats = [
        { 
            id: 1, 
            label: "Maktab tashkil etilgan yil", 
            value: "1970",
        },
        { 
            id: 2, 
            label: "O'quvchilar soni", 
            value: "228",
        },
        { 
            id: 3, 
            label: "Pedagoglar soni", 
            value: "28",
        },
        { 
            id: 4, 
            label: "Yo'nalishlar soni", 
            value: "9",
        }
    ];

    return (
        <motion.section 
            ref={ref}
            className='bg-gradient-to-b from-[#FFF6EB] to-[#f8f0e6] font-["Montserrat"] py-12 sm:py-16 md:py-20 overflow-hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className='container mx-auto px-4 sm:px-6 max-w-7xl'>
                <motion.div 
                    className='text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20'
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <span className='inline-block text-sm sm:text-base text-[#76B1E8] font-semibold tracking-wide uppercase mb-2'>
                    Maktab faoliyati
                    </span>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00486C] leading-tight'>
                    Maktab ko‘rsatkichlari
                    </h2>
                </motion.div>

                <motion.div 
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'
                    variants={container}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                >
                    {stats.map((stat) => (
                        <motion.div 
                            key={stat.id} 
                            className='group bg-white rounded-xl shadow-sm p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
                            variants={item}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className='text-center'>
                                <h3 className='text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#00486C] mb-2'>
                                    {stat.value}
                                </h3>
                                <p className='text-sm sm:text-base text-[#4a6c80] font-medium'>
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Numbers;