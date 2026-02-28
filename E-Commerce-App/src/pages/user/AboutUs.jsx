import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-800 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-gray-700 shadow-xl rounded-2xl p-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-300">
            About Our Store
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Your trusted destination for quality products, affordable prices,
            and a seamless online shopping experience.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-300">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to provide high-quality products at competitive
              prices while delivering exceptional customer service. We aim to
              make online shopping simple, secure, and enjoyable for everyone.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-400">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We strive to become a leading e-commerce platform by combining
              innovation, technology, and customer-focused service to create a
              smarter shopping experience.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-400">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-600 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-300 text-sm">
                Carefully selected products to ensure the best quality for our customers.
              </p>
            </div>

            <div className="bg-gray-600 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Secure Payments</h3>
              <p className="text-gray-300 text-sm">
                Safe and encrypted payment methods for worry-free transactions.
              </p>
            </div>

            <div className="bg-gray-600 p-6 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Fast Delivery</h3>
              <p className="text-gray-300 text-sm">
                Reliable and quick shipping to ensure your products reach you on time.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Get in Touch
          </h2>
          <p className="text-gray-300">
            Have questions or feedback? We would love to hear from you.
          </p>
          <p className="text-gray-300 font-medium mt-2">
            📧 support@flone.com | 📱 +92-300-123456
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
