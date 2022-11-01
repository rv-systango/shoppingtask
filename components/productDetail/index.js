import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import store from "../../redux/configureStore";
import { addToCart } from "../../redux/slices/cartSlice";
import { getProductDetails } from "../../redux/slices/productSlice";
import styles from "../../styles/productDetail.module.css";
import ButtonC from "../customButton";

export default function ProductDetail({ product, callback = () => {} }) {
  const offPercentage =
    product &&
    (100 - (product?.price * 100) / product?.compare_at_price).toFixed(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    function handleClick(tag){
      setSelectedOption(tag)
    }

    function handleAddToCard(){
      if(!selectedOption) return alert("Please select a available option.");
      setSelectedProduct({...product, selectedOption});
      store.dispatch(addToCart({...product, selectedOption}));
      callback();
    }


  const AvailableOption = (
    <div className={styles.Option}>
      <span>Available Options - </span>
      <span className={styles.OptionGroupBT}>
        {product?.options?.map((item, index) => {
          return (
            <div id={item.id} key={`avail-options-item-${index}-${item.id}`}>
              <ButtonC type={2} text={item.value} activeTag={selectedOption?.value} onClick={e => handleClick(item)}/>
            </div>
          );
        })}
      </span>
    </div>
  );

  return (
    <div>
      <Row>
        <Col xl={6}>
          <div className={styles.Image}></div>
          <img
            src={product?.image_src?.length ? product.image_src[0] : "-"}
            alt=""
          />
        </Col>
        <Col xl={6}>
          <div className={styles.ProductInfo}>
            <div className={styles.Vendor}>{product?.vendor}</div>
            <div className={styles.ProductName}>{product?.name}</div>
            <div className={styles.OfferPrice}>
              Category: <span>{product?.tag}</span>
            </div>
            <div className={styles.MRP}>
              MRP: <span>${product?.compare_at_price}.00</span>
            </div>
            <div className={styles.OfferPrice}>
              Offer Price: <span>${product?.price}.00</span>
              <div className={styles.OffPercentage}>
                ({offPercentage || "0"}% Off)
              </div>
            </div>
            <div className={styles.OptionsSection}>{AvailableOption}</div>
          </div>
          <br /><br />
          <Button disabled={selectedOption ? false : true} color="success" onClick={handleAddToCard}>{selectedOption ? "Add to Cart" : "Size ?"}</Button>
        </Col>
      </Row>
    </div>
  );
}
