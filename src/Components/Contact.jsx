import React, { useState, useLayoutEffect, useEffect } from "react";
import emailjs from "emailjs-com";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-form", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-info", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });


    return () => ctx.revert();
  }, []);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_q7wu33l", // Replace with your EmailJS Service ID
        "template_ei0143q", // Replace with your EmailJS Template ID
        formData, // Send the form data
        "XfxlrEK58fDradwSc" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          alert("✅ Message sent successfully!");
          console.log("Email Sent:", response);
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear the form
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error("EmailJS Error:", error);
        }
      );
  };

    useEffect(() => {
      document.title = "Contact | Code and Canva"; // Change title
    }, [])
  return (
    <section className="py-12 max-sm:ml-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-white mb-6 font-serif">📩 Contact Us</h2>
        <p className="text-white mb-8 font-light">
          Have a project in mind? Let's collaborate and bring your ideas to life!
        </p>

        {/* Contact Form with EmailJS */}
        <form onSubmit={sendEmail} className="contact-form bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="mb-4">
            <input 
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md caret-red-500 outline-red-200"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md caret-red-500 outline-red-200"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md caret-red-500 outline-red-200"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="contact-info mt-6 text-white  text-xl">
          📧 Email: <strong>aniketsen521@email.com</strong>
          <br />📍 Location: Bhopal, India
          <br />📞 Phone: +91 9039141469
        </div>
      </div>
    </section>
  );
};

export default Contact;




// import React, { useEffect, useState } from "react";
// import emailjs from "emailjs-com";

// const Contact = () => {
//   useEffect(() => {
//     document.title = "Contact | Code and Canva"; // Change title
//   }, []);
  
//   const [formData, setFormData] = useState({
//     user_name: "",
//     user_email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_e2aw43h", // ✅ Correct Service ID
//         "template_ei0143q", // ✅ Correct Template ID
//         formData, // ✅ Use formData directly
//         "XfxlrEK58fDradwSc" // ✅ Correct Public Key
//       )
//       .then(
//         (result) => {
//           alert("✅ Message sent successfully!");
//           setFormData({ user_name: "", user_email: "", message: "" });
//         },
//         (error) => {
//           alert("❌ Failed to send message. Check console for details.");
//           console.error("EmailJS Error:", error);
//         }
//       );
//   };

//   return (
//     <section className="py-12">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="text-3xl font-bold text-white mb-6">📩 Contact Us</h2>
//         <p className="text-white mb-8">
//           Have a project in mind? Let's collaborate and bring your ideas to life!
//         </p>
//         <form onSubmit={sendEmail} className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
//           <div className="mb-4">
//             <input
//               type="text"
//               name="user_name"
//               placeholder="Your Name"
//               value={formData.user_name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="user_email"
//               placeholder="Your Email"
//               value={formData.user_email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <textarea
//               name="message"
//               rows="4"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md"
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-700">
//             Send Message
//           </button>
//         </form>
//         <div className="mt-6 text-white">
//           📧 Email: <strong>aniketsen521@gmail.com</strong>  
//           <br />📍 Location: Vidisha, India  
//           <br />📞 Phone: +91 9039141469 
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
