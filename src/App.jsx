import React from 'react';
import { 
  ShoppingCart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  ChevronRight,
  Star
} from 'lucide-react';

const categories = [
  {
    title: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&q=80",
    description: "Farm-fresh vegetables sourced directly from local farmers",
    discount: "15% off on bulk orders"
  },
  {
    title: "Organic Fruits",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80",
    description: "Seasonal fruits picked at their peak ripeness",
    discount: "Buy 2 Get 1 Free"
  },
  {
    title: "Dairy Products",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80",
    description: "Fresh milk, cheese, and other dairy products",
    discount: "20% off on weekends"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    comment: "The quality of fresh produce is exceptional. I've been shopping here for years!",
    rating: 5
  },
  {
    name: "Mike Chen",
    comment: "Great prices and even better customer service. Highly recommended!",
    rating: 5
  }
];

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold text-green-600">Anil Provision Store</h1>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Products</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Offers</a>
              <a href="#" className="text-gray-600 hover:text-green-600">About Us</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Contact</a>
            </nav>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-green-700 transition">
              <ShoppingCart size={20} />
              <span>Shop Now</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Fresh Groceries Delivered to Your Doorstep!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get 10% off on your first purchase!
              </p>
              <div className="flex space-x-4">
                <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition">
                  Shop Now
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-50 transition">
                  Explore Offers
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" 
                alt="Fresh Groceries"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <p className="text-green-600 font-semibold mb-4">{category.discount}</p>
                  <button className="w-full bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-600 mb-6">
              At Anil Provision Store, we are committed to offering the freshest products at the best prices. 
              With over 20 years of service to our community, we take pride in providing high-quality groceries 
              and exceptional customer service.
            </p>
            <p className="text-gray-800 font-semibold italic">
              "At Anil Provision Store, we are committed to offering the freshest products at the best prices. 
              Thank you for choosing us!"
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="text-green-600" />
                    <span>+1 234 567 890</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-green-600" />
                    <span>contact@anilstore.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-green-600" />
                    <span>123 Grocery Street, Food City, FC 12345</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg">
                {/* Google Map would go here */}
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Map View
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-600 h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button className="w-full bg-green-600 text-white py-3 rounded-full hover:bg-green-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Anil Provision Store</h3>
              <p className="text-gray-400">Your trusted neighborhood grocery store since 2000.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Offers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Grocery Street</li>
                <li>Food City, FC 12345</li>
                <li>Phone: +1 234 567 890</li>
                <li>Email: contact@anilstore.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400"><Facebook /></a>
                <a href="#" className="hover:text-green-400"><Instagram /></a>
                <a href="#" className="hover:text-green-400"><Twitter /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 Anil Provision Store. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;