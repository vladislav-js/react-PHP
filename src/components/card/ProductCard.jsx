import React from 'react';
import './ProductsSection.css' // Стили для карточки товара

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__price">{product.price}</p>
        <p className="product-card__description">{product.description}</p>
        <button className="product-card__button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
