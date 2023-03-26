import React from "react";
import Footer from "../Components/Footer";
import CallToAction from "../Components/CallToAction";
import LocationLink from "../Components/LocationLink";
import Form from "../Components/contact/Form";

export default function Contact() {
    return (
        <section>
            <Form />

            <section className="flex flex-col gap-y-12 mt-32 -mb-24 md:-mb-60 lg:-mb-32 min-[1000px]:flex-row min-[1000px]:justify-center min-[1000px]:gap-x-40">
                <LocationLink country={"canada"} img={"/shared/desktop/illustration-canada.svg"}/>
                <LocationLink country={"australia"} img={"/shared/desktop/illustration-australia.svg"}/>
                <LocationLink country={"united kingdom"} img={"/shared/desktop/illustration-united-kingdom.svg"}/>
            </section>

            <section className="mt-28 mx-6 relative z-20 md:mx-10 lg:mx-40 invisible">
                <CallToAction />
            </section>
            <Footer />

        </section>
    )
}
