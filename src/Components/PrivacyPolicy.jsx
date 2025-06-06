import React, { useEffect } from "react";

 

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Code and Canvas"; // Change title
  }, [])
  return (
    <div className="text-white p-4 sm:p-6 max-w-4xl mx-auto">
      <div className="w-full flex justify-center mb-6">
        <img
          src="/7.jpg"
          alt=""
          className="w-full max-w-xl h-auto rounded-lg shadow-lg object-contain"
        />
      </div>
      <h2 className="text-3xl sm:text-5xl font-bold my-6 text-center font-serif">📌 Privacy Policy</h2>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">1. Introduction</h3>
      <p className="text-base sm:text-lg">
        At <strong>Code and Canvas</strong>, we respect your privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">2. Information We Collect</h3>
      <ul className="list-disc pl-5 text-base sm:text-lg">
        <li>
          <strong>Personal Information:</strong> Name, email, phone number, and payment details when you purchase our services.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> Browsing behavior, device information, and cookies to improve user experience.
        </li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">3. How We Use Your Information</h3>
      <ul className="list-disc pl-5 text-base sm:text-lg">
        <li>To provide and improve our services.</li>
        <li>To process payments securely.</li>
        <li>To send updates, promotions, and newsletters (if opted in).</li>
      </ul>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">4. Data Protection & Security</h3>
      <p className="text-base sm:text-lg">
        We take appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">5. Your Rights</h3>
      <p className="text-base sm:text-lg">
        You can request to access, update, or delete your data at any time.
      </p>

      <h3 className="text-lg sm:text-xl font-semibold mt-4">6. Contact Us</h3>
      <p className="text-base sm:text-lg">
        For any privacy concerns, reach out at <strong>aniketsen521@gmail.com</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
