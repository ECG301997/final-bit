import TotalProducts from "./TotalProducts";
import { useState, useEffect } from "react";
import axios from "axios";
import AveragePriceProducts from "./AveragePriceProducts";
import TotalOrders from "./TotalOrders";
import MostSelled from "./MostSelled";


const Dashboard = (props) => {
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCart,setDataCart] = useState([]);

    const conectAPI = (endpoint,setData) =>{
        axios(`${props.API}/${endpoint}`)
        .then((res) => setData(res.data))
        .catch((err)=> console.error(err))
    }
  useEffect(() => {
    conectAPI('products',setDataProducts)
  }, [])

  useEffect(() => {
    conectAPI('carts',setDataCart)
  }, [])


  return (
    <div>
      <TotalProducts dataProducts={dataProducts}/>
      <AveragePriceProducts dataProducts={dataProducts}/>
      <TotalOrders dataCart={dataCart}/>
      <MostSelled dataCart={dataCart}/>
    </div>
  )
}

export default Dashboard
