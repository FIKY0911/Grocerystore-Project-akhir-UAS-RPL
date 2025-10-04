import React from 'react'
import Container from "./footer/Container";
import Logo from "./header/Logo";
import HeaderMenu from "./header/HeaderMenu";
import SearchBar from "./header/SearchBar";
import CartIcon from "./header/CartIcon";
import FavoriteButton from "./header/FavoriteButton";
import SignIn from "./header/SignIn";
import MobileMenu from "./header/MobileMenu";
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
