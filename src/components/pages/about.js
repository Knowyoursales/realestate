import React from "react";
// import Image from "../../assets/4.png";
import Image from "../../assets/roze.jpg";


const AboutUs = () => {
  return (
    <div id="about" className="flex flex-col md:flex-row w-full h-screen bg-amber-800 ">

      <div className="w-full  mt-32 md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-ful rounded-bl-full"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8 bg-gray-100 flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
          Welcome to Roza Real Estate, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. As the CEO of Roza Real Estate, I am proud to lead a team of dedicated professionals who have built a reputation for excellence, integrity, and a client-first approach.            <br/>
            <br/>
            With years of experience in the industry, we are committed to staying ahead of market trends and embracing the latest technologies. This allows us to offer our clients a seamless and confident experience throughout the buying and selling process. At Roza Real Estate, your goals are our priority, and we are here to guide you every step of the way.                 </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
































