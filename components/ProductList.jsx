import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './ProductList.module.css';

export default function ProductList() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/products').then(response => {
      setProducts(response.data);
    });
  }, []);
  return (
    <ul>
      {products &&
        products.map(({ id, name, price, imageUrl }, index) => {
          return (
            <>
              <li key={id} className={styles.item}>
                <div>
                  <Image src={imageUrl} width={250} height={250} alt="" />
                </div>
                <div>{name}</div>
              </li>
            </>
          );
        })}
    </ul>
  );
}
