import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
    return (
        <SignInButton mode='modal'>
            <div className='py-2 px-3.5 rounded-sm bg-shop_light_green hover:bg-shop_btn_dark_green transition shadow-md hover:shadow-lg'>
                <button className='text-sm font-semibold text-shop_darkColor hover:text-white  hover:cursor-pointer hoverEffect'>
                    Login
                </button>
            </div>
        </SignInButton>
    )
}

export default SignIn
