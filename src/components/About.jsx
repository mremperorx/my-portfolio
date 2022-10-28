import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I'm currently learning Web Development, I like to learn more and more about Web Development world. I'm also a gamer, i like to spend some time playing games, and my 2023 Goal: to be Full-Stack Developer.
        </p>

        <br />

        <p className="text-xl">
         I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their devices.
        </p>
      </div>
    </div>
  );
};

export default About;
