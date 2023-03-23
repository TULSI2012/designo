import React from "react";

export default function ProductCard() {
    return (
        <div className="bg-[#FDF3F0] flex flex-col items-center mx-auto rounded-2xl max-w-xs md:flex-row md:justify-between md:max-w-[43.0625rem]">
            <img 
                className="rounded-t-2xl max-w-xs md:rounded-t-none md:rounded-l-2xl"
                src="/graphic-design/desktop/image-change.jpg" />
            <div className="md:mr-4">
                <h3 className="text-peach font-medium uppercase text-xl tracking-[0.3125rem] mt-8 text-center">
                    Express
                </h3>
                <p className="text-dark-grey leading-7 text-center mt-3 pb-8 max-w-xs">
                    A multi-carrier shipping website for ecommerce businesses
                </p>
            </div>
        </div>
    )
}