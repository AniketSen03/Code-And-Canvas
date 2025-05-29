import React, { useEffect } from "react";



const RefundPolicy = () => {
  useEffect(() => {
    document.title = "Refund Policy | Code and Canvas"; // Change title
  }, [])
  return (
    <div className="text-white px-4 py-8 max-w-4xl mx-auto">
      <div className="w-full flex justify-center mb-6">
        <img
          src="/6.jpg"
          alt=""
          className="w-full max-w-2xl h-auto rounded-lg object-contain"
          style={{ aspectRatio: "auto" }}
        />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold my-6 text-center font-serif">
        📌 Refund & Replacement Policy
      </h2>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">
        1. Eligibility for Refunds
      </h3>
      <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg">
        <li>If the project is canceled before any work has begun.</li>
        <li>If the final deliverables do not match the agreed-upon scope.</li>
      </ul>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">
        2. No Refunds in Certain Cases
      </h3>
      <ul className="list-disc pl-5 text-sm sm:text-base md:text-lg">
        <li>The client approves the work and later changes their mind.</li>
        <li>The delay is due to the client’s lack of communication.</li>
        <li>The project has already been completed as per the agreed terms.</li>
      </ul>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">
        3. Revisions & Modifications
      </h3>
      <p className="text-sm sm:text-base md:text-lg">
        We allow minor revisions within the project scope. Any additional requests beyond the agreed scope may require extra charges.
      </p>

      <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-4">
        4. Contact for Refund Requests
      </h3>
      <p className="text-sm sm:text-base md:text-lg">
        To request a refund, email us at <strong>aniketsen521@gmail.com</strong> with details of your issue.
      </p>
    </div>
  );
};

export default RefundPolicy;
