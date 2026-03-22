import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  return <ul>{products && products.map(({ id, name }, index) => <li key={id}>{name}</li>)}</ul>;
}
