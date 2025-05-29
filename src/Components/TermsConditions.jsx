import React, { useEffect } from "react";

 

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms And Conditon | Code and Canvas"; // Change title
  }, [])
  return (
    <div className="text-white p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="w-full flex justify-center mb-6">
        <img
          src="/8.jpg"
          alt=""
          className="w-full max-w-2xl h-auto rounded-lg object-contain"
        />
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold my-6 text-center font-serif">📌 Terms & Conditions</h2>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">1. Introduction</h3>
      <p className="text-base sm:text-lg">Welcome to <strong>Code and Canvas</strong>! By using our website and services, you agree to comply with these terms.</p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">2. Services Offered</h3>
      <p className="text-base sm:text-lg">We provide <strong>graphic design, branding, website development, and digital content creation.</strong> Our services are tailored to meet client requirements.</p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">3. Payments & Pricing</h3>
      <ul className="list-disc pl-5 text-base sm:text-lg">
        <li>All payments must be made in advance unless otherwise agreed.</li>
        <li>Prices are subject to change based on project complexity.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">4. Intellectual Property Rights</h3>
      <ul className="list-disc pl-5 text-base sm:text-lg">
        <li>All designs and code provided remain our intellectual property until full payment is made.</li>
        <li>Clients cannot resell or redistribute our work without permission.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">5. Revisions & Approval</h3>
      <ul className="list-disc pl-5 text-base sm:text-lg">
        <li>We offer limited revisions as per the project scope. Additional revisions may incur extra charges.</li>
        <li>Once approved, we are not responsible for future changes or modifications.</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">6. Limitation of Liability</h3>
      <p className="text-base sm:text-lg">We are not liable for any indirect damages arising from the use of our services.</p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">7. Governing Law</h3>
      <p className="text-base sm:text-lg">These terms are governed by the laws of <strong>India</strong>.</p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">8. Contact Us</h3>
      <p className="text-base sm:text-lg">For any questions, email us at <strong>@ code-and-canvas.netlify.app</strong>.</p>
    </div>
  );
};

export default TermsConditions;
