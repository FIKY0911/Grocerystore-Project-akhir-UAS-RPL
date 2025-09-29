import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { SubText, SubTitle } from './text'
import { categoriesData, quickLinksData } from '@/constants/data';
import Link from 'next/link';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
    return (
        <footer className='bg-white text-black/70 border-t'>
            <Container>
                <FooterTop />
                <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className="space-y-4">
                        <Logo />
                        <SubText>
                            Find the groceries you need at Grocerystoreyt, with a wide range of quality and healthy ingredients.
                        </SubText>
                        <SocialMedia className="flex gap-4 text-shop_darkColor/60" iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_dark_green"
                        tooltipClassName="bg-shop_darkColor text-white/80" />
                    </div>
                    <div>
                        <SubTitle>Quick Links</SubTitle>
                        <ul className=' space-y-3 mt-4'>
                            {quickLinksData?.map((item, index) => (
                                <li key={item?.title} className='mt-3'>
                                    <Link href={item?.href} className='hover:text-shop_dark_green hover:underline hoverEffect transition'>{item?.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <SubTitle>Categories</SubTitle>
                        <ul className=' space-y-3 mt-4'>
                            {categoriesData?.map((item, index) => (
                                <li key={item?.title} className='mt-3'>
                                    <Link href={`/category/${item?.href}`} className='hover:text-shop_dark_green hover:underline hoverEffect transition'>{item?.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <SubTitle>News letter</SubTitle>
                        <SubText className='mt-4'>Subscribe to our newsletter to get the latest updates and offers.</SubText>
                        <form className='space-y-3'>
                            <Input placeholder='Enter your email' type='email' required/>
                            <Button className='w-full'>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="py-6 border-t text-center text-sm text-gray-600">
                    <div>
                        © {new Date().getFullYear()} <Logo className="text-sm" />. All
                        rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;
