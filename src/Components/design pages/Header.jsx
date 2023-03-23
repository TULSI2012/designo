import React from "react";

export default function Header(props) {
    return (
        <section className="mb-24 bg-peach text-white flex flex-col items-center justify-center h-96 bg-[url('/web-design/desktop/bg-pattern-intro-web.svg')] bg-right-top bg-no-repeat max-w-[69.4375rem] md:bg-right md:mx-10 md:rounded-2xl md:h-64 min-[1191px]:mx-auto">
            <h1 className="text-4xl font-medium mb-6 md:text-5xl">
                {props.name}
            </h1>
            <p className="leading-6 text-center max-w-sm">
                {props.summary}
            </p>
        </section>
    )
}