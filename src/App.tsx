import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import PopularDishes from './components/PopularDishes';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <FeaturedRestaurants />
        <PopularDishes />
      </main>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Amma Homestyle Bites</h3>
              <p className="text-gray-400">Delicious food delivered to your doorstep</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>uk824744@gmail.com</li>
                <li>+91 123 456 789</li>
                <li>AMMA HOMESTYLE BITES</li>
                <li>Andhra Pradesh, VIZIANAGARAM 535005</li>
                <li>India</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Amma Homestyle Bites. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;