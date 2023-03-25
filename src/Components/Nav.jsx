import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Nav () {

    const [nav, setNav] = useState(false)

    {/* opens and closes the mobile nav menu*/}
    function handleNav() {
        setNav(!nav)
    }

    {/* This closes the mobile nav if it is still open once the screen width is larger than 768px */}
    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)")
        function myFunction(e) {
          setNav(false);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
      }, []);


    return (
        <nav className="flex justify-between items-center mx-6 my-8 md:mx-10 md:my-16 xl:max-w-6xl xl:mx-auto">
            <Link to="/">
                <img src="/shared/desktop/logo-dark.png" className="w-52"/>
            </Link>

            {/* desktop nav menu */}
            <ul className="hidden md:flex gap-x-12 text-sm tracking-[0.125rem] uppercase">
                <li className="border-b border-b-transparent cursor-pointer hover:border-b-dark-grey/25 transition-all duration-200 ease-in-out">
                   <Link to="/about">Our Company</Link> 
                </li>
                <li className="border-b border-b-transparent cursor-pointer hover:border-b-dark-grey/25 transition-all duration-200 ease-in-out">
                   <Link to="/locations">Locations</Link>
                </li>
                <li className="border-b border-b-transparent cursor-pointer hover:border-b-dark-grey/25 transition-all duration-200 ease-in-out">
                   <Link to="/contact">Contact</Link>
                </li>
            </ul>


            {/* render open or close menu based on the state of nav  */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ?
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.071.1L19.9 2.93l-7.071 7.07 7.071 7.072-2.828 2.828L10 12.828l-7.071 7.071L.1 17.071 7.17 10 .102 2.929 2.929.1l7.07 7.07 7.072-7.07z" fill="#1D1C1E" fillRule="evenodd"/></svg> 
                    :
                    <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#1D1C1E" fillRule="evenodd"><path d="M0 0h24v4H0zM0 8h24v4H0zM0 16h24v4H0z"/></g></svg> 

                }
            </div>

            {/* Mobile nav menu */}
            {/* Clean up the way this class is written as alot of classes are written twice */}
            <ul className={nav ? 
                            'flex flex-col justify-between py-12 px-6 uppercase text-white text-2xl fixed bg-black left-0 top-[5.75rem] w-full h-60 ease-in-out duration-1000 z-50' 
                                : 
                            'flex flex-col justify-between py-12 px-6 uppercase text-white text-2xl fixed bg-black left-[-100%] top-[5.75rem] w-full h-60 ease-in-out duration-1000 z-50'}>
                <li>
                    <Link to="/about">Our Company</Link> 
                </li>
                <li>
                    <Link to="/locations">Locations</Link>
                </li>
                <li >
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}