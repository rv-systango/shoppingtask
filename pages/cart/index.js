import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import ButtonC from "../../components/customButton";
import Header from "../../components/header";
import InviteBanner from "../../components/inviteBanner";
import styles from "../../styles/cart.module.css";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  const router = useRouter();

  function onBackHandler() {
    router.push("/", undefined, { shallow: true });
  }
  return (
    <div className={styles.cartContainer}>
      <Header />
      <InviteBanner />

      <div className={styles.cartBody}>
        <div className={styles.cartHeader}>
          <span>
            <ButtonC text="Back" onClick={onBackHandler} />
          </span>
        </div>
        {cartItems &&
          cartItems.length &&
          cartItems.map((i, index) => {
            return (
              <div className={styles.cartItem}>
                <div>{i.id}</div>
                <div className={styles.imgsrc}><img src={i.image_src} /></div>
                <div>{i.vendor}</div>
                <div>{i.name}</div>
                <div>{i.tag}</div>
                <div>{i.selectedOption.value}</div>
                <div>${i.price}.00</div>
                <div>
                  <ButtonC text={"Remove"} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
