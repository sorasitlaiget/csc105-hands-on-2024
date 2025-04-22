import React from "react";
import Img from "../images/batman2.jpeg"


const AboutMe = () => {
  return (
    <section 
    id="about" 
    className="flex flex-col md:flex-row items-center justify-center p-10 mb-60 "
    >
        <div
            className="w-100 h-80 bg-cover bg-center "
            style={{ backgroundImage: `url(${Img})` }}>
        </div>

      <div className="w-full md:w-2/3  md:pl-10 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
        <h3 className="text-lg text-gray-700 font-semibold">Hero & billionaire</h3>
        <p className="text-gray-600 mt-2">
        Batman is a superhero who appears in American comic books published by DC Comics. Batman was created by the artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939
        </p>
        <button className="mt-6 bg-yellow-400  px-6 py-2 rounded-full hover:bg-yellow-500">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
