import React from 'react'
import './Transfer.css'
const Transfer = () => {
  const transfers=[
    { id: 1, product: 'Laptop', brand: 'Dell', code: 'D123', quantity: 5, from: 'Warehouse A', to: 'Store B', date: '2025-07-01' },
    { id: 2, product: 'Phone', brand: 'Apple', code: 'A46', quantity: 10, from: 'Warehouse B', to: 'Store A', date: '2025-07-02' },
    { id: 3, product: 'Monitor', brand: 'LG', code: 'L012', quantity: 2, from: 'Warehouse A', to: 'Store C', date: '2025-07-02' },
    { id: 4, product: 'Headphones', brand: 'Sony', code: 'H789', quantity: 8, from: 'Warehouse C', to: 'Store B', date: '2025-07-03' },
    { id: 5, product: 'Phone', brand: 'Apple', code: 'A46', quantity: 10, from: 'Warehouse B', to: 'Store A', date: '2025-07-02' },
    { id: 6, product: 'Monitor', brand: 'LG', code: 'L012', quantity: 2, from: 'Warehouse A', to: 'Store C', date: '2025-07-02' },
    { id: 7, product: 'Headphones', brand: 'Sony', code: 'H789', quantity: 8, from: 'Warehouse C', to: 'Store B', date: '2025-07-03' },
  ]
  return (
    <div className='transfer-container'>
      <h1>Transfer</h1>
      <table className='transfer-table'>
        <thead>
          <tr>
            <th>Product</th>
            <th>Brand</th>
            <th>Code</th>
            <th>Quantity</th>
            <th>From</th>
            <th>To</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer,index)=>(
            <tr key={index}>
              <td>{transfer.product}</td>
              <td>{transfer.brand}</td>
              <td>{transfer.code}</td>
              <td>{transfer.quantity}</td>
              <td>{transfer.from}</td>
              <td>{transfer.to}</td>
              <td>{transfer.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transfer
