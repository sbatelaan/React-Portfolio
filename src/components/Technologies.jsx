
import React, { useState } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactimg from "../assets/reactimg.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import graphql from "../assets/graphql.png";
import mongo from "../assets/mongodb.png";

const Technologies = () => {
  const techStack = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: {
        shadowClass: "shadow-orange-500",
        color: "orange",
      },
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style:
      {
        shadowClass: "shadow-blue-500",
        color: "teal",
      },
    },
    {
      id: 3,
      src: reactimg,
      title: "React",
      style:
      {
        shadowClass: "shadow-cyan-600",
        color: "cyan",
      },
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style:
      {
        shadowClass: "shadow-yellow-500",
        color: "yellow",
      },
    },
    {
      id: 5,
      src: node,
      title: "NodeJS",
      style: 
      {
        shadowClass: "shadow-green-400",
        color: "yellowgreen",
      },
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style:
      {
        shadowClass: "shadow-sky-400",
        color: "PaleTurquoise",
      },
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style:
      {
        shadowClass: "shadow-pink-400",
        color: "hotPink",
      },
    },
    {
      id: 8,
      src: mongo,
      title: "MongoDB",
      style:
      {
        shadowClass: "shadow-green-800",
        color: "DarkOliveGreen",
      },
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">
          With hands-on experience in JavaScript, HTML, CSS, React, Node.js, and more, I have worked with a versatile range of technologies to develop innovative web solutions.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techStack.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`relative shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style.shadowClass}`}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              {hoveredId === id && (
                <p
                  className={`mt-2 text-xs text-center absolute top-full left-0 w-full flex justify-center items-center transition-opacity duration-300`}
                  style={{ color: style.color }}
                >
                  {title}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
