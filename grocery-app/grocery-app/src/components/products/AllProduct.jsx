import React from "react";
import ProductCard from "./ProductCard";
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import "./AllProduct.css";

const AllProduct = () => {
  const products = [
    {
      id: 1,
      productImage: img1,
      productName: "Product 1",
      productPrice: 100,
      countType: "1 each",
      discountPercent: 12,
    },
    {
      id: 2,
      productImage: img2,
      productName: "Product 2",
      productPrice: 200,
      countType: "1 each",
      discountPercent: 10,
    },
    {
      id: 3,
      productImage: img3,
      productName: "Product 3",
      productPrice: 300,
      countType: "1 each",
      discountPercent: 15,
    },
    {
      id: 4,
      productImage: img4,
      productName: "Product 4",
      productPrice: 400,
      countType: "1 each",
      discountPercent: 20,
    },
    {
      id: 5,
      productImage: img1,
      productName: "Product 5",
      productPrice: 500,
      countType: "1 each",
      discountPercent: 25,
    },
    {
      id: 6,
      productImage: img2,
      productName: "Product 6",
      productPrice: 600,
      countType: "1 each",
      discountPercent: 30,
    },
    {
      id: 7,
      productImage: img3,
      productName: "Product 7",
      productPrice: 700,
      countType: "1 each",
      discountPercent: 35,
    },
    {
      id: 8,
      productImage: img4,
      productName: "Product 8",
      productPrice: 800,
      countType: "1 each",
      discountPercent: 40,
    },
    {
      id: 9,
      productImage: img1,
      productName: "Product 9",
      productPrice: 900,
      countType: "1 each",
      discountPercent: 45,
    },
    {
      id: 10,
      productImage: img2,
      productName: "Product 10",
      productPrice: 1000,
      countType: "1 each",
      discountPercent: 50,
    },
    {
      id: 11,
      productImage: img3,
      productName: "Product 11",
      productPrice: 1100,
      countType: "1 each",
      discountPercent: 55,
    },
    {
      id: 12,
      productImage: img4,
      productName: "Product 12",
      productPrice: 1200,
      countType: "1 each",
      discountPercent: 60,
    },
  ];
  return (
    <div className="allProduct">
      <h1>All Products</h1>
      <div className="products">
        {products.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProduct;
