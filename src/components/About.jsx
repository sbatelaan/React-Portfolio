import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa rem, ea enim, labore libero eos iste praesentium beatae voluptatum numquam obcaecati excepturi aperiam ipsum accusamus. Sunt non hic aliquam vero!
            </p>
            <br />
            <p className="text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt iure dolorum, vel quos fugiat libero error sed at praesentium consequatur est, laboriosam ipsam sunt ipsum saepe deleniti in, officiis pariatur.
            </p>
        </div>
    </div>
  )
}

export default About