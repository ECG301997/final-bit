
const TotalOrders = (props) => {
    const data = props;
    const total = data.dataCart.length;
  return (
    <div className='totalOrders'>
      <h1>Total Ordenes : {total}</h1>
    </div>
  )
}

export default TotalOrders
