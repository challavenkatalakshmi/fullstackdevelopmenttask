import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StockDataDisplay: React.FC = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    axios.get('/api/stock-data')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Error fetching stock data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Stock Data</h2>
      {/* Display stock data here */}
    </div>
  );
};

export default StockDataDisplay;
