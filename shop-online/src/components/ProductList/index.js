import { useEffect, useState } from "react";
import { getProductList } from "../../services/productServices";
import ProductItem from "./ProductItem";
import "./ProductList.scss";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result);
    }
    fetchApi();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <div className="product__list">
          {products.map(item => (
            <ProductItem item={item} key={item.id} />
          ))}
        </div>
      )}
    </>
  )
}

export default ProductList;