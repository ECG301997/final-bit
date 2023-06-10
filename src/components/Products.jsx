import { useState, useEffect } from "react";
import axios from "axios";
// import './Products.css'

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios('https://fakestoreapi.com/products').then((res) => setData(res.data));
  }, [])


  return data.map((product) => {
    return (
      <div className="card" key={product.id}>
        <img src={`${product.image}`} alt="img-product-card" />
        <h3>{product.title}</h3>
        <h4>${product.price}</h4>
        <button>Comprar</button>
      </div>
    );
  })
}

export default Products
