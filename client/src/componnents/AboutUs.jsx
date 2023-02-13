import React, { useState } from  'react';
import "../CssFiles/About.css"

import user2 from "../images/ef1.png";

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);
    const[showMore1,setShowMore1]=useState(false);
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
      <div className="flex flex-wrap">
      <div className="w-s md:w-1/2 p-8 bg-white rounded-lg shadow-lg text-center mb-8 animated fadeIn">
  <img src={user2} alt="Company Logo" className=" w-40 mx-auto mb-4 rounded-full object-cover" />
  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
  <p className={`text-gray-600 mb-4 ${showMore ? '' : 'hidden'}`}>
  <div className="p-6 bg-white rounded-lg shadow-lg m-4 animated fadeIn">  "Our mission is to revolutionize task management and make it easier for businesses to keep track of their tasks and activities. We strive to provide a simple, intuitive platform that allows our clients to create and manage task lists, and generate custom QR codes that can be easily scanned for quick and seamless access to important information. Our goal is to simplify work processes, streamline communication, and improve efficiency for businesses of all sizes."</div></p>
  <button className="btn btn-indigo hover:bg-indigo-800 text-black border-l-4" onMouseEnter={() => setShowMore(!showMore)}>
    {showMore ? ' Show Less' : 'Learn More'}
  </button>
</div>

        <div className="w-full md:w-1/2 p-8 bg-white rounded-lg shadow-lg text-center mb-8 animated fadeIn">
          <img src={user2} alt="Company Values" className="w-40 mx-auto mb-4 rounded-full object-cover" />
          <h3 className="text-xl font-bold text-center text-gray-800 mb-2">Our Values</h3>
          <p className={`text-gray-600 mb-4 ${showMore1 ? '' : 'hidden'}`}>
          <div className="flex flex-wrap justify-center mt-6">
    <div className="p-6 bg-white rounded-lg shadow-lg m-4 animated fadeIn">
      <i className="fas fa-fingerprint fa-3x text-indigo-500"></i>
      <h3 className="text-xl font-bold mt-4">Innovation</h3>
      <p className="text-gray-600 text-base mt-2">We are always looking for new and better ways to serve our clients.</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg m-4 animated fadeIn">
      <i className="fas fa-people-carry fa-3x text-indigo-500"></i>
      <h3 className="text-xl font-bold mt-4">Collaboration</h3>
      <p className="text-gray-600 text-base mt-2">We work together to achieve common goals and deliver results.</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow-lg m-4 animated fadeIn">
      <i className="fas fa-balance-scale fa-3x text-indigo-500"></i>
      <h3 className="text-xl font-bold mt-4">Integrity</h3>
      <p className="text-gray-600 text-base mt-2">We hold ourselves accountable to the highest ethical standards.</p>
    </div>
  </div>
  </p>
          <button className="btn btn-indigo hover:bg-indigo-800 text-black border-r-4" onMouseEnter={() => setShowMore1(!showMore1)}>
          {showMore1 ? ' Show Less' : 'Learn More'}
          </button>
          </div>
          </div>

          </div>



  );
};

export default AboutUs;
