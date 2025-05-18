import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What services does Code and Canvas offer?",
    answer: "We specialize in Web Development, UI/UX Design, Graphic Design, and Branding.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary, but typically websites take 1-2 weeks, and branding projects take 1-2 weeks.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide maintenance and support services after project completion to ensure smooth performance.",
  },
  {
    question: "How do I get a quote for my project?",
      answer: "You can contact us via our form or email us at aniketsen521@gmail.com with your project details.",
  },
];

const Faq = () => {
  useLayoutEffect(() => {
    document.title = "FAQ | Code and Canvas"; // Change title

    const ctx = gsap.context(() => {
      gsap.utils.toArray(".faq-card").forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100, // Alternate: Left (-100) & Right (100)
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white text-center mb-6 font-serif">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-card bg-white p-4 rounded-lg shadow-md hover:bg-red-400 transition-all duration-300 ease-in">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;







// import React, { useEffect } from "react";


// const faqs = [
//   {
//     question: "What services does Code and Canvas offer?",
//     answer:
//       "We specialize in Web Development, UI/UX Design, Graphic Design, and Branding.",
//   },
//   {
//     question: "How long does it take to complete a project?",
//     answer:
//       "Project timelines vary, but typically websites take 1-2 weeks, and branding projects take 1-2 weeks.",
//   },
//   {
//     question: "Do you offer post-launch support?",
//     answer:
//       "Yes, we provide maintenance and support services after project completion to ensure smooth performance.",
//   },
//   {
//     question: "How do I get a quote for my project?",
//     answer:
//       "You can contact us via our form or email us at contact @ codeandcanvas.nelify.app with your project details.",
//   },
// ];

// const Faq = () => {
//   useEffect(() => {
//     document.title = "FAQ | Code and Canvas"; // Change title
//   }, [])
//   return (
//     <section className="py-12">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-white text-center mb-6">❓ Frequently Asked Questions</h2>
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
//               <p className="text-gray-700 mt-2">{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Faq;
