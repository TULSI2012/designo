import React from "react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {

    const navigate = useNavigate()

    return (
        <div className="mx-auto bg-peach text-white py-16 px-6 bg-[url('/shared/desktop/bg-pattern-call-to-action.svg')] bg-left bg-no-repeat rounded-2xl max-w-[69.4375rem] min-[936px]:bg-right lg:flex lg:items-center lg:justify-between lg:px-24">
            <div>
                <h3 className="text-[2rem] font-medium text-center leading-9 mb-6 max-w-[18.75rem] mx-auto md:text-[2.5rem] md:leading-10 lg:text-left lg:mx-0">
                    Let's talk about your project
                </h3>
                <p className="text-center leading-6 mb-8 max-w-md mx-auto lg:text-left lg:mb-0">
                    Ready to take it to the next level? Contact us today and find out how our expertise can help
                    your business grow.
                </p>
            </div>
            <button 
                onClick={() => navigate("/contact")}
                className="bg-white text-dark-grey font-medium tracking-[0.0625rem] uppercase w-36 rounded-lg py-4 px-2 block mx-auto lg:mx-0 hover:bg-light-peach hover:text-white transition-all duration-200 ease-in-out">
                Get in Touch
            </button>
        </div>
    )
}