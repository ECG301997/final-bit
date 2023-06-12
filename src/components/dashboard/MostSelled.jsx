
const MostSelled = (props) => {

    const data = props.dataCart;


    const productMap = new Map();

    data.forEach(entry => {
        entry.products.forEach(product => {
            const productId = product.productId;
            const quantity = product.quantity;

            if (productMap.has(productId)) {
                productMap.set(productId, productMap.get(productId) + quantity);
            } else {
                productMap.set(productId, quantity);
            }
        });
    });

    // Ordenar el mapeo de mayor a menor según las cantidades
    const sortedMap = new Map([...productMap.entries()].sort((a, b) => b[1] - a[1]));

    sortedMap.forEach((quantity, productId) => {
        console.log(productId +  quantity);
    });


    return (
        <div>
             <table>
      <thead>
        <tr>
          <th>Product ID</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {Array.from(sortedMap.entries()).map(([productId, quantity]) => (
          <tr key={productId}>
            <td>{productId}</td>
            <td>{quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
    )
}

export default MostSelled
