import React, { useState } from "react";

const ProductCard = ({
  productImages,
  brandName,
  productBrand,
  price,
  sizes = [],
}) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-200 to-white">
      <div className="h-[70%] w-full overflow-hidden">
        <img
          src={productImages[0]}
          alt={productBrand}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-2">
        <div className="mt-4">
          <h5 className="text-left">{brandName}</h5>
          <p className="text-tertiary">{productBrand}</p>
          <p className="text-xl font-medium text-red-500">₹ {price}</p>
        </div>

        {sizes.length > 0 && (
          <div className="mt-4">
            <h6 className="text-black text-sm text-left">Select Size:</h6>
            <div className="flex gap-2 mt-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 border rounded-md transition-all duration-300 ${
                    selectedSize === size
                      ? "border-red-500 text-red-500 font-semibold"
                      : "border-gray-300 hover:border-red-400"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quick Buy Button */}
        <button className="mt-4 w-full mx-auto bg-red-500 text-white py-2 rounded-md hover:opacity-85 transition-all duration-300">
          Quick Buy
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
