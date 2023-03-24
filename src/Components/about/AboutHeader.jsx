import React from "react";

export default function AboutHeader() {
    return (
            <section className=" bg-peach text-white pb-20 bg-[url('/about/mobile/bg-pattern-hero-about-mobile.svg')] bg-[right_bottom_-27rem] bg-no-repeat md:mx-10 md:rounded-2xl md:bg-[url('/about/desktop/bg-pattern-hero-about-desktop.svg')] md:bg-left lg:flex lg:flex-row-reverse lg:h-[30rem] lg:items-center lg:pb-0 lg:justify-between">
                <picture>
                    <source media="(min-width:1440px)" srcSet="/about/desktop/image-about-hero.jpg" />
                    <source media="(min-width:768px)" srcSet="/about/tablet/image-about-hero.jpg" />
                    <img src="/about/mobile/image-about-hero.jpg" className="w-full mb-8 md:rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl lg:mb-0"/>
                </picture>
                <div className="lg:ml-24">
                    <h1 className="text-[2rem] text-center font-medium mb-6 md:text-5xl lg:text-left">
                        About Us
                    </h1>
                    <p className="text-center leading-6 mx-6 max-w-xl md:mx-auto lg:text-left lg:max-w-md">
                        Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                        We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that 
                        make real impact. We’re always looking forward to creating brands, products, and digital experiences 
                        that connect with our clients’ audiences.
                    </p>
                </div>
            </section>
    )
}

//picture tag can be used with srcSet to display different images for different screen sizes
// todo: clean up how i previously handled different images on different screen sizes with css hidden and display block classes