// App.tsx or index.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import WatchlistManagement from './components/WatchlistManagement';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/watchlist" element={<WatchlistManagement/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>} />
      </Routes>
    </Router>
  );
};

export default App;
