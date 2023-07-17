import React, { useEffect, useState } from 'react';
import algoliasearch from 'algoliasearch';
import './App.css';

const RelatedProduct = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const client = algoliasearch('MI9UG88GCC', 'e0486553f36f7059c122b58486e6a60a');
        const index = client.initIndex('react');

        const response = await index.search('', {
          filters: `NOT objectID:${productId}`,
          hitsPerPage: 1000,
        });

        const allProducts = response.hits;
        const randomProducts = getRandomProducts(allProducts, 5);
        setRelatedProducts(randomProducts);
      } catch (error) {
        console.error('Error retrieving related products', error);
      }
    };

    fetchRelatedProducts();
  }, [productId]);

  const getRandomProducts = (products, count) => {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, count);
  };

  const handleAddToCart = (productId) => {
    // Implement your logic for adding the product to the cart here
    console.log(`Added product with ID: ${productId} to cart`);
  };

  const handleNoProductsClick = () => {
    console.log("Clicked on 'No related products found'");
  };

  return (
    <div className="container">
      <h1 className="section-title">Recommended Products</h1>
      <div className="product-list">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product) => {
            const { id, name, price, image } = product;

            return (
              <div key={id} className="product-card">
                <img src={image} alt={name} className="product-image" />
                <div className="product-info">
                  <h4 className="product-name">{name}</h4>
                  <button onClick={() => handleAddToCart(id)}>Add to Cart</button>
                  <p className="product-price">${price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p onClick={handleNoProductsClick}>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProduct;
