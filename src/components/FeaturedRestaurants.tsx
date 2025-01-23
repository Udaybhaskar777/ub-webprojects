import React from 'react';
import { Star, Clock } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Italian Delight",
    image: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&q=80",
    rating: 4.8,
    deliveryTime: "25-35",
    cuisine: "Italian",
    priceRange: "$$"
  },
  {
    id: 2,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80",
    rating: 4.9,
    deliveryTime: "30-40",
    cuisine: "Japanese",
    priceRange: "$$$"
  },
  {
    id: 3,
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80",
    rating: 4.7,
    deliveryTime: "20-30",
    cuisine: "American",
    priceRange: "$$"
  },
  {
    id: 4,
    name: "Spice Garden",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    rating: 4.6,
    deliveryTime: "35-45",
    cuisine: "Indian",
    priceRange: "$$"
  }
];

export default function FeaturedRestaurants() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Restaurants</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{restaurant.name}</h3>
                <p className="text-sm text-gray-500">{restaurant.cuisine} • {restaurant.priceRange}</p>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium">{restaurant.rating}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{restaurant.deliveryTime} min</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}