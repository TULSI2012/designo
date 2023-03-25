import React from "react";

export default function TalentCard() {
    return (
            <section className="max-w-[69.4375rem] bg-[#FDF3F0] pb-20 bg-[url('/shared/desktop/bg-pattern-three-circles.svg')] bg-[left_20rem] bg-no-repeat md:mx-10 md:mt-28 md:bg-[center_top_12rem] lg:flex lg:h-[40rem] lg:items-center lg:pb-0 md:rounded-2xl lg:bg-[right_12rem_bottom] min-[1191px]:mx-auto">
                <picture>
                    <source media="(min-width:1440px)" srcSet="/about/desktop/image-world-class-talent.jpg" />
                    <source media="(min-width:768px)" srcSet="/about/tablet/image-world-class-talent.jpg" />
                    <img src="/about/mobile/image-world-class-talent.jpg" className="w-full md:rounded-t-2xl lg:rounded-r-none lg:rounded-l-2xl"/>
                </picture>
                <div className="lg:ml-24">
                    <h1 className="text-[2rem] text-peach text-center font-medium mt-20 mb-6 md:text-[2.5rem] md:mt-16 lg:text-left">
                        World-class talent
                    </h1>
                    <p className="text-center leading-6 mx-6 max-w-xl md:mx-auto lg:text-left lg:max-w-md">
                        We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, 
                        ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   
                        <br/><br />
                        Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. 
                        We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality 
                        outcomes that encapsulates their brand’s story and mission.
                    </p>
                </div>
            </section>
    )
}

//picture tag can be used with srcSet to display different images for different screen sizes
// todo: clean up how i previously handled different images on different screen sizes with css hidden and display block classes