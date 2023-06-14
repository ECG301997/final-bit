import TotalProducts from "./TotalProducts";
import { useState, useEffect } from "react";
import AveragePriceProducts from "./AveragePriceProducts";
import TotalOrders from "./TotalOrders";
import MostSelled from "./MostSelled";
import axios from "axios";
import TotalIncome from "./TotalIncome";


const Dashboard = (props) => {
    const [dataProducts, setDataProducts] = useState([]);
    const [dataCart,setDataCart] = useState([]);
    const data = props;

    async function conectAPI(endpoint,setData){
        await axios(`${data.API}/${endpoint}`)
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
      <TotalIncome data={data} />
    </div>
  )
}

export default Dashboard
