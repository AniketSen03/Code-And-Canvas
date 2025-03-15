import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    document.title = "About | Code and Canva"; // Change title
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        opacity: 0,
        x: -100, // Move from the left
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
        x: 100, // Move from the right
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

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  const about = [
    {
      img: "src/assets/logo.png",
      des: "Code and Canva is a creative agency that blends innovative web development with stunning graphic design to build impactful digital experiences. We help businesses establish a strong online presence through high-quality websites, branding, and visual storytelling.",
    },
  ];

  return (
    <div className="about-section flex flex-wrap justify-evenly items-center my-36 max-sm:justify-center max-sm:ml-[5em]">
      {/* Left Side (Logo) */}
      <div className="flex flex-col items-center about-img">
        <span className="font-bold text-5xl text-white font-serif">What is</span>
        <img src={about[0].img} alt="Code and Canva Logo" className="w-40" />
      </div>

      {/* Right Side (Description) */}
      <p className="about-text font-mono text-justify text-xl text-red-50 max-w-lg first-letter:text-red-500 first-letter:font-extrabold">
        {about[0].des}
      </p>
    </div>
  );
};

export default About;





// import React, { useEffect } from 'react'

// const About = () => {
//   useEffect(() => {
//     document.title = "About | Code and Canva"; // Change title
//   }, [])

//   const about = [
//     {
//       img: 'src/assets/logo.png',
//       des: 'Code and Canva is a creative agency that blends innovative web development with stunning graphic design to build impactful digital experiences. We help businesses establish a strong online presence through high-quality websites, branding, and visual storytelling.'
//     }
//   ]
//   return (
//     <>
//       <div className='flex justify-evenly items-center my-36'>
//         <div className='flex flex-col items-center'>
//           <span className='font-bold text-5xl text-white '>What is
//           </span>
//           <img src={about[0].img} alt="" />
//         </div>
//         <p className='font-serif  text-xl text-red-50 pl-96'>{about[0].des}</p>
//       </div>
//     </>
//   )
// }

// export default About