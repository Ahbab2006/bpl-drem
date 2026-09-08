import { AiFillDollarCircle } from "react-icons/ai";

import Logo from "../assets/logo.png"
import { useState } from "react";

const Nav = ({coin}:{coin:number}) => {


    return (
        <nav className='  bg-red-100'>
            <div className="flex justify-between items-center">
                <img src={Logo} alt="" />

                <ul className='flex gap-4 items-center'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Players</a></li>
                    <li><a href="">Schedule</a></li>
                </ul>
                <h2 className="font-bold text-2xl flex gap-1 items-center"><AiFillDollarCircle /> 
                {coin}
                </h2>
                <button></button>
            </div>

        </nav>
    );
};

export default Nav;