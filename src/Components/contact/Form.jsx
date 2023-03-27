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

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

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
                <p>{errors.name?.message}</p>

                <input type="text" placeholder="Email Address" {...register("email")}/>
                <p>{errors.email?.message}</p>

                <input type="number" placeholder="Phone" {...register("phone")}/>
                <p>{errors.phone?.message}</p>

                <textarea placeholder="Your Message" {...register("message")}/>
                <p>{errors.message?.message}</p>

                <button type="submit">Submit</button>
            </form>
        </section>
    )
}