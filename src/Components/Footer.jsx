import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white flex flex-col items-center pt-10 pb-16">
            <div>
                <img
                    className="w-52 mb-8"
                    src="/shared/desktop/logo-light.png" 
                />
                <ul className="uppercase tracking-[0.125rem] text-center pt-8 border-t border-t-white/5">
                    <li className="mb-8">
                        <a href="#">Our Company</a>
                    </li>
                    <li className="mb-8">
                        <a href="#">Locations</a>
                    </li>
                    <li className="mb-10">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-y-10 text-center text-white/50 leading-6">
                <div>
                    <p className="font-medium">Designo Central Office</p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div>
                    <p className="font-medium">Contact Us (Central Office)</p>
                    <p>P: +1 253-863-8967</p>
                    <p>M: contact@designo.co</p>
                </div>
                <div className="flex items-center justify-center gap-x-4">
                    <img src="/shared/desktop/icon-facebook.svg" />
                    <img src="/shared/desktop/icon-youtube.svg" />
                    <img src="/shared/desktop/icon-twitter.svg" />
                    <img src="/shared/desktop/icon-pinterest.svg" />
                    <img src="/shared/desktop/icon-instagram.svg" />
                </div>
            </div>
        </footer>
    )
}