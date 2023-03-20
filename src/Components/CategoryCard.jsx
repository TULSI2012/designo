import React from "react";

export default function CategoryCard(props) {
    return (
        <div className="mx-6 bg-black flex flex-col items-center justify-center gap-y-3 h-64 rounded-2xl relative overflow-hidden">
            <img
                className="absolute h-full w-full mix-blend-overlay" 
                src={props.img} 
                alt="" 
            />
            <h3 className="text-white text-[1.75rem] leading-9 tracking-[0.0875rem] uppercase relative">
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