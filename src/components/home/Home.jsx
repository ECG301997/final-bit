import Products from "../products/Products";
const Home = (props) => {

  return (
    <>
      <div className="product-card-container">
        <Products API={props.API} />
      </div>
    </>
  )
}

export default Home
