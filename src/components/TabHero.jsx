'use client'
import React from 'react'

export default function TabHero() {
    const [tab, setTab] = React.useState(0);

    return (
        <section>
            <div className=' text-white font-semibold w-full grid grid-cols-2'>
                <button
                    onClick={() => setTab(0)}
                    className={` ${tab === 0 ? 'bg-[#1E88E5] h-14' : 'bg-[#EDEDED] text-black'}`}
                >
                    3-Step Easy Search
                </button>
                <button
                    onClick={() => setTab(1)}
                    className={` ${tab === 1 ? 'bg-[#1E88E5] h-14' : 'bg-[#EDEDED] text-black'}`}
                >
                    Search by Serial Number
                </button>
            </div>
            {tab === 0 && <div className='bg-white shadow-2xl p-10 grid xl:grid-cols-4 gap-3'>
                <select className='bg-[#ECECEC] w-full p-3 border shadow-lg capitalize font-medium h-12'>
                    <option>1. Printer Band</option>
                    <option>2. Printer Band</option>
                    <option>3. Printer Band</option>
                    <option>4. Printer Band</option>
                </select>

                <select className='bg-[#ECECEC] w-full p-3 border shadow-lg capitalize font-medium h-12'>
                    <option>1. Printer series</option>
                    <option>2. Printer series</option>
                    <option>3. Printer series</option>
                    <option>4. Printer series</option>
                </select>

                <select className='bg-[#ECECEC] w-full p-3 border shadow-lg capitalize font-medium h-12'>
                    <option>1. Printer model</option>
                    <option>2. Printer model</option>
                    <option>3. Printer model</option>
                    <option>4. Printer model</option>
                </select>

                <button className='bg-[#FF9815] text-white py-2 px-10 xl:px-5 shadow-md uppercase font-bold text-xl xl:text-lg'>find cartridges</button>
            </div>}
            {tab === 1 && <div className='bg-white shadow-2xl p-10 grid xl:grid-cols-2 gap-5'>
                <input type="text" placeholder='Serial Number' className='bg-[#ECECEC] w-full p-3 border shadow-lg capitalize font-medium h-12' />
                <button className='bg-[#FF9815] text-white py-2 px-10 xl:px-0 shadow-md uppercase font-bold text-xl xl:text-lg'>find cartridges</button>
            </div>}
        </section >
    )
}
