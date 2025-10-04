import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignIn = () => {
    return (
        <SignInButton mode='modal'>
            <div className='hoverEffect transition'>
                <button className='text-sm font-semibold hover:text-shop_dark_green text-shop_light_text hover:cursor-pointer hover:underline hoverEffect'>
                    Login
                </button>
            </div>
        </SignInButton>
    )
}

export default SignIn
