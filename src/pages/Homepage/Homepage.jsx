import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import ProductsSection from '../../components/card/ProductsSection'; // Убедитесь, что путь правильный

const exampleProducts = [
  { id: 1, name: 'Product 1', price: '$10', image: 'https://example.com/image1.jpg', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: '$20', image: 'https://example.com/image2.jpg', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: '$30', image: 'https://example.com/image3.jpg', description: 'Description for Product 3' },
];

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Здесь можно загрузить товары из API
    setProducts(exampleProducts); // Загружаем примеры товаров
  }, []);

  return (
    <div>
      <Header products={products} />
      <ProductsSection />
    </div>
  );
};

export default Homepage;
