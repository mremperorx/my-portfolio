import React, { useEffect, useState } from "react";
import Me from "../assets/me1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl text-5xl tracking-tightest font-bold 
              bg-clip-text text-transparent block bg-gradient-to-r from-purple-600 via-green-500 to-red-500 
              dark:bg-gradient-to-r dark:from-purple-600 dark:via-green-400 dark:to-red-600">
            I'm a Front-End Developer
          </h2>
          <p className="py-4 max-w-md">
             I'm currently learning Front-End at IT-School.
             I love to work on web application using technologies like
            React, Tailwind, NodeJs and Vite.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>  
  );
};

export default Home;
