import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { id: 1, name: "Rahul Sharma", review: "Code and Canvas transformed my business with a stunning website and brand identity. Highly recommended!", rating: 5 },
  { id: 2, name: "Priya Mehta", review: "Loved working with Code and Canvas! Their UI/UX design skills are top-notch. The website is smooth and beautiful.", rating: 4 },
  { id: 3, name: "Amit Verma", review: "Amazing service and support. They understood my vision perfectly and delivered beyond expectations.", rating: 3 },
  { id: 4, name: "Sarthak Khare", review: "Code and Canvas is a skilled team with expertise in React.js and Tailwind CSS. They ensure seamless user experiences and deliver high-quality web solutions. Highly recommended!", rating: 5 },
];

const Reviews = () => {
  useLayoutEffect(() => {
    document.title = "Reviews | Code and Canvas"; // Set page title

    // Ensure GSAP runs after DOM updates
    const ctx = gsap.context(() => {
      gsap.from(".review-card", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".review-grid",
          start: "top 80%", // Animation starts when the section is 80% in view
          end: "bottom 50%", // Ends when the bottom reaches 50% of viewport
          toggleActions: "play none none none", // Play animation once
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="py-12 max-sm:flex max-sm:flex-col max-sm:items-center justify-center max-sm:flex-wrap">
      <div className="max-w-8xl mx-auto px-6 text-center max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
        <h2 className="font-serif text-5xl font-bold text-white mb-6 max-sm:w-max">⭐ Client Reviews</h2>
        <div className="review-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <div key={review.id} className="review-card bg-white p-6 rounded-lg shadow-md max-sm:w-72">
              <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
              <div className="text-yellow-400 mt-2">
                {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
              </div>
              <p className="mt-3 text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

















// import React, { useEffect } from "react";



// const reviews = [
//   {
//     id: 1,
//     name: "Rahul Sharma",
//     review:
//       "Code and Canvas transformed my business with a stunning website and brand identity. Highly recommended!",
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: "Priya Mehta",
//     review:
//       "Loved working with Code and Canvas! Their UI/UX design skills are top-notch. The website is smooth and beautiful.",
//     rating: 4,
//   },
//   {
//     id: 3,
//     name: "Amit Verma",
//     review:
//       "Amazing service and support. They understood my vision perfectly and delivered beyond expectations.",
//     rating: 3,
//   },
//   {
//     id: 4,
//     name: "Sarthak Khare",
//     review:
//       "Code and Canvas is a skilled team with expertise in React.js and Tailwind CSS. They ensure seamless user experiences and deliver high-quality web solutions. Highly recommended!",
//     rating: 5,
//   },

// ];

// const Reviews = () => {
//   useEffect(() => {
//     document.title = "Reviews | Code and Canva"; // Change title
//   }, [])

//   return (
//     <section className="py-12">
//       <div className="max-w-8xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-white mb-6">⭐ Client Reviews</h2>
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {reviews.map((review) => (
//             <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
//               <div className="text-yellow-400 mt-2">
//                 {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
//               </div>
//               <p className="mt-3 text-gray-700">{review.review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
