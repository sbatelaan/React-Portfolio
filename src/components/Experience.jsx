import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactimg from "../assets/reactimg.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import graphql from "../assets/graphql.png";
import nextjs from "../assets/nextjs.png";
import mongo from "../assets/mongodb.png"

const Experience = () => {

    const techStack = [
        {
            id: 1,
            src: html,
            titel: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            titel: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: reactimg,
            titel: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 4,
            src: javascript,
            titel: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: node,
            titel: 'TailWind',
            style: 'shadow-green-400'
        },
        {
            id: 6,
            src: tailwind,
            titel: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 7,
            src: nextjs,
            titel: 'NextJS',
            style: 'shadow-white'
        },
        {
            id: 8,
            src: graphql,
            titel: 'GraphQL',
            style: 'shadow-pink-400'
        },
        {
            id: 9,
            src: mongo,
            titel: 'MongoDB',
            style: 'shadow-green-500'
        },
    ]


  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-6">
                    These are the technologies I have worked with so far
                </p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {
                    techStack.map(({id, src, title, style}) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
                    ))
                }

                
            </div>
        </div>
    </div>
  )
}

export default Experience