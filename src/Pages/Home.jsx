import React from "react";
import Hero from "../Components/home/Hero";
import CategoryCard from "../Components/CategoryCard";

export default function Home() {
    return (
        <section>
            <Hero />
            <div className="mt-32 flex flex-col gap-y-6 max-w-[69.4375rem] mx-auto lg:flex-row lg:justify-center lg:gap-8">
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
            </div>
        </section>
    )
}