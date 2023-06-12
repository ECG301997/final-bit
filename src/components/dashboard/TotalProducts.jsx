
const TotalProducts = (props) => {

  const TotalProductos = props.dataProducts.length;
  

  return (
    <div>
      <h1> TOTAL PRODUCTOS: {TotalProductos}</h1>
    </div>
  )
}

export default TotalProducts
