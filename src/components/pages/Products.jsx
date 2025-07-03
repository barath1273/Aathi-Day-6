import React from 'react';
import './Products.css';

const Products = () => {
    const products = [
        { name: 'Laptop', brand: 'Dell', code: 'D123', price: 800, unit: 'pcs', stock: 20 },
        { name: 'Phone', brand: 'Samsung', code: 'S456', price: 500, unit: 'pcs', stock: 50 },
        { name: 'Headphones', brand: 'Sony', code: 'H789', price: 150, unit: 'pcs', stock: 30 },
        { name: 'Monitor', brand: 'LG', code: 'L012', price: 300, unit: 'pcs', stock: 10 },
        { name: 'Laptop', brand: 'Asus', code: 'AS25', price: 700, unit: 'pcs', stock: 15 },
        { name: 'Phone', brand: 'Apple', code: 'A46', price: 1000, unit: 'pcs', stock: 30 },
        { name: 'Headphones', brand: 'boAt', code: 'BT89', price: 150, unit: 'pcs', stock: 30 },
        { name: 'Monitor', brand: 'MSI', code: 'M012', price: 300, unit: 'pcs', stock: 20 },
    ];

    return (
        <div className="products-container">
            <h1>Products</h1>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Product Unit</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index)=>(
                      <tr key={index}>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.code}</td>
                        <td>{product.price}</td>
                        <td>{product.unit}</td>
                        <td>{product.stock}</td>
                      </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Products;
