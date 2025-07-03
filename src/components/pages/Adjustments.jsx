// Adjustment.js
import React, { useState } from 'react';
import './Adjustments.css';

const Adjustments = () => {
    const [product, setProduct] = useState('');
    const [adjustmentType, setAdjustmentType] = useState('increase');
    const [quantity, setQuantity] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Adjustment Submitted Successfully:
          Product: ${product}
          Type: ${adjustmentType}
          Quantity: ${quantity}
          Reason: ${reason}`);
        // You can reset the form or send the data to backend here
    }

    return (
        <div className="adjustment-container">
            <h1>Stock Adjustment</h1>
            <form className="adjustment-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Select Product</label>
                    <select value={product} onChange={(e) => setProduct(e.target.value)} required>
                        <option value="" disabled>Select a product</option>
                        <option value="Product A">Monitor</option>
                        <option value="Product B">CPU</option>
                        <option value="Product C">Keyboard</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Adjustment Type</label>
                    <select value={adjustmentType} onChange={(e) => setAdjustmentType(e.target.value)} required>
                        <option value="increase">Increase</option>
                        <option value="decrease">Decrease</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required min="1" />
                </div>

                <div className="form-group">
                    <label>Reason</label>
                    <textarea value={reason} onChange={(e) => setReason(e.target.value)} required rows="3"></textarea>
                </div>

                <button type="submit">Submit Adjustment</button>
            </form>
        </div>
    )
}

export default Adjustments;
