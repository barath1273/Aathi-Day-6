import React from 'react';
import './Sales.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Sales = () => {
    const salesSummary = [
        { title: 'Total Sales', value: '$25,430' },
        { title: 'Total Orders', value: '120' },
        { title: 'Pending Orders', value: '15' },
        { title: 'Completed Orders', value: '105' },
    ];

    const salesData = [
        { id: 1, customer: 'John Doe', product: 'Product A', quantity: 3, total: 360, status: 'Completed' },
        { id: 2, customer: 'Jane Smith', product: 'Product B', quantity: 1, total: 120, status: 'Pending' },
        { id: 3, customer: 'Michael Lee', product: 'Product C', quantity: 2, total: 300, status: 'Completed' },
        { id: 4, customer: 'Anna Johnson', product: 'Product D', quantity: 5, total: 500, status: 'Completed' },
    ];

    const chartData = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 5000 },
        { name: 'Apr', sales: 4000 },
        { name: 'May', sales: 6000 },
        { name: 'Jun', sales: 7000 },
    ];

    return (
        <div className="sales-container">
            <h1>Sales Overview</h1>

            <div className="sales-summary">
                {salesSummary.map((item, index) => (
                    <div className="sales-card" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>

            <div className="sales-chart">
                <h2>Monthly Sales</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className="sales-table-section">
                <h2>Recent Sales</h2>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salesData.map((sale) => (
                            <tr key={sale.id}>
                                <td>{sale.customer}</td>
                                <td>{sale.product}</td>
                                <td>{sale.quantity}</td>
                                <td>${sale.total}</td>
                                <td>{sale.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sales;
