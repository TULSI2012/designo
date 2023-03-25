import React from "react";
import { useNavigate } from "react-router-dom";

export default function LocationLink(props) {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center">
            <div className="bg-[url('/shared/desktop/bg-pattern-small-circle.svg')] mb-12">
                <img src={props.img} alt="canada illustration" />
            </div>
            <h3 className="text-xl font-medium uppercase tracking-[0.3125rem] text-center mb-8">
                {props.country}
            </h3>
            <button 
                onClick={() => navigate("/locations")}
                className="bg-peach text-white uppercase font-medium tracking-[0.0625rem] rounded-lg p-4 cursor-pointer hover:bg-light-peach transition-all duration-200 ease-in-out">
                See Location
            </button>
        </div>
    )
}