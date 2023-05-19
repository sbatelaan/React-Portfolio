import React from 'react';
import profilePic from '../assets/profile.png'
import { RiArrowRightSLine } from 'react-icons/ri'

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">

        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm A Full Stack Web Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Small section about me
                </p>
                <div>
                    <button>
                        <span>
                        Portfolio<RiArrowRightSLine />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={profilePic} alt="Stephen" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
};

export default Home