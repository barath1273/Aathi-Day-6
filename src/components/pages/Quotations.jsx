// Quotation.js
import React from 'react'
import './Quotations.css'

const Quotations = () => {
    const quotationItems = [
        { id: 1, description: 'Monitor', quantity: 2, price: 50 },
        { id: 2, description: 'CPU', quantity: 1, price: 80 },
        { id: 3, description: 'Keyboard', quantity: 3, price: 30 },
    ]

    const totalAmount = quotationItems.reduce((total, item) => total + (item.quantity * item.price), 0)

    return (
        <div className="quotation-container">
            <h1>Quotation</h1>
            <div className="quotation-header">
                <div>
                    <h2>Genx</h2>
                    <p>PS  Street</p>
                    <p>Pondy, India</p>
                    <p>Email: company@genx.com</p>
                </div>
                <div>
                    <h3>Customer</h3>
                    <p>Johnson</p>
                    <p>456 IG Road</p>
                    <p>Chennai, India</p>
                    <p>Email: beta@gmail.com</p>
                </div>
            </div>

            <table className="quotation-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {quotationItems.map(item => (
                        <tr key={item.id}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                            <td>${item.quantity * item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="quotation-total">
                <h3>Total Amount: ${totalAmount}</h3>
            </div>
        </div>
    )
}

export default Quotations
