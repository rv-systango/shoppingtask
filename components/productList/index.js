import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/productList.module.css";
import ButtonC from "../customButton";
import ProductCard from "../productCard";

export default function ProductList({ products = null }) {
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    if (products) {
      let uiq = ["All Products"];
      products.map((i, index) => {
        if (!uiq.includes(i.tag)) {
          uiq.push(i.tag);
        }
      });
      setFilters(uiq);
    }
  }, [products]);
  return (
    <div className={styles.productListContainer}>
      <div className={styles.breadcrumb}>
        Home / Clothing / Mens Clothing / All Mens Clothing
      </div>
      <div className={styles.filterHeading}>
        All Products
        <span className={styles.filterSubHeading}>
          ({products && products?.length} Products)
        </span>
      </div>
      <div className={styles.filterSection}>
        <span>
          {/* get unique filters from data json */}
          Filters:
          <span className={styles.filterList}>
            {filters.length &&
              filters.map((item, index) => (
                <div key={`filter-item-${index}`}>
                  <ButtonC text={item} type={2} />
                </div>
              ))}
          </span>
        </span>
        <span>{/* Sort dropdown ... */}</span>
      </div>
      <div className={styles.productsList}>
        {products &&
          products.map((i, index) => (
            <div key={`product-item-${index}`}>
              <ProductCard product={i} />
            </div>
          ))}
      </div>
    </div>
  );
}
