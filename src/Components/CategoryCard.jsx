import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCard(props) {

    const navigate = useNavigate()

    return (
        <div 
            onClick={() => navigate(props.pageUrl)}
            className="mx-6 bg-black/50 flex flex-col items-center justify-center gap-y-3 h-full rounded-2xl relative overflow-hidden md:mx-10 min-[1191px]:mx-0 hover:bg-peach cursor-pointer transition-colors duration-300 ease-in-out">

            {/* Mobile background image */}
            <img
                className="absolute h-full w-full mix-blend-multiply md:invisible" 
                src={props.mobileImg} 
            />
            {/* Tablet background image */}
            <img
                className="absolute h-full w-full mix-blend-multiply invisible md:visible lg:invisible" 
                src={props.tabletImg} 
            />
            {/* Desktop background image */}
            <img
                className="absolute h-full w-full mix-blend-multiply invisible lg:visible" 
                src={props.desktopImg} 
            />

            <h3 className="text-white text-[1.75rem] font-medium leading-9 tracking-[0.0875rem] uppercase relative md:text-[2.5rem] md:tracking-[0.125rem] md:leading-10 md:mb-4">
                {props.title}
            </h3>

            <div className="flex items-center gap-x-4 relative">
                <p className="text-white tracking-[0.3125rem] uppercase">
                    View Projects
                </p>
                <img src="/shared/desktop/icon-right-arrow.svg" alt="" />
            </div>

        </div>
    )
}