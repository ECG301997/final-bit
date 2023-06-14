
const TotalProducts = (props) => {
  
  const data = props;
  const TotalProductos = data.dataProducts.length;
  

  return (
    <div className='totalProducts'>
      <h1> TOTAL PRODUCTOS: {TotalProductos}</h1>
    </div>
  )
}

export default TotalProducts
