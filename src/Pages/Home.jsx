import React from "react";
import Hero from "../Components/home/Hero";
import CategoryCard from "../Components/CategoryCard";
import ValueCard from "../Components/home/ValueCard";
import CallToAction from "../Components/CallToAction";

export default function Home() {
    return (
        <section>
            <Hero />

            <section className="mt-32 flex flex-col gap-y-6 max-w-[69.4375rem] mx-auto lg:flex-row lg:justify-center lg:gap-8">
                <div className="lg:w-[33.8125rem] h-64 md:h-52 lg:h-[40rem]">
                    <CategoryCard 
                        title={"web design"} 
                        mobileImg={'/home/mobile/image-web-design.jpg'}
                        tabletImg={'/home/tablet/image-web-design.jpg'}
                        desktopImg={'/home/desktop/image-web-design-large.jpg'}
                    />
                </div>
                <div className="flex flex-col gap-y-6 lg:w-[33.8125rem]">
                    <div className="lg:w-[33.8125rem] h-64 md:h-52 lg:h-[19.25rem]">
                        <CategoryCard 
                            title={"app design"} 
                            mobileImg={'/home/mobile/image-app-design.jpg'}
                            tabletImg={'/home/tablet/image-app-design.jpg'}
                            desktopImg={'/home/desktop/image-app-design.jpg'}
                        />
                    </div>
                    <div className="lg:w-[33.8125rem] h-64 md:h-52 lg:h-[19.25rem]">
                        <CategoryCard 
                            title={"graphic design"} 
                            mobileImg={'/home/mobile/image-graphic-design.jpg'}
                            tabletImg={'/home/tablet/image-graphic-design.jpg'}
                            desktopImg={'/home/desktop/image-graphic-design.jpg'}
                        />
                    </div>
                </div>
            </section>

            <section className="mt-28 mx-6 flex flex-col gap-y-20 md:mx-10 md:gap-y-0 md:items-center lg:flex-row lg:justify-center lg:gap-x-8">
                <ValueCard 
                    title={'passionate'}
                    image={"/home/desktop/illustration-passionate.svg"}
                    description={'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design and technology into exciting new solutions.'}
                />
                <ValueCard 
                    title={'resourceful'}
                    image={"/home/desktop/illustration-resourceful.svg"}
                    description={'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients needs.'}
                />
                <ValueCard 
                    title={'friendly'}
                    image={"/home/desktop/illustration-friendly.svg"}
                    description={'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'}
                />
            </section>

            <section className="mt-28 mx-6 md:mx-10 md:mt-4 lg:mx-40">
                <CallToAction />
            </section>
        </section>
    )
}