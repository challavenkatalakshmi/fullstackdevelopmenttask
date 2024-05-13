import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardDisplayComponent: React.FC = () => {
  const [dashboardData, setDashboardData] = useState<any>({});

  const fetchDashboardData = () => {
    axios.get('/api/dashboard')
      .then(response => {
        setDashboardData(response.data);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div>
      <h3>Total Users: {dashboardData.totalUsers}</h3>
      <h3>Total Orders: {dashboardData.totalOrders}</h3>
      <h3>Total Revenue: ${dashboardData.totalRevenue}</h3>
    </div>
  );
};

export default DashboardDisplayComponent;
