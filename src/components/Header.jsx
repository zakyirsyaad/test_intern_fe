'use client'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname();
    return (
        <header className='space-y-5 xl:space-y-10'>
            <nav className='bg-[#EEEEEE] font-bold text-sm flex flex-col gap-2 xl:flex-row p-3  xl:justify-between xl:px-40 2xl:px-60'>
                <ul className='flex gap-5'>
                    <li><Link href="#">Franchise Oppurtinies</Link></li>
                    <li><Link href="#">Help</Link></li>
                    <li><Link href="#">Feedback</Link></li>
                </ul>
                <ul className='flex gap-5'>
                    <li><Link href="#">hello@email.com</Link></li>
                    <li><Link href="#">0800 022 2 022</Link></li>
                </ul>
            </nav>
            <nav className='flex flex-col xl:flex-row justify-between gap-5 p-3 xl:px-40 2xl:px-60'>
                <div>
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={300}
                            height={50}
                            className='w-full xl:w-[500px]'
                        />
                    </Link>
                </div>
                <div className='flex items-center justify-between xl:justify-normal gap-5'>
                    <div className='flex items-center relative w-fit'>
                        <input type="text" placeholder='SEARCH' className='border border-black p-2' />
                        <Search className='absolute right-4' />
                    </div>
                    <Button>CART <span>(1)</span></Button>
                </div>
            </nav>

            <nav className='p-3 xl:px-40 2xl:px-60'>
                <ul className='uppercase grid grid-cols-2 xl:grid-cols-5 gap-3 xl:gap-0'>
                    <li className={pathname === '/' ? 'bg-[#1B7ACD] text-white place-content-center text-center h-14' : 'bg-[#1E88E5] text-white place-content-center text-center h-14'}><Link href="#">Home</Link></li>
                    <li className='bg-[#1E88E5] text-white place-content-center text-center h-14'><Link href="#">ink cartridges</Link></li>
                    <li className='bg-[#1E88E5] text-white place-content-center text-center h-14'><Link href="#">toner cartridges</Link></li>
                    <li className='bg-[#1E88E5] text-white place-content-center text-center h-14'><Link href="#">contact us</Link></li>
                    <li className='bg-[#1E88E5] text-white place-content-center text-center h-14'><Link href="#">login / register</Link></li>
                </ul>
            </nav>
        </header>
    )
}
