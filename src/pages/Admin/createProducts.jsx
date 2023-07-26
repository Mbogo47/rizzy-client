import React, { useState } from 'react';
import './create.css'
import { apiDomain } from '../../utils/utilsDomain';
import {toast} from 'react-toastify'

const CreateProductForm = () => {
  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    productPrice: '',
    category: '',
    productImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${ apiDomain }/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Product created successfully.', 'success-toast')
      } else {
        toast.error('Failed to create product.', 'error-toast')

      }
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error(error)
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className='create-form'>
      <div>
        <label htmlFor="productName">Product Name:</label>
        <input 
          type="text"
          id="productName"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          id="productDescription"
          name="productDescription"
          value={formData.productDescription}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          id="productPrice"
          name="productPrice"
          value={formData.productPrice}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="productImage">Product Image URL:</label>
        <input
          type="text"
          id="productImage"
          name="productImage"
          value={formData.productImage}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn-primary">Create Product</button>
    </form>
  );
};

export default CreateProductForm;
