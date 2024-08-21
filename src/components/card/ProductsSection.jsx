import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Убедитесь, что путь правильный
import './ProductsSection.css'; // Стили для секции товаров

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Замените URL на ваш реальный API
    fetch()
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <section className="products-section">
      <h2 className="products-section__title">Our Products</h2>
      <div className="products-section__grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
