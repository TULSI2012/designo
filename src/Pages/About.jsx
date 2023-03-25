import React from "react";
import AboutHeader from "../Components/about/AboutHeader";
import TalentCard from "../Components/about/TalentCard";
import LocationLink from "../Components/LocationLink";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

export default function About() {
    return (
        <section>
            <AboutHeader />
            <TalentCard />

            <section className="flex flex-col gap-y-12 my-32 min-[1000px]:flex-row min-[1000px]:justify-center min-[1000px]:gap-x-40">
                <LocationLink country={"canada"} img={"/shared/desktop/illustration-canada.svg"}/>
                <LocationLink country={"australia"} img={"/shared/desktop/illustration-australia.svg"}/>
                <LocationLink country={"united kingdom"} img={"/shared/desktop/illustration-united-kingdom.svg"}/>
            </section>

            <section className="mt-28 mx-6 relative z-20 md:mx-10 md:mt-4 lg:mx-40">
                <CallToAction />
            </section>
            <Footer />
        </section>
    )
}

//picture tag can be used with srcSet to display different images for different screen sizes
// todo: clean up how i previously handled different images on different screen sizes with css hidden and display block classes