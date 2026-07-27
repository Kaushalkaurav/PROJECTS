import React, { useEffect, useState } from "react";

const ProductForm = ({
  initialData,
  onSubmit,
  buttonText = "Save Product",
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "electronics",
    price: "",
    stock: "",
    image: "",
    rating: "",
    reviews: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        description: initialData.description || "",
        category: initialData.category || "electronics",
        price: initialData.price || "",
        stock: initialData.stock || "",
        image: initialData.image || "",
        rating: initialData.rating?.rate || "",
        reviews: initialData.rating?.count || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.title.trim())
      newErrors.title = "Product title is required.";

    if (!formData.description.trim())
      newErrors.description = "Description is required.";

    if (!formData.image.trim())
      newErrors.image = "Image URL is required.";

    if (Number(formData.price) <= 0)
      newErrors.price = "Price must be greater than 0.";

    if (Number(formData.stock) < 0)
      newErrors.stock = "Stock cannot be negative.";

    if (
      Number(formData.rating) < 0 ||
      Number(formData.rating) > 5
    )
      newErrors.rating = "Rating must be between 0 and 5.";

    if (Number(formData.reviews) < 0)
      newErrors.reviews = "Reviews cannot be negative.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const product = {
      id: initialData?.id || Date.now(),

      title: formData.title,

      description: formData.description,

      category: formData.category,

      price: Number(formData.price),

      stock: Number(formData.stock),

      image: formData.image,

      rating: {
        rate: Number(formData.rating),
        count: Number(formData.reviews),
      },
    };

    onSubmit(product);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-6"
    >
      <h1 className="text-4xl font-bold text-center">
        {buttonText}
      </h1>

      {/* Title */}

      <div>
        <label className="font-semibold">Product Title</label>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mt-2"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.title}
        </p>
      </div>

      {/* Description */}

      <div>
        <label className="font-semibold">Description</label>

        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mt-2"
        />

        <p className="text-red-500 text-sm mt-1">
          {errors.description}
        </p>
      </div>

      {/* Category */}

      <div>
        <label className="font-semibold">Category</label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mt-2"
        >
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewellery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      {/* Price + Stock */}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold">Price ($)</label>

          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <p className="text-red-500 text-sm">
            {errors.price}
          </p>
        </div>

        <div>
          <label className="font-semibold">Stock</label>

          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <p className="text-red-500 text-sm">
            {errors.stock}
          </p>
        </div>
      </div>

      {/* Rating + Reviews */}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold">Rating</label>

          <input
            type="number"
            step="0.1"
            max="5"
            min="0"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <p className="text-red-500 text-sm">
            {errors.rating}
          </p>
        </div>

        <div>
          <label className="font-semibold">Review Count</label>

          <input
            type="number"
            name="reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <p className="text-red-500 text-sm">
            {errors.reviews}
          </p>
        </div>
      </div>

      {/* Image */}

      <div>
        <label className="font-semibold">Image URL</label>

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border rounded-xl p-3 mt-2"
        />

        <p className="text-red-500 text-sm">
          {errors.image}
        </p>
      </div>

      {/* Live Preview */}

      {formData.image && (
        <div className="border rounded-2xl p-6 flex justify-center">
          <img
            src={formData.image}
            alt="Preview"
            className="h-52 object-contain"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/300x300?text=No+Image";
            }}
          />
        </div>
      )}

      <button className="w-full bg-lime-400 text-black py-4 rounded-2xl font-bold hover:bg-lime-500 transition">
        {buttonText}
      </button>
    </form>
  );
};

export default ProductForm;