import { useState } from "react";
import { useEffect } from "react";
import styles from "../../styles/productList.module.css";
import ButtonC from "../customButton";
import ProductCard from "../productCard";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ProductDetail from "../productDetail";
import { useSelector } from "react-redux";

export default function ProductList() {
  const [filters, setFilters] = useState([]);
  const [activeTag, setActiveTag] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProdutToView, setSelectedProdutToView] = useState(null);
  const products = useSelector((state) => state.productSlice.prodcuts);
  useEffect(() => {
    if (products) {
      setFilteredProducts([...products]);
      let uiq = ["All Products"];
      products.map((i, index) => {
        if (!uiq.includes(i.tag)) {
          uiq.push(i.tag);
        }
      });
      setFilters(uiq);
    }
  }, [products]);

  function filterData(tag = "All Products") {
    const data = [...products];
    setActiveTag(tag);
    if (tag === filters[0]) {
      setFilteredProducts(data);
    } else {
      let fData = data.filter((item, index) => item.tag === tag);
      setFilteredProducts(fData);
    }
  }

  return (
    <div className={styles.productListContainer}>
      <div className={styles.breadcrumb}>
        Home / Clothing / Mens Clothing / All Mens Clothing
      </div>
      <div className={styles.filterHeading}>
        All Products
        <span className={styles.filterSubHeading}>
          ({filteredProducts && filteredProducts?.length} Products)
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
                  <ButtonC
                    text={item}
                    type={2}
                    activeTag={activeTag}
                    onClick={(e) => filterData(item)}
                  />
                </div>
              ))}
          </span>
        </span>
        <span>{/* Sort dropdown ... */}</span>
      </div>
      <div className={styles.productsList}>
        {filteredProducts &&
          filteredProducts.map((i, index) => (
            <div key={`product-item-${index}`}>
              <ProductCard product={i} showDetails={setSelectedProdutToView} />
            </div>
          ))}
      </div>

      <Modal
        isOpen={selectedProdutToView ? true : false}
        backdrop="static"
        fade={true}
        size="lg"
        toggle={(e) => setSelectedProdutToView(!selectedProdutToView)}
      >
        <ModalHeader
          toggle={(e) => setSelectedProdutToView(!selectedProdutToView)}
        >
          <div className={styles.detailViewProductTitle}>
            {selectedProdutToView?.name}
          </div>
        </ModalHeader>
        <ModalBody>
          <ProductDetail
            product={selectedProdutToView}
            callback={() => {
              setSelectedProdutToView(null);
            }}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}
