import React from 'react';
import WatchlistTable from './WatchlistTable';
import WatchlistDisplay from './WatchlistDisplay';

const WatchlistManagement: React.FC = () => {
  return (
    <div>
      <h2>Watchlist Management</h2>
      <WatchlistTable />
      <WatchlistDisplay />
    </div>
  );
};

export default WatchlistManagement;
