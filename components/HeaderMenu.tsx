"use client"

import { headerData } from '../constants/data'
import Link from 'next/link'
import {usePathname} from "next/navigation"
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname();
    return ( 
        <div className='hidden md:inline-flex w-1/2 items-center gap-7 text-sm capitalize font-semibold text-shop_lightColor hoverEffect relative group'>
            {headerData?.map((item)=>(
                <Link key={item?.title} href={item?.href} className={`py-2 px-3.5 bg-shop_light_green hover:bg-shop_btn_dark_green rounded-sm
                    text-shop_darkColor hover:text-shop_light_white hoverEffect shadow-md hover:shadow-lg transition ${pathname === item?.href && "text-amber-50 bg-shop_btn_dark_green"}`}
                >
                    {item?.title}
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu
