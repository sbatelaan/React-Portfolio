import React from 'react';
import profilePic from '../assets/profile.png'
import { RiArrowRightSLine } from 'react-icons/ri'
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">

        <div className="max-w-4xl mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row pt-40">
            <div className=" mx-auto flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Full Stack Web Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                Driven software engineer experienced in developing innovative and scalable solutions to complex challenges.
                </p>
                <div className='pb-40'>
                    <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 cursor-pointer">
                    Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <RiArrowRightSLine size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={profilePic} alt="Stephen-Batelaan software-developer web-developer" className="rounded-2xl mx-auto w-full md:w-2/3" />
            </div>
        </div>
    </div>
  )
};

export default Home