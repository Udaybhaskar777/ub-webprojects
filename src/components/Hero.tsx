import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-orange-500 to-red-600">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Food background"
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Delicious Food Delivered to Your Door
        </h1>
        <p className="text-xl text-white mb-8">
          Order from your favorite restaurants with just a few clicks
        </p>
        
        <div className="w-full max-w-2xl flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Enter delivery address"
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search for food or restaurant"
              className="w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors">
            Find Food
          </button>
        </div>
      </div>
    </div>
  );
}