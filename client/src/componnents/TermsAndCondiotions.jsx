import React, { useState } from "react";
import "../CssFiles/Terms.css"

const TermsAndConditions = () => {
    const [showConditions, setShowConditions] = useState(false);

  return (
    <div>
<div className="bg-gray-100 font-sans leading-normal tracking-normal min-h-screen">
      <div className="container mx-auto p-10">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Terms and Conditions</h1>
        <div className={` bg-white p-10 shadow-lg rounded-lg mt-10 animation-fade-in-up`}>
          <p className="text-gray-700 text-base mt-6">
            These Terms and Conditions govern your use of our website. By accessing and using our website, you agree to be
            bound by these Terms and Conditions. If you do not agree with these Terms and Conditions, please do not use our
            website.
          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 1: Introduction</h2>
          <p className="text-gray-700 text-base mt-6">
            Our website is a platform for connecting users with various services. We provide a variety of services, and we
            are constantly adding new services to our website. Our goal is to make it easy for you to find the services
            you need.
          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 2: Usage</h2>
          <p className="text-gray-700 text-base mt-6">
            You may use our website for personal and non-commercial purposes only. You may not use our website for any
            illegal or unauthorized purpose. You may not use our website in any manner that could damage, disable, or
            overburden our website or interfere with any other party's use and enjoyment of our website.
          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 3: Content</h2>
          <p className="text-gray-700 text-base mt-6">
            The content on our website is for general informational purposes only. We do not guarantee the accuracy,
            completeness, or usefulness of any information on our website. We are not responsible for
          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 4: Intellectual Property</h2>
          <p className="text-gray-700 text-base mt-6">
          All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of our company or our licensors and is protected by United States and international copyright laws.
          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 5: Limitation of Liability</h2>
          <p className="text-gray-700 text-base mt-6">
            The Our company and its affiliates, licensors, and suppliers shall not be liable for any damages or loss, including without limitation direct or indirect, special, incidental, or consequential damages, losses or expenses arising in connection with our website or use thereof or inability to use by any party, or in connection with any failure of performance, error, omission, interruption, defect, delay in operation or transmission, computer virus or line or system failure, even if our company, or representatives thereof, are advised of the possibility of such damages, losses or expenses.

          </p>
          <h2 className="text-2xl font-bold mt-10 text-gray-900">Section 6: Indemnification</h2>
          <p className="text-gray-700 text-base mt-6">
          You agree to indemnify, defend and hold harmless our company, its affiliates, licensors, and suppliers, and their respective officers, directors, employees, agents, successors, assigns, content providers, and other contractors from and against any and all claims, damages, losses, liabilities, judgments, settlements, penalties, fines, costs and expenses (including reasonable attorneys’ fees and costs) arising out of or relating to your use of our website or your breach of these Terms and Conditions.
          </p>
        </div>
      </div>
    </div>




    </div>
  );
};

export default TermsAndConditions;
