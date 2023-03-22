import React from "react";

export default function Hero() {
    return (
        <section className="bg-peach text-white h-[53rem] overflow-hidden relative max-w-[69.4375rem] md:mx-10 md:rounded-2xl lg:max-h-[40rem] min-[1191px]:mx-auto">
            <img
                className="absolute scale-150 max-w-lg top-52 -right-64 md:-right-24 md:top-60 lg:top-16 lg:right-16 lg:scale-125" 
                src="/home/desktop/bg-pattern-hero-home.svg" 
                />
            <div className="lg:flex lg:mt-24 lg:ml-24">
                <div className="pt-20 md:pt-14 lg:pt-6">
                    <h1 className="mx-auto text-[2rem] font-medium text-center leading-9 relative max-w-xl md:text-5xl md:leading-[3rem] lg:text-left">
                        Award-winning custom designs and digital branding solutions
                    </h1>
                    <p className="mt-6 mx-auto text-center text-[0.9375rem] max-w-[20.4375rem] leading-6 relative z-50 md:max-w-[27.85rem] md:leading-[1.625rem] md:text-base lg:text-left lg:mx-0">
                        With over 10 years in the industry, we are experienced in creating fully responsive
                        websites, app design, and engaging brand experiences. 
                        <br className="md:hidden"/> Find out more about our services.
                    </p>
                    <button className="mx-auto mt-6 block bg-white text-dark-grey font-medium tracking-wider w-36 h-14 rounded-lg uppercase text-[0.9375rem] relative z-50 lg:mx-0 lg:mt-10 hover:bg-light-peach hover:text-white transition-all duration-200 ease-in-out">
                        Learn More
                    </button>
                </div>
                    <img
                        className="scale-[1.75] mt-24 max-w-sm mx-auto lg:mt-12" 
                        src="/home/desktop/image-hero-phone.png" 
                        alt="hero image" 
                    />
            </div>
        </section>
    )
}