// src/components/Home.js

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarouselComponent from "./Carousel";
import Contact from "./Contact";
import Cars from "./Cars"
import { Hero } from "./Hero";
import { Partners } from "./Partners";
import { Whyus } from "./whyus";
import { Ourcars } from "./Ourcars";
import { Proposdenous } from "./proposdenous"


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <Whyus />
      <Ourcars />
      <Proposdenous />
      <div className="container mx-auto p-8">

        {/*<CarouselComponent />*/}
        {/*<div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold mb-4">Welcome to Car Shop</h1>
          <p className="text-gray-600 mb-4">
            We provide comprehensive management services for your car dealership, helping you focus on what you do best: making money.
          </p>
          <ul className="list-disc list-inside ">
            <li className="mb-2">User Registration and Profiles</li>
            <li className="mb-2">Create listings for the cars you want to sell</li>
            <li className="mb-2">Mobile Responsive</li>
            <li className="mb-2">Provide tools that estimate the value of a car based on various factors</li>
          </ul>

        </div>*/}
        {/*<Cars />
        <div className="bg-white p-8 rounded-lg shadow-lg mt-8">
          <Contact />
      </div>*/}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
