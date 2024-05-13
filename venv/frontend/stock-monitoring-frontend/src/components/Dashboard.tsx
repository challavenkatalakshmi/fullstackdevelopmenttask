import React from 'react';
import './Dashboard.css'; // Import the CSS file
import DashboardDisplayComponent from './DashboardDisplayComponent';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <DashboardDisplayComponent />
      
      {/* Additional content */}
      <div className="dashboard-content">
        <h3>Recent Activity</h3>
        <ul>
          <li>User logged in</li>
          <li>New order placed</li>
          <li>Product added to cart</li>
        </ul>
      </div>
      
      <div className="dashboard-content">
        <h3>Statistics</h3>
        <p>Total users: 100</p>
        <p>Total orders: 50</p>
        <p>Total revenue: $5000</p>
      </div>
      
      <div className="dashboard-content">
        <h3>Upcoming Events</h3>
        <ul>
          <li>Webinar on React development (Tomorrow)</li>
          <li>Product launch event (Next week)</li>
        </ul>
      </div>
      
      <div className="dashboard-content">
        <h3>Tasks</h3>
        <ul>
          <li>Complete documentation</li>
          <li>Fix bugs in the backend</li>
          <li>Design new landing page</li>
        </ul>
      </div>
      
      {/* Signup and Login buttons */}
      <div className="dashboard-buttons">
        <Link to="/signup">
          <button className="dashboard-button">Signup</button>
        </Link>
        <Link to="/login">
          <button className="dashboard-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
