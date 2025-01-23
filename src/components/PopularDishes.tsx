import React from 'react';
import { Heart } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80",
    price: 14.99,
    restaurant: "Italian Delight",
    category: "Pizza"
  },
  {
    id: 2,
    name: "Salmon Sushi Roll",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80",
    price: 18.99,
    restaurant: "Sushi Master",
    category: "Sushi"
  },
  {
    id: 3,
    name: "Classic Cheeseburger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80",
    price: 12.99,
    restaurant: "Burger House",
    category: "Burgers"
  },
  {
    id: 4,
    name: "Butter Chicken",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80",
    price: 16.99,
    restaurant: "Spice Garden",
    category: "Indian"
  }
];

export default function PopularDishes() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Right Now</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <div key={dish.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <button className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
                    <p className="text-sm text-gray-500">{dish.restaurant}</p>
                  </div>
                  <span className="text-lg font-bold text-orange-500">${dish.price}</span>
                </div>
                
                <span className="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                  {dish.category}
                </span>
                
                <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}