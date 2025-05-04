import "./ProductSideBar.css";
import AllProduct from "./AllProduct";
import CategorySideBar from "./CategorySideBar";

const ProductsSideBar = () => {
  return (
    <div className="productSideBar">
      <CategorySideBar />
      <AllProduct />
    </div>
  );
};

export default ProductsSideBar;
