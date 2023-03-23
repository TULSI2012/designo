import React, { useState } from "react";
import Header from "../Components/design pages/Header";
import CallToAction from "../Components/CallToAction";
import CategoryCard from "../Components/CategoryCard";
import ProductCard from "../Components/design pages/ProductCard";
import Footer from "../Components/Footer";
import data from '../data'

export default function GraphicDesign() {

    const [graphicDesign, setGraphicDesign] = useState(data.filter(product => product.category == "graphic-design"))

    const productElements = graphicDesign.map(product => {
        return <ProductCard key={product.id} img={product.img} name={product.name} summary={product.summary} />
    })

    return (
        <section>
            <Header 
                name={"Graphic Design"}
                summary={"We deliver eye-catching branding materials that are tailored to meet your business objectives."}/>
            <div className="max-w-[69.4375rem] mx-auto flex flex-col gap-y-10 mb-24 md:gap-y-8 lg:flex-row lg:flex-wrap lg:gap-x-6">
                {productElements}
            </div>
            <div className="flex flex-col gap-y-6 max-w-[69.4375rem] mx-auto md:mb-32 lg:flex-row lg:justify-center lg:h-80 lg:gap-x-8 lg:mb-40">
                <div className="h-[16rem] md:h-[13rem] lg:h-80 lg:w-[33.8125rem]">
                    <CategoryCard 
                        title={"app design"}
                        pageUrl={"/appdesign"} 
                        mobileImg={'/home/mobile/image-app-design.jpg'}
                        tabletImg={'/home/tablet/image-app-design.jpg'}
                        desktopImg={'/home/desktop/image-app-design.jpg'}
                    />
                </div>
                <div className="h-[16rem] md:h-[13rem] lg:h-80 lg:w-[33.8125rem]">
                    <CategoryCard 
                        title={"web design"}
                        pageUrl={"/webdesign"} 
                        mobileImg={'/home/mobile/image-web-design.jpg'}
                        tabletImg={'/home/tablet/image-web-design.jpg'}
                        desktopImg={'/home/desktop/image-web-design-small.jpg'}
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