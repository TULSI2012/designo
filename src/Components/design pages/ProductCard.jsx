import React from "react";

export default function ProductCard(props) {
    return (
        <div className="bg-[#FDF3F0] flex flex-col items-center mx-auto rounded-2xl max-w-xs md:flex-row md:max-w-[43.0625rem] lg:flex-col lg:max-w-[21.875rem]">
            <img 
                className="rounded-t-2xl max-w-xs md:rounded-tr-none md:rounded-l-2xl lg:rounded-l-none lg:rounded-t-2xl lg:max-w-full"
                src={props.img} />
            <div className="md:mr-4">
                <h3 className="text-peach font-medium uppercase text-xl tracking-[0.3125rem] mt-8 text-center">
                    {props.name}
                </h3>
                <p className="text-dark-grey leading-7 text-center mt-3 pb-8 max-w-xs mx-6">
                    {props.summary}
                </p>
            </div>
        </div>
    )
}