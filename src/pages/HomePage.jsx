import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const productsToShowcase = [
    {
      id: 1,
      name: 'IPhone 14 Pro Max',
      description: 'The latest flagship smartphone from Apple with advanced features and performance.',
      price: 1099.99,
      image: 'ca-client\src\images\iphone14.jpg',
    },
    {
      id: 2,
      name: 'Dell XPS 15 Laptop',
      description: 'A powerful and sleek laptop for productivity and entertainment.',
      price: 1499.99,
      image: '/src/images/Dell XPS.jpg',
    },
    {
      id: 3,
      name: 'Sony PlayStation 5',
      description: 'Next-generation gaming console with high-speed SSD and immersive gaming experiences.',
      price: 499.99,
      image: '/src/images/ps5-render-cropped.webp',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen overflow-y-hidden">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-3xl font-bold text-center">Welcome to My Electronic E-Commerce Store</h1>
      </header>

      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productsToShowcase.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-2" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="container mx-auto mt-8 flex justify-center">
          <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/3 text-center">
            <p className="text-xl font-bold mb-4">See all my products here!</p>
            
            <Link to="/products" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-block">
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
