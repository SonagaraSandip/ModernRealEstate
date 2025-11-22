import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#172229]">
      {/* Header Section */}
      <div className="px-6 py-8 md:px-12 lg:px-24">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="flex items-center gap-3 text-white hover:text-teal-400 transition-colors group mb-12"
        >
          <div className="w-10 h-10 rounded-full border-2 border-white group-hover:border-teal-400 flex items-center justify-center transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
          <span className="text-lg font-medium">Back to Home</span>
        </Link>

        {/* Title & Description */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-md md:text-lg max-w-3xl leading-relaxed">
            We value the diverse perspectives and experiences of our users, and
            we encourage collaboration and community engagement. Our platform
            provides opportunities for users to contribute their knowledge and
            share their opinions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 px-6 py-16 md:px-12 lg:px-24 text-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Terms & Conditions
        </h2>

        {/* 1. GENERAL CONDITIONS */}
        <h3 className="text-xl font-bold mb-3">1. GENERAL CONDITIONS</h3>
        <p className="mb-4">
          We reserve the right to refuse service to anyone for any reason at any
          time.
        </p>
        <p className="mb-4">
          You understand that your content (not including credit card
          information), may be transferred unencrypted and involve (a)
          transmissions over various networks; and (b) changes to conform and
          adapt to technical requirements of connecting networks or devices.
          Credit card information is always encrypted during transfer.
        </p>
        <p className="mb-4">
          You agree not to reproduce, duplicate, copy, sell, resell or exploit
          any portion of the Service, use of the Service, or access to the
          Service or any contact on the website through which the service is
          provided, without express written permission by us.
        </p>
        <p className="mb-10">
          The headings used in this agreement are included for convenience only
          and will not limit or otherwise affect these Terms.
        </p>

        {/* 2. ACCURACY */}
        <h3 className="text-xl font-bold mb-3">
          2. ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
        </h3>
        <p className="mb-4">
          We are not responsible if information made available on this site is
          not accurate, complete, or current. The material on this site is
          provided for general information only and should not be relied upon or
          used as the sole basis for making decisions without consulting primary
          or more accurate sources.
        </p>
        <p className="mb-4">
          Any reliance on the material on this site is at your own risk. This
          site may contain certain historical information. Historical
          information is for reference only and may not be current.
        </p>
        <p className="mb-10">
          We reserve the right to modify the contents of this site at any time,
          but we have no obligation to update any information. You agree it is
          your responsibility to monitor changes.
        </p>

        {/* 3. MODIFICATIONS */}
        <h3 className="text-xl font-bold mb-3">
          3. MODIFICATIONS TO THE SERVICE AND PRICES
        </h3>
        <p className="mb-4">
          Prices for our products are subject to change without notice.
        </p>
        <p className="mb-4">
          We reserve the right at any time to modify or discontinue the Service
          (or any part or content thereof) without notice.
        </p>
        <p className="mb-10">
          We shall not be liable to you or to any third-party for any
          modification, price change, suspension, or discontinuance of the
          Service.
        </p>

        {/* 4. PRODUCTS */}
        <h3 className="text-xl font-bold mb-3">
          4. PRODUCTS OR SERVICES (If applicable)
        </h3>
        <p className="mb-4">
          Certain products or services may be available exclusively online
          through the website. These may have limited quantities and are subject
          to return or exchange only according to our Return Policy.
        </p>
        <p className="mb-4">
          We have made every effort to display as accurately as possible the
          colors and images of our products. We cannot guarantee your monitor’s
          display will be accurate.
        </p>
        <p className="mb-4">
          We reserve the right to limit sales of our products or Services to any
          person, geographic region or jurisdiction. We may exercise this right
          on a case-by-case basis.
        </p>
        <p className="mb-4">
          We reserve the right to limit quantities of products or services
          offered. All descriptions of products or pricing are subject to change
          at any time without notice.
        </p>
        <p className="mb-4">
          We reserve the right to discontinue any product at any time. Any offer
          for a product or service on this site is void where prohibited.
        </p>
      </div>
    </div>
  );
};

export default TermsConditions;
