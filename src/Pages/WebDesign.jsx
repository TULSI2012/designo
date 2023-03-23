import React from "react";
import Header from "../Components/design pages/Header";
import CallToAction from "../Components/CallToAction";
import CategoryCard from "../Components/CategoryCard";
import Footer from "../Components/Footer";

export default function WebDesign() {
    return (
        <section>
            <Header />
            <div className="flex flex-col gap-y-6 h-[32.75rem]">
                <CategoryCard 
                    title={"app design"} 
                    mobileImg={'/home/mobile/image-app-design.jpg'}
                    tabletImg={'/home/tablet/image-app-design.jpg'}
                    desktopImg={'/home/desktop/image-app-design.jpg'}
                />
                <CategoryCard 
                    title={"graphic design"} 
                    mobileImg={'/home/mobile/image-graphic-design.jpg'}
                    tabletImg={'/home/tablet/image-graphic-design.jpg'}
                    desktopImg={'/home/desktop/image-graphic-design.jpg'}
                />
            </div>
            <div className="mt-24 mx-6 relative z-20 md:mx-10 md:mt-4 lg:mx-40">
                <CallToAction />
            </div>
            <Footer />
        </section>
    )
}