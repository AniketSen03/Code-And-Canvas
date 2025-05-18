import React, { useEffect } from "react";

 

const TermsConditions = () => {
  useEffect(() => {
    document.title = "Terms And Conditon | Code and Canvas"; // Change title
  }, [])
  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <img src="./Term-and-Condition.webp" alt="" />
      <h2 className="text-5xl font-bold my-6 text-center font-serif">📌 Terms & Conditions</h2>

      <h3 className="text-xl font-semibold mt-4">1. Introduction</h3>
      <p>Welcome to <strong>Code and Canvas</strong>! By using our website and services, you agree to comply with these terms.</p>

      <h3 className="text-xl font-semibold mt-4">2. Services Offered</h3>
      <p>We provide <strong>graphic design, branding, website development, and digital content creation.</strong> Our services are tailored to meet client requirements.</p>

      <h3 className="text-xl font-semibold mt-4">3. Payments & Pricing</h3>
      <ul className="list-disc pl-5">
        <li>All payments must be made in advance unless otherwise agreed.</li>
        <li>Prices are subject to change based on project complexity.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">4. Intellectual Property Rights</h3>
      <ul className="list-disc pl-5">
        <li>All designs and code provided remain our intellectual property until full payment is made.</li>
        <li>Clients cannot resell or redistribute our work without permission.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">5. Revisions & Approval</h3>
      <ul className="list-disc pl-5">
        <li>We offer limited revisions as per the project scope. Additional revisions may incur extra charges.</li>
        <li>Once approved, we are not responsible for future changes or modifications.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">6. Limitation of Liability</h3>
      <p>We are not liable for any indirect damages arising from the use of our services.</p>

      <h3 className="text-xl font-semibold mt-4">7. Governing Law</h3>
      <p>These terms are governed by the laws of <strong>India</strong>.</p>

      <h3 className="text-xl font-semibold mt-4">8. Contact Us</h3>
      <p>For any questions, email us at <strong>support@codeandcanva.com</strong>.</p>
    </div>
  );
};

export default TermsConditions;
