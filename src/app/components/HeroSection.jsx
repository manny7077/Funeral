"use client";
import React from "react";
import Image from "next/image";
//import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const scrollToContact = () => {
  const contactSection = document.getElementById('contacts');
  if (contactSection) {
    contactSection.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

const HeroSection = () => {
  return (
    <section id="home"className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            TRIBUTE TO AMOS K. TAWIAH
            </span>
           
            
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            
          </p>
          <div>
             <a href="https://drive.google.com/file/d/1OQR4z_GoGpV_P-7ijdCF6-KEj42SCJfn/view?usp=drive_link" download="Tributes.pdf">
  <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-600 text-white mt-3">
    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
      Download Brochure
    </span>
  </button>
</a>
          </div>
        </motion.div>
          <div className=" w-[250px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Images/Image 3.jpeg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={650}
              height={650}
            />
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
