import React from 'react';
import './ProductPreview.css';

const productPreview = () => {
  return (
    <div className="product-preview-container">
      <div className="product-preview-text">
        <div>
          <img
            src={require('../images/image-product-mobile.jpg')}
            alt="product"
            id="product-preview-img"
          />
        </div>
        <div className="flow product-preview-text-content">
          <h1 class="ff-montserrat fs-200 letter-spacing-1 text-gray">
            PERFUME
          </h1>
          <h2 className="fs-700 bold line-height-1 text-black">
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className="text-gray">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <b className="fs-700 text-dark-cyan product-preview-current-price">
            $149.99
          </b>
          <s className="text-gray">$169.99</s>
          <button className="primary-button block-display">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productPreview;
