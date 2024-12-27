import Image from 'next/image'
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
    {
        id: 1,
        name: 'hp 62 black ink cartridge',
        code: 'HPC2P04AE',
        image: 'https://m.media-amazon.com/images/I/71iLIu8N7OS._AC_SL1500_.jpg',
        price: 9.49,
        discount: 0,
    },
    {
        id: 2,
        name: 'canon mf-3110 toner',
        code: 'C2P04AE',
        image: 'https://m.media-amazon.com/images/I/41s+1MhBO5L._AC_.jpg',
        price: 36.45,
        discount: 0,
    }, {
        id: 3,
        name: 'hp 62 black ink cartridge',
        code: 'HPC2P04AE',
        image: 'https://m.media-amazon.com/images/I/71iLIu8N7OS._AC_SL1500_.jpg',
        price: 9.49,
        discount: 36.89,
    },
    {
        id: 4,
        name: 'canon mf-3110 toner',
        code: 'C2P04AE',
        image: 'https://m.media-amazon.com/images/I/41s+1MhBO5L._AC_.jpg',
        price: 36.45,
        discount: 0,
    }, {
        id: 5,
        name: 'hp 62 black ink cartridge',
        code: 'HPC2P04AE',
        image: 'https://m.media-amazon.com/images/I/71iLIu8N7OS._AC_SL1500_.jpg',
        price: 9.49,
        discount: 0,
    },
    {
        id: 6,
        name: 'canon mf-3110 toner',
        code: 'C2P04AE',
        image: 'https://m.media-amazon.com/images/I/41s+1MhBO5L._AC_.jpg',
        price: 36.45,
        discount: 0,
    },
]

export default function CardProduct() {
    return (
        <div className=' p-3 xl:px-40 2xl:px-60'>
            <Carousel opts={{ loop: true }} className="">
                <CarouselContent className="p-5">
                    {products.map((product) => (
                        <CarouselItem key={product.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                            <div className="bg-white p-4 rounded-lg shadow-lg border h-full space-y-3">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="w-full aspect-square object-cover rounded-lg border p-5"
                                    priority={true}
                                />
                                <div>
                                    <h2 className="text-lg font-semibold capitalize">{product.name}</h2>
                                    <p className="text-sm">{product.code}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='font-semibold'>
                                        {product.discount > 0 && (
                                            <p className="line-through">${product.price}</p>
                                        )}
                                        {product.discount > 0 ? (
                                            <p className="text-xl xl:text-2xl 2xl:text-3xl text-red-500">
                                                ${((product.price * (100 - product.discount)) / 100).toFixed(2)}
                                            </p>
                                        ) : (
                                            <p className='text-xl xl:text-2xl 2xl:text-3xl'>${product.price}</p>
                                        )}
                                    </div>
                                    <button className='bg-[#FF9815] text-white py-2 px-10 shadow-md flex items-center gap-1 uppercase'>Add to cart</button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}

                </CarouselContent>
                <CarouselPrevious className="" />
                <CarouselNext />
            </Carousel >


        </div >
    )
}
