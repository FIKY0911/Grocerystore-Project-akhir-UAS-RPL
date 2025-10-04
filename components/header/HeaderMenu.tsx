"use client"

import { headerData } from '@/constants/data'
import Link from 'next/link'
import {usePathname} from "next/navigation"
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname();
    return ( 
        <div className='hidden md:inline-flex w-1/2 items-center gap-7 text-sm capitalize font-semibold text-shop_lightColor hoverEffect relative group'>
            {headerData?.map((item)=>(
                <Link key={item?.title} href={item?.href} className={`hover:text-shop_dark_green hover:underline hoverEffect transition ${pathname === item?.href && "text-shop_btn_dark_green underline"}`}
                >
                    {item?.title}
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu
