import React from 'react';
import GoodsCard from './components/GoodsCard';

function App() {
  const products = [
    { id: 1, name: "Футбольний М'яч Adidas Oceaunz League", price: 1600.00, image: "/images/ball1.jpg" },
    { id: 2, name: "Волейбольний м'яч Ukraine", price: 800.00, image: "/images/ball2.jpg" },
    { id: 3, name: "Баскетбольний м'яч Nike All Court", price: 1500.00, image: "/images/ball3.jpg" },
    { id: 4, name: "М'яч для американського футболу Select American Football Pro", price: 1100, image: "/images/ball4.jpg" },
    { id: 5, name: "М'яч для бейсболу STAR", price: 250.00, image: "/images/ball5.jpg" },
    { id: 6, name: "М'яч для великого тенісу TECNOPRO", price: 70.00, image: "/images/ball6.jpg" },
  ];

  return (
    <div className="product-gallery">
      {products.map(product => (
        <GoodsCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default App;
