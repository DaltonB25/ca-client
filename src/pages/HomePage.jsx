import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  const productsToShowcase = [
    {
      id: 1,
      name: "IPhone 14 Pro Max",
      description:
        "The latest flagship smartphone from Apple with advanced features and performance.",
      price: 1099.99,
      imageUrl:
        "https://www.rueducommerce.fr/media/produits/apple/iphone-14-plus-67-128-go-6-go-ram-minuit-2377488-504810116_116_1200x1200.jpeg",
    },
    {
      id: 2,
      name: "Dell XPS 15 Laptop",
      description:
        "A powerful and sleek laptop for productivity and entertainment.",
      price: 1499.99,
      imageUrl:
        "https://www.cornellstore.com/site/Product_images/11032182_media-01.jpg",
    },
    {
      id: 3,
      name: "Sony PlayStation 5",
      description:
        "Next-generation gaming console with high-speed SSD and immersive gaming experiences.",
      price: 499.99,
      imageUrl:
        "https://www.cnet.com/a/img/resize/6676f465f9c8ec0b80c41e80f9d09aa515400994/hub/2020/06/11/b2c2c445-a606-4f87-a4a3-8fb4f1a5aff3/ps5-render-cropped.jpg?auto=webp&fit=crop&height=675&width=1200 ",
    },
    {
      id: 4,
      title: "NVIDIA GeForce RTX 3080 Graphics Card",
      description:
        "A high-performance graphics card with ray tracing capabilities for gaming and content creation.",
      price: 799.99,
      imageUrl: "https://m.media-amazon.com/images/I/71bda4nJ2JL.jpg",
    },
    {
      id: 5,
      title: "LG CX 4K OLED TV",
      description:
        "An OLED TV with stunning picture quality, deep blacks, and HDMI 2.1 compatibility.",
      price: 1999.99,
      imageUrl:
        "https://i5.walmartimages.com/asr/2ef3e992-8a6e-4ee6-8643-7a54f78df437.2906ac6d920d669dcfb4077a9dc4594f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    },
    {
      id: 6,
      title: "Apple MacBook Pro 14-inch",
      description:
        "A powerful and portable laptop with Apple's M1 Pro chip and stunning Retina display.",
      price: 1999.99,
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-space-m1-2021?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1638575247000",
    },
    {
      id: 7,
      title: "Samsung Odyssey G9 Curved Gaming Monitor",
      description:
        "An ultra-wide curved gaming monitor with high refresh rate and immersive experience.",
      price: 1699.99,
      imageUrl:
        "https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming/06072023/gi/S49CG950SN_002_Front1_Silver_SCOM.jpg?$product-details-jpg$",
    },
    {
      id: 8,
      title: "Apple Watch Series 7",
      description:
        "The latest smartwatch from Apple with enhanced health and fitness tracking features.",
      price: 399.99,
      imageUrl:
        "https://img.pccomponentes.com/articles/61/615183/1585-apple-watch-series-7-gps-cellular-45mm-aluminio-negro-con-correa-deportiva-negra.jpg",
    },
    {
      id: 9,
      title: "Sony WH-1000XM5 Wireless Headphones",
      description:
        "Premium noise-canceling headphones with high-quality sound and comfort.",
      price: 349.99,
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61juFYGuTPL._AC_UL600_SR600,600_.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-gray-100 min-h-screen overflow-x-hidden overflow-y-hidden">
      <header className="bg-gray-800 text-white py-4 px-8">
        <h1 className="text-3xl font-bold text-center">
          Welcome to My Electronic E-Commerce Store
        </h1>
      </header>

      <div className="container mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4 ml-4">Featured Products</h2>
        <Slider {...settings}>
          {productsToShowcase.map((product) => (
            <div key={product.id} className="w-full md:w-1/3 px-4 mb-4 flex">
              <div className="bg-white shadow-md rounded-lg p-4 w-full flex flex-col justify-between">
                <img
                  src={product.image || product.imageUrl}
                  alt={product.name}
                  className="w-full h-40 object-contain mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-xl font-bold mt-2">${product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="container ml-0 mt-8 flex justify-center ">
          <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-2/3 text-center">
            <p className="text-xl font-bold mb-4">See all my products here!</p>
            <Link
              to="/products"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 md:px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// return (
//   <div className="bg-gray-100 min-h-screen">
//     <header className="bg-gray-800 text-white py-4 px-8">
//       <h1 className="text-3xl font-bold text-center">Welcome to My Electronic E-Commerce Store</h1>
//     </header>

//     <div className="container mx-auto mt-8">
//       <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
//       <Slider {...settings}>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {productsToShowcase.map((product) => (
//           <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-xl font-bold mt-2">${product.price}</p>
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
//               onClick={() => handleViewProduct(product.id)}
//             >
//               View Product
//             </button>
//           </div>
//         ))}
//       </div>
//         </Slider>

//     </div>
//   </div>
// );
// };

// export default HomePage;
{
  /* <img src={product.image || product.imageUrl} alt={product.name} className="w-full h-40 object-contain mb-2" /> */
}
