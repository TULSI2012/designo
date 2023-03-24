import React from "react";
import AboutHeader from "../Components/about/AboutHeader";
import TalentCard from "../Components/about/TalentCard";

export default function About() {
    return (
        <section className="max-w-[74.45rem] mx-auto">
            <AboutHeader />
            <TalentCard />
        </section>
    )
}

//picture tag can be used with srcSet to display different images for different screen sizes
// todo: clean up how i previously handled different images on different screen sizes with css hidden and display block classes