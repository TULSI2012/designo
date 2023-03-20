import React from "react";
import Hero from "../Components/home/Hero";
import CategoryCard from "../Components/CategoryCard";

export default function Home() {
    return (
        <section>
            <Hero />
            <div className="mt-32 flex flex-col gap-y-6">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </section>
    )
}