import React from 'react'
import './Expenses.css'
const Expenses = () => {
  const expenses=[
    { id: 1, category: 'Office Supplies', description: 'Printer paper and pens', amount: 120, date: '2025-07-01', paidTo: 'Stationery Hub' },
    { id: 2, category: 'Utilities', description: 'Electricity bill for June', amount: 300, date: '2025-07-02', paidTo: 'Electric Co.' },
    { id: 3, category: 'Transport', description: 'Delivery fuel cost', amount: 75, date: '2025-07-03', paidTo: 'Fuel Station' },
    { id: 4, category: 'Maintenance', description: 'Air conditioner repair', amount: 200, date: '2025-07-04', paidTo: 'AC Services' },
  ];
  
  return (
    <div className='expense-container'>
      <h1>Expenses</h1>
      <table className='expense-table'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Paid To</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense,index)=>(
            <tr>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>{expense.paidTo}</td>
            </tr>
          ))}
 
        </tbody>
      </table>
    </div>
  )
}

export default Expenses
