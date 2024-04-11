import React from "react";

export default function Footer() {
    return (
        <footer className=" bg-black text-white flex flex-col items-center pt-64 pb-16 w-full -mt-48 absolute z-0 md:-mt-24 md:pt-44 lg:-mt-16 lg:pt-36">
            <div className="md:flex md:items-center md:gap-x-24 md:border-b md:border-b-white/5 md:pb-10 lg:gap-x-[33.75rem]">
                <img
                    className="w-52 mb-8 md:mb-0"
                    src="/shared/desktop/logo-light.png" 
                />
                <ul className="uppercase tracking-[0.125rem] text-center text-sm pt-8 border-t border-t-white/5 md:border-none md:flex md:gap-x-10 md:pt-0">
                    <li className="mb-8 md:mb-0 border-b border-b-transparent cursor-pointer hover:border-b-white/25 transition-all duration-200 ease-in-out">
                        <a href="#">Our Company</a>
                    </li>
                    <li className="mb-8 md:mb-0 border-b border-b-transparent cursor-pointer hover:border-b-white/25 transition-all duration-200 ease-in-out">
                        <a href="#">Locations</a>
                    </li>
                    <li className="mb-10 md:mb-0 border-b border-b-transparent cursor-pointer hover:border-b-white/25 transition-all duration-200 ease-in-out">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-10 text-center text-white/50 leading-6 md:flex-row md:items-end md:gap-x-16 md:text-left md:pt-8 lg:gap-x-96">
                <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-12 lg:gap-x-44">
                    <div>
                        <p className="font-medium">Designo Central Office</p>
                        <p>375 bay mills Street</p>
                        <p>Toronto, Ontario M9C 3J5</p>
                    </div>
                    <div>
                        <p className="font-medium">Contact Us (Central Office)</p>
                        <p>P: +1 123-456-7890</p>
                        <p>M: contact@designo.co</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-x-4">
                    <img 
                        className="cursor-pointer hover:scale-105"
                        src="/shared/desktop/icon-facebook.svg" />
                    <img 
                        className="cursor-pointer hover:scale-105"
                        src="/shared/desktop/icon-youtube.svg" />
                    <img 
                        className="cursor-pointer hover:scale-105"
                        src="/shared/desktop/icon-twitter.svg" />
                    <img 
                        className="cursor-pointer hover:scale-105"
                        src="/shared/desktop/icon-pinterest.svg" />
                    <img 
                        className="cursor-pointer hover:scale-105"
                        src="/shared/desktop/icon-instagram.svg" />
                </div>
            </div>
        </footer>
    )
}