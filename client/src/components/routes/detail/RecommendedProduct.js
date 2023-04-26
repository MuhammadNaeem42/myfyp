import React from 'react';
import { Link } from 'react-router-dom';

function RecommendedProduct(props) {
  const { id, name, imageUrl } = props;
  
  return (
    <div>
      <h3>{name}</h3>
      <Link to={`/products?q=page=0,16&id=${id}`}>
        <img src={imageUrl} alt={`Product ${id} Image`} />
      </Link>
    </div>
  );
}

export default RecommendedProduct;
