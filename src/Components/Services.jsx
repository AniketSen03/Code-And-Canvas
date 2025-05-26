import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    document.title = "Services | Code and Canvas";
  }, []);

  const navigate = useNavigate();

  const service = [
    {
      img: '/1.jpg',
      service: 'web/app service',
      path: '/web'
    },
    {
      img: '/2.jpg',
      service: 'designs service',
      path: '/designs'
    },
    {
      img: '/3.jpg',
      service: 'video editing service',
      path: '/video-editing'
    },
    {
      img: '/4.jpg',
      service: 'data entry service',
      path: '/data-entry'
    },
    {
      img: '/5.jpg',
      service: 'writing and translation service',
      path: '/writing-translation'
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-evenly items-center my-20 max-sm:ml-20">
      <h1 className="text-5xl text-center text-white font-bold mb-10 service-text font-serif">🛠️ Services</h1>
      {service.map((elem, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-evenly gap-4 cursor-pointer"
          onClick={() => navigate(elem.path)}
        >
          <img src={elem.img} alt="" className="w-[60%] service-img my-2" />
          <h1 className="text-white service-text text-center text-3xl capitalize mb-4 font-extralight font-[math]">{elem.service}</h1>
        </div>
      ))}
    </div>
    
  );
};

export default Services;
