import React from "react";

export default function ValueCard(props) {
    return (
        <div className="flex flex-col items-center md:flex-row md:gap-x-12 lg:flex-col">
            <div className="bg-[url('/home/desktop/bg-pattern-hero-home.svg')] bg-contain mb-12">
                <img 
                    src={props.image}
                />
            </div>
            <div>
                <h3 className="text-xl text-center uppercase tracking-[0.3125rem] font-medium mb-8 md:text-left md:mb-4 lg:text-center">
                    {props.title}
                </h3>
                <p className="leading-[1.625rem] text-dark-grey text-center max-w-sm md:text-left md:max-w-md md:mb-14 lg:text-center lg:max-w-[21.875rem]">
                    {props.description}
                </p>
            </div>
        </div>
    )
}