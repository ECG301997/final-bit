
const TotalOrders = (props) => {
    const data = props;
    const total = data.dataCart.length;
  return (
    <div>
      <h1>Total Ordenes : {total}</h1>
    </div>
  )
}

export default TotalOrders
