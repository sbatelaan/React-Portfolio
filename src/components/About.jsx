import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hello! I'm Stephen Batelaan, a recent graduate of the Full Stack Web
          Development Bootcamp at the University of California, Irvine. I am a
          passionate web developer proficient in JavaScript, with a focus on the
          MERN stack (MongoDB, Express, React, Node.js).
        </p>
        <br />
        <p className="text-xl">
          Coming from a background in serving in fine dining restaurants, I
          bring a unique set of skills to the table. I thrive in high-pressure
          situations, excel in time management, and have excellent communication
          skills.
        </p>
        <br />
        <p className="text-xl">
          What drives me as a developer is the opportunity to continuously learn
          and build things. I am an avid learner, always staying up-to-date with
          the latest web technologies and best practices. I am enthusiastic
          about tackling new challenges and finding innovative solutions.
        </p>
        <br />
        <p className="text-xl">
          I am dedicated to helping you achieve your development needs and
          goals. Whether it's developing a robust web application or creating an
          engaging user experience, I am committed to delivering high-quality
          results.
        </p>
        <br />
        <p className="text-xl">
          Let's work together to bring your ideas to life and create exceptional
          web solutions!
        </p>
      </div>
    </div>
  );
};

export default About;
