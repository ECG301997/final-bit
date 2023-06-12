
const TotalOrders = (props) => {
    const total = props.dataCart.length;
  return (
    <div>
      <h1>Total Ordenes : {total}</h1>
    </div>
  )
}

export default TotalOrders
