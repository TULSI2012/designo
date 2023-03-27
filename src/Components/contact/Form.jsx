import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import React from "react";

export default function Form() {

    //Form schema created with Yup for form validation - will check if the form fields agree with these constraints on submit
    const schema = yup.object().shape({
        name: yup.string().required("Can't be empty"),
        email: yup.string().email("Please use a valid email address").required("Can't be empty"),
        phone: yup.number().integer().notRequired().typeError('Please use a valid phone number'),
        message: yup.string().required("Can't be empty")
    })

    // react-hook-form functions - the schema created above is integrated by setting the resolver value
    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className="max-w-[69.4375rem] text-white bg-peach py-16 px-6 bg-[url('/contact/mobile/bg-pattern-hero-contact-mobile.svg')] bg-[right_-25rem_top_0rem] bg-no-repeat md:mx-10 md:rounded-2xl md:px-14 md:bg-[url('/contact/desktop/bg-pattern-hero-desktop.svg')] md:bg-[right_15rem_top_-6rem] min-[1191px]:mx-auto lg:flex lg:items-center lg:gap-x-24 lg:bg-[right_32rem_top_-8rem]">
            <div className="lg:mb-8">
                <h1 className="text-[2rem] font-medium text-center md:text-left md:text-5xl">
                    Contact Us
                </h1>
                <p className="text-center leading-6 md:text-left md:max-w-xl md:mt-8 lg:w-[27.81rem]">
                    Ready to take it to the next level? Let’s talk about your project or idea and 
                    find out how we can help your business grow. If you are looking for unique 
                    digital experiences that’s relatable to your users, drop us a line.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-black gap-y-2 lg:w-full">
                <div className="flex flex-col gap-y-6 mt-12 lg:mt-0">
                    {/* {...register("name")} is important for react-hook-form to work - the value passed into the function 
                        must match the corresponding value name in the schema object created with Yup */}
                    <div className="border-b border-white flex justify-between items-center">
                        <input
                            className="bg-transparent text-white placeholder-white/50 pl-3 pb-3 focus:outline-none md:pl-6" 
                            type="text" 
                            placeholder="Name" {...register("name")} />
                        <div className="text-white italic text-xs flex items-center gap-x-3 pb-3">
                            {/* Checks if the error message object has a value and then displays that error message along with the error icon if true */}
                            {errors.name?.message ? <> {errors.name.message} <img src="/contact/desktop/icon-error.svg" alt="" /> </>: ""}
                        </div>
                    </div>
                    
                    <div className="border-b border-white flex justify-between items-center">
                        <input
                            className="bg-transparent text-white placeholder-white/50 pl-3 pb-3 focus:outline-none md:pl-6" 
                            type="text" 
                            placeholder="Email Address" {...register("email")}/>
                        <div className="text-white italic text-xs flex items-center gap-x-3 pb-3">
                            {errors.email?.message ? <> {errors.email.message} <img src="/contact/desktop/icon-error.svg" alt="" /> </>: ""}
                        </div>
                    </div>
                    
                    <div className="border-b border-white flex justify-between items-center">
                        <input
                            className="bg-transparent text-white placeholder-white/50 pl-3 pb-3 focus:outline-none md:pl-6" 
                            type="number" 
                            placeholder="Phone" {...register("phone")}/>
                        <div className="text-white italic text-xs flex items-center gap-x-3 pb-3">
                            {errors.phone?.message ? <> {errors.phone.message} <img src="/contact/desktop/icon-error.svg" alt="" /> </>: ""}
                        </div>
                    </div>

                    <div className="border-b border-white flex justify-between items-center">
                        <textarea
                            className="bg-transparent text-white placeholder-white/50 pl-3 pb-12 focus:outline-none md:pl-6" 
                            placeholder="Your Message" {...register("message")}/>
                        <div className="text-white italic text-xs flex items-center gap-x-3 pb-3">
                            {errors.message?.message ? <> {errors.message.message} <img src="/contact/desktop/icon-error.svg" alt="" /> </>: ""}
                        </div>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <button
                            className="bg-white text-dark-grey uppercase tracking-[0.0625] font-medium w-36 py-4 rounded-lg mt-6 md:mt-0 hover:bg-light-peach hover:text-white transition-all duration-200 ease-in-out" 
                            type="submit">
                                Submit
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}