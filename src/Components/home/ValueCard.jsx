import React from "react";

export default function ValueCard(props) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-[url('/home/desktop/bg-pattern-hero-home.svg')] bg-contain mb-12">
                <img 
                    src={props.image}
                />
            </div>
            <div>
                <h3 className="text-xl text-center uppercase tracking-[0.3125rem] font-medium mb-8">
                    {props.title}
                </h3>
                <p className="leading-[1.625rem] text-dark-grey text-center">
                    {props.description}
                </p>
            </div>
        </div>
    )
}