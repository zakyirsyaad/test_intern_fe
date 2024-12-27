import TabHero from '@/components/TabHero'
import React from 'react'

export default function Hero() {
    return (
        <section
            style={{
                backgroundImage: 'url(/images/printer-color.jpg), linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'
            }}
            className='bg-no-repeat bg-cover bg-center bg-blend-color-burn p-3 xl:px-40 2xl:px-60 space-y-5 xl:space-y-10 flex flex-col items-center justify-center py-20'>
            <h1 className='text-white uppercase text-center font-bold text-3xl xl:text-4xl 2xl:text-5xl'>find the right cartridges for your printer</h1>
            <TabHero />
        </section>
    )
}
