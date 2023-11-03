import React, { useState, useEffect } from 'react';
import './ViewItem.css'; // Import your CSS file for styling


const ViewItem = ({ productData }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const { images, name, ratings, price, productCode, stockStatus } = productData;

  // State to keep track of the selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileView]);

  return (
    <>
      {isMobileView ? (
       <div className="product-viewer2">
       <div className="product-details">
         <div className="big-image-container2">
           <img src={selectedImage} alt="Selected Product" className="big-image2" />
         </div>
       </div>
       <div className="image-row">
         {images.map((image, index) => (
           <img
             key={index}
             src={image}
             alt={`Product ${index}`}
             className={selectedImage === image ? 'selected' : ''}
             onClick={() => setSelectedImage(image)}
           />
         ))}
       </div>
       <div className="detailsVI">
         <h2>{name}</h2>
         <div className="ratingsVI">
           {/* Display stars and total reviews */}
           <span className="stars">★★★★★</span>
           <span className="total-reviewsVI">{ratings.reviews} reviews</span>
         </div>
         <div className="price">
           <p className="sale-price">${price.sale}</p>
           <p className="old-price">${price.old}</p>
           <p className="discount-tag">{price.discount}% off</p>
         </div>
         <p className="product-code">SKU: {productCode}</p>
        
         <p className="stock-status">{stockStatus}</p>
         <button id="addtocart">Add to Cart</button>
       </div>
     </div>
     
      ) : (
        <div className="product-viewer">
          <div className="image-column">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index}`}
                className={selectedImage === image ? 'selected' : ''}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <div className="product-details">
            <div className="big-image-container">
              <img src={selectedImage} alt="Selected Product" className="big-image" />
            </div>
          </div>
          <div className="detailsVI">
            <h2>{name}</h2>
            <div className="ratingsVI">
              {/* Display stars and total reviews */}
              <span className="stars">★★★★★</span>
              <span className="total-reviewsVI">{ratings.reviews} reviews</span>
            </div>
            <div className="price">
              <p className="sale-price">${price.sale}</p>
              <p className="old-price">${price.old}</p>
              <p className="discount-tag">{price.discount}% off</p>
            </div>
            <p className="product-code">SKU: {productCode}</p>
           
            <p className="stock-status">{stockStatus}</p>
            <button id="addtocart">Add to Cart</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewItem;
