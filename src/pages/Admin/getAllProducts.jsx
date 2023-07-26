import React, { useEffect, useState } from "react";
import './table.css'
import { apiDomain } from "../../utils/utilsDomain";
import EditProduct from "./EditProducts";
import { FaPencilAlt } from 'react-icons/fa';
import {RiDeleteBinFill} from 'react-icons/ri';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isFormClicked, setIsFormClicked] = useState(false); // New state variable

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${apiDomain}/products`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleDelete = async (productId) => {
        try {
            const response = await fetch(`${apiDomain}/products/${productId}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
            // Refresh the product list after successful deletion
            fetchProducts();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setIsEditModalOpen(true);
        setIsFormClicked(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
        setIsFormClicked(false); 
    };

    const handleSaveChanges = async (updatedProductData) => {
        try {
            const response = await fetch(`${apiDomain}/products/${selectedProduct.productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProductData),
            });
            const data = await response.json();
            console.log(data);
            fetchProducts();
            handleCloseModal();
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div className={`main-container ${isFormClicked ? 'form-clicked' : ''}`}>
            {isEditModalOpen && selectedProduct && (
                <EditProduct
                    product={selectedProduct}
                    onSaveChanges={handleSaveChanges}
                    onCloseModal={handleCloseModal}
                />
            )}
            <h1 style={{ textAlign: 'center' }}>All Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Description</th>
                        <th>Product Price</th>
                        <th>Product Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId}>
                            <td>{product.productName}</td>
                            <td>{product.productDescription}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productImage}</td>
                            <td>
                                <div className="button-container">
                                    <button onClick={() => handleEdit(product)} className="edit">
                                        <FaPencilAlt />
                                    </button>
                                    <button onClick={() => handleDelete(product.productId)} className="delete">
                                        <RiDeleteBinFill />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;