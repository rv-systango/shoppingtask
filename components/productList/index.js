import styles from "../../styles/productList.module.css";
import ButtonC from "../customButton";
import ProductCard from "../productCard";


export default function ProductList({ products = null }) {
  return (
    <div className={styles.productListContainer}>
      <div className={styles.breadcrumb}>
        Home / Clothing / Mens Clothing / All Mens Clothing
      </div>
      <div className={styles.filterHeading}>
        All Products
        <span className={styles.filterSubHeading}>(25 Products)</span>
      </div>
      <div className={styles.filterSection}>
        <span>
          {/* get unique filters from data json */}
          Filters:
          <span className={styles.filterList}>
            <ButtonC text="All Products" type={2} />
            <ButtonC text="T-shirt" type={2} />
            <ButtonC text="Denim" type={2} />
            <ButtonC text="shirt" type={2} />
            <ButtonC text="jacket" type={2} />
          </span>
        </span>
        <span>{/* Sort dropdown ... */}</span>
      </div>
      <div className={styles.productsList}>
        {products && products.map((i, index) => (
          <div key={`product-item-${index}`}>
            <ProductCard product={i}/>
          </div>
        ))}
      </div>
    </div>
  );
}
