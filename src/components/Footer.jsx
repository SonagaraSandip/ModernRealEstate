// Footer.jsx
const Footer = () => {
  return (
    <footer className="py-12 px-6 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-lg font-bold mb-2">Subscribe newsletter and get -20% off</h2>
          <p>
            Discover the perfect family haven in our spacious suburban residences. These thoughtfully designed homes provide ample room for your growing family to thrive.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Shop:</h3>
          <ul className="space-y-1">
            <li>Search</li>
            <li>All collections</li>
            <li>All products</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Account:</h3>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Contact with us</li>
            <li>Faq</li>
            <li>Privacy Policy</li>
            <li>Shipping & Delivery</li>
            <li>Terms & Conditions</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Share:</h3>
          <ul className="space-y-1">
            <li>Youtube</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
          <div className="flex space-x-2 mt-4">
            {/* You can use SVG icons or images for payment methods here */}
            {/* Example placeholder divs for payment icons */}
            <div className="w-10 h-6 bg-white rounded" />
            <div className="w-10 h-6 bg-white rounded" />
            <div className="w-10 h-6 bg-white rounded" />
            <div className="w-10 h-6 bg-white rounded" />
            <div className="w-10 h-6 bg-white rounded" />
          </div>
        </div>
      </div>
      <div className="mt-12 text-xs text-white text-center">
        © 2025, Modernrealestate WorkDo, Powered by WorkDo.io
      </div>
    </footer>
  );
}

export default Footer;
