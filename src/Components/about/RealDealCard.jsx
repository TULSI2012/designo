import React from "react";

export default function RealDealCard() {
    return (
        <section className="max-w-[69.4375rem] bg-[#FDF3F0] pb-20 bg-[url('/shared/desktop/bg-pattern-three-circles.svg')] bg-[left_20rem] bg-no-repeat md:mx-10 md:mt-28 md:bg-[center_top_12rem] lg:flex lg:flex-row-reverse lg:gap-x-24 lg:h-[40rem] lg:items-center lg:pb-0 md:rounded-2xl lg:bg-[right_35rem_bottom] min-[1191px]:mx-auto">
            <picture>
                <source media="(min-width:1440px)" srcSet="/about/desktop/image-real-deal.jpg" />
                <source media="(min-width:768px)" srcSet="/about/tablet/image-real-deal.jpg" />
                <img src="/about/mobile/image-real-deal.jpg" className="w-full md:rounded-t-2xl lg:rounded-l-none lg:rounded-r-2xl"/>
            </picture>
            <div className="lg:mb-16">
                <h1 className="text-[2rem] text-peach text-center font-medium mt-20 mb-6 md:text-[2.5rem] md:mt-16 lg:text-left">
                    The real deal
                </h1>
                <p className="text-center leading-6 mx-6 max-w-xl md:mx-auto lg:text-left lg:max-w-md">
                    As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.   
                        <br/><br />
                    We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.
                </p>
            </div>
        </section>
)
}