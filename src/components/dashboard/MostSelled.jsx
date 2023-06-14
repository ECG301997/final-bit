import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

import {Line} from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const MostSelled = (props) => {

    const data = props;
    const dataCart = data.dataCart
    const productMap = new Map();

    dataCart.forEach(entry => {
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

    
    const sortedData = Array.from(sortedMap.entries()).map(([productId, quantity]) => ({
      productId: productId,
      quantity: quantity,
    }));

    // Obtener solo los IDs y las cantidades del array sortedData
  const productIds = sortedData.map(item => item.productId);
  const quantities = sortedData.map(item => item.quantity);

    const options = {
      responsive: true,
    }

     // Crear el objeto de datos del gráfico
  const chartData = {
    labels: productIds,
    datasets: [
      {
        label: "PRODUCTOS MAS VENDIDOS",
        data: quantities,
        backgroundColor: generateRandomColors(productIds.length),
        hoverBackgroundColor: generateRandomColors(productIds.length),
      },
    ],
  };

  // Función para generar colores aleatorios para el gráfico
  function generateRandomColors(length) {
    const colors = [];
    for (let i = 0; i < length; i++) {
      colors.push(getRandomColor());
    }
    return colors;
  }

  // Función para generar un color aleatorio en formato hexadecimal
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


    return (
    <div>
    <h2>PRODUCTOS MAS VENDIDOS</h2>
    <Line data={chartData} options={options}/>
  </div>
    )
}

export default MostSelled
