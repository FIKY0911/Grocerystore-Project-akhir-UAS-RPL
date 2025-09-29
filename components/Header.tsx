import React from 'react'
import Container from './Container';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import FavoriteButton from './FavoriteButton';
import SignIn from './SignIn';
import MobileMenu from './MobileMenu';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, UserButton, SignedIn } from '@clerk/nextjs';

const Header = async() => {
    const user = await currentUser()
    return (
            <header className='bg-white py-3.5 border-b border-b-black/7'>
                <Container className="flex items-center justify-between">
                    <div className='w-auto md:w-1/4 flex items-center gap-2.5 justify-start '>
                        <div className='mt-2 hover:text-shop_lightColor'>
                            <MobileMenu />
                        </div>
                        <Logo />
                    </div>
                    <HeaderMenu />
                    <div className="w-auto md:w-1/8 flex items-center justify-end gap-5">
                        <SearchBar />
                        <CartIcon />
                        <FavoriteButton />
                        <ClerkLoaded>
                            <SignedIn>
                                <UserButton/>
                            </SignedIn>
                        </ClerkLoaded>
                        {!user && <SignIn/>}
                    </div>
                </Container>
            </header>
        )
}

export default Header;
