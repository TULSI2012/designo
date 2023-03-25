import React from "react";
import AboutHeader from "../Components/about/AboutHeader";
import TalentCard from "../Components/about/TalentCard";
import LocationLink from "../Components/LocationLink";

export default function About() {
    return (
        <section className="max-w-[74.45rem] mx-auto">
            <AboutHeader />
            <TalentCard />
            <section className="flex flex-col gap-y-12 my-32 min-[1000px]:flex-row min-[1000px]:justify-center min-[1000px]:gap-x-40">
                <LocationLink country={"canada"} img={"/shared/desktop/illustration-canada.svg"}/>
                <LocationLink country={"australia"} img={"/shared/desktop/illustration-australia.svg"}/>
                <LocationLink country={"united kingdom"} img={"/shared/desktop/illustration-united-kingdom.svg"}/>
            </section>
        </section>
    )
}

//picture tag can be used with srcSet to display different images for different screen sizes
// todo: clean up how i previously handled different images on different screen sizes with css hidden and display block classes