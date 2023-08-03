import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-500 to-blue-600 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p>Email: info@yourhealthcarewebsite.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Healthcare Street, City, Country</p>
          </div>

          {/* Middle section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <p>
              Your Healthcare Website is committed to providing high-quality healthcare services and
              information to our valued patients and visitors.
            </p>
            <p>Join us in our mission to promote health and well-being for all.</p>
          </div>

          {/* Right section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-all">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-all">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-all">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Healthcare Website. All rights reserved.
        </p>
        <p className="text-sm">Powered by React and crafted with care.</p>
      </div>
    </footer>
  );
};

export default Footer;
