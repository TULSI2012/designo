import React, { useState } from "react";
import Header from "../Components/design pages/Header";
import CallToAction from "../Components/CallToAction";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/design pages/ProductCard";
import Footer from "../Components/Footer";
import data from '../data'

export default function AppDesign() {

    const [appDesign, setAppDesign] = useState(data.filter(product => product.category == "app-design"))

    const productElements = appDesign.map(product => {
        return <ProductCard key={product.id} img={product.img} name={product.name} summary={product.summary} />
    })

    return (
        <section>
            <Header 
                name={"App Design"}
                summary={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."}/>
            <div className="max-w-[69.4375rem] mx-auto flex flex-col gap-y-10 mb-24 md:gap-y-8 lg:flex-row lg:flex-wrap lg:gap-x-6">
                {productElements}
            </div>
            <div className="flex flex-col gap-y-6 max-w-[69.4375rem] mx-auto md:mb-32 lg:flex-row lg:justify-center lg:h-80 lg:gap-x-8 lg:mb-40">
                <div className="h-[16rem] md:h-[13rem] lg:h-80 lg:w-[33.8125rem]">
                    <CategoryCard 
                        title={"web design"}
                        pageUrl={"/webdesign"} 
                        mobileImg={'/home/mobile/image-web-design.jpg'}
                        tabletImg={'/home/tablet/image-web-design.jpg'}
                        desktopImg={'/home/desktop/image-web-design-large.jpg'}
                    />
                </div>
                <div className="h-[16rem] md:h-[13rem] lg:h-80 lg:w-[33.8125rem]">
                    <CategoryCard 
                        title={"graphic design"}
                        pageUrl={"/graphicdesign"} 
                        mobileImg={'/home/mobile/image-graphic-design.jpg'}
                        tabletImg={'/home/tablet/image-graphic-design.jpg'}
                        desktopImg={'/home/desktop/image-graphic-design.jpg'}
                    />
                </div>
            </div>
            <div className="mt-24 mx-6 relative z-20 md:mx-10 md:mt-4 lg:mx-40">
                <CallToAction />
            </div>
            <Footer />
        </section>
    )
}