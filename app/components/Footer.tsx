import React from 'react'
import Image from 'next/image'
import { GoDash } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import Link from 'next/link';
import useFetch from './hooks/UseFetch';

const Footer = () => {

    const { data, loading } = useFetch(`${"https://strapi-server-app-f1em.onrender.com"}/api/social-link`
    );
    return (
        <section className='w-full bg-[#2b2b2f] py-5 flex flex-col gap-12'>

            {/* layout for not mobile */}
            <div className='hidden md:flex justify-between w-[95%] m-auto'>
                <div className='flex gap-8 items-center'>
                    <Link href={'/'}>
                        <Image
                            src={'/images/feelframelogowhite.png'}
                            alt='logo'
                            width={55}
                            height={70}
                            className='w-[55px] h-[55px]'
                        />
                    </Link>

                    <BsDashLg />

                    <div>
                        <a href="mailto:hello@example.com" className='flex gap-2 items-center hover:underline hover:scale-95'>
                            <FaEnvelope fill='#f5f5f5' />

                            <p>
                                feelframestudios@gmail.com
                            </p>
                        </a>
                    </div>

                </div>
                {/* not mobile navigation */}
                <div className='flex items-center gap-5'>
                    <Link href={'/'}>
                        <p className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:underline hover:scale-95 transition-all ease-in duration-100 hover:text-[#d85425]'>Home</p>
                    </Link>

                    <Link href={'/works'}>
                        <p className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:underline hover:scale-95 transition-all ease-in duration-100 hover:text-[#d85425]'>Work</p>
                    </Link>

                    <Link href={'/contacts'}>
                        <button className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:underline hover:scale-95 transition-all ease-in duration-100 hover:text-[#d85425]'>Contact</button>
                    </Link>

                </div>
            </div>

            {/* layout for mobile */}
            <div className='flex flex-col justify-center items-center gap-8 md:hidden'>
                {/* feelframelogo */}
                <Link href={'/'}>
                    <Image
                        src={'/images/feelframelogowhite.png'}
                        alt='logo'
                        width={55}
                        height={70}
                        className='w-[55px] h-[55px]'
                    />
                </Link>

                {/* the dash */}
                <GoDash fill='#d85425' />

                {/* the mail */}
                <div>
                    <a href="mailto:hello@example.com" className='flex gap-2 items-center hover:underline hover:scale-95 transition-all ease-in duration-100'>
                        <FaEnvelope fill='#f5f5f5' />
                        <p>
                            feelframestudios@gmail.com
                        </p>
                    </a>
                </div>

                {/* second navigation: HOME WORK CONTACT */}
                <div className='items-center gap-6 md:flex flex flex-col'>
                    <Link href={'/'}>
                        <p className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:text-[#d85425] hover:underline hover:scale-95 transition-all ease-in duration-100'>Home</p>
                    </Link>

                    <Link href={'/works'}>
                        <p className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:text-[#d85425] hover:underline hover:scale-95 transition-all ease-in duration-100'>Work</p>
                    </Link>

                    <Link href={'/contacts'}>
                        <button className='text-[#f5f5f5] h-fit w-fit px-2 font-semibold hover:text-[#d85425] hover:underline hover:scale-95 transition-all ease-in duration-100'>Contact</button>
                    </Link>
                </div>
            </div>

            {/* credits */}
            <div className='bg-[#414145] h-fit w-[95%] m-auto items-center justify-between flex max-sm:flex-col whitespace-nowrap flex-shrink-0 gap-5 py-20 px-8'>

                <p className='text-[#f5f5f5] w-fit font-semibold cursor-pointer'>© 2024 feelframestudio</p>

                <div className='flex gap-4 h-fit w-fit justify-center'>

                    <a href={loading ? "" : data.instagramLink} target="_blank" rel="noreferrer">
                        <FaInstagram className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={25} />
                    </a>

                    <a href={loading ? "" : data.youtubeLink} target="_blank" rel="noreferrer">
                        <FaYoutube className='fill-[#f5f5f5] hover:fill-[#d85425] hover:scale-90 transition-all ease-in duration-100' size={25} />
                    </a>
                </div>

            </div>


        </section>
    )
}

export default Footer
