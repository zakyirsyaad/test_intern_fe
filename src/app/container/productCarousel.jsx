'use client'
import CardProduct from '@/components/cardProduct'
import React from 'react'



export default function ProductCarousel() {
    return (
        <section className='my-10'>
            <h1 className='text-center font-bold text-2xl uppercase'>featured products</h1>
            <CardProduct />
        </section>
    )
}
