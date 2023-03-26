import { useForm } from "react-hook-form";
import * as yup from 'yup'

import React from "react";

export default function Form() {

    const {register, handleSubmit } = useForm()

    const schema = yup.object()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <section className="text-white bg-peach py-16 px-6">
            <h1 className="text-[2rem] font-medium text-center">
                Contact Us
            </h1>
            <p className="text-center leading-6">
                Ready to take it to the next level? Let’s talk about your project or idea and 
                find out how we can help your business grow. If you are looking for unique 
                digital experiences that’s relatable to your users, drop us a line.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-black gap-y-2">
                <input type="text" placeholder="Name" {...register("name")} />
                <input type="text" placeholder="Email Address" {...register("email")}/>
                <input type="number" placeholder="Phone" {...register("phone")}/>
                <textarea placeholder="Your Message" {...register("message")}/>
                <button type="submit">
                    Submit
                </button>
            </form>
        </section>
    )
}