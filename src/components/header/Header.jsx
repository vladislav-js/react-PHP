import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Создайте стили для Header

const Header = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logotype">My company</div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className="nav__btn"><Link to="/">Homepage</Link></li>
            <li className="nav__btn"><Link to="/about">About Us</Link></li>
            <li className="nav__btn"><Link to="/shop">Shop now</Link></li>
          </ul>
        </nav>
        <div className="search-container">
          <input
            className="input"
            type="text"
            placeholder="Search..."
            onClick={handleInputClick}
          />
          <button className="search-button">Search</button>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <button className="modal-close" onClick={handleCloseModal}>×</button>
                <h2>Products</h2>
                <ul>
                  {products.map(product => (
                    <li key={product.id}>
                      <span>{product.name}</span> - <span>{product.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        <Link className="btn" to="/auth">Log in</Link>
      </div>
    </header>
  );
};

export default Header;
