import React, { useEffect } from "react";



const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy | Code and Canva"; // Change title
  }, [])
  return (
    <div className="text-white p-6 max-w-4xl mx-auto">
      <img src="https://indeedseo.com/wp-content/uploads/2018/08/refund-policy-banner.jpg" alt="" />
      <h2 className="text-5xl font-bold my-6 text-center font-serif">📌 Refund & Replacement Policy</h2>

      <h3 className="text-xl font-semibold mt-4">1. Eligibility for Refunds</h3>
      <ul className="list-disc pl-5">
        <li>If the project is canceled before any work has begun.</li>
        <li>If the final deliverables do not match the agreed-upon scope.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">2. No Refunds in Certain Cases</h3>
      <ul className="list-disc pl-5">
        <li>The client approves the work and later changes their mind.</li>
        <li>The delay is due to the client’s lack of communication.</li>
        <li>The project has already been completed as per the agreed terms.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">3. Revisions & Modifications</h3>
      <p>We allow minor revisions within the project scope. Any additional requests beyond the agreed scope may require extra charges.</p>

      <h3 className="text-xl font-semibold mt-4">4. Contact for Refund Requests</h3>
      <p>To request a refund, email us at <strong>aniketsen521@gmail.com</strong> with details of your issue.</p>
    </div>
  );
};

export default RefundPolicy;
