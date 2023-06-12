

const AveragePriceProducts = (props) => {
    const data = props.dataProducts;

    const sum = data.reduce((accumulator, item) => accumulator + item.price, 0);
    const average = Math.round((sum / data.length)*100)/100;

  

  return (
    <div>
      <h1>PROMEDIO:{average} </h1>
    </div>
  )
}

export default AveragePriceProducts
