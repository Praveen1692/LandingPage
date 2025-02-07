import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Narang Machinery Store</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-blue-200">Home</a>
              <a href="#products" className="hover:text-blue-200">Products</a>
              <a href="#contact" className="hover:text-blue-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Premium NBC Bearings & Grease</h2>
          <p className="text-xl mb-8">Your Trusted Partner for Quality Industrial Components</p>
          <button className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400">
            Contact Us
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">NBC Bearings</h3>
              <img src="https://t3.ftcdn.net/jpg/02/20/96/50/360_F_220965089_RHuxKpLIaWEa7xDLpakoWLRqJWCOmLS3.jpg" alt="NBC Bearings" className="mb-4" />
              <ul className="space-y-2">
                <li>• Ball Bearings</li>
                <li>• Roller Bearings</li>
                <li>• Thrust Bearings</li>
                <li>• Premium Quality</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Industrial Grease</h3>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw6w8W9SKV357B49L6_xndgSJPUxI3NUBhaQ&s" alt="Industrial Grease" className="mb-4" />
              <ul className="space-y-2">
                <li>• Lithium Grease</li>
                <li>• Multi-Purpose Grease</li>
                <li>• High Temperature Grease</li>
                <li>• Extended Durability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-900 mr-4" />
                <span>+91 98765-43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-900 mr-4" />
                <span>info@narangmachinery.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-900 mr-4" />
                <span>123 Industrial Area, Delhi, India</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 text-blue-900 mr-4" />
                <span>Mon-Sat: 9:00 AM - 7:00 PM</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded"
              />
              <textarea
                placeholder="Message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
              <button className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Narang Machinery Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
