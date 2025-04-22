import React from "react";
import Img from "../images/batman.avif"; 
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center px-10 "
    >
      <div className="flex flex-col md:flex-row items-center space-x-10">
        <div className="text-center md:text-left max-w-md">
          <p className="text-lg">Hello, It's me</p>
          <h1 className="text-4xl font-bold">Sorasit Laiget</h1>
          <p className="text-yellow-500 text-lg font-semibold">I'm Batman</p>
          <p className="text-gray-600 mt-2">
          I am vengeance! I am the night! I am BATMAN!
             
          </p>

          <div className="flex justify-center md:justify-start space-x-4 mt-4">
          <div className="flex space-x-4 text-2xl mt-4">
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaEnvelope className="cursor-pointer hover:text-blue-400" />
        </div>
          </div>

          <button className="mt-6 bg-yellow-400  px-6 py-2 rounded-full hover:bg-yellow-600">
            My Portfolio
          </button>
        </div>

        <div
        className="w-100 h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${Img})` }}>
        </div>

      </div>
    </section>
  );
};

export default Home;
