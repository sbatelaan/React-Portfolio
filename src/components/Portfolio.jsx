
import comingSoon from "../assets/portfolio/comingSoon.png"
import UrSpace from "../assets/portfolio/UrSpace.png"
import marketplace from "../assets/portfolio/marketplace.png"
import techBlog from "../assets/portfolio/tech-blog.png"
import React, { useState } from "react";

const Portfolio = () => {
//add links
    const portfolios = [
        {
            id: 1,
            src: UrSpace,
            demoLink: "https://urrspace.herokuapp.com/",
            codeLink: "https://github.com/sbatelaan/urspace",
            name: "UrSpace"
        },
        {
            id: 2,
            src: marketplace,
            demoLink: "https://group-3-marketplace.herokuapp.com/",
            codeLink: "https://github.com/sbatelaan/The-Marketplace",
            name: "The Marketplace"
        },
        {
            id: 3,
            src: techBlog,
            demoLink: "https://hidden-badlands-75872.herokuapp.com/",
            codeLink: "https://github.com/sbatelaan/Model-View-Controller_Tech-Blog",
            name: "MVC Tech Blog"
        },
        {
            id: 4,
            src: comingSoon
        },
        {
            id: 5,
            src: comingSoon
        },
        {
            id: 6,
            src: comingSoon
        },
    ];


    const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

return (
  <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Check out my projects!</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, demoLink, codeLink, name }) => (
          <div
            key={id}
            className="shadow-md shadow-gray-600 rounded-lg"
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative rounded-md overflow-hidden">
              <img
                src={src}
                alt=""
                className="object-cover w-full h-full duration-500 hover:scale-105"
              />
              {hoveredProject === id && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-100">
                  <p className="text-white text-lg font-bold">{name}</p>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
              </a>
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Portfolio;
