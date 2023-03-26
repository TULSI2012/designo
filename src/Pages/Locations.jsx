import React from "react";
import LocationCard from "../Components/locations/LocationCard";
import CallToAction from "../Components/CallToAction";
import Footer from "../Components/Footer";

export default function Locations() {
    return (
        <section>
            <section className="flex flex-col gap-y-10 md:gap-y-28 lg:gap-y-8">
                <LocationCard 
                    country={"Canada"} 
                    phone={"+1 253-863-8967"} 
                    email={"contact@designo.co"} 
                    office={"Designo Central Office"} 
                    street={"3886 Wellington Street"} 
                    region={"Toronto, Ontario M9C 3J5"} 
                    imgSmall={"/locations/desktop/image-map-canada.png"} 
                    imgLarge={"/locations/tablet/image-map-canada.png"}
                    reverse={false}
                />
                <LocationCard 
                    country={"Australia"} 
                    phone={"(02) 6720 9092"} 
                    email={"contact@designo.au"}  
                    office={"Designo AU Office"} 
                    street={"19 Balonne Street"} 
                    region={"New South Wales 2443"} 
                    imgSmall={"/locations/desktop/image-map-australia.png"} 
                    imgLarge={"/locations/tablet/image-map-australia.png"}
                    reverse={true}
                />
                <LocationCard 
                    country={"United Kingdom"} 
                    phone={"078 3115 1400"} 
                    email={"contact@designo.uk"}  
                    office={"Designo UK Office"} 
                    street={"13  Colorado Way"} 
                    region={"Rhyd-y-fro SA8 9GA"} 
                    imgSmall={"/locations/desktop/image-map-united-kingdom.png"} 
                    imgLarge={"/locations/tablet/image-map-uk.png"}
                    reverse={false}
                />
            </section>
            
            <section className="mt-28 mx-6 relative z-20 md:mx-10 lg:mx-40">
                <CallToAction />
            </section>
            <Footer />
        </section>
    )
}