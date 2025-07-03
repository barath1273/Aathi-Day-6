import React from 'react';
import './Dashboard.css';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

const Dashboard = () => {
    const data = [
    { name: 'Jan', Mon: 4000, Key: 2400 },
    { name: 'Feb', Mon: 3000, Key: 1398 },
    { name: 'Mar', Mon: 2000, Key: 9800 },
    { name: 'Apr', Mon: 2780, Key: 3908 },
    { name: 'May', Mon: 1890, Key: 4800 },
    { name: 'Jun', Mon: 8390, Key: 3800 },
    { name: 'Jul', Mon: 3490, Key: 7300 },
  ];
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Sales</h3>
          <p>$12,340</p>
        </div>
        <div className="card">
          <h3>Products</h3>
          <p>128 Items</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>56 Orders</p>
        </div>
        <div className="card">
          <h3>Customers</h3>
          <p>89 Users</p>
        </div>
      </div>
      <h1>Report</h1>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Key" fill="#8884d8" />
        <Bar dataKey="Mon" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
