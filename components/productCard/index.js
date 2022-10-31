import styles from "../../styles/productCard.module.css";


export default function ProductCard({ product, showDetails =() => {}, onClick=() => {} }) {
  return (
    <div className={styles.productCard} onClick={e => showDetails(product)}>
      <img
        src={product?.image_src[0] || "-"}
        alt=""
      />
      <div className={styles.productDetails}>
        <span className={styles.vendorName}>{product?.vendor || "-"}</span>
        <span className={styles.productName}>{product?.name || "-"}</span>
        <div className={styles.priceSection}>
          <span className={styles.sellingPrice}>${product?.price || "0"}</span>
          <span className={styles.actualPrice}>${product?.compare_at_price || "0"}</span>
          <span className={styles.offPercent}>({(100-(product?.price * 100) / product?.compare_at_price).toFixed(0) || "0"}% Off)</span>
        </div>
      </div>
    </div>
  );
}
