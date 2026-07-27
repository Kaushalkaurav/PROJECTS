import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import ProductForm from "../components/ProductForm";

import { addProduct } from "../features/product/productSlice";

import { toast } from "react-toastify";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    dispatch(addProduct(product));

    toast.success("Product Added Successfully!");

    navigate("/main/products");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <ProductForm
        buttonText="Add Product"
        onSubmit={handleAddProduct}
      />
    </div>
  );
};

export default AddProduct;