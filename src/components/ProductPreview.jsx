import React from 'react';
import './ProductPreview.css';

const productPreview = () => {
  return (
    <div className="product-preview-container">
      <div className="product-preview-content-container">
        <img
          src={require('../images/image-product-desktop.jpg')}
          alt="product"
          id="product-preview-img"
        />
        <div className="product-preview-text">
          <p id="perfume">P E R F U M E</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <b className="product-preview-current-price">$149.99</b>
          <s className="product-preview-old-price">$169.99</s>
          <button className="primary-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productPreview;
