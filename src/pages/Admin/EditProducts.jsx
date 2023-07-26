// EditProduct.jsx
import React, { useState } from "react";

const EditProduct = ({ product, onSaveChanges, onCloseModal }) => {
    const [productName, setProductName] = useState(product.productName);
    const [productDescription, setProductDescription] = useState(product.productDescription);
    const [productPrice, setProductPrice] = useState(product.productPrice);
    const [category, setCategory] = useState(product.category);

    const handleSave = () => {
        const updatedProductData = {
            productName,
            productDescription,
            productPrice,
            category,
        };
        onSaveChanges(updatedProductData);
    };

    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-content">
                    <h2>Edit Product</h2>
                    <label>Product Name</label>
                    <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    <label>Product Description</label>
                    <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                    <label>Product Price</label>
                    <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                    <label>Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                    <div>
                        <button onClick={handleSave} className="btn-primary">Save Changes</button>
                        <button onClick={onCloseModal} className="btn-secondary">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
