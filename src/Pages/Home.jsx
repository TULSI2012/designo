import React from "react";
import Hero from "../Components/home/Hero";
import CategoryCard from "../Components/CategoryCard";

export default function Home() {
    return (
        <section>
            <Hero />
            <div className="mt-32 flex flex-col gap-y-6">
                <CategoryCard title={"web design"} img={'/home/mobile/image-web-design.jpg'}/>
                <CategoryCard title={"app design"} img={'/home/mobile/image-app-design.jpg'}/>
                <CategoryCard title={"graphic design"} img={'/home/mobile/image-graphic-design.jpg'}/>
            </div>
        </section>
    )
}