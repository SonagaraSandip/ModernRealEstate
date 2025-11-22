import React from "react";
import { Link } from "react-router-dom";

const ShippingDelivery = () => {
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

        {/* Page Title & Description */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Shipping & Delivery
          </h1>
          <p className="text-gray-300 text-md md:text-lg max-w-3xl leading-relaxed">
            We value the diverse perspectives and experiences of our users, and
            we encourage collaboration and community engagement. Our platform
            provides opportunities for users to contribute their knowledge and
            share their opinions.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="bg-gray-50 px-6 py-16 md:px-12 lg:px-24 text-gray-900">
        {/* Section: Shipping & Delivery */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Shipping & Delivery
        </h2>

        <p className="mb-4">
          Our policy lasts <strong>30 days</strong>. If 30 days have gone by
          since your purchase, unfortunately we can’t offer you a refund or
          exchange.
        </p>

        <p className="mb-4">
          To be eligible for a return, your item must be unused and in the same
          condition that you received it. It must also be in the original
          packaging.
        </p>

        <p className="mb-4">
          Several types of goods are exempt from being returned. Perishable goods
          such as food, flowers, newspapers or magazines cannot be returned. We
          also do not accept products that are hazardous materials or flammable.
        </p>

        <p className="font-semibold mt-6 mb-2">Additional non-returnable items:</p>
        <ul className="list-disc ml-8 mb-4 space-y-1">
          <li>Gift cards</li>
          <li>Downloadable software products</li>
          <li>Some health and personal care items</li>
        </ul>

        <p className="mb-4">
          To complete your return, we require a receipt or proof of purchase.
        </p>

        <p className="mb-4">
          Any item not in its original condition, damaged or missing parts for
          reasons not due to our error will not be refunded.
        </p>

        <p className="mb-4">
          Any item returned more than 30 days after delivery will not be accepted.
        </p>

        {/* Refunds */}
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">
          Refunds (If applicable)
        </h2>

        <p className="mb-4">
          Once your return is received and inspected, we will notify you by
          email. We will inform you about the approval or rejection of your
          refund.
        </p>

        <p className="mb-4">
          If you are approved, your refund will be processed and automatically
          applied to your original method of payment within a certain number of
          days.
        </p>

        <p className="mb-4">
          If you haven’t received a refund yet, first check your bank account
          again. Then contact your card company. It may take time before your
          refund is officially posted.
        </p>

        <p className="mb-6">
          If you've done all of this and you still haven’t received your refund,
          please contact us at themeseupport@shopify.com.
        </p>

        <p className="font-semibold mb-2">Sale items (If applicable):</p>
        <p className="mb-6">
          Only regular priced items may be refunded; sale items are not
          refundable.
        </p>

        {/* Exchanges */}
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">
          Exchanges (If applicable)
        </h2>

        <p className="mb-4">
          We only replace items if they are defective or damaged. If you need to
          exchange for the same item, email us at themeseupport@shopify.com and
          send your item to:
        </p>

        <p className="font-semibold mb-6">
          150 Elgin Street, Ottawa ON K2P1L4, Canada
        </p>

        {/* Gifts */}
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">Gifts</h2>

        <p className="mb-4">
          If the item was marked as a gift when purchased and shipped directly to
          you, you’ll receive a gift credit for the value of your return. Once
          returned, a gift certificate will be mailed to you.
        </p>

        <p className="mb-6">
          If the item wasn’t marked as a gift when purchased, or the gift giver
          shipped it to themselves to give to you later, we will send a refund to
          the gift giver.
        </p>

        {/* Shipping */}
        <h2 className="text-3xl md:text-4xl font-bold mt-12 mb-4">Shipping</h2>

        <p className="mb-4">
          To return your product, mail your product to:
        </p>

        <p className="font-semibold mb-4">
          150 Elgin Street, Ottawa ON K2P1L4, Canada
        </p>

        <p className="mb-4">
          You will be responsible for paying your own shipping costs for returning
          your item. Shipping costs are non-refundable.
        </p>

        <p className="mb-4">
          Depending on where you live, the time it may take for your exchanged
          product to reach you may vary.
        </p>

        <p className="mb-4">
          If you are shipping an item over $75, you should consider using a
          trackable shipping service or purchasing shipping insurance. We don’t
          guarantee we will receive your returned item.
        </p>
      </div>
    </div>
  );
};

export default ShippingDelivery;
