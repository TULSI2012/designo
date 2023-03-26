import React from "react";

export default function LocationCard(props) {
    return (
        <div className={`md:mx-10 md:flex md:flex-col md:gap-y-8 md:bg-none lg:gap-x-8 lg:mx-auto ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <picture>
                <source media="(min-width:1440px)" srcSet={props.imgSmall} />
                <source media="(min-width:768px)" srcSet={props.imgLarge} />
                <img src={props.imgSmall} className="w-full md:rounded-2xl lg:rounded-2xl"/>
            </picture>

            <div className="flex flex-col gap-y-6 items-center bg-[#FDF3F0] pb-20 bg-[url('/shared/desktop/bg-pattern-three-circles.svg')] bg-left bg-no-repeat md:h-[20.375rem] md:items-start md:pl-20 md:bg-[url('/shared/desktop/bg-pattern-two-circles.svg')] md:rounded-2xl lg:w-[45rem] lg:bg-left-bottom">
                <h2 className="text-peach font-medium text-[2rem] mt-20 md:text-[2.5rem]">
                    {props.country}
                </h2>
                <div className="md:flex md:gap-x-20 lg:gap-x-28">
                    <div className="text-center mb-6 md:text-left">
                        <p className="font-medium leading-6 mb-1">
                            {props.office}
                        </p>
                        <p className="mb-1">
                            {props.street}
                        </p>
                        <p>
                            {props.region}
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="font-medium mb-1">Contact</p>
                        <p className="mb-1">
                            P: {props.phone}
                        </p>
                        <p>
                            M: {props.email}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}