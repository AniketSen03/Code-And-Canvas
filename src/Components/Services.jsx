




import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    document.title = "Services | Code and Canva"; // Change title
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate images
      gsap.from(".service-img", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-img",
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none none",
        },
      });

      // Animate text
      gsap.from(".service-text", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".service-text",
          start: "top 90%",
          end: "bottom 70%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-evenly items-center my-20 max-sm:ml-20">
      <h1 className="text-5xl text-center text-white font-bold mb-10 service-text font-serif">🛠️ Services</h1>

      {/* First Section */}
      <div className="flex  flex-wrap justify-evenly w-full max-sm:flex-col max-sm:items-center max-sm:gap-y-1">
        <img src="src/assets/Multicolor Vivid Summer Photo Collage A4 Document.jpg" alt="" className="w-[40%] service-img max-sm:w-max" />
        <img src="src/assets/Untitled design (1).jpg" alt="" className="w-[40%] service-img max-sm:w-max" />
      </div>
      <span className="text-3xl text-center text-red-400 font-semibold mt-3 service-text">Design Services</span>
      <hr className="bg-white w-[70%] my-5" />
      <span className="text-xl text-center text-white font-extralight mb-10 service-text">
        LOGOS, POSTERS, BRAND IDENTITY, SOCIAL MEDIA, THUMBNAIL
      </span>

      {/* Second Section */}
      <div className="flex justify-evenly w-full max-sm:flex-col max-sm:items-center max-sm:gap-y-1">
        <img src="src/assets/screen.jpg" alt="" className="w-[40%] service-img max-sm:w-max" />
        <img src="src\assets\web  page design.png" alt="" className="w-[40%] service-img max-sm:w-max" />
      </div>
      <span className="text-3xl text-red-400 text-center font-semibold mt-3 service-text">Web/App Development</span>
      <hr className="bg-white w-[70%] my-5" />
      <span className="text-xl text-center text-white font-extralight mb-10 service-text">
        LANDING PAGES, E-COMMERCE, PERSONAL WEBSITE
      </span>
    </div>
  );
};

export default Services;
// import React, { useEffect } from 'react'

// const Services = () => {
//   useEffect(() => {
//     document.title = "Services | Code and Canva"; // Change title
//   }, []);
//   return (
//     <>
//       <div className='flex flex-col flex-wrap justify-evenly  items-center'>
//         <h1 className='text-5xl text-white font-bold mb-10'>Services</h1>
//         <div className='flex justify-evenly'>
//           <img src="src\assets\Multicolor Vivid Summer Photo Collage A4 Document.jpg" alt="" className='w-[40%]' />
//           <img src="src\assets\Untitled design (1).jpg" alt="" className='w-[40%] ' />
//         </div>
//         <span className='text-3xl text-white font-semibold mt-3'>Design Services</span>
//         <hr className='bg-white  w-[70%] my-5'/>
//         <span className='text-xl text-white font-semibold mb-10'>LOGOS, POSTERS, BRAND IDENTITY, SOCIAL MEDIA, THUMBNAIL</span>
//         <div className='flex justify-evenly'>
//           <img src="src\assets\screen.jpg" alt="" className='w-[40%]' />
//           <img src="src\assets\web  page design.png" alt="" className='w-[40%] ' />
//         </div>
//         <span className='text-3xl text-white font-semibold mt-3'>Web/App Development</span>
//         <hr className='bg-white w-[70%] my-5'/>
//         <span className='text-xl text-white font-semibold mb-10'>LANDING PAGES, E-COMMERCE, PERSONAL WEBSITE</span>

//       </div>
//     </>
//   )
// }

// export default Services