import React from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import ProductForm from "../components/ProductForm";

import { updateProduct } from "../features/product/productSlice";

import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const product = useSelector((state) =>
    state.product.products.find(
      (item) => item.id === Number(id)
    )
  );

  if (!product) {
    return (
      <div className="text-center text-3xl mt-20">
        Product Not Found
      </div>
    );
  }

  const handleUpdate = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));

    toast.success("Product Updated Successfully!");

    navigate("/main/products");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <ProductForm
        initialData={product}
        buttonText="Update Product"
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default EditProduct;