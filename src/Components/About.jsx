import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    document.title = "About | Code and Canvas";
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".about-text", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const about = [
    {
      img: "./logo.png",
      des: "Code and Canvas is a creative agency that blends innovative web development with stunning graphic design to build impactful digital experiences. We help businesses establish a strong online presence through high-quality websites, branding, and visual storytelling.",
    },
  ];

  return (
    <div className="about-section flex flex-wrap justify-evenly items-center my-36 gap-10 px-4
      max-w-7xl mx-auto
      md:flex-nowrap md:gap-20
      sm:my-24 sm:px-6
      max-sm:flex-col max-sm:my-16 max-sm:px-4">
      {/* Left Side (Logo) */}
      <div className="flex flex-col items-center about-img mb-8 md:mb-0">
        <span className="font-bold text-4xl md:text-5xl text-white font-serif mb-4 text-center">
          What is
        </span>
        <img
          src={about[0].img}
          alt="Code and Canvas Logo"
          className="w-28 h-auto md:w-40"
        />
      </div>

      {/* Right Side (Description) */}
      <p className="about-text font-mono text-justify text-base md:text-xl text-red-50 max-w-lg
        first-letter:text-red-500 first-letter:font-extrabold
        sm:text-lg
        ">
        {about[0].des}
      </p>
    </div>
  );
};

export default About;
