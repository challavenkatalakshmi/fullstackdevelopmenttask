import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WatchlistDisplay: React.FC = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get('/api/watchlist')
      .then(response => {
        setWatchlist(response.data);
      })
      .catch(error => {
        console.error('Error fetching watchlist:', error);
      });
  }, []);

  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((item: any) => (
          <li key={item.id}>{item.symbol}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchlistDisplay;
