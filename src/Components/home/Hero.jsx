import React from "react";

export default function Hero() {
    return (
        <section className="bg-peach text-white h-[53rem] overflow-hidden relative">
            <img
                className="absolute scale-150 top-52 left-24" 
                src="/home/desktop/bg-pattern-hero-home.svg" 
                />
            <div className="pt-20">
                <h1 className="text-[2rem] font-medium text-center leading-9 relative">
                    Award-winning custom designs and digital branding solutions
                </h1>
                <p className="mt-6 mx-auto text-center text-[0.9375rem] max-w-[20.4375rem] leading-6 relative">
                    With over 10 years in the industry, we are experienced in creating fully responsive
                    websites, app design, and engaging brand experiences. 
                    <br />Find out more about our services.
                </p>
                <button className="mx-auto mt-6 block bg-white text-dark-grey font-medium tracking-wider w-36 h-14 rounded-lg uppercase text-[0.9375rem] relative">
                    Learn More
                </button>
            </div>
                <img
                    className="scale-[1.75] mt-24" 
                    src="/home/desktop/image-hero-phone.png" 
                    alt="hero image" 
                />
        </section>
    )
}