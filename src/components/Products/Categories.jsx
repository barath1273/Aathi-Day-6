import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        { id: 1, name: 'Electronics', image: 'https://static.vecteezy.com/system/resources/thumbnails/056/654/427/small_2x/mockup-showcases-collection-of-tech-gadgets-designed-in-isometric-view-featuring-stylish-headphones-sleek-power-bank-and-modern-smartphone-all-ready-for-branding-and-customization-photo.jpeg' },
        { id: 2, name: 'Fashion', image: 'https://images.squarespace-cdn.com/content/v1/5432e8d7e4b0fd126503b83b/1548682388873-240C7ICW5RLAT2YL8EDE/still+life+christmas+gifts+mens+fashion+accesories.jpg?format=1000w' },
        { id: 3, name: 'Home', image: 'https://etimg.etb2bimg.com/photo/94147047.cms' },
        { id: 4, name: 'Books', image: 'https://uyc.thecenterforsalesstrategy.com/hubfs/21%20Books%20on%20Our%20Shelves%20for%20Personal%20and%20Professional%20Development.png' },
        { id: 5, name: 'Toys', image: 'https://www.teachearlyyears.com/images/uploads/article/Early_Years_toys.png' },
    ];

    return (
        <div className="categories-container">
            <h1>Categories</h1>
            <div className="categories-grid">
                {categories.map(category => (
                    <div key={category.id} className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
